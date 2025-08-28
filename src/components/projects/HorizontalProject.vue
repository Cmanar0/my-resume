<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  icons: {
    type: Array,
    default: () => []
  },
  previewUrl: {
    type: String,
    default: ''
  },
  btn1: {
    type: Object,
    default: () => ({})
  },
  btn2: {
    type: Object,
    default: () => ({})
  },
  githubUrl: {
    type: String,
    default: ''
  },
  isPrivate: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <article class="project-card flex flex-col items-center card-size justify-between bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-12 p-6 lg:p-10 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent z-10 pointer-events-none"></div>

    <!-- Left side -->
    <header class="w-full space-y-6 text-left relative z-20">
      <h3 class="text-3xl font-extrabold text-gray-900 dark:text-white">
        {{ title }}
      </h3>
      <p class="text-lg text-indigo-600 dark:text-indigo-400 !mt-[3px]">
        {{ subtitle }}<span v-if="type" class="text-white"> • {{ type }}</span>
      </p>

      <div class="flex items-center flex-wrap gap-4" aria-label="Technologies used">
        <div
          v-for="icon in icons"
          :key="icon.alt"
          class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
        >
          <img
            :src="icon.src"
            :alt="icon.alt"
            class="w-7 h-7 rounded"
          />
        </div>
      </div>

      <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
        {{ description }}
      </p>

                    <nav class="flex gap-4 mt-4">
                <a
                  v-if="btn1.text && btn1.url"
                  :href="btn1.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg font-medium shadow transition"
                >
                  {{ btn1.text }}
                </a>
                <a
                  v-if="btn2.text && btn2.url"
                  :href="btn2.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-medium shadow transition"
                >
                  {{ btn2.text }}
                </a>
                <a
                  v-if="githubUrl"
                  :href="githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium shadow transition"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="sr-only">View on GitHub</span>
                </a>
                <a
                  v-else-if="isPrivate"
                  class="inline-flex items-center px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium shadow transition relative group cursor-not-allowed opacity-50"
                  aria-disabled="true"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="sr-only">View on GitHub</span>
                  <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Private repository
                  </span>
                </a>
              </nav>
    </header>

    <!-- Desktop Image (hidden on mobile) -->
    <figure class="desktop-image hidden relative group overflow-hidden flex justify-center items-center h-[400px] top-10">
      <img
        :src="image"
        :alt="imageAlt"
        class="rounded-xl shadow-lg object-contain w-full h-auto max-h-[100%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
        loading="lazy"
      />
    </figure>

    <!-- Mobile Image - Full width below description -->
    <figure class="mobile-image w-full mt-8">
      <img
        :src="image"
        :alt="imageAlt"
        class="w-full h-auto rounded-xl shadow-lg"
        loading="lazy"
      />
    </figure>
  </article>
</template>

<style scoped>
/* Custom breakpoint at 1150px */
@media (min-width: 1148px) {
  .project-card {
    flex-direction: row;
  }
  
  .project-card header {
    width: 450px;
    padding-right: 10px;
  }
  
  .desktop-image {
    display: flex;
    width: 100%;
    top: 70px !important;
    left: 100px !important;
    height: 100%;

  }

    .desktop-image img {
    display: flex;
    min-height: 380px;
    height: 100%;
    object-fit: cover;
  }
  
  .mobile-image {
    display: none;
  }
}

@media (max-width: 1149px) {
  .desktop-image {
    display: none;
  }
  
  .mobile-image {
    display: block;
  }
}
</style>
