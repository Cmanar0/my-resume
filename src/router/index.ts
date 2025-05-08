import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, RouteLocationNormalized, ScrollPosition } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue'),
    children: [
      {
        path: '',
        name: 'intro',
        component: () => import('../components/Intro.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../components/About.vue')
      },
      {
        path: 'experience',
        name: 'experience',
        component: () => import('../components/Experience.vue')
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('../components/Projects.vue')
      },
      {
        path: 'skills',
        name: 'skills',
        component: () => import('../components/Skills.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../components/Contact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    savedPosition: ScrollPosition | null
  ) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 