# Design Systems Preview

A website to preview 138+ design systems with live mockup pages. Each design system is rendered as a full landing page with colors, typography, buttons, and components applied from the original DESIGN.md files.

## 🚀 Features

- **138+ Design Systems**: Preview design systems from Vercel, Stripe, GitHub, Apple, and many more
- **Live Preview**: Full landing page mockup with hero, features, pricing, and footer sections
- **Dynamic Styling**: CSS variables automatically generated from markdown files
- **Font Loading**: Custom fonts loaded from Google Fonts with smart fallbacks
- **Copy Markdown**: One-click copy of the entire DESIGN.md file
- **Search**: Quick search to filter design systems
- **Responsive**: Works on desktop, tablet, and mobile devices

## 📁 Project Structure

```
open-design/
├── preview/                      # Website files
│   ├── index.html                # Main page with sidebar + iframe
│   ├── template.html             # Landing page template
│   ├── css/
│   │   ├── main.css              # Sidebar and layout styles
│   │   └── template.css          # Template mockup styles
│   ├── js/
│   │   ├── systems.js            # List of 138 design systems
│   │   ├── parser.js             # Parse DESIGN.md → CSS variables
│   │   ├── fonts.js              # Load custom fonts
│   │   └── app.js                # Main application logic
│   └── README.md                 # This file
└── design-systems/               # Design system markdown files
    ├── vercel/DESIGN.md
    ├── stripe/DESIGN.md
    ├── github/DESIGN.md
    └── ... (135 more)
```

## 🎯 How It Works

1. **User selects a design system** from the sidebar (e.g., "Vercel")
2. **App fetches** `../design-systems/vercel/DESIGN.md`
3. **Parser extracts** design tokens:
   - Colors (primary, text, background, borders)
   - Typography (font-family, sizes, weights, letter-spacing)
   - Buttons (radius, padding, shadows)
   - Spacing system
4. **CSS variables generated** and injected into the template
5. **Custom fonts loaded** from Google Fonts (with fallbacks)
6. **Template renders** with the design system applied

## 🖥️ Local Development

### Option 1: Simple HTTP Server (Python)

```bash
# Navigate to the preview folder
cd preview

# Start a local server
python -m http.server 8000

# Open browser
# http://localhost:8000
```

### Option 2: Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Right-click on `preview/index.html`
3. Select "Open with Live Server"

### Option 3: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Navigate to preview folder
cd preview

# Start server
http-server -p 8000

# Open browser
# http://localhost:8000
```

## 🌐 Deploy to GitHub Pages

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Add design systems preview website"

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/open-design.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/preview`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 3: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/open-design/
```

## 🎨 Supported Design Systems

The website includes 138 design systems:

**Developer Tools**: Vercel, GitHub, Linear, Cursor, Raycast, Warp, Framer, Figma, Notion, Supabase, PostHog, Sentry, Replicate, Resend, Mintlify, Sanity

**AI & ML**: OpenAI, Claude, Mistral AI, Cohere, Together AI, ElevenLabs, Runway ML, Hugging Face, Ollama, X.AI, Minimax

**Fintech**: Stripe, Coinbase, Revolut, Wise, Kraken, Binance

**Consumer**: Apple, Airbnb, Uber, Spotify, Nike, Tesla, Starbucks, Duolingo, Discord, Pinterest, Shopify

**Enterprise**: IBM, MongoDB, ClickHouse, HashiCorp, Material Design, Ant Design, shadcn/ui

**Automotive**: Ferrari, Lamborghini, Bugatti, BMW, Renault, SpaceX

**Design Styles**: Brutalism, Neobrutalism, Glassmorphism, Neumorphism, Claymorphism, Skeumorphism, Minimalism, and more

## 🔧 Customization

### Add a New Design System

1. Create a new folder in `design-systems/`:
   ```bash
   mkdir design-systems/my-system
   ```

2. Add a `DESIGN.md` file with the design system details

3. Update `preview/js/systems.js`:
   ```javascript
   { id: 'my-system', name: 'My System' }
   ```

4. Refresh the website - your new system will appear in the sidebar

### Modify the Template

Edit `preview/template.html` to change the landing page structure:
- Add/remove sections
- Change content
- Modify layout

The CSS variables will automatically apply to your changes.

### Customize Styling

- **Sidebar**: Edit `preview/css/main.css`
- **Template**: Edit `preview/css/template.css`
- **Parser logic**: Edit `preview/js/parser.js`

## 📝 Technical Details

### Parser Logic

The parser extracts design tokens using regex patterns:

- **Colors**: Matches `**Name** (\`#hex\`)` patterns
- **Typography**: Parses markdown tables for font specs
- **Buttons**: Extracts radius, padding, shadow from sections
- **Spacing**: Finds base unit from spacing system

### Font Mapping

Custom fonts are mapped to Google Fonts:
- `Geist` → `Inter`
- `sohne-var` → `Inter`
- `SFMono` → `Roboto Mono`
- `system-ui` → Native system font

### CSS Variables

Generated variables include:
```css
--primary-color
--text-color
--bg-color
--border-color
--font-primary
--heading-size
--heading-weight
--heading-spacing
--button-radius
--button-padding
--spacing-unit
```

## 🐛 Troubleshooting

**Issue**: Design system not loading
- Check browser console for errors
- Verify the DESIGN.md file exists
- Check file path is correct (case-sensitive)

**Issue**: Fonts not displaying
- Check internet connection (fonts load from Google Fonts)
- Verify font name in DESIGN.md
- Check browser console for font loading errors

**Issue**: Styles not applying
- Check if CSS variables are generated (inspect iframe)
- Verify markdown format matches parser expectations
- Check browser console for parsing errors

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! To add a new design system:

1. Fork the repository
2. Add your design system to `design-systems/`
3. Update `systems.js`
4. Submit a pull request

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**

Last updated: May 2026
