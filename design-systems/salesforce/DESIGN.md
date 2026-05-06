# Design System Inspired by Salesforce

> Category: Enterprise & CRM
> Customer relationship management platform. Lightning Design System with signature blue, enterprise-grade components.

## 1. Visual Theme & Atmosphere

Salesforce's Lightning Design System represents the pinnacle of enterprise software design -- a comprehensive system that balances corporate professionalism with modern usability. The interface opens on a clean white canvas (`#ffffff`) with the iconic Salesforce Blue (`#0176d3`) serving as the primary brand anchor and interactive color. This isn't just any blue; it's a carefully calibrated medium-bright blue that conveys trust, reliability, and enterprise-grade stability.

The system uses Salesforce Sans as its primary typeface -- a custom font family designed specifically for optimal readability in data-dense enterprise applications. At display sizes (32px-40px), the font runs at weight 300 (light) for headlines, creating an approachable yet authoritative presence. Body text uses weight 400 (regular) at 14px-16px, optimized for long-form reading in CRM contexts. The system employs a strict 8px baseline grid, ensuring perfect vertical rhythm across all components.

What distinguishes Salesforce is its comprehensive component library and elevation system. Rather than minimal shadows, Lightning uses a sophisticated multi-layer shadow system with subtle blue tints that reinforce the brand. Cards, modals, and popovers use carefully calibrated shadows (`rgba(0,0,0,0.16)` combined with `rgba(0,0,0,0.1)`) that create clear visual hierarchy without overwhelming the interface.

**Key Characteristics:**
- Salesforce Sans as the primary font family -- custom-designed for enterprise readability
- Weight 300 for headlines, 400 for body, 700 for emphasis
- Salesforce Blue (`#0176d3`) as the primary interactive color
- 8px baseline grid for consistent spacing and vertical rhythm
- Comprehensive component library with strict design tokens
- Multi-layer shadow system with subtle depth
- Enterprise-focused color palette with semantic colors for status
- Border-radius of 4px (standard) and 8px (cards) -- professional and modern
- Strict accessibility standards (WCAG AA minimum)

## 2. Color Palette & Roles

### Primary Brand
- **Salesforce Blue** (`#0176d3`): Primary brand color, CTA backgrounds, links, active states. The signature blue that defines the Salesforce brand.
- **Blue Hover** (`#014486`): Darker blue for hover states on primary elements.
- **Blue Light** (`#d8edff`): Light blue for backgrounds, selected states, and highlights.
- **Blue Pale** (`#f3f9ff`): Very light blue for subtle backgrounds and hover states.

### Neutral Scale
- **White** (`#ffffff`): Page background, card surfaces, input backgrounds.
- **Gray 1** (`#fafaf9`): Subtle background for sections and panels.
- **Gray 2** (`#f3f2f2`): Divider backgrounds, disabled states.
- **Gray 3** (`#ecebea`): Borders, dividers, inactive elements.
- **Gray 4** (`#dddbda`): Strong borders, input borders.
- **Gray 5** (`#c9c7c5`): Disabled text, placeholder text.
- **Gray 6** (`#b0adab`): Secondary text, captions.
- **Gray 7** (`#706e6b`): Body text, labels.
- **Gray 8** (`#514f4d`): Headings, strong emphasis.
- **Gray 9** (`#3e3e3c`): Primary headings, navigation.
- **Gray 10** (`#181818`): Maximum contrast text.

### Semantic Colors
- **Success Green** (`#2e844a`): Success states, positive indicators, completed tasks.
- **Success Light** (`#91db8b`): Success backgrounds and highlights.
- **Success Pale** (`#ecf9e6`): Subtle success backgrounds.
- **Warning Orange** (`#fe9339`): Warning states, caution indicators.
- **Warning Light** (`#ffd78e`): Warning backgrounds.
- **Warning Pale** (`#fff5e1`): Subtle warning backgrounds.
- **Error Red** (`#ea001e`): Error states, destructive actions, critical alerts.
- **Error Light** (`#feb8c4`): Error backgrounds.
- **Error Pale** (`#fef1f3`): Subtle error backgrounds.
- **Info Blue** (`#0176d3`): Informational messages, tips, guidance.

