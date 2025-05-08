<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { fetchAPI } from '../lib/datocms'
import type { Post, Topic, Author } from '../types/blog'

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

const posts = ref<Post[]>([])
const topics = ref<Topic[]>([
  { id: null, topic: 'All Topics', active: true },
  { id: 'GsRPQIccTIC7p41OiRNnBg', topic: 'Web Application Development', active: false },
  { id: 'K3LciW3iQp21ucAPj88umw', topic: 'Frontend', active: false },
  { id: 'JMXWHHPlSjeMbyyWHVFenA', topic: 'Social Media Management', active: false },
  { id: 'W7Yh9wZEQCuvhWJSb8iUrQ', topic: 'Online Marketing', active: false },
  { id: 'P8n4pCIlTaiNcyLfyDTjyg', topic: 'SEO', active: false },
  { id: 'OQDlbBVRTn6DuCT7hAxtnw', topic: 'Backend', active: false }
])
const authors = ref<Author[]>([
  { id: null, name: 'All Authors', active: true }
])
const activeTopics = ref<(string | null)[]>([])
const activeAuthors = ref<(string | null)[]>([])
const rerender = ref(0)

const fetchPosts = async (selectedTopics: (string | null)[] = [], selectedAuthors: (string | null)[] = []) => {
  const query = `
    {
      allArticles(
        filter: {
          ${selectedTopics.length > 0 ? `topics: { anyIn: ${JSON.stringify(selectedTopics)} }` : ''}
          ${selectedAuthors.length > 0 ? `author: { eq: ${JSON.stringify(selectedAuthors[0])} }` : ''}
        }
      ) {
        id
        title
        _status
        _firstPublishedAt
        slug
        content
        author {
          id
          name
        }
        topics {
          id
          topic
        }
      }
    }
  `
  
  try {
    const data = await fetchAPI<{ allArticles: Post[] }>(query)
    posts.value = data.allArticles

    // Extract unique authors from posts
    const uniqueAuthors = new Map<string, Author>()
    uniqueAuthors.set('all', { id: null, name: 'All Authors', active: true })
    
    data.allArticles.forEach(post => {
      if (post.author?.id) {
        uniqueAuthors.set(post.author.id, {
          id: post.author.id,
          name: post.author.name,
          active: false
        })
      }
    })
    
    authors.value = Array.from(uniqueAuthors.values())
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const toggleTopic = (topic: Topic) => {
  // If clicking "All Topics"
  if (topic.id === null) {
    // If it was already active, do nothing
    if (topic.active) return
    
    // Otherwise, deactivate all other topics and activate "All Topics"
    topics.value.forEach(t => t.active = t.id === null)
    activeTopics.value = []
  } else {
    // If clicking a specific topic
    topic.active = !topic.active
    
    // If activating a specific topic, deactivate "All Topics"
    if (topic.active) {
      const allTopics = topics.value.find(t => t.id === null)
      if (allTopics) allTopics.active = false
    }
    
    // Update active topics
    activeTopics.value = topics.value
      .filter(t => t.active && t.id !== null)
      .map(t => t.id)
    
    // If no topics are selected, activate "All Topics"
    if (activeTopics.value.length === 0) {
      const allTopics = topics.value.find(t => t.id === null)
      if (allTopics) allTopics.active = true
    }
  }
  
  // Fetch posts with updated filters
  fetchPosts(activeTopics.value, activeAuthors.value)
  rerender.value++
}

const toggleAuthor = (author: Author) => {
  // If clicking "All Authors"
  if (author.id === null) {
    // If it was already active, do nothing
    if (author.active) return
    
    // Otherwise, deactivate all other authors and activate "All Authors"
    authors.value.forEach(a => a.active = a.id === null)
    activeAuthors.value = []
  } else {
    // If clicking a specific author
    author.active = !author.active
    
    // If activating a specific author, deactivate "All Authors"
    if (author.active) {
      const allAuthors = authors.value.find(a => a.id === null)
      if (allAuthors) allAuthors.active = false
    }
    
    // Update active authors
    activeAuthors.value = authors.value
      .filter(a => a.active && a.id !== null)
      .map(a => a.id)
    
    // If no authors are selected, activate "All Authors"
    if (activeAuthors.value.length === 0) {
      const allAuthors = authors.value.find(a => a.id === null)
      if (allAuthors) allAuthors.active = true
    }
  }
  
  // Fetch posts with updated filters
  fetchPosts(activeTopics.value, activeAuthors.value)
  rerender.value++
}

onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">Thoughts on web development and technology</p>
      </div>

      <!-- Topics Filter -->
      <div class="mb-8">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by Topic:</h2>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="topic in topics"
            :key="topic.id || 'all'"
            @click="toggleTopic(topic)"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            :class="[
              topic.active
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
          >
            {{ topic.topic }}
          </button>
        </div>
      </div>

      <!-- Authors Filter -->
      <div class="mb-8">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by Author:</h2>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="author in authors"
            :key="author.id || 'all'"
            @click="toggleAuthor(author)"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            :class="[
              author.active
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
          >
            {{ author.name }}
          </button>
        </div>
      </div>

      <!-- Posts Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" 
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                {{ post._status }}
              </span>
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              <router-link :to="`/blog/${post.slug}`" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {{ post.title }}
              </router-link>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ post.content.substring(0, 150) }}...</p>
            <div class="flex items-center justify-between">
              <time :datetime="post._firstPublishedAt" class="text-sm text-gray-500 dark:text-gray-400">
                {{ new Date(post._firstPublishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
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