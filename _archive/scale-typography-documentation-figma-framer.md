# Typography for Figma & Framer Users

A practical guide to using the Scale Design System's semantic typography in Figma and Framer workflows.

---

## Overview

Scale combines primitive typography values (font family, size, line-height, weight, and letter-spacing) into semantic type styles like `Heading/XL` and `Text/L` that work seamlessly across Figma designs and Framer prototypes.

---

## What are Semantic Type Tokens?

Semantic type tokens are named typography variables that describe **what the text is used for**. Instead of manually setting font sizes, weights, and line heights, you use meaningful names like `Heading/XL` or `Text/L`.

### Why Use Semantic Type Tokens?

✅ **Consistency** – Typography is used correctly across all designs  
✅ **Responsiveness** – Automatically adapts to different screen sizes  
✅ **Maintainability** – Update typography in one place, changes apply everywhere  
✅ **Clear Communication** – Designers and developers speak the same language  
✅ **Accessibility** – Built-in line heights and spacing for readability  

> [!IMPORTANT]
> Always use semantic type tokens instead of manual values in your Figma components and Framer prototypes.

---

## Token Groups

Our semantic type system is organized into four main groups:

1. **Heading** – For page titles and section headers
2. **Text** – For body content and paragraphs
3. **Link** – For hyperlinks and interactive text
4. **Label** – For form labels and UI labels

---

## Heading Tokens

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

## Figma Implementation

### Setting Up Typography in Figma

1. **Create Text Styles**
   - Create a "Typography" collection in Figma Styles
   - Add text styles for each semantic token
   - Set up both desktop and mobile variants

2. **Naming Convention**
   ```
   {Group}/{Size}[/Weight][/Mode]
   ```
   
   **Examples:**
   - `Heading/XL/Semi Bold`
   - `Text/L/Regular`
   - `Link/M/Regular/Mobile`

3. **Applying to Components**
   ```scss
   // In Figma component properties:
   Text: {Heading/XL}
   Color: {Text/Primary}
   ```

### Figma Component Examples

**Page Title:**
- Text Style: `Heading/5XL/Semi Bold`
- Color: `Text/Primary`
- Letter Spacing: `-0.5px`

**Section Header:**
- Text Style: `Heading/M/Semi Bold`
- Color: `Text/Primary`
- Margin Bottom: `Spacing/XL` (24px)

**Body Paragraph:**
- Text Style: `Text/L/Regular`
- Color: `Text/Secondary`
- Line Height: 24px

**Form Label:**
- Text Style: `Label/M/Semi Bold`
- Color: `Text/Primary`
- Margin Bottom: `Spacing/XS` (4px)

**Navigation Link:**
- Text Style: `Link/L/Semi Bold`
- Color: `Text/Link`
- Hover State: `Text/Link Hover`

### Figma Best Practices

✅ **Do:**
- Use text styles for all typography
- Create responsive variants (desktop/mobile)
- Document usage in component descriptions
- Use semi-bold for emphasis, not larger sizes

❌ **Don't:**
- Manually adjust font sizes
- Use all caps for emphasis (use semi-bold instead)
- Hardcode line heights
- Mix different weights in the same component unnecessarily

---

## Framer Implementation

### Setting Up Typography in Framer

1. **Create Typography Tokens**
   ```javascript
   // In your Framer project:
   const typography = {
     heading: {
       '5xl': { fontSize: 72, lineHeight: 80, fontWeight: 600 },
       '4xl': { fontSize: 64, lineHeight: 72, fontWeight: 600 },
       '3xl': { fontSize: 56, lineHeight: 64, fontWeight: 600 },
       '2xl': { fontSize: 48, lineHeight: 56, fontWeight: 600 },
       'xl': { fontSize: 40, lineHeight: 48, fontWeight: 600 },
       'l': { fontSize: 32, lineHeight: 40, fontWeight: 600 },
       'm': { fontSize: 24, lineHeight: 32, fontWeight: 600 },
       's': { fontSize: 20, lineHeight: 28, fontWeight: 600 },
       'xs': { fontSize: 16, lineHeight: 24, fontWeight: 600 },
       '2xs': { fontSize: 14, lineHeight: 20, fontWeight: 600 }
     },
     text: {
       '2xl': { fontSize: 24, lineHeight: 32, fontWeight: 400 },
       'xl': { fontSize: 20, lineHeight: 28, fontWeight: 400 },
       'l': { fontSize: 16, lineHeight: 24, fontWeight: 400 },
       'm': { fontSize: 14, lineHeight: 20, fontWeight: 400 },
       's': { fontSize: 12, lineHeight: 16, fontWeight: 400 },
       'xs': { fontSize: 10, lineHeight: 14, fontWeight: 400 }
     },
     link: {
       'l': { fontSize: 16, lineHeight: 24, fontWeight: 600 },
       'm': { fontSize: 14, lineHeight: 20, fontWeight: 600 },
       's': { fontSize: 12, lineHeight: 16, fontWeight: 600 }
     },
     label: {
       'l': { fontSize: 16, lineHeight: 24, fontWeight: 600 },
       'm': { fontSize: 14, lineHeight: 20, fontWeight: 600 },
       's': { fontSize: 12, lineHeight: 16, fontWeight: 600 }
     }
   }
   ```