### Interactive States
- **Link Blue** (`#0176d3`): Default link color.
- **Link Hover** (`#014486`): Link hover state.
- **Link Visited** (`#4f2d7f`): Visited link color (purple tint).
- **Focus Ring** (`#0176d3`): Focus indicator for accessibility.
- **Selected** (`#d8edff`): Selected row/item background.
- **Hover** (`#f3f2f2`): Hover state for rows and items.

### Surface & Borders
- **Border Default** (`#dddbda`): Standard border color for cards and containers.
- **Border Strong** (`#c9c7c5`): Emphasized borders for active elements.
- **Border Light** (`#ecebea`): Subtle borders for dividers.
- **Divider** (`#ecebea`): Horizontal rules and section dividers.

### Shadow Colors
- **Shadow Primary** (`rgba(0,0,0,0.16)`): Primary shadow layer for elevation.
- **Shadow Secondary** (`rgba(0,0,0,0.1)`): Secondary shadow for depth.
- **Shadow Ambient** (`rgba(0,0,0,0.05)`): Subtle ambient shadow.

## 3. Typography Rules

### Font Family
- **Primary**: `Salesforce Sans`, with fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Monospace**: `Consolas`, with fallback: `"Courier New", monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Large | Salesforce Sans | 40px (2.50rem) | 300 | 1.20 | -0.02em | Hero headlines, landing pages |
| Display | Salesforce Sans | 32px (2.00rem) | 300 | 1.25 | -0.01em | Page titles, section heroes |
| Heading 1 | Salesforce Sans | 28px (1.75rem) | 300 | 1.25 | normal | Main page headings |
| Heading 2 | Salesforce Sans | 24px (1.50rem) | 400 | 1.25 | normal | Section headings |
| Heading 3 | Salesforce Sans | 20px (1.25rem) | 400 | 1.25 | normal | Subsection headings |
| Heading 4 | Salesforce Sans | 18px (1.13rem) | 700 | 1.25 | normal | Card headings, emphasis |
| Body Large | Salesforce Sans | 16px (1.00rem) | 400 | 1.50 | normal | Feature descriptions, intro text |
| Body | Salesforce Sans | 14px (0.88rem) | 400 | 1.50 | normal | Standard body text, form labels |
| Body Small | Salesforce Sans | 13px (0.81rem) | 400 | 1.50 | normal | Secondary text, captions |
| Caption | Salesforce Sans | 12px (0.75rem) | 400 | 1.50 | normal | Small labels, metadata, timestamps |
| Button Large | Salesforce Sans | 16px (1.00rem) | 400 | 1.00 | normal | Large CTA buttons |
| Button | Salesforce Sans | 14px (0.88rem) | 400 | 1.00 | normal | Standard buttons |
| Button Small | Salesforce Sans | 12px (0.75rem) | 400 | 1.00 | normal | Compact buttons |
| Link | Salesforce Sans | 14px (0.88rem) | 400 | 1.50 | normal | Text links |
| Code | Consolas | 13px (0.81rem) | 400 | 1.50 | normal | Code snippets, technical text |

### Principles
- **Enterprise readability**: Salesforce Sans is optimized for data-dense interfaces with excellent readability at small sizes.
- **Weight hierarchy**: Light (300) for large headlines, Regular (400) for body, Bold (700) for emphasis.
- **Consistent line-height**: 1.50 for body text ensures comfortable reading in long-form content.
- **8px baseline grid**: All typography aligns to an 8px vertical rhythm.
- **Accessibility first**: Minimum 14px for body text, strong color contrast ratios.

## 4. Component Stylings

### Buttons

**Primary (Brand)**
- Background: `#0176d3`
- Text: `#ffffff`
- Padding: 12px 24px (large), 8px 16px (standard), 6px 12px (small)
- Radius: 4px
- Font: 14px Salesforce Sans weight 400
- Hover: `#014486` background
- Shadow: `0 2px 4px rgba(0,0,0,0.1)`
- Use: Primary CTA ("Get Started", "Save", "Submit")

