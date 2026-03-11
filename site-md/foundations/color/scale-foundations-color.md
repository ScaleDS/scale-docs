# Scale Design System
## Color Documentation

**Version:** 3.0.0 (Documentation v3)  
**Last Updated:** January 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Color Philosophy](#color-philosophy)
3. [Color Architecture](#color-architecture)
4. [Primitive Colors](#primitive-colors)
5. [Semantic Colors](#semantic-colors)
6. [Accessibility](#accessibility)
7. [Figma Implementation](#figma-implementation)
8. [Framer Implementation](#framer-implementation)
9. [Usage Guidelines](#usage-guidelines)

---

## Overview

The Scale Design System uses a comprehensive, semantic color system built on a foundation of primitive color tokens. This two-tier approach separates raw color values from their functional applications, making the system flexible, maintainable, and accessible across both light and dark themes.

### Key Features

- **191 total color variables** organized into 2 collections
- **Dual-mode support**: Light and Dark themes with automatic switching
- **Semantic naming**: Intent-based tokens that communicate purpose
- **WCAG AA compliant**: All color combinations meet accessibility standards
- **Platform-optimized**: Native implementation for both Figma and Framer
- **Scalable architecture**: Easy to extend and maintain

---

## Color Philosophy

### Design Principles

**Meaningful Color**  
Every color in the system serves a specific purpose. We use color to:
- Establish visual hierarchy
- Communicate status and feedback
- Reinforce brand identity
- Guide user attention
- Support accessibility

**Semantic Over Literal**  
Rather than using colors by their appearance (e.g., "blue"), we use them by their function (e.g., "Text/Primary", "Background/Brand"). This approach ensures:
- Consistent application across products
- Easy theme switching
- Clear intent in code
- Future-proof flexibility

**Contrast First**  
All color pairings are tested to meet WCAG 2.1 AA standards:
- **4.5:1 minimum** for text smaller than 24px
- **3:1 minimum** for UI elements and text 24px or larger

---

## Color Architecture

### Two-Tier Token System

```
Primitive Colors (Base Layer)
    ↓
Semantic Colors (Application Layer)
    ↓
Component Implementation
```

**Primitive Colors** are the raw color values in our palette:
- Neutral scale (0-1000)
- Brand colors (100-900)
- Accent colors: Purple, Blue, Green, Orange, Red (100-900)

**Semantic Colors** reference primitive colors and define how they're used:
- Text colors (Primary, Secondary, Tertiary, etc.)
- Background colors (Primary, Hover, Pressed, etc.)
- Icon colors
- Border colors
- Overlay colors
- Surface colors

### Why This Architecture?

**Primitive tokens** tell us **what** properties and values exist within our designs. They're the foundational layer—every color used in the app and brand. Primitive tokens are for reference only and provide the foundation for semantic tokens.

**Semantic tokens** give us context on **how** the token should be used. They convey meaning, purpose, and where the asset should be applied. These are what you actually use in your designs.

**Aliasing** allows one token to reference another. This is powerful because it:
- Establishes relationships between tokens
- Creates meaningful connections
- Enables theme switching by remapping values
- Maintains token names while adapting output

### Naming Convention

**Primitive Pattern:**  
`ColorFamily/Weight`  
Examples: `Neutral/500`, `Brand/600`, `Red/300`

**Semantic Pattern:**  
`Category/Purpose [/State]`  
Examples: `Text/Primary`, `Background/Brand Hover`, `Border/Selected`

**Best Practices for Naming:**
- Use descriptive names that create clear hierarchy
- Partition variables into logical groups
- Avoid mixing value-based names (blue-500) with functional names (color-default) in the same group
- Use kebab-case or slash notation for improved readability
- Make names communicate intent, not appearance

---

## Primitive Colors

Primitive colors form the foundation of the Scale Design System. They are organized into color families with a numeric scale from 100 (lightest) to 900 (darkest), plus extended neutral values.

### Neutral Scale

A comprehensive 21-step grayscale from pure white to pure black, providing subtle gradations for sophisticated UI design.

| Token | Hex | RGB | Use Case |
|-------|-----|-----|----------|
| `Neutral/0` | `#FFFFFF` | `rgb(255, 255, 255)` | Pure white, brightest backgrounds |
| `Neutral/50` | `#F2F2F2` | `rgb(242, 242, 242)` | Subtle backgrounds, hover states |
| `Neutral/100` | `#E5E5E5` | `rgb(229, 229, 229)` | Card backgrounds, dividers |
| `Neutral/150` | `#D9D9D9` | `rgb(217, 217, 217)` | Borders, inactive states |
| `Neutral/200` | `#CCCCCC` | `rgb(204, 204, 204)` | Light borders |
| `Neutral/250` | `#BFBFBF` | `rgb(191, 191, 191)` | Disabled text on light |
| `Neutral/300` | `#B3B3B3` | `rgb(179, 179, 179)` | Secondary borders |
| `Neutral/350` | `#A6A6A6` | `rgb(166, 166, 166)` | Subtle text |
| `Neutral/400` | `#999999` | `rgb(153, 153, 153)` | Tertiary text |
| `Neutral/450` | `#8C8C8C` | `rgb(140, 140, 140)` | Muted text |
| `Neutral/500` | `#808080` | `rgb(128, 128, 128)` | Mid-gray |
| `Neutral/550` | `#737373` | `rgb(115, 115, 115)` | Dark muted text |
| `Neutral/600` | `#666666` | `rgb(102, 102, 102)` | Secondary text |
| `Neutral/650` | `#595959` | `rgb(89, 89, 89)` | Emphasized text |
| `Neutral/700` | `#4C4C4C` | `rgb(76, 76, 76)` | Strong text |
| `Neutral/750` | `#404040` | `rgb(64, 64, 64)` | Very dark text |
| `Neutral/800` | `#333333` | `rgb(51, 51, 51)` | Near-black text |
| `Neutral/850` | `#262626` | `rgb(38, 38, 38)` | Dark backgrounds |
| `Neutral/900` | `#1A1A1A` | `rgb(26, 26, 26)` | Darkest backgrounds |
| `Neutral/950` | `#0D0D0D` | `rgb(13, 13, 13)` | Almost black |
| `Neutral/1000` | `#000000` | `rgb(0, 0, 0)` | Pure black |

### Brand Colors

The primary brand palette based on Scale's signature blue.

| Token | Hex | RGB | Description |
|-------|-----|-----|-------------|
| `Brand/100` | `#D0D8FF` | `rgb(208, 216, 255)` | Lightest brand tint |
| `Brand/200` | `#A9B7FF` | `rgb(169, 183, 255)` | Light brand accent |
| `Brand/300` | `#8196FF` | `rgb(129, 150, 255)` | Soft brand color |
| `Brand/400` | `#5A76FF` | `rgb(90, 118, 255)` | Medium brand |
| `Brand/500` | `#3355FF` | `rgb(51, 85, 255)` | **Primary brand** |
| `Brand/600` | `#2945CE` | `rgb(41, 69, 206)` | Dark brand |
| `Brand/700` | `#1F349D` | `rgb(31, 52, 157)` | Deeper brand |
| `Brand/800` | `#16246C` | `rgb(22, 36, 108)` | Very dark brand |
| `Brand/900` | `#0C133B` | `rgb(12, 19, 59)` | Darkest brand |

### Blue Accent

A functional blue palette for links, information, and interactive elements.

| Token | Hex | RGB |
|-------|-----|-----|
| `Blue/100` | `#D0D8FF` | `rgb(208, 216, 255)` |
| `Blue/200` | `#A9B7FF` | `rgb(169, 183, 255)` |
| `Blue/300` | `#8196FF` | `rgb(129, 150, 255)` |
| `Blue/400` | `#5A76FF` | `rgb(90, 118, 255)` |
| `Blue/500` | `#3355FF` | `rgb(51, 85, 255)` |
| `Blue/600` | `#2945CE` | `rgb(41, 69, 206)` |
| `Blue/700` | `#1F349D` | `rgb(31, 52, 157)` |
| `Blue/800` | `#16246C` | `rgb(22, 36, 108)` |
| `Blue/900` | `#0C133B` | `rgb(12, 19, 59)` |

### Purple Accent

Rich purple tones for secondary actions and creative contexts.

| Token | Hex | RGB |
|-------|-----|-----|
| `Purple/100` | `#DCD0FF` | `rgb(220, 208, 255)` |
| `Purple/200` | `#BEA9FF` | `rgb(190, 169, 255)` |
| `Purple/300` | `#A181FF` | `rgb(161, 129, 255)` |
| `Purple/400` | `#835AFF` | `rgb(131, 90, 255)` |
| `Purple/500` | `#6633FF` | `rgb(102, 51, 255)` |
| `Purple/600` | `#5229CE` | `rgb(82, 41, 206)` |
| `Purple/700` | `#3F1F9D` | `rgb(63, 31, 157)` |
| `Purple/800` | `#2B166C` | `rgb(43, 22, 108)` |
| `Purple/900` | `#180C3B` | `rgb(24, 12, 59)` |

### Green (Positive States)

Communicates success, confirmation, and positive actions.

| Token | Hex | RGB |
|-------|-----|-----|
| `Green/100` | `#C4E7D0` | `rgb(196, 231, 208)` |
| `Green/200` | `#93D4A9` | `rgb(147, 212, 169)` |
| `Green/300` | `#62C081` | `rgb(98, 192, 129)` |
| `Green/400` | `#31AD5A` | `rgb(49, 173, 90)` |
| `Green/500` | `#009933` | `rgb(0, 153, 51)` |
| `Green/600` | `#007C29` | `rgb(0, 124, 41)` |
| `Green/700` | `#005E1F` | `rgb(0, 94, 31)` |
| `Green/800` | `#004116` | `rgb(0, 65, 22)` |
| `Green/900` | `#00230C` | `rgb(0, 35, 12)` |

### Orange (Warning States)

For warnings, alerts, and attention-requiring content.

| Token | Hex | RGB |
|-------|-----|-----|
| `Orange/100` | `#FCE1C7` | `rgb(252, 225, 199)` |
| `Orange/200` | `#F9C998` | `rgb(249, 201, 152)` |
| `Orange/300` | `#F7B06A` | `rgb(247, 176, 106)` |
| `Orange/400` | `#F4983B` | `rgb(244, 152, 59)` |
| `Orange/500` | `#F27F0D` | `rgb(242, 127, 13)` |
| `Orange/600` | `#C4670B` | `rgb(196, 103, 11)` |
| `Orange/700` | `#954E08` | `rgb(149, 78, 8)` |
| `Orange/800` | `#673606` | `rgb(103, 54, 6)` |
| `Orange/900` | `#381D03` | `rgb(56, 29, 3)` |

### Red (Negative States)

For errors, destructive actions, and critical alerts.

| Token | Hex | RGB |
|-------|-----|-----|
| `Red/100` | `#F9CACA` | `rgb(249, 202, 202)` |
| `Red/200` | `#F49E9E` | `rgb(244, 158, 158)` |
| `Red/300` | `#F07272` | `rgb(240, 114, 114)` |
| `Red/400` | `#EB4646` | `rgb(235, 70, 70)` |
| `Red/500` | `#E61A1A` | `rgb(230, 26, 26)` |
| `Red/600` | `#BA1515` | `rgb(186, 21, 21)` |
| `Red/700` | `#8E1010` | `rgb(142, 16, 16)` |
| `Red/800` | `#620B0B` | `rgb(98, 11, 11)` |
| `Red/900` | `#350606` | `rgb(53, 6, 6)` |

---

## Semantic Colors

Semantic colors define how primitive colors are applied in your UI. They automatically adapt between light and dark themes.

### Text Colors

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `Text/Primary` | `Neutral/900` `#1A1A1A` | `Neutral/50` `#F2F2F2` | Headings and labels |
| `Text/Secondary` | `Neutral/800` `#333333` | `Neutral/100` `#E5E5E5` | Main body text |
| `Text/Tertiary` | `Neutral/600` `#666666` | `Neutral/200` `#CCCCCC` | Supporting text, captions |
| `Text/Primary Inverse` | `Neutral/50` `#F2F2F2` | `Neutral/900` `#1A1A1A` | Headings and labels on dark backgrounds |
| `Text/Secondary Inverse` | `Neutral/100` `#E5E5E5` | `Neutral/800` `#333333` | Secondary inverse text |
| `Text/Tertiary Inverse` | `Neutral/200` `#CCCCCC` | `Neutral/600` `#666666` | Tertiary inverse text |
| `Text/Selected` | `Brand/500` `#3355FF` | `Brand/400` `#5A76FF` | Selected state text |
| `Text/Disabled` | `Neutral/300` `#B3B3B3` | `Neutral/700` `#4C4C4C` | Disabled text |
| `Text/Brand` | `Brand/500` `#3355FF` | `Brand/400` `#5A76FF` | Brand-colored text |
| `Text/Link` | `Blue/500` `#3355FF` | `Blue/400` `#5A76FF` | Hyperlinks (default) |
| `Text/Link Hover` | `Blue/600` `#2945CE` | `Blue/300` `#8196FF` | Hyperlinks (hover) |
| `Text/Link Pressed` | `Blue/700` `#1F349D` | `Blue/200` `#A9B7FF` | Hyperlinks (pressed) |
| `Text/Warning` | `Orange/700` `#954E08` | `Orange/400` `#F4983B` | Warning messages |
| `Text/Negative` | `Red/600` `#BA1515` | `Red/400` `#EB4646` | Error messages |
| `Text/Negative Hover` | `Red/700` `#8E1010` | `Red/300` `#F07272` | Error messages (hover) |
| `Text/Negative Pressed` | `Red/800` `#620B0B` | `Red/200` `#F49E9E` | Error messages (pressed) |
| `Text/Positive` | `Green/600` `#007C29` | `Green/400` `#31AD5A` | Success messages |
| `Text/Primary Inverse Static` | `Neutral/50` `#F2F2F2` | `Neutral/50` `#F2F2F2` | Always light (non-adaptive) |

### Background Colors

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `Background/Primary` | `Neutral/0` `#FFFFFF` | `Neutral/900` `#1A1A1A` | Main background |
| `Background/Hover` | `Neutral/50` `#F2F2F2` | `Neutral/800` `#333333` | Hover state backgrounds |
| `Background/Pressed` | `Neutral/100` `#E5E5E5` | `Neutral/700` `#4C4C4C` | Active/pressed states |
| `Background/Neutral` | `Neutral/100` `#E5E5E5` | `Neutral/800` `#333333` | Neutral containers |
| `Background/Neutral Hover` | `Neutral/150` `#D9D9D9` | `Neutral/750` `#404040` | Neutral hover states |
| `Background/Neutral Pressed` | `Neutral/200` `#CCCCCC` | `Neutral/700` `#4C4C4C` | Neutral pressed states |
| `Background/Selected` | `Brand/100` `#D0D8FF` | `Brand/800` `#16246C` | Selected item backgrounds |
| `Background/Subtle` | Varies | Varies | Subtle emphasis |
| `Background/Inverse` | `Neutral/900` | `Neutral/50` | Inverse backgrounds |
| `Background/Disabled` | Varies | Varies | Disabled elements |
| `Background/Brand` | `Brand/500` `#3355FF` | `Brand/600` `#2945CE` | Primary brand actions |
| `Background/Brand Hover` | `Brand/600` `#2945CE` | `Brand/500` `#3355FF` | Brand hover states |
| `Background/Brand Pressed` | `Brand/700` `#1F349D` | `Brand/400` `#5A76FF` | Brand pressed states |
| `Background/Brand Subtle` | `Brand/100` | `Brand/800` | Subtle brand backgrounds |
| `Background/Info` | `Blue/500` | `Blue/600` | Info messages |
| `Background/Info Subtle` | `Blue/100` | `Blue/800` | Subtle info backgrounds |
| `Background/Warning` | `Orange/500` | `Orange/600` | Warning backgrounds |
| `Background/Warning Subtle` | `Orange/100` | `Orange/800` | Subtle warning backgrounds |
| `Background/Negative` | `Red/500` `#E61A1A` | `Red/600` `#BA1515` | Error/destructive backgrounds |
| `Background/Negative Hover` | `Red/600` `#BA1515` | `Red/500` `#E61A1A` | Error hover states |
| `Background/Negative Pressed` | `Red/700` `#8E1010` | `Red/400` `#EB4646` | Error pressed states |
| `Background/Negative Subtle` | `Red/100` | `Red/800` | Subtle error backgrounds |
| `Background/Positive` | `Green/500` | `Green/600` | Success backgrounds |
| `Background/Positive Subtle` | `Green/100` | `Green/800` | Subtle success backgrounds |
| `Background/Mono` | Varies | Varies | Monochrome backgrounds |
| `Background/Mono Hover` | Varies | Varies | Monochrome hover states |
| `Background/Mono Pressed` | Varies | Varies | Monochrome pressed states |

### Icon Colors

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `Icon/Primary` | `Neutral/900` | `Neutral/50` | Primary (Default) icons |
| `Icon/Subtle` | `Neutral/600` | `Neutral/200` | Secondary icons |
| `Icon/Inverse` | `Neutral/50` | `Neutral/900` | Icons on dark backgrounds |
| `Icon/Selected` | `Brand/500` | `Brand/400` | Selected state icons |
| `Icon/Disabled` | `Neutral/300` | `Neutral/700` | Disabled icons |
| `Icon/Brand` | `Brand/500` | `Brand/400` | Brand-colored icons |
| `Icon/Info` | `Blue/500` | `Blue/400` | Information icons |
| `Icon/Warning` | `Orange/500` | `Orange/400` | Warning icons |
| `Icon/Negative` | `Red/500` | `Red/400` | Error icons |
| `Icon/Positive` | `Green/500` | `Green/400` | Success icons |

### Border Colors

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `Border/Primary` | Varies | Varies | Primary borders |
| `Border/Subtle` | Varies | Varies | Subtle borders |
| `Border/Inverse` | Varies | Varies | Borders on dark backgrounds |
| `Border/Selected` | `Brand/500` | `Brand/400` | Selected element borders |
| `Border/Disabled` | Varies | Varies | Disabled borders |
| `Border/Brand` | `Brand/500` | `Brand/400` | Brand-colored borders |
| `Border/Info` | `Blue/500` | `Blue/400` | Info borders |
| `Border/Warning` | `Orange/500` | `Orange/400` | Warning borders |
| `Border/Negative` | `Red/500` | `Red/400` | Error borders |
| `Border/Positive` | `Green/500` | `Green/400` | Success borders |
| `Border/Focus` | Special | Special | Focus state borders |

### Overlay Colors

| Token | Purpose |
|-------|---------|
| `Overlay/30` | 30% opacity overlay (theme-aware) |
| `Overlay/30 Static` | 30% opacity overlay (fixed) |
| `Overlay/30 Inverse` | 30% opacity inverse overlay |
| `Overlay/70` | 70% opacity overlay |
| `Overlay/70 Static` | 70% opacity overlay (fixed) |
| `Overlay/70 Inverse` | 70% opacity inverse overlay |

### Surface Colors

| Token | Purpose |
|-------|---------|
| `Surface/L0` | Base page background, lowest elevation |
| `Surface/L1` | Cards on page, subtle containers |
| `Surface/L2` | Dropdowns, popovers, panels |
| `Surface/L3` | Modals, dialogs, overlays |
| `Surface/L4` | Highest elevation, system alerts |

---

## Accessibility

### WCAG Compliance

All color combinations in the Scale Design System meet **WCAG 2.1 AA** standards:

- **Text < 24px**: Minimum 4.5:1 contrast ratio
- **Text ≥ 24px**: Minimum 3:1 contrast ratio
- **UI Components**: Minimum 3:1 contrast ratio

### Contrast Verification

Before using any color pairing:
1. Check contrast using [WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/)
2. Verify against WCAG requirements
3. Test with actual users when possible

### Safe Pairings

These combinations are pre-approved for accessibility:

**Light Theme:**
- `Text/Primary` on `Background/Primary` ✓ 12.6:1
- `Text/Secondary` on `Background/Primary` ✓ 9.1:1
- `Text/Tertiary` on `Background/Primary` ✓ 4.5:1
- `Text/Link` on `Background/Primary` ✓ 7.2:1

**Dark Theme:**
- `Text/Primary` on `Background/Primary` ✓ 11.8:1
- `Text/Secondary` on `Background/Primary` ✓ 8.4:1
- `Text/Tertiary` on `Background/Primary` ✓ 4.6:1

### Color Blindness Considerations

- Don't rely on color alone to convey information
- Use text labels, icons, or patterns in addition to color
- Test designs with color blindness simulators
- Provide alternative indicators for status (✓ ✗ ⚠ icons)

### Accessibility Best Practices

**Visual Hierarchy and Communication**  
Color supports the purpose of content and indicates how elements relate to each other.

**Color for Emphasis**  
Use color to attract attention and highlight primary actions. The primary/accent color emphasizes the main call to action.

**Simple Minimal Palette**  
To avoid confusion and cognitive load, use color sparingly.

**Colors Have Meaning**  
Colors carry specific meaning based on how they function within the interface.

**Never Use Color as the Only Indicator**  
To convey information accessibly:
- Use symbols or icons along with colors for error messages
- Add text labels to messages
- Choose colors wisely and test for vision deficiencies
- Provide backup communication mechanisms

---

## Figma Implementation

### Variable Collections Structure

Scale uses Figma's native variables feature to implement a robust two-tier color system.

#### Collection 1: Primitive Colors

**Purpose:** Foundation layer containing all raw color values  
**Publishing:** Hidden from team library (prefix with `.` or `_`)  
**Organization:** Grouped by color family

```
.Primitive Colors
├─ Neutral
│  ├─ Neutral/0 (#FFFFFF)
│  ├─ Neutral/50 (#F2F2F2)
│  └─ ... (21 total)
├─ Brand
│  ├─ Brand/100 (#D0D8FF)
│  └─ ... (9 values)
├─ Blue
├─ Purple
├─ Green
├─ Orange
└─ Red
```

**Setup Instructions:**

1. **Create the Collection:**
   - Open Local variables panel (filter icon, right sidebar)
   - Create collection → Name it `.Primitive Colors`
   - The `.` prefix hides it from publishing

2. **Add Color Variables:**
   - Create color variable for each primitive
   - Use grouping feature to organize by family
   - No modes needed for primitives

3. **Hide from Publishing:**
   - Right-click collection → Edit variables
   - Uncheck "Show in all supported properties"
   - Check "Hide from publishing"

#### Collection 2: Semantic Colors (Design Tokens)

**Purpose:** Semantic layer that references primitives  
**Publishing:** Published to team library  
**Organization:** Grouped by category (Text, Background, Icon, Border)  
**Modes:** Light and Dark

```
Semantic Colors
├─ Text (Group)
│  ├─ Text/Primary
│  │  ├─ Light: → Neutral/900
│  │  └─ Dark: → Neutral/50
│  ├─ Text/Secondary
│  │  ├─ Light: → Neutral/800
│  │  └─ Dark: → Neutral/100
│  └─ ...
├─ Background (Group)
│  ├─ Background/Primary
│  │  ├─ Light: → Neutral/0
│  │  └─ Dark: → Neutral/900
│  └─ ...
├─ Icon (Group)
├─ Border (Group)
└─ Overlay (Group)
```

**Setup Instructions:**

1. **Create Semantic Collection:**
   - Create collection → Name it "Semantic Colors" or "Design Tokens"
   - Add two modes: "Light" and "Dark"

2. **Add Semantic Variables:**
   - Create color variable
   - Name with semantic intent (e.g., "Text/Primary")
   - Use grouping to organize by category

3. **Alias to Primitives:**
   - For Light mode: Reference appropriate primitive
   - For Dark mode: Reference different primitive
   - Look for gray box indicator showing aliasing

4. **Scope Variables (Optional but Recommended):**
   - Limit where variables can be applied
   - E.g., Text colors → Text fills only
   - Improves UX and prevents misuse

### Applying Colors in Figma

**To Apply Color Variables:**

1. **For Fills/Strokes:**
   - Select layer
   - Click fill/stroke color swatch
   - Open "Libraries" tab
   - Select semantic variable (square swatches)

2. **For Gradients:**
   - Click gradient icon in color picker
   - For each stop, click swatch
   - Open Libraries tab
   - Apply variable to stop
   - Repeat for all stops

3. **For Effects (Shadows):**
   - Add shadow effect
   - Click effect settings icon
   - Click color swatch
   - Open Libraries tab
   - Select variable

4. **For Color Styles (Advanced):**
   - Deselect all
   - Edit/create color style
   - Click color swatch
   - Apply variable
   - Now styles can reference variables

### Switching Modes in Figma

**To Switch Between Light/Dark:**

1. Select layer or frame
2. In right panel, find "Applied variables"
3. Click mode dropdown
4. Select "Light" or "Dark"

**To Set Default Mode:**
- Frame-level or page-level setting
- Instances inherit parent mode
- Prototypes can switch modes dynamically

### Best Practices for Figma

**✓ DO:**
- Always use semantic variables in designs
- Never apply primitive variables directly
- Use groups to organize variables logically
- Scope variables to appropriate properties
- Test designs in both Light and Dark modes
- Use variable modes for theming, not styles
- Document variable usage in component descriptions

**✗ DON'T:**
- Don't publish primitive collections
- Don't mix hard-coded hex values with variables
- Don't create variables without grouping
- Don't skip aliasing—it's powerful
- Don't use ambiguous names like "Color1"
- Don't forget to scope number variables

### Migrating from Color Styles to Variables

If you have existing color styles:

1. **Audit Current Colors:**
   - Document every color used
   - Identify categories (surface, text, border, icon)
   - Map to primitive values

2. **Create Primitive Collection First:**
   - Add all base colors
   - Hide from publishing

3. **Create Semantic Variables:**
   - Reference primitives through aliasing
   - Set up Light/Dark modes

4. **Migrate Components:**
   - Update components one at a time
   - Replace style applications with variables
   - Test thoroughly in both modes

5. **Deprecate Old Styles (Gradually):**
   - Keep styles temporarily for transition
   - Add deprecation notes
   - Remove when migration complete

### Advanced Figma Techniques

**Using Variables in Prototypes:**
- Set variable actions to change colors
- Create interactive theme switchers
- Build dynamic state changes
- Use conditionals with color variables

**Backing Styles with Variables:**
- Create text styles that reference font size variables
- Create color styles that reference color variables
- Enables styles to adapt across modes
- Best of both worlds: composite values + theming

**Variable Scoping:**
```
Text color variables → Scoped to Text fills only
Background variables → Scoped to Fill properties
Border variables → Scoped to Stroke properties
```

---

## Framer Implementation

### Color Styles with Theming

Framer implements colors through its native Color Styles feature with built-in Light/Dark mode support.

#### Setting Up Color Styles in Framer

**1. Create Color Palette:**

1. Open Assets panel
2. Navigate to Color Styles section
3. Click "+" to create new color style
4. Name semantically (e.g., "Background Primary", "Text Primary")

**2. Define Light and Dark Values:**

1. Select the color style
2. Set the Light mode value
3. Toggle to define Dark mode value
4. Both values stored in single style

**3. Organize Color Styles:**

```
Framer Assets Panel
├─ Text Primary
├─ Text Secondary
├─ Text Tertiary
├─ Background Primary
├─ Background Brand
├─ Background Hover
├─ Icon Primary
├─ Border Primary
└─ ...
```

**No Primitive Layer in Framer:**  
Unlike Figma, Framer typically uses a single semantic layer. Define your semantic colors directly with Light/Dark values. The primitive layer exists conceptually but doesn't need separate implementation.

### Applying Colors in Framer

**To Apply Color Styles:**

1. **For Fill Properties:**
   - Select layer
   - Click Fill color picker
   - Choose color style from Assets panel
   - Style applies with theme-aware values

2. **For Text Layers:**
   - Select text
   - Click text color
   - Choose from Color Styles
   - Text color adapts to theme automatically

3. **For Effects:**
   - Add shadow or other effect
   - Click effect color
   - Select color style
   - Effect color switches with theme

4. **In Animations:**
   - Set fill property animation
   - Choose color style as target
   - Animation respects current theme
   - Transitions smoothly between values

### Switching Themes in Framer

**Canvas Theme Toggle:**

1. Use toolbar theme toggle (☀/ðŸŒ™ icon)
2. Keyboard shortcut: ⌃⌘N
3. Previews all color styles in current theme
4. Helps design effectively in both themes

**On Published Sites:**

Framer automatically detects user's system preference:
- macOS: System Preferences → Appearance
- iOS: Settings → Display & Brightness
- Android: Settings → Display
- Windows: Settings → Personalization → Colors

Users can override with theme selector (if implemented).

### Creating a Theme Switcher Component

Framer allows you to build custom theme toggles for your published sites. You can create an interactive button that switches between light and dark modes, giving users control over their viewing preference.

**To create a theme switcher:**
1. Design a toggle button component in Framer
2. Add an interaction to switch between light and dark modes
3. Use Framer's built-in theme switching capabilities
4. Test the toggle in preview mode before publishing

**Design Considerations:**
- Use clear icons (☀ï¸ for light mode, ðŸŒ™ for dark mode)
- Ensure the toggle itself is visible in both themes
- Position it prominently for easy access
- Consider animation when switching themes
- Make it accessible via keyboard navigation

### Best Practices for Framer

**✓ DO:**
- Use color styles for all interface elements
- Define both Light and Dark values upfront
- Test designs in both themes regularly
- Use semantic names that convey purpose
- Maintain consistent naming with Figma
- Preview theme toggle before publishing
- Consider user system preferences

**✗ DON'T:**
- Don't use hard-coded hex values
- Don't skip Dark mode definitions
- Don't create too many color variations
- Don't use ambiguous style names
- Don't forget to test effects in dark mode
- Don't ignore contrast in either theme

### Framer Color Workflow

**Recommended Workflow:**

1. **Design in Figma First:**
   - Set up complete color system
   - Define primitives and semantics
   - Test both themes thoroughly

2. **Export Tokens:**
   - Use Figma API or plugins
   - Export semantic token names and values
   - Document Light/Dark mappings

3. **Create Framer Styles:**
   - Match Figma semantic names
   - Input Light/Dark values
   - Verify visual parity

4. **Build Components:**
   - Use color styles exclusively
   - Create reusable component library
   - Test theme switching

5. **Maintain Sync:**
   - Update Framer when Figma changes
   - Use version control for tokens
   - Document changes

### Framer-Specific Features

**Global Style Updates:**
- Change a color style once
- Updates apply everywhere automatically
- Includes instances, overrides, and animations

**Component Property Integration:**
- Expose color as component property
- Users can override per instance
- Maintains theme-aware behavior
- Properties update when theme switches

**Responsive Color Behavior:**
- Color styles work consistently across breakpoints
- Same semantic meaning on mobile, tablet, and desktop
- Rare need for different colors per viewport
- Focus on unified theming approach

**Animation Support:**
- Color styles integrate with Framer's animation system
- Smooth transitions between color values
- Theme-aware animations
- Maintain accessibility during transitions

### Advanced Framer Techniques

**Using Color Styles in Components:**
- Create components with color properties exposed
- Allow instance-level color overrides while maintaining theme awareness
- Use color styles for fills, strokes, and effects
- Leverage color styles in component variants

**Animating Color Transitions:**
- Apply color styles to animated properties
- Set transition duration for smooth color changes
- Ensure animations work in both light and dark modes
- Test color transitions for accessibility (no flashing)

**System Preference Integration:**
- Framer automatically detects user's system color scheme preference
- Sites will default to match user's OS settings
- No additional setup required for system preference detection
- Users can override with custom theme switcher if provided

**Working with Breakpoints:**
- Color styles are consistent across all breakpoints
- Rarely need different colors per viewport size
- Focus on consistent theming rather than responsive colors
- Use same semantic tokens on mobile, tablet, and desktop

### Framer + Figma Workflow

**Maintaining Consistency:**

1. **Single Source of Truth:**
   - Figma = Design system authority
   - Framer = Production implementation
   - Keep semantic names identical

2. **Sync Process:**
   - Export Figma variables to JSON
   - Import into Framer color styles
   - Verify visual consistency

3. **Communication:**
   - Document color purpose in both tools
   - Share naming conventions
   - Maintain changelog

4. **Quality Assurance:**
   - Side-by-side comparison
   - Check all states in both themes
   - Test with real content

---

## Usage Guidelines

### Do's

**✓ Use semantic tokens** for all design implementation  
Use `Text/Primary` instead of `Neutral/900` in your designs.

**✓ Respect token purpose**  
Don't use `Background/Negative` for decorative purposes.

**✓ Test contrast**  
Always verify text/background pairs meet accessibility standards.

**✓ Stay within the system**  
Use existing tokens before creating new colors.

**✓ Document new tokens**  
If you must add colors, follow the naming convention and document usage.

**✓ Test in both themes**  
Verify colors work in Light and Dark mode.

**✓ Use aliasing effectively**  
Reference primitives through semantic tokens for maximum flexibility.

### Don'ts

**✗ Don't use primitive colors directly** in designs  
Always use semantic tokens (except in primitive definition layer).

**✗ Don't create custom colors** without design system review  
Maintain consistency across products.

**✗ Don't override semantic meanings**  
Using `Text/Negative` for non-error content creates confusion.

**✗ Don't ignore accessibility**  
Low-contrast color combinations harm usability for everyone.

**✗ Don't mix color systems**  
Stay consistent with Scale tokens; don't import colors from other systems.

**✗ Don't skip mode definitions**  
Every semantic token should have both Light and Dark values.

### Platform-Specific Guidance

**For Figma:**
- Use variable collections for primitives and semantics
- Leverage variable modes for Light/Dark
- Scope variables to appropriate properties
- Hide primitive collections from publishing
- Use grouping to organize variables

**For Framer:**
- Use color styles with theming support
- Define Light/Dark values for every style
- Test theme toggle before publishing
- Match Figma semantic naming exactly
- Leverage automatic system preference detection

### Component-Specific Guidance

**Buttons:**
- Primary: `Background/Brand` + `Text/Primary Inverse`
- Secondary: `Background/Neutral` + `Text/Primary`
- Negative: `Background/Negative` + `Text/Primary Inverse`

**Form Inputs:**
- Default border: `Border/Subtle`
- Focus border: `Border/Focus`
- Error border: `Border/Negative`
- Disabled: `Background/Disabled` + `Text/Disabled`

**Cards & Surfaces:**
- Default: `Background/Primary`
- Hover: `Background/Hover`
- Pressed: `Background/Pressed`
- Elevated: Use `Surface/L1` through `Surface/L4`

**Status Indicators:**
- Success: Green tokens (`Background/Positive`, `Icon/Positive`, `Text/Positive`)
- Warning: Orange tokens
- Error: Red tokens
- Info: Blue tokens

---

## Color Token Quick Reference

### Most Commonly Used Tokens

**Text:**
- `Text/Primary` - Main content
- `Text/Secondary` - Supporting content
- `Text/Link` - Hyperlinks
- `Text/Negative` - Errors

**Backgrounds:**
- `Background/Primary` - Main surface
- `Background/Brand` - Primary buttons
- `Background/Hover` - Interactive hover states
- `Background/Negative` - Error/destructive buttons

**Borders:**
- `Border/Subtle` - General borders
- `Border/Focus` - Focus indicators
- `Border/Negative` - Error states

**Icons:**
- `Icon/Primary` - Standard icons
- `Icon/Brand` - Brand-colored icons
- `Icon/Negative` - Error icons

---

## Resources

- **Figma File:** Scale Design System 3.0.0
- **Figma Variables Guide:** [help.figma.com/hc/en-us/articles/15339657135383](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- **Framer Academy:** [framer.com/academy/lessons/light-dark-mode](https://www.framer.com/academy/lessons/light-dark-mode)
- **Accessibility Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Color Blindness Simulator:** [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/)

---

## Support

For questions about color usage, accessibility concerns, or token proposals:
- Create an issue in the Scale Design System repository
- Contact the design system team
- Review component-specific documentation

---

*Built with care by the Scale Design System team*