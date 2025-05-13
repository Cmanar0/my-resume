<script setup lang="ts">
import { ref, onMounted, computed, watchEffect, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import { fetchAPI } from '../lib/datocms';
import type { Post } from '../types/blog';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarkdownIt from 'markdown-it';
import { createHighlighter } from 'shiki';

gsap.registerPlugin(ScrollTrigger);

let highlighter: any = null;

// Initialize the highlighter
createHighlighter({
  themes: ['github-dark'],
  langs: ['python', 'bash', 'javascript', 'typescript', 'json', 'sql', 'http', 'html'],
}).then((h) => {
  highlighter = h;
});

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: string): string {
    if (lang && highlighter) {
      try {
        return highlighter.codeToHtml(str, {
          lang,
          themes: { light: 'github-dark', dark: 'github-dark' },
        });
      } catch (__) {}
    }
    return `<pre class="shiki"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  },
});
const route = useRoute();
const post = ref<Post | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);

const fetchPost = async (slug: string) => {
  isLoading.value = true;
  error.value = null;

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
  `;

  try {
    const data = await fetchAPI<{ article: Post | null }>(query);

    if (!data.article) {
      console.error('Article not found in DatoCMS:', slug);
      error.value = `Article "${slug}" not found`;
      return;
    }

    post.value = data.article;
  } catch (err: unknown) {
    console.error('Error fetching post from DatoCMS:', err);
    if (err instanceof Error) {
      error.value = `Failed to load article: ${err.message}`;
    } else {
      error.value = 'Failed to load article. Please try again later.';
    }
  } finally {
    isLoading.value = false;
  }
};

// Watch for route changes to handle direct URL access
watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) {
      fetchPost(newSlug as string);
    }
  },
  { immediate: true },
);

// Computed properties for SEO metadata
const seoTitle = computed(
  () => post.value?.seo?.title || post.value?.title || 'Blog Post',
);
const seoDescription = computed(
  () => post.value?.seo?.description || post.value?.description || '',
);
const seoImage = computed(() => {
  // First try to get the SEO image from CMS
  if (post.value?.seo?.image?.url) {
    return post.value.seo.image.url;
  }
  // Then try to get the featured image from CMS
  if (post.value?.featuredImage?.url) {
    return post.value.featuredImage.url;
  }
  // Fallback to avatar if no images are available
  return 'https://marianadamus.com/avatar.jpg';
});
const twitterCard = computed(
  () => post.value?.seo?.twitterCard || 'summary_large_image',
);
const canonicalUrl = computed(
  () => `https://marianadamus.com/blog/${post.value?.slug}`,
);

// Update head metadata when post is loaded
watchEffect(() => {
  if (post.value) {
    useHead({
      title: `${seoTitle.value} | Marian Adamus Blog`,
      meta: [
        {
          name: 'description',
          content: seoDescription.value,
        },
        // Open Graph
        {
          property: 'og:title',
          content: seoTitle.value,
        },
        {
          property: 'og:description',
          content: seoDescription.value,
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:url',
          content: canonicalUrl.value,
        },
        {
          property: 'og:image',
          content: seoImage.value,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:image:alt',
          content: post.value.featuredImage?.alt || seoTitle.value,
        },
        {
          property: 'og:site_name',
          content: 'Marian Adamus Blog',
        },
        // Twitter
        {
          name: 'twitter:card',
          content: twitterCard.value,
        },
        {
          name: 'twitter:title',
          content: seoTitle.value,
        },
        {
          name: 'twitter:description',
          content: seoDescription.value,
        },
        {
          name: 'twitter:image',
          content: seoImage.value,
        },
        // Article specific
        {
          property: 'article:published_time',
          content: post.value._firstPublishedAt,
        },
        {
          property: 'article:modified_time',
          content: post.value._firstPublishedAt,
        },
        {
          property: 'article:author',
          content: post.value.author?.map((a) => a.name).join(', ') || '',
        },
        {
          property: 'article:section',
          content: post.value.topics?.map((t) => t.topic).join(', ') || '',
        },
        {
          property: 'article:tag',
          content: post.value.topics?.map((t) => t.topic).join(', ') || '',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: canonicalUrl.value,
        },
      ],
    });
  }
});

