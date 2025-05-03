<template>
  <div class="progress-bar" ref="progressBar">
    <div class="progress-fill" ref="progressFill"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const progressBar = ref<HTMLElement | null>(null)
const progressFill = ref<HTMLElement | null>(null)

onMounted(() => {
  if (progressBar.value && progressFill.value) {
    gsap.to(progressFill.value, {
      width: '60vw',
      scrollTrigger: {
        trigger: progressBar.value,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 0.5,
        markers: false
      }
    })
  }
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.progress-bar {
  position: relative;
  width: 100%;
  height: 15px;
  margin: 20px 0;
}

.progress-fill {
  position: absolute;
  left: 20vw;
  height: 100%;
  width: 15px;
  background: linear-gradient(90deg, #A855F7, #6366F1);
  border-radius: 7.5px;
}
</style>
