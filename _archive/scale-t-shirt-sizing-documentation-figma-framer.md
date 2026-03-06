# T-Shirt Sizing for Figma & Framer Users

A practical guide to using T-Shirt sizing in design tools, specifically optimized for Figma and Framer workflows.

---

## What is T-Shirt Sizing?

T-Shirt sizing is a standardized spacing system that uses clothing size labels (XS, S, M, L, XL, etc.) instead of arbitrary pixel values. For Figma and Framer users, this means:

- **Figma**: Consistent spacing tokens that work with Auto Layout and Variables
- **Framer**: Reusable spacing values that integrate with Framer's layout system
- **Both**: A shared language between design and development

---

## Why T-Shirt Sizing Matters for Design Tools

### 🎨 **Figma Benefits**
- **Auto Layout Mastery**: Consistent spacing makes Auto Layout predictable
- **Variables Integration**: Use spacing tokens with Figma Variables
- **Component Consistency**: Spacing scales automatically across variants
- **Design System Scalability**: Easy to update spacing system-wide

### ⚡ **Framer Benefits**
- **Layout System Integration**: Works seamlessly with Framer's flex/grid systems
- **Responsive Design**: Mobile and desktop spacing variants
- **Component Reusability**: Spacing tokens make components more flexible
- **Code Generation**: Cleaner code output with semantic spacing values

### 🤝 **Cross-Tool Collaboration**
- **Shared Vocabulary**: Designers and developers use the same spacing names
- **Handoff Clarity**: No confusion about spacing values
- **System Consistency**: Same spacing scale across Figma, Framer, and code

---

## The Scale Design System T-Shirt Scale

| Size | Figma Value | Framer Value | Use Cases |
|------|-------------|--------------|-----------|
| **2XS** | 2px | `spacing.2xs` | Tightest spacing, ultra-dense layouts |
| **XS** | 4px | `spacing.xs` | Tight icon spacing, minimal gaps |
| **S** | 8px | `spacing.s` | Small component gaps, compact layouts |
| **M** | 12px | `spacing.m` | Default spacing, standard margins |
| **L** | 16px | `spacing.l` | Section spacing, generous padding |
| **XL** | 24px | `spacing.xl` | Major separations, hero sections |
| **2XL** | 32px | `spacing.2xl` | Large blocks, full-width sections |
| **3XL** | 40px | `spacing.3xl` | Page-level spacing, massive gaps |
| **4XL** | 48px | `spacing.4xl` | Extra large blocks, full sections |
| **5XL** | 56px | `spacing.5xl` | Very large spacing, major sections |
| **6XL** | 64px | `spacing.6xl` | Huge spacing, full-width sections |
| **7XL** | 72px | `spacing.7xl` | Massive spacing, hero sections |
| **8XL** | 80px | `spacing.8xl` | Ultra-large spacing, full-screen gaps |

---

## Figma Implementation

### Setting Up Spacing Variables

1. **Create Variable Collections**
   - Create a "Spacing" collection in Figma Variables
   - Add each T-Shirt size as a number variable
   - Name them: `spacing.2xs`, `spacing.xs`, `spacing.s`, `spacing.m`, `spacing.l`, `spacing.xl`, `spacing.2xl`, `spacing.3xl`, `spacing.4xl`, `spacing.5xl`, `spacing.6xl`, `spacing.7xl`, `spacing.8xl`

2. **Using Spacing in Auto Layout**
   ```scss
   // In Figma Auto Layout settings:
   Gap: {spacing.m}  // 12px
   Padding: {spacing.l}  // 16px
   ```

3. **Component Spacing Patterns**
   - **Buttons**: `padding: {spacing.s} {spacing.l}` (8px vertical, 16px horizontal)
   - **Cards**: `padding: {spacing.l}`, `gap: {spacing.m}` (16px padding, 12px gap)
   - **Modals**: `padding: {spacing.xl}`, `gap: {spacing.s}` (24px padding, 8px gap)

### Figma Best Practices

✅ **Do:**
- Use Auto Layout with spacing variables for all components
- Create component sets with consistent spacing
- Use spacing tokens for variant properties
- Document spacing values in component descriptions

❌ **Don't:**
- Use manual pixel values in Auto Layout
- Create components with inconsistent spacing
- Forget to update spacing across component variants

---

## Framer Implementation

### Setting Up Spacing Tokens

1. **Create Spacing Object**
   ```javascript
   // In your Framer project:
   const spacing = {
     "2xs": 2,
     xs: 4,
     s: 8,
     m: 12,
     l: 16,
     xl: 24,
     "2xl": 32,
     "3xl": 40,
     "4xl": 48,
     "5xl": 56,
     "6xl": 64,
     "7xl": 72,
     "8xl": 80
   }
   ```

2. **Using Spacing in Components**
   ```jsx
   // Button component
   export function Button({ label }) {
     return (
       <motion.button
         style={{
           padding: `${spacing.s}px ${spacing.l}px`,
           marginBottom: spacing.xs
         }}
       >
         {label}
       </motion.button>
     )
   }
   ```

