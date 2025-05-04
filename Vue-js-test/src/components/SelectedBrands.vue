<template>
  <div class="brand-slider-wrapper">
    <div class="slider-container">
      <!-- باکس ثابت برندهای منتخب -->
      <div class="featured-brands">
        <div class="featured-icon">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <h3>برندهای منتخب</h3>
      </div>

      <!-- اسلایدر -->
      <div class="swiper-container">
        <Swiper
          :modules="[Autoplay, Navigation]"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :spaceBetween="20"
          :slidesPerView="5"
          :breakpoints="breakpoints"
          :navigation="true"
          class="mySwiper"
        >
          <SwiperSlide v-for="(brand, index) in brands" :key="index">
            <div class="brand-item">
              <img :src="brand.logo" :alt="`لوگوی برند ${brand.name}`" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'

const brands = [
  { name: 'Silicon Power', logo: '/images/brands/silicon-power.png' },
  { name: 'TP-Link', logo: '/images/brands/tp-link.png' },
  { name: 'LG', logo: '/images/brands/lg.png' },
  { name: 'Haylou', logo: '/images/brands/haylou.png' },
  { name: 'Sony', logo: '/images/brands/sony.png' },
  { name: 'Anker', logo: '/images/brands/anker.png' },
  { name: 'Samsung', logo: '/images/brands/samsung.png' },
  { name: 'Apple', logo: '/images/brands/apple.png' },
  { name: 'Xiaomi', logo: '/images/brands/xiaomi.png' },
]

const breakpoints = {
  320: { slidesPerView: 1 },
  480: { slidesPerView: 2 },
  640: { slidesPerView: 3 },
  768: { slidesPerView: 4 },
  1024: { slidesPerView: 5 },
}
</script>

<style scoped>
.brand-slider-wrapper {
  width: 100%;
  margin: 2.5rem 0;
}

.slider-container {
  display: flex;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
}

.featured-brands {
  background: linear-gradient(#1e88e5, #094071);
  color: white;
  padding: 20px;
  width: 180px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.featured-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.featured-brands h3 {
  margin: 0;
  font-size: 16px;
  text-align: center;
}

.swiper-container {
  flex: 1;
  position: relative;
  padding: 20px 40px;
  overflow: hidden;
}

.brand-item {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.brand-item:hover {
  transform: scale(1.05);
}

.brand-item img {
  max-width: 100px;
  max-height: 80px;
  object-fit: contain;
}

/* Style default Swiper navigation buttons */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  color: #1e88e5;
}

:deep(.swiper-button-next)::after,
:deep(.swiper-button-prev)::after {
  font-size: 14px;
  font-weight: bold;
}

/* Responsive styles */
@media (max-width: 768px) {
  .slider-container {
    flex-direction: column;
  }

  .featured-brands {
    width: 100%;
    min-width: 100%;
    padding: 15px;
  }

  .swiper-container {
    width: 100%;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 24px;
    height: 24px;
  }
  
  :deep(.swiper-button-next)::after,
  :deep(.swiper-button-prev)::after {
    font-size: 12px;
  }

  .brand-item img {
    max-width: 80px;
    max-height: 60px;
  }
}
</style>