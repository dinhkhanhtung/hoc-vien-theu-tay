# Tài liệu Tổng kết Bàn giao Hệ thống Web Đa trang Học viện Thêu tay

Chúng tôi đã hoàn thành việc tái cấu trúc toàn diện dự án sang mô hình **Ứng dụng Web Đa trang (Multi-page Web App)** có tổ chức thư mục mô-đun hóa chuyên nghiệp, tối ưu hóa giao diện di động (Responsive Mobile-first) và lưu trữ trạng thái đồng bộ thông qua `localStorage`.

---

## 1. Cấu trúc Thư mục Dự án trên GitHub
Mã nguồn hiện tại được tổ chức sạch sẽ, đúng tiêu chuẩn Enterprise để dễ dàng chuyển giao cho đội Backend:

*   **Các trang giao diện chính (HTML5):**
    *   `index.html`: Website thương hiệu Nguyễn Thị Hằng & Cửa hàng học liệu.
    *   `academy.html`: Cổng học tập học viên (Lớp học video, AI Stitch, Chứng chỉ).
    *   `community.html`: Diễn đàn thảo luận và Bảng vinh danh học viên.
    *   `admin.html`: Bảng điều khiển SaaS & CRM dành cho ban quản trị.
    *   `mobile.html`: Giả lập hiển thị giao diện di động iPhone.
*   **Hệ thống styles/ (CSS3 chuyên biệt):**
    *   `styles/main.css`: Cài đặt màu sắc Luxury (Ivory, Gold, Charcoal) và Typography.
    *   `styles/landing.css`: Căn chỉnh trang chủ và cửa hàng.
    *   `styles/academy.css`: Bố cục trình phát bài học và công cụ chẩn đoán AI.
    *   `styles/admin.css`: Bảng thống kê CRM và KPI Cards.
    *   `styles/responsive.css`: Cấu hình Responsive Mobile-first toàn diện.
*   **Hệ thống js/ (JavaScript Modules):**
    *   `js/cart.js`: Xử lý thêm vào giỏ, hiển thị giỏ hàng động, VietQR.
    *   `js/ai-analyzer.js`: Quét ảnh AI, chấm điểm và đánh dấu lỗi thêu (Stitch Diagnostic).
    *   `js/community.js`: Tương tác đăng bài và tăng tim cảm xúc.
    *   `js/charts.js`: Khởi tạo biểu đồ phân tích doanh thu SVG.

---

## 2. Hướng dẫn Trải nghiệm các Chức năng Tương tác Liên trang
1.  **Dữ liệu giỏ hàng bền vững (Cart):**
    *   Truy cập `index.html`, cuộn xuống Cửa hàng và nhấn "Thêm vào giỏ" các sản phẩm.
    *   Nhấp vào link "Cổng học tập" trên Header để sang trang `academy.html`.
    *   Vào mục "Cửa hàng học liệu", bạn sẽ thấy giỏ hàng của mình **vẫn được giữ nguyên** số lượng và tổng tiền nhờ cơ chế đồng bộ `localStorage` của `js/cart.js`.
2.  **Đăng bài diễn đàn (Community):**
    *   Truy cập `community.html`, gõ nội dung thảo luận mới và đính kèm ảnh thêu mẫu sen.
    *   Bấm "Đăng bài", bài viết của bạn sẽ xuất hiện trên Bảng tin tức thời. Khi bạn chuyển sang trang khác và quay lại, bài viết **không bị biến mất**.
3.  **Tương thích di động (Responsive):**
    *   Bạn có thể mở trực tiếp trang `mobile.html` để trải nghiệm trực quan một chiếc iPhone mô phỏng chạy Web App trên di động.
    *   Hoặc trên các trang chính, hãy nhấn phím `F12` trên bàn phím, chọn chế độ xem thiết bị di động (Responsive mode) để thấy menu sidebar tự động chuyển thành thanh menu trượt ngang mượt mà, bảng biểu cuộn ngang thông minh và các card khóa học xếp cột dọc tối ưu cho ngón tay chạm cảm ứng.
