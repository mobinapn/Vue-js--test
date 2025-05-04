<script setup>
import {RouterView } from 'vue-router'
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
</script>

<template>
     <div style="margin-bottom: 70px;">
  <headerSection/>
    </div>
  <RouterView />
  <FooterSection/>
  <ScrollToTop/>

</template>
