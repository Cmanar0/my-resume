<script setup lang="ts">
// No data needed here anymore.
</script>

<template>
  <section class="relative py-16 px-4 max-w-6xl mx-auto">
    <h2
      class="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white relative"
    >
      Projects
      <div
        class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
      ></div>
    </h2>

    <!-- Single hardcoded card -->
    <article
      class="flex flex-col lg:flex-row items-center card-size justify-between bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-12 p-6 lg:p-10 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
      itemscope
      itemtype="https://schema.org/SoftwareApplication"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent z-10 pointer-events-none"
      ></div>

      <!-- Left side -->
      <header class="w-full lg:w-1/3 space-y-6 text-left relative z-20">
        <h3
          class="text-3xl font-extrabold text-gray-900 dark:text-white"
          itemprop="name"
        >
          Business Viability Evaluator
        </h3>
        <p class="text-lg text-indigo-600 dark:text-indigo-400 !mt-[3px]">
          Personal Project
        </p>

        <div class="flex items-center gap-4" aria-label="Technologies used">
          <meta itemprop="applicationCategory" content="Web Application" />
          <meta itemprop="operatingSystem" content="Any" />
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript logo"
              class="w-7 h-7 rounded"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="Vue.js logo"
              class="w-7 h-7"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
              alt="Nuxt.js logo"
              class="w-7 h-7"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
              alt="Vite logo"
              class="w-7 h-7"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg"
              alt="Sentry logo"
              class="w-7 h-7"
            />
          </div>
        </div>

        <p
          class="text-gray-600 dark:text-gray-300 w-3/4 leading-relaxed"
          itemprop="description"
        >
          An interactive drag-and-drop table for managing and visualizing shifts
          for employees.
        </p>

        <nav class="flex gap-4 mt-4">
          <a
            href="https://demo.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg font-medium shadow transition"
            itemprop="url"
          >
            Preview →
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium shadow transition"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577
              v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
              1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
              0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176
              0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404
              2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
              0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576
              C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span class="sr-only">View on GitHub</span>
          </a>
        </nav>
      </header>

      <!-- Right side -->
      <figure
        class="w-full lg:w-2/3 relative group overflow-hidden flex justify-center items-center h-[400px] top-10"
      >
        <img
          src="/table.png"
          alt="STAFIO project screenshot"
          class="rounded-xl shadow-lg object-contain w-full h-auto max-h-[100%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
          loading="lazy"
          itemprop="screenshot"
        />
      </figure>
    </article>

    <!-- Two cards in a row -->
    <div class="flex flex-row gap-6 mb-12">
      <!-- First card -->
      <article
        class="flex-1 flex flex-col items-center vertical-card-size justify-between bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-10 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden vertical-card"
        itemscope
        itemtype="https://schema.org/SoftwareApplication"
      >
        <div
          class="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_top,_rgba(49,46,129,0.6)_0%,_transparent_30%,_transparent_100%)]"
        ></div>

        <header class="w-full space-y-6 text-left relative z-20">
          <h3
            class="text-3xl font-extrabold text-gray-900 dark:text-white"
            itemprop="name"
          >
            Sports Analysis Chat Interface
          </h3>
          <p class="text-lg text-indigo-600 dark:text-indigo-400 !mt-[3px]">
            ChatSST
          </p>

          <div class="flex items-center gap-4" aria-label="Technologies used">
            <meta itemprop="applicationCategory" content="Web Application" />
            <meta itemprop="operatingSystem" content="Any" />
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript logo"
                class="w-7 h-7 rounded"
              />
            </div>
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                alt="Vue.js logo"
                class="w-7 h-7"
              />
            </div>
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
                alt="Nuxt.js logo"
                class="w-7 h-7"
              />
            </div>
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
                alt="Vite logo"
                class="w-7 h-7"
              />
            </div>
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg"
                alt="Sentry logo"
                class="w-7 h-7"
              />
            </div>
          </div>

          <p
            class="text-gray-600 dark:text-gray-300 leading-relaxed"
            itemprop="description"
          >
            An interactive drag-and-drop table for managing and visualizing
            shifts for employees.
          </p>

          <nav class="flex gap-4 mt-4">
            <a
              href="https://demo.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg font-medium shadow transition"
              itemprop="url"
            >
              Preview →
            </a>
            <a
              class="inline-flex items-center px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium shadow transition relative group cursor-not-allowed opacity-50"
              aria-disabled="true"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577
                v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
                1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
                0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176
                0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404
                2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
                0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576
                C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
              <span class="sr-only">View on GitHub</span>
              <span
                class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
              >
                Private repository
              </span>
            </a>
          </nav>
        </header>

        <figure
          class="absolute bottom-0 right-0 w-[100%] group overflow-hidden"
        >
          <img
            src="/table.png"
            alt="STAFIO project screenshot"
            class="rounded-xl vertical-card-img shadow-lg border-radius-card object-contain w-full h-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
            loading="lazy"
            itemprop="screenshot"
          />
        </figure>
      </article>

      <!-- Second card -->
      <article
        class="flex-1 flex flex-col items-center vertical-card-size justify-between bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-10 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden vertical-card"
        itemscope
        itemtype="https://schema.org/SoftwareApplication"
      >
        <div
          class="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_top,_rgba(49,46,129,0.6)_0%,_transparent_30%,_transparent_100%)]"
        ></div>

        <header class="w-full space-y-6 text-left relative z-20">
          <h3
            class="text-3xl font-extrabold text-gray-900 dark:text-white"
            itemprop="name"
          >
            Online Course Portal
          </h3>
          <p class="text-lg text-indigo-600 dark:text-indigo-400 !mt-[3px]">
            ComGuide
          </p>

          <div class="flex items-center gap-4" aria-label="Technologies used">
            <meta itemprop="applicationCategory" content="Web Application" />
            <meta itemprop="operatingSystem" content="Any" />
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript logo"
                class="w-7 h-7 rounded"
              />
            </div>
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                alt="Vue.js logo"
                class="w-7 h-7"
              />
            </div>
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
                alt="Nuxt.js logo"
                class="w-7 h-7"
              />
            </div>
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
                alt="Vite logo"
                class="w-7 h-7"
              />
            </div>
            <div
              class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg"
                alt="Sentry logo"
                class="w-7 h-7"
              />
            </div>
          </div>

          <p
            class="text-gray-600 dark:text-gray-300 leading-relaxed"
            itemprop="description"
          >
            An interactive drag-and-drop table for managing and visualizing
            shifts for employees.
          </p>

          <nav class="flex gap-4 mt-4">
            <a
              href="https://demo.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg font-medium shadow transition"
              itemprop="url"
            >
              Preview →
            </a>
            <a
              class="inline-flex items-center px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium shadow transition relative group cursor-not-allowed opacity-50"
              aria-disabled="true"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577
                v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
                1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
                0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176
                0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404
                2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
                0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576
                C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
              <span class="sr-only">View on GitHub</span>
            </a>
          </nav>
        </header>

        <figure
          class="absolute bottom-0 right-0 w-[100%] group overflow-hidden"
        >
          <img
            src="/table.png"
            alt="STAFIO project screenshot"
            class="rounded-xl vertical-card-img shadow-lg border-radius-card object-contain w-full h-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
            loading="lazy"
            itemprop="screenshot"
          />
        </figure>
      </article>
    </div>

    <!-- Second row of horizontal cards -->
    <article
      class="flex flex-col lg:flex-row items-center card-size justify-between bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-12 p-6 lg:p-10 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
      itemscope
      itemtype="https://schema.org/SoftwareApplication"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent z-10 pointer-events-none"
      ></div>

      <!-- Left side -->
      <header class="w-full lg:w-1/3 space-y-6 text-left relative z-20">
        <h3
          class="text-3xl font-extrabold text-gray-900 dark:text-white"
          itemprop="name"
        >
          Employee Shift Management
        </h3>
        <p class="text-lg text-indigo-600 dark:text-indigo-400 !mt-[3px]">
          Stafio
        </p>

        <div class="flex items-center gap-4" aria-label="Technologies used">
          <meta itemprop="applicationCategory" content="Web Application" />
          <meta itemprop="operatingSystem" content="Any" />
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript logo"
              class="w-7 h-7 rounded"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="Vue.js logo"
              class="w-7 h-7"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
              alt="Nuxt.js logo"
              class="w-7 h-7"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
              alt="Vite logo"
              class="w-7 h-7"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg"
              alt="Sentry logo"
              class="w-7 h-7"
            />
          </div>
        </div>

        <p
          class="text-gray-600 dark:text-gray-300 w-3/4 leading-relaxed"
          itemprop="description"
        >
          An interactive drag-and-drop table for managing and visualizing shifts
          for employees.
        </p>

        <nav class="flex gap-4 mt-4">
          <a
            href="https://demo.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg font-medium shadow transition"
            itemprop="url"
          >
            Preview →
          </a>
          <a
            class="inline-flex items-center px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium shadow transition relative group cursor-not-allowed opacity-50"
            aria-disabled="true"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577
              v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
              1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
              0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176
              0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404
              2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
              0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576
              C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span class="sr-only">View on GitHub</span>
            <span
              class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            >
              Private repository
            </span>
          </a>
        </nav>
      </header>

      <!-- Right side -->
      <figure
        class="w-full lg:w-2/3 relative group overflow-hidden flex justify-center items-center h-[400px] top-10"
      >
        <img
          src="/table.png"
          alt="STAFIO project screenshot"
          class="rounded-xl shadow-lg object-contain w-full h-auto max-h-[100%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
          loading="lazy"
          itemprop="screenshot"
        />
      </figure>
    </article>

    <!-- Third row of horizontal cards -->
    <article
      class="flex flex-col lg:flex-row items-center card-size justify-between bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-12 p-6 lg:p-10 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
      itemscope
      itemtype="https://schema.org/SoftwareApplication"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent z-10 pointer-events-none"
      ></div>

      <!-- Left side -->
      <header class="w-full lg:w-1/3 space-y-6 text-left relative z-20">
        <h3
          class="text-3xl font-extrabold text-gray-900 dark:text-white"
          itemprop="name"
        >
          Prague Shenenigans
        </h3>
        <p class="text-lg text-indigo-600 dark:text-indigo-400 !mt-[3px]">
          Personal Project
        </p>

        <div class="flex items-center gap-4" aria-label="Technologies used">
          <meta itemprop="applicationCategory" content="Web Application" />
          <meta itemprop="operatingSystem" content="Any" />
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript logo"
              class="w-7 h-7 rounded"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="Vue.js logo"
              class="w-7 h-7"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
              alt="Nuxt.js logo"
              class="w-7 h-7"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
              alt="Vite logo"
              class="w-7 h-7"
            />
          </div>
          <div
            class="flex items-center justify-center w-12 h-12 bg-[#5244e4] rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg"
              alt="Sentry logo"
              class="w-7 h-7"
            />
          </div>
        </div>

        <p
          class="text-gray-600 dark:text-gray-300 w-3/4 leading-relaxed"
          itemprop="description"
        >
          An interactive drag-and-drop table for managing and visualizing shifts
          for employees.
        </p>

        <nav class="flex gap-4 mt-4">
          <a
            href="https://demo.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg font-medium shadow transition"
            itemprop="url"
          >
            Preview →
          </a>
          <a
            class="inline-flex items-center px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium shadow transition relative group cursor-not-allowed opacity-50"
            aria-disabled="true"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577
              v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
              1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
              0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176
              0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404
              2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
              0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576
              C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span class="sr-only">View on GitHub</span>
            <span
              class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            >
              Private repository
            </span>
          </a>
        </nav>
      </header>

      <!-- Right side -->
      <figure
        class="w-full lg:w-2/3 relative group overflow-hidden flex justify-center items-center h-[400px] top-10"
      >
        <img
          src="/table.png"
          alt="STAFIO project screenshot"
          class="rounded-xl shadow-lg object-contain w-full h-auto max-h-[100%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
          loading="lazy"
          itemprop="screenshot"
        />
      </figure>
    </article>
  </section>
</template>

<style scoped>
.card-size {
  max-height: 420px;
}

.vertical-card-size {
  max-height: 640px;
  min-height: 540px;
}

.vertical-card-img {
  position: relative;
  bottom: -120px;
  right: -40px;
}

.vertical-card-overlay {
  /* Add your custom styles for the overlay here */
}
</style>
