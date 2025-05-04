<template>
     <!-- Footer Quick Links -->
     <div class="footer-links">
            <div class="footer-links-column">
              <h3>لینک‌های سریع</h3>
              <ul>
                <li v-for="(link, index) in quickLinks" :key="`quick-${index}`">
                  <RouterLink :to="link.path">{{ link.title }}</RouterLink>
                </li>
              </ul>
            </div>
  
            <div class="footer-links-column">
              <h3>خدمات</h3>
              <ul>
                <li v-for="(service, index) in services" :key="`service-${index}`">
                  <RouterLink :to="service.path">{{ service.title }}</RouterLink>
                </li>
              </ul>
            </div>
  
            <div class="footer-links-column">
              <h3>تماس با ما</h3>
              <ul class="contact-info">
                <li>
                  <i class="fa-solid fa-location-dot"></i>
                  <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i>
                  <span>info@example.com</span>
                </li>
              </ul>
            </div>
          </div>
</template>
<script setup>
 import { RouterLink } from 'vue-router'
// Data for links
const quickLinks = [
    { title: 'خانه', path: '/' },
    { title: 'درباره ما', path: '/' },
    { title: 'محصولات', path: '/products' },
    { title: 'وبلاگ', path: '/' },
    { title: 'تماس با ما', path: '/' }
  ]
  
  const services = [
    { title: 'فروش آنلاین', path: '/' },
    { title: 'مشاوره', path: '/' },
    { title: 'پشتیبانی محصولات', path: '/' },
    { title: 'آموزش', path: '/' },
    { title: 'خدمات پس از فروش', path: '/' }
  ]
</script>
<style scoped>
  /* Footer Links */
  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  
  .footer-links-column h3 {
    color: #222;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
  }
  
  .footer-links-column h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 2px;
    background-color: #2563eb;
  }
  
  .footer-links-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-links-column ul li {
    margin-bottom: 12px;
  }
  
  .footer-links-column ul li a {
    color: #555;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease, padding-right 0.3s ease;
    position: relative;
  }
  
  .footer-links-column ul li a:hover {
    color: #2563eb;
    padding-right: 5px;
  }
  
  .footer-links-column ul li a::before {
    content: '\f105';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    margin-left: 8px;
    opacity: 0;
    transition: opacity 0.3s ease, margin-left 0.3s ease;
  }
  
  .footer-links-column ul li a:hover::before {
    opacity: 1;
    margin-left: 4px;
  }
  
  /* Contact Info */
  .contact-info li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
  }
  
  .contact-info li i {
    color: #2563eb;
    font-size: 1rem;
    margin-left: 12px;
    margin-top: 3px;
  }
  
  .contact-info li span {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    .footer-links {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .footer-links {
      grid-template-columns: 1fr;
    }}
</style>