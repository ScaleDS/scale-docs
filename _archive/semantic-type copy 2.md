# Semantic Type System

A comprehensive guide to using semantic type tokens in the Scale Design System.

---

## Overview

The Scale type system uses a two-layer approach:

1. **Primitive Type Variables** – Raw typography values (font sizes, weights, line heights, letter spacing)
2. **Semantic Type Tokens** – Meaningful names that describe usage context

This separation allows you to maintain consistent typography across all designs while enabling responsive behavior and easy theming.

---

## Primitive Type Variables

Primitive variables are the building blocks of the type system. They contain raw values that semantic tokens reference.

### Font Family Primitives

| Token | Value | Usage |
|-------|-------|-------|
| `Family/Inter` | Inter | Primary font for UI and body text |
| `Family/SF Pro Text` | SF Pro Text | iOS system font fallback |
| `Family/Roboto` | Roboto | Android system font fallback |

### Font Weight Primitives

| Token | Value | CSS Equivalent |
|-------|-------|----------------|
| `Weight/Light` | Light | font-weight: 300 |
| `Weight/Regular` | Regular | font-weight: 400 |
| `Weight/Semi Bold` | Semi Bold | font-weight: 600 |

### Font Size Primitives

| Token | Value (px) | Alias |
|-------|------------|-------|
| `Size/XS` | 10 | Unit/10 |
| `Size/S` | 12 | Unit/12 |
| `Size/M` | 14 | Unit/14 |
| `Size/L` | 16 | Unit/16 |
| `Size/XL` | 18 | Unit/18 |
| `Size/2XL` | 20 | Unit/20 |
| `Size/3XL` | 24 | Unit/24 |
| `Size/4XL` | 28 | Unit/28 |
| `Size/5XL` | 32 | Unit/32 |
| `Size/6XL` | 40 | Unit/40 |
| `Size/7XL` | 48 | Unit/48 |
| `Size/8XL` | 56 | Unit/56 |
| `Size/9XL` | 64 | Unit/64 |
| `Size/10XL` | 72 | Unit/72 |

### Line Height Primitives

| Token | Value (px) | Alias |
|-------|------------|-------|
| `Line Height/XS` | 14 | Unit/14 |
| `Line Height/S` | 16 | Unit/16 |
| `Line Height/M` | 20 | Unit/20 |
| `Line Height/L` | 24 | Unit/24 |
| `Line Height/XL` | 26 | Unit/26 |
| `Line Height/2XL` | 28 | Unit/28 |
| `Line Height/3XL` | 32 | Unit/32 |
| `Line Height/4XL` | 36 | Unit/36 |
| `Line Height/5XL` | 40 | Unit/40 |
| `Line Height/6XL` | 48 | Unit/48 |
| `Line Height/7XL` | 56 | Unit/56 |
| `Line Height/8XL` | 64 | Unit/64 |
| `Line Height/9XL` | 72 | Unit/72 |
| `Line Height/10XL` | 80 | Unit/80 |

### Letter Spacing Primitives

| Token | Value (em) | Usage |
|-------|------------|-------|
| `Letter Spacing/XS` | -0.01 | Large headings |
| `Letter Spacing/S` | -0.005 | Medium headings |
| `Letter Spacing/None` | 0 | Body text |

---

## Semantic Type Tokens

Semantic tokens combine primitive variables to create meaningful typography styles. They are organized by usage context and automatically adapt to breakpoints.

### Breakpoint System

| Breakpoint | Width | Usage |
|------------|-------|-------|
| **Desktop** | 1440px | Standard desktop and tablet layouts |
| **Mobile** | 402px | Mobile device layouts |

### Heading Tokens

Heading tokens are used for page titles, section headers, and content hierarchy.

#### Heading Structure
```
Heading/{Size}/{Weight}
├── Size: 5XL, 4XL, 3XL, 2XL, XL, L, M, S, XS, 2XS
└── Weight: Light, Regular, Semi Bold
```

#### Heading Values by Breakpoint

