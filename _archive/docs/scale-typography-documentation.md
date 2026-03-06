# Semantic Type System

A comprehensive guide to using semantic type tokens in the Scale Design System.

---

Typography shapes the visual language of digital products by defining consistent, accessible text styles that support readability, hierarchy, and brand expression.

## Overview

Scale combines Primitive Type values like Family, Size, Line-height, Weight and Letter-spacing into Semantic Type styles like Heading/XL and Text/L that are used across your projectsand have built in responsive sizing for Desktop and Mobile breakpoints.

## What are Primitive Type Tokens?

Primitive type tokens are the foundational building blocks that make up the semantic type system.

### Family

Font family defines the typeface used for text rendering. Scale uses Inter as it's default typeface.

| Token | Value |
|-------|-------|
| `Family/Inter` | Inter |
| `Family/SF Pro Text` | SF Pro Text |
| `Family/Roboto` | Roboto |

### Font Weight

Each font family comes in different weights, which controls the thickness of character strokes in text. We use Light, Regular and Semibold in Scale.

| Token | Value |
|-------|-------|
| `Weight/Light` | Light |
| `Weight/Regular` | Regular |
| `Weight/Semi Bold` | Semi Bold |

### Font Size

We use combination of a global 4 point scale and T-Shirt sizing to create our set of type sizes.

| Token | Value | Token | Value |
|-------|-------|-------|-------|
| `Size/XS` | 10px | `Size/6XL` | 40px |
| `Size/S` | 12px | `Size/7XL` | 48px |
| `Size/M` | 14px | `Size/8XL` | 56px |
| `Size/L` | 16px | `Size/9XL` | 64px |
| `Size/XL` | 18px | `Size/10XL` | 72px |
| `Size/2XL` | 20px | | |
| `Size/3XL` | 24px | | |
| `Size/4XL` | 28px | | |
| `Size/5XL` | 32px | | |

### Line Height

Line height sets the vertical spacing between lines of text.

| Token | Value | Token | Value |
|-------|-------|-------|-------|
| `Line Height/XS` | 14px | `Line Height/6XL` | 48px |
| `Line Height/S` | 16px | `Line Height/7XL` | 56px |
| `Line Height/M` | 20px | `Line Height/8XL` | 64px |
| `Line Height/L` | 24px | `Line Height/9XL` | 72px |
| `Line Height/XL` | 26px | `Line Height/10XL` | 80px |
| `Line Height/2XL` | 28px | | |
| `Line Height/3XL` | 32px | | |
| `Line Height/4XL` | 36px | | |
| `Line Height/5XL` | 40px | | |

### Letter Spacing

Letter spacing adjusts the horizontal space between characters, and we use this to make larger headings tighter with -1px and general text at it's default 0px.

| Token | Value |
|-------|-------|
| `Letter Spacing/XS` | -1px |
| `Letter Spacing/S` | -0.5px |
| `Letter Spacing/None` | 0px |

> [!IMPORTANT]
> **Always use semantic type tokens** (`Heading/XL`, `Text/L`, etc.) in your designs rather than these primitive values.

## What are Semantic Type Tokens?

Semantic type tokens are named typography variables that describe **what the text is used for**. Instead of manually setting font sizes, weights, and line heights, you use meaningful names like `Heading/XL` or `Text/M`.

### Why Use Semantic Type Tokens?

✅ **Consistency** – Typography is used correctly across all designs  
✅ **Responsiveness** – Automatically adapts to different screen sizes  
✅ **Maintainability** – Update typography in one place, changes apply everywhere  
✅ **Clear Communication** – Designers and developers speak the same language  
✅ **Accessibility** – Built-in line heights and spacing for readability

> [!IMPORTANT]
> Always use semantic type tokens instead of primitive values (like `Size/40px` or `Weight/Regular`) in your designs. Semantic tokens ensure your typography works correctly across different contexts and breakpoints.

---

## Groups

Our semantic type system is organized into four main groups:

