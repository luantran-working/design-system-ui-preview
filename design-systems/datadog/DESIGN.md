# Datadog Design System

## Brand Identity
Datadog is a monitoring and analytics platform for cloud-scale applications. The design system emphasizes observability, data visualization, technical precision, and enterprise reliability.

## Design Principles
- **Data-First**: Prioritize clarity and readability of metrics and data
- **Technical Precision**: Clean, professional interface for technical users
- **Observability**: Make complex systems understandable at a glance
- **Enterprise-Grade**: Reliable, scalable, and trustworthy design
- **Performance**: Fast, responsive, and efficient interfaces

## Color Palette

### Primary Colors
- **Purple Primary**: `#632CA6` - Main brand color, used for primary actions and branding
- **Purple Dark**: `#4B1E87` - Hover states and emphasis
- **Purple Light**: `#8B5FBF` - Lighter accents and backgrounds

### Secondary Colors
- **Teal**: `#00B3A4` - Success states, positive metrics
- **Blue**: `#5B4FFF` - Information, links, secondary actions
- **Orange**: `#FF9D3D` - Warnings, alerts
- **Red**: `#E5493A` - Errors, critical alerts
- **Pink**: `#E95B8F` - Highlights, special features

### Neutral Colors
- **Gray 900**: `#1D1D1F` - Primary text, dark backgrounds
- **Gray 800**: `#2E2E32`
- **Gray 700**: `#3E3E42`
- **Gray 600**: `#5E5E62`
- **Gray 500**: `#7E7E82`
- **Gray 400**: `#9E9EA2`
- **Gray 300**: `#BEBEC2`
- **Gray 200**: `#E0E0E4`
- **Gray 100**: `#F5F5F7`
- **White**: `#FFFFFF`

### Data Visualization Colors
- **Chart Blue**: `#5B4FFF`
- **Chart Green**: `#00B3A4`
- **Chart Orange**: `#FF9D3D`
- **Chart Purple**: `#8B5FBF`
- **Chart Pink**: `#E95B8F`
- **Chart Yellow**: `#FFD93D`

## Typography

### Font Families
- **Primary**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Monospace**: `'Roboto Mono', 'Courier New', monospace` - For code, metrics, and technical data

### Type Scale
- **Display**: 48px / 56px line-height / 700 weight
- **H1**: 40px / 48px / 700
- **H2**: 32px / 40px / 600
- **H3**: 24px / 32px / 600
- **H4**: 20px / 28px / 600
- **Body Large**: 18px / 28px / 400
- **Body**: 16px / 24px / 400
- **Body Small**: 14px / 20px / 400
- **Caption**: 12px / 16px / 400
- **Code**: 14px / 20px / 400 (monospace)

## Spacing System
8px baseline grid:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

## Components

### Buttons
- **Primary**: Purple background (#632CA6), white text, 8px border-radius
- **Secondary**: White background, purple border, purple text
- **Tertiary**: Transparent background, purple text
- **Sizes**: Small (32px), Medium (40px), Large (48px)
- **States**: Hover (darker), Active (darkest), Disabled (50% opacity)

### Cards
- **Background**: White with subtle shadow
- **Border**: 1px solid #E0E0E4
- **Border Radius**: 8px
- **Padding**: 24px
- **Shadow**: 0 2px 8px rgba(0, 0, 0, 0.08)
- **Hover**: Lift effect with increased shadow

### Metrics Display
- **Large Number**: 40px, 700 weight, monospace
- **Label**: 14px, 400 weight, gray-600
- **Trend Indicator**: Arrow icon + percentage
- **Color Coding**: Green (positive), Red (negative), Gray (neutral)

### Navigation
- **Height**: 64px
- **Background**: White with bottom border
- **Logo**: Purple (#632CA6)
- **Links**: Gray-700, hover to Purple
- **Active State**: Purple with bottom border indicator

### Data Tables
- **Header**: Gray-100 background, 600 weight
- **Row Height**: 48px
- **Border**: 1px solid Gray-200
- **Hover**: Gray-50 background
- **Zebra Striping**: Optional, Gray-50 for alternate rows

### Charts & Graphs
- **Line Weight**: 2px
- **Grid Lines**: Gray-200, 1px
- **Tooltips**: White background, shadow, 8px radius
- **Legend**: Horizontal, 14px text, colored indicators

## Layout

### Grid System
- **Container Max Width**: 1440px
- **Columns**: 12-column grid
- **Gutter**: 24px
- **Breakpoints**:
  - Mobile: 0-767px
  - Tablet: 768-1023px
  - Desktop: 1024-1439px
  - Large: 1440px+

### Section Spacing
- **Section Padding**: 80px vertical, 24px horizontal
- **Content Max Width**: 1200px for text-heavy sections
- **Hero Height**: 600px minimum

## Interactions

### Transitions
- **Fast**: 150ms ease-in-out - Hover states, small movements
- **Medium**: 250ms ease-in-out - Modals, dropdowns
- **Slow**: 350ms ease-in-out - Page transitions, large animations

### Hover Effects
- **Buttons**: Background color change + slight scale (1.02)
- **Cards**: Lift effect (translateY(-4px)) + shadow increase
- **Links**: Color change to purple + underline

### Loading States
- **Skeleton**: Gray-200 background with shimmer animation
- **Spinner**: Purple circular spinner
- **Progress Bar**: Purple fill on gray-200 background

## Accessibility

### Focus States
- **Outline**: 3px solid purple, 2px offset
- **Visible on keyboard navigation only**

### Color Contrast
- **Text on White**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio

### ARIA Labels
- All interactive elements have proper labels
- Status messages announced to screen readers
- Semantic HTML structure

## Voice & Tone
- **Professional**: Technical but approachable
- **Clear**: Direct communication, no jargon
- **Confident**: Authoritative on monitoring and observability
- **Helpful**: Educational and supportive
