import { initStripe } from './stripe';
import { initAuth } from './auth';
import { CartManager } from './cart';

declare global {
  interface Window {
    Stripe: any;
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🌟 Elite Shop initialized');
  
  // Stripe
  await initStripe();
  
  // Supabase Auth
  await initAuth();
  
  // Cart
  const cart = new CartManager();
  cart.init();
});
