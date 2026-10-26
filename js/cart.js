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
  let itemsHtml = '';
  cart.forEach(item => {
    sum += item.price;
    itemsHtml += `
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px;">
        <span>${item.name}</span>
        <strong style="color:var(--color-charcoal);">${item.price.toLocaleString('vi-VN')}đ</strong>
      </div>
    `;
  });
  
  const modalAmount = document.getElementById('modal-payment-amount');
  const modalItems = document.getElementById('checkout-items-list');
  const modal = document.getElementById('payment-modal');
  
  if (modalAmount && modal) {
    modalAmount.innerText = sum.toLocaleString('vi-VN') + 'đ';
    if(modalItems) modalItems.innerHTML = itemsHtml;
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
    // Kiểm tra trạng thái Auto-Approve từ Admin
    const isAutoApprove = localStorage.getItem('autoApproveMode') === 'true';
    if (isAutoApprove) {
      alert('Thanh toán thành công! Hệ thống Auto-Approve (Duyệt tự động) đã ghi nhận giao dịch của bạn. Quyền lợi khóa học đã được mở khóa.');
    } else {
      alert('Đã xác nhận gửi yêu cầu chuyển khoản. Đơn hàng của bạn đang trong trạng thái CHỜ DUYỆT. Nghệ nhân Nguyễn Thị Hằng sẽ kiểm tra biến động số dư và duyệt đơn sớm nhất!');
    }
    
    // Add pending order to localStorage for admin to see
    let pendingOrders = JSON.parse(localStorage.getItem('pendingOrders')) || [];
    pendingOrders.push({
      date: new Date().toLocaleString(),
      items: cart,
      total: cart.reduce((a, b) => a + b.price, 0),
      status: isAutoApprove ? 'APPROVED' : 'PENDING'
    });
    localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));

    cart = [];
    saveCart();
    updateCartUI();
  }
}

// Tự động tải lại giỏ hàng khi load trang
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
});
