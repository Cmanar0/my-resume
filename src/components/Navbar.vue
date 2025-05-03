<script setup lang="ts">
defineProps<{
  activeSection: string
}>()

const sections = [
  { id: 'intro', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'All Hard Skills' },
  { id: 'contact', label: 'Contact' }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="fixed top-0 right-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto pl-0 pr-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 flex items-center gap-3">
          <div class="relative w-10 h-10 cursor-pointer" @click="scrollToSection('intro')">
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-xl group-hover:opacity-30 transition-opacity"></div>
            <img
              src="/Avatar-nobg.png"
              alt="Marian Adamus"
              class="w-full h-full object-cover rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
            />
          </div>
          <span 
            class="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            @click="scrollToSection('intro')"
          >
            Marian Adamus
          </span>
        </div>
        <div class="hidden md:block">
          <div class="flex space-x-8">
            <a
              v-for="section in sections"
              :key="section.id"
              @click="scrollToSection(section.id)"
              class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
              :class="{ 'text-indigo-600 dark:text-indigo-400': activeSection === section.id }"
            >
              {{ section.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
