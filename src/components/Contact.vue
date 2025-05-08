<script setup lang="ts">
const contacts = [
  {
    name: 'LinkedIn',
    handle: '@yourlinkedin',
    url: 'https://linkedin.com/in/yourlinkedin',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
  },
  {
    name: 'Email',
    handle: 'your@email.com',
    url: 'mailto:your@email.com',
    icon: 'email', // fallback
  }
]
</script>

<template>
  <section class="relative py-16 px-4 max-w-4xl mx-auto">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-black opacity-20 -z-10"></div>

    <!-- TITLE (kept as you had it originally) -->
    <h2 class="text-4xl font-bold text-center mb-32 text-white relative">
      Contact
      <div
        class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
      ></div>
    </h2>

    <!-- CONTACT GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <a
        v-for="(contact, idx) in contacts"
        :key="idx"
        :href="contact.url"
        target="_blank"
        class="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition group"
      >
        <!-- ICON -->
        <div class="flex-shrink-0">
          <img
            v-if="contact.icon !== 'email'"
            :src="contact.icon"
            alt=""
            class="w-10 h-10"
          />
          <svg
            v-else
            class="w-10 h-10 text-gray-900 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <!-- TEXT -->
        <div class="flex flex-col items-start">
          <span class="text-sm uppercase text-gray-600 dark:text-gray-300">{{ contact.name }}</span>
          <span class="font-semibold text-lg text-gray-900 dark:text-white">{{ contact.handle }}</span>
        </div>
      </a>
    </div>


    <!-- SOCIAL ICONS ROW -->
    <div class="flex justify-center items-center gap-6 mb-16 mt-32">
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" class="flex items-center justify-center w-12 h-12 bg-[#0A66C2] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
        <img 
          class="w-7 h-7 rounded" 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
          alt="LinkedIn Profile"
          width="28"
          height="28"
          loading="lazy"
        />
      </a>
      <a href="https://twitter.com/yourtwitter" target="_blank" class="flex items-center justify-center w-12 h-12 bg-[#1DA1F2] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
        <img 
          class="w-7 h-7 rounded" 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" 
          alt="Twitter Profile"
          width="28"
          height="28"
          loading="lazy"
        />
      </a>
      <a href="https://github.com/yourgithub" target="_blank" class="flex items-center justify-center w-12 h-12 bg-[#181717] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
        <img 
          class="w-7 h-7 rounded" 
          src="/github.webp" 
          alt="GitHub Profile"
          width="28"
          height="28"
          loading="lazy"
        />
      </a>
      <a href="mailto:your@email.com" class="flex items-center justify-center w-12 h-12 bg-[#EA4335] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>
    </div>
  </section>
</template>