| Token | Desktop (px) | Mobile (px) | Description |
|-------|--------------|-------------|-------------|
| **Heading/5XL** | 72/80 | 56/64 | Main page titles, hero sections |
| **Heading/4XL** | 64/72 | 48/56 | Major section headers |
| **Heading/3XL** | 56/64 | 40/48 | Large section headers |
| **Heading/2XL** | 48/56 | 32/40 | Subsection headers |
| **Heading/XL** | 40/48 | 28/36 | Secondary headers |
| **Heading/L** | 32/40 | 24/32 | Tertiary headers |
| **Heading/M** | 24/32 | 20/28 | Small headers |
| **Heading/S** | 20/28 | 18/26 | Minor headers |
| **Heading/XS** | 16/24 | 16/24 | Micro headers |
| **Heading/2XS** | 14/20 | 14/20 | Smallest headers |

*Format: Size/Line Height*

### Text Tokens

Text tokens are used for body content, paragraphs, and general reading material.

#### Text Structure
```
Text/{Size}/{Weight}
├── Size: 2XL, XL, L, M, S, XS
└── Weight: Regular, Semi Bold
```

#### Text Values by Breakpoint

| Token | Desktop (px) | Mobile (px) | Description |
|-------|--------------|-------------|-------------|
| **Text/2XL** | 24/32 | 20/28 | Large body text, lead paragraphs |
| **Text/XL** | 20/28 | 18/26 | Large body text |
| **Text/L** | 16/24 | 16/24 | Standard body text |
| **Text/M** | 14/20 | 14/20 | Small body text |
| **Text/S** | 12/16 | 12/16 | Fine print, captions |
| **Text/XS** | 10/14 | 10/14 | Micro text, legal notices |

*Format: Size/Line Height*

### Link Tokens

Link tokens are used for hyperlinks and interactive text elements.

#### Link Structure
```
Link/{Size}/{Weight}
├── Size: L, M, S
└── Weight: Regular, Semi Bold
```

#### Link Values by Breakpoint

| Token | Desktop (px) | Mobile (px) | Description |
|-------|--------------|-------------|-------------|
| **Link/L** | 16/24 | 16/24 | Large links, navigation links |
| **Link/M** | 14/20 | 14/20 | Standard links |
| **Link/S** | 12/16 | 12/16 | Small links, inline links |

*Format: Size/Line Height*

### Label Tokens

Label tokens are used for form labels, UI labels, and interface text that needs emphasis.

#### Label Structure
```
Label/{Size}
├── Size: L, M, S
└── Weight: Semi Bold (fixed)
```

#### Label Values by Breakpoint

| Token | Desktop (px) | Mobile (px) | Description |
|-------|--------------|-------------|-------------|
| **Label/L** | 16/24 | 16/24 | Large form labels, button labels |
| **Label/M** | 14/20 | 14/20 | Standard form labels |
| **Label/S** | 12/16 | 12/16 | Small labels, tags |

*Format: Size/Line Height*  
*Note: All labels use Semi Bold weight*

---

## How Semantic Tokens Work

### Token Resolution

Semantic tokens reference primitive variables. For example:

```
Heading/5XL/Regular
├── Family: Family/Inter
├── Size: Size/10XL (72px desktop, 56px mobile)
├── Line Height: Line Height/10XL (80px desktop, 64px mobile)
├── Weight: Weight/Regular
└── Letter Spacing: Letter Spacing/XS (-0.01em)
```

### Responsive Behavior

The system automatically switches between desktop and mobile values based on the active breakpoint:

```javascript
// Desktop (1440px)
Heading/5XL/Regular = {
  size: 72px,
  lineHeight: 80px,
  weight: "Regular",
  letterSpacing: -0.01em
}

// Mobile (402px)
Heading/5XL/Regular = {
  size: 56px,
  lineHeight: 64px,
  weight: "Regular",
  letterSpacing: -0.01em
}
```

---

## CSS Implementation

### Using CSS Custom Properties

```css
/* Font Family */
:root {
  --sc-font-family-main: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Heading Example - 5XL Regular */
h1 {
  font-family: var(--sc-font-family-main);
  font-size: 72px;           /* Size/10XL */
  line-height: 80px;         /* Line Height/10XL */
  font-weight: 400;          /* Weight/Regular */
  letter-spacing: -0.01em;   /* Letter Spacing/XS */
}

/* Text Example - L Regular */
p {
  font-family: var(--sc-font-family-main);
  font-size: 16px;           /* Size/L */
  line-height: 24px;         /* Line Height/L */
  font-weight: 400;          /* Weight/Regular */
}

/* Label Example - M Semi Bold */
label {
  font-family: var(--sc-font-family-main);
  font-size: 14px;           /* Size/M */
  line-height: 20px;         /* Line Height/M */
  font-weight: 600;          /* Weight/Semi Bold */
}
```

