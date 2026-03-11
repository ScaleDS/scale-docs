# Scale Design System
## Border Documentation

**Version:** 3.0.0  
**Last Updated:** January 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Border Philosophy](#border-philosophy)
3. [Border System Architecture](#border-system-architecture)
4. [Border Colors](#border-colors)
5. [Border Radius](#border-radius)
6. [Border Width](#border-width)
7. [Usage Guidelines](#usage-guidelines)
8. [Accessibility](#accessibility)
9. [Implementation](#implementation)
10. [Best Practices](#best-practices)

---

## Overview

The Scale Design System provides a comprehensive border system that combines semantic colors, flexible radius values, and standardized widths to create consistent, accessible interfaces. Borders define visual boundaries, create hierarchy, and communicate interactive states.

### Key Features

- **31 border variables** across 2 collections
- **Semantic color tokens**: 12 purpose-driven border colors with light/dark modes
- **11 radius values**: From sharp corners (0px) to fully circular (999px)
- **7 width values**: Precise control from hairline (0.5px) to bold (8px)
- **State-aware**: Dedicated tokens for focus, hover, selected, and disabled states
- **Accessibility-first**: All border colors meet WCAG AA contrast standards

---

## Border Philosophy

### Design Principles

**Semantic Purpose Over Appearance**  
Borders communicate meaning and function:
- Define containers and regions
- Indicate interactive states
- Communicate validation status
- Create visual hierarchy
- Guide user attention

**Consistency Creates Clarity**  
Systematic border application ensures:
- Predictable user experiences
- Clear visual language
- Easier maintenance
- Scalable design patterns

**Context-Aware Styling**  
Borders adapt to their environment:
- Theme-aware colors (light/dark modes)
- Proportional radius to element size
- Appropriate width for visual weight
- Harmonious with surrounding elements

---

## Border System Architecture

### Two-Layer System

```
Semantic Border Colors (Application Layer)
    ↓
Primitive Values (Base Layer)
    ↓
Component Implementation
```

**Semantic Border Colors** define purpose-driven border colors that automatically adapt to light and dark themes. These reference primitive color tokens and communicate intent.

**Primitive Values** are the foundational measurements:
- Border Radius: Fixed pixel values (4px, 8px, 12px, etc.)
- Border Width: Precise measurements (0.5px, 1px, 1.5px, etc.)

### Naming Convention

**Border Color Pattern:**  
`Border/Purpose`  
Examples: `Border/Primary`, `Border/Focus`, `Border/Negative`

**Border Radius Pattern:**  
`Border Radius/Size`  
Examples: `Border Radius/S`, `Border Radius/XL`, `Border Radius/Pill`

**Border Width Pattern:**  
`Border Width/Size`  
Examples: `Border Width/S`, `Border Width/M`, `Border Width/L`

---

## Border Colors

Semantic border colors automatically adapt between light and dark themes, ensuring optimal contrast and accessibility.

### Neutral Borders

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `Border/Primary` | `Neutral/300` `#B3B3B3` | `Neutral/700` `#4C4C4C` | Standard borders, default dividers |
| `Border/Subtle` | `Neutral/100` `#E5E5E5` | `Neutral/750` `#404040` | Subtle dividers, light separators |
| `Border/Inverse` | `Neutral/50` `#F2F2F2` | `Neutral/800` `#333333` | Borders on dark backgrounds |
| `Border/Mono` | `Neutral/900` `#1A1A1A` | `Neutral/50` `#F2F2F2` | High-contrast monochrome borders |

### Interactive State Borders

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `Border/Selected` | `Blue/500` `#3355FF` | `Blue/400` `#5A76FF` | Selected items, active states |
| `Border/Focus` | `Blue/500` `#3355FF` | `Blue/400` `#5A76FF` | Keyboard focus indicators |
| `Border/Disabled` | `Neutral/200` `#CCCCCC` | `Neutral/800` `#333333` | Disabled form elements |

### Brand & Accent Borders

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `Border/Brand` | `Brand/500` `#3355FF` | `Brand/400` `#5A76FF` | Brand-emphasized elements |
| `Border/Info` | `Blue/500` `#3355FF` | `Blue/400` `#5A76FF` | Informational messages |

### Feedback Borders

| Token | Light Mode | Dark Mode | Purpose |
|-------|-----------|-----------|---------|
| `Border/Positive` | `Green/500` `#009933` | `Green/400` `#31AD5A` | Success states, valid inputs |
| `Border/Warning` | `Orange/500` `#F27F0D` | `Orange/400` `#F4983B` | Warning states, caution messages |
| `Border/Negative` | `Red/500` `#E61A1A` | `Red/400` `#EB4646` | Error states, invalid inputs |

---

## Border Radius

Border radius values create visual cohesion and communicate brand personality through corner rounding.

### Radius Scale

| Token | Value | Usage | Visual Feel |
|-------|-------|-------|-------------|
| `Border Radius/None` | `0px` | Sharp corners for precision | Professional, technical, modern luxury |
| `Border Radius/XS` | `4px` | Subtle rounding | Clean, minimal, refined |
| `Border Radius/S` | `8px` | Moderate rounding | Friendly, approachable, modern |
| `Border Radius/M` | `12px` | Balanced rounding | Warm, inviting, comfortable |
| `Border Radius/L` | `16px` | Generous rounding | Playful, friendly, casual |
| `Border Radius/XL` | `24px` | Strong rounding | Bold, distinctive, energetic |
| `Border Radius/2XL` | `32px` | Very round | Soft, organic, welcoming |
| `Border Radius/3XL` | `40px` | Extra round | Highly organic, flowing |
| `Border Radius/4XL` | `48px` | Large cards/panels | Spacious, open, modern |
| `Border Radius/5XL` | `56px` | Hero elements | Statement pieces |
| `Border Radius/6XL` | `64px` | Extra large elements | Dramatic, memorable |
| `Border Radius/Pill` | `999px` | Fully rounded ends | Tags, badges, toggles |

### Radius Guidelines by Component

**Buttons:**
- Default: `Border Radius/S` (8px) - Friendly, clickable
- Pill buttons: `Border Radius/Pill` (999px) - Distinctive CTAs
- Icon buttons: `Border Radius/S` or `Border Radius/M` - Balanced

**Cards:**
- Small cards: `Border Radius/S` (8px)
- Medium cards: `Border Radius/M` (12px)
- Large cards: `Border Radius/L` (16px)
- *Rule of thumb: Larger cards can handle more pronounced rounding*

**Form Elements:**
- Inputs: `Border Radius/S` (8px) - Standard, professional
- Dropdowns: `Border Radius/S` (8px) - Consistent with inputs
- Checkboxes: `Border Radius/XS` (4px) - Subtle refinement
- Radio buttons: `Border Radius/Pill` (999px) - Circular by nature

**Avatars & Images:**
- Square avatars: `Border Radius/S` or `Border Radius/M`
- Circular avatars: `Border Radius/Pill` (999px)
- Product images: `Border Radius/S` or `Border Radius/M`

**Badges & Tags:**
- Badges: `Border Radius/Pill` (999px) - Rounded ends
- Tags: `Border Radius/S` (8px) or `Border Radius/M` (12px)

**Modals & Panels:**
- Modals: `Border Radius/M` (12px) or `Border Radius/L` (16px)
- Side panels: `Border Radius/None` (0px) or `Border Radius/S` (8px)
- Popovers: `Border Radius/S` (8px)

### Nested Element Radius

**Optical Principle**: Nested elements should have progressively smaller border radius to maintain visual harmony.

**Formula**: Inner radius ≈ Outer radius - Padding

**Example:**
```
Card border radius: 12px
Card padding: 16px
Nested image radius: 8px (approximately 12px - 4px)
```

This creates visual consistency and prevents awkward corner gaps.

---

## Border Width

Border width values provide precise control over visual weight and hierarchy.

### Width Scale

| Token | Value | Usage |
|-------|-------|-------|
| `Border Width/None` | `0px` | Remove borders entirely |
| `Border Width/XS` | `0.5px` | Hairline separators, subtle dividers |
| `Border Width/S` | `1px` | **Default border**, most UI elements |
| `Border Width/M` | `1.5px` | Emphasized borders, hover states |
| `Border Width/L` | `2px` | Strong borders, selected states |
| `Border Width/XL` | `4px` | Focus indicators, very strong emphasis |
| `Border Width/2XL` | `8px` | Decorative borders, brand emphasis |

### Width Guidelines by Context

**Default Elements:**
- Standard borders: `Border Width/S` (1px)
- Dividers: `Border Width/S` (1px)
- Card outlines: `Border Width/S` (1px)

**Interactive States:**
- Hover: `Border Width/S` (1px) or `Border Width/M` (1.5px)
- Selected: `Border Width/M` (1.5px) or `Border Width/L` (2px)
- Focus: `Border Width/L` (2px) or `Border Width/XL` (4px)

**Form Validation:**
- Default: `Border Width/S` (1px)
- Error: `Border Width/M` (1.5px) or `Border Width/L` (2px)
- Success: `Border Width/M` (1.5px)

**Emphasis Levels:**
- Subtle: `Border Width/XS` (0.5px)
- Standard: `Border Width/S` (1px)
- Emphasized: `Border Width/M` (1.5px) to `Border Width/L` (2px)
- Strong: `Border Width/XL` (4px)
- Decorative: `Border Width/2XL` (8px)

---

## Usage Guidelines

### Do's

**✓ Use semantic border colors** for all UI implementation  
Apply `Border/Focus` instead of manually setting `#3355FF`.

**✓ Maintain consistent radius within components**  
All corners of an element should use the same radius value unless intentionally asymmetric.

**✓ Scale radius proportionally**  
Larger elements can handle larger border radius values.

**✓ Use appropriate widths for states**  
Focus states should be more prominent (2-4px) than default borders (1px).

**✓ Consider nested element hierarchy**  
Inner elements should have smaller radius than their containers.

**✓ Test borders in both light and dark modes**  
Semantic tokens automatically adapt, but verify visual quality.

### Don'ts

**✗ Don't mix radius values randomly**  
Establish a consistent radius scale and stick to it.

**✗ Don't use primitive colors directly**  
Always use semantic border color tokens like `Border/Primary`.

**✗ Don't use excessive border widths**  
Borders thicker than 4px should be used sparingly and intentionally.

**✗ Don't apply different radius to different corners** (except intentionally)  
Asymmetric radius creates visual distortion and feels broken.

**✗ Don't ignore container/content relationship**  
Images with rounded corners in square containers look awkward.

**✗ Don't use border color alone for validation**  
Combine with icons, text, or other visual indicators.

### Component-Specific Guidance

**Buttons:**
```css
border: 1px solid var(--border-primary);
border-radius: 8px; /* Border Radius/S */
```
- Hover: Increase to `Border Width/M` (1.5px) or change color
- Focus: Use `Border/Focus` with `Border Width/XL` (4px)
- Disabled: Use `Border/Disabled` with `Border Width/S` (1px)

**Form Inputs:**
```css
border: 1px solid var(--border-primary);
border-radius: 8px; /* Border Radius/S */
```
- Focus: `Border/Focus` with `Border Width/L` (2px)
- Error: `Border/Negative` with `Border Width/M` (1.5px)
- Success: `Border/Positive` with `Border Width/M` (1.5px)
- Disabled: `Border/Disabled` with `Border Width/S` (1px)

**Cards:**
```css
border: 1px solid var(--border-subtle);
border-radius: 12px; /* Border Radius/M */
```
- Hover: Change to `Border/Primary` or add shadow
- Selected: Use `Border/Selected` with `Border Width/L` (2px)

**Dividers:**
```css
border-top: 1px solid var(--border-subtle);
```
- Use `Border Width/S` (1px) or `Border Width/XS` (0.5px)
- Horizontal dividers: `border-top` or `border-bottom`
- Vertical dividers: `border-left` or `border-right`

---

## Accessibility

### WCAG Compliance

All border colors meet **WCAG 2.1 AA** standards when paired with Scale's background colors:
- **UI Components**: 3:1 minimum contrast ratio
- **Focus Indicators**: Must be clearly visible with 3:1 contrast

### Focus Indicators

**Keyboard navigation requires clear focus states:**
- Use `Border/Focus` color token
- Minimum `Border Width/L` (2px) or `Border Width/XL` (4px)
- Ensure 3:1 contrast with background
- Never remove focus outlines without providing alternative indicators

**Example:**
```css
button:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}
```

### Touch Targets

Borders contribute to touch target size:
- Minimum 44px × 44px touch target (including border)
- Ensure borders don't make targets too small
- Consider border width in spacing calculations

### Border Radius Accessibility

- Rounded corners improve scannability and reduce visual harshness
- Extreme radius (>24px) can make text harder to read in small containers
- Ensure sufficient padding between content and rounded edges

---

## Implementation

### CSS Custom Properties

```css
/* Border Color Tokens */
:root {
  /* Neutral Borders */
  --border-primary: #B3B3B3;
  --border-subtle: #E5E5E5;
  --border-inverse: #F2F2F2;
  
  /* State Borders */
  --border-selected: #3355FF;
  --border-focus: #3355FF;
  --border-disabled: #CCCCCC;
  
  /* Feedback Borders */
  --border-positive: #009933;
  --border-warning: #F27F0D;
  --border-negative: #E61A1A;
}

/* Dark Mode */
[data-theme="dark"] {
  --border-primary: #4C4C4C;
  --border-subtle: #404040;
  --border-inverse: #333333;
  --border-selected: #5A76FF;
  --border-focus: #5A76FF;
  --border-disabled: #333333;
  --border-positive: #31AD5A;
  --border-warning: #F4983B;
  --border-negative: #EB4646;
}

/* Border Radius Tokens */
:root {
  --border-radius-none: 0px;
  --border-radius-xs: 4px;
  --border-radius-s: 8px;
  --border-radius-m: 12px;
  --border-radius-l: 16px;
  --border-radius-xl: 24px;
  --border-radius-2xl: 32px;
  --border-radius-3xl: 40px;
  --border-radius-4xl: 48px;
  --border-radius-5xl: 56px;
  --border-radius-6xl: 64px;
  --border-radius-pill: 999px;
}

/* Border Width Tokens */
:root {
  --border-width-none: 0px;
  --border-width-xs: 0.5px;
  --border-width-s: 1px;
  --border-width-m: 1.5px;
  --border-width-l: 2px;
  --border-width-xl: 4px;
  --border-width-2xl: 8px;
}

/* Usage Examples */
.card {
  border: var(--border-width-s) solid var(--border-subtle);
  border-radius: var(--border-radius-m);
}

.button {
  border: var(--border-width-s) solid var(--border-primary);
  border-radius: var(--border-radius-s);
}

.button:focus-visible {
  outline: var(--border-width-xl) solid var(--border-focus);
  outline-offset: 2px;
}

.input-error {
  border: var(--border-width-m) solid var(--border-negative);
  border-radius: var(--border-radius-s);
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderColor: {
        primary: 'var(--border-primary)',
        subtle: 'var(--border-subtle)',
        inverse: 'var(--border-inverse)',
        selected: 'var(--border-selected)',
        focus: 'var(--border-focus)',
        disabled: 'var(--border-disabled)',
        brand: 'var(--border-brand)',
        positive: 'var(--border-positive)',
        warning: 'var(--border-warning)',
        negative: 'var(--border-negative)',
      },
      borderRadius: {
        none: '0px',
        xs: '4px',
        s: '8px',
        m: '12px',
        l: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '56px',
        '6xl': '64px',
        pill: '999px',
      },
      borderWidth: {
        none: '0px',
        xs: '0.5px',
        s: '1px',
        m: '1.5px',
        l: '2px',
        xl: '4px',
        '2xl': '8px',
      },
    },
  },
}
```

### React/TypeScript

```typescript
// borders.ts
export const borders = {
  color: {
    primary: 'var(--border-primary)',
    subtle: 'var(--border-subtle)',
    focus: 'var(--border-focus)',
    negative: 'var(--border-negative)',
    positive: 'var(--border-positive)',
  },
  radius: {
    none: '0px',
    xs: '4px',
    s: '8px',
    m: '12px',
    l: '16px',
    pill: '999px',
  },
  width: {
    s: '1px',
    m: '1.5px',
    l: '2px',
    xl: '4px',
  },
} as const;

// Button.tsx
import { borders } from './borders';

const Button = ({ variant = 'primary', children }) => {
  const styles = {
    border: `${borders.width.s} solid ${borders.color.primary}`,
    borderRadius: borders.radius.s,
  };
  
  return <button style={styles}>{children}</button>;
};

// Input.tsx
const Input = ({ hasError, children }) => {
  const borderColor = hasError ? borders.color.negative : borders.color.primary;
  const borderWidth = hasError ? borders.width.m : borders.width.s;
  
  return (
    <input
      style={{
        border: `${borderWidth} solid ${borderColor}`,
        borderRadius: borders.radius.s,
      }}
    />
  );
};
```

### Figma Integration

1. **Use Border Variables**
   - Apply border color variables to strokes
   - Use border radius variables for corner radius
   - Maintain consistency across designs

2. **Layer Effects**
   - Strokes (borders) can be inside, center, or outside
   - Consider stroke alignment for pixel-perfect designs
   - Inner strokes don't affect layout dimensions

3. **Component Variants**
   - Create variants for different border states
   - Use component properties for border colors
   - Leverage auto-layout with border styles

---

## Best Practices

### 1. Establish a Consistent Radius Scale

Choose 3-5 primary radius values for your product:
- **Minimal**: 4px, 8px, 12px
- **Moderate**: 8px, 12px, 16px, 24px
- **Playful**: 12px, 16px, 24px, 32px, pill

Apply systematically across all components.

### 2. Harmonize with Typography

Border radius should complement your typeface:
- **Rounded fonts** (Montserrat, Nunito): Use moderate to large radius
- **Geometric fonts** (Helvetica, Futura): Use subtle radius
- **Angular fonts**: Consider sharp corners or minimal radius

### 3. Use Border Width for Hierarchy

Create visual weight through border width:
- **Subtle**: 0.5px - 1px (dividers, cards)
- **Standard**: 1px (default borders)
- **Emphasized**: 1.5px - 2px (selected, active)
- **Strong**: 4px (focus indicators)

### 4. Consider Performance

Excessive border-radius can impact rendering performance:
- Avoid animating border-radius frequently
- Use transform/opacity for animations when possible
- Test performance on lower-end devices

### 5. Test Edge Cases

Verify border appearance in:
- Empty states
- Loading states
- Error states
- Overflow scenarios
- Nested contexts

---

## Border Token Quick Reference

### Most Commonly Used Tokens

**Border Colors:**
- `Border/Primary` - Standard borders
- `Border/Subtle` - Light dividers
- `Border/Focus` - Focus indicators
- `Border/Negative` - Error states

**Border Radius:**
- `Border Radius/S` (8px) - Buttons, inputs, small cards
- `Border Radius/M` (12px) - Medium cards, modals
- `Border Radius/L` (16px) - Large cards
- `Border Radius/Pill` (999px) - Badges, tags, circular elements

**Border Width:**
- `Border Width/S` (1px) - Default borders
- `Border Width/M` (1.5px) - Emphasized states
- `Border Width/L` (2px) - Selected states
- `Border Width/XL` (4px) - Focus indicators

---

## Changelog

### Version 3.0.0 (Current)
- Complete semantic border color system
- Light/Dark mode support
- 11 border radius values
- 7 border width values
- Comprehensive documentation
- Accessibility guidelines

---

## Resources

- **Figma File:** Scale Design System 3.0.0
- **Accessibility Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **CSS Reference:** [MDN Border-Radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- **Documentation:** [Scale Design System Documentation](https://scale.design)

---

## Support

For questions about border usage, radius application, or token proposals:
- Create an issue in the Scale Design System repository
- Contact the design system team
- Review component-specific documentation

---

*Built with care by the Scale Design System team*