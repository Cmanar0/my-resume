<script setup>
import HorizontalProject from './projects/HorizontalProject.vue';

// Project data
const projects = [
  {
    title: 'Employee Shift Management',
    subtitle: 'Stafio',
    description: 'An interactive drag-and-drop table for managing and visualizing shifts for employees.',
    image: '/table.png',
    imageAlt: 'Employee Shift Management project screenshot',
    icons: [
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        alt: 'JavaScript logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        alt: 'Vue.js logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
        alt: 'Nuxt.js logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
        alt: 'Vite logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg',
        alt: 'Sentry logo'
      }
    ],
    previewUrl: 'https://demo.com',
    isPrivate: true
  },
  {
    title: 'Prague Shenanigans',
    subtitle: 'Personal Project - In Progress',
    description: 'Discover unique places in Prague in the ways that interest you. Upcoming features include itinerary creation, location-based content, and more.',
    image: '/shenanigans.png',
    imageAlt: 'Prague Shenanigans project screenshot',
    icons: [
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        alt: 'Django logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        alt: 'Python logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        alt: 'Docker logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        alt: 'PostgreSQL logo'
      },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
        alt: 'Vite logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        alt: 'Vue.js logo'
      },
      {
        src: 'https://cdn.quasar.dev/logo-v2/svg/logo.svg',
        alt: 'Quasar logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        alt: 'TypeScript logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        alt: 'SCSS logo'
      }
    ],
    previewUrl: 'https://shenanigans.cz/',
    isPrivate: true
  },
  {
    title: 'AI Chat Interface',
    subtitle: 'ChatSST',
    description: 'AI-powered sports analysis assistant for SSTrader, featuring chat history and the ability to choose different AI models; handling data streams for smooth user experience. ',
    image: '/SST.png',
    imageAlt: 'Sports Analysis Chat Interface project screenshot',
    icons: [
              {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          alt: 'Vue.js logo'
        },
        {
          src: '/pinia.png',
          alt: 'Pinia logo'
        },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
          alt: 'Vite logo'
        },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        alt: 'JavaScript logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        alt: 'SCSS logo'
      }
    ],
    previewUrl: 'https://chat.sstrader.com/',
    isPrivate: true
  },
  {
    title: 'Online Course Portal',
    subtitle: 'ComGuide - In Progress',
    description: 'A portal with variety of interactive courses to train healthcare professionals in conflict resolution.',
    image: '/comguide.png',
    imageAlt: 'Online Course Portal project screenshot',
    icons: [
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        alt: 'Django logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        alt: 'Python logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        alt: 'PostgreSQL logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
        alt: 'Vite logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        alt: 'Vue.js logo'
      },
      {
        src: '/pinia.png',
        alt: 'Pinia logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        alt: 'JavaScript logo'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        alt: 'Docker logo'
      }
    ],
    previewUrl: 'https://portal.comguide.cz/auth/login/?lang=en',
    isPrivate: true
  },
];
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

    <!-- All Projects using HorizontalProject component -->
    <HorizontalProject
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :subtitle="project.subtitle"
      :description="project.description"
      :image="project.image"
      :image-alt="project.imageAlt"
      :icons="project.icons"
      :preview-url="project.previewUrl"
      :github-url="project.githubUrl"
      :is-private="project.isPrivate"
    />
  </section>
</template>

<style scoped>
.card-size {
  max-height: 560px;
  }

  @media (max-width: 1148px) {
  .card-size {
    max-height: 720px;
  }
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