1. **Heading** – For page titles and section headers
2. **Text** – For body content and paragraphs
3. **Link** – For hyperlinks and interactive text
4. **Label** – For form labels and UI labels

---

## Heading Tokens

Heading tokens are used for page titles, section headers, and important content hierarchy.

### Heading Sizes (Desktop)

| Token | When to Use | Size | Line Height | Weight Options |
|-------|-------------|------|-------------|----------------|
| `Heading/5XL` | Main page titles, hero sections | 72px | 80px | Light, Regular, Semi Bold |
| `Heading/4XL` | Major section headers | 64px | 72px | Light, Regular, Semi Bold |
| `Heading/3XL` | Large section headers | 56px | 64px | Light, Regular, Semi Bold |
| `Heading/2XL` | Subsection headers | 48px | 56px | Light, Regular, Semi Bold |
| `Heading/XL` | Secondary headers | 40px | 48px | Light, Regular, Semi Bold |
| `Heading/L` | Tertiary headers | 32px | 40px | Light, Regular, Semi Bold |
| `Heading/M` | Small headers | 24px | 32px | Light, Regular, Semi Bold |
| `Heading/S` | Minor headers | 20px | 28px | Light, Regular, Semi Bold |
| `Heading/XS` | Micro headers | 16px | 24px | Light, Regular, Semi Bold |
| `Heading/2XS` | Smallest headers | 14px | 20px | Light, Regular, Semi Bold |

### Heading Sizes (Mobile)

On mobile devices, heading sizes are scaled down for better readability:

| Token | Desktop Size | Mobile Size | Mobile Line Height |
|-------|--------------|-------------|-------------------|
| `Heading/5XL` | 72px | 56px | 64px |
| `Heading/4XL` | 64px | 48px | 56px |
| `Heading/3XL` | 56px | 40px | 48px |
| `Heading/2XL` | 48px | 32px | 40px |
| `Heading/XL` | 40px | 28px | 36px |
| `Heading/L` | 32px | 24px | 32px |
| `Heading/M` | 24px | 20px | 28px |
| `Heading/S` | 20px | 18px | 26px |
| `Heading/XS` | 16px | 16px | 24px |
| `Heading/2XS` | 14px | 14px | 20px |

### Usage Guidelines

> [!TIP]
> **Do** use `Heading/5XL` for main page titles to establish clear hierarchy.

> [!TIP]
> **Do** use `Heading/M` for section headers in cards and containers.

> [!WARNING]
> **Don't** use `Heading/5XL` for body text – it's too large and hard to read in paragraphs.

---

## Text Tokens

Text tokens are used for body content, paragraphs, and general reading material.

### Text Sizes (Desktop)

| Token | When to Use | Size | Line Height | Weight Options |
|-------|-------------|------|-------------|----------------|
| `Text/2XL` | Large body text, lead paragraphs | 24px | 32px | Regular, Semi Bold |
| `Text/XL` | Large body text | 20px | 28px | Regular, Semi Bold |
| `Text/L` | Standard body text | 16px | 24px | Regular, Semi Bold |
| `Text/M` | Small body text | 14px | 20px | Regular, Semi Bold |
| `Text/S` | Fine print, captions | 12px | 16px | Regular, Semi Bold |
| `Text/XS` | Micro text, legal notices | 10px | 14px | Regular, Semi Bold |

### Text Sizes (Mobile)

| Token | Desktop Size | Mobile Size | Mobile Line Height |
|-------|--------------|-------------|-------------------|
| `Text/2XL` | 24px | 20px | 28px |
| `Text/XL` | 20px | 18px | 26px |
| `Text/L` | 16px | 16px | 24px |
| `Text/M` | 14px | 14px | 20px |
| `Text/S` | 12px | 12px | 16px |
| `Text/XS` | 10px | 10px | 14px |

### Usage Guidelines

> [!TIP]
> **Do** use `Text/L` for main body content to ensure readability.

> [!TIP]
> **Do** use `Text/M` for secondary information and supporting text.

> [!WARNING]
> **Don't** use `Text/XS` for important information – it may be too small for some users.

---

