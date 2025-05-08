<script setup lang="ts">
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { fetchAPI } from '../lib/datocms'
import type { Post } from '../types/blog'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MarkdownIt from 'markdown-it'

gsap.registerPlugin(ScrollTrigger)

const md = new MarkdownIt()
const route = useRoute()
const post = ref<Post | null>(null)
const contentRef = ref<HTMLElement | null>(null)

const fetchPost = async (slug: string) => {
  const query = `
    {
      article(filter: { slug: { eq: "${slug}" } }) {
        id
        title
        slug
        description
        content
        _status
        _firstPublishedAt
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
          alt
          url
          width
          height
        }
      }
    }
  `
  
  try {
    const data = await fetchAPI<{ article: Post }>(query)
    post.value = data.article
    console.log('Fetched post:', data.article)
  } catch (error) {
    console.error('Error fetching post:', error)
  }
}

// Computed properties for SEO metadata
const seoTitle = computed(() => post.value?.seo?.title || post.value?.title)
const seoDescription = computed(() => post.value?.seo?.description || post.value?.description)
const seoImage = computed(() => post.value?.seo?.image?.url || post.value?.featuredImage?.url)
const twitterCard = computed(() => post.value?.seo?.twitterCard || 'summary_large_image')

// Update head metadata when post is loaded
watchEffect(() => {
  if (post.value) {
    useHead({
      title: `${seoTitle.value} | Marian Adamus Blog`,
      meta: [
        {
          name: 'description',
          content: seoDescription.value
        },
        {
          property: 'og:title',
          content: seoTitle.value
        },
        {
          property: 'og:description',
          content: seoDescription.value
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:url',
          content: `https://marianadamus.com/blog/${post.value.slug}`
        },
        {
          property: 'article:published_time',
          content: post.value._firstPublishedAt
        },
        {
          property: 'article:author',
          content: post.value.author?.map(a => a.name).join(', ') || ''
        },
        {
          property: 'og:image',
          content: seoImage.value
        },
        {
          name: 'twitter:card',
          content: twitterCard.value
        },
        {
          name: 'twitter:title',
          content: seoTitle.value
        },
        {
          name: 'twitter:description',
          content: seoDescription.value
        },
        {
          name: 'twitter:image',
          content: seoImage.value
        }
      ]
    })
  }
})

onMounted(() => {
  const slug = route.params.slug as string
  fetchPost(slug)

  // Animate content when it's loaded
  if (contentRef.value) {
    gsap.from(contentRef.value, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    })
  }
})
</script>

<template>
  <div class="min-h-screen w-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="min-h-[90vh] flex flex-col items-center justify-between relative overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-black opacity-20"></div>
      
      <!-- Main Content -->
      <div class="relative z-10 w-full px-4 sm:px-6 lg:px-32 pt-32">
        <div class="max-w-[2000px] mx-auto">
          <!-- Header -->
          <div class="flex gap-8 mt-16">
            <!-- Left side: Title, Author, Date -->
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h1 class="text-5xl font-bold text-white mb-12 text-left leading-tight">{{ post?.title }}</h1>
                <div class="flex items-center gap-2">
                  <span class="text-gray-400">By</span>
                  <div class="flex items-center gap-2">
                    <router-link 
                      v-for="(author, index) in post?.author" 
                      :key="author.id || index" 
                      to="/"
                      class="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      {{ author.name }}{{ index < (post?.author?.length || 0) - 1 ? ', ' : '' }}
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 mt-auto">
                <span class="text-gray-400">Published on</span>
                <span class="text-white">
                  {{ post?._firstPublishedAt ? new Date(post._firstPublishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '' }}
                </span>
              </div>
            </div>

            <!-- Right side: Featured Image -->
            <div v-if="post?.featuredImage" class="flex-1 relative aspect-[16/9]">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 z-10"></div>
              <img
                :src="post.featuredImage.url"
                :alt="post.featuredImage.alt || post.title"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <div class="w-full px-4 sm:px-6 lg:px-64 py-16">
      <div class="max-w-[2000px] mx-auto">
        <div ref="contentRef" class="prose prose-invert max-w-none text-left prose-headings:text-white prose-p:text-gray-300 prose-a:text-indigo-400 prose-a:hover:text-indigo-300 prose-blockquote:border-indigo-500 prose-code:text-indigo-400 prose-pre:bg-gray-800 prose-img:rounded-lg prose-img:shadow-lg">
          <div v-if="post" v-html="md.render(post.content)"></div>
        </div>

        <!-- Topics -->
        <div class="mt-16 pt-8 border-t border-gray-700 text-center">
          <h3 class="text-lg font-semibold text-white mb-4">Topics:</h3>
          <div class="flex flex-wrap justify-center gap-2">
            <span
              v-for="topic in post?.topics"
              :key="topic.topic"
              class="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700"
            >
              {{ topic.topic }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="!post" class="flex items-center justify-center min-h-[400px]">
      <div class="text-gray-400">Loading...</div>
    </div>
  </div>
</template>

<style>
.prose {
  @apply text-gray-300;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply text-white font-semibold;
}

.prose h1 {
  @apply text-4xl mb-8;
}

.prose h2 {
  @apply text-3xl mb-6;
}

.prose h3 {
  @apply text-2xl mb-4;
}

.prose a {
  @apply text-indigo-400 hover:text-indigo-300 transition-colors;
}

.prose blockquote {
  @apply border-l-4 border-indigo-500 pl-4 italic my-6;
}

.prose code {
  @apply bg-gray-800 text-indigo-400 px-2 py-1 rounded;
}

.prose pre {
  @apply bg-gray-800 p-4 rounded-lg overflow-x-auto my-6;
}

.prose img {
  @apply rounded-lg shadow-lg my-8;
}

.prose ul {
  @apply list-disc list-inside my-6;
}

.prose ol {
  @apply list-decimal list-inside my-6;
}

.prose li {
  @apply mb-2;
}

.prose p {
  @apply mb-6 text-lg leading-relaxed;
}
</style> 