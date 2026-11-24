# MACGO PRO v2.5 — Landing Page Chính Thức

Landing Page tĩnh hiệu năng cao dành cho **MACGO PRO v2.5** (Hệ thống ghìm tâm 4 pha & nhận diện AI tự động cho PUBG PC), được thiết kế theo phong cách **Tactical Neural Dark UI** đồng bộ 100% với giao diện ứng dụng desktop.

---

## 📁 Cấu Trúc Thư Mục

```text
macgo-landing/
├── index.html                    # Giao diện chính (10 Sections + SEO/OpenGraph + Lightbox)
├── css/
│   ├── tokens.css                # Biến màu sắc, font chữ, bo góc, đổ bóng chuẩn MACGO v2.5
│   ├── base.css                  # Reset, typography, container, hiệu ứng cuộn (Scroll Reveal)
│   ├── components.css            # Header, Buttons, Badges, Phím cơ (<kbd>), Floating Discord CTA
│   └── sections.css              # Bố cục chi tiết 10 section & Responsive (Desktop / Tablet / Mobile)
├── js/
│   ├── site-data.js              # TẬP TIN DỮ LIỆU TRUNG TÂM (Link Discord, Drive, Bảng giá, Vũ khí, FAQ)
│   └── main.js                   # Logic tương tác (Mockup 4 pha, Lọc súng, Video Chapters, Tabs, Checklist)
├── assets/
│   ├── logo.png                  # Logo lục giác chính thức MACGO
│   ├── favicon.ico               # Biểu tượng trang web (Favicon)
│   └── guide/                    # 7 ảnh hướng dẫn 1080p trích xuất trực tiếp từ video thực tế
│       ├── step-admin.jpg        # Chạy bằng quyền Run as administrator
│       ├── step-key.jpg          # Nhập License Key kích hoạt
│       ├── step-gui.jpg          # Giao diện chính MACGO PRO 4 pha
│       ├── step-pubg-display.jpg # Cài đặt PUBG: Chế độ Không viền (Borderless)
│       ├── step-pubg-sens.jpg    # Cài đặt PUBG: Độ nhạy khuyên dùng 35 / dọc 1
│       ├── step-pubg-ads-hold.jpg# Cài đặt PUBG: Phương thức nhập ADS => Giữ (Hold)
│       └── step-pubg-ads-rmb.jpg # Cài đặt PUBG: Thiết lập phím ADS => Chuột phải
└── README.md                     # Tài liệu hướng dẫn chỉnh sửa & triển khai (Deploy)
```

---

## ⚙️ Hướng Dẫn Chỉnh Sửa Nhanh (`js/site-data.js`)

Toàn bộ liên kết, bảng giá, danh sách súng, phím tắt và câu hỏi thường gặp được quản lý tập trung tại **1 file duy nhất**: `js/site-data.js`. Bạn không cần sửa trực tiếp trong `index.html`.

### 1. Thay đổi Link Discord, Link Tải Google Drive hoặc Video YouTube
Mở file `js/site-data.js` và chỉnh tại mục `links`:

```javascript
links: {
  discordInvite: "https://discord.gg/XK3RJMPD8j",
  downloadDrive: "https://drive.google.com/file/d/1qeFodyL6LyjSwmlmeU_DLJpABf0kT1PA/view",
  youtubeWatch: "https://www.youtube.com/watch?v=U-3y32RV4Eo",
  youtubeId: "U-3y32RV4Eo"
}
```
> **Lưu ý:** Khi tạo link mời Discord mới, hãy bật chế độ **Không bao giờ hết hạn** (*Expire After: Never*) và **Không giới hạn số lần dùng** (*Max number of uses: No limit*).

### 2. Cập nhật Bảng Giá Gói MACGO
Trong `js/site-data.js`, tìm mảng `pricing: [ ... ]` và chỉnh sửa các trường:
- `name`: Tên gói hiển thị (VD: `"30 Ngày"`)
- `priceFormatted`: Giá hiển thị (VD: `"269.000₫"`)
- `perDay`: Chi phí quy đổi mỗi ngày / mức tiết kiệm
- `badge`: Nhãn nổi bật trên góc thẻ
- `featured`: `true` (hiển thị ở hàng 4 gói nổi bật phía trên) hoặc `false` (hiển thị ở hàng 3 gói gọn phía dưới)

