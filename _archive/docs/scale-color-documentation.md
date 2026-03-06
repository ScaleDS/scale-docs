# Scale Color Documentation

A comprehensive guide to the Scale Design System's color system, covering both primitive and semantic color tokens.

---

## Overview

Scale assigns Primitive Colors like #3355ff or Brand/500 to Semantic Colors like Text/Primary and Background/Brand that are used to scale color across your projects.

---

## What are Primitive Colors?

Primitive Colors are the raw hex values like  #3355FF that are organized by their color and tint level like Brand/500. You don't use them directly in designs, but they form the foundation for Semantic Colors.


> [!IMPORTANT]
> You should never use Primitive Colors directly, they're the raw materials that Semantic Colors reference.

---

## Color Families

Our primitive color system consists of seven distinct families, each with multiple shades and some with opacity variants.

### 1. Neutral

The Neutral family provides a comprehensive grayscale palette from pure white to pure black. This is the foundation for text, backgrounds, borders, and UI elements.

#### Solid Shades

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `neutral-0` | `#FFFFFF` | Pure white |
| `neutral-50` | `#F2F2F2` | Lightest gray |
| `neutral-100` | `#E5E5E5` | Very light gray |
| `neutral-150` | `#D9D9D9` | Light gray |
| `neutral-200` | `#CCCCCC` | Light-medium gray |
| `neutral-250` | `#BFBFBF` | Medium-light gray |
| `neutral-300` | `#B3B3B3` | Medium gray |
| `neutral-350` | `#A6A6A6` | Medium gray |
| `neutral-400` | `#999999` | Medium-dark gray |
| `neutral-450` | `#8C8C8C` | Dark-medium gray |
| `neutral-500` | `#808080` | Mid gray |
| `neutral-550` | `#737373` | Dark gray |
| `neutral-600` | `#666666` | Dark gray |
| `neutral-650` | `#595959` | Darker gray |
| `neutral-700` | `#4C4C4C` | Very dark gray |
| `neutral-750` | `#404040` | Deep gray |
| `neutral-800` | `#333333` | Near-black gray |
| `neutral-850` | `#262626` | Dark near-black |
| `neutral-900` | `#1A1A1A` | Very dark gray |
| `neutral-950` | `#0D0D0D` | Almost black |
| `neutral-1000` | `#000000` | Pure black |

#### Opacity Variants

The Neutral family includes opacity variants for overlay effects and transparency.

**White Opacity (Neutral/0):**
- `neutral-0 @ 0%` - Transparent white
- `neutral-0 @ 1%` - 1% white
- `neutral-0 @ 5%` - 5% white
- `neutral-0 @ 10%` - 10% white
- `neutral-0 @ 30%` - 30% white
- `neutral-0 @ 50%` - 50% white
- `neutral-0 @ 70%` - 70% white

**Black Opacity (Neutral/1000):**
- `neutral-1000 @ 0%` - Transparent black
- `neutral-1000 @ 1%` - 1% black
- `neutral-1000 @ 5%` - 5% black
- `neutral-1000 @ 10%` - 10% black
- `neutral-1000 @ 30%` - 30% black
- `neutral-1000 @ 50%` - 50% black
- `neutral-1000 @ 70%` - 70% black

---

### 2. Brand

The Brand family represents the primary brand identity with a blue-purple spectrum. This is used for brand elements, primary actions, and emphasis.

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `brand-100` | `#D0D8FF` | Light brand |
| `brand-200` | `#A9B7FF` | Light-medium brand |
| `brand-300` | `#8196FF` | Medium brand |
| `brand-400` | `#5A76FF` | Medium-dark brand |
| `brand-500` | `#3355FF` | Primary brand |
| `brand-600` | `#2945CE` | Dark brand |
| `brand-700` | `#1F349D` | Darker brand |
| `brand-800` | `#16246C` | Very dark brand |
| `brand-900` | `#0C133B` | Deep brand |

---

### 3. Purple

