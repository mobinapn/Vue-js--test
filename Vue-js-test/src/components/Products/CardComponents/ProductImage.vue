<template>
    <div class="product-image">
      <img :src="image" alt="Product Image" class="product-image__img">
    </div>
  </template>
  
  <script setup>
  defineProps({
    image: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .product-image {
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1rem;
    margin-top: 2rem;
  }
  
  .product-image__img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  </style>