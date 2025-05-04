<template>
    <div class="product-price" :class="{ 'product-price--unavailable': !available }">
      <template v-if="available">
        <div class="price-container">
          <div class="product-price__current">
           {{ formatPrice(originalPrice) }}
          </div>
          <div v-if="originalPrice" class="product-price__original">
            {{ formatPrice(price) }}
          </div>
        </div>
        <div v-if="discount > 0" class="product-price__discount">
          {{ toPersianDigits(discount) }}٪
        </div>
      </template>
      <div v-else class="product-price__unavailable">
        ناموجود
      </div>
    </div>
  </template>
  
  <script setup>
import { usePersianPrice } from '../../composables/usePersianPrice';

  
  const props = defineProps({
    price: {
      type: Number,
      default: null
    },
    originalPrice: {
      type: Number,
      default: null
    },
    discount: {
      type: Number,
      default: 0
    },
    available: {
      type: Boolean,
      default: true
    }
  });

  const { formatPrice , toPersianDigits } = usePersianPrice();
  
  </script>
  
  <style scoped>
  .product-price {
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    padding: 1rem 0;
    margin-top: 1rem;
  }
  
  .price-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .product-price__current {
    font-size: 1rem;
    font-weight: 700;
    color: #000;
    text-align: right;
  }
  
  .product-price__original {
    font-size: 0.75rem;
    color: #a0a0a0;
    text-decoration: line-through;
    margin-top: 0.25rem;
    text-align: right;
  }
  
  .product-price__discount {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ef394e;
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    width: 2rem;
    height: 1.5rem;
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;
  }
  
  .product-price__unavailable {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    color: #666;
  }
  </style>