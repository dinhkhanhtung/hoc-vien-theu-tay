# Kiến trúc Thông tin & Luồng Người dùng (Information Architecture & User Flows)

Tài liệu này định hình cách thức tổ chức thông tin và điều hướng trong hệ thống Học viện Thêu tay Truyền thống Việt Nam.

---

## 1. Sơ đồ trang web (Sitemap)

Hệ thống được chia thành 4 khu vực lớn tương ứng với các quyền truy cập khác nhau:

```mermaid
graph TD
    A[Hệ thống Học viện Thêu tay] --> B[Khu vực Công cộng - Landing Page]
    A --> C[Khu vực Học viên - Student App]
    A --> D[Khu vực Quản trị - SaaS Admin]
    A --> E[Khu vực Cộng tác viên - Affiliate]

    B --> B1[Home - Câu chuyện & Khóa học nổi bật]
    B --> B2[Cửa hàng Handmade & Dụng cụ thêu]
    B --> B3[Thư viện Tài nguyên Công cộng]

    C --> C1[Dashboard học tập & Tiến trình]
    C --> C2[Lớp học trực quan - Course Player]
    C --> C3[Cộng đồng Học viên - Forum & Leaderboard]
    C --> C4[AI Stitch Evaluator - Tự chấm điểm bài thêu]
    C --> C5[Kho Chứng chỉ điện tử]

    D --> D1[SaaS Dashboard - Doanh thu & Thống kê]
    D --> D2[CRM Học viên - Quản lý tiến trình & Điểm số]
    D --> D3[Quản lý Khóa học & Bài giảng]
    D --> D4[Quản lý Đơn hàng & Sản phẩm vật lý]
    D --> D5[Duyệt bài thực hành & Cấp chứng chỉ]

    E --> E1[Báo cáo hoa hồng & Biểu đồ doanh thu]
    E --> E2[Trình tạo Link Affiliate & Tài nguyên quảng bá]
```

---

## 2. Luồng Người dùng Cốt lõi (User Flows)

### A. Luồng Đăng ký & Học tập (Học viên)
Luồng này tối ưu tỷ lệ chuyển đổi và trải nghiệm học lâu dài.

```mermaid
sequenceDiagram
    autonumber
    actor HV as Học viên mới
    participant LP as Landing Page
    participant P as Thanh toán (Cart)
    participant DB as Student Dashboard
    participant LV as Lesson Player
    participant AI as AI Stitch Reviewer
    participant CC as Chứng chỉ

    HV->>LP: Xem câu chuyện nghệ nhân & Khóa học
    HV->>LP: Đăng ký xem thử bài học miễn phí
    Note over HV,LP: Trải nghiệm thử làm tăng 45% tỷ lệ chuyển đổi
    HV->>P: Mua khóa học chính thức + Bộ kit thực hành đi kèm
    P-->>HV: Gửi email xác nhận & Ship bộ kit vật lý
    HV->>DB: Truy cập Dashboard, xem lộ trình học
    HV->>LV: Xem video bài giảng & Thực hành theo từng chương
    HV->>AI: Chụp ảnh bài thêu thực hành lên hệ thống AI
    AI-->>HV: Chấm điểm độ đều mũi chỉ, bố cục và góp ý sửa lỗi
    HV->>LV: Hoàn thành bài kiểm tra cuối khóa & Nộp tác phẩm tốt nghiệp
    Note over LV: Nghệ nhân duyệt thủ công tác phẩm tốt nghiệp
    HV->>CC: Nhận Chứng chỉ điện tử xuất sắc (Được lưu trữ blockchain/PDF)
```

### B. Luồng Quản lý & Chăm sóc Học viên (Nghệ nhân / Admin)
Quy trình giúp nghệ nhân vận hành học viện một cách chuyên nghiệp như một nền tảng SaaS.

```mermaid
sequenceDiagram
    autonumber
    actor NN as Nghệ nhân (Admin)
    participant AD as Admin Dashboard
    participant CRM as CRM Học viên
    participant C as Khóa học
    participant CC as Duyệt Chứng chỉ

    NN->>AD: Kiểm tra doanh thu ngày/tháng & Học viên mới
    NN->>CRM: Xem danh sách học viên đang gặp khó khăn (Tiến độ chậm)
    NN->>CRM: Gửi tin nhắn động viên/Hỗ trợ qua AI Coach tích hợp
    NN->>C: Cập nhật video hướng dẫn hoặc Pattern thêu mới
    NN->>CC: Nhận thông báo nộp bài thực hành của học viên
    NN->>CC: Đánh giá bài nộp dựa trên gợi ý chấm điểm của AI
    NN->>CC: Ký duyệt cấp chứng chỉ số cho học viên đạt yêu cầu
```

### C. Luồng Tiếp thị liên kết (Affiliate Partner)
Giúp học viên cũ hoặc cộng tác viên quảng bá học viện để nhận hoa hồng.

1.  **Đăng ký:** Học viên xuất sắc đăng ký làm Affiliate trên trang cá nhân.
2.  **Nhận link:** Hệ thống cấp Link Referral duy nhất và mã giảm giá 10% cho bạn bè học viên.
3.  **Chia sẻ:** Cộng tác viên đăng tác phẩm thêu của họ lên mạng xã hội kèm link giới thiệu.
4.  **Chuyển đổi:** Người mua click vào link, thực hiện mua khóa học.
5.  **Ghi nhận:** Hệ thống ghi nhận hoa hồng 25% trực tiếp vào ví của Cộng tác viên, hiển thị biểu đồ tăng trưởng doanh số theo thời gian thực.
