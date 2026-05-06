# Design System Inspired by InVision

> Category: Design & Collaboration
> Digital product design platform. Signature pink, collaborative, design-focused.

## 1. Visual Theme & Atmosphere

InVision's design system embodies the spirit of digital product design and collaboration. The interface is characterized by its signature vibrant pink (#FF3366) that serves as the primary brand color, complemented by a sophisticated palette of purples, blues, and neutrals. The aesthetic is modern, clean, and design-forward, reflecting the tool's purpose as a platform where designers collaborate, prototype, and bring ideas to life.

The visual language emphasizes clarity and creativity simultaneously. Large, bold typography creates strong hierarchies, while generous whitespace allows designs and prototypes to be the hero content. The system balances professional polish with creative energy — it's a tool for designers, designed by designers.

InVision's interface features smooth, rounded corners (8-16px), subtle shadows for depth, and a focus on visual storytelling through imagery and interactive prototypes. The design system prioritizes collaboration features, with clear visual indicators for comments, feedback, and team interactions.

**Key Characteristics:**
- Signature InVision Pink (#FF3366) as primary brand color
- Supporting palette of purples, blues, and warm neutrals
- Clean, modern typography with strong hierarchy
- Rounded corners (8-16px) for friendly, approachable feel
- Emphasis on visual design and prototyping showcase
- Collaboration-focused UI elements
- Generous whitespace and breathing room
- Design-forward aesthetic that appeals to creative professionals

## 2. Color Palette & Roles

### Primary
- **InVision Pink** (`#FF3366`): Primary brand color, CTAs, links, active states
- **Deep Purple** (`#6B4FBB`): Secondary accent, premium features
- **Bright Blue** (`#0099FF`): Information, interactive elements

### Neutrals
- **Charcoal** (`#2C2C2C`): Primary text, headings
- **Slate Gray** (`#6C7680`): Secondary text, descriptions
- **Light Gray** (`#F7F8F9`): Backgrounds, subtle surfaces
- **Border Gray** (`#E5E7EB`): Dividers, borders
- **Pure White** (`#FFFFFF`): Primary backgrounds, cards

### Semantic
- **Success Green** (`#00C875`): Success states, confirmations
- **Warning Orange** (`#FFAB00`): Warnings, alerts
- **Error Red** (`#E74C3C`): Errors, destructive actions

### Gradient System
- **Pink Gradient**: Linear gradient from `#FF3366` to `#FF6B9D` — used for hero sections and premium features
- **Purple Gradient**: Linear gradient from `#6B4FBB` to `#9B7FD5` — used for secondary features
- **Blue Gradient**: Linear gradient from `#0099FF` to `#33B5FF` — used for informational sections

## 3. Typography Rules

### Font Family
- **Primary**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Display**: `'Poppins', 'Inter', sans-serif` — for headlines and hero text
- **Monospace**: `'Fira Code', 'Monaco', monospace` — for code snippets

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Display | Poppins | 64px (4rem) | 700 | 1.1 | -0.02em | Maximum impact headlines |
| H1 | Poppins | 48px (3rem) | 700 | 1.2 | -0.01em | Page titles |
| H2 | Poppins | 36px (2.25rem) | 600 | 1.3 | -0.01em | Section headings |
| H3 | Inter | 28px (1.75rem) | 600 | 1.4 | normal | Subsection titles |
| H4 | Inter | 24px (1.5rem) | 600 | 1.4 | normal | Card headings |
| Body Large | Inter | 20px (1.25rem) | 400 | 1.6 | normal | Intro text, emphasis |
| Body | Inter | 16px (1rem) | 400 | 1.6 | normal | Standard body text |
| Body Small | Inter | 14px (0.875rem) | 400 | 1.5 | normal | Secondary text |
| Caption | Inter | 12px (0.75rem) | 500 | 1.4 | 0.02em | Labels, captions |
| Button | Inter | 16px (1rem) | 600 | 1.5 | normal | Button text |

### Principles
- **Clarity first**: Typography prioritizes readability and clear hierarchy
- **Bold headlines**: Display text uses Poppins for personality and impact
- **Generous line height**: Body text at 1.6 creates comfortable reading
- **Weight for hierarchy**: Use weight (400, 500, 600, 700) to create visual structure
- **Negative tracking on large text**: Display sizes use slight negative letter-spacing

## 4. Component Stylings

### Buttons

**Primary (Pink)**
- Background: InVision Pink (`#FF3366`)
- Text: White
- Padding: 12px 32px
- Radius: 8px
- Font: Inter 16px weight 600
- Hover: Darken to `#E62958`
- Shadow: 0 4px 12px rgba(255, 51, 102, 0.3)

**Secondary (Outline)**
- Background: Transparent
- Border: 2px solid `#E5E7EB`
- Text: Charcoal
- Padding: 12px 32px
- Radius: 8px
- Hover: Border color to Pink

**Ghost**
- Background: Transparent
- Text: InVision Pink
- Padding: 12px 24px
- Hover: Background `rgba(255, 51, 102, 0.1)`

**Large Button**
- Padding: 16px 40px
- Font size: 18px

### Cards & Containers
- Background: White
- Border: 1px solid `#E5E7EB`
- Radius: 12px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
- Hover: Shadow 0 8px 24px rgba(0, 0, 0, 0.12)
- Padding: 32px

### Navigation
- Background: White
- Border bottom: 1px solid `#E5E7EB`
- Height: 72px
- Logo: InVision wordmark with pink accent
- Links: Charcoal, hover to Pink
- Sticky positioning

### Forms
- Input background: White
- Border: 1px solid `#E5E7EB`
- Radius: 8px
- Padding: 12px 16px
- Focus: Border color Pink, shadow 0 0 0 3px rgba(255, 51, 102, 0.1)
- Font: Inter 16px

### Distinctive Components

**Freehand Section**
- Showcase InVision's Freehand collaborative whiteboard
- Visual emphasis on real-time collaboration
- Animated cursor indicators

**Prototype Viewer**
- Interactive prototype showcase
- Device frame mockups
- Hotspot indicators

**Comment Bubbles**
- Pink circular avatars
- Comment threads with visual connections
- Collaboration indicators

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px

### Grid & Container
- Max container width: 1280px
- Padding: 24px (mobile), 48px (tablet), 80px (desktop)
- Grid: 12-column system
- Gap: 24px

### Whitespace Philosophy
- **Generous breathing room**: Sections separated by 80-128px
- **Content-focused**: Let designs and prototypes be the hero
- **Balanced density**: Not too sparse, not too cramped

### Border Radius Scale
- Small (4px): Tags, badges
- Medium (8px): Buttons, inputs
- Large (12px): Cards, containers
- Extra Large (16px): Feature sections, modals

## 6. Depth & Elevation

| Level | Shadow | Use |
|-------|--------|-----|
| Flat (0) | none | Page background |
| Raised (1) | 0 2px 8px rgba(0,0,0,0.08) | Cards, containers |
| Elevated (2) | 0 8px 24px rgba(0,0,0,0.12) | Hover states, dropdowns |
| Floating (3) | 0 16px 48px rgba(0,0,0,0.16) | Modals, popovers |

## 7. Do's and Don'ts

### Do
- Use InVision Pink (#FF3366) as the primary brand color
- Emphasize collaboration and design workflow
- Showcase prototypes and designs as hero content
- Use rounded corners (8-16px) consistently
- Create clear visual hierarchy with typography
- Use generous whitespace
- Include collaboration indicators (comments, avatars)
- Make CTAs prominent with pink buttons

### Don't
- Don't overuse pink — use it strategically for emphasis
- Don't use sharp corners — rounded is the aesthetic
- Don't crowd the interface — whitespace is essential
- Don't use heavy shadows — keep elevation subtle
- Don't neglect mobile responsiveness
- Don't hide collaboration features — they're core to the brand

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked navigation |
| Tablet | 640-1024px | 2-column layouts, adjusted spacing |
| Desktop | 1024-1440px | Full layout, optimal viewing |
| Large Desktop | >1440px | Max width container, centered |

### Collapsing Strategy
- Hero text: 64px → 48px → 36px
- Navigation: Horizontal → Hamburger menu
- Feature grids: 3 columns → 2 columns → 1 column
- Padding: 80px → 48px → 24px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary: "InVision Pink (#FF3366)"
- Secondary: "Deep Purple (#6B4FBB)"
- Accent: "Bright Blue (#0099FF)"
- Text: "Charcoal (#2C2C2C)"
- Background: "Light Gray (#F7F8F9)"

### Example Component Prompts
- "Create a hero section with pink gradient background (from #FF3366 to #FF6B9D). Headline at 64px Poppins weight 700, white text. Pink button with 8px radius."
- "Design a feature card with white background, 12px radius, subtle shadow. Include pink icon, 24px Inter heading, 16px body text."
- "Build a collaboration section showcasing comment bubbles with pink avatars and connecting lines."
- "Create a pricing card with 1px border, 12px radius, hover effect with elevated shadow."

### Iteration Guide
1. Start with InVision Pink for primary actions
2. Use Poppins for headlines, Inter for body
3. Apply 8-12px border radius consistently
4. Include collaboration visual elements
5. Showcase design/prototype content as hero
6. Maintain generous whitespace (80-128px between sections)
