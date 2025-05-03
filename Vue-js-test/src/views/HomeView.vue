<template>
  <div style="margin-bottom: 70px;">
  <headerSection/>
</div>
<BaseSlider/>
<ProductList/>
<CategorySection/>
<SelectedBrands/>

  
</template>
<script setup>
import headerSection from "../components/HeaderSection.vue";
import BaseSlider from "@/components/BaseSlider.vue";
import ProductList from "@/components/ProductList.vue";
import CategorySection from "@/components/CategorySection.vue";
import SelectedBrands from "@/components/SelectedBrands.vue";
</script>