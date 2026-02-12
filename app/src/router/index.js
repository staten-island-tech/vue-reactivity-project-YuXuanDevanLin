import { createRouter, createWebHistory } from 'vue-router'
import sample from '@/views/sample.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sample',
      component: sample,
    },
  ],
})

export default router
