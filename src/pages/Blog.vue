<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Blog | Marian Adamus',
  meta: [
    {
      name: 'description',
      content: 'Read my latest thoughts on web development, programming, and technology.'
    },
    {
      name: 'keywords',
      content: 'blog, web development, programming, technology, Vue.js, React, TypeScript'
    },
    {
      property: 'og:title',
      content: 'Blog | Marian Adamus'
    },
    {
      property: 'og:description',
      content: 'Read my latest thoughts on web development, programming, and technology.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://marianadamus.com/blog'
    }
  ]
})

const posts = ref([
  {
    id: 1,
    title: 'Getting Started with Vue 3 and TypeScript',
    excerpt: 'Learn how to set up a modern Vue 3 project with TypeScript and best practices for type safety.',
    date: '2024-05-01',
    readTime: '5 min read',
    category: 'Vue.js',
    slug: 'getting-started-with-vue3-typescript'
  },
  {
    id: 2,
    title: 'Building Responsive UIs with Tailwind CSS',
    excerpt: 'A comprehensive guide to creating beautiful, responsive user interfaces using Tailwind CSS.',
    date: '2024-04-15',
    readTime: '7 min read',
    category: 'CSS',
    slug: 'building-responsive-uis-tailwind'
  },
  {
    id: 3,
    title: 'State Management in Modern Web Applications',
    excerpt: 'Exploring different state management solutions and when to use them in your web applications.',
    date: '2024-04-01',
    readTime: '8 min read',
    category: 'Web Development',
    slug: 'state-management-modern-web'
  }
])
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">Thoughts on web development and technology</p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" 
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                {{ post.category }}
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ post.readTime }}</span>
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              <router-link :to="`/blog/${post.slug}`" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {{ post.title }}
              </router-link>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ post.excerpt }}</p>
            <div class="flex items-center justify-between">
              <time :datetime="post.date" class="text-sm text-gray-500 dark:text-gray-400">
                {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </time>
              <router-link :to="`/blog/${post.slug}`" 
                class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
                Read more →
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template> 