**Secondary (Neutral)**
- Background: `#ffffff`
- Text: `#0176d3`
- Padding: 12px 24px (large), 8px 16px (standard), 6px 12px (small)
- Radius: 4px
- Border: `1px solid #dddbda`
- Font: 14px Salesforce Sans weight 400
- Hover: `#f3f2f2` background
- Use: Secondary actions ("Cancel", "Learn More")

**Destructive**
- Background: `#ea001e`
- Text: `#ffffff`
- Padding: 8px 16px
- Radius: 4px
- Font: 14px Salesforce Sans weight 400
- Hover: `#ba0517` background
- Use: Delete, remove, destructive actions

**Success**
- Background: `#2e844a`
- Text: `#ffffff`
- Padding: 8px 16px
- Radius: 4px
- Font: 14px Salesforce Sans weight 400
- Hover: `#1f6b38` background
- Use: Confirm, approve, success actions

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #dddbda`
- Radius: 8px (standard cards), 4px (compact elements)
- Shadow (standard): `0 2px 4px rgba(0,0,0,0.1)`
- Shadow (elevated): `0 4px 8px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.1)`
- Padding: 16px (standard), 24px (comfortable)
- Hover: shadow intensifies to elevated state

### Badges / Tags / Pills
**Status Badge**
- Background: `#ecf9e6` (success), `#fff5e1` (warning), `#fef1f3` (error)
- Text: `#2e844a` (success), `#fe9339` (warning), `#ea001e` (error)
- Padding: 4px 8px
- Radius: 4px
- Border: `1px solid` matching color (lighter)
- Font: 12px weight 400

**Pill Badge**
- Background: `#f3f2f2`
- Text: `#3e3e3c`
- Padding: 4px 12px
- Radius: 12px (full pill)
- Font: 12px weight 400

### Inputs & Forms
- Border: `1px solid #dddbda`
- Radius: 4px
- Padding: 8px 12px
- Focus: `2px solid #0176d3` border
- Label: `#3e3e3c`, 12px Salesforce Sans, weight 700
- Text: `#181818`, 14px
- Placeholder: `#c9c7c5`
- Error: `1px solid #ea001e` border with error message below
- Help text: `#706e6b`, 12px

### Navigation
- Background: `#ffffff`
- Border-bottom: `1px solid #ecebea`
- Height: 64px
- Logo: left-aligned
- Links: Salesforce Sans 14px weight 400, `#3e3e3c` text
- Active: `#0176d3` text with bottom border
- CTA: Primary blue button right-aligned
- Mobile: Hamburger menu with slide-out drawer

### Tables
- Header: `#fafaf9` background, `#3e3e3c` text, 12px weight 700
- Row: `#ffffff` background, `1px solid #ecebea` border
- Row hover: `#f3f2f2` background
- Row selected: `#d8edff` background
- Cell padding: 12px 16px
- Font: 14px Salesforce Sans

### Modals & Popovers
- Background: `#ffffff`
- Radius: 8px
- Shadow: `0 8px 16px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.1)`
- Header: `#fafaf9` background with bottom border
- Backdrop: `rgba(0,0,0,0.5)`
- Max-width: 640px (standard), 960px (large)

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
- Component padding: 16px (standard), 24px (comfortable), 32px (spacious)
- Section spacing: 48px (standard), 64px (large), 96px (hero)

### Grid & Container
- Max content width: 1280px
- Hero: centered single-column with 96px vertical padding
- Feature sections: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gutter: 24px between columns
- Side margins: 24px (mobile), 48px (tablet), 64px (desktop)

### Whitespace Philosophy
- **Enterprise clarity**: Generous whitespace between sections for clear visual hierarchy
- **Data density**: Compact spacing within tables and data displays for efficiency
- **Breathing room**: 48px minimum between major sections
- **Consistent rhythm**: All spacing follows 8px baseline grid

