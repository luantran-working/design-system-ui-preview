// Font loader - maps custom fonts to Google Fonts or fallbacks

const fontMap = {
  // Custom fonts → Google Fonts fallbacks
  'Geist': 'Inter',
  'Geist Sans': 'Inter',
  'Geist Mono': 'Roboto Mono',
  'sohne-var': 'Inter',
  'sohne': 'Inter',
  'SourceCodePro': 'Source Code Pro',
  'Source Code Pro': 'Source Code Pro',
  'SFMono': 'Roboto Mono',
  'SFMono-Regular': 'Roboto Mono',
  'SF Pro Display': 'system-ui',
  'SF Pro Text': 'system-ui',
  'system-ui': 'system-ui',
  'Inter': 'Inter',
  'Roboto': 'Roboto',
  'Poppins': 'Poppins',
  'Montserrat': 'Montserrat',
  'Open Sans': 'Open Sans',
  'Lato': 'Lato',
  'Raleway': 'Raleway',
  'Work Sans': 'Work Sans',
  'DM Sans': 'DM Sans',
  'Space Grotesk': 'Space Grotesk',
  'Manrope': 'Manrope',
  'Plus Jakarta Sans': 'Plus Jakarta Sans'
};

// Track loaded fonts to avoid duplicates
const loadedFonts = new Set();

function loadFont(fontFamily) {
  // Clean font name
  const cleanFont = fontFamily.split(',')[0].trim().replace(/['"]/g, '');
  
  // Skip if already loaded
  if (loadedFonts.has(cleanFont)) {
    return cleanFont;
  }
  
  // Get Google Font name or fallback
  const googleFont = fontMap[cleanFont] || 'Inter';
  
  // Skip system fonts
  if (googleFont === 'system-ui') {
    loadedFonts.add(cleanFont);
    return googleFont;
  }
  
  // Load from Google Fonts
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${googleFont.replace(/ /g, '+')}:wght@300;400;500;600;700&display=swap`;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  
  loadedFonts.add(cleanFont);
  
  return googleFont;
}

// Preload common fonts
function preloadCommonFonts() {
  loadFont('Inter');
  loadFont('Roboto Mono');
}

// Export for use in app.js
window.loadFont = loadFont;
window.preloadCommonFonts = preloadCommonFonts;
