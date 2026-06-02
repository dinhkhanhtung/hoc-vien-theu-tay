# Đặc tả Giao diện Chức năng UI/UX (Functional Specifications)
*Tài liệu hướng dẫn triển khai thiết kế chi tiết trên Figma*

---

## 1. Landing Page (Trang chủ)

Trang chủ phải tạo ra cảm xúc sang trọng, nghệ thuật ngay lập tức khi truy cập.

*   **Hero Section:**
    *   *Trái (55%):* Tiêu đề chính lớn (Display 1, Cormorant Garamond): *"Gìn giữ hồn cốt Việt qua từng mũi chỉ thêu tay"*. Tiêu đề phụ: *"Học thêu nghệ thuật cùng Nghệ nhân Quốc gia Nguyễn Thị Hằng. Từ những mũi khâu cơ bản đến tác phẩm nghệ thuật thượng hạng."*
    *   *CTA Group:* Nút chính: *"Đăng ký học ngay"* (Nền Charcoal, viền Gold), Nút phụ: *"Trải nghiệm học thử miễn phí"* (Viền Gold mảnh).
    *   *Phải (45%):* Ảnh chân dung nghệ nhân nghệ thuật đang thêu tay bên khung cửi tơ tằm, ánh sáng ấm cúng tập trung vào bàn tay và mũi kim thêu.
*   **Story Section (Câu chuyện nghệ nhân):**
    *   Bố cục tối giản, chữ lớn căn giữa. Kể về hành trình 40 năm gìn giữ nghề dệt và thêu thủ công tại làng nghề truyền thống Việt Nam. Đan xen là các thước phim tư liệu đen trắng phóng to khi rê chuột vào.
*   **Featured Courses (Khóa học nổi bật):**
    *   Dạng Grid 3 cột. Mỗi card khóa học gồm: Ảnh bìa nghệ thuật chất lượng cao, Nhãn cấp độ (Nhập môn, Trung cấp, Nghệ nhân), Tên khóa học, Đánh giá (Số sao + lượt review), Giá bán niêm yết (Kèm tùy chọn tặng bộ dụng cụ thêu đi kèm), Nút mua nhanh.
*   **Student Success & Gallery:**
    *   Trình bày dạng slide so sánh "Trước - Sau" (Before-After slider) các tác phẩm của học viên. Góc trưng bày (Gallery) tác phẩm đoạt giải của cộng đồng.
*   **FAQ & Footer:**
    *   Các câu hỏi thường gặp về cách học trực tuyến, việc vận chuyển bộ kit thêu vật lý, cách AI hỗ trợ chấm bài. Footer thiết kế tối giản, tông màu tối Charcoal sang trọng.

---

## 2. Hệ thống Khóa học (Student Dashboard & Lesson View)

Trải nghiệm học tập trực quan mang tiêu chuẩn Coursera kết hợp Kajabi nhưng thanh lịch hơn.

*   **Dashboard học viên (Student Dashboard):**
    *   *Sidebar bên trái:* Thu nhỏ linh hoạt. Chứa các mục: Tổng quan, Khóa học của tôi, Lộ trình học, Chứng chỉ đạt được, Cộng đồng học viên, Kho tài nguyên, Trợ giúp.
    *   *Khu vực nội dung chính:*
        *   Thẻ chào mừng cá nhân hóa kèm chỉ số tiến trình học tổng thể (Progress bar).
        *   Mục "Đang học dở": Nút nhanh truy cập trực tiếp vào bài học video vừa xem gần nhất.
        *   Mục "Lịch trình đề xuất tiếp theo": Hiển thị bài thực hành cần nộp hôm nay.
*   **Trình phát bài học (Lesson View):**
    *   Thiết kế dạng "Cinema Mode" tối ưu sự tập trung.
    *   *Khu vực Trái (25%):* Danh sách cây thư mục bài học (Chương 1: Chuẩn bị nguyên liệu -> Bài 1.1, Bài 1.2; Chương 2: Các mũi thêu cơ bản...).
    *   *Khu vực Giữa (50%):* Trình phát video chất lượng cao (Player điều chỉnh tốc độ, độ phân giải). Phía dưới video là tab nội dung: Chi tiết bài học, Checklist bài tập cần làm, Tài liệu PDF tải về.
    *   *Khu vực Phải (25%):* Bảng ghi chú cá nhân thời gian thực (Lưu lại mốc thời gian video để xem lại sau) và Khung AI Coach (Hỏi đáp nhanh thắc mắc).

