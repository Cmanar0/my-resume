<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const activeSection = ref('intro')

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navbar :active-section="activeSection" />
    
    <main class="container mx-auto px-4">
      <Intro id="intro" @scroll-to-section="scrollToSection" />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
    </main>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
