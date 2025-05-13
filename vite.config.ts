import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  // Define which environment variables to expose
  const envToExpose = {
    VITE_DATOCMS_API_TOKEN: env.VITE_DATOCMS_API_TOKEN,
    VITE_DATOCMS_API_URL: env.VITE_DATOCMS_API_URL,
    // Add other environment variables your app needs here
  }
  
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
    // Only expose specific environment variables
    define: {
      'process.env': envToExpose
    }
  }
})
