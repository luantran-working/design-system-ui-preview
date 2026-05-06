# Slack Design System

## Brand Identity
Slack is a collaboration hub that brings teams together. The design system emphasizes clarity, productivity, and human connection through warm, approachable aesthetics combined with professional functionality.

## Color Palette

### Primary Colors
- **Aubergine**: `#4A154B` - Primary brand color, deep purple
- **Slack Green**: `#2EB67D` - Success, active states
- **Slack Blue**: `#36C5F0` - Links, interactive elements
- **Slack Yellow**: `#ECB22E` - Highlights, notifications
- **Slack Red**: `#E01E5A` - Alerts, important actions

### Neutral Colors
- **White**: `#FFFFFF` - Background, cards
- **Off White**: `#F8F8F8` - Secondary background
- **Light Gray**: `#E8E8E8` - Borders, dividers
- **Gray**: `#616061` - Secondary text
- **Dark Gray**: `#1D1C1D` - Primary text, headers
- **Black**: `#000000` - High contrast text

### Semantic Colors
- **Success**: `#2EB67D` - Confirmations, success states
- **Warning**: `#ECB22E` - Warnings, caution
- **Error**: `#E01E5A` - Errors, destructive actions
- **Info**: `#36C5F0` - Information, tips

## Typography

### Font Family
- **Primary**: `Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Display**: `Lato, sans-serif` (Bold weights for headings)
- **Monospace**: `Monaco, Menlo, Consolas, "Courier New", monospace`

### Type Scale
- **Display**: 48px / 56px line-height (Hero headlines)
- **H1**: 40px / 48px line-height
- **H2**: 32px / 40px line-height
- **H3**: 24px / 32px line-height
- **H4**: 20px / 28px line-height
- **Body Large**: 18px / 28px line-height
- **Body**: 16px / 24px line-height
- **Body Small**: 14px / 20px line-height
- **Caption**: 12px / 16px line-height

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Black**: 900

## Spacing System
8px baseline grid for consistent rhythm

- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 40px
- **3xl**: 48px
- **4xl**: 64px
- **5xl**: 80px
- **6xl**: 96px

## Border Radius
- **Small**: 4px - Buttons, inputs
- **Medium**: 8px - Cards, containers
- **Large**: 12px - Modals, large cards
- **XLarge**: 16px - Hero sections
- **Round**: 50% - Avatars, badges

## Shadows
- **Small**: `0 1px 3px rgba(0, 0, 0, 0.12)`
- **Medium**: `0 4px 12px rgba(0, 0, 0, 0.15)`
- **Large**: `0 8px 24px rgba(0, 0, 0, 0.18)`
- **XLarge**: `0 16px 48px rgba(0, 0, 0, 0.20)`

## Components

### Buttons
- **Primary**: Aubergine background, white text, 4px radius
- **Secondary**: White background, Aubergine border and text
- **Success**: Slack Green background, white text
- **Danger**: Slack Red background, white text
- **Ghost**: Transparent background, colored text
- **Padding**: 12px 24px (medium), 16px 32px (large)
- **Hover**: Darken by 10%, subtle lift

### Cards
- **Background**: White
- **Border**: 1px solid Light Gray
- **Radius**: 8px
- **Padding**: 24px
- **Shadow**: Small shadow on hover
- **Hover**: Lift with medium shadow

### Navigation
- **Height**: 64px
- **Background**: White
- **Border Bottom**: 1px solid Light Gray
- **Sticky**: Fixed to top
- **Logo**: Aubergine color
- **Links**: Dark Gray, hover to Aubergine

### Forms
- **Input Height**: 44px
- **Border**: 1px solid Light Gray
- **Radius**: 4px
- **Focus**: 2px Slack Blue border
- **Padding**: 12px 16px
- **Label**: Body Small, Dark Gray

### Badges
- **Padding**: 4px 12px
- **Radius**: 12px (pill shape)
- **Font Size**: 12px
- **Font Weight**: 600
- **Colors**: Match semantic colors

## Layout

### Container
- **Max Width**: 1200px
- **Padding**: 24px (mobile), 48px (desktop)
- **Centered**: margin 0 auto

### Grid
- **Columns**: 12-column grid
- **Gap**: 24px
- **Responsive**: 1 column (mobile), 2-3 columns (tablet), 3-4 columns (desktop)

### Sections
- **Padding**: 80px 0 (desktop), 48px 0 (mobile)
- **Alternating Backgrounds**: White and Off White

## Animation & Transitions
- **Duration**: 200ms (fast), 300ms (medium), 400ms (slow)
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) - Material ease
- **Hover**: 200ms ease
- **Page Transitions**: 300ms ease
- **Micro-interactions**: 200ms ease

## Iconography
- **Style**: Rounded, friendly
- **Size**: 16px, 20px, 24px, 32px
- **Stroke Width**: 2px
- **Color**: Inherit from parent or Dark Gray

## Accessibility
- **Contrast Ratio**: Minimum 4.5:1 for text
- **Focus States**: 2px solid Slack Blue outline with 2px offset
- **Touch Targets**: Minimum 44x44px
- **Alt Text**: Required for all images
- **ARIA Labels**: Required for interactive elements

## Voice & Tone
- **Friendly**: Warm, approachable, human
- **Clear**: Direct, concise, jargon-free
- **Helpful**: Supportive, encouraging
- **Professional**: Reliable, trustworthy
- **Playful**: Subtle humor, not forced

## Design Principles
1. **Make work life simpler**: Remove friction, streamline workflows
2. **Be human**: Warm, personal, conversational
3. **Empower teams**: Enable collaboration and productivity
4. **Stay focused**: Clear hierarchy, minimal distractions
5. **Build trust**: Reliable, secure, transparent