## Link Tokens

Link tokens are used for hyperlinks and interactive text elements.

### Link Sizes (Desktop)

| Token | When to Use | Size | Line Height | Weight Options |
|-------|-------------|------|-------------|----------------|
| `Link/L` | Large links, navigation links | 16px | 24px | Regular, Semi Bold |
| `Link/M` | Standard links | 14px | 20px | Regular, Semi Bold |
| `Link/S` | Small links, inline links | 12px | 16px | Regular, Semi Bold |

### Link Sizes (Mobile)

| Token | Desktop Size | Mobile Size | Mobile Line Height |
|-------|--------------|-------------|-------------------|
| `Link/L` | 16px | 16px | 24px |
| `Link/M` | 14px | 14px | 20px |
| `Link/S` | 12px | 12px | 16px |

### Usage Guidelines

> [!TIP]
> **Do** use `Link/M` for standard hyperlinks in body text.

> [!TIP]
> **Do** use `Link/L` for navigation links in menus and headers.

---

## Label Tokens

Label tokens are used for form labels, UI labels, and interface text that needs emphasis.

### Label Sizes (Desktop)

| Token | When to Use | Size | Line Height | Weight |
|-------|-------------|------|-------------|--------|
| `Label/L` | Large form labels, button labels | 16px | 24px | Semi Bold |
| `Label/M` | Standard form labels | 14px | 20px | Semi Bold |
| `Label/S` | Small labels, tags | 12px | 16px | Semi Bold |

### Label Sizes (Mobile)

| Token | Desktop Size | Mobile Size | Mobile Line Height |
|-------|--------------|-------------|-------------------|
| `Label/L` | 16px | 16px | 24px |
| `Label/M` | 14px | 14px | 20px |
| `Label/S` | 12px | 12px | 16px |

### Usage Guidelines

> [!TIP]
> **Do** use `Label/M` for form input labels.

> [!TIP]
> **Do** use `Label/S` for tags, badges, and small UI elements.

---

## Weight Options

All semantic type tokens support multiple weight options:

- **Light** – For subtle, decorative text
- **Regular** – For standard body content
- **Semi Bold** – For emphasis and headings

---

## CSS Implementation

### Using SCSS Mixins

The Scale Design System provides SCSS mixins for implementing semantic typography. These mixins are defined in `src/styles/sc-mixins-type.scss` and use the variables from `src/styles/sc-variables-type.scss`.

```scss
// Import the Scale typography system
@import 'src/styles/sc-variables.scss';
@import 'src/styles/sc-mixins-type.scss';

// Apply typography using mixins
h1 {
  @include sc-typography-heading-xl;
  color: var(--sc-color-text-primary);
}

h2 {
  @include sc-typography-heading-l;
  color: var(--sc-color-text-primary);
}

h3 {
  @include sc-typography-heading-m;
  color: var(--sc-color-text-primary);
}

p {
  @include sc-typography-text-l;
  color: var(--sc-color-text-secondary);
}

a {
  @include sc-typography-link-m;
  color: var(--sc-color-text-link);
  text-decoration: none;

  &:hover {
    color: var(--sc-color-text-link-hover);
    text-decoration: underline;
  }
}

label {
  @include sc-typography-label-m;
  color: var(--sc-color-text-primary);
}
```

### Using CSS Custom Properties

If you prefer plain CSS, you can use the CSS custom properties that are generated from the SCSS variables:

