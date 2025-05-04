
<template>
    <div class="product-page">
      <h1 class="product-page__title">همه محصولات</h1>
      
      <ProductList 
        :products="store.products.slice(0, visibleCount)" 
        :loading="store.loading" 
        :error="store.error" 
      />
  
      <div class="load-more-container" v-if="store.products.length > 0 && visibleCount < store.products.length">
        <button @click="loadMore" class="load-more-button">مشاهده محصولات بیشتر</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useProductsStore } from '../stores/productsStore.js';
  import ProductList from '../components/Products/ProductList.vue';
  
  const store = useProductsStore();
  
  onMounted(async () => {

    if (store.products.length === 0) {
      await store.fetchProducts();
    }
  });
  
  const visibleCount = ref(10);
  
  const loadMore = () => {
    visibleCount.value += 5; 
  };
  </script>
  
  <style scoped>
  .product-page {
    margin: 2rem auto;
    padding: 0 1rem;
  }
  
  .product-page__title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .load-more-container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  
  .load-more-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
  }
  
  .load-more-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .load-more-button:active {
    transform: translateY(0);
  }
  </style>