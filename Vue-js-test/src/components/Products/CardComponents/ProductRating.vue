<template>
    <div class="product-rating">
    <div v-if="rating > 0">
      <span  class="product-rating__star"><i class="fa-solid fa-star"></i></span>
      <span class="product-rating__value">{{ toPersianDigits(rating) }}</span>
    </div>
    </div>
  </template>
  
  <script setup>
  import { usePersianPrice } from '@/composables/usePersianPrice';

  defineProps({
    rating: {
      type: Number,
      default: 0
    }
  });
  const { toPersianDigits } = usePersianPrice();
  </script>
  
  <style scoped>
  .product-rating {
    height: 1rem;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  
  .product-rating__star {
    color: #ffc107;
    font-size: 0.75rem;
  }
  
  .product-rating__value {
    font-size: 0.9rem;
    font-weight: 500;
    color:var(--color-secondary)
  }
  </style>
  