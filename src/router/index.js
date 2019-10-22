import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Cart from '@/view/Cart'
import Mine from '@/view/Mine'
import Sort from '@/view/Sort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    }
  ]
})
