# T-Shirt Sizing in Design Systems

A comprehensive guide to understanding and using T-Shirt sizing in the Scale Design System.

---

## What is T-Shirt Sizing?

T-Shirt sizing is a standardized naming convention for spacing, sizing, and scaling values that uses familiar clothing size labels (XS, S, M, L, XL, etc.) instead of arbitrary numeric values.

---

## Why Use T-Shirt Sizing?

### ✅ **Consistency**
- Provides a unified language across the entire design system
- Ensures spacing and sizing remain consistent across all components
- Eliminates arbitrary pixel values that vary between designers

### ✅ **Scalability**
- Easy to add new sizes when needed
- Supports responsive design with mobile and desktop variants
- Allows for systematic growth patterns

### ✅ **Intuitive Communication**
- Designers and developers speak the same language
- Easy to understand and remember
- Reduces confusion in design handoffs

### ✅ **Maintainability**
- Changes to spacing scale automatically update all components
- Easy to adjust the entire system by modifying base values
- Simplifies design system updates

---

## T-Shirt Sizing Scale

The Scale Design System uses the following T-Shirt sizing scale:

| Size Name | Value | Common Use Cases |
|-----------|-------|------------------|
| **2XS** | 2px | Ultra-tight spacing, dense layouts |
| **XS** | 4px | Minimal spacing, tight layouts |
| **S** | 8px | Small gaps, compact components |
| **M** | 12px | Standard spacing, default margins |
| **L** | 16px | Generous spacing, section gaps |
| **XL** | 24px | Large spacing, major separations |
| **2XL** | 32px | Extra large spacing, hero sections |
| **3XL** | 40px | Massive spacing, full-page separations |
| **4XL** | 48px | Very large spacing, full sections |
| **5XL** | 56px | Ultra-large spacing, major sections |
| **6XL** | 64px | Huge spacing, full-width sections |
| **7XL** | 72px | Massive spacing, hero sections |
| **8XL** | 80px | Ultra-large spacing, full-screen gaps |

---

## Where T-Shirt Sizing is Used

### 1. **Spacing System**
- **Margins** between components
- **Padding** inside containers
- **Gaps** in flexbox and grid layouts
- **Stack** spacing for vertical layouts

### 2. **Sizing System**
- **Icon sizes**
- **Avatar dimensions**
- **Button heights**
- **Input field heights**

### 3. **Typography Scale**
- **Font sizes** (in some systems)
- **Line heights**
- **Letter spacing**

### 4. **Breakpoints**
- **Container widths**
- **Grid column spans**

---

## Examples in Practice

### Spacing Example
```scss
// Instead of arbitrary values:
.card {
  margin-bottom: 12px; // Why 12px?
  padding: 16px;       // Why 16px?
}

// Use T-Shirt sizing:
.card {
  margin-bottom: var(--sc-space-m);  // 12px
  padding: var(--sc-space-l);        // 16px
}
```

### Component Layout
```scss
// Button group with consistent spacing
.button-group {
  display: flex;
  gap: var(--sc-space-s);  // 8px between buttons
  margin-top: var(--sc-space-l);  // 16px above group
}
```

### Responsive Design
```scss
// Mobile-first approach
.container {
  padding: var(--sc-space-s);  // 8px on mobile
  
  @media (min-width: 768px) {
    padding: var(--sc-space-xl);  // 24px on tablet+
  }
}
```

---

## Benefits for Different Team Members

### For Designers
- **Faster design decisions** - No need to calculate exact pixel values
- **Consistent mockups** - All designers use the same spacing scale
- **Easier handoffs** - Clear specifications for developers

### For Developers
- **Reduced guesswork** - No need to "eyeball" spacing values
- **Cleaner code** - Semantic variable names instead of magic numbers
- **Easier maintenance** - One place to update spacing values

### For Product Managers
- **Faster iterations** - Changes apply system-wide
- **Better consistency** - Improved user experience
- **Clearer communication** - Everyone understands the system

---

## Best Practices

### ✅ **Do**
- Use the predefined T-Shirt sizes consistently
- Start with **M** as your default spacing
- Use **XS** and **S** sparingly for tight layouts
- Use **XL** and **2XL** for major separations
- Document any custom spacing exceptions

### ❌ **Don't**
- Create custom pixel values outside the scale
- Mix T-Shirt sizing with arbitrary values
- Skip sizes inconsistently (e.g., going from S to XL)
- Use the same size for everything (defeats the purpose)

