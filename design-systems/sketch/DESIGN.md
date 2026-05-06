# Design System Inspired by Sketch

> Category: Design & Creative
> Professional design tool for Mac. Signature yellow/orange, clean and designer-focused.

## 1. Visual Theme & Atmosphere

Sketch's design language is the embodiment of professional design tooling — a refined, confident aesthetic built around its signature yellow-orange brand color (#FDB300) that radiates creativity and precision. Unlike the playful multi-color approach of competitors, Sketch maintains a sophisticated restraint with a focused color palette that puts the designer's work front and center.

The interface philosophy is "tools for professionals" — clean, uncluttered, with generous whitespace and a typography system that balances readability with visual hierarchy. Sketch uses system fonts (SF Pro on Mac) with careful weight selection, creating a native, fast-feeling interface that respects platform conventions while maintaining brand identity.

What makes Sketch distinctive is its commitment to clarity and craft. Every element feels purposeful, from the precise 8px grid system to the subtle shadows that create depth without distraction. The yellow-orange accent color appears strategically — on primary CTAs, active states, and key highlights — creating visual anchors that guide the eye without overwhelming.

**Key Characteristics:**
- Signature yellow-orange (#FDB300) as primary brand color
- Clean, professional aesthetic with generous whitespace
- System font stack (SF Pro Display, Helvetica Neue, system-ui)
- 8px baseline grid for consistent spacing
- Subtle shadows and elevation for depth
- Focus on designer workflows and collaboration
- Plugin ecosystem and extensibility emphasis
- Mac-native feel with cross-platform ambitions

## 2. Color Palette & Roles

### Primary
- **Sketch Yellow** (`#FDB300`): Primary brand color, CTAs, active states, highlights
- **Sketch Orange** (`#F5A623`): Secondary accent, hover states, warm highlights
- **Sketch Dark Orange** (`#E89500`): Pressed states, darker accents

### Neutrals
- **Charcoal** (`#1A1A1A`): Primary text, headings
- **Dark Gray** (`#333333`): Secondary text, body copy
- **Medium Gray** (`#666666`): Tertiary text, captions
- **Light Gray** (`#999999`): Disabled text, subtle elements
- **Border Gray** (`#E5E5E5`): Borders, dividers
- **Background Gray** (`#F7F7F7`): Secondary backgrounds, cards
- **Pure White** (`#FFFFFF`): Primary background, cards

### Semantic Colors
- **Success Green** (`#27AE60`): Success states, confirmations
- **Error Red** (`#E74C3C`): Errors, warnings, destructive actions
- **Info Blue** (`#3498DB`): Information, links, secondary actions
- **Warning Orange** (`#F39C12`): Warnings, cautions

### Surface & Background
- **Primary Surface** (`#FFFFFF`): Main page background
- **Secondary Surface** (`#F7F7F7`): Card backgrounds, alternate sections
- **Dark Surface** (`#1A1A1A`): Footer, dark sections
- **Overlay** (`rgba(0, 0, 0, 0.5)`): Modal overlays, dropdowns

## 3. Typography Rules

### Font Family
- **Primary**: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif`
- **Monospace**: `"SF Mono", "Monaco", "Courier New", monospace`

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display / Hero | 64px (4rem) | 700 (Bold) | 1.1 | -0.02em | Maximum impact headlines |
| H1 | 48px (3rem) | 700 (Bold) | 1.2 | -0.01em | Page titles |
| H2 | 36px (2.25rem) | 600 (Semibold) | 1.3 | -0.01em | Section headings |
| H3 | 28px (1.75rem) | 600 (Semibold) | 1.4 | normal | Subsection headings |
| H4 | 24px (1.5rem) | 600 (Semibold) | 1.4 | normal | Card titles |
| Body Large | 20px (1.25rem) | 400 (Regular) | 1.6 | normal | Intro text, emphasis |
| Body | 16px (1rem) | 400 (Regular) | 1.6 | normal | Standard body text |
| Body Small | 14px (0.875rem) | 400 (Regular) | 1.5 | normal | Secondary text, captions |
| Button | 16px (1rem) | 500 (Medium) | 1.5 | normal | Button labels |
| Label | 12px (0.75rem) | 600 (Semibold) | 1.4 | 0.05em | Uppercase labels, tags |

### Principles
- **System font optimization**: Use native system fonts for performance and familiarity
- **Clear hierarchy**: Bold weights (600-700) for headings, regular (400) for body
- **Readable line heights**: 1.5-1.6 for body text ensures comfortable reading
- **Subtle tracking**: Negative letter-spacing on large text, positive on small labels
- **Professional tone**: Balanced, confident, not playful

## 4. Component Stylings

### Buttons

**Primary (Yellow)**
- Background: Sketch Yellow (`#FDB300`)
- Text: Charcoal (`#1A1A1A`)
- Padding: 12px 24px
- Radius: 6px
- Font: 16px, weight 500
- Hover: Sketch Orange (`#F5A623`)
- Active: Sketch Dark Orange (`#E89500`)
- Shadow: 0 2px 4px rgba(0, 0, 0, 0.1)

**Secondary (Outline)**
- Background: Transparent
- Border: 2px solid Charcoal (`#1A1A1A`)
- Text: Charcoal
- Padding: 10px 22px (adjusted for border)
- Radius: 6px
- Hover: Background Charcoal, Text White

**Tertiary (Ghost)**
- Background: Transparent
- Text: Dark Gray (`#333333`)
- Padding: 12px 24px
- Hover: Background Gray (`#F7F7F7`)

**Large Button**
- Padding: 16px 32px
- Font: 18px, weight 500

### Cards & Containers
- Background: White or Background Gray
- Border: 1px solid Border Gray (`#E5E5E5`)
- Radius: 8px
- Padding: 24px (small), 32px (medium), 48px (large)
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08) (subtle)
- Hover: 0 4px 16px rgba(0, 0, 0, 0.12) (elevated)

