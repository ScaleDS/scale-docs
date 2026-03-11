# Scale Design System
## Typography Documentation

**Version:** 3.0.0  
**Last Updated:** January 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Typography Philosophy](#typography-philosophy)
3. [Type System Architecture](#type-system-architecture)
4. [Font Families](#font-families)
5. [Type Scale](#type-scale)
6. [Semantic Typography](#semantic-typography)
7. [Responsive Typography](#responsive-typography)
8. [Accessibility](#accessibility)
9. [Usage Guidelines](#usage-guidelines)
10. [Implementation](#implementation)

---

## Overview

The Scale Design System uses a comprehensive, semantic typography system built on mathematical scales and responsive principles. This multi-tier approach separates primitive typographic properties from their functional applications, creating a flexible, maintainable system that scales across devices.

### Key Features

- **450+ typography variables** organized across 3 collections
- **Responsive scaling**: Automatic size adjustments between Desktop and Mobile
- **Multi-platform support**: Web (Desktop/Mobile) and App (iOS/Android)
- **Semantic naming**: Intent-based tokens that communicate purpose
- **Mathematical foundation**: Type scale based on consistent ratios
- **WCAG AA compliant**: All text meets readability standards

---

## Typography Philosophy

### Design Principles

**Hierarchy Through Scale**  
We use size, weight, and spacing to create clear visual hierarchy:
- Establish information architecture
- Guide users through content
- Emphasize important elements
- Create predictable patterns

**Readability First**  
Every typographic decision prioritizes legibility:
- Optimized for screen reading
- Appropriate line heights for text density
- Sufficient letter spacing for clarity
- Accessible contrast ratios

**Platform Awareness**  
Typography adapts to context:
- Larger sizes on desktop for comfortable reading
- Compact sizes on mobile for information density
- Native font stacks for optimal performance
- Platform-specific conventions (iOS, Android)

**Semantic Over Arbitrary**  
Rather than using sizes by their value (e.g., "14px"), we use them by their function (e.g., "Text/M/Regular"). This ensures:
- Consistent application across products
- Easy responsive scaling
- Clear intent in code
- Future-proof flexibility

---

## Type System Architecture

### Three-Tier System

```
Primitive Type (Base Layer)
    ↓
Semantic Type (Application Layer)
    ↓
Responsive Modes (Platform Layer)
```

**Primitive Type** defines raw typographic properties:
- Font families (Inter, SF Pro Text, Roboto)
- Font weights (Regular, Semi Bold, Light)
- Base sizes (S through 10XL)
- Line heights (S through 10XL)
- Letter spacing (None, XS, S)

**Semantic Type** combines primitives into named styles:
- Headings (5XL through 2XS)
- Text/Body copy (2XL through S)
- Links (L, M, S)
- Labels (L, M, S)

**Responsive Modes** adapt semantics to platforms:
- Web: Desktop (1440px+) / Mobile (393px-768px)
- App: iOS / Android

### Naming Convention

**Primitive Pattern:**  
`Property/Size`  
Examples: `Size/M`, `Weight/Semi Bold`, `Line Height/L`

**Semantic Pattern:**  
`Category/Size/Weight/Property`  
Examples: `Heading/3XL/Semi Bold/Size`, `Text/M/Regular/Line Height`

---

## Font Families

### Primary Typefaces

The Scale Design System uses different typefaces optimized for each platform to ensure the best reading experience.

#### Web Typography

**Inter** - Primary typeface for web interfaces
```
Font Family: Inter
Classification: Sans-serif
Optimized for: Screen reading, UI elements
Usage: All web text (Desktop & Mobile)
```

**Why Inter?**
- Designed specifically for computer screens
- Tall x-height for improved readability
- Excellent legibility at small sizes
- Wide language support
- Open source and freely available

#### iOS Typography

**SF Pro Text** - Native iOS system font
```
Font Family: SF Pro Text
Classification: Sans-serif
Optimized for: iOS devices, Apple ecosystem
Usage: All iOS app text
```

**Why SF Pro Text?**
- Native iOS typeface
- Optimized for Apple's displays
- Consistent with iOS design language
- Variable font technology
- Dynamic Type support

#### Android Typography

**Roboto** - Native Android system font
```
Font Family: Roboto
Classification: Sans-serif
Optimized for: Android devices, Material Design
Usage: All Android app text
```

**Why Roboto?**
- Native Android typeface
- Optimized for Google's Material Design
- Geometric and friendly appearance
- Wide device compatibility
- Excellent multi-language support

### Font Stack Implementation

```css
/* Web - Desktop & Mobile */
--font-family-main: 'Inter', -apple-system, BlinkMacSystemFont, 
  'Segoe UI', Helvetica, Arial, sans-serif;

/* iOS App */
--font-family-ios: 'SF Pro Text', -apple-system, sans-serif;

/* Android App */
--font-family-android: 'Roboto', sans-serif;
```

---

## Type Scale

### Base Type Scale

Our type scale is built on a mathematical foundation using consistent ratios to create harmonious sizing relationships.

#### Primitive Sizes

| Token | Desktop Size | Mobile Size | Usage |
|-------|-------------|-------------|-------|
| `Size/S` | 12px | 12px | Captions, labels |
| `Size/M` | 14px | 14px | Body text (base) |
| `Size/L` | 16px | 16px | Emphasized body |
| `Size/XL` | 18px | 18px | Large body text |
| `Size/2XL` | 20px | 18px | Small headings |
| `Size/3XL` | 24px | 20px | Medium headings |
| `Size/4XL` | 28px | 24px | - |
| `Size/5XL` | 32px | 28px | Large headings |
| `Size/6XL` | 40px | 32px | Display headings |
| `Size/7XL` | 48px | 40px | Hero headings |
| `Size/8XL` | 56px | 48px | Extra large display |
| `Size/9XL` | 64px | 56px | Marketing display |
| `Size/10XL` | 80px | 64px | Massive display |

**Base Size:** 14px (0.875rem)  
**Scale Ratio:** ~1.125 - 1.25 (varies by range)

### Line Heights

Optimized line heights create comfortable reading rhythm and proper text density.

| Token | Value | Ratio | Usage |
|-------|-------|-------|-------|
| `Line Height/S` | 16px | 1.33× | Tight spacing (labels) |
| `Line Height/M` | 20px | 1.43× | Body text standard |
| `Line Height/L` | 24px | 1.5× | Comfortable reading |
| `Line Height/XL` | 28px | 1.56× | Loose body text |
| `Line Height/2XL` | 28px | 1.4× | Small headings |
| `Line Height/3XL` | 32px | 1.33× | Medium headings |
| `Line Height/4XL` | 36px | 1.29× | - |
| `Line Height/5XL` | 40px | 1.25× | Large headings |
| `Line Height/6XL` | 48px | 1.2× | Display headings |
| `Line Height/7XL` | 56px | 1.17× | Hero headings |
| `Line Height/8XL` | 64px | 1.14× | Extra large display |
| `Line Height/9XL` | 72px | 1.125× | Marketing display |
| `Line Height/10XL` | 88px | 1.1× | Massive display |

**Body Text:** 1.43 - 1.5 line height ratio  
**Headings:** 1.1 - 1.33 line height ratio

### Letter Spacing

Subtle tracking adjustments improve readability at different sizes.

| Token | Value | Usage |
|-------|-------|-------|
| `Letter Spacing/None` | 0px | Default (most text) |
| `Letter Spacing/XS` | -0.25px | Tighter tracking |
| `Letter Spacing/S` | -0.5px | Display headings |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `Weight/Light` | 300 | Light emphasis headings |
| `Weight/Regular` | 400 | Body text, default |
| `Weight/Semi Bold` | 600 | Headings, emphasis |

---

## Semantic Typography

### Heading Styles

Headings establish hierarchy and structure content. Scale offers 10 heading levels from 5XL (largest) to 2XS (smallest).

#### Heading Scale Overview

| Style | Desktop | Mobile | Weight | Use Case |
|-------|---------|--------|--------|----------|
| **5XL** | 80px / 88px | 64px / 72px | Semi Bold | Hero sections, landing pages |
| **4XL** | 64px / 72px | 56px / 64px | Semi Bold | Primary page titles |
| **3XL** | 56px / 64px | 48px / 56px | Semi Bold | Section titles |
| **2XL** | 48px / 56px | 40px / 48px | Semi Bold | Subsection titles |
| **XL** | 40px / 48px | 32px / 40px | Semi Bold | Card titles, modals |
| **L** | 32px / 40px | 28px / 36px | Semi Bold | Component headings |
| **M** | 24px / 32px | 20px / 28px | Semi Bold | Subheadings |
| **S** | 20px / 28px | 18px / 24px | Semi Bold | Small headings |
| **XS** | 16px / 24px | 16px / 24px | Semi Bold | Tiny headings |
| **2XS** | 14px / 20px | 14px / 20px | Semi Bold | Micro headings |

*Format: Font Size / Line Height*

#### Heading Variants

Each heading size is available in three weights:

**Light (300)**
- Subtle, elegant emphasis
- Marketing and editorial content
- Large display sizes

**Regular (400)**
- Standard weight
- Balanced appearance
- Multi-purpose headings

**Semi Bold (600)** *(Primary)*
- Strong emphasis
- Clear hierarchy
- UI headings and titles

#### Heading Token Structure

```
Heading/[Size]/[Weight]/[Property]
```

**Examples:**
- `Heading/3XL/Semi Bold/Size` → 56px (Desktop), 48px (Mobile)
- `Heading/XL/Regular/Line Height` → 48px (Desktop), 40px (Mobile)
- `Heading/M/Light/Letter Spacing` → -0.25px

### Text (Body) Styles

Body text styles are optimized for extended reading and content consumption.

#### Text Scale Overview

| Style | Desktop | Mobile | Weight | Use Case |
|-------|---------|--------|--------|----------|
| **2XL** | 20px / 28px | 18px / 28px | Regular | Lead paragraphs, intro text |
| **XL** | 18px / 28px | 18px / 28px | Regular | Large body text |
| **L** | 16px / 24px | 16px / 24px | Regular | Comfortable reading |
| **M** | 14px / 20px | 14px / 20px | Regular | Standard body (base) |
| **S** | 12px / 16px | 12px / 16px | Regular | Small text, captions |

*Format: Font Size / Line Height*

#### Text Variants

Each text size is available in two weights:

**Regular (400)** *(Primary)*
- Body paragraphs
- Standard content
- Optimal for long-form reading

**Semi Bold (600)**
- Emphasized text
- Important information
- Strong inline emphasis

#### Text Token Structure

```
Text/[Size]/[Weight]/[Property]
```

**Examples:**
- `Text/M/Regular/Size` → 14px (base body size)
- `Text/L/Regular/Line Height` → 24px
- `Text/2XL/Semi Bold/Letter Spacing` → 0px

### Link Styles

Link styles are optimized for clickable text with proper touch targets.

#### Link Scale Overview

| Style | Desktop | Mobile | Weight | Use Case |
|-------|---------|--------|--------|----------|
| **L** | 16px / 24px | 16px / 24px | Semi Bold | Large CTAs, prominent links |
| **M** | 14px / 20px | 14px / 20px | Semi Bold | Standard links (base) |
| **S** | 12px / 16px | 12px / 16px | Semi Bold | Small links, footnotes |

*Format: Font Size / Line Height*

#### Link Variants

**Regular (400)**
- Inline text links
- Subtle navigation
- Low-emphasis links

**Semi Bold (600)** *(Primary)*
- Standalone links
- CTA links
- Navigation links

### Label Styles

Labels are used for form elements, buttons, and UI components.

#### Label Scale Overview

| Style | Desktop | Mobile | Weight | Use Case |
|-------|---------|--------|--------|----------|
| **L** | 16px / 24px | 16px / 24px | Semi Bold | Large buttons, form labels |
| **M** | 14px / 20px | 14px / 20px | Semi Bold | Standard labels (base) |
| **S** | 12px / 16px | 12px / 16px | Semi Bold | Small labels, tags |

*Format: Font Size / Line Height*

All labels use **Semi Bold (600)** weight for clarity and emphasis in UI contexts.

---

## Responsive Typography

### Desktop Mode (1440px+)

Desktop typography prioritizes comfortable reading with generous spacing:
- Larger base font size
- More vertical rhythm
- Comfortable line lengths (60-90 characters)
- Spacious headings

**Default Context:**
- Web applications on desktop screens
- Large tablets in landscape
- Desktop websites

### Mobile Mode (393px - 768px)

Mobile typography optimizes for smaller screens:
- Slightly smaller font sizes
- Tighter line heights
- Information density
- Touch-friendly targets

**Default Context:**
- Smartphones
- Small tablets
- Mobile web browsers

### Platform-Specific Modes

#### iOS Mode

Uses SF Pro Text with iOS-specific optimizations:
- Dynamic Type support
- SF Symbols compatibility
- iOS design language alignment
- VoiceOver optimization

#### Android Mode

Uses Roboto with Material Design conventions:
- Material Design typography scale
- Android accessibility features
- Roboto font optimizations
- TalkBack support

### Breakpoint Behavior

Typography automatically scales between modes based on viewport:

```
Mobile:  < 768px
Tablet:  768px - 1024px
Desktop: 1024px+
Large:   1440px+
```

**Scaling Strategy:**
- Fluid scaling between breakpoints
- No jarring jumps
- Maintains readability at all sizes
- Preserves visual hierarchy

---

## Accessibility

### WCAG Compliance

All typography in the Scale Design System meets **WCAG 2.1 AA** standards for readability.

#### Minimum Text Sizes

- **Body text**: 14px minimum (0.875rem)
- **Small text**: 12px minimum (0.75rem)
- **Touch targets**: 44px × 44px minimum

#### Contrast Requirements

When paired with Scale's color system:
- **Normal text (<18px)**: 4.5:1 minimum contrast
- **Large text (≥18px)**: 3:1 minimum contrast
- **UI components**: 3:1 minimum contrast

### Line Length

Optimal line lengths improve reading comprehension:

**Ideal Range:** 50-75 characters per line  
**Maximum:** 90 characters per line  
**Minimum:** 45 characters per line

### Line Height

Appropriate line height prevents text from feeling cramped:

**Body text:** 1.4 - 1.6 (ideal: 1.5)  
**Headings:** 1.1 - 1.3  
**Tight spacing:** 1.2 minimum

### Font Size for Accessibility

Users can zoom text up to 200% without loss of content or functionality:
- Use relative units (rem, em)
- Never use fixed pixel heights
- Allow text reflow
- Test with browser zoom

### Screen Reader Considerations

- Use semantic HTML heading levels
- Don't skip heading levels
- Provide adequate heading hierarchy
- Use proper text vs. display text

---

## Usage Guidelines

### Do's

**✓ Use semantic type styles** consistently  
Apply `Heading/M/Semi Bold` instead of manually setting 24px / 600 weight.

**✓ Maintain hierarchy**  
Don't use Heading/S after Heading/2XL without intermediate levels.

**✓ Respect responsive scaling**  
Let Desktop/Mobile modes handle size adjustments automatically.

**✓ Use appropriate weights**  
Body text = Regular, Headings = Semi Bold, Emphasis = Light or Semi Bold.

**✓ Test at all breakpoints**  
Verify typography looks good on mobile, tablet, and desktop.

**✓ Keep line lengths readable**  
Constrain content width to 60-90 characters.

### Don'ts

**✗ Don't skip heading levels**  
Going from H1 to H3 breaks accessibility and hierarchy.

**✗ Don't use ALL CAPS in CSS**  
Use proper uppercase in content or design, not `text-transform: uppercase`.

**✗ Don't override line heights arbitrarily**  
System line heights are optimized for readability.

**✗ Don't use italic for body text**  
Italic is harder to read in long-form content.

**✗ Don't mix too many weights**  
Stick to Regular and Semi Bold for consistency.

**✗ Don't use color alone for emphasis**  
Combine color with weight, size, or other properties.

### Component-Specific Guidance

**Buttons:**
- Use `Label/M/Semi Bold` or `Label/L/Semi Bold`
- Never use Regular weight in buttons
- Maintain minimum 44px touch target

**Form Labels:**
- Use `Label/M/Semi Bold` or `Label/S/Semi Bold`
- Place labels above inputs (not beside)
- Ensure sufficient spacing

**Card Titles:**
- Use `Heading/M/Semi Bold` or `Heading/L/Semi Bold`
- Maintain visual hierarchy with card content
- Don't exceed 2-3 lines

**Body Content:**
- Use `Text/M/Regular` as default
- Use `Text/L/Regular` for comfortable reading
- Use `Text/2XL/Regular` for lead paragraphs

**Captions & Metadata:**
- Use `Text/S/Regular`
- Keep secondary to main content
- Pair with muted colors

---

## Implementation

### CSS Custom Properties

```css
/* Primitive Type Tokens */
:root {
  /* Font Families */
  --font-family-inter: 'Inter', sans-serif;
  --font-family-sf-pro: 'SF Pro Text', -apple-system, sans-serif;
  --font-family-roboto: 'Roboto', sans-serif;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semi-bold: 600;
  
  /* Font Sizes */
  --font-size-s: 0.75rem;    /* 12px */
  --font-size-m: 0.875rem;   /* 14px */
  --font-size-l: 1rem;       /* 16px */
  --font-size-xl: 1.125rem;  /* 18px */
  --font-size-2xl: 1.25rem;  /* 20px */
  --font-size-3xl: 1.5rem;   /* 24px */
  /* ... etc */
  
  /* Line Heights */
  --line-height-s: 1rem;     /* 16px */
  --line-height-m: 1.25rem;  /* 20px */
  --line-height-l: 1.5rem;   /* 24px */
  /* ... etc */
}

/* Semantic Type Tokens - Desktop (default) */
:root {
  /* Headings */
  --heading-3xl-size: 3.5rem;        /* 56px */
  --heading-3xl-line-height: 4rem;   /* 64px */
  --heading-3xl-weight: var(--font-weight-semi-bold);
  --heading-3xl-spacing: -0.025rem;  /* -0.25px */
  
  /* Body Text */
  --text-m-size: 0.875rem;           /* 14px */
  --text-m-line-height: 1.25rem;     /* 20px */
  --text-m-weight: var(--font-weight-regular);
  --text-m-spacing: 0;
}

/* Mobile Overrides */
@media (max-width: 768px) {
  :root {
    --heading-3xl-size: 3rem;        /* 48px */
    --heading-3xl-line-height: 3.5rem; /* 56px */
  }
}

/* Usage */
.heading-large {
  font-family: var(--font-family-inter);
  font-size: var(--heading-3xl-size);
  line-height: var(--heading-3xl-line-height);
  font-weight: var(--heading-3xl-weight);
  letter-spacing: var(--heading-3xl-spacing);
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'sf-pro': ['SF Pro Text', '-apple-system', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        // Headings
        'heading-5xl': ['5rem', { lineHeight: '5.5rem', fontWeight: '600' }],
        'heading-4xl': ['4rem', { lineHeight: '4.5rem', fontWeight: '600' }],
        'heading-3xl': ['3.5rem', { lineHeight: '4rem', fontWeight: '600' }],
        'heading-2xl': ['3rem', { lineHeight: '3.5rem', fontWeight: '600' }],
        'heading-xl': ['2.5rem', { lineHeight: '3rem', fontWeight: '600' }],
        'heading-l': ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }],
        'heading-m': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'heading-s': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        
        // Body Text
        'text-2xl': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'text-xl': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'text-l': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'text-m': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'text-s': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        'semi-bold': '600',
      },
    },
  },
  plugins: [],
}
```

### React/TypeScript

```typescript
// typography.ts
export const typography = {
  heading: {
    '5xl': {
      fontSize: '5rem',
      lineHeight: '5.5rem',
      fontWeight: 600,
      letterSpacing: '-0.031rem',
    },
    '3xl': {
      fontSize: '3.5rem',
      lineHeight: '4rem',
      fontWeight: 600,
      letterSpacing: '-0.025rem',
    },
    m: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.016rem',
    },
  },
  text: {
    m: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400,
      letterSpacing: '0',
    },
    l: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0',
    },
  },
} as const;

// Heading.tsx
import { typography } from './typography';

const Heading = ({ level = '3xl', children }) => {
  const styles = typography.heading[level];
  
  return (
    <h1 style={{
      fontSize: styles.fontSize,
      lineHeight: styles.lineHeight,
      fontWeight: styles.fontWeight,
      letterSpacing: styles.letterSpacing,
    }}>
      {children}
    </h1>
  );
};
```

### Figma Integration

1. **Use Semantic Type Styles**
   - Apply text styles like `Heading/3XL/Semi Bold`
   - Don't manually set font properties

2. **Switch Between Modes**
   - Desktop: For desktop/web designs
   - Mobile: For mobile designs
   - iOS: For iOS app designs
   - Android: For Android app designs

3. **Leverage Variables**
   - Typography variables automatically update
   - Changes propagate across all instances

4. **Component Text Properties**
   - Use text component properties
   - Expose typography as component variants

---

## Best Practices

### 1. Establish Hierarchy

Use size and weight to create clear information architecture:
- One H1 per page (Heading/4XL or 5XL)
- H2 for major sections (Heading/3XL or 2XL)
- H3 for subsections (Heading/XL or L)
- Body text for content (Text/M or L)

### 2. Maintain Consistency

Use the same text styles for the same purposes:
- Card titles = Heading/M/Semi Bold
- Body paragraphs = Text/M/Regular
- Button labels = Label/M/Semi Bold
- Form labels = Label/M/Semi Bold

### 3. Optimize for Readability

Consider reading context:
- Long-form content: Text/L/Regular with wider line height
- Dense UI: Text/M/Regular with standard spacing
- Marketing: Larger sizes with more white space

### 4. Respect Platform Conventions

Use appropriate fonts for each platform:
- Web: Inter
- iOS: SF Pro Text
- Android: Roboto

### 5. Test Thoroughly

Verify typography across:
- Different screen sizes
- Various content lengths
- Multiple languages
- Accessibility tools

---

## Typography Token Quick Reference

### Most Commonly Used Styles

**Headings:**
- `Heading/3XL/Semi Bold` - Page titles
- `Heading/XL/Semi Bold` - Section headings
- `Heading/M/Semi Bold` - Card/component titles

**Body Text:**
- `Text/M/Regular` - Standard body (base)
- `Text/L/Regular` - Comfortable reading
- `Text/S/Regular` - Captions, metadata

**UI Elements:**
- `Label/M/Semi Bold` - Buttons, form labels
- `Link/M/Semi Bold` - Standard links

---

## Changelog

### Version 3.0.0 (Current)
- Complete responsive typography system
- Multi-platform support (Web, iOS, Android)
- 450+ typography variables
- Semantic token architecture
- Desktop and Mobile responsive modes
- Three weight variants for headings
- Comprehensive link and label styles

---

## Resources

- **Figma File:** Scale Design System 3.0.0
- **Font Files:** Inter, SF Pro Text, Roboto
- **Accessibility Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Type Scale Calculator:** [Type-Scale.com](https://type-scale.com/)
- **Documentation:** [Scale Design System Documentation](https://scale.design)

---

## Support

For questions about typography usage, responsive scaling, or token proposals:
- Create an issue in the Scale Design System repository
- Contact the design system team
- Review component-specific documentation

---

*Built with care by the Scale Design System team*