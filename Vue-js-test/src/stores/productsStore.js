import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('/data/products.json');

      if (!response.ok) {
        throw new Error();
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error();
      }

      const data = await response.json();
      products.value = data;

    } catch (err) {
      error.value = 'خطا در دریافت اطلاعات محصولات. لطفاً بعداً دوباره تلاش کنید.';
    } finally {
      loading.value = false;
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
  };
});
