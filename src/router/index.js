import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Tests from '../views/Tests.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path : '/tests',
      name : 'tests',
      component : Tests
    }
  ]
})

export default router
