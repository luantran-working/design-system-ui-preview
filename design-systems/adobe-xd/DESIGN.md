# Design System Inspired by Adobe XD

> Category: Design & Creative
> UX/UI design and prototyping tool. Vibrant pink/purple, creative, designer-focused.

## 1. Visual Theme & Atmosphere

Adobe XD's design language is built around the creative designer's workflow — a sophisticated blend of vibrant gradients, bold typography, and a signature pink-to-purple color spectrum that has become synonymous with modern design tools. The interface balances professional precision with creative energy, using a distinctive magenta (#FF2BC2) as its hero color alongside deep purples and electric pinks.

The visual system emphasizes clarity and speed, reflecting XD's core promise: fast, fluid design and prototyping. Large, bold headlines paired with generous whitespace create breathing room for creative thinking. The design system uses smooth gradients extensively — not as decoration, but as a visual metaphor for the seamless flow from design to prototype to production.

What makes Adobe XD distinctive is its commitment to the designer's mindset. Every element feels crafted for visual thinkers: rounded corners (8-16px) soften the interface, smooth transitions (200-300ms) maintain flow, and the pink-purple gradient serves as a constant reminder that this is a tool built by designers, for designers.

**Key Characteristics:**
- Signature magenta (#FF2BC2) and purple (#6B4FFF) gradient system
- Adobe Clean font family (modern, geometric sans-serif)
- Generous whitespace and breathing room
- Smooth, fluid transitions (200-300ms)
- Rounded corners (8-16px) throughout
- Bold, confident typography with clear hierarchy
- Gradient overlays and vibrant accent colors
- Designer-focused, creative aesthetic

## 2. Color Palette & Roles

### Primary Colors
- **XD Magenta** (`#FF2BC2`): Primary brand color, CTAs, key interactive elements
- **XD Purple** (`#6B4FFF`): Secondary brand color, gradients, accents
- **Deep Purple** (`#4B0082`): Dark accent, depth in gradients

### Gradient System
- **Hero Gradient**: Linear gradient from XD Magenta to XD Purple (135deg)
- **Accent Gradient**: Magenta to Deep Purple for depth
- **Subtle Gradient**: Light pink to light purple for backgrounds

### Neutral Colors
- **Pure White** (`#FFFFFF`): Primary background, card surfaces
- **Light Gray** (`#F5F5F5`): Secondary background, subtle sections
- **Medium Gray** (`#E0E0E0`): Borders, dividers
- **Text Gray** (`#2C2C2C`): Primary text color
- **Secondary Text** (`#6E6E6E`): Secondary text, descriptions

### Semantic Colors
- **Success Green** (`#00D084`): Success states, confirmations
- **Warning Orange** (`#FF9500`): Warnings, alerts
- **Error Red** (`#FF3B30`): Errors, destructive actions
- **Info Blue** (`#0095FF`): Information, links

### Surface & Background
- **Pure White** (`#FFFFFF`): Primary page background
- **Light Surface** (`#FAFAFA`): Elevated cards and containers
- **Gradient Surface**: Pink-purple gradient for hero sections
- **Dark Surface** (`#1A1A1A`): Footer, dark mode elements

## 3. Typography Rules

### Font Family
- **Primary**: `'Adobe Clean', 'Helvetica Neue', Arial, sans-serif`
- **Display**: `'Adobe Clean', 'Helvetica Neue', Arial, sans-serif` (Bold/Black weights)
- **Monospace**: `'Source Code Pro', 'Courier New', monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | Adobe Clean | 64px (4rem) | 700 (Bold) | 1.1 | -0.02em | Maximum impact headlines |
| H1 | Adobe Clean | 48px (3rem) | 700 | 1.2 | -0.01em | Section headlines |
| H2 | Adobe Clean | 36px (2.25rem) | 600 | 1.3 | normal | Sub-section titles |
| H3 | Adobe Clean | 28px (1.75rem) | 600 | 1.4 | normal | Card headings |
| H4 | Adobe Clean | 24px (1.5rem) | 600 | 1.4 | normal | Feature titles |
| Body Large | Adobe Clean | 20px (1.25rem) | 400 | 1.6 | normal | Intro text, descriptions |
| Body | Adobe Clean | 16px (1rem) | 400 | 1.6 | normal | Standard body text |
| Body Small | Adobe Clean | 14px (0.875rem) | 400 | 1.5 | normal | Secondary text |
| Button | Adobe Clean | 16px (1rem) | 600 | 1.4 | 0.01em | Button labels |
| Caption | Adobe Clean | 12px (0.75rem) | 400 | 1.4 | 0.02em | Small labels, captions |

### Principles
- **Bold headlines**: Use 600-700 weights for all headings to create strong hierarchy
- **Comfortable reading**: Body text at 400 weight with generous line-height (1.6)
- **Subtle tracking**: Negative letter-spacing on large text, positive on small labels
- **Clear hierarchy**: Significant size jumps between heading levels
- **Designer-friendly**: Readable, modern, geometric sans-serif

## 4. Component Stylings

### Buttons

**Primary (Gradient)**
- Background: Linear gradient (XD Magenta to XD Purple)
- Text: Pure White
- Padding: 14px 32px
- Radius: 8px
- Font: 16px, weight 600
- Transition: transform 200ms, box-shadow 200ms
- Hover: Slight lift (translateY(-2px)), shadow increase
- Focus: 3px solid outline with gradient color

**Secondary (Outline)**
- Background: Transparent
- Border: 2px solid XD Magenta
- Text: XD Magenta
- Padding: 12px 30px
- Radius: 8px
- Hover: Background fills with gradient, text becomes white

**Ghost**
- Background: Transparent
- Text: Text Gray
- Padding: 12px 24px
- Radius: 8px
- Hover: Background Light Gray

**Icon Button**
- Size: 40px × 40px
- Radius: 8px
- Background: Light Gray
- Hover: Background Medium Gray

### Cards & Containers

**Feature Card**
- Background: Pure White
- Border: 1px solid Medium Gray
- Radius: 16px
- Padding: 32px
- Shadow: 0 4px 16px rgba(0, 0, 0, 0.08)
- Hover: Shadow increases, slight lift

**Gradient Card**
- Background: Pink-purple gradient overlay
- Text: White
- Radius: 16px
- Padding: 40px
- No border

**Image Container**
- Radius: 12px
- Overflow: hidden
- Shadow: 0 8px 24px rgba(0, 0, 0, 0.12)

### Navigation

**Top Navigation**
- Background: Pure White
- Border-bottom: 1px solid Medium Gray
- Height: 72px
- Logo: Adobe XD wordmark with gradient
- Links: Text Gray, 16px, weight 500
- CTA: Primary gradient button
- Sticky positioning

**Footer**
- Background: Dark Surface (#1A1A1A)
- Text: White with reduced opacity
- Padding: 64px 0
- Multi-column layout

### Forms

**Input Field**
- Border: 2px solid Medium Gray
- Radius: 8px
- Padding: 12px 16px
- Font: 16px
- Focus: Border becomes XD Magenta, shadow glow

**Textarea**
- Same as input, min-height 120px

**Checkbox/Radio**
- Custom styled with gradient when checked
- Size: 20px × 20px
- Radius: 4px (checkbox), 50% (radio)

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px

### Grid & Container
- Max container width: 1280px
- Padding: 24px (mobile), 48px (tablet), 64px (desktop)
- Grid: 12-column system
- Gap: 24px (mobile), 32px (desktop)

### Whitespace Philosophy
- **Generous breathing room**: Large sections have 96-128px vertical spacing
- **Content grouping**: Related elements use 16-24px spacing
- **Visual hierarchy**: More space above headings than below
- **Designer-focused**: Space allows creative thinking and visual clarity

### Border Radius Scale
- Small (4px): Tags, badges
- Medium (8px): Buttons, inputs
- Large (12px): Images, media
- Extra Large (16px): Cards, containers
- Pill (999px): Pill-shaped buttons

## 6. Depth & Elevation

| Level | Shadow | Use |
|-------|--------|-----|
| Flat (0) | none | Page background, flat sections |
| Raised (1) | 0 2px 8px rgba(0,0,0,0.06) | Cards at rest |
| Elevated (2) | 0 4px 16px rgba(0,0,0,0.08) | Cards on hover, dropdowns |
| Floating (3) | 0 8px 24px rgba(0,0,0,0.12) | Modals, popovers |
| Modal (4) | 0 16px 48px rgba(0,0,0,0.16) | Dialogs, overlays |

**Shadow Philosophy**: Subtle shadows create depth without distraction. Gradients and color provide primary visual interest, shadows provide spatial hierarchy.

## 7. Motion & Animation

### Timing Functions
- **Ease Out** (`cubic-bezier(0.0, 0.0, 0.2, 1)`): Entrances, expansions
- **Ease In** (`cubic-bezier(0.4, 0.0, 1, 1)`): Exits, collapses
- **Ease In Out** (`cubic-bezier(0.4, 0.0, 0.2, 1)`): Transitions, movements

### Duration Scale
- **Fast** (150ms): Micro-interactions, hovers
- **Base** (200ms): Standard transitions
- **Moderate** (300ms): Complex transitions
- **Slow** (400ms): Large movements, page transitions

### Animation Principles
- **Smooth and fluid**: All transitions feel natural
- **Purposeful**: Motion guides attention and provides feedback
- **Consistent**: Same duration for similar interactions
- **Subtle**: Never distracting from content

## 8. Do's and Don'ts

### Do
- Use the signature pink-purple gradient prominently in hero sections
- Apply generous whitespace for breathing room
- Use bold typography (600-700 weights) for headings
- Implement smooth transitions (200-300ms) on interactive elements
- Use rounded corners (8-16px) consistently
- Create clear visual hierarchy with size and weight
- Use gradient buttons for primary CTAs
- Maintain designer-focused, creative aesthetic

### Don't
- Don't use harsh, sharp corners — rounded is the XD way
- Don't use thin font weights for headings — bold is essential
- Don't overcrowd the interface — whitespace is intentional
- Don't use flat, single-color buttons for primary actions — gradients are signature
- Don't use slow transitions (>400ms) — XD is about speed
- Don't ignore the pink-purple gradient system — it's core to the brand
- Don't use small, cramped spacing — generous is better

## 9. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked navigation |
| Tablet | 640-1024px | 2-column layouts, adjusted spacing |
| Desktop | 1024-1440px | Full layout, optimal spacing |
| Large Desktop | >1440px | Max width container, centered |

### Collapsing Strategy
- Hero text: 64px → 48px → 36px
- Section padding: 128px → 80px → 48px
- Grid: 3-column → 2-column → 1-column
- Navigation: Horizontal → Hamburger menu
- Cards: Side-by-side → Stacked

## 10. Agent Prompt Guide

### Quick Color Reference
- Primary: "XD Magenta (#FF2BC2)"
- Secondary: "XD Purple (#6B4FFF)"
- Gradient: "Linear gradient from #FF2BC2 to #6B4FFF at 135deg"
- Text: "Text Gray (#2C2C2C)"
- Background: "Pure White (#FFFFFF)"

### Example Component Prompts
- "Create a hero section with pink-purple gradient background. Headline at 64px Adobe Clean Bold, white text. Include a gradient button (magenta to purple) with 'Get Started' text."
- "Design a feature card with white background, 16px border-radius, 32px padding. Include an icon, 28px heading in Adobe Clean Semibold, and 16px body text."
- "Build a primary button with gradient background (magenta to purple), white text, 16px Adobe Clean Semibold, 14px vertical padding, 32px horizontal padding, 8px border-radius."
- "Create a navigation bar with white background, 72px height, Adobe XD logo on left, navigation links in center (16px, weight 500), and gradient CTA button on right."

### Iteration Guide
1. Start with the pink-purple gradient — it's the visual anchor
2. Use bold typography (600-700) for all headings
3. Apply generous spacing (96-128px between sections)
4. Round all corners (8-16px)
5. Add smooth transitions (200-300ms) to interactive elements
6. Use gradient buttons for primary actions
7. Maintain clear visual hierarchy with size and weight
8. Keep the designer-focused, creative aesthetic throughout
