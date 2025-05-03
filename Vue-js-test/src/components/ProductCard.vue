<!-- ProductCard.vue -->
<template>
    <div class="product-card">
      <ProductColors v-if="product.colors && product.colors.length" :colors="product.colors" />
      
      <ProductImage :image="product.image"/>
      
      <ProductSpecs :specs="product.specs" />
      
      <div class="product-card__info">
        <h3 class="product-card__title">{{ product.name }}</h3>
        <p class="product-card__description">{{ product.description }}</p>
      </div>
      <div class="product-card__footer">
        <ProductRating :rating="product.rating" />
        <ProductPrice 
          :price="product.price"
          :originalPrice="product.originalPrice"
          :discount="product.discount"
          :available="product.available"
        />
      </div>
      
      <ProductTimer v-if="product.hasTimer" :timeRemaining="product.timeRemaining" />
    </div>
  </template>
  
  <script setup>
  import ProductImage from './CardComponents/ProductImage.vue';
  import ProductSpecs from './CardComponents/ProductSpecs.vue';
  import ProductPrice from './CardComponents/ProductPrice.vue';
  import ProductRating from './CardComponents/ProductRating.vue';
  import ProductTimer from './CardComponents/ProductTimer.vue';
  import ProductColors from './CardComponents/ProductColors.vue';
  
  defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .product-card {
    width: 280px;
    height: 480px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    padding: 0.75rem;
  }
  
  .product-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .product-card__info {
    padding: 0 0.5rem;
    margin-top: 0.5rem;
    flex-grow: 1;
  }
  
  .product-card__title {
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
  
  .product-card__description {
    font-size: 0.8rem;
    color: #666;
    line-height: 1.5;
  }
  
  .product-card__footer {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    padding: 0.75rem 0.5rem;
    flex-direction: column;
  }
  </style>