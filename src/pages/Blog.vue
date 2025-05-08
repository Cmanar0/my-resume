<script setup lang="ts">
import { ref, onMounted } from 'vue'
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

const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)
const filterRef = ref<HTMLElement | null>(null)
const postsRef = ref<HTMLElement | null>(null)

const visibleButtons = ref<number[]>([])

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
        featuredImage {
          url
          alt
          width
          height
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

const showButtonsSequentially = () => {
  const totalButtons = topics.value.length
  let currentIndex = 0

  const showNextButton = () => {
    if (currentIndex < totalButtons) {
      visibleButtons.value.push(currentIndex)
      currentIndex++
      setTimeout(showNextButton, 300)
    }
  }

  showNextButton()
}

onMounted(() => {
  fetchPosts()
  showButtonsSequentially()
})
</script>

<template>
  <div class="min-h-screen w-screen bg-black text-white">
    <!-- Hero Section with Filters -->
    <section ref="sectionRef" class="min-h-[80vh] flex flex-col items-center justify-between relative overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-black opacity-20"></div>
      
      <!-- Main Content -->
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-32 max-w-4xl mx-auto pt-32">
        <h1 ref="titleRef" class="text-4xl font-bold text-center mb-32 text-white relative">
          Blog
          <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </h1>
      </div>

      <!-- Topics Filter -->
      <div class="relative z-10 w-full px-4 sm:px-6 lg:px-32 pb-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-lg font-semibold text-white mb-6 text-center">Filter by Topic:</h2>
          <div ref="filterRef" class="flex flex-wrap justify-center gap-2">
            <button
              v-for="(topic, index) in topics"
              :key="topic.id || 'all'"
              @click="toggleTopic(topic)"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform translate-y-4 opacity-0"
              :class="[
                visibleButtons.includes(index) ? 'translate-y-0 opacity-100' : '',
                topic.active
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-gray-900/50 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border border-gray-700'
              ]"
            >
              {{ topic.topic }}
            </button>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div ref="descriptionRef" class="relative z-10 text-center px-4 sm:px-6 lg:px-20 max-w-4xl mx-auto py-32">
        <h3 class="text-3xl font-semibold text-center">
          I'm documenting my journey from
          <span class="bg-gradient-to-r from-[#007EF0] to-[#00DBD9] bg-clip-text text-transparent">Junior</span>
          to
          <span class="bg-gradient-to-r from-[#7B28C8] to-[#FD0182] bg-clip-text text-transparent">Senior</span>. 
          <br>
          Let's become a
          <span class="bg-gradient-to-r from-[#FF4F4D] to-[#FAC42B] bg-clip-text text-transparent">Django Developer</span>
          together.
        </h3>
      </div>
    </section>

    <!-- Blog Content -->
    <div class="w-full px-4 sm:px-6 lg:px-32 py-16">
      <!-- Posts Grid -->
      <div ref="postsRef" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[2000px] mx-auto">
        <article v-for="post in posts" :key="post.id" 
          class="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-black/50 transition-all duration-300 cursor-pointer"
          @click="() => $router.push(`/blog/${post.slug}`)">
          <!-- Featured Image -->
          <div class="relative w-full aspect-[16/9] overflow-hidden rounded-t-xl">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 z-10 rounded-t-xl"></div>
            <img
              v-if="post.featuredImage?.url"
              :src="post.featuredImage.url"
              :alt="post.featuredImage.alt || post.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
              loading="lazy"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-t-xl">
              <svg class="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-transparent via-gray-900/20 to-gray-900/60 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-t-xl"></div>
          </div>

          <!-- Content -->
          <div class="p-8 relative">
            <!-- Publishing Date Badge -->
            <div class="absolute -top-4 right-8">
              <span class="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500/80 to-purple-500/80 rounded-full shadow-lg shadow-indigo-500/10">
                {{ new Date(post._firstPublishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </span>
            </div>

            <!-- Title and Excerpt -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white transition-all duration-300">
                <router-link :to="`/blog/${post.slug}`" class="hover:no-underline">
                  {{ post.title }}
                </router-link>
              </h2>
              <p class="text-gray-600 dark:text-gray-300 line-clamp-3">{{ post.content.substring(0, 150) }}...</p>
            </div>

            <!-- Tags -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="topic in post.topics"
                :key="topic.id || topic.topic"
                class="px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-700"
              >
                {{ topic.topic }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>