# Contributing to Design System UI Preview

Thank you for your interest in contributing to Design System UI Preview! We welcome contributions from the community.

## 🌟 How to Contribute

There are many ways to contribute to this project:

- 🎨 Add new design systems
- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Fix issues
- ✨ Enhance existing features

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Adding a New Design System](#adding-a-new-design-system)
- [Code Style Guidelines](#code-style-guidelines)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

## 🚀 Getting Started

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/design-system-ui-preview.git
   cd design-system-ui-preview
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make your changes**

5. **Test your changes**
   - Open `index.html` in your browser
   - Test all functionality
   - Ensure responsive design works

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

## 🎨 Adding a New Design System

### Step 1: Create the Design System Folder

```bash
mkdir design-systems/your-system-id
```

### Step 2: Create the Landing Page

Create `design-systems/your-system-id/your-system-id-landing.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your System Name</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #ffffff;
      color: #000000;
    }
    
    /* Add your design system styles here */
  </style>
</head>
<body>
  <!-- Add your landing page content here -->
  <header>
    <h1>Your System Name</h1>
  </header>
  
  <main>
    <!-- Hero section, features, etc. -->
  </main>
</body>
</html>
```

### Step 3: Create the DESIGN.md File

Create `design-systems/your-system-id/DESIGN.md`:

```markdown
# Your System Name

A brief description of the design system.

## Colors

### Primary Colors
- Primary: #0066CC
- Secondary: #FF6B6B
- Accent: #00D4AA

### Neutral Colors
- Background: #FFFFFF
- Surface: #F5F5F5
- Text Primary: #000000
- Text Secondary: #666666

### Semantic Colors
- Success: #00C853
- Warning: #FFB300
- Error: #D32F2F
- Info: #0288D1

## Typography

### Font Family
- Primary: Inter, -apple-system, sans-serif
- Monospace: 'Fira Code', monospace

### Font Sizes
- Heading 1: 48px
- Heading 2: 36px
- Heading 3: 24px
- Body: 16px
- Small: 14px

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Line Heights
- Tight: 1.2
- Normal: 1.5
- Relaxed: 1.75

## Spacing

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

## Border Radius

- sm: 4px
- md: 8px
- lg: 12px
- xl: 16px
- full: 9999px

## Shadows

- sm: 0 1px 2px rgba(0,0,0,0.05)
- md: 0 4px 6px rgba(0,0,0,0.1)
- lg: 0 10px 15px rgba(0,0,0,0.1)
- xl: 0 20px 25px rgba(0,0,0,0.15)

## Buttons

### Primary Button
- Background: Primary color
- Text: White
- Padding: 12px 24px
- Border Radius: 8px
- Font Weight: 600

### Secondary Button
- Background: Transparent
- Border: 2px solid Primary
- Text: Primary color
- Padding: 12px 24px
- Border Radius: 8px

## Components

### Cards
- Background: Surface color
- Border Radius: 12px
- Padding: 24px
- Shadow: md

### Inputs
- Border: 1px solid #E0E0E0
- Border Radius: 8px
- Padding: 12px 16px
- Focus: 2px solid Primary

## Animation

- Duration: 200ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

### Step 4: Update systems.js

Add your system to `js/systems.js`:

```javascript
const designSystems = [
  // ... existing systems
  { id: 'your-system-id', name: 'Your System Name' },
  // ... more systems
];
```

**Important:** Keep the array sorted alphabetically by `id`.

### Step 5: Test Your Addition

1. Open `index.html` in your browser
2. Search for your design system
3. Click on it to preview
4. Test the "Copy Markdown" button
5. Verify responsive design

## 📐 Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Indent with 2 spaces
- Use lowercase for tags and attributes
- Close all tags properly

### CSS
- Use meaningful class names
- Follow BEM naming convention when appropriate
- Group related properties
- Use CSS variables for theming
- Mobile-first responsive design

### JavaScript
- Use ES6+ features
- Use `const` and `let`, avoid `var`
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused
- Use async/await for asynchronous code

### File Naming
- Use kebab-case for files: `your-system-id.html`
- Use camelCase for JavaScript variables: `currentSystemId`
- Use PascalCase for classes: `DesignSystemParser`

## 🔍 Submitting Changes

### Commit Message Format

Use clear and descriptive commit messages:

```
Type: Brief description

Detailed explanation (if needed)
```

**Types:**
- `Add:` New feature or design system
- `Fix:` Bug fix
- `Update:` Update existing feature
- `Refactor:` Code refactoring
- `Docs:` Documentation changes
- `Style:` Code style changes (formatting, etc.)
- `Test:` Adding or updating tests

**Examples:**
```
Add: Tesla design system with landing page

Fix: Menu navigation click handler for nested elements

Update: README with new contributing guidelines

Refactor: Simplify landing page detection logic
```

### Pull Request Guidelines

1. **Title:** Clear and descriptive
2. **Description:** Explain what and why
3. **Screenshots:** Include for UI changes
4. **Testing:** Describe how you tested
5. **Checklist:** Complete the PR checklist

**PR Template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New design system
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Screenshots (if applicable)
Add screenshots here

## Testing
How did you test your changes?

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tested in multiple browsers
- [ ] Responsive design verified
```

## 🐛 Reporting Bugs

### Before Submitting a Bug Report

1. Check existing issues
2. Try the latest version
3. Collect information:
   - Browser and version
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots/videos

### Bug Report Template

```markdown
**Describe the bug**
A clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
Add screenshots if applicable

**Environment:**
- Browser: [e.g. Chrome 120]
- OS: [e.g. Windows 11]
- Device: [e.g. Desktop, iPhone 12]

**Additional context**
Any other relevant information
```

## 💡 Feature Requests

We love new ideas! To suggest a feature:

1. **Check existing requests** - Maybe it's already suggested
2. **Be specific** - Clearly describe the feature
3. **Explain the benefit** - Why is it useful?
4. **Provide examples** - Show similar implementations

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem

**Describe the solution you'd like**
What you want to happen

**Describe alternatives you've considered**
Other solutions you've thought about

**Additional context**
Screenshots, mockups, or examples
```

## 🌍 Translation Contributions

Help us translate the documentation:

1. Create a new file: `README.{language-code}.md`
2. Translate the content
3. Update the language selector in README.md
4. Submit a PR

## 📞 Questions?

- Open a [Discussion](../../discussions)
- Create an [Issue](../../issues)
- Check existing documentation

## 🙏 Thank You!

Every contribution, no matter how small, is valuable and appreciated. Thank you for helping make Design System UI Preview better!

---

**Happy Contributing! 🎉**
