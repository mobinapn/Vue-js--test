<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const slides = ref([
  { image: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/5448b1157d3d8edea13e66fedf46024828408c04_1741705464.jpg?x-oss-process=image/quality,q_95/format,webp', alt: 'Slide 1' },
  { image: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/4f5345308930f088b50a143b095258b2b68a4abe_1745675600.jpg?x-oss-process=image/quality,q_95/format,webp', alt: 'Slide 2' },
  { image: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/95643e498863d67154126582d65b94f414879418_1745761363.jpg?x-oss-process=image/quality,q_95/format,webp', alt: 'Slide 3' },
  { image: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/988e1253752d1fef349a8eb04f7ad428fceffccd_1745773709.jpg?x-oss-process=image/quality,q_95/format,webp', alt: 'Slide 4' },
  { image: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/339e146482a10355645286800d215af3305a6d5f_1735462444.gif?x-oss-process=image?x-oss-process=image/format,webp', alt: 'Slide 5' }
]);

// Configure Swiper options
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