### Responsive Typography with Media Queries

```css
/* Heading 5XL - Responsive */
h1 {
  font-family: var(--sc-font-family-main);
  font-size: 56px;           /* Mobile default */
  line-height: 64px;
  font-weight: 400;
  letter-spacing: -0.01em;
}

/* Desktop breakpoint */
@media (min-width: 769px) {
  h1 {
    font-size: 72px;         /* Desktop size */
    line-height: 80px;
  }
}

/* Text L - Responsive */
p {
  font-family: var(--sc-font-family-main);
  font-size: 16px;           /* Same on both */
  line-height: 24px;
  font-weight: 400;
}
```

### Using CSS Variables for Semantic Tokens

```css
/* Define semantic tokens as CSS variables */
:root {
  /* Heading 5XL Regular */
  --sc-heading-5xl-regular-size: 72px;
  --sc-heading-5xl-regular-line-height: 80px;
  --sc-heading-5xl-regular-weight: 400;
  --sc-heading-5xl-regular-letter-spacing: -0.01em;
  
  /* Text L Regular */
  --sc-text-l-regular-size: 16px;
  --sc-text-l-regular-line-height: 24px;
  --sc-text-l-regular-weight: 400;
  
  /* Label M Semi Bold */
  --sc-label-m-semi-bold-size: 14px;
  --sc-label-m-semi-bold-line-height: 20px;
  --sc-label-m-semi-bold-weight: 600;
}

/* Apply to elements */
h1 {
  font-family: var(--sc-font-family-main);
  font-size: var(--sc-heading-5xl-regular-size);
  line-height: var(--sc-heading-5xl-regular-line-height);
  font-weight: var(--sc-heading-5xl-regular-weight);
  letter-spacing: var(--sc-heading-5xl-regular-letter-spacing);
}

/* Mobile override */
@media (max-width: 768px) {
  :root {
    --sc-heading-5xl-regular-size: 56px;
    --sc-heading-5xl-regular-line-height: 64px;
  }
}
```

---

## Usage Guidelines

### When to Use Each Category

#### Heading
- **Use for**: Page titles, section headers, article titles
- **Don't use for**: Body text, captions, buttons
- **Examples**: 
  - ✅ `Heading/5XL` for main page title
  - ✅ `Heading/M` for card titles
  - ❌ `Heading/2XL` for paragraph text

#### Text
- **Use for**: Body content, paragraphs, descriptions
- **Don't use for**: Headers, labels, links
- **Examples**:
  - ✅ `Text/L` for main body text
  - ✅ `Text/M` for secondary information
  - ❌ `Text/S` for important warnings

#### Link
- **Use for**: Hyperlinks, navigation items, clickable text
- **Don't use for**: Static text, buttons
- **Examples**:
  - ✅ `Link/M` for inline links
  - ✅ `Link/L` for navigation menu items
  - ❌ `Link/S` for body text

#### Label
- **Use for**: Form labels, button text, tags, badges
- **Don't use for**: Body paragraphs, long content
- **Examples**:
  - ✅ `Label/M` for form input labels
  - ✅ `Label/S` for tags and badges
  - ❌ `Label/L` for article text

### Weight Selection

| Weight | When to Use | Examples |
|--------|-------------|----------|
| **Light** | Subtle, decorative text | Placeholder text, decorative headings |
| **Regular** | Standard content | Body text, descriptions, normal headings |
| **Semi Bold** | Emphasis and importance | Labels, buttons, key headings |

---

## Accessibility Guidelines

### Minimum Requirements

- **Font size**: 10px minimum (Text/XS)
- **Recommended body text**: 14px minimum (Text/M)
- **Line height ratio**: 1.4 to 1.6 for optimal readability
- **Contrast**: Ensure 4.5:1 ratio with background

### Best Practices

✅ **Do**:
- Use larger text for important information
- Maintain adequate line spacing
- Test on actual mobile devices
- Use semi-bold for emphasis, not just larger sizes

