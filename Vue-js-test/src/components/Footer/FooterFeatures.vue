<template>
    <div class="features-container">
          <div class="feature">
            <div class="feature-icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div class="feature-text">
              <h4>ارسال سریع</h4>
              <p>ارسال سفارشات در کمتر از ۲۴ ساعت</p>
            </div>
          </div>
          
          <div class="feature">
            <div class="feature-icon">
              <i class="fa-solid fa-headset"></i>
            </div>
            <div class="feature-text">
              <h4>پشتیبانی ۲۴ ساعته</h4>
              <p>همیشه آماده پاسخگویی به شما هستیم</p>
            </div>
          </div>
          
          <div class="feature">
            <div class="feature-icon">
              <i class="fa-solid fa-credit-card"></i>
            </div>
            <div class="feature-text">
              <h4>پرداخت امن</h4>
              <p>تراکنش‌های ایمن و مطمئن</p>
            </div>
          </div>
          
          <div class="feature">
            <div class="feature-icon">
              <i class="fa-solid fa-rotate-left"></i>
            </div>
            <div class="feature-text">
              <h4>بازگشت آسان</h4>
              <p>۷ روز ضمانت بازگشت کالا</p>
            </div>
          </div>
        </div>
</template>
<style scoped>
/* Features Section */
.features-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin: 40px 0;
    padding: 32px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .feature:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  }
  
  .feature-icon {
    background-color: rgba(37, 99, 235, 0.1);
    color: var(--color-primary);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }
  
  .feature-text h4 {
    margin: 0 0 5px;
    font-size: 1rem;
    font-weight: 600;
    color: #222;
  }
  
  .feature-text p {
    margin: 0;
    font-size: 0.85rem;
    color: #666;
  }
  
  @media (max-width: 1024px) {
    .features-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>