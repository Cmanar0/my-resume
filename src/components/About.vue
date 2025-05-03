<script setup lang="ts">
// We'll add the animation library later
</script>

<template>
  <section class="py-20 w-screen">
    <div class="w-screen">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-32 text-gray-900 dark:text-white relative">
            About Me
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </h2>
          
          <!-- Top Section -->
          <div class="flex flex-col md:flex-row items-center gap-24 mb-32 pl-12 pr-12">
            <!-- Profile Image -->
            <div class="w-48 md:w-48 flex-shrink-0">
              <div class="relative w-full aspect-square group">
                <!-- Glow effect -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
                <!-- Image container -->
                <div class="relative w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/me.png"
                    alt="Marian Adamus"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <!-- Decorative elements -->
                <div class="absolute -inset-1 rounded-full border-2 border-indigo-500/30 group-hover:border-indigo-500/50 transition-colors duration-300"></div>
                <div class="absolute -inset-2 rounded-full border-2 border-purple-500/20 group-hover:border-purple-500/30 transition-colors duration-300"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="flex-1 space-y-8">
              <!-- Title and Description -->
              <div class="space-y-4">
                <h3 class="text-3xl font-semibold text-left">
                  Hi, my name is
                  <span class="bg-gradient-to-r from-[#007EF0] to-[#00DBD9] bg-clip-text text-transparent">Marian Adamus</span>.
                  <br />
                  I'm a
                  <span class="bg-gradient-to-r from-[#7B28C8] to-[#FD0182] bg-clip-text text-transparent">Full Stack Web</span>
                  &
                  <span class="bg-gradient-to-r from-[#FF4F4D] to-[#FAC42B] bg-clip-text text-transparent">Mobile Developer</span>.
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify">
                  I'm a passionate developer who loves creating elegant solutions to complex problems. 
                  With a strong foundation in both frontend and backend technologies, I specialize in 
                  building modern, scalable web applications that deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>

          <!-- Stats Row -->
          <div class="flex justify-center mt-16 mb-32">
            <div class="grid grid-cols-2 gap-12 md:gap-32 pl-12 pr-12">
              <div class="text-center">
                <h4 class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">3+</h4>
                <p class="text-gray-600 dark:text-gray-300 font-medium">Years Experience</p>
              </div>
              <div class="text-center">
                <h4 class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">20+</h4>
                <p class="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</p>
              </div>
            </div>
          </div>

          <!-- Expertise Areas -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div class="text-indigo-600 dark:text-indigo-400 mb-4">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Frontend Development</h4>
              <p class="text-gray-600 dark:text-gray-300">Creating beautiful, responsive user interfaces with modern frameworks and best practices.</p>
            </div>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div class="text-indigo-600 dark:text-indigo-400 mb-4">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Backend Development</h4>
              <p class="text-gray-600 dark:text-gray-300">Building robust, scalable server-side applications and APIs with modern technologies.</p>
            </div>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div class="text-indigo-600 dark:text-indigo-400 mb-4">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Mobile Development</h4>
              <p class="text-gray-600 dark:text-gray-300">Developing cross-platform mobile applications with native-like performance and UX.</p>
            </div>
          </div>

          <!-- Skills -->
          <div class="text-center space-y-6">
            <h4 class="text-2xl font-semibold text-gray-900 dark:text-white">Technical Expertise</h4>
            <div class="flex flex-wrap justify-center gap-3">
              <span class="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                Vue.js
              </span>
              <span class="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                TypeScript
              </span>
              <span class="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                Node.js
              </span>
              <span class="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                TailwindCSS
              </span>
              <span class="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                REST APIs
              </span>
              <span class="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                Git
              </span>
              <span class="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                React Native
              </span>
              <span class="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 