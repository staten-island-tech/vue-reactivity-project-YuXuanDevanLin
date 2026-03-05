import { createRouter, createWebHistory } from 'vue-router'
import Fishing from '@/views/fishingShore.vue'
import Market from '@views/fishMarket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Fishing',
      component: Fishing,
    },
    {
      path: '/market',
      name: 'Market',
      component: Market,
    },
  ],
})

export default router
