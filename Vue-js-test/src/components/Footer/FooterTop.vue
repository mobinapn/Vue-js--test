<template>
    <div class="footer-logo-container">
            <RouterLink to="/">
              <img class="footer-logo" src="/images/Logo-removebg-preview.png" alt="لوگو" />
            </RouterLink>
            <p class="footer-description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <div class="social-media">
              <a href="#" aria-label="اینستاگرام">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="تلگرام">
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a href="#" aria-label="لینکدین">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" aria-label="توییتر">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
</template>
<script setup>
 import { RouterLink } from 'vue-router'
</script>
<style scoped>
.footer-logo-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-logo {
    width: 140px;
    height: auto;
    margin-bottom: 16px;
  }
  .footer-description {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 24px;
  }
  
  /* Social Media */
  .social-media {
    display: flex;
    gap: 16px;
  }
  
  .social-media a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #f1f1f1;
    color: #333;
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }
  
  .social-media a:hover {
    background-color: #2563eb;
    color: white;
    transform: translateY(-3px);
  }
  
</style>