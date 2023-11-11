import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/pages/HomePage.vue"
import AllProducts from "@/pages/AllProducts.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/products',
      name: 'AllProducts',
      component: AllProducts
    },
  ]
});

export default router