---

## 3. Cộng đồng Học viên (Community System)

Môi trường thảo luận cao cấp tương tự Circle/Skool nhưng mang không khí của một câu lạc bộ mỹ nghệ quý phái.

*   **Bảng tin (Feed):**
    *   Học viên có thể đăng tải hình ảnh tác phẩm thêu đang hoàn thiện, video quá trình thêu, đặt câu hỏi về kỹ thuật.
    *   Hệ thống cảm xúc được tùy chỉnh riêng: thay vì Thích/Yêu thích thông thường, sử dụng các biểu tượng thêu tay cách điệu: "Tinh tế" (hình đóa sen thêu), "Kỳ công" (hình sợi chỉ vàng), "Sáng tạo" (hình chiếc kéo vàng).
*   **Bảng xếp hạng (Leaderboard):**
    *   Xếp hạng dựa trên điểm đóng góp (Đăng bài chất lượng, giúp đỡ học viên khác, hoàn thành bài tập đúng hạn).
    *   Học viên top đầu nhận được danh hiệu "Nghệ nhân tập sự", được tặng các hoa văn thêu (patterns) độc quyền từ nghệ nhân chủ nhiệm.

---

## 4. Thư viện Tài nguyên (Resource Library)

Kho lưu trữ tài liệu kỹ thuật thêu tay lớn nhất.

*   **Bộ lọc thông minh:** Phân loại theo định dạng (Mẫu thêu - PDF, Video hướng dẫn kỹ thuật mũi thêu, File vẽ vector để in lụa, Bảng phối màu chỉ thêu dmc).
*   **Trình xem trước Pattern (Pattern Previewer):** Học viên có thể phóng to cực đại các pattern thêu độ phân giải cao để xem từng thớ vải và đường chỉ đi mẫu trước khi tải về.

---

## 5. Chứng chỉ (Certification)

Quy trình thi và cấp chứng chỉ nghệ thuật uy tín.

*   **Cơ chế đánh giá 2 lớp:**
    1.  *Lớp 1 (AI đánh giá):* Học viên chụp ảnh quét tác phẩm tốt nghiệp. AI phân tích độ đồng đều của mũi thêu và bố cục màu sắc, đưa ra điểm số dự kiến.
    2.  *Lớp 2 (Nghệ nhân chấm):* Tác phẩm đạt chuẩn AI sẽ được gửi tới Nghệ nhân chính để thẩm định chi tiết và ký duyệt.
*   **Giao diện Chứng chỉ (Certificate):**
    *   Thiết kế giống như một bức tranh thêu chữ thập cổ điển, sử dụng các đường viền họa tiết hoa văn thời Lý - Trần thếp vàng.
    *   Có QR Code xác thực tính độc bản (Blockchain-verified). Cho phép học viên tải file PDF chất lượng in ấn hoặc chia sẻ trực tiếp lên LinkedIn/Facebook.

---

## 6. Cửa hàng Dụng cụ & Tranh thêu (E-Commerce Store)

Nơi học viên mua sắm học liệu chuẩn để phục vụ khóa học.

*   **Tính năng mua theo gói (Bundled Kits):** Trên trang chi tiết khóa học, học viên có thể nhấn "Mua kèm Bộ kit thực hành" gồm: Khung thêu gỗ sồi, vải lụa tơ tằm nguyên bản, 50 tép chỉ thêu cao cấp nhuộm thủ công, kim khâu chuyên dụng.
*   **Trải nghiệm Giỏ hàng & Thanh toán:** Tối giản, hỗ trợ thanh toán nhanh qua mã QR chuyển khoản ngân hàng (VietQR) hoặc ví điện tử (Momo, ShopeePay) có tích hợp hệ thống tự động duyệt đơn ngay sau 3 giây.

---

## 7. Hệ thống Affiliate (Trang Cộng tác viên)

Khuyến khích học viên truyền bá nghệ thuật thêu tay.

*   **Bảng thống kê:** Hiển thị trực quan qua các thẻ số liệu: Tổng doanh số giới thiệu, Số lượt click vào link giới thiệu, Tỷ lệ mua hàng, Tổng hoa hồng đã tích lũy, Số dư khả dụng có thể rút.
*   **Biểu đồ hiệu suất:** Biểu đồ đường (Line chart) biểu thị sự tăng trưởng của lượt click và đơn hàng theo tuần/tháng.
*   **Công cụ tiếp thị:** Mục tải xuống các banner quảng cáo thiết kế sẵn, mẫu viết bài chia sẻ cảm nhận khóa học.

