<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { fetchAPI } from '../lib/datocms'
import type { Post, Topic, Author } from '../types/blog'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()

useHead({
  title: 'Blog | Marian Adamus',
  meta: [
    {
      name: 'description',
      content: 'Read my latest thoughts on web development, programming, and technology. Articles about frontend, backend, and full-stack development.'
    },
    {
      name: 'keywords',
      content: 'blog, web development, programming, technology, Vue.js, React, TypeScript, frontend, backend, full-stack'
    },
    {
      property: 'og:title',
      content: 'Blog | Marian Adamus'
    },
    {
      property: 'og:description',
      content: 'Read my latest thoughts on web development, programming, and technology. Articles about frontend, backend, and full-stack development.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://marianadamus.com/blog'
    },
    {
      property: 'og:image',
      content: 'https://marianadamus.com/avatar.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Blog | Marian Adamus'
    },
    {
      name: 'twitter:description',
      content: 'Read my latest thoughts on web development, programming, and technology. Articles about frontend, backend, and full-stack development.'
    },
    {
      name: 'twitter:image',
      content: 'https://marianadamus.com/avatar.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://marianadamus.com/blog'
    }
  ]
})

const posts = ref<Post[]>([])
const topics = ref<Topic[]>([
  { id: null, topic: 'All Topics', active: true },
  { id: 'K3LciW3iQp21ucAPj88umw', topic: 'Frontend', active: false },
  { id: 'OQDlbBVRTn6DuCT7hAxtnw', topic: 'Backend', active: false },
  { id: 'P8n4pCIlTaiNcyLfyDTjyg', topic: 'SEO', active: false },
  { id: 'data-topic', topic: 'Data', active: false },
  { id: 'database-topic', topic: 'Database', active: false },
  { id: 'django-topic', topic: 'Django', active: false },
  { id: 'devops-topic', topic: 'DevOps', active: false },
  { id: 'networking-topic', topic: 'Networking', active: false },
  { id: 'ai-topic', topic: 'AI', active: false },
  { id: 'security-topic', topic: 'Security', active: false }
])
const authors = ref<Author[]>([
  { id: null, name: 'All Authors', active: true }
])
const activeTopics = ref<(string | null)[]>([])
const activeAuthors = ref<(string | null)[]>([])
const rerender = ref(0)
const isLoading = ref(true)

const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)
const filterRef = ref<HTMLElement | null>(null)
const postsRef = ref<HTMLElement | null>(null)

const visibleButtons = ref<number[]>([])

const fetchPosts = async (selectedTopics: (string | null)[] = [], selectedAuthors: (string | null)[] = []) => {
  isLoading.value = true
  const query = `
    {
      allArticles(
        filter: {
          ${selectedAuthors.length > 0 ? `author: { eq: ${JSON.stringify(selectedAuthors[0])} }` : ''}
        }
      ) {
        id
        title
        _status
        _firstPublishedAt
        slug
        description
        content
        author {
          id
          name
        }
        topics {
          id
          topic
        }
        seo {
          title
          description
          image {
            url
          }
          noIndex
          twitterCard
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
    
    // Filter posts by selected topics
    if (selectedTopics.length > 0) {
      posts.value = data.allArticles.filter(post => 
        post.topics.some(topic => selectedTopics.includes(topic.topic))
      )
    } else {
      posts.value = data.allArticles
    }
    
    // Extract unique authors from posts
    const uniqueAuthors = new Map<string, Author>()
    uniqueAuthors.set('all', { id: null, name: 'All Authors', active: true })
    
    data.allArticles.forEach(post => {
      if (post.author && post.author.length > 0) {
        post.author.forEach(author => {
          if (author.id) {
            uniqueAuthors.set(author.id, {
              id: author.id,
              name: author.name,
              active: false
            })
          }
        })
      }
    })
    
    authors.value = Array.from(uniqueAuthors.values())
  } catch (error) {
    console.error('Error fetching posts:', error)
  } finally {
    isLoading.value = false
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
      .map(t => t.topic) // Use topic name instead of ID
    
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
  showButtonsSequentially()

  // Animate title
  if (titleRef.value) {
    gsap.from(titleRef.value, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    })
  }

  // Animate description
  if (descriptionRef.value) {
    gsap.from(descriptionRef.value, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    })
  }

  // Animate posts
  if (postsRef.value) {
    gsap.from(postsRef.value.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: postsRef.value,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    })
  }
})

watch(
  () => route.query.topic,
  (newTopic) => {
    // If there's a topic in the URL
    if (newTopic) {
      // Find the topic in our topics list
      const topicToActivate = topics.value.find(t => t.topic === newTopic)
      if (topicToActivate) {
        // Deactivate all topics first
        topics.value.forEach(t => t.active = false)
        // Activate the matching topic
        topicToActivate.active = true
        // Update active topics
        activeTopics.value = [topicToActivate.topic]
      }
    } else {
      // If no topic in URL, activate "All Topics"
      topics.value.forEach(t => t.active = t.id === null)
      activeTopics.value = []
    }
    
    // Fetch posts with current filters
    fetchPosts(activeTopics.value, activeAuthors.value)
  },
  { immediate: true }
)
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
          <span class="bg-gradient-to-r from-[#FF4F4D] to-[#FAC42B] bg-clip-text text-transparent">Full Stack Developer</span>
          together.
        </h3>
      </div>
    </section>

    <!-- Blog Content -->
    <div class="w-full px-4 sm:px-6 lg:px-32 py-16">
      <!-- Loading State -->
      <div v-if="isLoading" class="flex flex-col items-center justify-center min-h-[50vh]">
        <div class="relative w-16 h-16 mb-4">
          <div class="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
          <div class="absolute inset-0 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
        <div class="text-gray-400 text-lg">Loading articles...</div>
      </div>

      <!-- Posts Grid -->
      <div v-else ref="postsRef" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[2000px] mx-auto">
        <article v-for="post in posts" :key="post.id" 
          class="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-black/50 transition-all duration-300 cursor-pointer"
          @click="() => $router.push(`/blog/${post.slug}`)">
          <!-- Featured Image -->
          <div class="relative w-full aspect-[16/9] overflow-hidden rounded-t-xl">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500/10 z-10 rounded-t-xl"></div>
            <img
              v-if="post.featuredImage?.url"
              :src="post.featuredImage.url"
              :alt="post.featuredImage.alt || post.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
              loading="lazy"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-b from-transparent to-gray-900/50 rounded-t-xl">
              <svg class="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/60 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-t-xl"></div>
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
              <h2 class="text-2xl font-bold text-white group-hover:text-white transition-all duration-300 text-left">
                <router-link :to="`/blog/${post.slug}`" class="text-white hover:no-underline">
                  {{ post.title }}
                </router-link>
              </h2>
              <p class="text-gray-600 dark:text-gray-300 line-clamp-3 text-left">{{ post.description.substring(0, 250) }}...</p>
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

<style>
/* Add loading animation keyframes */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>