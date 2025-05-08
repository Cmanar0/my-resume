import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import App from '../App.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 