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
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div v-if="post" class="prose prose-lg dark:prose-invert max-w-none">
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
        <div class="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
          <time :datetime="post._firstPublishedAt">
            {{ new Date(post._firstPublishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
          </time>
          <span>•</span>
          <span>{{ post._status }}</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-gray-700 dark:text-gray-300">{{ post.author?.name }}</span>
        </div>
      </div>

      <img
        v-if="post.featuredImage"
        :src="post.featuredImage.url"
        :alt="post.featuredImage.alt"
        class="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div v-html="post.content"></div>

      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="topic in post.topics"
            :key="topic.id || topic.topic"
            class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
          >
            {{ topic.topic }}
          </span>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-12">
      <p class="text-gray-600 dark:text-gray-400">Loading post...</p>
    </div>
  </div>
</template> 