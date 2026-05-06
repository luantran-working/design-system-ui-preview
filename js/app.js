// Main application logic - handles loading design systems and updating preview

let currentMarkdown = '';
let currentSystemId = '';

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // Preload common fonts
  if (window.preloadCommonFonts) {
    window.preloadCommonFonts();
  }
  
  // Render sidebar menu
  renderMenu();
  
  // Setup search functionality
  setupSearch();
  
  // Setup copy button
  setupCopyButton();
  
  // Load first design system by default (Agentic)
  if (designSystems.length > 0) {
    loadDesignSystem(designSystems[0].id);
    
    // Set first menu item as active
    const firstMenuItem = document.querySelector('.menu-item');
    if (firstMenuItem) {
      firstMenuItem.classList.add('active');
    }
  }
}

// Render sidebar menu with all design systems
function renderMenu() {
  const menuContainer = document.getElementById('menu');
  if (!menuContainer) return;
  
  const menuHTML = designSystems.map(system => `
    <div class="menu-item" data-id="${system.id}">
      <span class="menu-name">${system.name}</span>
    </div>
  `).join('');
  
  menuContainer.innerHTML = menuHTML;
  
  // Add click handlers
  menuContainer.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      // Ensure we get the menu-item element even if clicking on child elements
      const menuItem = e.target.closest('.menu-item');
      if (!menuItem) return;
      
      const systemId = menuItem.getAttribute('data-id');
      loadDesignSystem(systemId);
      
      // Update active state
      menuContainer.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
      menuItem.classList.add('active');
    });
  });
}

// Setup search functionality
function setupSearch() {
  const searchInput = document.getElementById('search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
      const name = item.querySelector('.menu-name').textContent.toLowerCase();
      if (name.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Setup copy markdown button
function setupCopyButton() {
  const copyBtn = document.getElementById('copy-btn');
  if (!copyBtn) return;
  
  copyBtn.addEventListener('click', async () => {
    if (!currentSystemId) {
      showNotification('Please select a design system first', 'error');
      return;
    }
    
    // Always try to fetch DESIGN.md for the current system
    try {
      const response = await fetch(`design-systems/${currentSystemId}/DESIGN.md`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${currentSystemId} DESIGN.md`);
      }
      const markdown = await response.text();
      await navigator.clipboard.writeText(markdown);
      showNotification('Markdown copied to clipboard!', 'success');
    } catch (err) {
      console.error('Failed to copy:', err);
      showNotification('Failed to copy markdown', 'error');
    }
  });
}

// Load and render a design system
async function loadDesignSystem(systemId) {
  currentSystemId = systemId;
  
  // Update title
  const system = designSystems.find(s => s.id === systemId);
  const titleEl = document.getElementById('current-system');
  if (titleEl && system) {
    titleEl.textContent = system.name;
  }
  
  // Show loading state
  showLoading(true);
  
  // Try to load custom landing page first
  const landingPagePath = `design-systems/${systemId}/${systemId}-landing.html`;
  
  try {
    // Check if landing page exists by attempting to fetch it
    const landingResponse = await fetch(landingPagePath, { method: 'HEAD' });
    
    if (landingResponse.ok) {
      // Landing page exists, load it
      const iframe = document.getElementById('preview-frame');
      if (iframe) {
        iframe.src = landingPagePath;
        currentMarkdown = ''; // Clear markdown since we're loading a full page
      }
      showLoading(false);
      showNotification(`Loaded ${system.name}`, 'success');
      return;
    }
  } catch (error) {
    // Landing page doesn't exist, continue to DESIGN.md fallback
    console.log(`No landing page for ${systemId}, trying DESIGN.md`);
  }
  
  try {
    // Fetch markdown file - use relative path from index.html location
    const response = await fetch(`design-systems/${systemId}/DESIGN.md`);
    if (!response.ok) {
      throw new Error(`Failed to load design system: ${response.status}`);
    }
    
    const markdown = await response.text();
    currentMarkdown = markdown;
    
    // Parse design tokens
    const parser = new window.DesignSystemParser(markdown);
    const tokens = parser.parse();
    
    // Load custom font
    if (tokens.typography.fontFamily && window.loadFont) {
      const mappedFont = window.loadFont(tokens.typography.fontFamily);
      tokens.typography.fontFamily = mappedFont;
    }
    
    // Generate CSS
    const css = parser.generateCSS();
    
    // Inject CSS into iframe
    const iframe = document.getElementById('preview-frame');
    if (iframe && iframe.contentDocument) {
      const styleEl = iframe.contentDocument.getElementById('dynamic-styles');
      if (styleEl) {
        styleEl.textContent = css;
      }
    }
    
    showLoading(false);
    showNotification(`Loaded ${system.name}`, 'success');
    
  } catch (error) {
    console.error('Error loading design system:', error);
    showLoading(false);
    showNotification(`Error loading design system: ${error.message}`, 'error');
  }
}

// Show/hide loading indicator
function showLoading(show) {
  const iframe = document.getElementById('preview-frame');
  if (!iframe) return;
  
  if (show) {
    iframe.style.opacity = '0.5';
  } else {
    iframe.style.opacity = '1';
  }
}

// Show notification toast
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Handle iframe load event
window.addEventListener('load', () => {
  const iframe = document.getElementById('preview-frame');
  if (iframe) {
    iframe.addEventListener('load', () => {
      // Only reload design system if the iframe is showing the template (not a custom landing page)
      if (currentSystemId && iframe.src.includes('template.html')) {
        loadDesignSystem(currentSystemId);
      }
    });
  }
});
