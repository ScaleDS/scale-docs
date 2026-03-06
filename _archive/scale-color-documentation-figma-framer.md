# Scale Color Documentation for Figma & Framer Users

A practical guide to using the Scale Design System's color system in Figma and Framer workflows.

---

## Overview

Scale assigns Primitive Colors like `Brand/500` (#3355ff) to Semantic Colors like `Text/Primary` and `Background/Brand` that are used to scale color across your Figma designs and Framer prototypes.

---

## What are Primitive Colors?

Primitive Colors are the raw hex values organized by color family and tint level (e.g., `Brand/500`, `Neutral/900`). You don't use them directly in designs, but they form the foundation for Semantic Colors.

> [!IMPORTANT]
> You should never use Primitive Colors directly in your Figma components or Framer prototypes. They're the raw materials that Semantic Colors reference.

---

## Color Families

Our primitive color system consists of seven distinct families, each with multiple shades.

### 1. Neutral (Grayscale)

The foundation for text, backgrounds, borders, and UI elements.

| Token | Hex Value | Figma/Framer Usage |
|-------|-----------|-------------------|
| `Neutral/0` | `#FFFFFF` | Pure white backgrounds |
| `Neutral/50` | `#F2F2F2` | Lightest gray, subtle backgrounds |
| `Neutral/100` | `#E5E5E5` | Very light gray, borders |
| `Neutral/200` | `#CCCCCC` | Light-medium gray, disabled states |
| `Neutral/300` | `#B3B3B3` | Medium gray, secondary text |
| `Neutral/500` | `#808080` | Mid gray, tertiary text |
| `Neutral/700` | `#4C4C4C` | Very dark gray, borders |
| `Neutral/800` | `#333333` | Near-black, secondary text |
| `Neutral/900` | `#1A1A1A` | Primary text color (light mode) |
| `Neutral/1000` | `#000000` | Pure black |

### 2. Brand (Primary Identity)

Blue-purple spectrum for brand elements and primary actions.

| Token | Hex Value | Figma/Framer Usage |
|-------|-----------|-------------------|
| `Brand/100` | `#D0D8FF` | Light brand backgrounds |
| `Brand/300` | `#8196FF` | Hover states |
| `Brand/400` | `#5A76FF` | Dark mode primary text |
| `Brand/500` | `#3355FF` | **Primary brand color** |
| `Brand/600` | `#2945CE` | Pressed states |
| `Brand/800` | `#16246C` | Dark mode backgrounds |

### 3. Blue (Informational)

For informational elements and links.

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `Blue/100` | `#D0D8FF` | Info backgrounds |
| `Blue/500` | `#3355FF` | Links, info icons |
| `Blue/800` | `#16246C` | Dark mode info |

### 4. Green (Success)

For success states and positive actions.

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `Green/100` | `#C4E7D0` | Success backgrounds |
| `Green/400` | `#31AD5A` | Success text/icons (dark mode) |
| `Green/500` | `#009933` | Success text/icons (light mode) |
| `Green/800` | `#004116` | Dark mode success |

### 5. Orange (Warning)

For warning states and cautionary messages.

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `Orange/100` | `#FCE1C7` | Warning backgrounds |
| `Orange/400` | `#F4983B` | Warning text/icons (dark mode) |
| `Orange/500` | `#F27F0D` | Warning text/icons (light mode) |
| `Orange/800` | `#673606` | Dark mode warning |

### 6. Red (Error)

For error states and destructive actions.

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `Red/100` | `#F9CACA` | Error backgrounds |
| `Red/400` | `#EB4646` | Error text/icons (dark mode) |
| `Red/500` | `#E61A1A` | Error text/icons (light mode) |
| `Red/800` | `#620B0B` | Dark mode error |

### 7. Purple (Accent)

For status indicators and accent elements.

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `Purple/100` | `#DCD0FF` | Accent backgrounds |
| `Purple/500` | `#6633FF` | Accent elements |
| `Purple/800` | `#2B166C` | Dark mode accent |

---

## Semantic Colors

Semantic colors are named by their **purpose** rather than appearance. Instead of choosing "Neutral/300" or "Blue/500," you select colors like "Text/Primary" or "Background/Brand."

### Why Use Semantic Colors?

✅ **Consistency** – Colors are used correctly across all designs  
✅ **Theming** – Automatically adapts to light and dark modes  
✅ **Accessibility** – Built-in contrast ratios meet WCAG standards  
✅ **Clear Communication** – Designers and developers speak the same language  

> [!IMPORTANT]
> Always use Semantic Colors in your Figma components and Framer prototypes. They ensure your design works correctly in both light and dark themes.

---

## Naming Convention

Semantic color tokens follow this structure:

```
{Category}/{Variant}
```

**Examples:**
- `Text/Primary` - Primary text color
- `Background/Brand` - Brand background color
- `Border/Selected` - Selected border color
- `Icon/Positive` - Positive icon color
- `Surface/L2` - Surface elevation level 2

---

## Color Categories

### 1. Text Colors

For all typography in your designs.

| Token | Figma/Framer Usage | Light Mode | Dark Mode |
|-------|-------------------|------------|-----------|
| `Text/Primary` | Main body text, headings | Neutral/900 | Neutral/50 |
| `Text/Secondary` | Supporting text, labels | Neutral/800 | Neutral/100 |
| `Text/Tertiary` | Placeholder, captions | Neutral/600 | Neutral/200 |
| `Text/Disabled` | Inactive text | Neutral/300 | Neutral/700 |
| `Text/Primary Inverse` | Text on dark backgrounds | Neutral/50 | Neutral/900 |
| `Text/Brand` | Brand-colored text | Brand/500 | Brand/400 |
| `Text/Link` | Hyperlinks | Brand/500 | Brand/400 |
| `Text/Positive` | Success messages | Green/500 | Green/400 |
| `Text/Warning` | Warning messages | Orange/500 | Orange/400 |
| `Text/Negative` | Error messages | Red/500 | Red/400 |

### 2. Icon Colors

For icons and symbolic elements.

| Token | Figma/Framer Usage | Light Mode | Dark Mode |
|-------|-------------------|------------|-----------|
| `Icon/Primary` | Primary icons | Neutral/900 | Neutral/50 |
| `Icon/Subtle` | Secondary icons | Neutral/600 | Neutral/600 |
| `Icon/Inverse` | Icons on dark backgrounds | Neutral/50 | Neutral/900 |
| `Icon/Disabled` | Inactive icons | Neutral/300 | Neutral/700 |
| `Icon/Selected` | Selected icons | Brand/500 | Brand/400 |
| `Icon/Brand` | Brand-colored icons | Brand/500 | Brand/400 |
| `Icon/Info` | Informational icons | Brand/500 | Brand/400 |
| `Icon/Positive` | Success icons | Green/500 | Green/400 |
| `Icon/Warning` | Warning icons | Orange/500 | Orange/400 |
| `Icon/Negative` | Error icons | Red/500 | Red/400 |

### 3. Border Colors

For borders, dividers, and outlines.

| Token | Figma/Framer Usage | Light Mode | Dark Mode |
|-------|-------------------|------------|-----------|
| `Border/Primary` | Default borders | Neutral/300 | Neutral/700 |
| `Border/Subtle` | Dividers, separators | Neutral/100 | Neutral/750 |
| `Border/Inverse` | Borders on dark backgrounds | Neutral/50 | Neutral/800 |
| `Border/Disabled` | Disabled borders | Neutral/200 | Neutral/800 |
| `Border/Selected` | Focus/selected borders | Brand/500 | Brand/400 |
| `Border/Brand` | Brand borders | Brand/500 | Brand/400 |
| `Border/Info` | Info borders | Brand/500 | Brand/400 |
| `Border/Positive` | Success borders | Green/500 | Green/400 |
| `Border/Warning` | Warning borders | Orange/500 | Orange/400 |
| `Border/Negative` | Error borders | Red/500 | Red/400 |

### 4. Surface Colors

For layered backgrounds with elevation (cards, modals, dropdowns).

| Token | Figma/Framer Usage | Light Mode | Dark Mode |
|-------|-------------------|------------|-----------|
| `Surface/L0` | Base layer, page background | Neutral/0 | Neutral/1000 |
| `Surface/L1` | Cards on page | Neutral/0 | Neutral/950 |
| `Surface/L2` | Dropdowns, popovers | Neutral/0 | Neutral/900 |
| `Surface/L3` | Modals | Neutral/0 | Neutral/850 |
| `Surface/L4` | Tooltips | Neutral/0 | Neutral/800 |
| `Surface/L5` | Very high elevation | Neutral/0 | Neutral/750 |
| `Surface/L6` | Highest elevation | Neutral/0 | Neutral/700 |

**Understanding Elevation:**
- **Light Mode**: All surfaces are white, elevation created with shadows
- **Dark Mode**: Surfaces become **lighter** as they elevate (reverse of light mode)

### 5. Background Colors

For page backgrounds, containers, and interactive states.

| Token | Figma/Framer Usage | Light Mode | Dark Mode |
|-------|-------------------|------------|-----------|
| `Background/Primary` | Main page background | Neutral/0 | Neutral/900 |
| `Background/Subtle` | Section backgrounds | Neutral/50 | Neutral/900 |
| `Background/Inverse` | Inverted background | Neutral/900 | Neutral/50 |
| `Background/Brand` | Brand backgrounds | Brand/500 | Brand/500 |
| `Background/Info` | Info banners | Brand/100 | Brand/800 |
| `Background/Positive` | Success messages | Green/100 | Green/800 |
| `Background/Warning` | Warning messages | Orange/100 | Orange/800 |
| `Background/Negative` | Error messages | Red/100 | Red/800 |

---

## Figma Implementation

### Using Colors in Figma

1. **Create Color Variables**
   - Create a "Color" collection in Figma Variables
   - Add semantic color variables: `Text/Primary`, `Background/Brand`, etc.
   - Set values for both Light and Dark modes

2. **Apply to Components**
   ```scss
   // In Figma component properties:
   Fill: {Text/Primary}
   Stroke: {Border/Primary}
   ```

3. **Component Examples**
   - **Button**: `Background/Brand` fill, `Text/Primary Inverse` text
   - **Card**: `Surface/L1` fill, `Text/Primary` text, `Border/Subtle` border
   - **Input**: `Surface/L0` fill, `Border/Primary` stroke, `Text/Primary` text
   - **Error Message**: `Background/Negative` fill, `Text/Primary` text, `Icon/Negative` icon

### Figma Best Practices

✅ **Do:**
- Use semantic tokens for all component styling
- Test components in both light and dark modes
- Document color usage in component descriptions
- Use `Text/Primary Inverse` on colored backgrounds

❌ **Don't:**
- Use primitive colors directly in components
- Hardcode hex values in designs
- Mix semantic colors inconsistently
- Use `Text/Tertiary` for important information

---

## Framer Implementation

### ⚠️ Important Limitations

**Framer does NOT support global variables or design tokens** in the traditional sense. This is a critical limitation that affects how you implement the Scale Design System:

- ❌ **No global variables** across components or projects
- ❌ **No semantic token system** like Figma Variables or CSS custom properties
- ❌ **No automatic theming** (light/dark mode switching)
- ❌ **No cascading or aliasing** of color values
- ❌ **No enforcement** of design system rules

**What this means:** You cannot create a single source of truth for colors that automatically updates across all components. Each component must manage its own color references.

### Workarounds for Framer

#### 1. **Component-Level Color Objects**
Create reusable color objects within each component file:

```javascript
// scale-colors.js - Include this in each component
export const scaleColors = {
  // Text colors
  text: {
    primary: '#1a1a1a',      // Neutral/900
    secondary: '#333333',    // Neutral/800
    tertiary: '#666666',     // Neutral/600
    disabled: '#b3b3b3',     // Neutral/300
    brand: '#3355ff',        // Brand/500
    positive: '#009933',     // Green/500
    warning: '#f27f0d',      // Orange/500
    negative: '#e61a1a',     // Red/500
    inverse: '#f2f2f2'       // Neutral/50
  },
  
  // Background colors
  background: {
    primary: '#ffffff',      // Neutral/0
    subtle: '#f2f2f2',       // Neutral/50
    brand: '#3355ff',        // Brand/500
    positive: '#c4e7d0',     // Green/100
    warning: '#fce1c7',      // Orange/100
    negative: '#f9caca',     // Red/100
    inverse: '#1a1a1a'       // Neutral/900
  },
  
  // Border colors
  border: {
    primary: '#b3b3b3',      // Neutral/300
    subtle: '#e5e5e5',       // Neutral/100
    selected: '#3355ff',     // Brand/500
    positive: '#009933',     // Green/500
    warning: '#f27f0d',      // Orange/500
    negative: '#e61a1a'      // Red/500
  },
  
  // Surface colors (for dark mode)
  surface: {
    l0: '#ffffff',           // Light: Neutral/0, Dark: Neutral/1000
    l1: '#ffffff',           // Light: Neutral/0, Dark: Neutral/950
    l2: '#ffffff',           // Light: Neutral/0, Dark: Neutral/900
    l3: '#ffffff',           // Light: Neutral/0, Dark: Neutral/850
    l4: '#ffffff',           // Light: Neutral/0, Dark: Neutral/800
    l5: '#ffffff',           // Light: Neutral/0, Dark: Neutral/750
    l6: '#ffffff'            // Light: Neutral/0, Dark: Neutral/700
  }
};

// Dark mode variants
export const scaleColorsDark = {
  text: {
    primary: '#f2f2f2',      // Neutral/50
    secondary: '#e5e5e5',    // Neutral/100
    tertiary: '#cccccc',     // Neutral/200
    disabled: '#4c4c4c',     // Neutral/700
    brand: '#5a76ff',        // Brand/400
    positive: '#31ad5a',     // Green/400
    warning: '#f4983b',      // Orange/400
    negative: '#eb4646',     // Red/400
    inverse: '#1a1a1a'       // Neutral/900
  },
  
  background: {
    primary: '#1a1a1a',      // Neutral/900
    subtle: '#1a1a1a',       // Neutral/900
    brand: '#5a76ff',        // Brand/400
    positive: '#004116',     // Green/800
    warning: '#673606',      // Orange/800
    negative: '#620b0b',     // Red/800
    inverse: '#f2f2f2'       // Neutral/50
  },
  
  border: {
    primary: '#4c4c4c',      // Neutral/700
    subtle: '#404040',       // Neutral/750
    selected: '#5a76ff',     // Brand/400
    positive: '#31ad5a',     // Green/400
    warning: '#f4983b',      // Orange/400
    negative: '#eb4646'      // Red/400
  },
  
  surface: {
    l0: '#1a1a1a',           // Neutral/1000
    l1: '#1a1a1a',           // Neutral/950
    l2: '#1a1a1a',           // Neutral/900
    l3: '#1a1a1a',           // Neutral/850
    l4: '#1a1a1a',           // Neutral/800
    l5: '#1a1a1a',           // Neutral/750
    l6: '#1a1a1a'            // Neutral/700
  }
};
```

#### 2. **Theme-Aware Components**
Components must explicitly handle light/dark mode:

```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';

export function Button({
  label,
  variant = 'primary',
  theme = 'light'  // 'light' or 'dark'
}) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  // Map variants to semantic colors
  const bgColor = {
    primary: colors.background.brand,
    secondary: colors.background.subtle,
    positive: colors.background.positive,
    warning: colors.background.warning,
    negative: colors.background.negative
  }[variant] || colors.background.brand;
  
  const textColor = {
    primary: '#ffffff',  // Use inverse text on brand colors
    secondary: colors.text.primary,
    positive: colors.text.primary,
    warning: colors.text.primary,
    negative: colors.text.primary
  }[variant] || '#ffffff';
  
  return (
    <motion.button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: '12px 24px',
        borderRadius: 8,
        border: `1px solid ${colors.border.primary}`
      }}
    >
      {label}
    </motion.button>
  );
}
```

#### 3. **Component Property Controls**
Expose color choices as component properties for flexibility:

```jsx
// Framer component with property controls
export function Card({
  children,
  surfaceLevel = 'l1',
  theme = 'light'
}) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  const bgColor = {
    l0: colors.surface.l0,
    l1: colors.surface.l1,
    l2: colors.surface.l2,
    l3: colors.surface.l3,
    l4: colors.surface.l4,
    l5: colors.surface.l5,
    l6: colors.surface.l6
  }[surfaceLevel] || colors.surface.l1;
  
  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        color: colors.text.primary,
        padding: 16,
        borderRadius: 8,
        border: `1px solid ${colors.border.subtle}`
      }}
    >
      {children}
    </motion.div>
  );
}
```

#### 4. **Manual Theme Switching**
Since Framer doesn't support automatic theming, you must implement theme context manually:

```jsx
// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// Usage in components
export function ThemedComponent({ children }) {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  return (
    <div style={{ backgroundColor: colors.background.primary }}>
      {children}
    </div>
  );
}
```

### Framer Best Practices

✅ **Do:**
- **Create a `scale-colors.js` file** and include it in every component
- **Use component-level color objects** instead of hardcoded hex values
- **Expose theme as a component property** for testing
- **Document which semantic token each color represents**
- **Test both light and dark themes** manually
- **Use consistent naming** that maps to Scale tokens
- **Create helper functions** for common color mappings

❌ **Don't:**
- **Hardcode hex values** directly in component styles
- **Assume colors will work across themes** without explicit handling
- **Use primitive color names** (like "Brand/500") in Framer code
- **Create "global" color variables** that won't actually be global
- **Ignore theme context** in component design
- **Rely on Framer to manage color consistency** - it won't

### Framer-Specific Challenges

#### **Challenge 1: No Single Source of Truth**
- **Problem:** Updating a color requires changing it in every component
- **Solution:** Keep `scale-colors.js` in a central location and copy it to each component folder
- **Limitation:** Still requires manual updates across components

#### **Challenge 2: No Automatic Theming**
- **Problem:** Light/dark mode switching must be manually implemented
- **Solution:** Pass `theme` prop to all components or use context
- **Limitation:** Increases component complexity

#### **Challenge 3: No Design System Enforcement**
- **Problem:** Nothing prevents developers from using wrong colors
- **Solution:** Code reviews and documentation
- **Limitation:** Relies on discipline, not tooling

#### **Challenge 4: Component Variants Don't Scale**
- **Problem:** Creating variants for every color combination is impractical
- **Solution:** Use property controls + color mapping functions
- **Limitation:** More complex component logic

### When to Use Framer for Design Systems

**Framer is suitable for:**
- Marketing websites and landing pages
- Small to medium projects
- Prototypes where design consistency is less critical
- Teams that can enforce standards through process

**Framer is NOT suitable for:**
- Large-scale design systems
- Multi-brand or multi-theme products
- Projects requiring strict design governance
- Systems where foundations drive components

> [!WARNING]
> **Framer's lack of global variables makes it unsuitable for enterprise design systems.** If you need strict design governance, consider using Figma for design + code for implementation, or tools like Figma Tokens + Style Dictionary.

### Recommended Workflow for Framer

1. **Design Phase (Figma)**
   - Define semantic tokens in Figma Variables
   - Create components with semantic colors
   - Export color values as reference

2. **Implementation Phase (Framer)**
   - Create `scale-colors.js` with exported values
   - Build components using color objects
   - Implement theme switching manually
   - Document color usage in component descriptions

3. **Maintenance Phase**
   - Update `scale-colors.js` when design system changes
   - Manually update components that use changed colors
   - Test all themes after updates
   - Use code reviews to enforce standards

### Alternative Approaches

If Framer's limitations are too restrictive, consider:

- **Figma + Custom Code:** Design in Figma, implement in React/CSS
- **Webflow:** Better foundation support but less flexible interactions
- **Figma Tokens + Style Dictionary:** Generate CSS variables for production
- **Component Libraries:** Use tools like Storybook with design tokens

---

## Cross-Tool Workflow

### Design to Development Handoff

**Figma → Framer → Code:**

1. **Design Phase (Figma)**
    - Use semantic color variables in all components
    - Document color usage in component descriptions
    - Export color values as JSON or reference table

2. **Prototyping Phase (Framer)**
    - **Manually create** `scale-colors.js` with exported values
    - Build components using color objects
    - Implement theme switching with `theme` prop
    - Test responsive behavior and both themes

3. **Development Phase**
    - Use same semantic tokens in code
    - Implement CSS variables or design tokens
    - Maintain consistency across platforms

### Color Token Translation

| Figma Variable | Framer Implementation | CSS Variable |
|----------------|----------------------|--------------|
| `Text/Primary` | `scaleColors.text.primary` | `--sc-text-primary` |
| `Background/Brand` | `scaleColors.background.brand` | `--sc-bg-brand` |
| `Border/Selected` | `scaleColors.border.selected` | `--sc-border-selected` |
| `Icon/Positive` | `scaleColors.text.positive` | `--sc-icon-positive` |
| `Surface/L2` | `scaleColors.surface.l2` | `--sc-surface-l2` |

### Framer-Specific Workflow Challenges

#### **Challenge: Manual Token Management**
- **Figma:** Variables automatically update across all components
- **Framer:** You must manually update `scale-colors.js` and every component
- **Solution:** Create a script to export Figma variables to `scale-colors.js`

#### **Challenge: No Theme Switching**
- **Figma:** Variables support light/dark modes automatically
- **Framer:** Must pass `theme` prop to every component
- **Solution:** Use React Context + `theme` prop pattern

#### **Challenge: No Design System Enforcement**
- **Figma:** Variables prevent wrong color usage
- **Framer:** Nothing stops developers from hardcoding colors
- **Solution:** Code reviews + documentation + linting rules

### Recommended Framer Workflow

```javascript
// Step 1: Create scale-colors.js (manually from Figma export)
export const scaleColors = {
  text: { primary: '#1a1a1a', /* ... */ },
  background: { primary: '#ffffff', /* ... */ },
  // ...
};

// Step 2: Create theme-aware components
export function MyComponent({ theme = 'light' }) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  return <div style={{ color: colors.text.primary }}>...</div>;
}

// Step 3: Use in Framer with theme control
<MyComponent theme="dark" />
```

### When to Use This Workflow

**✅ Good for:**
- Small to medium projects
- Marketing sites
- Prototypes
- Teams with strong process

**❌ Poor for:**
- Large design systems
- Multi-brand products
- Teams needing strict governance
- Projects requiring automatic theming

---

## Common Design Patterns

### 1. Primary Button

**Figma:**
- Fill: `Background/Brand`
- Text: `Text/Primary Inverse`
- Border: `Border/Brand`

**Framer:**
```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';

export function PrimaryButton({ label, theme = 'light' }) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  return (
    <motion.button
      style={{
        backgroundColor: colors.background.brand,
        color: '#ffffff',  // Always white on brand background
        border: `1px solid ${colors.border.brand}`,
        padding: '12px 24px',
        borderRadius: 8
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
}
```

### 2. Success Message

**Figma:**
- Container: `Background/Positive`
- Text: `Text/Primary`
- Icon: `Icon/Positive`

**Framer:**
```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';

export function SuccessMessage({ message, theme = 'light' }) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  return (
    <motion.div
      style={{
        backgroundColor: colors.background.positive,
        color: colors.text.primary,
        border: `1px solid ${colors.border.positive}`,
        padding: '12px 16px',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <CheckIcon style={{ color: colors.text.positive }} />
      {message}
    </motion.div>
  );
}
```

### 3. Card Component

**Figma:**
- Background: `Surface/L1`
- Text: `Text/Primary`
- Border: `Border/Subtle`

**Framer:**
```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';

export function Card({ children, surfaceLevel = 'l1', theme = 'light' }) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  // Map surface level to actual color
  const bgColor = {
    l0: colors.surface.l0,
    l1: colors.surface.l1,
    l2: colors.surface.l2,
    l3: colors.surface.l3,
    l4: colors.surface.l4,
    l5: colors.surface.l5,
    l6: colors.surface.l6
  }[surfaceLevel] || colors.surface.l1;
  
  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        color: colors.text.primary,
        border: `1px solid ${colors.border.subtle}`,
        padding: 16,
        borderRadius: 8
      }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}
```

### 4. Theme-Aware Input Field

**Figma:**
- Background: `Surface/L0`
- Border: `Border/Primary`
- Text: `Text/Primary`
- Placeholder: `Text/Tertiary`

**Framer:**
```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';

export function InputField({ placeholder, theme = 'light' }) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  return (
    <motion.input
      placeholder={placeholder}
      style={{
        backgroundColor: colors.surface.l0,
        color: colors.text.primary,
        border: `1px solid ${colors.border.primary}`,
        borderRadius: 6,
        padding: '10px 12px',
        width: '100%'
      }}
      whileFocus={{ borderColor: colors.border.selected }}
    />
  );
}
```

### 5. Error State Component

**Figma:**
- Background: `Background/Negative`
- Text: `Text/Primary`
- Icon: `Icon/Negative`

**Framer:**
```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';

export function ErrorMessage({ message, theme = 'light' }) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  return (
    <motion.div
      style={{
        backgroundColor: colors.background.negative,
        color: colors.text.primary,
        border: `1px solid ${colors.border.negative}`,
        padding: '12px 16px',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AlertIcon style={{ color: colors.text.negative }} />
      {message}
    </motion.div>
  );
}
```

### 6. Brand Badge Component

**Figma:**
- Background: `Background/Brand`
- Text: `Text/Primary Inverse`

**Framer:**
```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';

export function BrandBadge({ text, theme = 'light' }) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  return (
    <motion.span
      style={{
        backgroundColor: colors.background.brand,
        color: '#ffffff',  // Always white on brand
        padding: '4px 8px',
        borderRadius: 12,
        fontSize: '12px',
        fontWeight: 600
      }}
      whileHover={{ scale: 1.05 }}
    >
      {text}
    </motion.span>
  );
}
```

### 7. Interactive Card with States

**Figma:**
- Default: `Surface/L1`, `Border/Subtle`
- Hover: `Surface/L2`, `Border/Selected`
- Active: `Surface/L3`, `Border/Brand`

**Framer:**
```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';

export function InteractiveCard({ children, theme = 'light' }) {
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  return (
    <motion.div
      style={{
        backgroundColor: colors.surface.l1,
        color: colors.text.primary,
        border: `1px solid ${colors.border.subtle}`,
        padding: 16,
        borderRadius: 8,
        cursor: 'pointer'
      }}
      whileHover={{
        backgroundColor: colors.surface.l2,
        borderColor: colors.border.selected,
        scale: 1.02
      }}
      whileTap={{
        backgroundColor: colors.surface.l3,
        borderColor: colors.border.brand,
        scale: 0.98
      }}
    >
      {children}
    </motion.div>
  );
}
```

### 8. Dark Mode Toggle Button

**Figma:**
- Light mode: `Background/Primary`, `Text/Primary`
- Dark mode: `Background/Inverse`, `Text/Primary Inverse`

**Framer:**
```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';

export function ThemeToggle({ isDark, onToggle }) {
  const colors = isDark ? scaleColorsDark : scaleColors;
  
  return (
    <motion.button
      onClick={onToggle}
      style={{
        backgroundColor: isDark ? colors.background.inverse : colors.background.primary,
        color: isDark ? colors.text.inverse : colors.text.primary,
        border: `1px solid ${isDark ? colors.border.inverse : colors.border.primary}`,
        padding: '8px 16px',
        borderRadius: 6
      }}
      whileHover={{ scale: 1.05 }}
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </motion.button>
  );
}
```

### 9. Complete Page Example

**Figma:**
- Page: `Background/Primary`
- Header: `Surface/L1`
- Content: `Surface/L0`

**Framer:**
```jsx
import { scaleColors, scaleColorsDark } from './scale-colors';
import { ThemeProvider, useTheme } from './ThemeContext';

function PageContent() {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? scaleColorsDark : scaleColors;
  
  return (
    <div style={{
      backgroundColor: colors.background.primary,
      minHeight: '100vh',
      padding: 24
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: colors.surface.l1,
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        border: `1px solid ${colors.border.subtle}`
      }}>
        <h1 style={{ color: colors.text.primary }}>My App</h1>
      </header>
      
      {/* Content */}
      <main style={{
        backgroundColor: colors.surface.l0,
        padding: 16,
        borderRadius: 8,
        border: `1px solid ${colors.border.subtle}`
      }}>
        <Card theme={theme}>
          <SuccessMessage message="Welcome!" theme={theme} />
          <PrimaryButton label="Get Started" theme={theme} />
        </Card>
      </main>
    </div>
  );
}

// Usage
export function App() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  );
}
```

---

## Accessibility

All color pairings meet **WCAG AA standards**:

- **Standard text:** 4.5:1 contrast ratio minimum
- **Large text (18px+):** 3:1 contrast ratio minimum
- **UI components:** 3:1 contrast ratio minimum

### Best Practices

✅ **Do:**
- Use semantic color tokens (they're designed for accessibility)
- Test with color blindness simulators
- Provide alternative indicators beyond color (icons, labels)

❌ **Don't:**
- Rely solely on color to convey information
- Use `Text/Tertiary` or `Icon/Subtle` for critical information
- Use custom colors without checking contrast

---

## Quick Reference

### Most Common Tokens

| Use Case | Figma Token | Framer Implementation |
|----------|-------------|----------------------|
| Body text | `Text/Primary` | `scaleColors.text.primary` |
| Form labels | `Text/Secondary` | `scaleColors.text.secondary` |
| Placeholder text | `Text/Tertiary` | `scaleColors.text.tertiary` |
| Error message | `Text/Negative` + `Icon/Negative` | `scaleColors.text.negative` |
| Success banner | `Background/Positive` + `Text/Primary` | `scaleColors.background.positive` |
| Primary button | `Background/Brand` + `Text/Primary Inverse` | `scaleColors.background.brand` + `#ffffff` |
| Card | `Surface/L1` | `scaleColors.surface.l1` |
| Modal | `Surface/L3` | `scaleColors.surface.l3` |
| Divider | `Border/Subtle` | `scaleColors.border.subtle` |
| Focus border | `Border/Selected` | `scaleColors.border.selected` |

### Framer-Specific Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Import `scaleColors` from central file | Hardcode hex values in components |
| Pass `theme` prop to components | Assume colors work across themes |
| Use component-level color objects | Try to create "global" variables |
| Document which semantic token each color represents | Use primitive color names |
| Test both light and dark themes manually | Ignore theme context |
| Create helper functions for color mapping | Repeat color logic everywhere |
| Use consistent naming conventions | Mix naming styles |

### Framer Limitations to Remember

| Limitation | Impact | Workaround |
|------------|--------|------------|
| No global variables | Colors must be managed per component | Central `scale-colors.js` file |
| No automatic theming | Manual theme switching required | Pass `theme` prop or use Context |
| No design system enforcement | Risk of inconsistent usage | Code reviews + documentation |
| No semantic token system | Must manually map to Scale tokens | Use naming that reflects semantics |
| No cascading updates | Changing colors requires manual updates | Script to sync from Figma |

---

## Need Help?

If you're unsure which color token to use:

1. **Identify the element type** – Text, icon, border, surface, or background?
2. **Determine the purpose** – Primary, secondary, interactive, or semantic (info/warning/error/success)?
3. **Check the context** – Light or dark background? Disabled or selected?
4. **Choose the matching token** – Use the tables above
5. **For Framer:** Import from `scaleColors` and pass `theme` prop

> [!NOTE]
> When in doubt, start with primary tokens (`Text/Primary`, `Icon/Primary`, `Border/Primary`) and adjust based on visual hierarchy.

> [!WARNING]
> **Framer's lack of global variables makes it unsuitable for large design systems.** For enterprise projects, consider Figma Tokens + Style Dictionary or a code-based design system instead.

---

**Last Updated:** December 2025
**Design System:** Scale v1.0
**Framer Limitations:** No global variables, no automatic theming, manual token management required