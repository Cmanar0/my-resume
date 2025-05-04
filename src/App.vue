<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import SectionDivider from './components/SectionDivider.vue'

const activeSection = ref('intro')

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  const sections = ['intro', 'about', 'experience', 'projects', 'skills', 'contact']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})
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
      <Skills id="skills" />
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
  overflow-x: hidden;
  
}

html {
  scroll-behavior: smooth;
}
</style>
