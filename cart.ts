export class CartManager {
  private cart: any[] = [];
  
  constructor() {
    this.loadCart();
  }
  
  init() {
    // 绑定事件
    document.getElementById('buyBtn')!.onclick = (e: Event) => {
      e.stopPropagation();
      this.addItem();
    };
    
    document.getElementById('closeCart')!.onclick = (e: Event) => {
      e.stopPropagation();
      this.closeCart();
    };
    
    document.getElementById('overlay')!.onclick = () => this.closeCart();
    
    document.getElementById('checkoutBtn')!.onclick = () => {
      this.checkout();
    };
  }
  
  private addItem() {
    this.cart.push({ id: 1, name: 'Elite Product', price: 299, qty: 1 });
    this.saveCart();
    this.openCart();
    this.renderCart();
  }
  
  private openCart() {
    document.getElementById('cartDrawer')!.classList.add('open');
    document.getElementById('overlay')!.classList.add('show');
  }
}
