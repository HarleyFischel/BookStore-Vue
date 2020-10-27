<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column align-items-start">
                <h2>Add New</h2><span class="text-muted">Add new record</span>
            </div>
            <router-link to="/" class="btn btn-outline-secondary">back</router-link>
        </div>
        <div class="card pl-4 pt-5 pb-5 pr-4 mt-5">
            <form action="" @submit.prevent="saveBook">
                <vue-form-generator tag="div" :schema="schema" :options="formOptions" :model="model" />
                <div class="d-flex justify-content-end mt-3 pr-4">
		    <router-link :to="`/`" class="btn btn-lg btn-secondary">cancel</router-link>
                    <button type="submit" class="btn btn-primary btn-lg">
                        {{ isSaving ? 'Saving...' : 'Submit'}}
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
  name: 'AddBook',
  mounted () {
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
      formOptions: {
        validateAfterChanged: true
      },
      isSaving: false
    }
  },
  methods: {
    async saveBook () {
      try {
        await axios.post(`${process.env.API_URL}/api/inventory/`, 
          this.model
        ).then(function (response) {
          console.log(response.request);
          console.log(response.data);
        });
        //alert('Saved Successfully')
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
