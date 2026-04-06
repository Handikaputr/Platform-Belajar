import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PilihMateriView from '../views/PilihMateriView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pilih-materi',
      name: 'pilih-materi',
      component: PilihMateriView,
    },
  ],
})

export default router
