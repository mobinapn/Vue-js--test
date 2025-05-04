<!-- HomePage.vue -->
<template>
  <BaseSlider />

  <div class="product-list_header">
    <h1 class="product-list_title">پرفروش‌ترین‌ها</h1>
    <RouterLink to="/products">مشاهده بیشتر</RouterLink>
  </div>

  <ProductList :products="store.products" :loading="store.loading" :error="store.error" :limit="5" />
  
  <CategorySection />
  <SelectedBrands />
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductsStore } from '../stores/productsStore';
import BaseSlider from '../components/Home/BaseSlider.vue';
import ProductList from '../components/Products/ProductList.vue';
import CategorySection from '../components/Home/CategorySection.vue';
import SelectedBrands from '../components/Home/SelectedBrands.vue';

const store = useProductsStore();

onMounted(async () => {
  await store.fetchProducts();
});
</script>

<style scoped>
.product-list_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em;
  font-weight: bold;
}

.product-list_title {
  font-size: 1.8rem;
}
</style>