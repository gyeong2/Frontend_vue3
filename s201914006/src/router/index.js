import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ProductEdit from '../views/ProductEdit.vue'
import CounterView from '../views/CounterView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ProductView',
    name: 'ProductView',
    component: ProductView
  },
  {
    path: '/edit/:id',
    name: 'ProductEdit',
    component: ProductEdit
  },
  {
    path: '/CounterView',
    name: 'CounterView',
    component: CounterView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
