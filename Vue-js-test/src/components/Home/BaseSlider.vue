<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const slides = ref([
  { image: '/images/slider/Slide1.webp', alt: 'Slide 1' },
  { image: '/images/slider/slide2.webp', alt: 'Slide 2' },
  { image: '/images/slider/slide3.webp', alt: 'Slide 3' },
  { image: '/images/slider/slide4.webp', alt: 'Slide 4' },
  { image: '/images/slider/slide5.gif', alt: 'Slide 5' }
]);


const swiperOptions = ref({
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-active',
    horizontalClass: 'swiper-pagination-horizontal',
  }
});
</script>

<template>
  <div class="slider-container">
    <Swiper v-bind="swiperOptions">
      <SwiperSlide 
        v-for="(slide, index) in slides" 
        :key="index"
      >
        <img :src="slide.image" :alt="slide.alt" class="slider-image" loading="lazy">
      </SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
    <div class="custom-navigation">
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.custom-navigation {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  gap: 10px;
}


:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  position: static;
  margin: 0;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 18px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  margin: 0 4px;
}

:deep(.swiper-pagination-bullet-active) {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.2);
}


@media (max-width: 768px) {
  .custom-navigation {
    bottom: 15px;
    right: 15px;
    gap: 8px;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 32px;
    height: 32px;
  }
  
  :deep(.swiper-button-next:after),
  :deep(.swiper-button-prev:after) {
    font-size: 14px;
  }
  
  :deep(.swiper-pagination) {
    bottom: 15px;
    left: 15px;
  }
  
  :deep(.swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
  }
}
</style>