❌ **Don't**:
- Use text smaller than 10px
- Use tight line heights (< 1.3)
- Rely only on size for hierarchy
- Use all caps for long text

---

## Quick Reference Table

| Use Case | Token | Weight | Desktop | Mobile |
|----------|-------|--------|---------|--------|
| **Page Title** | Heading/5XL | Semi Bold | 72/80 | 56/64 |
| **Section Header** | Heading/M | Semi Bold | 24/32 | 20/28 |
| **Card Title** | Heading/S | Semi Bold | 20/28 | 18/26 |
| **Body Text** | Text/L | Regular | 16/24 | 16/24 |
| **Small Body** | Text/M | Regular | 14/20 | 14/20 |
| **Form Label** | Label/M | Semi Bold | 14/20 | 14/20 |
| **Button Text** | Label/M | Semi Bold | 14/20 | 14/20 |
| **Navigation Link** | Link/L | Semi Bold | 16/24 | 16/24 |
| **Inline Link** | Link/M | Semi Bold | 14/20 | 14/20 |
| **Caption** | Text/S | Regular | 12/16 | 12/16 |
| **Fine Print** | Text/XS | Regular | 10/14 | 10/14 |

---

## Token Naming Convention

### Structure
```
{Category}/{Size}/{Weight}
```

### Examples
- `Heading/5XL/Regular` – Heading, largest size, normal weight
- `Text/L/Semi Bold` – Body text, large size, emphasized
- `Link/M/Regular` – Link, medium size, normal weight
- `Label/M` – Label, medium size (weight is always Semi Bold)

### Breakpoint Suffix (Optional)
For explicit breakpoint usage:
- `Heading/5XL/Regular@Desktop`
- `Heading/5XL/Regular@Mobile`

---

## CSS Variable Naming

When using CSS custom properties, follow this pattern:

```css
--sc-{category}-{size}-{weight}-{property}
```

**Examples:**
- `--sc-heading-5xl-regular-size`
- `--sc-text-l-semi-bold-line-height`
- `--sc-link-m-regular-weight`
- `--sc-label-m-semi-bold-size`

---

## Migration from Primitives

### ❌ Don't Use Primitives Directly
```css
/* Bad - Using primitives */
h1 {
  font-size: var(--sc-size-10xl);      /* 72px */
  line-height: var(--sc-line-height-10xl); /* 80px */
  font-weight: var(--sc-weight-regular);
}
```

### ✅ Use Semantic Tokens
```css
/* Good - Using semantic tokens */
h1 {
  font-size: var(--sc-heading-5xl-regular-size);
  line-height: var(--sc-heading-5xl-regular-line-height);
  font-weight: var(--sc-heading-5xl-regular-weight);
}
```

---

## Design Tool Implementation

### Figma Variables
In Figma, use the variable system to apply semantic tokens:

1. **Create variables** for each semantic token
2. **Set values** for desktop and mobile modes
3. **Apply to text layers** using the variable bindings
4. **Switch modes** to preview responsive behavior

### Figma Styles
Alternatively, create text styles with semantic names:
- `Heading/5XL/Regular`
- `Text/L/Regular`
- `Label/M/Semi Bold`

---

## Troubleshooting

### Common Issues

**Q: My text isn't scaling between breakpoints**
- A: Ensure you're using semantic tokens, not primitives
- A: Check that your design tool is in the correct mode

**Q: Line height feels too tight/loose**
- A: Use the recommended line heights from the tables
- A: For custom sizes, maintain 1.4-1.6 ratio

**Q: Which weight should I use?**
- A: Regular for body text, Semi Bold for emphasis and labels
- A: Light only for decorative purposes

---

## Summary

The Scale type system provides:

- **Consistency** through semantic naming
- **Responsiveness** through breakpoint-aware tokens
- **Maintainability** through primitive/semantic separation
- **Accessibility** through optimized sizes and spacing
- **Clarity** through clear usage guidelines

**Always use semantic tokens** (`Heading/5XL`, `Text/L`, `Label/M`) instead of primitive values (`Size/72px`, `Weight/Regular`) for all typography in your designs.

---

**Last Updated:** December 2025  
**Design System:** Scale v1.0  
**Type System Version:** 1.0