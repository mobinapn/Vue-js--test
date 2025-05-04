<template>
    <div class="product-timer">
      <div class="product-timer__header">
        <span class="product-timer__label"> وقت خرید !</span>
        <span class="product-timer__time">{{ toPersianDigits(formattedTime) }}</span>
      </div>
      <div class="product-timer__bar">
        <div class="product-timer__progress" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import { usePersianPrice } from '../../composables/usePersianPrice';
  
  const props = defineProps({
    timeRemaining: {
      type: Number,
      required: true 
    },
    totalTime: {
      type: Number,
      default: 72 * 60 * 60 * 1000
    }
  })
  
  const {  toPersianDigits } = usePersianPrice();
  const currentTime = ref(props.timeRemaining)
  let timer = null

  const progressPercentage = computed(() => {
    return Math.min(100, Math.max(0, (currentTime.value / props.totalTime) * 100))
  })
  
  const formattedTime = computed(() => {
    const totalSeconds = Math.floor(currentTime.value / 1000)
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
    const seconds = String(totalSeconds % 60).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  })
  
  const startTimer = () => {
    timer = setInterval(() => {
      if (currentTime.value > 0) {
        currentTime.value -= 1000
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }
  
  onMounted(() => {
    startTimer()
  })
  
  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })
  </script>
  
  <style scoped>
  .product-timer {
    position: absolute;
    top: 1rem;
    right: 2rem;
    width: 80%;
  }
  
  .product-timer__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
  }
  
  .product-timer__label {
    font-size: 1rem;
    font-weight: bold;
    color: #ef394e;
  }
  
  .product-timer__time {
    font-size: 0.8rem;
    color: #ef394e;
    font-weight: bold;
    direction: ltr;
  }
  
  .product-timer__bar {
    height: 4px;
    background-color: #eee;
    border-radius: 2px;
    position: relative;
    overflow: hidden;
  }
  
  .product-timer__progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #ef394e;
    transition: width 1s linear;
  }
  
  </style>
  