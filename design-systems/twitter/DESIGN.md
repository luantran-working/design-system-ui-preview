# Design System Inspired by Twitter/X

> Category: Social Media
> Real-time conversation platform. Bold, fast, conversation-focused design.

## 1. Visual Theme & Atmosphere

Twitter/X's design system is built for speed, clarity, and real-time conversation. The interface prioritizes content over chrome, with a clean, minimal aesthetic that keeps users focused on tweets and interactions. The design language is characterized by high contrast, bold typography, and a signature blue (or black for X rebrand) that signals action and engagement.

The system operates on two primary themes: a light mode with pure white backgrounds and a dark mode with deep blacks. The typography is clean and highly readable, using system fonts optimized for performance. Every element is designed to load fast and feel responsive, reflecting the real-time nature of the platform.

**Key Characteristics:**
- Signature Twitter Blue (`#1DA1F2`) or X Black (`#000000`) as primary brand color
- Clean, minimal interface with focus on content
- High contrast for readability and accessibility
- System font stack for performance: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- Rounded corners (16px-24px) for friendly, approachable feel
- Real-time updates and smooth animations
- Mobile-first responsive design
- Icon-driven navigation with minimal text

## 2. Color Palette & Roles

### Primary
- **Twitter Blue** (`#1DA1F2`): Primary brand color, links, buttons, active states
- **X Black** (`#000000`): Alternative primary for X rebrand
- **White** (`#FFFFFF`): Light mode background, dark mode text
- **Black** (`#0F1419`): Dark mode background, light mode text

### Grays (Light Mode)
- **Gray 50** (`#F7F9F9`): Hover backgrounds, subtle surfaces
- **Gray 100** (`#EFF3F4`): Borders, dividers
- **Gray 200** (`#CFD9DE`): Secondary borders
- **Gray 300** (`#AAB8C2`): Placeholder text, disabled states
- **Gray 700** (`#536471`): Secondary text
- **Gray 900** (`#0F1419`): Primary text

### Grays (Dark Mode)
- **Dark 50** (`#2F3336`): Hover backgrounds
- **Dark 100** (`#202327`): Card backgrounds
- **Dark 200** (`#16181C`): Secondary surfaces
- **Dark 900** (`#000000`): Primary background

### Functional
- **Success Green** (`#00BA7C`): Success states, verified badges
- **Error Red** (`#F4212E`): Errors, destructive actions
- **Warning Yellow** (`#FFAD1F`): Warnings, alerts
- **Retweet Green** (`#00BA7C`): Retweet actions
- **Like Red** (`#F91880`): Like/heart actions

## 3. Typography Rules

### Font Family
- **Primary**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Fallback**: System UI fonts for optimal performance

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Display | 31px | 800 | 36px | Page titles, large headlines |
| Heading 1 | 23px | 800 | 28px | Section headers |
| Heading 2 | 20px | 700 | 24px | Card titles, modal headers |
| Body Large | 17px | 400 | 24px | Tweet text, main content |
| Body | 15px | 400 | 20px | Standard UI text |
| Body Small | 13px | 400 | 16px | Metadata, timestamps |
| Caption | 11px | 400 | 12px | Fine print, labels |

### Principles
- **System fonts first**: Use native system fonts for instant loading and optimal rendering
- **Bold for emphasis**: Weight 700-800 for headlines and important actions
- **Regular for content**: Weight 400 for all body text and tweets
- **Tight line-height for headlines**: 1.2-1.3 for display text
- **Comfortable reading**: 1.4-1.5 line-height for body content

## 4. Component Stylings

### Buttons

**Primary (Blue)**
- Background: `#1DA1F2`
- Text: `#FFFFFF`
- Padding: 12px 24px
- Radius: 24px (pill shape)
- Font: 15px weight 700
- Hover: `#1A91DA`
- Use: Tweet, Follow, primary CTAs

**Secondary (Outlined)**
- Background: transparent
- Text: `#1DA1F2` (light) / `#FFFFFF` (dark)
- Padding: 12px 24px
- Radius: 24px
- Border: `1px solid #CFD9DE`
- Font: 15px weight 700
- Hover: `rgba(29, 161, 242, 0.1)` background
- Use: Following, secondary actions

**Ghost**
- Background: transparent
- Text: `#0F1419` (light) / `#FFFFFF` (dark)
- Padding: 8px 16px
- Radius: 24px
- Hover: `#F7F9F9` (light) / `#2F3336` (dark)
- Use: Cancel, dismiss actions

### Cards (Tweets)
- Background: `#FFFFFF` (light) / `#000000` (dark)
- Border: `1px solid #EFF3F4` (light) / `#2F3336` (dark)
- Radius: 0px (tweets) or 16px (cards)
- Padding: 12px 16px
- Hover: `#F7F9F9` (light) / `#080808` (dark)
- Shadow: none (flat design)

### Navigation
- Background: `#FFFFFF` (light) / `#000000` (dark)
- Border-right: `1px solid #EFF3F4`
- Fixed left sidebar on desktop
- Bottom bar on mobile
- Icons: 26px with labels
- Active state: Bold text + blue color

### Input Fields
- Background: `#EFF3F4` (light) / `#202327` (dark)
- Border: `1px solid transparent`
- Radius: 24px
- Padding: 12px 16px
- Focus: `2px solid #1DA1F2` border
- Text: 15px weight 400
- Placeholder: `#536471`

