<!-- HomePage.vue -->
<template>
  <BaseSlider />

  <div class="product-list__header">
    <h1 class="product-list__title">پرفروش‌ترین‌ها</h1>
    <RouterLink to="/products">مشاهده بیشتر</RouterLink>
  </div>

  <ProductList :products="store.products" :loading="store.loading" :error="store.error" :limit="5" />

  <CategorySection />
  <SelectedBrands />
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductsStore } from '../stores/productsStore';
import BaseSlider from '../components/BaseSlider.vue';
import ProductList from '../components/ProductList.vue';
import CategorySection from '../components/CategorySection.vue';
import SelectedBrands from '../components/SelectedBrands.vue';

const store = useProductsStore();

onMounted(async () => {
  await store.fetchProducts();
});
</script>

<style scoped>
.product-list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2em;
}

.product-list__title {
  font-size: 1.8rem;
  margin: 1.5rem 1rem;
  font-weight: bold;
  text-align: right;
}
</style>