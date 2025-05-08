<script setup lang="ts">
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { fetchAPI } from '../lib/datocms'
import type { Post } from '../types/blog'

const route = useRoute()
const post = ref<Post | null>(null)

const fetchPost = async (slug: string) => {
  const query = `
    {
      article(filter: { slug: { eq: "${slug}" } }) {
        id
        title
        slug
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
        }
      }
    }
  `
  
  try {
    const data = await fetchAPI<{ article: Post }>(query)
    post.value = data.article
  } catch (error) {
    console.error('Error fetching post:', error)
  }
}

onMounted(() => {
  const slug = route.params.slug as string
  fetchPost(slug)
})

// Computed properties for SEO metadata
const seoTitle = computed(() => post.value?.seo?.title || post.value?.title)
const seoDescription = computed(() => post.value?.seo?.description || post.value?.content?.substring(0, 160))
const seoImage = computed(() => post.value?.seo?.image?.url || post.value?.featuredImage?.url)
const noIndex = computed(() => post.value?.seo?.noIndex || false)
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
          content: post.value.author?.name || ''
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
</script>

<template>
  <div class="min-h-screen bg-black text-white py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article v-if="post" class="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700">
        <!-- Header -->
        <div class="p-8 text-center">
          <div class="flex items-center justify-center gap-2 mb-6">
            <span class="px-3 py-1 text-sm font-medium text-indigo-400 bg-indigo-900/30 rounded-full">
              {{ post._status }}
            </span>
            <time :datetime="post._firstPublishedAt" class="text-sm text-gray-400">
              {{ new Date(post._firstPublishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </time>
          </div>
          
          <h1 class="text-4xl font-bold text-white mb-6">{{ post.title }}</h1>
          
          <div class="flex items-center justify-center gap-4 mb-8">
            <div class="flex items-center gap-2">
              <span class="text-gray-400">By</span>
              <span class="text-indigo-400">{{ post.author?.name }}</span>
            </div>
          </div>
        </div>

        <!-- Featured Image -->
        <div v-if="post.featuredImage" class="relative w-full h-[400px]">
          <img
            :src="post.featuredImage.url"
            :alt="post.featuredImage.alt || post.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content -->
        <div class="p-8">
          <div class="prose prose-invert max-w-none">
            <div v-html="post.content"></div>
          </div>

          <!-- Topics -->
          <div class="mt-12 pt-8 border-t border-gray-700 text-center">
            <h3 class="text-lg font-semibold text-white mb-4">Topics:</h3>
            <div class="flex flex-wrap justify-center gap-2">
              <span
                v-for="topic in post.topics"
                :key="topic.topic"
                class="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700"
              >
                {{ topic.topic }}
              </span>
            </div>
          </div>
        </div>
      </article>

      <!-- Loading State -->
      <div v-else class="flex items-center justify-center min-h-[400px]">
        <div class="text-gray-400">Loading...</div>
      </div>
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

.prose a {
  @apply text-indigo-400 hover:text-indigo-300 transition-colors;
}

.prose blockquote {
  @apply border-l-4 border-indigo-500 pl-4 italic;
}

.prose code {
  @apply bg-gray-800 text-indigo-400 px-2 py-1 rounded;
}

.prose pre {
  @apply bg-gray-800 p-4 rounded-lg overflow-x-auto;
}

.prose img {
  @apply rounded-lg shadow-lg;
}
</style> 