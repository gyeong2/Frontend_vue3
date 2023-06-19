import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExamOne from '../views/ExamOne.vue'
import ExamTwo from '../views/ExamTwo.vue'
import BookCreate from '../views/BookCreateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/BookList',
    name: 'BookList',
    component: ExamOne
  },
  {
    path: '/BookList2',
    name: 'BookList2',
    component: ExamTwo
  }, 
  {
    path: '/book/:id', 
    name: 'BookCreate', 
    component: BookCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