3. **Responsive Spacing**
   ```jsx
   // Container with responsive spacing
   export function Container({ children }) {
     return (
       <motion.div
         style={{
           padding: isMobile ? spacing.s : spacing.xl,
           gap: spacing.m
         }}
       >
         {children}
       </motion.div>
     )
   }
   ```

### Framer Best Practices

✅ **Do:**
- Use spacing tokens for all layout properties
- Create reusable spacing utilities
- Implement responsive spacing variants
- Use Framer's layout props with spacing tokens

❌ **Don't:**
- Hardcode pixel values in components
- Use inconsistent spacing between similar components
- Ignore mobile spacing adjustments

---

## Cross-Tool Workflow

### Design to Development Handoff

**Figma → Framer → Code:**

1. **Design Phase (Figma)**
   - Use Auto Layout with spacing variables
   - Document spacing tokens in design system docs
   - Export spacing values as JSON

2. **Prototyping Phase (Framer)**
   - Import spacing tokens from Figma
   - Apply to Framer components
   - Test responsive behavior

3. **Development Phase**
   - Use same spacing scale in code
   - Implement CSS variables or design tokens
   - Maintain consistency across platforms

### Spacing Token Translation

| Figma Variable | Framer Token | CSS Variable |
|----------------|--------------|--------------|
| `spacing.2xs` | `spacing.2xs` | `--sc-space-2xs` |
| `spacing.xs` | `spacing.xs` | `--sc-space-xs` |
| `spacing.s` | `spacing.s` | `--sc-space-s` |
| `spacing.m` | `spacing.m` | `--sc-space-m` |
| `spacing.l` | `spacing.l` | `--sc-space-l` |
| `spacing.xl` | `spacing.xl` | `--sc-space-xl` |
| `spacing.2xl` | `spacing.2xl` | `--sc-space-2xl` |
| `spacing.3xl` | `spacing.3xl` | `--sc-space-3xl` |
| `spacing.4xl` | `spacing.4xl` | `--sc-space-4xl` |
| `spacing.5xl` | `spacing.5xl` | `--sc-space-5xl` |
| `spacing.6xl` | `spacing.6xl` | `--sc-space-6xl` |
| `spacing.7xl` | `spacing.7xl` | `--sc-space-7xl` |
| `spacing.8xl` | `spacing.8xl` | `--sc-space-8xl` |

---

## Common Design Patterns

### 1. Card Component

**Figma:**
- Auto Layout: Vertical
- Padding: `{spacing.l}` (16px)
- Gap between elements: `{spacing.m}` (12px)
- Margin between cards: `{spacing.m}` (12px)

**Framer:**
```jsx
<Card
  padding="l"
  gap="m"
  marginBottom="m"
>
  <CardHeader />
  <CardContent />
</Card>
```

### 2. Navigation Bar

**Figma:**
- Horizontal Auto Layout
- Padding: `{spacing.s}` (8px)
- Item gap: `{spacing.l}` (16px)
- Logo padding: `{spacing.xs}` (4px)

**Framer:**
```jsx
<NavBar
  padding="s"
  itemGap="l"
  logoPadding="xs"
/>
```

### 3. Form Layout

**Figma:**
- Vertical Auto Layout
- Field gap: `{spacing.l}` (16px)
- Label-to-input: `{spacing.xs}` (4px)
- Section gap: `{spacing.xl}` (24px)

**Framer:**
```jsx
<Form
  fieldGap="l"
  labelGap="xs"
  sectionGap="xl"
/>
```

---

## Responsive Design Strategy

### Mobile-First Approach

**Figma:**
- Start with mobile spacing (S = 8px, M = 12px, L = 16px)
- Create variants for desktop (S = 12px, M = 16px, L = 24px)
- Use variant properties to switch between modes

**Framer:**
```jsx
const mobileSpacing = { s: 8, m: 12, l: 16 }
const desktopSpacing = { s: 12, m: 16, l: 24 }

function ResponsiveComponent() {
  const spacing = isMobile ? mobileSpacing : desktopSpacing
  
  return (
    <div style={{ padding: spacing.l, gap: spacing.m }}>
      {/* content */}
    </div>
  )
}
```

### Breakpoint Integration

| Screen Size | Spacing Scale |
|-------------|---------------|
| < 768px | 2XS, XS, S, M, L (compressed) |
| 768px - 1024px | Standard scale |
| > 1024px | Standard scale + XL, 2XL, 3XL |

---

## Component Library Integration

### Figma Component Library

1. **Base Components**
   - Define spacing tokens at the top level
   - Use variants for spacing adjustments
   - Document spacing in component descriptions

2. **Layout Components**
   - Stack (vertical spacing)
   - Row (horizontal spacing)
   - Grid (gap and padding)
   - Container (padding and max-width)

### Framer Component Library

