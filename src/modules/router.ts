import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../App.vue'),
    },
  ],
  history: createWebHistory(),
})

export default router
