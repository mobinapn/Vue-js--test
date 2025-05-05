<template>
  <div class="product-colors">
    <div 
      v-for="(color, index) in colors" 
      :key="index" 
      class="product-colors__dot"
      :style="{ backgroundColor: color }"
      :title="color"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  colors: {
    type: Array,
    default: () => []
  }
})

</script>

<style scoped>
.product-colors {
  position: absolute;
  top: 5rem;
  right: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.product-colors__dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
