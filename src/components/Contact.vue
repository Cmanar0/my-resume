<script setup lang="ts">
const contacts = [
  {
    name: 'LinkedIn',
    handle: '@m-adamus',
    url: 'https://www.linkedin.com/in/m-adamus/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
  }
]

// Split email into parts to make it harder to scrape
const emailParts = {
  part1: 'adamus',
  part2: 'marian',
  part3: '@',
  part4: 'email',
  part5: '.',
  part6: 'cz'
}

const getEmail = () => {
  return `${emailParts.part1}.${emailParts.part2}${emailParts.part3}${emailParts.part4}${emailParts.part5}${emailParts.part6}`
}

const handleEmailClick = () => {
  const mailtoLink = `mailto:${getEmail()}`
  window.open(mailtoLink, '_self')
}
</script>

<template>
  <section class="relative py-24 px-4 max-w-4xl mx-auto">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-black opacity-20 -z-10"></div>

    <!-- TITLE -->
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
        rel="noopener noreferrer"
        class="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition group"
      >
        <!-- ICON -->
        <div class="flex-shrink-0">
          <img
            :src="contact.icon"
            :alt="`${contact.name} icon`"
            class="w-10 h-10"
            loading="lazy"
          />
        </div>

        <!-- TEXT -->
        <div class="flex flex-col items-start">
          <span class="text-sm uppercase text-gray-600 dark:text-gray-300">{{ contact.name }}</span>
          <span class="font-semibold text-lg text-gray-900 dark:text-white">{{ contact.handle }}</span>
        </div>
      </a>

      <!-- Email Contact -->
      <div
        class="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition group cursor-pointer"
        @click="handleEmailClick"
      >
        <!-- ICON -->
        <div class="flex-shrink-0">
          <svg
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
          <span class="text-sm uppercase text-gray-600 dark:text-gray-300">Email</span>
          <span 
            class="font-semibold text-lg text-gray-900 dark:text-white select-none inline-flex items-center"
            style="user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;"
          >
            <span class="opacity-0 absolute">{{ emailParts.part1 }}</span>
            <span>{{ emailParts.part1 }}</span>
            <span class="opacity-0 absolute">{{ emailParts.part2 }}</span>
            <span>.{{ emailParts.part2 }}</span>
            <span class="opacity-0 absolute">{{ emailParts.part3 }}</span>
            <span>{{ emailParts.part3 }}</span>
            <span class="opacity-0 absolute">{{ emailParts.part4 }}</span>
            <span>{{ emailParts.part4 }}</span>
            <span class="opacity-0 absolute">{{ emailParts.part5 }}</span>
            <span>{{ emailParts.part5 }}</span>
            <span class="opacity-0 absolute">{{ emailParts.part6 }}</span>
            <span>{{ emailParts.part6 }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Prevent text selection */
.select-none {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Add a subtle hover effect to show it's clickable */
.cursor-pointer {
  cursor: pointer;
}
</style>