The Purple family ranges from light lavender to deep violet, used for status indicators, category differentiation, and accent elements.

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `purple-100` | `#DCD0FF` | Light purple |
| `purple-200` | `#BEA9FF` | Light-medium purple |
| `purple-300` | `#A181FF` | Medium purple |
| `purple-400` | `#835AFF` | Medium-dark purple |
| `purple-500` | `#6633FF` | Primary purple |
| `purple-600` | `#5229CE` | Dark purple |
| `purple-700` | `#3F1F9D` | Darker purple |
| `purple-800` | `#2B166C` | Very dark purple |
| `purple-900` | `#180C3B` | Deep purple |

---

### 4. Blue

The Blue family ranges from light sky blue to deep navy, commonly used for informational elements and links.

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `blue-100` | `#D0D8FF` | Light blue |
| `blue-200` | `#A9B7FF` | Light-medium blue |
| `blue-300` | `#8196FF` | Medium blue |
| `blue-400` | `#5A76FF` | Medium-dark blue |
| `blue-500` | `#3355FF` | Primary blue |
| `blue-600` | `#2945CE` | Dark blue |
| `blue-700` | `#1F349D` | Darker blue |
| `blue-800` | `#16246C` | Very dark blue |
| `blue-900` | `#0C133B` | Deep blue |

---

### 5. Green

The Green family ranges from light mint to deep forest green, used for success states and positive actions.

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `green-100` | `#C4E7D0` | Light green |
| `green-200` | `#93D4A9` | Light-medium green |
| `green-300` | `#62C081` | Medium green |
| `green-400` | `#31AD5A` | Medium-dark green |
| `green-500` | `#009933` | Primary green |
| `green-600` | `#007C29` | Dark green |
| `green-700` | `#005E1F` | Darker green |
| `green-800` | `#004116` | Very dark green |
| `green-900` | `#00230C` | Deep green |

---

### 6. Orange

The Orange family ranges from light peach to deep amber, used for warning states and cautionary messages.

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `orange-100` | `#FCE1C7` | Light orange |
| `orange-200` | `#F9C998` | Light-medium orange |
| `orange-300` | `#F7B06A` | Medium orange |
| `orange-400` | `#F4983B` | Medium-dark orange |
| `orange-500` | `#F27F0D` | Primary orange |
| `orange-600` | `#C4670B` | Dark orange |
| `orange-700` | `#954E08` | Darker orange |
| `orange-800` | `#673606` | Very dark orange |
| `orange-900` | `#381D03` | Deep orange |

---

### 7. Red

The Red family ranges from light pink to deep burgundy, used for error states and destructive actions.

| Token | Hex Value | Description |
|-------|-----------|-------------|
| `red-100` | `#F9CACA` | Light red |
| `red-200` | `#F49E9E` | Light-medium red |
| `red-300` | `#F07272` | Medium red |
| `red-400` | `#EB4646` | Medium-dark red |
| `red-500` | `#E61A1A` | Primary red |
| `red-600` | `#BA1515` | Dark red |
| `red-700` | `#8E1010` | Darker red |
| `red-800` | `#620B0B` | Very dark red |
| `red-900` | `#350606` | Deep red |

---

## Primitive Usage Guidelines

### When to Use Primitive Colors

✅ **Do** use primitive colors when:
- Building the semantic color system
- Creating custom color variations
- Working on the design system infrastructure
- You need the exact hex value for implementation

❌ **Don't** use primitive colors when:
- Designing actual interfaces and components
- You need theme adaptation (light/dark mode)
- Building user-facing designs
- You want consistency across the system

### Color Family Purposes

- **Neutral**: Text, backgrounds, borders, and neutral UI elements
- **Brand**: Primary brand identity, key actions, emphasis
- **Purple**: Status indicators, category differentiation, accents
- **Blue**: Informational elements, links, informational states
- **Green**: Success states, positive actions, confirmations
- **Orange**: Warning states, cautionary messages, alerts
- **Red**: Error states, destructive actions, critical alerts

---

## Naming Convention

The primitive color system follows a consistent structure:

```
{family}-{shade}
```

For opacity variants:
```
{family}-{shade} @ {opacity}%
```

**Examples:**
- `brand-500` → Primary brand color
- `neutral-900` → Very dark gray
- `neutral-0 @ 30%` → 30% white overlay

