
<script setup>
import ProductCard from './ProductCard.vue';
import { computed } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: null
  },
  limit: {
    type: Number,
    default: null
  }
});

const limitedProducts = computed(() => {
  return props.limit ? props.products.slice(0, props.limit) : props.products;
});
</script>

<template>
  <div class="product-list">
    <div v-if="loading" class="loading">⏳ در حال بارگذاری...</div>
    <div v-else-if="error" class="error">❌ {{ error }}</div>

    <div v-else class="product-list__container">
      <ProductCard 
        v-for="product in limitedProducts" 
        :key="product.id" 
        :product="product" 
        class="product-card"
      />
    </div>
  </div>
</template>

<style scoped>
.product-list {
  width: 100%;
  margin-bottom: 2em;
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

.loading,
.error {
  text-align: center;
  font-size: 1.1rem;
}

.error {
  color: red;
}
</style>