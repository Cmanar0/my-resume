<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

const typedElement = ref<HTMLElement | null>(null)

onMounted(() => {
  if (typedElement.value) {
    new Typed(typedElement.value, {
      strings: ['Full Stack Developer', 'Web Designer', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    })
  }
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-black opacity-20"></div>
    
    <!-- Content -->
    <div class="relative z-10 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Avatar -->
      <div class="mb-6 sm:mb-8 md:mb-12 flex justify-center">
        <div class="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 group cursor-pointer" @click="$emit('scrollToSection', 'about')">
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-xl group-hover:opacity-30 transition-opacity"></div>
          <img
            src="/Avatar-nobg.webp"
            alt="Marian Adamus - Full Stack Developer"
            width="160"
            height="160"
            loading="eager"
            class="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <!-- Name -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4">
        Marian Adamus
      </h1>

      <!-- Title -->
      <h2 class="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8">
        <span ref="typedElement" class="inline-block"></span>
      </h2>

      <!-- Description -->
      <p class="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
        I build exceptional digital experiences with modern technologies.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <a
          href="#projects"
          class="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
        >
          View My Work
        </a>
        <a
          href="#contact"
          class="px-4 sm:px-6 py-2 sm:py-3 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-900/20 transition-colors text-sm sm:text-base"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typing-text {
  border-right: 2px solid currentColor;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: currentColor }
}
</style> 