---

# Semantic Colors

## What are Semantic Colors?

Semantic colors are named by their purpose rather than their appearance. Instead of choosing "Neutral/300" or "Blue/500," you'll select colors like "Text/Primary" or "Background/Brand" that clearly communicate how and where the color should be used.

### Why Use Semantic Colors?

✅ **Consistency** – Colors are used correctly across all designs
✅ **Theming** – Automatically adapts to light and dark modes
✅ **Accessibility** – Built-in contrast ratios meet WCAG standards
✅ **Maintainability** – Update colors in one place, changes apply everywhere
✅ **Clear Communication** – Designers and developers speak the same language

> [!IMPORTANT]
> Always use Semantic Colors instead of primitive colors in your designs. Semantic Colors ensure your design works correctly in both light and dark themes.

---

## Naming Convention

Semantic color tokens follow a consistent structure:

```
{Category}/{Variant}
```

**Examples:**
- `Text/Primary` - Primary text color
- `Background/Brand` - Brand background color
- `Border/Selected` - Selected border color
- `Icon/Positive` - Positive icon color
- `Surface/L2` - Surface elevation level 2

### Category Structure

- **Text** - Typography colors (`Text/Primary`, `Text/Secondary`, etc.)
- **Icon** - Icon colors (`Icon/Primary`, `Icon/Subtle`, etc.)
- **Border** - Border and divider colors (`Border/Primary`, `Border/Subtle`, etc.)
- **Surface** - Layered backgrounds with elevation (`Surface/L0`, `Surface/L1`, etc.)
- **Background** - Container and page backgrounds (`Background/Primary`, `Background/Brand`, etc.)

### Variant Types

- **Hierarchy** - Primary, Secondary, Tertiary, Disabled
- **States** - Selected, Hover, Pressed, Focus
- **Semantic** - Brand, Info, Positive, Warning, Negative
- **Inverse** - Primary Inverse, Secondary Inverse, etc.
- **Elevation** - L0, L1, L2, L3, L4, L5, L6 (for Surface only)

---

## Color Categories

Our semantic color system is organized into five main categories:

1. **Text** – For all typography
2. **Icon** – For icons and symbolic elements
3. **Border** – For borders, dividers, and outlines
4. **Surface** – For layered backgrounds (cards, modals, sheets)
5. **Background** – For page backgrounds and containers

---

## Text Colors

Text colors ensure readable, accessible typography across all themes.

### Primary Text Tokens

| Token | When to Use | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `Text/Primary` | Main body text, headings, primary content | Neutral/900<br>`#1a1a1a` | Neutral/50<br>`#f2f2f2` |
| `Text/Secondary` | Supporting text, labels, less prominent content | Neutral/800<br>`#333333` | Neutral/100<br>`#e5e5e5` |
| `Text/Tertiary` | Placeholder text, captions, metadata | Neutral/600<br>`#666666` | Neutral/200<br>`#cccccc` |
| `Text/Disabled` | Disabled or inactive text | Neutral/300<br>`#b3b3b3` | Neutral/700<br>`#4c4c4c` |

### Inverse Text Tokens

Use inverse tokens when text appears on **bold or colored backgrounds**.

| Token | When to Use | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `Text/Primary Inverse` | Text on dark backgrounds | Neutral/50<br>`#f2f2f2` | Neutral/900<br>`#1a1a1a` |
| `Text/Secondary Inverse` | Secondary text on dark backgrounds | Neutral/100<br>`#e5e5e5` | Neutral/800<br>`#333333` |
| `Text/Tertiary Inverse` | Tertiary text on dark backgrounds | Neutral/200<br>`#cccccc` | Neutral/600<br>`#666666` |

### Interactive & Semantic Text Tokens

