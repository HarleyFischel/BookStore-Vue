
import Vue from 'vue'
import Router from 'vue-router'
import Books from '../pages/Books'
import AddBook from '../pages/AddBook'
import ViewBook from '../pages/ViewBook'
import EditBook from '../pages/EditBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books
    },
    {
      path: '/add',
      name: 'AddBook',
      component: AddBook
    },
    {
      path: '/:id',
      name: 'ViewBook',
      component: ViewBook
    },
    {
      path: '/edit/:id',
      name: 'EditBook',
      component: EditBook
    }
  ]
})
