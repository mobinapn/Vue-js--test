<template>
    <div class="product-specs">
      <div v-for="(spec, index) in specs" :key="index" class="spec-item">
        <i :class="getIconClass(specKey(spec))"></i>
        <span>{{ specValue(spec) }}</span>
      </div>
    </div>
  </template>
<script setup>
defineProps({
  specs: {
    type: Array,
    required: true
  }
});


const iconMap = {
  battery: 'fa-solid fa-battery-full',
  camera: 'fa-solid fa-camera',
  screen: 'fa-solid fa-mobile',
  storage: 'fa-solid fa-sd-card'
};


const specKey = (spec) => Object.keys(spec)[0];
const specValue = (spec) => Object.values(spec)[0];


const getIconClass = (key) => iconMap[key] || 'fa-solid fa-circle-question';
</script>
<style scoped>
.product-specs {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.75rem;
  margin-top: 0.5rem;
}

.spec-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.85rem;
  color: #444;
}

.spec-item i {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: var(--color-secondary);
}
</style>
  