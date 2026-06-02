# Hệ thống Thiết kế (Design System) - Học viện Thêu tay Cao cấp
*Tài liệu Đặc tả Thiết kế chuẩn Figma & CSS Custom Properties*

Hệ thống thiết kế này kết hợp hài hòa giữa **sự tinh xảo của thủ công truyền thống (Luxury Craftsmanship)** và **tính hiệu quả của nền tảng phần mềm hiện đại (SaaS Platform)**.

---

## 1. Bảng màu (Color Palette)

Bảng màu được lấy cảm hứng từ các nguyên liệu dệt may truyền thống Việt Nam: lụa tơ tằm, sợi chỉ nhuộm tự nhiên, gỗ mun và thếp vàng quý phái.

```css
:root {
  /* Màu nền & Bề mặt (Base & Surfaces) */
  --color-ivory: #FCFAF6;       /* Ivory White - Màu nền chính, nhẹ nhàng hơn trắng tinh khiết */
  --color-silk-light: #F4EFE6;  /* Silk Beige - Nền thẻ phụ, phân cách section */
  --color-silk-dark: #EADEC9;   /* Warm Silk - Đường viền, divider, hoặc nền hover */

  /* Màu chủ đạo & Điểm nhấn (Primary & Accents) */
  --color-charcoal: #12161A;    /* Dark Charcoal - Màu chữ chính, nền tiêu đề, nút bấm cao cấp */
  --color-gold-light: #DFBA73;  /* Gold Accent - Điểm nhấn tinh tế, biểu tượng, đường chỉ thêu */
  --color-gold-dark: #B88E3D;   /* Antique Gold - Trạng thái hover vàng, nút quan trọng */

  /* Màu bổ trợ (Supporting Colors) */
  --color-emerald: #1F3F32;     /* Deep Emerald - Màu xanh lá đậm đại diện cho tự nhiên, sự bền bỉ */
  --color-burgundy: #581C1C;    /* Royal Burgundy - Màu đỏ rượu vang cho các thông báo quan trọng hoặc nhãn đặc biệt */

  /* Màu trạng thái hệ thống (Semantic Colors) */
  --color-success: #2E7D32;     /* Xanh lá - Hoàn thành, Đạt chứng chỉ */
  --color-warning: #EF6C00;     /* Cam - Cần nộp bài, đang chấm điểm */
  --color-danger: #C62828;      /* Đỏ - Hủy đơn, Lỗi thanh toán */
  --color-info: #1565C0;        /* Xanh dương - Thông tin cập nhật */
}
```

---

## 2. Hệ Typography

Sự kết hợp giữa font Serif cổ điển mang tính nghệ thuật và font Sans-serif hiện đại cho các chức năng tương tác SaaS.

*   **Tiêu đề lớn / Nghệ thuật (Display & Headers):** `Cormorant Garamond` hoặc `Playfair Display`.
*   **Nội dung / Giao diện phần mềm (Body & SaaS UI):** `Plus Jakarta Sans` hoặc `Inter`.

| Cấp bậc (Hierarchy) | Font Family | Size (px/rem) | Weight | Line Height | Ứng dụng |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | Cormorant Garamond | 64px / 4rem | Bold (700) | 1.1 | Hero Section Title |
| **Heading 1** | Cormorant Garamond | 40px / 2.5rem | SemiBold (600) | 1.2 | Tiêu đề chính trang |
| **Heading 2** | Cormorant Garamond | 28px / 1.75rem| Medium (500) | 1.3 | Tiêu đề các mục lớn |
| **Heading 3** | Plus Jakarta Sans | 20px / 1.25rem| SemiBold (600) | 1.4 | Tiêu đề Card, Menu |
| **Body Large** | Plus Jakarta Sans | 18px / 1.125rem| Regular (400) | 1.6 | Đoạn văn Landing Page |
| **Body Text** | Plus Jakarta Sans | 16px / 1rem | Regular (400) | 1.5 | Nội dung bài học, text chính |
| **Body Small** | Plus Jakarta Sans | 14px / 0.875rem| Medium (500) | 1.4 | Mô tả phụ, Table header |
| **Micro/Caption**| Plus Jakarta Sans | 12px / 0.75rem | Medium (500) | 1.3 | Nhãn, Trạng thái, Tag |