const adjustTableWidths = () => {
  nextTick(() => {
    const tables = document.querySelectorAll('.prose table')
    tables.forEach(table => {
      const rows = table.querySelectorAll('tr')
      const colCount = rows[0]?.querySelectorAll('th, td').length || 0
      const colWidths = new Array(colCount).fill(0)

      // Calculate max content length for each column
      rows.forEach(row => {
        const cells = row.querySelectorAll('th, td')
        cells.forEach((cell, index) => {
          // Get text content length, considering line breaks
          const content = cell.textContent || ''
          const lines = content.split('\n')
          const maxLineLength = Math.max(...lines.map(line => line.length))
          colWidths[index] = Math.max(colWidths[index], maxLineLength)
        })
      })

      // Calculate total width
      const totalWidth = colWidths.reduce((sum, width) => sum + width, 0)

      // Set width for each column
      rows.forEach(row => {
        const cells = row.querySelectorAll('th, td')
        cells.forEach((cell, index) => {
          const percentage = (colWidths[index] / totalWidth) * 100
          ;(cell as HTMLElement).style.width = `${percentage}%`
        })
      })
    })
  })
}

// Watch for content changes to adjust table widths
watch(() => post.value?.content, () => {
  adjustTableWidths()
})

onMounted(() => {
  const slug = route.params.slug as string;
  fetchPost(slug);

  // Animate content when it's loaded
  if (contentRef.value) {
    gsap.from(contentRef.value, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }

  // Initial table width adjustment
  adjustTableWidths()
});
</script>

<template>
  <div class="min-h-screen w-screen bg-black text-white">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex flex-col items-center justify-center min-h-screen">
      <div class="relative w-16 h-16 mb-4">
        <div class="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
        <div class="absolute inset-0 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin"></div>
      </div>
      <div class="text-gray-400 text-lg">Loading article...</div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-red-400">{{ error }}</div>
    </div>

    <!-- Content -->
    <template v-else-if="post">
      <!-- Hero Section -->
      <section
        class="min-h-[90vh] flex flex-col items-center justify-between relative overflow-hidden"
      >
        <!-- Background gradient -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-black opacity-20"
        ></div>

        <!-- Main Content -->
        <div class="relative z-10 w-full px-4 sm:px-6 lg:px-32 pt-32">
          <div class="max-w-[2000px] mx-auto">
            <!-- Header -->
            <div class="flex flex-col lg:flex-row gap-8 lg:mt-16">
              <!-- Left side: Title, Author, Date -->
              <div
                class="flex-1 flex flex-col justify-between order-2 lg:order-1"
              >
                <div>
                  <h1
                    class="text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 text-left leading-tight"
                  >
                    {{ post?.title }}
                  </h1>

                  <!-- Topic Tags -->
                  <div class="flex flex-wrap gap-2 mb-8">
                    <router-link
                      v-for="topic in post?.topics"
                      :key="topic.topic"
                      :to="{ path: '/blog', query: { topic: topic.topic } }"
                      class="px-3 py-1 text-sm font-medium bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      {{ topic.topic }}
                    </router-link>
                  </div>
                </div>
                <div class="flex flex-col items-left gap-2 mt-auto">
                  <div class="flex items-center gap-2">
                    <span class="text-gray-400">By</span>
                    <div class="flex gap-2">
                      <router-link
                        v-for="(author, index) in post?.author"
                        :key="author.id || index"
                        to="/"
                        class="text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        {{ author.name
                        }}{{
                          index < (post?.author?.length || 0) - 1 ? ', ' : ''
                        }}
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-left gap-2">
                    <span class="text-gray-400">Published on</span>
                    <span class="text-white">
                      {{
                        post?._firstPublishedAt
                          ? new Date(post._firstPublishedAt).toLocaleDateString(
                              'en-US',
                              {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              },
                            )
                          : ''
                      }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Right side: Featured Image -->
              <div
                v-if="post?.featuredImage"
                class="flex-1 relative aspect-[16/11] max-w-2xl mx-auto order-1 lg:order-2 mb-8 lg:mb-0"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 z-10"
                ></div>
                <img
                  :src="post.featuredImage.url"
                  :alt="post.featuredImage.alt || post.title"
                  :width="post.featuredImage.width"
                  :height="post.featuredImage.height"
                  class="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="eager"
                  decoding="sync"
                  fetchpriority="high"
                  rel="preload"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <div class="w-full px-4 sm:px-6 lg:px-64 py-16">
        <div class="max-w-[2000px] mx-auto">
          <div
            ref="contentRef"
            class="prose prose-invert max-w-none text-left prose-headings:text-white prose-p:text-gray-300 prose-a:text-indigo-400 prose-a:hover:text-indigo-300 prose-blockquote:border-indigo-500 prose-code:text-indigo-400 prose-pre:bg-gray-800 prose-img:rounded-lg prose-img:shadow-lg"
          >
            <div v-if="post" v-html="md.render(post.content)"></div>
          </div>

          <!-- Topics -->
          <div class="mt-16 pt-8 border-t border-gray-700 text-center">
            <h3 class="text-lg font-semibold text-white mb-4">Topics:</h3>
            <div class="flex flex-wrap justify-center gap-2">
              <router-link
                v-for="topic in post?.topics"
                :key="topic.topic"
                :to="{ path: '/blog', query: { topic: topic.topic } }"
                class="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 transition-colors"
              >
                {{ topic.topic }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>
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
  @apply text-3xl mt-20 mb-6;
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
  @apply bg-gray-800 text-indigo-400 px-2 py-1 rounded text-sm;
}

.prose pre {
  @apply bg-gray-800 p-4 rounded-lg overflow-x-auto my-6 border border-gray-700;
}

.prose pre code {
  @apply bg-transparent p-0 text-sm font-mono;
}

.prose img {
  @apply rounded-lg shadow-lg my-8 mx-auto;
  max-width: 100%;
  max-height: 600px;
  width: auto;
  height: auto;
  object-fit: contain;
  content-visibility: auto;
  contain: layout size style;
}

.prose ul {
  @apply list-none my-6;
}

.prose ul li {
  @apply relative pl-6 mb-4 text-gray-300;
}

.prose ul li::before {
  content: '•';
  @apply absolute left-0 text-indigo-400;
}

.prose ul li strong {
  @apply text-white font-semibold;
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

/* Add syntax highlighting colors */
.prose pre code .keyword {
  @apply text-purple-400;
}

.prose pre code .string {
  @apply text-green-400;
}

.prose pre code .comment {
  @apply text-gray-500;
}

.prose pre code .function {
  @apply text-blue-400;
}

.prose pre code .number {
  @apply text-orange-400;
}

.prose pre code .class {
  @apply text-yellow-400;
}

.prose pre code .operator {
  @apply text-pink-400;
}

.prose pre code .variable {
  @apply text-cyan-400;
}

.prose pre code .property {
  @apply text-emerald-400;
}

.prose pre code .punctuation {
  @apply text-gray-400;
}

.prose pre code .built_in {
  @apply text-amber-400;
}

.prose pre code .attr {
  @apply text-lime-400;
}

.prose pre code .tag {
  @apply text-rose-400;
}

.prose pre code .regexp {
  @apply text-teal-400;
}

.prose pre code .title {
  @apply text-violet-400;
}

.prose pre code .params {
  @apply text-sky-400;
}

.prose pre code .doctag {
  @apply text-indigo-400;
}

.prose pre code .meta {
  @apply text-slate-400;
}

.prose pre code .section {
  @apply text-fuchsia-400;
}

.prose pre code .type {
  @apply text-amber-400;
}

.prose pre code .symbol {
  @apply text-cyan-400;
}

.prose pre code .bullet {
  @apply text-emerald-400;
}

.prose pre code .subst {
  @apply text-orange-400;
}

.prose pre code .emphasis {
  @apply text-pink-400 italic;
}

.prose pre code .strong {
  @apply text-red-400 font-bold;
}

.prose pre code .addition {
  @apply text-green-400 bg-green-900/20;
}

.prose pre code .deletion {
  @apply text-red-400 bg-red-900/20;
}

/* Remove all the previous syntax highlighting styles and replace with: */
.shiki {
  @apply my-6 rounded-lg overflow-x-auto;
}

.shiki code {
  @apply block p-4;
}

/* Optional: Add a subtle border */
.shiki {
  @apply border border-gray-700;
}

/* Add loading animation keyframes */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Disclaimer Block Styling */
.prose .disclaimer-block {
  @apply my-8 p-6 rounded-lg border-l-4 border-yellow-500 bg-yellow-500/10 relative;
}

.prose .disclaimer-block::before {
  content: '⚠️ Disclaimer';
  @apply block text-yellow-500 font-semibold mb-2 text-lg;
}

.prose .disclaimer-block a {
  @apply text-yellow-500 hover:text-yellow-400 underline transition-colors;
}

.prose .disclaimer-block p {
  @apply text-gray-300 mb-0;
}

/* Important Block Styling */
.prose .important-block {
  @apply my-8 p-6 rounded-lg border-l-4 border-blue-500 bg-blue-500/10 relative;
}

.prose .important-block::before {
  content: '💡 Important';
  @apply block text-blue-500 font-semibold mb-2 text-lg;
}

.prose .important-block a {
  @apply text-blue-500 hover:text-blue-400 underline transition-colors;
}

.prose .important-block p {
  @apply text-gray-300 mb-0;
}

/* Note Block Styling */
.prose .note-block {
  @apply my-8 p-6 rounded-lg border-l-4 border-green-500 bg-green-500/10 relative;
}

.prose .note-block::before {
  content: 'Note';
  @apply block text-green-500 font-semibold mb-2 text-lg;
}

.prose .note-block a {
  @apply text-green-500 hover:text-green-400 underline transition-colors;
}

.prose .note-block p {
  @apply text-gray-300 mb-0;
}

/* Add specific styling for featured images in content */
.prose img.featured-image {
  @apply rounded-lg shadow-lg my-8 mx-auto;
  max-width: 100%;
  max-height: 500px;
  width: auto;
  height: auto;
  object-fit: contain;
  content-visibility: auto;
  contain: layout size style;
}

/* Add specific styling for inline images */
.prose img.inline-image {
  @apply rounded-lg shadow-sm my-4 mx-2;
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: inline-block;
  vertical-align: middle;
  content-visibility: auto;
  contain: layout size style;
}

/* Add preload for featured image */
.prose img[rel='preload'] {
  @apply rounded-lg shadow-lg my-8 mx-auto;
  max-width: 100%;
  max-height: 600px;
  width: auto;
  height: auto;
  object-fit: contain;
  content-visibility: auto;
  contain: layout size style;
  will-change: transform;
}

.prose table {
  @apply w-full my-8 border-collapse table-fixed;
}

.prose thead {
  @apply bg-gray-800/50 w-full;
}

.prose th {
  @apply px-6 py-4 text-left text-sm font-semibold text-white border-b border-gray-700;
}

.prose td {
  @apply px-6 py-4 text-sm text-gray-300 border-b border-gray-700;
}

.prose tr {
  @apply w-full table-row;
}

.prose tbody {
  @apply w-full;
}

.prose tr:hover {
  @apply bg-gray-800/30;
}

.prose tbody tr:last-child td {
  @apply border-b-0;
}

/* Add responsive table wrapper */
.prose table {
  @apply block w-full overflow-x-auto;
}

/* Style table header cells */
.prose th:first-child {
  @apply rounded-tl-lg;
}

.prose th:last-child {
  @apply rounded-tr-lg;
}

/* Add subtle background to alternate rows */
.prose tbody tr:nth-child(even) {
  @apply bg-gray-800/20;
}

/* Style code blocks within table cells */
.prose td code {
  @apply bg-gray-800 text-indigo-400 px-2 py-1 rounded text-sm font-mono;
}

/* Add a subtle border to the entire table */
.prose table {
  @apply border border-gray-700 rounded-lg;
}

/* Ensure table cells don't wrap unnecessarily */
.prose td, .prose th {
  @apply whitespace-normal break-words;
}

/* Ensure table layout is fixed and full width */
.prose table {
  @apply table-fixed w-full;
}

/* Ensure cells take up their calculated width */
.prose th, .prose td {
  @apply overflow-hidden;
}

/* HTTP Code Block Styling */
.prose pre[class*="language-http"],
.prose pre[class*="language-https"] {
  @apply bg-gray-800 border border-gray-700 rounded-lg overflow-x-auto my-6;
}

.prose pre[class*="language-http"] code,
.prose pre[class*="language-https"] code {
  @apply text-sm font-mono block p-4;
}

/* HTTP Header Styling */
.prose pre[class*="language-http"] .header-name,
.prose pre[class*="language-https"] .header-name {
  @apply text-blue-400 font-semibold;
}

/* HTTP Header Value Styling */
.prose pre[class*="language-http"] .header-value,
.prose pre[class*="language-https"] .header-value {
  @apply text-green-400;
}

/* HTTP Cookie Parameters Styling */
.prose pre[class*="language-http"] .cookie-param,
.prose pre[class*="language-https"] .cookie-param {
  @apply text-yellow-400;
}

/* HTTP Domain Styling */
.prose pre[class*="language-http"] .domain,
.prose pre[class*="language-https"] .domain {
  @apply text-purple-400;
}

/* HTML Code Block Styling */
.prose pre[class*="language-html"] {
  @apply bg-gray-800 border border-gray-700 rounded-lg overflow-x-auto my-6;
}

.prose pre[class*="language-html"] code {
  @apply text-sm font-mono block p-4;
}

/* HTML Tag Styling */
.prose pre[class*="language-html"] .tag {
  @apply text-pink-400;
}

/* HTML Attribute Name Styling */
.prose pre[class*="language-html"] .attr-name {
  @apply text-yellow-400;
}

/* HTML Attribute Value Styling */
.prose pre[class*="language-html"] .attr-value {
  @apply text-green-400;
}

/* HTML Script Tag Content Styling */
.prose pre[class*="language-html"] .script-content {
  @apply text-gray-300;
}

/* HTML Form Action Styling */
.prose pre[class*="language-html"] .form-action {
  @apply text-blue-400;
}

/* HTML Input Type Styling */
.prose pre[class*="language-html"] .input-type {
  @apply text-purple-400;
}

/* HTML Input Name/Value Styling */
.prose pre[class*="language-html"] .input-name,
.prose pre[class*="language-html"] .input-value {
  @apply text-green-400;
}

/* Common Code Block Styling */
.prose pre {
  @apply my-6;
}

.prose pre code {
  @apply block;
}

/* Code Block Title */
.prose pre::before {
  content: attr(data-language);
  @apply block text-xs text-gray-500 mb-2 font-mono;
}

/* Ensure proper spacing between code blocks */
.prose pre + pre {
  @apply mt-8;
}

/* Ensure proper spacing between code blocks and other content */
.prose p + pre,
.prose h1 + pre,
.prose h2 + pre,
.prose h3 + pre,
.prose h4 + pre,
.prose h5 + pre,
.prose h6 + pre {
  @apply mt-8;
}

/* Add loading animation keyframes */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* HTTP Code Block Styling */
.prose pre[class*="language-http"],
.prose pre[class*="language-https"] {
  @apply bg-gray-800 border border-gray-700 rounded-lg overflow-x-auto my-6;
}

.prose pre[class*="language-http"] code,
.prose pre[class*="language-https"] code {
  @apply text-sm font-mono block p-4;
}

/* HTTP Method Styling */
.prose pre[class*="language-http"] .method,
.prose pre[class*="language-https"] .method {
  @apply text-purple-400 font-bold;
}

/* HTTP Status Code Styling */
.prose pre[class*="language-http"] .status,
.prose pre[class*="language-https"] .status {
  @apply text-green-400 font-bold;
}

/* HTTP Headers Styling */
.prose pre[class*="language-http"] .header,
.prose pre[class*="language-https"] .header {
  @apply text-blue-400;
}

/* HTTP URL Styling */
.prose pre[class*="language-http"] .url,
.prose pre[class*="language-https"] .url {
  @apply text-yellow-400;
}

/* HTML Code Block Styling */
.prose pre[class*="language-html"] {
  @apply bg-gray-800 border border-gray-700 rounded-lg overflow-x-auto my-6;
}

.prose pre[class*="language-html"] code {
  @apply text-sm font-mono;
}

/* HTML Tag Styling */
.prose pre[class*="language-html"] .tag {
  @apply text-pink-400;
}

/* HTML Attribute Styling */
.prose pre[class*="language-html"] .attr {
  @apply text-yellow-400;
}

/* HTML String Styling */
.prose pre[class*="language-html"] .string {
  @apply text-green-400;
}

/* HTML Comment Styling */
.prose pre[class*="language-html"] .comment {
  @apply text-gray-500 italic;
}

/* HTML Doctype Styling */
.prose pre[class*="language-html"] .doctype {
  @apply text-blue-400;
}

/* Line Numbers */
.prose pre .line-number {
  @apply text-gray-500 mr-4 select-none;
}

/* Update the styling to target code elements */
.prose pre.shiki {
  @apply bg-gray-800 border border-gray-700 rounded-lg overflow-x-auto my-6;
}

.prose pre.shiki code {
  @apply text-sm font-mono block p-4;
}

/* HTTP Code Block Styling */
.prose pre.shiki code[class*="language-http"],
.prose pre.shiki code[class*="language-https"] {
  @apply block;
}

/* HTTP Header Styling */
.prose pre.shiki code[class*="language-http"] .header-name,
.prose pre.shiki code[class*="language-https"] .header-name {
  @apply text-blue-400 font-semibold;
}

/* HTTP Header Value Styling */
.prose pre.shiki code[class*="language-http"] .header-value,
.prose pre.shiki code[class*="language-https"] .header-value {
  @apply text-green-400;
}

/* HTTP Cookie Parameters Styling */
.prose pre.shiki code[class*="language-http"] .cookie-param,
.prose pre.shiki code[class*="language-https"] .cookie-param {
  @apply text-yellow-400;
}

/* HTTP Domain Styling */
.prose pre.shiki code[class*="language-http"] .domain,
.prose pre.shiki code[class*="language-https"] .domain {
  @apply text-purple-400;
}

/* HTML Code Block Styling */
.prose pre.shiki code[class*="language-html"] {
  @apply block;
}

/* HTML Tag Styling */
.prose pre.shiki code[class*="language-html"] .tag {
  @apply text-pink-400;
}

/* HTML Attribute Name Styling */
.prose pre.shiki code[class*="language-html"] .attr-name {
  @apply text-yellow-400;
}

/* HTML Attribute Value Styling */
.prose pre.shiki code[class*="language-html"] .attr-value {
  @apply text-green-400;
}

/* HTML Script Tag Content Styling */
.prose pre.shiki code[class*="language-html"] .script-content {
  @apply text-gray-300;
}

/* HTML Form Action Styling */
.prose pre.shiki code[class*="language-html"] .form-action {
  @apply text-blue-400;
}

/* HTML Input Type Styling */
.prose pre.shiki code[class*="language-html"] .input-type {
  @apply text-purple-400;
}

/* HTML Input Name/Value Styling */
.prose pre.shiki code[class*="language-html"] .input-name,
.prose pre.shiki code[class*="language-html"] .input-value {
  @apply text-green-400;
}

/* Common Code Block Styling */
.prose pre.shiki {
  @apply my-6;
}

/* Code Block Title */
.prose pre.shiki::before {
  content: attr(data-language);
  @apply block text-xs text-gray-500 mb-2 font-mono;
}

/* Ensure proper spacing between code blocks */
.prose pre.shiki + pre.shiki {
  @apply mt-8;
}

/* Ensure proper spacing between code blocks and other content */
.prose p + pre.shiki,
.prose h1 + pre.shiki,
.prose h2 + pre.shiki,
.prose h3 + pre.shiki,
.prose h4 + pre.shiki,
.prose h5 + pre.shiki,
.prose h6 + pre.shiki {
  @apply mt-8;
}
</style>
