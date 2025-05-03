<script setup lang="ts">
const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with Vue.js and Node.js',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with real-time features',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'Firebase', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Project 3',
    description: 'A task management application with team collaboration',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
]
</script>

<template>
  <section class="py-20 w-screen">
    <div class="w-screen">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <!-- Project Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover"
              />
              <!-- Overlay -->
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  :href="project.github"
                  target="_blank"
                  class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  title="View on GitHub"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  title="View Live Demo"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Project Info -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tag, tagIndex) in project.tags"
                  :key="tagIndex"
                  class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 