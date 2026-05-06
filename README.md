# 🎨 Design System UI Preview

<div align="center">

![Design Systems](https://img.shields.io/badge/Design%20Systems-172+-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**[English](#english) | [Tiếng Việt](#tiếng-việt)**

A beautiful, interactive web application to preview and explore 172+ design systems from leading tech companies and popular design frameworks.

[🌐 Live Demo](https://luantran-working.github.io/design-system-ui-preview) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## English

### 📖 Overview

Design System UI Preview is a comprehensive collection of design systems from the world's most innovative companies and frameworks. Browse, preview, and copy design tokens from companies like Apple, Google, Airbnb, Stripe, and many more - all in one place.

### ✨ Features

- 🎯 **172+ Design Systems** - Curated collection from leading tech companies
- 🖼️ **Live Preview** - Interactive landing pages for each design system
- 🔍 **Smart Search** - Quickly find any design system
- 📋 **Copy Design Tokens** - One-click copy of DESIGN.md files
- 🎨 **Dynamic Theming** - Real-time CSS variable generation
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast & Lightweight** - Pure vanilla JavaScript, no frameworks
- 🔄 **Auto-Detection** - Automatically detects custom landing pages

### 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/luantran-working/design-system-ui-preview.git
   cd design-system-ui-preview
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Start exploring!**
   - Browse design systems from the sidebar
   - Click any system to preview its landing page
   - Use the search bar to find specific systems
   - Click "Copy Markdown" to get design tokens

### 📂 Project Structure

```
design-system-ui-preview/
├── index.html              # Main application entry
├── template.html           # Template for dynamic design systems
├── css/
│   ├── main.css           # Application styles
│   └── template.css       # Template styles with CSS variables
├── js/
│   ├── app.js             # Main application logic
│   ├── systems.js         # Design systems data
│   ├── parser.js          # DESIGN.md parser
│   └── fonts.js           # Font loading utilities
└── design-systems/
    ├── apple/
    │   ├── apple-landing.html
    │   └── DESIGN.md
    ├── google/
    │   ├── google-landing.html
    │   └── DESIGN.md
    └── ... (172+ systems)
```

### 🎨 Featured Design Systems

**Tech Giants:**
- Apple, Google, Meta, Microsoft, Amazon
- Netflix, Spotify, Uber, Airbnb, Tesla

**Developer Tools:**
- GitHub, GitLab, Vercel, Netlify
- Figma, Sketch, Framer, InVision

**AI & ML:**
- OpenAI, Claude, Cohere, Mistral AI
- Hugging Face, Ollama, ElevenLabs

**Finance & Payments:**
- Stripe, PayPal, Coinbase, Revolut
- Visa, Mastercard, Square, Plaid

**And 140+ more!**

### 🛠️ Technology Stack

- **Frontend:** Pure HTML5, CSS3, JavaScript (ES6+)
- **Architecture:** Modular, component-based
- **Styling:** CSS Variables, Flexbox, Grid
- **Fonts:** Google Fonts integration
- **No Dependencies:** Zero npm packages, no build process

### 📝 How It Works

1. **Auto-Detection:** The app automatically detects if a design system has a custom landing page
2. **Fallback System:** If no landing page exists, it parses the DESIGN.md file
3. **Dynamic Theming:** Extracts design tokens and generates CSS variables
4. **Live Preview:** Renders the design system in an isolated iframe

### 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Add a new design system:**
   ```bash
   # Create a new folder
   mkdir design-systems/your-system
   
   # Add landing page
   touch design-systems/your-system/your-system-landing.html
   
   # Add design tokens
   touch design-systems/your-system/DESIGN.md
   ```

2. **Update systems.js:**
   ```javascript
   { id: 'your-system', name: 'Your System' }
   ```

3. **Submit a pull request**

### 📋 Design System Format

Each design system should include:

- `{system-id}-landing.html` - Custom landing page (optional)
- `DESIGN.md` - Design tokens in markdown format

Example DESIGN.md structure:
```markdown
# System Name

## Colors
- Primary: #0066CC
- Secondary: #FF6B6B

## Typography
- Font Family: Inter
- Font Size: 16px

## Buttons
- Border Radius: 8px
- Padding: 12px 24px
```

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🙏 Acknowledgments

- Design systems from 172+ companies and frameworks
- Design system data sourced from [nexu-io/open-design](https://github.com/nexu-io/open-design)
- Inspired by the open-source design community
- Built with ❤️ for designers and developers

### 📧 Contact

- Create an [Issue](../../issues) for bug reports or feature requests
- Star ⭐ this repo if you find it useful!

---

## Tiếng Việt

### 📖 Tổng Quan

Design System UI Preview là bộ sưu tập toàn diện các hệ thống thiết kế từ những công ty sáng tạo nhất thế giới. Duyệt, xem trước và sao chép design tokens từ các công ty như Apple, Google, Airbnb, Stripe và nhiều hơn nữa - tất cả ở một nơi.

### ✨ Tính Năng

- 🎯 **172+ Hệ Thống Thiết Kế** - Bộ sưu tập được tuyển chọn từ các công ty công nghệ hàng đầu
- 🖼️ **Xem Trước Trực Tiếp** - Landing page tương tác cho mỗi hệ thống thiết kế
- 🔍 **Tìm Kiếm Thông Minh** - Nhanh chóng tìm bất kỳ hệ thống thiết kế nào
- 📋 **Sao Chép Design Tokens** - Sao chép file DESIGN.md chỉ với một cú click
- 🎨 **Chủ Đề Động** - Tạo CSS variables theo thời gian thực
- 📱 **Thiết Kế Responsive** - Hoạt động hoàn hảo trên mọi thiết bị
- ⚡ **Nhanh & Nhẹ** - JavaScript thuần túy, không cần framework
- 🔄 **Tự Động Phát Hiện** - Tự động phát hiện landing page tùy chỉnh

### 🚀 Bắt Đầu Nhanh

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

### 📂 Cấu Trúc Dự Án

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

### 🎨 Hệ Thống Thiết Kế Nổi Bật

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

### 🛠️ Công Nghệ Sử Dụng

- **Frontend:** HTML5, CSS3, JavaScript thuần túy (ES6+)
- **Kiến Trúc:** Modular, component-based
- **Styling:** CSS Variables, Flexbox, Grid
- **Fonts:** Tích hợp Google Fonts
- **Không Phụ Thuộc:** Không cần npm packages, không cần build process

### 📝 Cách Hoạt Động

1. **Tự Động Phát Hiện:** App tự động phát hiện nếu design system có landing page tùy chỉnh
2. **Hệ Thống Fallback:** Nếu không có landing page, nó sẽ parse file DESIGN.md
3. **Chủ Đề Động:** Trích xuất design tokens và tạo CSS variables
4. **Xem Trước Trực Tiếp:** Render design system trong iframe độc lập

### 🤝 Đóng Góp

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

### 📋 Định Dạng Design System

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

### 📄 Giấy Phép

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết chi tiết.

### 🙏 Lời Cảm Ơn

- Các hệ thống thiết kế từ 172+ công ty và frameworks
- Dữ liệu design system được lấy từ [nexu-io/open-design](https://github.com/nexu-io/open-design)
- Lấy cảm hứng từ cộng đồng thiết kế mã nguồn mở
- Được xây dựng với ❤️ cho designers và developers

### 📧 Liên Hệ

- Tạo [Issue](../../issues) để báo lỗi hoặc đề xuất tính năng
- Star ⭐ repo này nếu bạn thấy hữu ích!

---

<div align="center">

**Made with ❤️ by the Design Community**

[⬆ Back to Top](#-design-system-ui-preview)

</div>