2. **Mobile Variants**
   ```javascript
   const mobileTypography = {
     heading: {
       '5xl': { fontSize: 56, lineHeight: 64 },
       '4xl': { fontSize: 48, lineHeight: 56 },
       '3xl': { fontSize: 40, lineHeight: 48 },
       '2xl': { fontSize: 32, lineHeight: 40 },
       'xl': { fontSize: 28, lineHeight: 36 },
       'l': { fontSize: 24, lineHeight: 32 },
       'm': { fontSize: 20, lineHeight: 28 },
       's': { fontSize: 18, lineHeight: 26 },
       'xs': { fontSize: 16, lineHeight: 24 },
       '2xs': { fontSize: 14, lineHeight: 20 }
     },
     text: {
       '2xl': { fontSize: 20, lineHeight: 28 },
       'xl': { fontSize: 18, lineHeight: 26 },
       'l': { fontSize: 16, lineHeight: 24 },
       'm': { fontSize: 14, lineHeight: 20 },
       's': { fontSize: 12, lineHeight: 16 },
       'xs': { fontSize: 10, lineHeight: 14 }
     }
   }
   ```

### Applying Typography in Framer Components

**Heading Component:**
```jsx
export function Heading({ size = 'm', children, weight = 'semiBold' }) {
  const isMobile = useMobile() // Your mobile detection hook
  const styles = isMobile ? mobileTypography.heading[size] : typography.heading[size]
  
  return (
    <motion.h1
      style={{
        fontSize: styles.fontSize,
        lineHeight: `${styles.lineHeight}px`,
        fontWeight: weight === 'semiBold' ? 600 : weight === 'regular' ? 400 : 300,
        fontFamily: 'Inter, sans-serif',
        letterSpacing: size === '5xl' || size === '4xl' ? '-0.5px' : '0px'
      }}
    >
      {children}
    </motion.h1>
  )
}
```

**Text Component:**
```jsx
export function Text({ size = 'l', children, weight = 'regular', color = 'primary' }) {
  const isMobile = useMobile()
  const styles = isMobile ? mobileTypography.text[size] : typography.text[size]
  
  const colorMap = {
    primary: '#1a1a1a',
    secondary: '#333333',
    tertiary: '#666666',
    disabled: '#b3b3b3'
  }
  
  return (
    <motion.p
      style={{
        fontSize: styles.fontSize,
        lineHeight: `${styles.lineHeight}px`,
        fontWeight: weight === 'semiBold' ? 600 : 400,
        fontFamily: 'Inter, sans-serif',
        color: colorMap[color]
      }}
    >
      {children}
    </motion.p>
  )
}
```

**Link Component:**
```jsx
export function Link({ size = 'm', children, href }) {
  return (
    <motion.a
      href={href}
      style={{
        fontSize: typography.link[size].fontSize,
        lineHeight: `${typography.link[size].lineHeight}px`,
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        color: '#3355ff',
        textDecoration: 'none'
      }}
      whileHover={{ color: '#5a76ff', textDecoration: 'underline' }}
    >
      {children}
    </motion.a>
  )
}
```

**Label Component:**
```jsx
export function Label({ size = 'm', children, htmlFor }) {
  return (
    <motion.label
      htmlFor={htmlFor}
      style={{
        fontSize: typography.label[size].fontSize,
        lineHeight: `${typography.label[size].lineHeight}px`,
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        color: '#1a1a1a',
        display: 'block',
        marginBottom: '4px'
      }}
    >
      {children}
    </motion.label>
  )
}
```

### Responsive Typography in Framer

```jsx
// Responsive heading component
export function ResponsiveHeading({ children }) {
  const isMobile = useMobile()
  
  const styles = isMobile 
    ? { fontSize: 28, lineHeight: 36 }  // Mobile
    : { fontSize: 40, lineHeight: 48 }   // Desktop
  
  return (
    <motion.h1
      style={{
        fontSize: styles.fontSize,
        lineHeight: `${styles.lineHeight}px`,
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {children}
    </motion.h1>
  )
}
```

