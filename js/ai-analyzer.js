/* ----------------------------------------------------
   HỌC VIỆN THÊU TAY NGUYỄN THỊ HẰNG - AI STITCH ANALYZER
   ---------------------------------------------------- */

function simulateAIScan() {
  const prompt = document.getElementById('ai-upload-prompt');
  const targetImg = document.getElementById('ai-target-img');
  const scanner = document.getElementById('ai-scanner-light');
  
  if (!prompt || !targetImg || !scanner) return;

  prompt.style.display = 'none';
  targetImg.style.display = 'block';
  scanner.style.display = 'block';

  // Hiển thị trạng thái đang tính toán
  document.getElementById('score-density').innerText = 'Đang quét...';
  document.getElementById('score-harmony').innerText = 'Đang quét...';
  document.getElementById('score-composition').innerText = 'Đang quét...';
  document.getElementById('score-overall').innerText = '...';

  setTimeout(() => {
    scanner.style.display = 'none';
    
    // Hiển thị các điểm bắt lỗi trên ảnh thêu sen mẫu
    document.getElementById('marker-err-1').style.display = 'block';
    document.getElementById('marker-err-2').style.display = 'block';
    document.getElementById('marker-good-1').style.display = 'block';

    // Cập nhật điểm số
    document.getElementById('score-density').innerText = '82 / 100';
    document.getElementById('score-harmony').innerText = '95 / 100';
    document.getElementById('score-composition').innerText = '90 / 100';
    document.getElementById('score-overall').innerText = '89 / 100';

    // Lời khuyên chi tiết từ AI Coach
    document.getElementById('ai-advice-text').innerHTML = `
      <strong>🎯 Chẩn đoán AI hoàn tất (Điểm: 89):</strong><br>
      • Phát hiện 2 vị trí cần khắc phục. Hãy click vào các <strong>chấm đỏ</strong> trên ảnh bài thêu để xem chi tiết.<br>
      • Kỹ thuật loang phối chỉ màu sắc của bạn cực kỳ tốt (95 điểm). Chỉ cần nới lỏng tay ở các mũi chéo cua cong là tác phẩm hoàn hảo.
    `;
  }, 2000);
}

// Bật quét AI trên di động
function simulateMobileAIScan() {
  const scanner = document.getElementById('mobile-scanner-bar');
  if (scanner) {
    scanner.style.display = 'block';
    setTimeout(() => {
      scanner.style.display = 'none';
      alert('AI Mobile Stitch: Đánh giá bài thêu đạt 91/100 điểm. Độ đều mũi khâu thuộc nhóm xuất sắc!');
    }, 2000);
  }
}
