# Semantic Type System

A comprehensive guide to using semantic type tokens in the Scale Design System.

---

## What are Semantic Type Tokens?

Semantic type tokens are named typography variables that describe **what the text is used for**, not **what it looks like**. Instead of manually setting font sizes, weights, and line heights, you use meaningful names like `Heading/XL` or `Text/M`.

### Why Use Semantic Type Tokens?

✅ **Consistency** – Typography is used correctly across all designs  
✅ **Responsiveness** – Automatically adapts to different screen sizes  
✅ **Maintainability** – Update typography in one place, changes apply everywhere  
✅ **Clear Communication** – Designers and developers speak the same language  
✅ **Accessibility** – Built-in line heights and spacing for readability

> [!IMPORTANT]
> Always use semantic type tokens instead of primitive values (like `Size/40px` or `Weight/Regular`) in your designs. Semantic tokens ensure your typography works correctly across different contexts and breakpoints.

---

## Type Categories

Our semantic type system is organized into five main categories:

1. **Heading** – For page titles and section headers
2. **Text** – For body content and paragraphs
3. **Link** – For hyperlinks and interactive text
4. **Label** – For form labels and UI labels
5. **Breakpoint** – For responsive design

---

## Heading Tokens

Heading tokens are used for titles, headers, and important content hierarchy.

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

---

## Weight Options

All semantic type tokens support multiple weight options:

- **Light** – For subtle, decorative text
- **Regular** – For standard body content
- **Semi Bold** – For emphasis and headings

---

## Usage Guidelines

### Heading Usage

> [!TIP]
> **Do** use `Heading/5XL` for main page titles to establish clear hierarchy.

> [!TIP]
> **Do** use `Heading/M` for section headers in cards and containers.

> [!WARNING]
> **Don't** use `Heading/5XL` for body text – it's too large and hard to read in paragraphs.

### Text Usage

> [!TIP]
> **Do** use `Text/L` for main body content to ensure readability.

> [!TIP]
> **Do** use `Text/M` for secondary information and supporting text.

> [!WARNING]
> **Don't** use `Text/XS` for important information – it may be too small for some users.

### Link Usage

> [!TIP]
> **Do** use `Link/M` for standard hyperlinks in body text.

> [!TIP]
> **Do** use `Link/L` for navigation links in menus and headers.

### Label Usage

> [!TIP]
> **Do** use `Label/M` for form input labels.

> [!TIP]
> **Do** use `Label/S` for tags, badges, and small UI elements.

---

## CSS Implementation

### Using CSS Custom Properties

```css
/* Heading example */
h1 {
  font-family: var(--sc-font-family-main);
  font-size: var(--sc-heading-5xl-regular-size);
  line-height: var(--sc-heading-5xl-regular-line-height);
  font-weight: 400; /* Regular weight */
  letter-spacing: var(--sc-heading-5xl-regular-letter-spacing);
}

/* Text example */
p {
  font-family: var(--sc-font-family-main);
  font-size: var(--sc-text-l-regular-size);
  line-height: var(--sc-text-l-regular-line-height);
  font-weight: 400; /* Regular weight */
}

/* Link example */
a {
  font-family: var(--sc-font-family-main);
  font-size: var(--sc-link-m-regular-size);
  line-height: var(--sc-link-m-regular-line-height);
  font-weight: 600; /* Semi Bold */
}

/* Label example */
label {
  font-family: var(--sc-font-family-main);
  font-size: var(--sc-label-m-semi-bold-size);
  line-height: var(--sc-label-m-semi-bold-line-height);
  font-weight: 600; /* Semi Bold */
}
```

### Responsive Typography

For responsive designs, use media queries to switch between desktop and mobile tokens:

```css
/* Responsive heading */
h1 {
  font-family: var(--sc-font-family-main);
  font-size: var(--sc-heading-5xl-regular-size);
  line-height: var(--sc-heading-5xl-regular-line-height);
  font-weight: 400;
  letter-spacing: var(--sc-heading-5xl-regular-letter-spacing);
}

@media (max-width: 768px) {
  h1 {
    font-size: var(--sc-heading-5xl-regular-size); /* Mobile size */
    line-height: var(--sc-heading-5xl-regular-line-height); /* Mobile line height */
  }
}
```

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