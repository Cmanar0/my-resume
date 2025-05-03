<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import SectionDivider from './components/SectionDivider.vue'

const activeSection = ref('intro')

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <Navbar :active-section="activeSection" />
    
    <main class="relative">
      <Intro id="intro" @scroll-to-section="scrollToSection" />
      <SectionDivider />
      <About id="about" />
      <SectionDivider />
      <Experience id="experience" />
      <SectionDivider />
      <Projects id="projects" />
      <SectionDivider />
      <Contact id="contact" />
    </main>
  </div>
</template>

<style>
/* Global styles */
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: black;
  color: white;
}

html {
  scroll-behavior: smooth;
}
</style>
