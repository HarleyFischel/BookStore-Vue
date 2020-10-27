<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column align-items-start">
                <h2>All books</h2><span class="text-muted">list of all books</span>
            </div>
            <router-link to="/add" class="btn btn-primary">Add new book</router-link>
        </div>
        <div class="table-responsive mt-5 bg-white">
            <div class="text-center" v-if="isLoading">Fetching Books</div>
            <div class="text-center" v-if="isDeleting">Deleting Book</div>

            <b-table v-if="!isLoading && items.length" class="table" responsive hover :items="items" :fields="fields">
                <template #cell(title)="data">
		    <router-link :to="`/${data.item.id}`">{{ data.value }}</router-link>
		</template>
		<template #cell(image)="data">
		  <img :src="data.value" />
		</template>
		<template #cell(actions)="data">
		  <div class="button-group">
		    <router-link :to="`/${data.item.id}`" class="btn btn-sm btn-secondary">view</router-link>
		    <router-link :to="`/edit/${data.item.id}`" class="btn btn-sm btn-secondary">edit</router-link>
		    <button class="btn btn-sm btn-secondary" :id="`${data.item.id}`" @click="deleteBook">Delete</button>
		  </div>
		</template>
            </b-table>
            <div class="text-center" v-if="!isLoading && !items.length">No books found</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Books',
  mounted () {
    this.fetchBooks()
  },
  data () {
    return {
      items: [
        { "id": "", "title": "", "subtitle": "", "author": "", "image": "" }
      ],
      fields: [
        {
          key: 'id',
          sortable: true
        },
        {
          key: 'title',
          sortable: true
        },
        {
          key: 'subtitle',
          sortable: false
        },
        {
          key: 'author',
          sortable: true
        },
        {
          key: 'image',
          sortable: false
        },
        {
          key: 'actions',
          sortable: false
        },
      ],
      isLoading: true,
      id: null,
      isDeleting: false
    }
  },
  methods: {
    async fetchBooks () {
      try {
        this.items = (await axios.get(`${process.env.API_URL}/api/inventory/`)).data
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
      this.isLoading = false
    },
    async deleteBook (event) {
      if (confirm('Are you sure you wish to delete this record?')===false) return;
      this.isDeleting = true
      try {
        await axios.delete(`${process.env.API_URL}/api/inventory/${event.target.id}`, this.model)
	this.fetchBooks()
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
      this.isDeleting = false
    }
  }

}
</script>
<style>
img {
    max-height: 180px;
}
</style>
<style scoped>
</style>
