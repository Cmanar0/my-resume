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
    // Fade in the section
    gsap.from(sectionRef.value, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    })

    // Animate the image
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

    // Animate the title
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

    // Animate the stats
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
  <section ref="sectionRef" class="py-20 w-screen">
    <div class="w-screen">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-32 text-gray-900 dark:text-white relative">
            About Me
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </h2>
          
         
            
            <!-- Content -->
            <div ref="titleRef" class="flex-1 space-y-8">
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
              </div>
            </div>
          </div>

          <!-- Stats and Expertise Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <!-- Stats -->
            <div class="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700">
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify">
                  I'm a passionate developer who loves creating elegant solutions to complex problems. 
                  With a strong foundation in both frontend and backend technologies, I specialize in 
                  building modern, scalable web applications that deliver exceptional user experiences.
                </p>
                <div class="grid grid-cols-2 gap-8">
               
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

            <!-- Expertise Areas -->
            <div class="space-y-6">
              <div class="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-indigo-600 dark:text-indigo-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Frontend Development</h4>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-indigo-600 dark:text-indigo-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Backend Development</h4>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-indigo-600 dark:text-indigo-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Mobile Development</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template> 