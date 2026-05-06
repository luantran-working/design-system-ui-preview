// Parser for DESIGN.md files - extracts design tokens and generates CSS variables

class DesignSystemParser {
  constructor(markdown) {
    this.markdown = markdown;
    this.tokens = {
      colors: {},
      typography: {},
      buttons: {},
      spacing: {},
      shadows: {},
      radius: {}
    };
  }

  parse() {
    this.extractColors();
    this.extractTypography();
    this.extractButtons();
    this.extractSpacing();
    this.extractShadows();
    return this.tokens;
  }

  // Extract colors from "## 2. Color Palette & Roles" section
  extractColors() {
    const colorSection = this.extractSection('Color Palette');
    if (!colorSection) return;

    // Match patterns like: **Primary** (`#533afd`)
    const colorRegex = /\*\*([^*]+)\*\*[^`]*`(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgb[a]?\([^)]+\))/gi;
    let match;

    while ((match = colorRegex.exec(colorSection)) !== null) {
      const name = match[1].trim();
      const value = match[2].trim();
      
      // Map common color names to CSS variable names
      if (name.toLowerCase().includes('primary') || name.toLowerCase().includes('brand')) {
        this.tokens.colors.primary = value;
      } else if (name.toLowerCase().includes('heading') || name.toLowerCase().includes('text')) {
        this.tokens.colors.text = value;
      } else if (name.toLowerCase().includes('white') || name.toLowerCase().includes('canvas')) {
        this.tokens.colors.background = value;
      } else if (name.toLowerCase().includes('gray') && name.toLowerCase().includes('100')) {
        this.tokens.colors.border = value;
      } else if (name.toLowerCase().includes('success') || name.toLowerCase().includes('green')) {
        this.tokens.colors.success = value;
      }
    }

    // Fallback defaults
    this.tokens.colors.primary = this.tokens.colors.primary || '#0070f3';
    this.tokens.colors.text = this.tokens.colors.text || '#000000';
    this.tokens.colors.background = this.tokens.colors.background || '#ffffff';
    this.tokens.colors.border = this.tokens.colors.border || '#e5e5e5';
    this.tokens.colors.success = this.tokens.colors.success || '#10b981';
  }