---

## 8. CRM Học viên (Student Relationship Management)

Công cụ dành riêng cho đội ngũ vận hành học viện.

*   **Danh sách tổng hợp học viên:**
    *   Hiển thị thông tin: Họ tên, Khóa học đang tham gia, Tiến độ hoàn thành (%), Điểm số trung bình bài thực hành, Tổng giá trị đơn hàng đã mua ở cửa hàng, Trạng thái (Tích cực, Cần hỗ trợ, Đã tốt nghiệp).
*   **Trang cá nhân học viên chi tiết:**
    *   Xem lịch sử nộp bài, các ảnh quét AI chấm điểm của học viên đó, ghi chú của trợ giảng về sự tiến bộ của họ.

---

## 9. Admin SaaS Dashboard (Bảng Điều khiển Tổng)

Trang quản trị vận hành mạnh mẽ dành cho Nghệ nhân và đội ngũ quản lý lớp học.

*   **KPI Cards (Chỉ số đo lường hiệu năng):**
    *   Doanh thu hôm nay (so với hôm qua), Doanh thu tháng hiện tại, Tổng số học viên đang hoạt động, Tỷ lệ hoàn thành khóa học trung bình, Tỷ lệ chuyển đổi phễu mua hàng.
*   **Hệ thống Biểu đồ chính:**
    *   *Revenue Analytics:* Biểu đồ cột chồng (Stacked Bar Chart) thể hiện Doanh thu Khóa học vs Doanh thu Bán dụng cụ/Tranh thêu.
    *   *Student Growth:* Biểu đồ miền (Area Chart) thể hiện lượng học viên mới tăng trưởng.
*   **Hoạt động gần đây (Recent Activities):** Bảng cập nhật thời gian thực các đơn hàng mới phát sinh, bài nộp bài tập mới cần chấm điểm, hoặc học viên vừa được cấp chứng chỉ.

---

## 10. Mobile App Design

Ứng dụng tối ưu hóa cho trải nghiệm học tập di động và chụp ảnh bài thêu.

*   **Tab Bar Dưới (Bottom Navigation):**
    1.  *Trang chủ (Home):* Tin tức mới từ nghệ nhân, các bài học gợi ý hôm nay.
    2.  *Khóa học (Academy):* Trình phát video dọc tối ưu hóa, danh sách bài giảng.
    3.  *AI Camera (AI Stitch):* Bật camera điện thoại trực tiếp, căn chỉnh khung hình để chụp tác phẩm thêu và nhận đánh giá tức thì.
    4.  *Cộng đồng (Community):* Bảng tin thảo luận, chia sẻ ảnh bài thêu nhanh.
    5.  *Cửa hàng (Shop):* Mua sắm dụng cụ thêu, chỉ thêu tiện lợi.

---

## 11. Các tính năng AI cao cấp (AI Features)

*   **AI Stitch & Composition Reviewer (Công cụ AI chấm điểm bài thêu):**
    *   *Cơ chế hoạt động:* Sử dụng Computer Vision để phân tích hình ảnh độ phân giải cao chụp bài thêu của học viên.
    *   *Đặc tả UI:* Giao diện quét ảnh gồm một vòng tròn tiêu cự màu vàng lấp lánh (mô phỏng khung thêu gỗ tròn). Khi ảnh được tải lên, AI sẽ vẽ các điểm chấm điểm trực tiếp trên ảnh bài thêu của học viên:
        *   *Màu đỏ:* Các mũi thêu bị lệch khoảng cách hoặc lỏng chỉ.
        *   *Màu xanh lá:* Các khu vực có mật độ mũi thêu đạt chuẩn nghệ thuật.
        *   *Khung điểm số:* Điểm đều mũi thêu (Stitch Density), Điểm bố cục (Composition), Điểm phối màu (Color Harmony). Kèm theo đó là lời khuyên chi tiết từ AI dưới dạng văn bản.
*   **AI Coach:**
    *   Một chatbot thông minh sử dụng dữ liệu huấn luyện là toàn bộ các câu trả lời, sách kỹ thuật và bài viết của Nghệ nhân để trả lời học viên 24/7 về các câu hỏi kỹ thuật (ví dụ: *"Khi thêu chỉ tơ tằm trên lụa mỏng thì dùng kim cỡ mấy?"*).
