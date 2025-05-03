<script setup lang="ts">
const experiences = [
  {
    company: 'Company Name',
    role: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: 'Led the development of multiple web applications using Vue.js and Node.js. Implemented CI/CD pipelines and improved team productivity by 40%.',
    icon: '💼'
  },
  {
    company: 'Previous Company',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality products.',
    icon: '🚀'
  },
  {
    company: 'First Company',
    role: 'Junior Developer',
    period: '2019 - 2020',
    description: 'Started my career as a junior developer, learning the ropes of web development and contributing to various projects.',
    icon: '🎓'
  }
]
</script>

<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-800 w-screen">
    <div class="w-screen">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div class="space-y-12">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="relative pl-8 md:pl-12"
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
        </div>
      </div>
    </div>
  </section>
</template> 