1. **Spacing Utilities**
   ```jsx
   // spacing-utils.js
   export const withSpacing = (Component) => {
     return ({ padding, gap, margin, ...props }) => {
       const spacing = useSpacing()
       return (
         <Component
           style={{
             padding: spacing[padding],
             gap: spacing[gap],
             margin: spacing[margin]
           }}
           {...props}
         />
       )
     }
   }
   
   // Usage example:
   const SpacedButton = withSpacing(motion.button)
   // <SpacedButton padding="s" margin="xs">Click me</SpacedButton>
   ```

2. **Layout Primitives**
   - `<Stack>` for vertical layouts with gap
   - `<Row>` for horizontal layouts with gap
   - `<Grid>` for grid layouts with gap
   - `<Container>` for centered layouts with padding

---

## Design System Documentation

### For Figma Users

**Spacing Reference:**
```
2XS (2px)  - Ultra-tight spacing
XS (4px)   - Tightest spacing
S  (8px)   - Compact spacing
M  (12px)  - Default spacing
L  (16px)  - Generous spacing
XL (24px)  - Large spacing
2XL (32px) - Extra large spacing
3XL (40px) - Massive spacing
4XL (48px) - Very massive spacing
5XL (56px) - Ultra-large spacing
6XL (64px) - Huge spacing
7XL (72px) - Massive spacing
8XL (80px) - Ultra-massive spacing
```

**Usage Guidelines:**
- Use M (12px) for most component gaps
- Use L (16px) for section separations
- Use S (8px) for tight icon groups
- Use XL (24px) for hero sections
- Use 2XS (2px) for ultra-dense layouts

### For Framer Users

**Spacing API:**
```javascript
import { spacing } from '@scale/design-tokens'

// Usage examples:
spacing['2xs'] // 2
spacing.xs  // 4
spacing.s   // 8
spacing.m   // 12
spacing.l   // 16
spacing.xl  // 24
spacing['2xl'] // 32
spacing['3xl'] // 40
spacing['4xl'] // 48
spacing['5xl'] // 56
spacing['6xl'] // 64
spacing['7xl'] // 72
spacing['8xl'] // 80
```

**Responsive Hooks:**
```javascript
import { useResponsiveSpacing } from '@scale/framer-hooks'

const { padding, gap } = useResponsiveSpacing({
  mobile: { padding: 's', gap: 'xs' },
  desktop: { padding: 'l', gap: 'm' }
})
```

---

## Migration Guide

### From Arbitrary Values to T-Shirt Sizing

**Step 1: Audit Current Spacing**
- List all current spacing values
- Map them to nearest T-Shirt size using the updated scale
- Identify inconsistencies

**Step 2: Update Figma**
- Create spacing variables with new values (2XS through 8XL)
- Update Auto Layout components to use new tokens
- Test component variants for consistency

**Step 3: Update Framer**
- Implement updated spacing tokens object
- Refactor components to use new spacing scale
- Test responsive behavior with new breakpoints

**Step 4: Document Changes**
- Update design system docs with new values
- Train team members on new spacing scale
- Create usage examples with updated tokens

**Migration Mapping Example:**
- Old 4px → New XS (4px) or 2XS (2px)
- Old 8px → New S (8px)
- Old 16px → New L (16px) or M (12px)
- Old 24px → New XL (24px)
- Old 32px → New 2XL (32px)
- Old 48px → New 4XL (48px)
- Old 64px → New 6XL (64px)

---

## Troubleshooting

### Common Issues

**Figma:**
- **Problem**: Variables not applying to Auto Layout
  - **Solution**: Ensure variables are in the same collection as the file

- **Problem**: Spacing looks different in variants
  - **Solution**: Check variant property values match spacing tokens

- **Problem**: Missing spacing sizes (2XS, 4XL, etc.)
  - **Solution**: Update variable collection to include all 13 spacing sizes

**Framer:**
- **Problem**: Spacing tokens not recognized
  - **Solution**: Import tokens from the correct file path and ensure all 13 sizes are included

- **Problem**: Responsive spacing not working
  - **Solution**: Check breakpoint logic and token values match the updated scale

- **Problem**: Component spacing looks too tight/loose
  - **Solution**: Verify you're using the new spacing values (M=12px, L=16px, etc.)

---

## Summary

T-Shirt sizing transforms spacing from arbitrary values into a systematic approach that works seamlessly across Figma, Framer, and code. By using this system, you'll create more consistent designs, faster handoffs, and cleaner code.

**Key Takeaways:**
- Use spacing variables in Figma Auto Layout with the updated 13-size scale (2XS through 8XL)
- Implement spacing tokens in Framer components using the same scale
- Maintain consistency across all tools with matching token names and values
- Document spacing decisions for your team using the updated reference tables
- Follow the mobile-first approach with responsive spacing variants
- Use the migration guide to transition from old spacing values to the new scale

**Updated Scale Values:**
- Small sizes: 2XS (2px), XS (4px), S (8px), M (12px)
- Medium sizes: L (16px), XL (24px), 2XL (32px), 3XL (40px)
- Large sizes: 4XL (48px), 5XL (56px), 6XL (64px), 7XL (72px), 8XL (80px)

---

**Last Updated:** December 2025  
**Design System:** Scale v1.0  
**Tools:** Figma, Framer