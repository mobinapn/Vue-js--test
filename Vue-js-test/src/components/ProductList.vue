<script setup>
import { onMounted } from 'vue';
import ProductCard from './ProductCard.vue';
import { useFetchProducts } from '@/composables/useFetchProducts.js';

const {
  products,
  error,
  loading,
  fetchData
} = useFetchProducts('/data/products.json');

onMounted(fetchData);
</script>

<template>
  <div class="product-list">
    <h1 class="product-list__title">پرفروش‌ترین‌ها</h1>

    <div v-if="loading">⏳ در حال بارگذاری...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else class="product-list__container">
      <ProductCard 
        v-for="product in products" 
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
<style scoped>
.product-list {
  width: 100%;
  margin-bottom: 2em;
}

.product-list__title {
  font-size: 1.8rem;
  margin: 1.5rem 1rem;
  font-weight: bold;
  text-align: right;
}

.product-list__container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding:10px auto;
}

@media (max-width: 768px) {
  .product-list__container {
    justify-content: center;
  }
}
</style>



