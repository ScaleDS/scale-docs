# Scale Design System

## Color Documentation

---

## Overview

The Scale Design System uses a comprehensive, semantic color system built on a foundation of primitive color tokens. This two-tier approach separates raw color values from their functional applications, making the system flexible, maintainable, and accessible across both light and dark themes.

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

