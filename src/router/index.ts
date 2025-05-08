import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/Blog.vue')
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('../pages/BlogPost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router 