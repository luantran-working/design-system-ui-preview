# 🎨 Design System UI Preview

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/luantran-working/design-system-ui-preview?style=social)
![GitHub forks](https://img.shields.io/github/forks/luantran-working/design-system-ui-preview?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/luantran-working/design-system-ui-preview?style=social)

![Design Systems](https://img.shields.io/badge/Design%20Systems-172+-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub repo size](https://img.shields.io/github/repo-size/luantran-working/design-system-ui-preview)
![GitHub last commit](https://img.shields.io/github/last-commit/luantran-working/design-system-ui-preview)
![Visitors](https://api.visitorbadge.io/api/visitors?path=luantran-working%2Fdesign-system-ui-preview&label=Visitors&countColor=%23263759&style=flat)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**[English](README.md) | [Tiếng Việt](README.vi.md)**

Ứng dụng web tương tác đẹp mắt để xem trước và khám phá 172+ hệ thống thiết kế từ các công ty công nghệ hàng đầu và các framework thiết kế phổ biến.

[🌐 Live Demo](https://luantran-working.github.io/design-system-ui-preview) • [Báo Lỗi](../../issues) • [Đề Xuất Tính Năng](../../issues)

</div>

---

## 📖 Tổng Quan

Design System UI Preview là bộ sưu tập toàn diện các hệ thống thiết kế từ những công ty sáng tạo nhất thế giới. Duyệt, xem trước và sao chép design tokens từ các công ty như Apple, Google, Airbnb, Stripe và nhiều hơn nữa - tất cả ở một nơi.

## ✨ Tính Năng

- 🎯 **172+ Hệ Thống Thiết Kế** - Bộ sưu tập được tuyển chọn từ các công ty công nghệ hàng đầu
- 🖼️ **Xem Trước Trực Tiếp** - Landing page tương tác cho mỗi hệ thống thiết kế
- 🔍 **Tìm Kiếm Thông Minh** - Nhanh chóng tìm bất kỳ hệ thống thiết kế nào
- 📋 **Sao Chép Design Tokens** - Sao chép file DESIGN.md chỉ với một cú click
- 🎨 **Chủ Đề Động** - Tạo CSS variables theo thời gian thực
- 📱 **Thiết Kế Responsive** - Hoạt động hoàn hảo trên mọi thiết bị
- ⚡ **Nhanh & Nhẹ** - JavaScript thuần túy, không cần framework
- 🔄 **Tự Động Phát Hiện** - Tự động phát hiện landing page tùy chỉnh

## 🚀 Bắt Đầu Nhanh

1. **Clone repository**
   ```bash
   git clone https://github.com/luantran-working/design-system-ui-preview.git
   cd design-system-ui-preview
   ```

2. **Mở trong trình duyệt**
   ```bash
   # Chỉ cần mở file index.html trong trình duyệt
   # Hoặc sử dụng local server:
   python -m http.server 8000
   # Sau đó truy cập http://localhost:8000
   ```

3. **Bắt đầu khám phá!**
   - Duyệt các hệ thống thiết kế từ thanh bên
   - Click vào bất kỳ hệ thống nào để xem landing page
   - Sử dụng thanh tìm kiếm để tìm hệ thống cụ thể
   - Click "Copy Markdown" để lấy design tokens

## 📂 Cấu Trúc Dự Án

```
design-system-ui-preview/
├── index.html              # Điểm vào chính của ứng dụng
├── template.html           # Template cho design systems động
├── css/
│   ├── main.css           # Styles của ứng dụng
│   └── template.css       # Template styles với CSS variables
├── js/
│   ├── app.js             # Logic chính của ứng dụng
│   ├── systems.js         # Dữ liệu design systems
│   ├── parser.js          # Parser cho DESIGN.md
│   └── fonts.js           # Tiện ích load fonts
└── design-systems/
    ├── apple/
    │   ├── apple-landing.html
    │   └── DESIGN.md
    ├── google/
    │   ├── google-landing.html
    │   └── DESIGN.md
    └── ... (172+ systems)
```

## 🎨 Hệ Thống Thiết Kế Nổi Bật

**Các Gã Khổng Lồ Công Nghệ:**
- Apple, Google, Meta, Microsoft, Amazon
- Netflix, Spotify, Uber, Airbnb, Tesla

**Công Cụ Developer:**
- GitHub, GitLab, Vercel, Netlify
- Figma, Sketch, Framer, InVision

**AI & ML:**
- OpenAI, Claude, Cohere, Mistral AI
- Hugging Face, Ollama, ElevenLabs

**Tài Chính & Thanh Toán:**
- Stripe, PayPal, Coinbase, Revolut
- Visa, Mastercard, Square, Plaid

**Và hơn 140 hệ thống khác!**

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** HTML5, CSS3, JavaScript thuần túy (ES6+)
- **Kiến Trúc:** Modular, component-based
- **Styling:** CSS Variables, Flexbox, Grid
- **Fonts:** Tích hợp Google Fonts
- **Không Phụ Thuộc:** Không cần npm packages, không cần build process

## 📝 Cách Hoạt Động

1. **Tự Động Phát Hiện:** App tự động phát hiện nếu design system có landing page tùy chỉnh
2. **Hệ Thống Fallback:** Nếu không có landing page, nó sẽ parse file DESIGN.md
3. **Chủ Đề Động:** Trích xuất design tokens và tạo CSS variables
4. **Xem Trước Trực Tiếp:** Render design system trong iframe độc lập

## 🤝 Đóng Góp

Chúng tôi hoan nghênh mọi đóng góp! Đây là cách bạn có thể giúp đỡ:

1. **Thêm design system mới:**
   ```bash
   # Tạo folder mới
   mkdir design-systems/your-system
   
   # Thêm landing page
   touch design-systems/your-system/your-system-landing.html
   
   # Thêm design tokens
   touch design-systems/your-system/DESIGN.md
   ```

2. **Cập nhật systems.js:**
   ```javascript
   { id: 'your-system', name: 'Your System' }
   ```

3. **Gửi pull request**

Để biết hướng dẫn chi tiết, xem [CONTRIBUTING.md](CONTRIBUTING.md)

## 📋 Định Dạng Design System

Mỗi design system nên bao gồm:

- `{system-id}-landing.html` - Landing page tùy chỉnh (tùy chọn)
- `DESIGN.md` - Design tokens ở định dạng markdown

Ví dụ cấu trúc DESIGN.md:
```markdown
# Tên Hệ Thống

## Màu Sắc
- Primary: #0066CC
- Secondary: #FF6B6B

## Typography
- Font Family: Inter
- Font Size: 16px

## Buttons
- Border Radius: 8px
- Padding: 12px 24px
```

## 📄 Giấy Phép

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết chi tiết.

## 🙏 Lời Cảm Ơn

- Các hệ thống thiết kế từ 172+ công ty và frameworks
- Dữ liệu design system được lấy từ [nexu-io/open-design](https://github.com/nexu-io/open-design)
- Lấy cảm hứng từ cộng đồng thiết kế mã nguồn mở
- Được xây dựng với ❤️ cho designers và developers

## 📧 Liên Hệ

- Tạo [Issue](../../issues) để báo lỗi hoặc đề xuất tính năng
- Star ⭐ repo này nếu bạn thấy hữu ích!

---

<div align="center">

**Made with ❤️ by the Design Community**

[⬆ Về Đầu Trang](#-design-system-ui-preview)

</div>
