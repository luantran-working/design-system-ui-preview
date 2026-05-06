# Design System Inspired by Square

> Category: Fintech & Commerce
> Payment processing for small businesses. Clean, approachable, commerce-focused design.

## 1. Visual Theme & Atmosphere

Square's design system embodies the intersection of financial technology and small business empowerment. The visual language is clean, modern, and approachable -- designed to make complex payment processing feel simple and accessible. Unlike traditional financial institutions that lean on formality and gravitas, Square's aesthetic is friendly, confident, and human-centered.

The color palette is anchored by Square's signature black (`#000000`) and white (`#ffffff`), creating a bold, high-contrast foundation. This monochromatic base is punctuated by a carefully curated set of accent colors: a warm coral (`#ff6b35`) for primary actions, a soft mint green (`#3eb991`) for success states, and a vibrant blue (`#006aff`) for informational elements. The overall impression is of a modern, trustworthy platform that doesn't take itself too seriously.

Typography is set in a clean sans-serif system, prioritizing readability and clarity. Square uses medium to bold weights for headlines (500-700), creating clear hierarchy without overwhelming the user. Body text sits at comfortable sizes (16px-18px) with generous line-height (1.5-1.6) for easy scanning. The system avoids decorative fonts entirely, focusing on functional clarity.

**Key Characteristics:**
- High-contrast black and white foundation with bold accent colors
- Clean sans-serif typography with medium-to-bold headline weights
- Generous whitespace and breathing room around elements
- Rounded corners (8px-12px) for a friendly, approachable feel
- Card-based layouts with subtle shadows for depth
- Commerce-focused imagery: products, storefronts, point-of-sale systems
- Mobile-first responsive design reflecting Square's hardware ecosystem

## 2. Color Palette & Roles

### Primary
- **Square Black** (`#000000`): Primary brand color, headlines, navigation, footer backgrounds
- **Pure White** (`#ffffff`): Page backgrounds, card surfaces, button text on dark backgrounds
- **Coral** (`#ff6b35`): Primary CTA color, active states, important highlights
- **Mint Green** (`#3eb991`): Success states, positive indicators, growth metrics

### Secondary
- **Blue** (`#006aff`): Informational elements, links, secondary CTAs
- **Navy** (`#0a2540`): Dark sections, alternative header backgrounds
- **Light Gray** (`#f6f9fc`): Section backgrounds, subtle surfaces
- **Medium Gray** (`#8898aa`): Secondary text, captions, disabled states

### Accent Colors
- **Coral Light** (`#ffebe5`): Coral-tinted backgrounds for cards and badges
- **Mint Light** (`#e6f7f2`): Success badge backgrounds
- **Blue Light** (`#e6f0ff`): Info badge backgrounds
- **Yellow** (`#ffc043`): Warning states, attention indicators

### Neutral Scale
- **Heading Black** (`#000000`): Primary headings, strong emphasis
- **Body Dark** (`#1a1a1a`): Body text, paragraphs
- **Body Medium** (`#525252`): Secondary text, descriptions
- **Body Light** (`#8898aa`): Captions, metadata, helper text
- **Border** (`#e3e8ee`): Standard borders, dividers
- **Border Light** (`#f0f4f8`): Subtle borders, card edges

### Surface & Shadows
- **Shadow Soft** (`rgba(0,0,0,0.05)`): Subtle card elevation
- **Shadow Medium** (`rgba(0,0,0,0.1)`): Standard card shadows
- **Shadow Strong** (`rgba(0,0,0,0.15)`): Elevated elements, modals
- **Overlay** (`rgba(0,0,0,0.4)`): Modal overlays, image darkening

## 3. Typography Rules

### Font Family
- **Primary**: `Square Sans`, with fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Monospace**: `"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace`

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display Hero | 56px (3.50rem) | 700 | 1.1 | -0.02em | Maximum impact headlines |
| Display Large | 48px (3.00rem) | 700 | 1.15 | -0.01em | Section heroes |
| Heading XL | 40px (2.50rem) | 600 | 1.2 | -0.01em | Major section headings |
| Heading Large | 32px (2.00rem) | 600 | 1.25 | normal | Feature headings |
| Heading Medium | 24px (1.50rem) | 600 | 1.3 | normal | Card headings |
| Heading Small | 20px (1.25rem) | 600 | 1.4 | normal | Sub-section headings |
| Body XL | 20px (1.25rem) | 400 | 1.6 | normal | Hero subtext, intro paragraphs |
| Body Large | 18px (1.13rem) | 400 | 1.6 | normal | Feature descriptions |
| Body | 16px (1.00rem) | 400 | 1.5 | normal | Standard body text |
| Body Small | 14px (0.88rem) | 400 | 1.5 | normal | Secondary text, captions |
| Button Large | 18px (1.13rem) | 600 | 1.2 | normal | Primary CTA buttons |
| Button | 16px (1.00rem) | 600 | 1.2 | normal | Standard buttons |
| Button Small | 14px (0.88rem) | 600 | 1.2 | normal | Compact buttons |
| Label | 14px (0.88rem) | 500 | 1.4 | normal | Form labels, tags |
| Caption | 12px (0.75rem) | 400 | 1.4 | normal | Fine print, metadata |

