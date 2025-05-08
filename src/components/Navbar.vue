<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'

defineProps<{
  activeSection: string
}>()

const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(false)

const isBlogActive = computed(() => {
  return route.path.startsWith('/blog')
})

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'All Hard Skills' },
  { id: 'contact', label: 'Contact' }
]

const scrollToSection = async (sectionId: string, event?: Event) => {
  if (event) {
    event.preventDefault()
  }

  // Close mobile menu if open
  isMenuOpen.value = false

  // If we're not on the home page, navigate there first
  if (route.path !== '/') {
    await router.push('/')
    // Wait for the navigation to complete and the DOM to update
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState({}, '', `/#${sectionId}`)
      }
    }, 100)
  } else {
    // If we're already on the home page, just scroll
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState({}, '', `/#${sectionId}`)
    }
  }
}

const navigateToHome = (event: Event) => {
  event.preventDefault()
  isMenuOpen.value = false
  router.push('/')
  setTimeout(() => {
    scrollToSection('intro')
  }, 100)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="fixed top-0 right-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto pl-0 pr-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 flex items-center gap-3">
          <a href="/#intro" @click="navigateToHome" class="relative w-10 h-10 cursor-pointer">
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-xl group-hover:opacity-30 transition-opacity"></div>
            <img
              src="/Avatar-nobg.png"
              alt="Marian Adamus"
              class="w-full h-full object-cover rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
            />
          </a>
          <a 
            href="/#intro"
            @click="navigateToHome"
            class="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Marian Adamus
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:block">
          <div class="flex space-x-8">
            <a
              v-for="section in sections"
              :key="section.id"
              :href="`/#${section.id}`"
              @click="(e) => scrollToSection(section.id, e)"
              class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
              :class="{ 'text-indigo-600 dark:text-indigo-400': !isBlogActive && activeSection === section.id }"
            >
              {{ section.label }}
            </a>
            <router-link
              to="/blog"
              class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
              :class="{ 'text-indigo-600 dark:text-indigo-400': isBlogActive }"
            >
              Blog
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed -->
            <svg
              v-if="!isMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open -->
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="isMenuOpen"
        class="lg:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            v-for="section in sections"
            :key="section.id"
            :href="`/#${section.id}`"
            @click="(e) => scrollToSection(section.id, e)"
            class="block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
            :class="[
              !isBlogActive && activeSection === section.id
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            {{ section.label }}
          </a>
          <router-link
            to="/blog"
            class="block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
            :class="[
              isBlogActive
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Blog
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.lg\:hidden {
  display: none;
}

@media (max-width: 1024px) {
  .lg\:hidden {
    display: block;
  }
}
</style>