  // Extract typography from table in "## 3. Typography Rules"
  extractTypography() {
    const typoSection = this.extractSection('Typography Rules');
    if (!typoSection) return;

    // Extract font family
    const fontFamilyMatch = typoSection.match(/\*\*Primary\*\*[:\s]+`([^`]+)`/i) ||
                           typoSection.match(/Font Family[:\s]+`([^`]+)`/i);
    if (fontFamilyMatch) {
      this.tokens.typography.fontFamily = fontFamilyMatch[1].split(',')[0].trim().replace(/['"]/g, '');
    }

    // Extract display/hero size from table
    const displayMatch = typoSection.match(/Display[^|]*\|[^|]*\|[^|]*(\d+)px[^|]*\|[^|]*(\d+)[^|]*\|[^|]*[\d.]+[^|]*\|[^|]*(-?[\d.]+)px/i);
    if (displayMatch) {
      this.tokens.typography.displaySize = displayMatch[1] + 'px';
      this.tokens.typography.displayWeight = displayMatch[2];
      this.tokens.typography.displaySpacing = displayMatch[3] + 'px';
    }

    // Extract body size
    const bodyMatch = typoSection.match(/Body[^|]*\|[^|]*\|[^|]*(\d+)px[^|]*\|[^|]*(\d+)/i);
    if (bodyMatch) {
      this.tokens.typography.bodySize = bodyMatch[1] + 'px';
      this.tokens.typography.bodyWeight = bodyMatch[2];
    }

    // Fallback defaults
    this.tokens.typography.fontFamily = this.tokens.typography.fontFamily || 'Inter';
    this.tokens.typography.displaySize = this.tokens.typography.displaySize || '48px';
    this.tokens.typography.displayWeight = this.tokens.typography.displayWeight || '600';
    this.tokens.typography.displaySpacing = this.tokens.typography.displaySpacing || 'normal';
    this.tokens.typography.bodySize = this.tokens.typography.bodySize || '16px';
    this.tokens.typography.bodyWeight = this.tokens.typography.bodyWeight || '400';
  }

  // Extract button styles from "### Buttons" section
  extractButtons() {
    const buttonSection = this.extractSection('Buttons');
    if (!buttonSection) return;

    // Extract radius
    const radiusMatch = buttonSection.match(/Radius[:\s]+(\d+)px/i);
    if (radiusMatch) {
      this.tokens.buttons.radius = radiusMatch[1] + 'px';
    }

    // Extract padding
    const paddingMatch = buttonSection.match(/Padding[:\s]+([\d\s]+px)/i);
    if (paddingMatch) {
      this.tokens.buttons.padding = paddingMatch[1];
    }

    // Extract shadow
    const shadowMatch = buttonSection.match(/Shadow[:\s]+`([^`]+)`/i);
    if (shadowMatch) {
      this.tokens.buttons.shadow = shadowMatch[1];
    }

    // Fallback defaults
    this.tokens.buttons.radius = this.tokens.buttons.radius || '6px';
    this.tokens.buttons.padding = this.tokens.buttons.padding || '12px 24px';
    this.tokens.buttons.shadow = this.tokens.buttons.shadow || '0 1px 3px rgba(0,0,0,0.1)';
  }

  // Extract spacing system
  extractSpacing() {
    const spacingSection = this.extractSection('Spacing');
    if (!spacingSection) return;

    // Extract base unit
    const baseMatch = spacingSection.match(/Base[^:]*[:\s]+(\d+)px/i);
    if (baseMatch) {
      this.tokens.spacing.base = baseMatch[1] + 'px';
    }

    // Fallback default
    this.tokens.spacing.base = this.tokens.spacing.base || '8px';
  }

  // Extract shadow styles
  extractShadows() {
    const shadowSection = this.extractSection('Shadow');
    if (!shadowSection) return;

    // Extract card shadow
    const cardShadowMatch = shadowSection.match(/Card[^`]*`([^`]+)`/i);
    if (cardShadowMatch) {
      this.tokens.shadows.card = cardShadowMatch[1];
    }

    // Fallback default
    this.tokens.shadows.card = this.tokens.shadows.card || '0 1px 3px rgba(0,0,0,0.1)';
  }

  // Helper: Extract section by heading
  extractSection(heading) {
    const regex = new RegExp(`##[^#]*${heading}[^#]*?(?=##|$)`, 'is');
    const match = this.markdown.match(regex);
    return match ? match[0] : null;
  }

  // Generate CSS variables from tokens
  generateCSS() {
    const { colors, typography, buttons, spacing, shadows } = this.tokens;

    return `
:root {
  /* Colors */
  --primary-color: ${colors.primary};
  --text-color: ${colors.text};
  --bg-color: ${colors.background};
  --border-color: ${colors.border};
  --success-color: ${colors.success};
  
  /* Typography */
  --font-primary: '${typography.fontFamily}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --heading-size: ${typography.displaySize};
  --heading-weight: ${typography.displayWeight};
  --heading-spacing: ${typography.displaySpacing};
  --body-size: ${typography.bodySize};
  --body-weight: ${typography.bodyWeight};
  
  /* Buttons */
  --button-radius: ${buttons.radius};
  --button-padding: ${buttons.padding};
  --button-shadow: ${buttons.shadow};
  
  /* Spacing */
  --spacing-unit: ${spacing.base};
  --spacing-xs: calc(${spacing.base} * 0.5);
  --spacing-sm: calc(${spacing.base} * 1);
  --spacing-md: calc(${spacing.base} * 2);
  --spacing-lg: calc(${spacing.base} * 3);
  --spacing-xl: calc(${spacing.base} * 4);
  
  /* Shadows */
  --shadow-card: ${shadows.card};
}
    `.trim();
  }
}

// Export for use in app.js
window.DesignSystemParser = DesignSystemParser;
