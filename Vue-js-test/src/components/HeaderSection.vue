<template>
    <header :class="{ open: isMenuOpen }">
      <RouterLink to="/">
        <img class="logo" src="/images/Logo-removebg-preview.png">
      </RouterLink>

      <div class="menu-toggle" @click="toggleMenu">
        <i class="fa-solid" :class="isMenuOpen ? 'fa-xmark' : 'fa-bars'"></i>
      </div>
  
      <nav class="nav">
        <ul class="navigation" @click="toggleMenu">
          <li><RouterLink to="/">خانه</RouterLink></li>
          <li><RouterLink to="/products">محصولات</RouterLink></li>
          <li><RouterLink to="/">درباره ما</RouterLink></li>
          <li><RouterLink to="/">خدمات</RouterLink></li>
        </ul>
  
        <div class="search" @click="toggleSearch">
          <i class="fa-solid fa-magnifying-glass" v-if="!isSearchOpen"></i>
          <i class="fa-solid fa-xmark" v-else></i>
        </div>
      </nav>
  
      <div class="searchBox" :class="{ active: isSearchOpen }">
        <input type="text" placeholder="اینجا جست و جو کنید..." />
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  
  const isSearchOpen = ref(false)
  const isMenuOpen = ref(false)
  
  const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value
  }
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value 
    if(!isMenuOpen.value){
      isSearchOpen.value = false
    }
  }
  </script>
  
  <style scoped>

  header {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 70px;
    background: #fff;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .logo{
    width: 150px;
    height: auto;
}

  .menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  
  .navigation {
    list-style: none;
    display: flex;
    gap: 25px;
  }
  
  .navigation li a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    position: relative;
  }
  
  .navigation li a::before {
    content: '';
    position: absolute;
    bottom: -4px;
    right: 0;
    width: 0%;
    height: 2px;
    background: var(--color-primary);
    transition: width 0.3s ease;
  }
  
  .navigation li a:hover::before {
    width: 100%;
  }
  

  .search {
    font-size: 1.2rem;
    cursor: pointer;
  }
  

  .searchBox {
    position: absolute;
    top: 4rem;
    right: -100%;
    width: 100%;
    background: #fff;
    padding: 15px 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: right 0.4s ease;
  }
  
  .searchBox.active {
    right: 0;
  }
  
  .searchBox input {
    width: 100%;
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    background: transparent;
  }
  

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
  
    .nav {
      position: absolute;
      top: 70px;
      right: -100%;
      flex-direction: column;
      align-items: flex-start;
      background: #fff;
      width: 100%;
      padding: 20px;
      transition: right 0.3s ease;
    }
  
    header.open .nav {
      right: 0;
    }
  
    .navigation {
      flex-direction: column;
      gap: 15px;
      width: 100%;
    }
  
    .search {
      margin-top: 15px;
    }
    .searchBox {
      top: 20rem;
    }
  }
  </style>
  