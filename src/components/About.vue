<script setup lang="ts">
// We'll add the animation library later
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Profile Image -->
        <div class="flex justify-center">
          <div class="relative w-64 h-64 rounded-full overflow-hidden group">
            <img
              src="https://via.placeholder.com/256"
              alt="Profile"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        
        <!-- Bio -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
            Who am I?
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            I'm a passionate Full Stack Developer with a strong focus on creating beautiful, 
            functional, and user-friendly applications. With expertise in modern web technologies, 
            I strive to build solutions that make a difference.
          </p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white">3+</h4>
              <p class="text-gray-600 dark:text-gray-300">Years Experience</p>
            </div>
            <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white">20+</h4>
              <p class="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
          </div>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
              Vue.js
            </span>
            <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
              TypeScript
            </span>
            <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
              Node.js
            </span>
            <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
              TailwindCSS
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 