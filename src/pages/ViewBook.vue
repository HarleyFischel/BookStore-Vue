<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column align-items-start">
                <h2>Book Info</h2><span class="text-muted">View record</span>
            </div>
            <div>
                <router-link to="/" class="btn btn-outline-secondary">back</router-link>
                <router-link to="/add" class="btn btn-primary">Add new book</router-link>
            </div>
        </div>
        <div class="card pl-4 pt-5 pb-5 pr-4 mt-5">
		<div>
                    <img :src="model.image">
                    <h2>{{ model.title }}</h2>
                    <h3>{{ model.subtitle }}</h3>
                    <h4>{{ model.author }}</h4>
                    <p>{{ model.description }}</p>
                </div>
                <div class="d-flex justify-content-end mt-3 pr-4">
		    <router-link :to="`/`" class="btn btn-lg btn-secondary">back</router-link>
		    <router-link :to="`/edit/${model.id}`" class="btn btn-lg btn-primary">edit</router-link>
                </div>
        </div>
    </div>
</template>

<script>
import bookFormSchema from '../forms/bookFormSchema'
import axios from 'axios'

export default {
  name: 'ViewBook',
  mounted () {
    this.fetchBook(this.$route.params.id)
  },
  data () {
    return {
      model: {
        title: '',
        subtitle: '',
        author: '',
        image: ''
      },
      schema: bookFormSchema,
      id: this.$route.params.id,
      isSaving: false
    }
  },
  methods: {
    async fetchBook () {
      try {
        this.model = (await axios.get(`${process.env.API_URL}/api/inventory/${this.id}`)).data
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
    }
  }
}
</script>

<style>
.card {
text-align:left
}
.card img {
float:left;
margin-right:10px;
margin-bottom:4px;
max-height: 280px;
}
.card h2 {
font-size:1.8rem;
}
.card h3 {
font-size:1.4rem;
}
.card h4 {
font-size:1.2rem;
}
.card p {
font-size:1rem;
}
</style>