```css
/* Heading example */
h1 {
  font-family: var(--sc-type-family-inter);
  font-size: var(--sc-type-size-6xl);
  line-height: var(--sc-type-line-height-6xl);
  font-weight: var(--sc-type-weight-semi-bold);
  letter-spacing: var(--sc-type-letter-spacing-s);
  color: var(--sc-color-text-primary);
}

/* Text example */
p {
  font-family: var(--sc-type-family-inter);
  font-size: var(--sc-type-size-l);
  line-height: var(--sc-type-line-height-l);
  font-weight: var(--sc-type-weight-regular);
  letter-spacing: var(--sc-type-letter-spacing-none);
  color: var(--sc-color-text-secondary);
}

/* Link example */
a {
  font-family: var(--sc-type-family-inter);
  font-size: var(--sc-type-size-m);
  line-height: var(--sc-type-line-height-m);
  font-weight: var(--sc-type-weight-semi-bold);
  letter-spacing: var(--sc-type-letter-spacing-none);
  color: var(--sc-color-text-link);
}

/* Label example */
label {
  font-family: var(--sc-type-family-inter);
  font-size: var(--sc-type-size-m);
  line-height: var(--sc-type-line-height-m);
  font-weight: var(--sc-type-weight-semi-bold);
  letter-spacing: var(--sc-type-letter-spacing-none);
  color: var(--sc-color-text-primary);
}
```

### Using Base Styles

The Scale system also includes base styles in `src/styles/sc-base.scss` that automatically apply typography to standard HTML elements:

```scss
// Import the complete Scale system
@import 'src/styles/sc-base.scss';

// Now standard HTML elements are styled automatically:
// - h1, h2, h3, h4, h5, h6 get appropriate heading styles
// - p, span get text-l styles
// - a gets link-l styles with hover states
// - body gets text-l styles
```

### Responsive Typography

For responsive designs, use media queries with the appropriate SCSS mixins or CSS variables:

```scss
// Responsive heading with SCSS mixins
h1 {
  @include sc-typography-heading-xl;
  color: var(--sc-color-text-primary);
}

@media (max-width: 768px) {
  h1 {
    @include sc-typography-heading-l; // Smaller size for mobile
    color: var(--sc-color-text-primary);
  }
}
```

Or using CSS custom properties:

```css
/* Responsive heading */
h1 {
  font-family: var(--sc-type-family-inter);
  font-size: var(--sc-type-size-6xl);
  line-height: var(--sc-type-line-height-6xl);
  font-weight: var(--sc-type-weight-semi-bold);
  letter-spacing: var(--sc-type-letter-spacing-s);
}

@media (max-width: 768px) {
  h1 {
    font-size: var(--sc-type-size-5xl); /* Mobile size */
    line-height: var(--sc-type-line-height-5xl); /* Mobile line height */
  }
}
```

### Available SCSS Mixins

The following mixins are available in `src/styles/sc-mixins-type.scss`:

**Heading Mixins:**
- `@include sc-typography-heading-5xl`
- `@include sc-typography-heading-4xl`
- `@include sc-typography-heading-3xl`
- `@include sc-typography-heading-2xl`
- `@include sc-typography-heading-xl`
- `@include sc-typography-heading-l`
- `@include sc-typography-heading-m`
- `@include sc-typography-heading-s`
- `@include sc-typography-heading-xs`
- `@include sc-typography-heading-2xs`

**Text Mixins:**
- `@include sc-typography-text-2xl`
- `@include sc-typography-text-xl`
- `@include sc-typography-text-l`
- `@include sc-typography-text-m`
- `@include sc-typography-text-s`

**Link Mixins:**
- `@include sc-typography-link-l`
- `@include sc-typography-link-m`
- `@include sc-typography-link-s`

**Label Mixins:**
- `@include sc-typography-label-l`
- `@include sc-typography-label-m`
- `@include sc-typography-label-s`

### Available CSS Custom Properties

**Font Family:**
- `--sc-type-family-inter`
- `--sc-type-family-roboto`
- `--sc-type-family-sf-pro-text`

**Font Weights:**
- `--sc-type-weight-light` (300)
- `--sc-type-weight-regular` (400)
- `--sc-type-weight-semi-bold` (600)

**Font Sizes:**
- `--sc-type-size-s` (12px)
- `--sc-type-size-m` (14px)
- `--sc-type-size-l` (16px)
- `--sc-type-size-xl` (18px)
- `--sc-type-size-2xl` (20px)
- `--sc-type-size-3xl` (24px)
- `--sc-type-size-4xl` (28px)
- `--sc-type-size-5xl` (32px)
- `--sc-type-size-6xl` (40px)
- `--sc-type-size-7xl` (48px)
- `--sc-type-size-8xl` (56px)
- `--sc-type-size-9xl` (64px)
- `--sc-type-size-10xl` (72px)