| Token | When to Use | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `Text/Brand` | Brand-colored text, emphasis | Brand/500<br>`#3355ff` | Brand/400<br>`#5a76ff` |
| `Text/Link` | Hyperlinks (default state) | Brand/500<br>`#3355ff` | Brand/400<br>`#5a76ff` |
| `Text/Link Hover` | Hyperlinks on hover | – | Brand/300<br>`#8196ff` |
| `Text/Link Pressed` | Hyperlinks when clicked | – | Brand/200<br>`#a9b7ff` |
| `Text/Selected` | Selected or highlighted text | Brand/500<br>`#3355ff` | Brand/400<br>`#5a76ff` |
| `Text/Positive` | Success messages, confirmations | – | Green/400<br>`#31ad5a` |
| `Text/Warning` | Warning messages, caution | – | Orange/400<br>`#f4983b` |
| `Text/Negative` | Error messages, destructive actions | – | Red/400<br>`#eb4646` |

### Usage Guidelines

> [!TIP]
> **Do** use `Text/Primary` for main content and headings to ensure maximum readability.

> [!TIP]
> **Do** use `Text/Secondary` for labels, descriptions, and supporting information.

> [!WARNING]
> **Don't** use `Text/Tertiary` for important information – it has lower contrast and may be harder to read.

> [!WARNING]
> **Don't** rely on color alone to convey meaning. Always pair colored text with icons or labels (e.g., "Error: Invalid input" instead of just red text).

---

## Icon Colors

Icon colors ensure visual clarity and consistency for symbolic elements.

| Token | When to Use | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `Icon/Primary` | Primary icons, main actions | Neutral/900<br>`#1a1a1a` | Neutral/50<br>`#f2f2f2` |
| `Icon/Subtle` | Secondary icons, less prominent | Neutral/600<br>`#666666` | Neutral/600<br>`#666666` |
| `Icon/Inverse` | Icons on dark backgrounds | Neutral/50<br>`#f2f2f2` | Neutral/900<br>`#1a1a1a` |
| `Icon/Disabled` | Disabled or inactive icons | Neutral/300<br>`#b3b3b3` | Neutral/700<br>`#4c4c4c` |
| `Icon/Selected` | Selected or active icons | Brand/500<br>`#3355ff` | Brand/400<br>`#5a76ff` |
| `Icon/Brand` | Brand-colored icons | Brand/500<br>`#3355ff` | Brand/400<br>`#5a76ff` |
| `Icon/Info` | Informational icons | Brand/500<br>`#3355ff` | Brand/400<br>`#5a76ff` |
| `Icon/Positive` | Success icons (checkmarks, etc.) | Green/500<br>`#009933` | Green/400<br>`#31ad5a` |
| `Icon/Warning` | Warning icons (alerts, etc.) | Orange/500<br>`#f27f0d` | Orange/400<br>`#f4983b` |
| `Icon/Negative` | Error icons (X marks, etc.) | Red/500<br>`#e61a1a` | Red/400<br>`#eb4646` |

### Usage Guidelines

> [!TIP]
> **Do** pair icon colors with matching text colors (e.g., `Icon/Negative` with `Text/Negative`).

> [!TIP]
> **Do** use `Icon/Subtle` for decorative or secondary icons that shouldn't draw too much attention.

> [!WARNING]
> **Don't** use semantic icon colors (Info, Warning, Negative, Positive) for decorative purposes – they convey specific meaning.

---

## Border Colors

Border colors define edges, separators, and outlines throughout the interface.

| Token | When to Use | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `Border/Primary` | Default borders for inputs, cards, containers | Neutral/300<br>`#b3b3b3` | Neutral/700<br>`#4c4c4c` |
| `Border/Subtle` | Subtle dividers, light separators | Neutral/100<br>`#e5e5e5` | Neutral/750<br>`#404040` |
| `Border/Inverse` | Borders on dark backgrounds | Neutral/50<br>`#f2f2f2` | Neutral/800<br>`#333333` |
| `Border/Disabled` | Borders for disabled elements | Neutral/200<br>`#cccccc` | Neutral/800<br>`#333333` |
| `Border/Selected` | Borders for selected or focused elements | Brand/500<br>`#3355ff` | Brand/400<br>`#5a76ff` |
| `Border/Brand` | Brand-colored borders | Brand/500<br>`#3355ff` | Brand/400<br>`#5a76ff` |
| `Border/Info` | Informational borders | Brand/500<br>`#3355ff` | Brand/400<br>`#5a76ff` |
| `Border/Positive` | Success borders | Green/500<br>`#009933` | Green/400<br>`#31ad5a` |
| `Border/Warning` | Warning borders | Orange/500<br>`#f27f0d` | Orange/400<br>`#f4983b` |
| `Border/Negative` | Error borders | Red/500<br>`#e61a1a` | Red/400<br>`#eb4646` |

