<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const experiences = [
  {
    company: 'Freelancing',
    role: 'Full Stack Developer',
    period: '2024 - 2025',
    description: 'Worked on a variety of freelance projects including Newton (team leave management web app), ChatSST (AI-powered sports analysis chat interface), SSTrader Blog (SEO-optimized blog with DatoCMS), and ComGuide (WebGL-powered online course for healthcare professionals). Delivered fullstack solutions with modern frontend and backend technologies.',
    icon: '🛠️'
  },
  {
    company: 'Stafio',
    role: 'Full Stack Developer',
    period: '2021 - 2024',
    description: 'Developed key features for a job recruitment platform, an electronic document signing system for O2 Arena (Ice Hockey World Championship), and advanced tools like a drag & drop scheduling board and a Kanban planning dashboard using DevExtreme UI. Built custom UI components and improved complex data handling.',
    icon: '🏢'
  },
  {
    company: 'Stafio',
    role: 'Junior Developer',
    period: '2019 - 2021',
    description: 'Kickstarted my development career by contributing to web applications, learning the ropes of frontend and backend development, and gradually taking on more complex features while growing my skill set in fullstack development.',
    icon: '🚀'
  }
]

onMounted(async () => {
  await nextTick()
  
  // Animate the section header
  gsap.from('.experience-title', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out'
  })

  // Animate the timeline items staggered
  gsap.from('.timeline-item', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2,
    delay: 0.3
  })
})
</script>

<template>
  <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white experience-title">Experience</h2>

  <div class="space-y-12">
    <div
      v-for="(exp, index) in experiences"
      :key="index"
      class="relative pl-8 md:pl-12 timeline-item"
    >
      <!-- Timeline dot -->
      <div class="absolute left-4 md:left-8 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>

      <!-- Content -->
      <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <div class="flex items-center gap-4 mb-4">
          <span class="text-2xl">{{ exp.icon }}</span>
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ exp.role }}</h3>
            <p class="text-indigo-600 dark:text-indigo-400">{{ exp.company }}</p>
          </div>
          <span class="ml-auto text-sm text-gray-500 dark:text-gray-400">{{ exp.period }}</span>
        </div>
        <p class="text-gray-600 dark:text-gray-300">{{ exp.description }}</p>
      </div>
    </div>
  </div>
</template>
