<template>
  <section class="py-24 w-screen">
    <div class="w-screen">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2
            class="text-4xl font-bold text-center mb-32 text-gray-900 dark:text-white relative"
          >
            All Hard Skills
            <div
              class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            ></div>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Core Technologies -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-16"
              >
                Core Technologies
              </h3>
              <div class="flex flex-wrap justify-start items-start gap-8">
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    alt="HTML5"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <h4 class="text-xl font-bold mb-2">HTML</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    alt="CSS3"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <h4 class="text-xl font-bold mb-2">CSS</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                    alt="Sass logo"
                  />
                  <h4 class="text-xl font-bold mb-2">SCSS</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript logo"
                  />
                  <h4 class="text-xl font-bold mb-2">JavaScript</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                    alt="TypeScript logo"
                  />
                  <h4 class="text-xl font-bold mb-2">TypeScript</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    alt="Python logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Python</h4>
                </div>
              </div>
            </div>

            <!-- Frontend Frameworks -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-16"
              >
                Frontend Frameworks
              </h3>
              <div class="flex flex-wrap justify-start items-start gap-8">
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                    alt="Vue.js logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Vue.js</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
                    alt="Nuxt.js logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Nuxt.js</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React logo"
                  />
                  <h4 class="text-xl font-bold mb-2">React</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                    alt="Next.js logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Next.js</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="/pinia.png"
                    alt="Vue.js logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Pinia</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                    alt="Vue.js logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Vuex</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                    alt="Redux logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Redux</h4>
                </div>
              </div>
            </div>

            <!-- Backend & Deployment -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-16"
              >
                Backend & Deployment
              </h3>
              <div class="flex flex-wrap justify-start items-start gap-8">
                <div class="flex flex-col items-center">
                  <img class="w-12 h-12 mb-2" src="/dj.svg" alt="Django logo" />
                  <h4 class="text-xl font-bold mb-2">Django</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                    alt="PostgreSQL logo"
                  />
                  <h4 class="text-xl font-bold mb-2">PostgreSQL</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                    alt="Docker logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Docker</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
                    alt="Vercel logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Vercel</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
                    alt="Netlify logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Netlify</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg"
                    alt="DigitalOcean logo"
                  />
                  <h4 class="text-xl font-bold mb-2">DigitalOcean</h4>
                </div>
              </div>
            </div>

            <!-- Project Management & Tools -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-16"
              >
                Project Management & Tools
              </h3>
              <div class="flex flex-wrap justify-start items-start gap-8">
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                    alt="Git logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Git</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
                    alt="Bash logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Bash</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
                    alt="Jira logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Jira</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="/YouTrack_Icon.png"
                    alt="YouTrack logo"
                  />
                  <h4 class="text-xl font-bold mb-2">YouTrack</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                    alt="Postman logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Postman</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg"
                    alt="Slack logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Slack</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                    alt="Figma logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Figma</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg"
                    alt="Sentry logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Sentry</h4>
                </div>
              </div>
            </div>

            <!-- UI Frameworks -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-16"
              >
                UI Frameworks
              </h3>
              <div class="flex flex-wrap justify-start items-start gap-8">
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt="Tailwind CSS logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Tailwind</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Bootstrap</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg"
                    alt="Vuetify logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Vuetify</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2 rounded-lg"
                    src="/devexpress.png"
                    alt="DevExpress logo"
                  />
                  <h4 class="text-xl font-bold mb-2">DevExpress</h4>
                </div>
              </div>
            </div>

            <!-- Operating Systems -->
            <div
              class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-16"
              >
                Operating Systems
              </h3>
              <div class="flex flex-wrap justify-start items-start gap-8">
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"
                    alt="Windows logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Windows</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
                    alt="Apple logo"
                  />
                  <h4 class="text-xl font-bold mb-2">macOS</h4>
                </div>
                <div class="flex flex-col items-center">
                  <img
                    class="w-12 h-12 mb-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                    alt="Linux logo"
                  />
                  <h4 class="text-xl font-bold mb-2">Linux</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No imports needed
</script>