### Border Radius Scale
- Small (4px): Buttons, inputs, badges, small cards
- Standard (8px): Cards, containers, modals
- Large (12px): Hero cards, featured elements
- Pill (999px): Pill badges, toggle switches

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text |
| Subtle (Level 1) | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift, hover hints |
| Standard (Level 2) | `0 2px 4px rgba(0,0,0,0.1)` | Cards, buttons, standard elements |
| Elevated (Level 3) | `0 4px 8px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.1)` | Dropdowns, popovers, hover states |
| Modal (Level 4) | `0 8px 16px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.1)` | Modals, dialogs, overlays |
| Focus Ring | `0 0 0 2px #0176d3` | Keyboard focus indicator |

## 7. Do's and Don'ts

### Do
- Use Salesforce Blue (`#0176d3`) for all primary CTAs and interactive elements
- Follow the 8px baseline grid for all spacing
- Use weight 300 for large headlines, 400 for body, 700 for emphasis
- Apply multi-layer shadows for elevated elements
- Use semantic colors (green/orange/red) for status indicators
- Maintain WCAG AA accessibility standards minimum
- Use 4px radius for buttons and inputs, 8px for cards
- Keep data tables compact with clear hover states

### Don't
- Don't use colors outside the defined palette
- Don't use border-radius larger than 12px except for pills
- Don't use font sizes smaller than 12px
- Don't ignore the 8px spacing grid
- Don't use Salesforce Blue for decorative elements (semantic only)
- Don't create custom shadows outside the elevation system
- Don't use weight 700 for large headlines
- Don't compromise accessibility for aesthetics

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, stacked navigation, full-width cards |
| Tablet | 768-1024px | 2-column grids, moderate padding |
| Desktop | 1024-1280px | 3-column grids, full layout |
| Large Desktop | >1280px | Centered content, maximum 1280px width |

### Touch Targets
- Minimum 44px height for all interactive elements
- Buttons: 44px height minimum on mobile
- Links: Adequate padding for touch (12px vertical minimum)
- Form inputs: 44px height on mobile

### Collapsing Strategy
- Navigation: Horizontal links → hamburger menu
- Feature grids: 3-column → 2-column → 1-column
- Tables: Horizontal scroll on mobile with sticky first column
- Hero: 40px display → 32px on tablet → 28px on mobile
- Section spacing: 96px → 64px → 48px across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Salesforce Blue (`#0176d3`)
- CTA Hover: Blue Dark (`#014486`)
- Background: White (`#ffffff`)
- Heading: Gray 9 (`#3e3e3c`)
- Body text: Gray 7 (`#706e6b`)
- Border: Gray 4 (`#dddbda`)
- Success: Green (`#2e844a`)
- Warning: Orange (`#fe9339`)
- Error: Red (`#ea001e`)

### Example Component Prompts
- "Create a hero section with white background. Headline at 40px Salesforce Sans weight 300, line-height 1.20, color #3e3e3c. Subtitle at 16px weight 400, line-height 1.50, color #706e6b. Primary button (#0176d3 bg, white text, 4px radius, 12px 24px padding) and secondary button (white bg, #0176d3 text, 1px solid #dddbda border)."
- "Design a card: white background, 1px solid #dddbda border, 8px radius. Shadow: 0 2px 4px rgba(0,0,0,0.1). Title at 20px Salesforce Sans weight 400, color #3e3e3c. Body at 14px weight 400, color #706e6b. 24px padding."
- "Build a success badge: #ecf9e6 background, #2e844a text, 4px radius, 4px 8px padding, 12px Salesforce Sans weight 400, border 1px solid #91db8b."
- "Create navigation: white background, 1px solid #ecebea bottom border, 64px height. Salesforce Sans 14px weight 400 for links, #3e3e3c text. Active link has #0176d3 text with 2px bottom border. Primary CTA button right-aligned."
