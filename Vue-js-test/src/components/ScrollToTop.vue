<template>
     <!-- Back to Top Button -->
     <button 
        @click="scrollToTop" 
        class="back-to-top" 
        :class="{ 'show': showBackToTop }"
        aria-label="بازگشت به بالا"
      >
        <i class="fa-solid fa-chevron-up"></i>
      </button>
</template>

<script setup>
import { ref, onMounted , onBeforeUnmount } from 'vue'
// Methods
const showBackToTop = ref(false)

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  const handleScroll = () => {
    showBackToTop.value = window.scrollY > 300
  }
   // Lifecycle
   onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>
<style scoped>
  
  /* Back to Top Button */
  .back-to-top {
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 45px;
    height: 45px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 99;
    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
  }
  
  .back-to-top.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .back-to-top:hover {
    background-color: #1d4ed8;
    transform: translateY(-5px);
  }
</style>