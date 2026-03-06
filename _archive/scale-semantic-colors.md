# Semantic Color System

A comprehensive guide to using semantic color tokens in the Scale Design System.

---

## What are Semantic Colors?

Semantic colors are named color tokens that describe **what a color does**, not **what it looks like**. Instead of using color names like "blue" or hex codes like `#3355ff`, we use meaningful names like `Text/Primary` or `Background/Brand`.

### Why Use Semantic Colors?

✅ **Consistency** – Colors are used correctly across all designs  
✅ **Theming** – Automatically adapts to light and dark modes  
✅ **Accessibility** – Built-in contrast ratios meet WCAG standards  
✅ **Maintainability** – Update colors in one place, changes apply everywhere  
✅ **Clear Communication** – Designers and developers speak the same language

> [!IMPORTANT]
> Always use semantic color tokens instead of primitive colors (like `Neutral/900` or `Brand/500`) in your designs. Semantic tokens ensure your design works correctly in both light and dark themes.

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

## Quick Reference

### Common Patterns

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

### Do's and Don'ts Summary

| ✅ Do | ❌ Don't |
|------|---------|
| Use semantic tokens that match the purpose | Use a token just because the color looks right |
| Pair semantic colors together (e.g., `Text/Negative` + `Icon/Negative`) | Mix unrelated semantic colors |
| Use inverse tokens on bold backgrounds | Use regular tokens on colored backgrounds |
| Test with both light and dark themes | Assume a design works in both themes without testing |
| Provide non-color indicators (icons, labels) | Rely on color alone to convey meaning |

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
