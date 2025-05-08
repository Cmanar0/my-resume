<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const post = ref({
  title: 'Getting Started with Vue 3 and TypeScript',
  content: `
    <p>Vue 3 and TypeScript are a powerful combination for building modern web applications. In this guide, we'll explore how to set up a new Vue 3 project with TypeScript and implement some best practices for type safety.</p>
    
    <h2>Setting Up Your Project</h2>
    <p>First, let's create a new Vue 3 project with TypeScript support. You can use the Vue CLI or Vite to scaffold your project.</p>
    
    <h2>Type Safety Best Practices</h2>
    <p>TypeScript provides excellent type safety features that can help catch errors early in development. Here are some best practices to follow:</p>
    <ul>
      <li>Always define interfaces for your component props</li>
      <li>Use type inference when possible</li>
      <li>Leverage TypeScript's utility types</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>By combining Vue 3 with TypeScript, you can build more robust and maintainable applications. The type safety features help catch errors early and provide better developer experience.</p>
  `,
  date: '2024-05-01',
  readTime: '5 min read',
  category: 'Vue.js',
  author: 'Marian Adamus'
})

onMounted(() => {
  // In a real application, you would fetch the post data based on the route.params.slug
  useHead({
    title: `${post.value.title} | Marian Adamus Blog`,
    meta: [
      {
        name: 'description',
        content: 'Learn how to set up a modern Vue 3 project with TypeScript and best practices for type safety.'
      },
      {
        name: 'keywords',
        content: 'Vue.js, TypeScript, web development, programming, frontend'
      },
      {
        property: 'og:title',
        content: `${post.value.title} | Marian Adamus Blog`
      },
      {
        property: 'og:description',
        content: 'Learn how to set up a modern Vue 3 project with TypeScript and best practices for type safety.'
      },
      {
        property: 'og:type',
        content: 'article'
      },
      {
        property: 'og:url',
        content: `https://marianadamus.com/blog/${route.params.slug}`
      },
      {
        property: 'article:published_time',
        content: post.value.date
      },
      {
        property: 'article:author',
        content: post.value.author
      }
    ]
  })
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="p-8">
          <div class="flex items-center gap-2 mb-6">
            <span class="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              {{ post.category }}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ post.readTime }}</span>
          </div>
          
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {{ post.title }}
          </h1>
          
          <div class="flex items-center gap-4 mb-8">
            <img
              src="/Avatar-nobg.png"
              alt="Marian Adamus"
              class="w-12 h-12 rounded-full"
            />
            <div>
              <p class="font-medium text-gray-900 dark:text-white">{{ post.author }}</p>
              <time :datetime="post.date" class="text-sm text-gray-500 dark:text-gray-400">
                {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </time>
            </div>
          </div>
          
          <div class="prose dark:prose-invert max-w-none" v-html="post.content"></div>
        </div>
      </article>
      
      <div class="mt-8">
        <router-link to="/blog" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
          ← Back to Blog
        </router-link>
      </div>
    </div>
  </div>
</template> 