<template>
    <div class="product-colors">
      <div 
        v-for="(color, index) in colors" 
        :key="index" 
        class="product-colors__dot"
        :class="`product-colors__dot--${color}`"
      ></div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    colors: {
      type: Array,
      default: () => []
    }
  });
  </script>
  
  <style scoped>
  .product-colors {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    display: flex;
    gap: 0.3rem;
  }
  
  .product-colors__dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .product-colors__dot--black {
    background-color: #222;
  }
  
  .product-colors__dot--cream {
    background-color: #f5e8d6;
  }
  
  .product-colors__dot--silver {
    background-color: #c0c0c0;
  }
  
  .product-colors__dot--blue {
    background-color: #a8d8f0;
  }
  
  .product-colors__dot--purple {
    background-color: #c1a0da;
  }
  
  .product-colors__dot--green {
    background-color: #a5d6b7;
  }
  
  .product-colors__dot--red {
    background-color: #f5a0a0;
  }
  </style>