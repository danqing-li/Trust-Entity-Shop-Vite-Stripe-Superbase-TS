let stripe: any;

export async function initStripe() {
  const response = await fetch('/.netlify/functions/create-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: [{ name: 'Elite Product', price: 29900 }] // PLN分
    })
  });
  
  const { clientSecret } = await response.json();
  stripe = window.Stripe('pk_live_你的密钥');
}

export async function checkout(items: any[]) {
  if (!stripe) throw new Error('Stripe not initialized');
  
  const { error } = await stripe.redirectToCheckout({
    lineItems: items.map(item => ({
      price: item.priceId,
      quantity: item.quantity
    })),
    mode: 'payment',
    successUrl: `${window.location.origin}/success.html`,
    cancelUrl: window.location.origin
  });
  
  if (error) {
    console.error('Stripe checkout error:', error);
    alert('支付失败');
  }
}
