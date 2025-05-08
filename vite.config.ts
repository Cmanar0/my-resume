import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    base: '/',
    plugins: [
      vue()
    ],
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
    },
    // Expose env variables to your app
    define: {
      'import.meta.env.VITE_DATOCMS_API_TOKEN': JSON.stringify(env.VITE_DATOCMS_API_TOKEN)
    }
  }
})
