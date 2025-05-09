<script setup lang="ts">
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
  <footer class="w-full py-32 bg-black/50 backdrop-blur-sm ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-center">
        <!-- Social Icons -->
        <div class="flex justify-center items-center gap-8">
          <a 
            href="https://www.linkedin.com/in/m-adamus/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center justify-center w-14 h-14 bg-[#0A66C2] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            aria-label="Visit LinkedIn profile"
          >
            <img 
              class="w-8 h-8 rounded" 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
              alt="LinkedIn Profile"
              width="32"
              height="32"
              loading="lazy"
            />
          </a>
          <a 
            href="https://x.com/MarinA27847802" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center justify-center w-14 h-14 bg-[#1DA1F2] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            aria-label="Visit X (Twitter) profile"
          >
            <img 
              class="w-8 h-8 rounded" 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" 
              alt="X (Twitter) Profile"
              width="32"
              height="32"
              loading="lazy"
            />
          </a>
          <a 
            href="https://github.com/Cmanar0" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center justify-center w-14 h-14 bg-[#181717] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            aria-label="Visit GitHub profile"
          >
            <img 
              class="w-8 h-8 rounded" 
              src="/github.webp" 
              alt="GitHub Profile"
              width="32"
              height="32"
              loading="lazy"
            />
          </a>
          <a 
            @click.prevent="handleEmailClick"
            class="flex items-center justify-center w-14 h-14 bg-[#EA4335] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm cursor-pointer"
            aria-label="Send email"
          >
            <svg 
              class="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Add a subtle hover effect to show it's clickable */
.cursor-pointer {
  cursor: pointer;
}
</style> 