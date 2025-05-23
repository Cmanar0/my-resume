import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { createHead } from '@vueuse/head'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(MotionPlugin)
app.use(router)
app.use(head)
app.mount('#app')
