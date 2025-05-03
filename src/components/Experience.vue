<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const experiences = [
  {
    company: 'Freelancing',
    role: 'Full Stack Developer',
    period: '2024 - 2025',
    description: 'Worked on a variety of freelance projects including Newton (team leave management web app), ChatSST (AI-powered sports analysis chat interface), SSTrader Blog (SEO-optimized blog with DatoCMS), and ComGuide (WebGL-powered online course for healthcare professionals). Delivered fullstack solutions with modern frontend and backend technologies.',
  },
  {
    company: 'Stafio',
    role: 'Full Stack Developer',
    period: '2021 - 2024',
    description: 'Developed key features for a job recruitment platform, an electronic document signing system for O2 Arena (Ice Hockey World Championship), and advanced tools like a drag & drop scheduling board and a Kanban planning dashboard using DevExtreme UI. Built custom UI components and improved complex data handling.',
  },
  {
    company: 'Stafio',
    role: 'Junior Developer',
    period: '2019 - 2021',
    description: 'Kickstarted my development career by contributing to web applications, learning the ropes of frontend and backend development, and gradually taking on more complex features while growing my skill set in fullstack development.',
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
  <section class="relative py-16 px-4 max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold text-center mb-32 text-gray-900 dark:text-white relative experience-title">
      Experience
      <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
    </h2>

    <div class="relative border-l-2 border-indigo-500 dark:border-indigo-400">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="relative pl-10 md:pl-16 mb-14 timeline-item"
      >
        <!-- Horizontal connector line -->
        <div class="absolute left-0 top-6 h-0.5 w-8 bg-indigo-500 dark:bg-indigo-400"></div>

        <!-- Content -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700">
          <div class="flex flex-col md:flex-row  justify-between mb-4">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white text-left">{{ exp.role }}</h3>
              <p class="text-indigo-600 dark:text-indigo-400 font-medium text-left">{{ exp.company }}</p>
            </div>
            <span class="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">{{ exp.period }}</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-left">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional: adjust the horizontal connector on smaller screens if needed */
</style>
