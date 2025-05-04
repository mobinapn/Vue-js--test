<template>
    <div class="copyright">
          <p>
            تمامی حقوق این وب‌سایت محفوظ است &copy; {{ props.currentYear }}
          </p>
          <div class="legal-links">
            <RouterLink to="/">حریم خصوصی</RouterLink>
            <RouterLink to="/">قوانین و مقررات</RouterLink>
            <RouterLink to="/">سوالات متداول</RouterLink>
          </div>
        </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'

  const props = defineProps(['currentYear'])
</script>

<style scoped>
/* Copyright */
.copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }
  
  .copyright p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }
  
  .legal-links {
    display: flex;
    gap: 24px;
  }
  
  .legal-links a {
    color: #666;
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .legal-links a:hover {
    color: #2563eb;
  }
  @media (max-width: 768px) { 
    .copyright {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }
    
    .legal-links {
      justify-content: center;
    }
  }
  
</style>