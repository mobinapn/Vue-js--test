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
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Unexpected content type');
      }
  
      const data = await response.json();
      products.value = data;
  
    } catch (err) {
      console.error('خطا هنگام دریافت محصولات:', err);

      error.value = 'مشکلی در بارگذاری محصولات پیش آمده. لطفاً بعداً تلاش کنید.';
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
