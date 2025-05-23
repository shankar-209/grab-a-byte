let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();

  // Animate button to show feedback
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.textContent.includes(item)) {
      btn.textContent = 'Added ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = `Add to Cart ($${price})`;
        btn.disabled = false;
      }, 1200);
    }
  });
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  cart.forEach(({ item, price }, index) => {
    const li = document.createElement('li');
    li.textContent = `${item} - $${price}`;
    cartList.appendChild(li);
  });

  document.getElementById('total').textContent = total;
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}