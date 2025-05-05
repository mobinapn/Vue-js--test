<template>
    <footer class="footer">
      <div class="footer-container">
      
        <div class="footer-top">
            <FooterTop/>
            <FooterLinks/>
        </div>
        <FooterFeatures/>
        
        <div class="footer-divider"></div>
  
        <FooterBottom :currentYear="currentYear"/>
      </div>
    </footer>
  </template>
  
  <script setup>
  import {  computed } from 'vue'

  import FooterTop from './Footer/FooterTop.vue'
  import FooterLinks from './Footer/FooterLinks.vue'
  import FooterFeatures from './Footer/FooterFeatures.vue'
  import FooterBottom from './Footer/FooterBottom.vue'


  const currentYear = computed(() => new Date().getFullYear())
  
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f9fa;
    color: #333;
    direction: rtl;
    position: relative;
    margin-top: 80px;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 24px 30px;
  }
  
  .footer-top {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    margin-bottom: 40px;
  }
  

  .footer-divider {
    height: 1px;
    background-color: #eee;
    margin: 24px 0;
  }

  @media (max-width: 1024px) {
    .footer-top {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .footer-top {
      grid-template-columns: 1fr;
    }

    .features-container {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .footer-container {
      padding: 40px 16px 20px;
    }
  }
  </style>