### Usage Guidelines

> [!TIP]
> **Do** use `Border/Subtle` for dividers and separators that organize content without being visually heavy.

> [!TIP]
> **Do** use `Border/Selected` for focus states on interactive elements like buttons and inputs.

> [!WARNING]
> **Don't** mix semantic border colors (e.g., don't use `Border/Negative` on a success message).

---

## Surface Colors

Surface colors create depth and hierarchy through layered backgrounds. Each layer (L0–L6) represents a different elevation level.

| Token | When to Use | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `Surface/L0` | Base layer, lowest elevation | Neutral/0<br>`#ffffff` | Neutral/1000<br>`#000000` |
| `Surface/L1` | Slightly elevated (cards on page) | Neutral/0<br>`#ffffff` | Neutral/950<br>`#0d0d0d` |
| `Surface/L2` | Elevated (dropdowns, popovers) | Neutral/0<br>`#ffffff` | Neutral/900<br>`#1a1a1a` |
| `Surface/L3` | More elevated (modals) | Neutral/0<br>`#ffffff` | Neutral/850<br>`#262626` |
| `Surface/L4` | Highly elevated (tooltips) | Neutral/0<br>`#ffffff` | Neutral/800<br>`#333333` |
| `Surface/L5` | Very high elevation | Neutral/0<br>`#ffffff` | Neutral/750<br>`#404040` |
| `Surface/L6` | Highest elevation | Neutral/0<br>`#ffffff` | Neutral/700<br>`#4c4c4c` |

### Understanding Elevation

In **light mode**, all surfaces are white, and elevation is created using shadows.
In **dark mode**, surfaces become progressively **lighter** as they elevate, creating visual depth.

```
Dark Mode Elevation Example:
┌─────────────────────────────┐
│ Surface/L0 (Page - Darkest) │
│  ┌────────────────────────┐ │
│  │ Surface/L2 (Card)      │ │
│  │  ┌──────────────────┐  │ │
│  │  │ Surface/L4       │  │ │
│  │  │ (Tooltip)        │  │ │
│  │  └──────────────────┘  │ │
│  └────────────────────────┘ │
└─────────────────────────────┘
```

### Usage Guidelines

> [!TIP]
> **Do** use higher surface levels (L3+) for elements that appear above the main content, like modals and tooltips.

> [!TIP]
> **Do** maintain consistent elevation hierarchy – don't place L1 above L3.

> [!WARNING]
> **Don't** skip elevation levels unnecessarily – use the minimum elevation needed for visual hierarchy.

---

## Background Colors

Background colors are used for page backgrounds, containers, and interactive states.

### Neutral Backgrounds

| Token | When to Use | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `Background/Primary` | Main page background | Neutral/0<br>`#ffffff` | Neutral/900<br>`#1a1a1a` |
| `Background/Subtle` | Subtle background for sections | Neutral/50<br>`#f2f2f2` | Neutral/900<br>`#1a1a1a` |
| `Background/Inverse` | Inverted background (dark in light mode) | Neutral/900<br>`#1a1a1a` | Neutral/50<br>`#f2f2f2` |

### Semantic Backgrounds

| Token | When to Use | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `Background/Brand` | Brand-colored backgrounds | Brand/500<br>`#3355ff` | Brand/500<br>`#3355ff` |
| `Background/Info` | Informational banners, notices | Brand/100<br>`#d0d8ff` | Brand/800<br>`#16246c` |
| `Background/Positive` | Success messages, confirmations | Green/100<br>`#c4e7d0` | Green/800<br>`#004116` |
| `Background/Warning` | Warning messages, caution | Orange/100<br>`#fce1c7` | Orange/800<br>`#673606` |
| `Background/Negative` | Error messages, destructive actions | Red/100<br>`#f9caca` | Red/800<br>`#620b0b` |