### Badges
**Verified Badge**
- Background: `#1DA1F2`
- Icon: White checkmark
- Size: 20px
- Radius: 50% (circle)

**Tag/Label**
- Background: `#EFF3F4` (light) / `#2F3336` (dark)
- Text: `#536471` (light) / `#E7E9EA` (dark)
- Padding: 4px 8px
- Radius: 4px
- Font: 13px weight 400

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px
- Consistent padding and margins throughout

### Grid & Container
- Three-column layout on desktop: Sidebar (275px) | Feed (600px) | Widgets (350px)
- Two-column on tablet: Sidebar | Feed
- Single column on mobile: Full-width feed
- Max content width: 1280px
- Centered layout with side margins

### Whitespace Philosophy
- **Breathing room**: 16px padding inside cards and containers
- **Clear separation**: 1px borders between tweets
- **Generous spacing**: 20px gaps between major sections
- **Compact density**: Tight spacing for metadata and secondary info

### Breakpoints
- Mobile: <640px
- Tablet: 640px-1024px
- Desktop: 1024px-1280px
- Large: >1280px

### Border Radius Scale
- Pill (24px-32px): Buttons, inputs, tags
- Medium (16px): Cards, modals, images
- Small (8px): Small containers, badges
- Sharp (0px): Tweet borders (for seamless feed)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background |
| Surface (Level 1) | `1px solid #EFF3F4` border | Tweet cards, containers |
| Elevated (Level 2) | `rgba(0,0,0,0.08) 0px 8px 28px` | Modals, dropdowns |
| Floating (Level 3) | `rgba(0,0,0,0.12) 0px 12px 48px` | Tooltips, popovers |

**Elevation Philosophy**: Twitter uses minimal shadows, preferring flat design with borders. Shadows are reserved for floating elements like modals and dropdowns that need clear separation from the page.

## 7. Do's and Don'ts

### Do
- Use Twitter Blue (`#1DA1F2`) for all primary actions
- Use pill-shaped buttons (24px radius) for CTAs
- Keep tweet cards flat with 1px borders
- Use system fonts for performance
- Maintain high contrast for accessibility
- Use icons with clear labels
- Keep navigation simple and icon-driven
- Use real-time updates and smooth transitions

### Don't
- Don't use heavy shadows or gradients
- Don't use custom fonts that slow loading
- Don't make buttons square (use pill shapes)
- Don't clutter the interface with decorative elements
- Don't use low-contrast text colors
- Don't hide important actions behind menus
- Don't use slow animations or transitions
- Don't break the three-column layout on desktop

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, bottom nav, full-width content |
| Tablet | 640-1024px | Two columns, side nav, compact widgets |
| Desktop | 1024-1280px | Three columns, full sidebar, widgets visible |
| Large | >1280px | Centered layout, max-width container |

### Touch Targets
- Minimum: 44px height for all interactive elements
- Buttons: 48px height on mobile
- Icons: 40px touch area
- Tweet cards: Full-width tappable area

### Collapsing Strategy
- Navigation: Full sidebar → Icon-only sidebar → Bottom bar
- Feed: 600px → Full width → Full width with margins
- Widgets: Visible → Hidden → Hidden
- Typography: Scales down 10-15% on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary Blue: `#1DA1F2`
- Background Light: `#FFFFFF`
- Background Dark: `#000000`
- Text Light: `#0F1419`
- Text Dark: `#FFFFFF`
- Border Light: `#EFF3F4`
- Border Dark: `#2F3336`
- Hover Light: `#F7F9F9`
- Hover Dark: `#080808`
- Success: `#00BA7C`
- Error: `#F4212E`
- Like: `#F91880`

### Example Component Prompts
- "Create a tweet card: white background, 1px solid #EFF3F4 border, 12px 16px padding, 0px radius. Avatar 48px circle top-left. Username in 15px weight 700 #0F1419. Tweet text 15px weight 400 #0F1419, line-height 20px. Action buttons below: reply, retweet, like, share icons in #536471, hover to respective colors."
- "Design a primary button: #1DA1F2 background, white text, 15px weight 700, 12px 24px padding, 24px radius (pill). Hover: #1A91DA. Active: slightly darker."
- "Build navigation sidebar: white background, 1px solid #EFF3F4 right border, 275px width. Logo at top. Nav items with 26px icons + labels, 20px vertical spacing. Active item: bold text + blue color. Tweet button at bottom: full-width blue pill."
- "Create input field: #EFF3F4 background, 24px radius, 12px 16px padding, 15px text. Placeholder #536471. Focus: 2px solid #1DA1F2 border. No shadow."
- "Design trending card: white background, 16px radius, 16px padding, 1px solid #EFF3F4 border. Title 'Trends for you' 20px weight 800. Each trend: category 13px #536471, topic 15px weight 700 #0F1419, tweet count 13px #536471. Hover: #F7F9F9 background."

### Iteration Guide
1. Start with Twitter Blue (`#1DA1F2`) as primary color
2. Use pill-shaped buttons (24px radius) for all CTAs
3. Keep tweet cards flat with minimal borders
4. Use system fonts for instant loading
5. Maintain three-column layout on desktop
6. Use icons with clear labels for navigation
7. Keep shadows minimal (only for modals/dropdowns)
8. Ensure 44px minimum touch targets on mobile
9. Use smooth, fast transitions (150-200ms)
10. Prioritize content over decorative elements
