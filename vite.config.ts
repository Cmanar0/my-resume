import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [vue()],
    base: '/',
    server: {
      historyApiFallback: true,
      strictPort: true,
      port: 3000
    },
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
          manualChunks: {
            'vue': ['vue', 'vue-router'],
            'gsap': ['gsap']
          }
        }
      }
    },
    // Expose env variables to your app
    define: {
      'process.env': env
    }
  }
})
