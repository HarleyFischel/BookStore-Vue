<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column align-items-start">
                <h2>Edit Book</h2><span class="text-muted">Edit record</span>
            </div>
            <div>
                <router-link to="/" class="btn btn-outline-secondary">back</router-link>
                <router-link to="/add" class="btn btn-primary">Add new book</router-link>
            </div>
        </div>
        <div class="card pl-4 pt-5 pb-5 pr-4 mt-5">
            <form action="" @submit.prevent="updateBook">
                <vue-form-generator tag="div" :schema="schema" :model="model" />
                <div class="d-flex justify-content-end mt-3 pr-4">
		    <router-link :to="`/`" class="btn btn-lg btn-secondary">cancel</router-link>
                    <button class="btn btn-primary btn-lg">
                        {{ isSaving ? 'Saving...' : 'Update'}}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import bookFormSchema from '../forms/bookFormSchema'
import axios from 'axios'

export default {
  name: 'EditBook',
  mounted () {
    this.fetchBook(this.$route.params.id)
  },
  data () {
    return {
      model: {},
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
    },
    async updateBook () {
      this.isSaving = true
      try {
        await axios.put(`${process.env.API_URL}/api/inventory/${this.id}`, this.model)
        //alert('Book updated')
        this.fetchBook(this.$route.params.id)
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
      this.isSaving = false
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
