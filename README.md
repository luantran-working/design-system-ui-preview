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

A beautiful, interactive web application to preview and explore 172+ design systems from leading tech companies and popular design frameworks.

[🌐 Live Demo](https://luantran-working.github.io/design-system-ui-preview) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## 📖 Overview

Design System UI Preview is a comprehensive collection of design systems from the world's most innovative companies and frameworks. Browse, preview, and copy design tokens from companies like Apple, Google, Airbnb, Stripe, and many more - all in one place.

## ✨ Features

- 🎯 **172+ Design Systems** - Curated collection from leading tech companies
- 🖼️ **Live Preview** - Interactive landing pages for each design system
- 🔍 **Smart Search** - Quickly find any design system
- 📋 **Copy Design Tokens** - One-click copy of DESIGN.md files
- 🎨 **Dynamic Theming** - Real-time CSS variable generation
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast & Lightweight** - Pure vanilla JavaScript, no frameworks
- 🔄 **Auto-Detection** - Automatically detects custom landing pages

## 🚀 Quick Start

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

## 📂 Project Structure

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

## 🎨 Featured Design Systems

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

## 🛠️ Technology Stack

- **Frontend:** Pure HTML5, CSS3, JavaScript (ES6+)
- **Architecture:** Modular, component-based
- **Styling:** CSS Variables, Flexbox, Grid
- **Fonts:** Google Fonts integration
- **No Dependencies:** Zero npm packages, no build process

## 📝 How It Works

1. **Auto-Detection:** The app automatically detects if a design system has a custom landing page
2. **Fallback System:** If no landing page exists, it parses the DESIGN.md file
3. **Dynamic Theming:** Extracts design tokens and generates CSS variables
4. **Live Preview:** Renders the design system in an isolated iframe

## 🤝 Contributing

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

For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)

## 📋 Design System Format

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design systems from 172+ companies and frameworks
- Design system data sourced from [nexu-io/open-design](https://github.com/nexu-io/open-design)
- Inspired by the open-source design community
- Built with ❤️ for designers and developers

## 📧 Contact

- Create an [Issue](../../issues) for bug reports or feature requests
- Star ⭐ this repo if you find it useful!

---

<div align="center">

**Made with ❤️ by the Design Community**

[⬆ Back to Top](#-design-system-ui-preview)

</div>
