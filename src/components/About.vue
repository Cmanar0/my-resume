<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (sectionRef.value) {
    gsap.from(sectionRef.value, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    })

    if (imageRef.value) {
      gsap.from(imageRef.value, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: imageRef.value,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      })
    }

    if (titleRef.value) {
      gsap.from(titleRef.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.value,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      })
    }

    if (statsRef.value) {
      gsap.from(statsRef.value.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsRef.value,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      })
    }
  }
})
</script>

<template>
  <section ref="sectionRef" class="py-20 w-full">
    <div class="w-full">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-32 text-gray-900 dark:text-white relative">
            About Me
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </h2>

          <!-- Top Section -->
          <div class="flex flex-col md:flex-row items-center gap-24 mb-24">

            <!-- Content -->
            <div ref="titleRef" class="flex-1 space-y-8">
              <div class="space-y-4">
                <h3 class="text-3xl font-semibold text-center">
                  Hi, my name is
                  <span class="bg-gradient-to-r from-[#007EF0] to-[#00DBD9] bg-clip-text text-transparent">Marian Adamus</span>.
                  <br />
                  I'm a
                  <span class="bg-gradient-to-r from-[#7B28C8] to-[#FD0182] bg-clip-text text-transparent">Full Stack Web</span>
                  &
                  <span class="bg-gradient-to-r from-[#FF4F4D] to-[#FAC42B] bg-clip-text text-transparent">Mobile Developer</span>.
                </h3>
              </div>
            </div>
          </div>

          <!-- Stats and Expertise Grid with Right Cards -->
           <div class="grid grid-cols-1 gap-8 mb-16">
            <!-- Card Row 0: Experience -->
            <div class="flex flex-col md:flex-row items-center md:items-stretch gap-4">
              <!-- Left Card -->
              <div class="flex-1 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-indigo-600 dark:text-indigo-400">
                    <!-- New icon: Lightbulb -->
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 2a7 7 0 00-7 7c0 2.577 1.515 4.773 3.675 5.755L9 18h6l.325-3.245A7.002 7.002 0 0019 9a7 7 0 00-7-7zm0 18h.01" />
                    </svg>
                  </div>
                  <h4 class="text-xl font-semibold text-gray-900 dark:text-white">What can I do for you?</h4>
                </div>
                <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-gray-600 dark:text-gray-300 leading-relaxed text-lg items-start">
                  <span class="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                  <span class="text-left">Help you bring your project to life—whether it's just an idea or already fully designed.</span>
                  <span class="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                  <span class="text-left">Ready to collaborate and integrate seamlessly into your development team.</span>
                </div>
              </div>
              <!-- Connector Line -->
              <div class="md:w-1 md:h-auto w-full h-1 bg-gray-300 dark:bg-gray-700"></div>

              <!-- Right Card -->
              <div class="flex justify-center items-center flex-1 p-6 bg-black rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 text-white">
                <div ref="statsRef" class="flex justify-center items-center gap-8">
                  <div class="text-center">
                    <h4 class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4+</h4>
                    <p class="text-gray-600 dark:text-gray-300 font-medium">Years Experience</p>
                  </div>
                  <div class="text-center">
                    <h4 class="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">20+</h4>
                    <p class="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>

          <!-- Divider with text -->
          <div class="flex items-center justify-center my-16">
            <div class="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
            <span class="mx-4 text-lg font-semibold text-gray-600 dark:text-gray-300">My favorite Tech Stack</span>
            <div class="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>
            
         <!-- Merged Cards Row -->
<div class="flex flex-col md:flex-row gap-4 mb-16">

  <!-- Frontend Development Card -->
  <div class="flex-1 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center">
    <div class="flex items-center gap-4 mb-4">
      <div class="text-indigo-600 dark:text-indigo-400">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Frontend Development</h4>
    </div>
    <div class="flex flex-wrap justify-center items-center gap-6">
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-12 h-12 bg-[#374151] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
          <img class="w-7 h-7 rounded" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js logo" />
        </div>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Vue.js</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-12 h-12 bg-[#374151] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
          <img class="w-7 h-7 rounded" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" alt="Nuxt.js logo" />
        </div>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Nuxt.js</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-12 h-12 bg-[#374151] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
          <img class="w-7 h-7 rounded" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React logo" />
        </div>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">React</span>
      </div>
    </div>
  </div>

  <!-- Backend Development Card -->
  <div class="flex-1 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center">
    <div class="flex items-center gap-4 mb-4">
      <div class="text-indigo-600 dark:text-indigo-400">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      </div>
      <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Backend Development</h4>
    </div>
    <div class="flex flex-wrap justify-center items-center gap-6">
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-12 h-12 bg-[#374151] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
          <img class="w-7 h-7 rounded" src="/dj.svg" alt="Django logo" />
        </div>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Django</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-12 h-12 bg-[#374151] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
          <img class="w-7 h-7 rounded" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker logo" />
        </div>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Docker</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-12 h-12 bg-[#374151] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
          <img class="w-7 h-7 rounded" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL logo" />
        </div>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">PostgreSQL</span>
      </div>
    </div>
  </div>

  <!-- Mobile Development Card -->
  <div class="flex-1 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center">
    <div class="flex items-center gap-4 mb-4">
      <div class="text-indigo-600 dark:text-indigo-400">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Mobile Development</h4>
    </div>
    <div class="flex flex-wrap justify-center items-center gap-6">
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-12 h-12 bg-[#374151] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
          <img class="w-7 h-7 rounded" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js logo" />
        </div>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Vue.js</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-12 h-12 bg-[#374151] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
          <img class="w-7 h-7 rounded" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quasar/quasar-original.svg" alt="Quasar logo" />
        </div>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Quasar</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center w-12 h-12 bg-[#374151] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
          <img class="w-7 h-7 rounded" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-original.svg" alt="Capacitor logo" />
        </div>
        <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Capacitor</span>
      </div>
    </div>
  </div>

</div>


        </div>
      </div>
    </div>
    </div>
  </section>
</template>
