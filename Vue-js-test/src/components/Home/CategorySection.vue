<template>
    <section class="category-section">
      <h2 class="title">خرید بر اساس دسته‌بندی</h2>
      <div class="category-row">
        <div
          v-for="(cat, index) in firstRow"
          :key="'first-' + index"
          class="category-item"
        >
          <img :src="cat.image" :alt="cat.title" loading="lazy"/>
          <span class="label">{{ cat.title }}</span>
        </div>
      </div>
      <div class="category-row second-row">
        <div
          v-for="(cat, index) in secondRow"
          :key="'second-' + index"
          class="category-item"
        >
          <img :src="cat.image" :alt="cat.title" loading="lazy" />
          <span class="label">{{ cat.title }}</span>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const allCategories = [
    { title: "طلا و نقره", image: "/images/categories/gold.png" },
    { title: "مد و پوشاک", image: "/images/categories/fashion.png" },
    { title: "ابزار آلات", image: "/images/categories/tools.png" },
    { title: "موتورسیکلت", image: "/images/categories/vehicle.png" },
    { title: "آرایشی بهداشتی", image: "/images/categories/beauty.png" },
    { title: "لوازم خانگی برقی", image: "/images/categories/download.jpg" },
    { title: "خانه و آشپزخانه", image: "/images/categories/download (1).jpg" },
    { title: " کالای دیجیتال", image: "/images/categories/digital.png" },
    { title: "موبایل", image: "/images/categories/mobile.png" },
    { title: "کالای کارکرده", image: "/images/categories/used.png" },
    { title: "بومی و محلی", image: "/images/categories/local.png" },
    { title: "کودک و نوزاد", image: "/images/categories/kids.png" },
    { title: " کالای خوراکی", image: "/images/categories/food.png" },
    { title: "کارت هدیه", image: "/images/categories/gift.png" },
    { title: "ورزش و سفر", image: "/images/categories/sport.png" },
    { title: "کتاب و هنر", image: "/images/categories/books.png" },
    { title: "پزشکی", image: "/images/categories/medical.png" } ,
   
  ];
  
  const firstRow = allCategories.slice(0, 9);
  const secondRow = allCategories.slice(9);
  </script>
  
  <style scoped>
  .category-section {
    background-color: #fff;
    padding: 2rem 0.5rem;
    text-align: center;
  }
  
  .title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #222;
  }
  
  .category-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    min-height: 130px;
  }
  
  .second-row {
    padding: 0 2rem; 
  }
  
  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;  
    cursor: pointer;
    transition: transform 0.2s ease;
    will-change: transform;
  }
  
  .category-item:hover {
    transform: translateY(-4px);
  }
  
  .category-item img {
    width: 100px;
    height: 100px;
    object-fit:cover;
    border-radius: 50%;
    background-color: #f5f5f5;
    margin-bottom: 0.5rem;
    border: 1px solid #eee;
    padding: 2px;
    display: block;
  }
  
  .label {
    font-size: 0.8rem;
    color: #333;
    text-align: center;
  }
  </style>
  