### Usage Guidelines

> [!TIP]
> **Do** use semantic backgrounds with matching text and icon colors for clear communication.

> [!TIP]
> **Do** use `Background/Subtle` to create visual separation without heavy borders.

> [!WARNING]
> **Don't** use semantic backgrounds for decorative purposes – they convey specific meaning (info, warning, error, success).

---

## Accessibility

All color pairings in the Scale Design System meet **WCAG AA standards** for contrast ratios:

- **Standard text:** Minimum 4.5:1 contrast ratio
- **Large text (18px+ or 14px+ bold):** Minimum 3:1 contrast ratio
- **UI components and icons:** Minimum 3:1 contrast ratio

### Best Practices

✅ **Do** use semantic color tokens – they're designed with accessibility in mind
✅ **Do** test your designs with color blindness simulators
✅ **Do** provide alternative indicators beyond color (icons, labels, patterns)

❌ **Don't** rely solely on color to convey information
❌ **Don't** use custom colors without checking contrast ratios
❌ **Don't** use `Text/Tertiary` or `Icon/Subtle` for critical information

---

# Color System Architecture

Primitive colors form the foundation of the color system hierarchy:

```
Primitive Colors (Foundation)
    ↓
Semantic Tokens (Theme-aware)
    ↓
Component Usage (Design & Development)
```

**Key Principles:**
- Primitives are **theme-agnostic** – they never change
- Semantic tokens **map to primitives** and adapt to themes
- Components **use semantic tokens** for consistency
- The system ensures **accessibility** through proper contrast ratios

---

## Technical Details

All primitive colors are defined in:
- **Color Space**: sRGB
- **Format**: Hex values with optional alpha channel
- **Precision**: 6-digit hex codes
- **Consistency**: Same values across all platforms (Figma, Framer, code)

---

# Quick Reference

## Common Patterns

| Use Case | Recommended Tokens |
|----------|-------------------|
| **Body text on white background** | `Text/Primary` |
| **Label for form input** | `Text/Secondary` |
| **Placeholder text in input** | `Text/Tertiary` |
| **Error message** | `Text/Negative` + `Icon/Negative` |
| **Success banner** | `Background/Positive` + `Text/Primary` + `Icon/Positive` |
| **Primary button** | `Background/Brand` + `Text/Primary Inverse` |
| **Card on page** | `Surface/L1` or `Surface/L2` |
| **Modal dialog** | `Surface/L3` or `Surface/L4` |
| **Divider line** | `Border/Subtle` |
| **Focused input border** | `Border/Selected` |

### Most Common Primitives

| Use Case | Primitive Token |
|----------|-----------------|
| White background | `neutral-0` |
| Black text | `neutral-1000` |
| Primary brand | `brand-500` |
| Success | `green-500` |
| Warning | `orange-500` |
| Error | `red-500` |
| Link blue | `blue-500` |

---

## Do's and Don'ts Summary

| ✅ Do | ❌ Don't |
|------|---------|
| Use semantic tokens that match the purpose | Use a token just because the color looks right |
| Pair semantic colors together (e.g., `Text/Negative` + `Icon/Negative`) | Mix unrelated semantic colors |
| Use inverse tokens on bold backgrounds | Use regular tokens on colored backgrounds |
| Test with both light and dark themes | Assume a design works in both themes without testing |
| Provide non-color indicators (icons, labels) | Rely on color alone to convey meaning |
| Use primitives only for building the system | Use primitives in actual interface designs |

---

## Need Help?

If you're unsure which color token to use:

1. **Identify the element type** – Is it text, an icon, a border, a surface, or a background?
2. **Determine the purpose** – Is it primary, secondary, interactive, or semantic (info/warning/error/success)?
3. **Check the context** – Is it on a light or dark background? Is it disabled or selected?
4. **Choose the matching token** – Use the tables above to find the appropriate semantic token

> [!NOTE]
> When in doubt, start with primary tokens (`Text/Primary`, `Icon/Primary`, `Border/Primary`) and adjust based on visual hierarchy and emphasis.

---

**Last Updated:** December 2025
**Design System:** Scale v1.0