**Line Heights:**
- `--sc-type-line-height-s` (16px)
- `--sc-type-line-height-m` (20px)
- `--sc-type-line-height-l` (24px)
- `--sc-type-line-height-xl` (26px)
- `--sc-type-line-height-2xl` (28px)
- `--sc-type-line-height-3xl` (32px)
- `--sc-type-line-height-4xl` (36px)
- `--sc-type-line-height-5xl` (40px)
- `--sc-type-line-height-6xl` (48px)
- `--sc-type-line-height-7xl` (56px)
- `--sc-type-line-height-8xl` (64px)
- `--sc-type-line-height-9xl` (72px)
- `--sc-type-line-height-10xl` (80px)

**Letter Spacing:**
- `--sc-type-letter-spacing-xs` (-1px)
- `--sc-type-letter-spacing-s` (-0.5px)
- `--sc-type-letter-spacing-none` (0px)

**Color Variables:**
- `--sc-color-text-primary`
- `--sc-color-text-secondary`
- `--sc-color-text-tertiary`
- `--sc-color-text-link`
- `--sc-color-text-link-hover`
- `--sc-color-text-link-pressed`
- `--sc-color-text-brand`
- `--sc-color-text-negative`
- `--sc-color-text-positive`
- `--sc-color-text-warning`
- `--sc-color-text-disabled`

---

## Accessibility

All semantic type tokens are designed with accessibility in mind:

- **Minimum font size**: 10px (Text/XS)
- **Recommended minimum**: 14px (Text/M) for body content
- **Line heights**: 1.4 to 1.6 ratio for optimal readability
- **Contrast**: All tokens work with both light and dark themes

### Best Practices

✅ **Do** use larger text sizes for important information  
✅ **Do** maintain sufficient line height for readability  
✅ **Do** use semi-bold weights for emphasis, not larger sizes alone  
✅ **Do** test your designs on mobile devices  

❌ **Don't** use text smaller than 10px  
❌ **Don't** use tight line heights (less than 1.3)  
❌ **Don't** rely on size alone for hierarchy – use weight and color too  

---

## Quick Reference

### Common Patterns

| Use Case | Recommended Token |
|----------|-------------------|
| **Page title** | `Heading/5XL` (Semi Bold) |
| **Section header** | `Heading/M` (Semi Bold) |
| **Card title** | `Heading/S` (Semi Bold) |
| **Body text** | `Text/L` (Regular) |
| **Small body text** | `Text/M` (Regular) |
| **Form label** | `Label/M` (Semi Bold) |
| **Button text** | `Label/M` (Semi Bold) |
| **Navigation link** | `Link/L` (Semi Bold) |
| **Inline link** | `Link/M` (Semi Bold) |
| **Caption** | `Text/S` (Regular) |
| **Fine print** | `Text/XS` (Regular) |

### Do's and Don'ts Summary

| ✅ Do | ❌ Don't |
|------|---------|
| Use semantic tokens for all typography | Use manual pixel values |
| Use responsive tokens for mobile | Assume desktop sizes work on mobile |
| Use semi-bold for emphasis | Use all caps or larger sizes unnecessarily |
| Test text on actual devices | Only check designs on desktop |
| Consider line height for readability | Use tight spacing |

---

## Need Help?

If you're unsure which type token to use:

1. **Identify the content type** – Is it a heading, body text, link, or label?
2. **Determine the importance** – Is it primary, secondary, or supporting content?
3. **Check the context** – Is it on desktop or mobile? In a card or full page?
4. **Choose the matching token** – Use the tables above to find the appropriate semantic token

> [!NOTE]
> When in doubt, start with standard tokens (`Text/L`, `Heading/M`, `Link/M`) and adjust based on visual hierarchy and emphasis needs.

---

**Last Updated:** December 2025  
**Design System:** Scale v1.0