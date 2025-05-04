import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import SeeMore from '@/views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children:[
        {path:'' , component:HomeView} ,
        {path : '/products' , component: SeeMore}
      ]
    }
  ],
})

export default router
