import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rapor',
    name: 'Rapor',
    component: () => import('../views/Rapor.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
