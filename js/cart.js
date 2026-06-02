/* ----------------------------------------------------
   HỌC VIỆN THÊU TAY NGUYỄN THỊ HẰNG - GIỎ HÀNG & THANH TOÁN
   ---------------------------------------------------- */

// Đọc giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem('embroidery_cart')) || [];

function saveCart() {
  localStorage.setItem('embroidery_cart', JSON.stringify(cart));
}

// Thêm vào giỏ hàng
function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
  updateCartUI();
  alert(`✓ Đã thêm "${name}" vào giỏ hàng thành công.`);
}

// Xóa khỏi giỏ hàng
function removeFromCart(idx) {
  cart.splice(idx, 1);
  saveCart();
  updateCartUI();
}

// Cập nhật giao diện giỏ hàng
function updateCartUI() {
  const list = document.getElementById('cart-items-list');
  const total = document.getElementById('cart-total-amount');
  
  if (!list || !total) return;

  if (cart.length === 0) {
    list.innerHTML = '<p style="color:#6b7280; font-size:13px;">Giỏ hàng trống.</p>';
    total.innerText = '0đ';
    return;
  }

  list.innerHTML = '';
  let sum = 0;
  cart.forEach((item, idx) => {
    sum += item.price;
    list.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <div style="display:flex; gap:12px; align-items:center;">
          <strong style="color:var(--color-gold-dark);">${item.price.toLocaleString('vi-VN')}đ</strong>
          <button onclick="removeFromCart(${idx})" style="background:none; border:none; color:var(--color-danger); cursor:pointer; font-weight:700; font-size:16px; padding: 0 4px;">×</button>
        </div>
      </div>
    `;
  });
  total.innerText = sum.toLocaleString('vi-VN') + 'đ';
}

// Mở thanh toán QR
function checkoutCart() {
  if (cart.length === 0) {
    alert('Giỏ hàng của bạn đang trống.');
    return;
  }
  let sum = 0;
  cart.forEach(item => sum += item.price);
  
  const modalAmount = document.getElementById('modal-payment-amount');
  const modal = document.getElementById('payment-modal');
  
  if (modalAmount && modal) {
    modalAmount.innerText = sum.toLocaleString('vi-VN') + 'đ';
    modal.classList.add('active');
  }
}

// Đóng thanh toán
function closePaymentModal(success) {
  const modal = document.getElementById('payment-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  if (success) {
    alert('Cảm ơn bạn! Hệ thống ngân hàng VietQR đã tự động ghi nhận giao dịch thành công. Trợ giảng của Nghệ nhân Nguyễn Thị Hằng sẽ liên hệ đóng gói chuyển phát học liệu sớm nhất.');
    cart = [];
    saveCart();
    updateCartUI();
  }
}

// Tự động tải lại giỏ hàng khi load trang
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
});