### Principles
- **Clarity first**: Every typographic choice prioritizes readability and comprehension
- **Bold hierarchy**: Use weight (600-700) to create clear visual hierarchy
- **Generous spacing**: Line-height of 1.5-1.6 for comfortable reading
- **Minimal tracking**: Slight negative letter-spacing only on largest headlines
- **Consistent scale**: 4px increments for predictable sizing

## 4. Component Stylings

### Buttons

**Primary (Coral)**
- Background: `#ff6b35`
- Text: `#ffffff`
- Padding: 14px 28px (large), 12px 24px (standard), 10px 20px (small)
- Radius: 8px
- Font: 18px/16px/14px weight 600
- Hover: `#ff5722` (darker coral)
- Shadow: `0 2px 8px rgba(255,107,53,0.3)`
- Use: Primary CTAs, main actions

**Secondary (Blue)**
- Background: `#006aff`
- Text: `#ffffff`
- Padding: 14px 28px (large), 12px 24px (standard)
- Radius: 8px
- Font: 18px/16px weight 600
- Hover: `#0056cc`
- Use: Secondary actions, alternative CTAs

**Outlined**
- Background: transparent
- Text: `#000000`
- Padding: 12px 24px
- Radius: 8px
- Border: `2px solid #000000`
- Font: 16px weight 600
- Hover: background `#f6f9fc`
- Use: Tertiary actions, ghost buttons

**Ghost**
- Background: transparent
- Text: `#525252`
- Padding: 12px 24px
- Radius: 8px
- Border: `1px solid #e3e8ee`
- Font: 16px weight 500
- Hover: border `#000000`, text `#000000`
- Use: Low-priority actions

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #e3e8ee` or none
- Radius: 12px (standard), 16px (featured)
- Shadow: `0 2px 8px rgba(0,0,0,0.08)` (standard), `0 4px 16px rgba(0,0,0,0.12)` (elevated)
- Padding: 24px (standard), 32px (comfortable), 40px (spacious)
- Hover: shadow intensifies to `0 4px 16px rgba(0,0,0,0.12)`

### Badges / Tags
**Success Badge**
- Background: `#e6f7f2`
- Text: `#3eb991`
- Padding: 4px 12px
- Radius: 6px
- Font: 12px weight 500

**Info Badge**
- Background: `#e6f0ff`
- Text: `#006aff`
- Padding: 4px 12px
- Radius: 6px
- Font: 12px weight 500

**Warning Badge**
- Background: `#fff8e6`
- Text: `#ffc043`
- Padding: 4px 12px
- Radius: 6px
- Font: 12px weight 500

**Neutral Badge**
- Background: `#f6f9fc`
- Text: `#525252`
- Padding: 4px 12px
- Radius: 6px
- Font: 12px weight 500

### Inputs & Forms
- Border: `1px solid #e3e8ee`
- Radius: 8px
- Padding: 12px 16px
- Focus: `2px solid #006aff`, shadow `0 0 0 3px rgba(0,106,255,0.1)`
- Label: `#1a1a1a`, 14px weight 500
- Text: `#000000`, 16px weight 400
- Placeholder: `#8898aa`
- Error: `2px solid #ff6b35`

### Navigation
- Clean horizontal nav with white background
- Logo left-aligned (Square wordmark or icon)
- Links: 16px weight 500, `#1a1a1a` text
- Hover: `#ff6b35` underline or color shift
- CTA: Coral button right-aligned
- Mobile: Hamburger menu with slide-out drawer
- Sticky with subtle shadow on scroll

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px
- Consistent use of 8px increments for major spacing

### Grid & Container
- Max content width: 1200px
- Hero: Full-width with centered content, generous vertical padding
- Feature sections: 2-4 column grids with 24px-32px gaps
- Card grids: Responsive with consistent spacing
- Full-bleed sections for visual impact

