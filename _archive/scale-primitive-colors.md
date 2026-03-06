# Primitive Color System

A comprehensive guide to the foundational color tokens in the Scale Design System.

---

## What are Primitive Colors?

Primitive colors are the **foundational building blocks** of the Scale Design System's color palette. These are the raw, un-themed color values that semantic colors map to.

### Primitive vs. Semantic Colors

| Type | Description | Example |
|------|-------------|---------|
| **Primitive** | Base color values with specific hex codes | `Neutral/900` = `#1a1a1a` |
| **Semantic** | Meaningful color tokens that adapt to themes | `Text/Primary` = `Neutral/900` in light mode, `Neutral/50` in dark mode |

> [!IMPORTANT]
> Primitive colors should only be used when building the semantic color system. For actual design work, always use semantic color tokens.

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

## Usage Guidelines

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

## Color System Architecture

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

## Quick Reference

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

### Shade Progression

Each family follows this pattern:
- **100-300**: Light shades (used for backgrounds, subtle elements)
- **400-600**: Mid shades (used for primary elements, text)
- **700-900**: Dark shades (used for text, borders, dark backgrounds)

---

**Last Updated:** December 2025  
**Design System:** Scale v1.0