### Navigation
- Background: White
- Border bottom: 1px solid Border Gray
- Height: 64px
- Logo: Sketch wordmark with yellow diamond icon
- Links: Dark Gray, 16px, weight 500
- Active link: Charcoal with yellow underline
- CTA: Primary yellow button

### Forms
- Input background: White
- Border: 1px solid Border Gray
- Radius: 6px
- Padding: 12px 16px
- Focus: Border Sketch Yellow, shadow 0 0 0 3px rgba(253, 179, 0, 0.1)
- Error: Border Error Red

### Distinctive Components

**Plugin Card**
- White card with subtle shadow
- Plugin icon (64px) at top
- Title, author, description
- Install button (primary yellow)
- Hover: Elevated shadow

**Feature Showcase**
- Large screenshot or illustration
- Heading + description on side
- Alternating left/right layout
- Yellow accent elements

**Pricing Table**
- Three-column grid
- Featured plan highlighted with yellow border
- Clear feature lists with checkmarks
- Yellow CTA buttons

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px

### Grid & Container
- Max container width: 1200px
- Padding: 24px (mobile), 48px (tablet), 64px (desktop)
- Column gap: 24px
- Row gap: 48px

### Whitespace Philosophy
- **Generous breathing room**: Sections separated by 80-128px vertical spacing
- **Content-focused**: Wide margins let content breathe
- **Asymmetric balance**: Mix of full-width and contained sections

### Border Radius Scale
- Small (4px): Tags, badges
- Medium (6px): Buttons, inputs
- Large (8px): Cards, containers
- Extra Large (12px): Feature images, large cards

## 6. Depth & Elevation

| Level | Shadow | Use |
|-------|--------|-----|
| Flat (0) | none | Page background, flat elements |
| Subtle (1) | 0 2px 4px rgba(0,0,0,0.08) | Cards at rest |
| Raised (2) | 0 4px 12px rgba(0,0,0,0.12) | Hover states, dropdowns |
| Elevated (3) | 0 8px 24px rgba(0,0,0,0.16) | Modals, popovers |
| Floating (4) | 0 16px 48px rgba(0,0,0,0.20) | Tooltips, notifications |

**Shadow Philosophy**: Subtle, realistic shadows that suggest physical depth without being heavy-handed. Shadows are always black with low opacity, never colored.

## 7. Do's and Don'ts

### Do
- Use Sketch Yellow (#FDB300) strategically for primary actions and highlights
- Maintain generous whitespace and breathing room
- Use system fonts for native feel and performance
- Apply subtle shadows for depth and hierarchy
- Focus on designer workflows and collaboration features
- Emphasize plugin ecosystem and extensibility
- Keep interface clean and professional
- Use 8px grid for consistent spacing

### Don't
- Don't overuse the yellow — it should feel special
- Don't use heavy shadows or dramatic effects
- Don't use playful or casual language
- Don't clutter the interface with too many elements
- Don't use non-system fonts unless necessary
- Don't ignore the 8px grid system
- Don't make buttons too small (min 44px height for touch)
- Don't use pure black (#000000) — use Charcoal (#1A1A1A)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked navigation |
| Tablet | 640-1024px | Two columns, simplified layouts |
| Desktop | 1024-1440px | Full layout, three columns |
| Large Desktop | >1440px | Max width container, extra margins |

### Collapsing Strategy
- Hero text: 64px → 48px → 36px
- Navigation: Horizontal → Hamburger menu
- Feature sections: Side-by-side → Stacked
- Pricing cards: Three columns → Two columns → Single column
- Padding: 64px → 48px → 24px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary: "Sketch Yellow (#FDB300)"
- Text: "Charcoal (#1A1A1A)" and "Dark Gray (#333333)"
- Background: "White (#FFFFFF)" and "Background Gray (#F7F7F7)"
- Accent: "Sketch Orange (#F5A623)"

### Example Component Prompts
- "Create a hero section with 64px bold heading in Charcoal, 20px body text in Dark Gray, and a primary yellow button (Sketch Yellow #FDB300, 6px radius, 16px 32px padding)."
- "Design a plugin card: white background, 8px radius, subtle shadow (0 2px 8px rgba(0,0,0,0.08)). Include 64px plugin icon, title, description, and yellow install button."
- "Build a feature section with large screenshot on left, heading + description on right. Use Sketch Yellow accent elements. Alternate layout on next section."
- "Create a pricing table with three columns. Highlight middle plan with yellow border (2px solid #FDB300). Include feature lists with green checkmarks and yellow CTA buttons."

### Iteration Guide
1. Start with Sketch Yellow (#FDB300) for primary CTAs only
2. Use Charcoal (#1A1A1A) for text, not pure black
3. Apply 8px grid system for all spacing
4. Keep shadows subtle (0 2px 8px rgba(0,0,0,0.08))
5. Use system fonts for native feel
6. Maintain generous whitespace (80-128px between sections)
7. Focus on designer-centric content and workflows