### Whitespace Philosophy
- **Breathing room**: Generous padding around all elements
- **Section separation**: 80px-128px between major sections
- **Card spacing**: 24px-32px gaps in grids
- **Content padding**: 24px-40px inside cards and containers
- **Mobile compression**: Reduce spacing by 30-40% on mobile

### Border Radius Scale
- Small (6px): Badges, tags, small elements
- Standard (8px): Buttons, inputs, small cards
- Medium (12px): Standard cards, containers
- Large (16px): Featured cards, hero elements
- XL (20px): Large feature cards, image containers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.05)` | Slight lift, hover hints |
| Standard (Level 2) | `0 2px 8px rgba(0,0,0,0.08)` | Cards, containers |
| Elevated (Level 3) | `0 4px 16px rgba(0,0,0,0.12)` | Hover states, dropdowns |
| Floating (Level 4) | `0 8px 24px rgba(0,0,0,0.15)` | Modals, popovers |
| Focus Ring | `0 0 0 3px rgba(0,106,255,0.1)` | Keyboard focus states |

## 7. Do's and Don'ts

### Do
- Use high contrast (black on white) for maximum readability
- Apply generous whitespace between sections and elements
- Use coral (`#ff6b35`) for primary CTAs and important actions
- Keep border-radius friendly (8px-12px) for approachable feel
- Use card-based layouts with subtle shadows
- Prioritize mobile-first responsive design
- Use weight 600-700 for clear headline hierarchy
- Apply mint green for success states and positive metrics

### Don't
- Don't use low-contrast color combinations
- Don't overcrowd layouts -- maintain breathing room
- Don't use coral for negative actions or errors
- Don't use sharp corners (0px radius) on interactive elements
- Don't rely on color alone for information (use icons/text)
- Don't use decorative or script fonts
- Don't use light weights (300 or below) for headlines
- Don't mix too many accent colors in one section

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked cards, reduced spacing |
| Tablet | 640-1024px | 2-column grids, moderate padding |
| Desktop | 1024-1440px | Full layout, 3-4 column grids |
| Large Desktop | >1440px | Centered content with max-width constraint |

### Touch Targets
- Minimum 44px height for all interactive elements
- Buttons use comfortable padding (12px-14px vertical)
- Navigation links with adequate spacing (16px-24px gaps)
- Form inputs with generous tap areas

### Collapsing Strategy
- Hero: 56px display -> 40px -> 32px on mobile
- Navigation: horizontal links -> hamburger menu
- Feature cards: 4-column -> 2-column -> single column
- Section spacing: 128px -> 80px -> 48px on mobile
- Card padding: 40px -> 32px -> 24px on mobile
- Button padding: 14px 28px -> 12px 24px on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Coral (`#ff6b35`)
- Secondary CTA: Blue (`#006aff`)
- Background: White (`#ffffff`)
- Heading: Black (`#000000`)
- Body text: Dark Gray (`#1a1a1a`)
- Secondary text: Medium Gray (`#525252`)
- Border: Light Gray (`#e3e8ee`)
- Success: Mint Green (`#3eb991`)
- Section background: Light Gray (`#f6f9fc`)

### Example Component Prompts
- "Create a hero section with white background. Headline at 56px weight 700, color #000000. Subtitle at 20px weight 400, color #525252. Coral CTA button (#ff6b35, 8px radius, 14px 28px padding, white text) with shadow 0 2px 8px rgba(255,107,53,0.3)."
- "Design a card: white background, 1px solid #e3e8ee border, 12px radius. Shadow: 0 2px 8px rgba(0,0,0,0.08). Title at 24px weight 600, color #000000. Body at 16px weight 400, color #525252. 24px padding."
- "Build a success badge: #e6f7f2 background, #3eb991 text, 6px radius, 4px 12px padding, 12px weight 500."
- "Create navigation: white background, sticky. Logo left, links at 16px weight 500, #1a1a1a text. Coral CTA button right-aligned. Add subtle shadow on scroll."
- "Design a pricing card: white background, 12px radius, 32px padding. Shadow: 0 4px 16px rgba(0,0,0,0.12). Price at 40px weight 700, #000000. Features list with mint green checkmarks."

### Iteration Guide
1. Always use high contrast -- black text on white backgrounds
2. Apply 8px-12px border-radius for friendly, approachable feel
3. Use coral (#ff6b35) for primary CTAs, blue (#006aff) for secondary
4. Maintain generous whitespace -- 24px minimum padding in cards
5. Use weight 600-700 for headlines, 400 for body text
6. Apply subtle shadows for depth: 0 2px 8px rgba(0,0,0,0.08)
7. Keep mobile-first: stack columns, reduce spacing, maintain touch targets
8. Use mint green (#3eb991) for success states and positive indicators
