# Kế hoạch Triển khai Hoàn chỉnh Học viện Thêu tay & Đẩy lên GitHub

Chúng tôi sẽ nâng cấp bản mẫu hiện tại thành một ứng dụng Web App đơn trang (SPA) hoàn thiện 100% về mặt giao diện, tính năng tương tác và trải nghiệm người dùng cao cấp cho cả 11 phân hệ, sau đó sử dụng mã GitHub API Token do bạn cung cấp để đẩy trực tiếp dự án lên GitHub.

---

## User Review Required

> [!IMPORTANT]
> **Các bước triển khai tự động hóa đẩy lên GitHub:**
> 1. Chúng tôi sẽ sử dụng lệnh PowerShell hoặc Node.js script để gọi GitHub API tạo một kho lưu trữ (Repository) mới có tên là `hoc-vien-theu-tay-vn` (hoặc tên tùy chọn khác) trên tài khoản GitHub của bạn thông qua Token `ghp_***FFBj`.
> 2. Khởi tạo Git cục bộ tại thư mục `d:\Dev\Projects\khoahoctheutayhk`, tạo commit và push lên nhánh chính `main` của kho lưu trữ mới tạo.
> 3. Dự án được thiết kế dưới dạng ứng dụng HTML/CSS/JS thuần túy cao cấp (không cần build), rất phù hợp để chạy trực tiếp trên **GitHub Pages**. Khi được đẩy lên, trang web sẽ có thể truy cập trực tuyến ngay lập tức.

---

## Open Questions

> [!NOTE]
> Bạn có muốn đổi tên Repository trên GitHub thành một tên khác không? (Mặc định chúng tôi sẽ đặt là `hoc-vien-theu-tay-vn`).

---

## Proposed Changes

Chúng tôi sẽ thực hiện các bước sau:

### 1. Nâng cấp mã nguồn `index.html` ([MODIFY] [index.html](file:///d:/Dev/Projects/khoahoctheutayhk/index.html))
Chúng tôi sẽ tích hợp toàn bộ giao diện và logic giả lập của các trang còn lại:
*   **Cửa hàng (Shop):** Danh sách dụng cụ thêu, chỉ thêu, tranh mẫu; chức năng giỏ hàng động (thêm, xóa, tính tổng tiền) và nút "Thanh toán" hiển thị popup VietQR thanh toán tự động.
*   **Cộng đồng (Community):** Bảng tin đăng bài viết, tải ảnh tác phẩm lên bàng tin, thả cảm xúc kiểu thêu tay cách điệu ("Tinh tế", "Kỳ công", "Sáng tạo") và bảng vinh danh Leaderboard.
*   **Thư viện Tài nguyên (Resources):** Danh sách các Pattern thêu định dạng PDF/Vector kèm bộ lọc thông minh và tính năng tải file.
*   **Chứng chỉ (Certificates):** Quy trình nộp bài thi thực hành hoàn chỉnh, hệ thống AI chấm điểm và màn hình chứng chỉ nghệ thuật.
*   **Affiliate:** Bảng thống kê hoa hồng, link referral tự động tạo và biểu đồ doanh số cộng tác viên.
*   **CRM Học viên:** Bảng tìm kiếm, lọc học viên, xem tiến trình chi tiết của từng học viên.
*   **Admin Dashboard:** Tối ưu hóa biểu đồ phân tích hoạt động, doanh thu và quản lý đơn hàng.

### 2. Tạo Kịch bản Tự động hóa Đẩy lên GitHub ([NEW] [deploy_github.js](file:///d:/Dev/Projects/khoahoctheutayhk/deploy_github.js))
*   Viết một script Node.js ngắn sử dụng `https` để gọi GitHub API tạo repository.
*   Chạy các lệnh Git cục bộ để thiết lập remote và đẩy toàn bộ mã nguồn lên GitHub.

---

## Verification Plan

### Automated & Manual Verification
- Chạy thử script deployment để xác minh việc tạo repo và push lên GitHub thành công.
- Kiểm tra tính hoạt động của các tính năng mới thêm (Giỏ hàng, Đăng bài cộng đồng, Tạo link Affiliate) trên trình duyệt cục bộ trước khi push.
