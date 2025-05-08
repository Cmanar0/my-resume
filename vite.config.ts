import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@headlessui') || id.includes('@heroicons')) {
              return 'ui'
            }
            if (id.includes('gsap')) {
              return 'gsap'
            }
            if (id.includes('vue')) {
              return 'vendor'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
