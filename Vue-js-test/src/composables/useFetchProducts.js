// composables/useFetchProducts.js
import { ref } from 'vue';

export function useFetchProducts(url) {
  const products = ref([]);
  const error = ref(null);
  const loading = ref(false);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const response = await fetch(url, { signal: controller.signal });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`خطا در دریافت داده (${response.status})`);
      }

      const data = await response.json();

      // اعتبارسنجی اولیه دیتا
      if (!Array.isArray(data)) {
        throw new Error('فرمت داده نامعتبر است');
      }

      products.value = data;
    } catch (err) {
      if (err.name === 'AbortError') {
        error.value = '⏱ اتصال بیش از حد طول کشید';
      } else {
        error.value = err.message || '❌ خطای ناشناخته';
      }
      console.error('[fetchProducts Error]:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    products,
    error,
    loading,
    fetchData
  };
}