---

## 3. Hệ lưới & Khoảng cách (Grid & Spacing)

Sử dụng hệ thống 8-pixel để tạo ra nhịp điệu thị giác nhất quán.

*   **Grid Hệ thống:**
    *   **Desktop:** 12 Columns, Gutter 24px, Margin 80px (Max-width: 1440px).
    *   **Mobile:** 4 Columns, Gutter 16px, Margin 20px.
*   **Hệ Spacing (Padding/Margin):**
    *   `space-xs`: 4px | `space-sm`: 8px | `space-md`: 16px | `space-lg`: 24px | `space-xl`: 40px | `space-xxl`: 80px

---

## 4. Thành phần giao diện (Component Library)

### A. Nút bấm (Buttons)

*   **Primary Button (Luxury Classic):**
    *   Nền: `--color-charcoal`
    *   Chữ: `--color-ivory` (Plus Jakarta Sans, SemiBold, 14px)
    *   Đường viền phụ: 1px Solid `--color-gold-light`
    *   Hiệu ứng Hover: Nền chuyển thành `--color-gold-dark`, Chữ giữ nguyên.
*   **Secondary Button (Gold Line):**
    *   Nền: Trong suốt
    *   Đường viền: 1px Solid `--color-gold-light`
    *   Chữ: `--color-charcoal` hoặc `--color-gold-dark`
    *   Hiệu ứng Hover: Nền `--color-silk-light`.
*   **Text Button:**
    *   Không viền, không nền. Chữ `--color-charcoal` với đường underline mảnh màu vàng khi hover.

### B. Input & Forms (SaaS Standard)

*   Nền Input: Trong suốt hoặc `--color-ivory`
*   Đường viền: 1px Solid `--color-silk-dark`. Khi focus: 1px Solid `--color-gold-light` với hiệu ứng bóng mờ (box-shadow: `0 0 0 2px rgba(223, 186, 115, 0.2)`).
*   Font: Plus Jakarta Sans, 14px.

### C. Hộp chứa & Thẻ (Cards & Containers)

*   **Luxury Card (Sản phẩm, khóa học):**
    *   Nền: `--color-ivory` hoặc `#FFF`
    *   Đường viền: 1px Solid `--color-silk-light`
    *   Góc bo (Border Radius): 8px (Không bo tròn quá mức để giữ cảm giác vuông vắn, cứng cáp của khung thêu gỗ).
    *   Đổ bóng (Box Shadow): Mảnh nhẹ (`0px 4px 20px rgba(18, 22, 26, 0.03)`).
*   **Glassmorphism Card (Đặc quyền học viên, AI Features):**
    *   Nền: `rgba(252, 250, 246, 0.7)`
    *   Hiệu ứng mờ: `backdrop-filter: blur(12px)`
    *   Đường viền: 1px Solid `rgba(223, 186, 115, 0.25)`

### D. Hệ thống huy hiệu trạng thái (Badges)

*   `Badge-Success` (Hoàn thành khóa học, đã thanh toán): Nền `rgba(46, 125, 50, 0.1)`, Chữ `--color-success`
*   `Badge-Warning` (Đang chấm bài thực hành, chờ duyệt): Nền `rgba(239, 108, 0, 0.1)`, Chữ `--color-warning`
*   `Badge-Gold` (Đặc quyền VIP, Tác phẩm xuất sắc): Nền `rgba(223, 186, 115, 0.15)`, Chữ `--color-gold-dark`

---

## 5. Hiệu ứng Micro-animations & Chỉ thêu chuyển động

Để tăng cảm giác "wow" và sự tương tác thủ công:
1.  **Chỉ số tải (Loading Spiders):** Hiệu ứng vẽ vector bằng đường line chạy dọc theo viền thẻ (mô phỏng đường kim mũi chỉ đang tự khâu).
2.  **Gold Glow Hover:** Khi rê chuột vào các nút hoặc thẻ Premium, sẽ có một vầng sáng vàng nhẹ tỏa ra từ viền.
3.  **Smooth Page Transition:** Sử dụng hiệu ứng trượt nhẹ (Transform Y) kết hợp làm mờ (Opacity) khi chuyển đổi tab trong Dashboard.