### Framer Best Practices

✅ **Do:**
- Use typography tokens for all text styling
- Implement responsive variants
- Use motion for interactive states (hover, focus)
- Test on both desktop and mobile devices

❌ **Don't:**
- Hardcode font sizes in components
- Use different font families inconsistently
- Ignore mobile breakpoints
- Use all caps for emphasis

---

## Cross-Tool Workflow

### Design to Development Handoff

**Figma → Framer → Code:**

1. **Design Phase (Figma)**
   - Use text styles for all typography
   - Document semantic usage in component descriptions
   - Export typography values as JSON

2. **Prototyping Phase (Framer)**
   - Import semantic tokens from Figma
   - Apply to Framer components
   - Test responsive behavior

3. **Development Phase**
   - Use same semantic tokens in code
   - Implement CSS variables or design tokens
   - Maintain consistency across platforms

### Token Translation Table

| Figma Style | Framer Token | CSS Variable |
|-------------|--------------|--------------|
| `Heading/5XL` | `typography.heading['5xl']` | `--sc-heading-5xl` |
| `Heading/M` | `typography.heading.m` | `--sc-heading-m` |
| `Text/L` | `typography.text.l` | `--sc-text-l` |
| `Link/M` | `typography.link.m` | `--sc-link-m` |
| `Label/M` | `typography.label.m` | `--sc-label-m` |

---

## Common Design Patterns

### 1. Hero Section

**Figma:**
- Title: `Heading/5XL/Semi Bold`
- Subtitle: `Text/XL/Regular`
- Color: `Text/Primary`

**Framer:**
```jsx
<motion.div>
  <Heading size="5xl">Hero Title</Heading>
  <Text size="xl" weight="regular" color="secondary">Subtitle text</Text>
</motion.div>
```

### 2. Card Component

**Figma:**
- Title: `Heading/M/Semi Bold`
- Body: `Text/L/Regular`
- Meta: `Text/S/Regular`

**Framer:**
```jsx
<motion.div>
  <Heading size="m">Card Title</Heading>
  <Text size="l">Card body text</Text>
  <Text size="s" color="tertiary">Meta information</Text>
</motion.div>
```

### 3. Form Layout

**Figma:**
- Label: `Label/M/Semi Bold`
- Input text: `Text/L/Regular`
- Helper text: `Text/S/Regular`

**Framer:**
```jsx
<motion.form>
  <Label size="m" htmlFor="email">Email Address</Label>
  <input type="email" style={{ fontSize: 16 }} />
  <Text size="s" color="tertiary">We'll never share your email</Text>
</motion.form>
```

### 4. Navigation

**Figma:**
- Logo: `Heading/M/Semi Bold`
- Menu items: `Link/M/Semi Bold`
- Active state: `Link/M/Semi Bold` + underline

**Framer:**
```jsx
<motion.nav>
  <Heading size="m">Brand</Heading>
  <Link size="m" href="/home">Home</Link>
  <Link size="m" href="/about">About</Link>
</motion.nav>
```

---

## Accessibility

All typography tokens are designed with accessibility in mind:

- **Minimum font size**: 10px (Text/XS)
- **Recommended minimum**: 14px (Text/M) for body content
- **Line heights**: 1.4 to 1.6 ratio for optimal readability
- **Contrast**: All tokens work with both light and dark themes

### Best Practices

✅ **Do:**
- Use larger text sizes for important information
- Maintain sufficient line height for readability
- Use semi-bold weights for emphasis
- Test on actual mobile devices

❌ **Don't:**
- Use text smaller than 10px
- Use tight line heights (less than 1.3)
- Rely on size alone for hierarchy
- Ignore mobile readability

---

## Quick Reference

### Common Patterns

| Use Case | Figma Style | Framer Token |
|----------|-------------|--------------|
| **Page title** | `Heading/5XL/Semi Bold` | `heading['5xl']` |
| **Section header** | `Heading/M/Semi Bold` | `heading.m` |
| **Card title** | `Heading/S/Semi Bold` | `heading.s` |
| **Body text** | `Text/L/Regular` | `text.l` |
| **Small body** | `Text/M/Regular` | `text.m` |
| **Form label** | `Label/M/Semi Bold` | `label.m` |
| **Button text** | `Label/M/Semi Bold` | `label.m` |
| **Navigation link** | `Link/L/Semi Bold` | `link.l` |
| **Inline link** | `Link/M/Semi Bold` | `link.m` |
| **Caption** | `Text/S/Regular` | `text.s` |
| **Fine print** | `Text/XS/Regular` | `text.xs` |

### Do's and Don'ts

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