---

## Common Patterns

### Card Layout
```scss
.card {
  padding: var(--sc-space-l);      // 16px internal padding
  margin-bottom: var(--sc-space-m); // 12px between cards
  border-radius: var(--sc-border-radius-m);
}
```

### Form Layout
```scss
.form-group {
  margin-bottom: var(--sc-space-l); // 16px between fields
  
  label {
    margin-bottom: var(--sc-space-xs); // 4px label-to-input
  }
}
```

### Navigation
```scss
.nav-item {
  padding: var(--sc-space-s) var(--sc-space-l); // 8px vertical, 16px horizontal
  margin-right: var(--sc-space-s); // 8px between items
}
```

---

## Responsive T-Shirt Sizing

The Scale Design System provides mobile and desktop variants:

| Size | Mobile | Desktop |
|------|--------|---------|
| 2XS | 2px | 2px |
| XS | 4px | 4px |
| S | 8px | 8px |
| M | 12px | 16px |
| L | 16px | 24px |
| XL | 24px | 32px |
| 2XL | 32px | 40px |
| 3XL | 40px | 48px |
| 4XL | 48px | 56px |
| 5XL | 56px | 64px |
| 6XL | 64px | 72px |
| 7XL | 72px | 80px |
| 8XL | 80px | 80px |

This ensures appropriate spacing across all device sizes while maintaining the same semantic naming.

---

## Integration with CSS Variables

The T-Shirt sizing system integrates seamlessly with CSS custom properties:

```css
:root {
  /* Spacing tokens */
  --sc-space-2xs: 2px;
  --sc-space-xs: 4px;
  --sc-space-s: 8px;
  --sc-space-m: 12px;
  --sc-space-l: 16px;
  --sc-space-xl: 24px;
  --sc-space-2xl: 32px;
  --sc-space-3xl: 40px;
  --sc-space-4xl: 48px;
  --sc-space-5xl: 56px;
  --sc-space-6xl: 64px;
  --sc-space-7xl: 72px;
  --sc-space-8xl: 80px;
  
  /* Mobile variants (when needed) */
  --sc-mobile-space-s: 8px;
  --sc-mobile-space-m: 12px;
  --sc-mobile-space-l: 16px;
  --sc-mobile-space-xl: 24px;
}

/* Usage */
.element {
  margin: var(--sc-space-m);
  padding: var(--sc-space-l);
}

@media (max-width: 768px) {
  .element {
    margin: var(--sc-mobile-space-m);
    padding: var(--sc-mobile-space-l);
  }
}
```

---

## Comparison: Before and After

### Before (Arbitrary Values)
```scss
.button {
  padding: 12px 24px;
  margin: 8px;
}

.card {
  padding: 20px;
  margin-bottom: 12px;
}

.modal {
  padding: 32px;
  gap: 12px;
}
```

### After (T-Shirt Sizing)
```scss
.button {
  padding: var(--sc-space-s) var(--sc-space-l);
  margin: var(--sc-space-xs);
}

.card {
  padding: var(--sc-space-l);
  margin-bottom: var(--sc-space-m);
}

.modal {
  padding: var(--sc-space-xl);
  gap: var(--sc-space-s);
}
```

**Benefits:**
- Consistent spacing values across all components
- Easy to update system-wide by changing base values
- Clear semantic meaning with standard names
- Better maintainability and scalability
- Matches the actual Scale Design System tokens

---

## Getting Started

1. **Learn the scale** - Memorize the basic sizes (2XS, XS, S, M, L, XL, 2XL, 3XL)
2. **Use the defaults** - Start with M (12px) for most spacing needs
3. **Be intentional** - Choose sizes based on visual hierarchy and density
4. **Stay consistent** - Use the same size for similar situations
5. **Document exceptions** - Note any custom values you need
6. **Consider responsive** - Use mobile variants when appropriate

---

## Summary

T-Shirt sizing transforms arbitrary pixel values into a systematic, scalable approach to spacing and sizing. By using familiar clothing size labels (2XS through 8XL), it creates a shared language that makes design systems more intuitive, maintainable, and consistent for everyone involved in the product development process.

The Scale Design System provides 13 distinct spacing values that work seamlessly across Figma, Framer, and code, ensuring perfect consistency from design to implementation.

---

**Last Updated:** December 2025  
**Design System:** Scale v1.0