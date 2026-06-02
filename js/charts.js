/* ----------------------------------------------------
   HỌC VIỆN THÊU TAY NGUYỄN THỊ HẰNG - ADMIN CHARTS
   ---------------------------------------------------- */

// Vẽ biểu đồ SVG tài chính doanh thu
function drawAdminCharts() {
  const container = document.getElementById('svg-chart-wrapper');
  if (!container) return;

  const dataOnline = [12, 18, 25, 30, 42, 58, 70]; // Doanh thu khóa học qua các tháng (Triệu VND)
  const dataKits = [8, 12, 15, 18, 20, 24, 28];    // Doanh thu bộ kit thêu qua các tháng

  const width = 600;
  const height = 220;
  
  // Tính toán tọa độ điểm
  const pointsOnline = dataOnline.map((val, idx) => {
    const x = (idx / (dataOnline.length - 1)) * width;
    const y = height - (val / 80) * (height - 40) - 20;
    return { x, y };
  });

  const pointsKits = dataKits.map((val, idx) => {
    const x = (idx / (dataKits.length - 1)) * width;
    const y = height - (val / 80) * (height - 40) - 20;
    return { x, y };
  });

  // Tạo đường dẫn SVG Path
  const pathOnline = `M ${pointsOnline.map(p => `${p.x} ${p.y}`).join(' L ')}`;
  const pathKits = `M ${pointsKits.map(p => `${p.x} ${p.y}`).join(' L ')}`;

  // Tạo các chấm tròn SVG cho các đỉnh
  let circlesHtml = '';
  pointsOnline.forEach(p => {
    circlesHtml += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--color-gold-dark)" stroke="white" stroke-width="2" />`;
  });
  pointsKits.forEach(p => {
    circlesHtml += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="var(--color-charcoal)" stroke="white" stroke-width="1.5" />`;
  });

  // Ráp mã nguồn SVG hoàn chỉnh
  container.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
      <!-- Grid Lines -->
      <line x1="0" y1="20" x2="${width}" y2="20" stroke="#f3f4f6" stroke-width="1" />
      <line x1="0" y1="70" x2="${width}" y2="70" stroke="#f3f4f6" stroke-width="1" />
      <line x1="0" y1="120" x2="${width}" y2="120" stroke="#f3f4f6" stroke-width="1" />
      <line x1="0" y1="170" x2="${width}" y2="170" stroke="#f3f4f6" stroke-width="1" />
      
      <!-- Chart lines -->
      <path d="${pathOnline}" fill="none" stroke="var(--color-gold-dark)" stroke-width="3" />
      <path d="${pathKits}" fill="none" stroke="var(--color-charcoal)" stroke-width="2" stroke-dasharray="4" />
      
      <!-- Dots -->
      ${circlesHtml}
    </svg>
  `;
}

// Khởi chạy biểu đồ khi load trang admin
document.addEventListener('DOMContentLoaded', () => {
  drawAdminCharts();
});