### 3. Cập nhật Danh Sách Vũ Khí, Phím Tắt & FAQ
- **Vũ khí (`weapons`):** Thêm/bớt tên súng trong từng nhóm `AR`, `SMG`, `LMG`, `DMR`, `SR`. Bộ đếm số lượng trên giao diện sẽ tự động cập nhật.
- **Phím tắt (`hotkeys`):** Chỉnh sửa `key`, `action`, `tip` trong mảng `hotkeys`.
- **Câu hỏi thường gặp (`faqs`):** Thêm hoặc sửa cặp `{ q: "Câu hỏi...", a: "Câu trả lời..." }`.

---

## 🚀 Hướng Dẫn Chạy Thử Trên Máy (Local)

1. **Cách 1 — Mở trực tiếp:** Nhấp đúp vào file `index.html` để mở ngay trên trình duyệt (trang được thiết kế tương thích hoàn toàn với giao thức `file://`).
2. **Cách 2 — Chạy qua Local HTTP Server (Khuyên dùng để test YouTube Embed mượt nhất):**
   ```powershell
   python -m http.server 8765 --directory "f:\Hao\macgo-landing"
   ```
   Sau đó truy cập: `http://localhost:8765`

---

## 🌐 Hướng Dẫn Deploy Miễn Phí Lên Internet (Chỉ 2 Phút)

Vì dự án là **Pure Static (HTML/CSS/JS thuần)**, bạn không cần chạy lệnh build (`npm run build`) và có thể lưu trữ hoàn toàn miễn phí băng thông không giới hạn trên các nền tảng sau:

### Phương án 1: Cloudflare Pages (Khuyên dùng — Tốc độ tại Việt Nam cực nhanh)
1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/) → chọn **Workers & Pages** → **Create** → tab **Pages**.
2. Chọn **Upload assets** (Kéo thả trực tiếp).
3. Đặt tên dự án (VD: `macgo-pro`) → Kéo thả toàn bộ thư mục `macgo-landing` vào ô tải lên → Bấm **Deploy site**.
4. Trang web sẽ có ngay địa chỉ `https://macgo-pro.pages.dev` (có thể gắn tên miền riêng `.com` / `.vn` miễn phí kèm SSL tự động).

### Phương án 2: Netlify Drop (Nhanh nhất — Không cần cấu hình)
1. Truy cập [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Kéo thả thư mục `macgo-landing` vào trình duyệt.
3. Nhận link online ngay lập tức sau 5 giây. Vào **Domain management** nếu muốn đổi tên miền phụ hoặc trỏ Custom Domain.

### Phương án 3: Vercel
1. Cài đặt Vercel CLI (`npm i -g vercel`) hoặc đẩy thư mục `macgo-landing` lên GitHub.
2. Tại thư mục `f:\Hao\macgo-landing`, chạy lệnh:
   ```powershell
   vercel --prod
   ```
3. Chọn cấu hình mặc định (Output directory: `.`) để xuất bản ngay.

### Phương án 4: GitHub Pages (Chính thức đang hoạt động 24/7)
- **URL chính thức (Root Domain):** [https://macgo-pro.github.io/](https://macgo-pro.github.io/) (`https://github.com/macgo-pro/macgo-pro.github.io`)
- **URL dự án (Subpath Domain):** [https://macgo-pro.github.io/macgo/](https://macgo-pro.github.io/macgo/) (`https://github.com/macgo-pro/macgo`)

1. Tạo một Repository mới trên GitHub (`macgo-pro.github.io` hoặc `macgo`) và đẩy toàn bộ các file trong `macgo-landing/` lên nhánh `main`.
2. Vào **Settings** → **Pages** → mục **Build and deployment** chọn `Deploy from a branch` (`main` / `/ (root)`).
3. Bấm **Save** và đợi khoảng 1 phút để trang web hoạt động tại `https://macgo-pro.github.io/`.
