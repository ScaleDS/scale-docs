# Scale Design System
## Spacing Documentation

**Version:** 3.0.0
**Last Updated:** January 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Spacing Philosophy](#spacing-philosophy)
3. [Spacing System Architecture](#spacing-system-architecture)
4. [Spacing Scale](#spacing-scale)
5. [Spacing Concepts](#spacing-concepts)
6. [Usage Guidelines](#usage-guidelines)
7. [Responsive Spacing](#responsive-spacing)
8. [Accessibility](#accessibility)
9. [Figma Implementation](#figma-implementation)
10. [Framer Implementation](#framer-implementation)
11. [Best Practices](#best-practices)

---

## Overview

The Scale Design System uses a mathematical spacing system built on an 8px base unit. This systematic approach creates consistent, predictable layouts that scale gracefully across all screen sizes and platforms.

### Key Features

- **14 spacing tokens** from None (0px) to 8XL (80px)
- **8px base unit**: Industry-standard grid system
- **4px half-step**: Fine-tuned adjustments with Space/2XS
- **Mathematical progression**: Predictable, scalable increments
- **Native Figma Variables**: Full integration with Figma's variable system
- **Framer-ready**: Optimized for Framer's stack and layout systems

---

## Spacing Philosophy

### Design Principles

**Rhythm Through Repetition**
Consistent spacing creates visual rhythm:
- Predictable patterns guide the eye
- Repeated intervals feel harmonious
- Mathematical progression reduces decisions
- Systematic spacing scales confidently

**Proximity Communicates Relationships**
Space defines what belongs together (Gestalt principle of proximity):
- Closer elements appear related
- Larger gaps suggest separation
- Internal spacing should be less than external spacing
- Hierarchy emerges from spatial variation

**8px Base Unit: The Magic Number**
The 8px grid is industry standard for good reasons:
- Highly divisible (÷2 = 4, ÷4 = 2)
- Aligns with most screen resolutions
- Scales cleanly across device pixel ratios
- Supported by Apple and Google guidelines
- Prevents fractional pixel rendering issues

**Simplicity Over Complexity**
Fewer spacing values = more consistent designs:
- Limited options reduce decision fatigue
- Clear rules make handoff easier
- Predictable system scales across teams
- Constraints breed creativity

---

## Spacing System Architecture

### Single-Scale System

Unlike colors or typography which have semantic layers, spacing uses a single, direct scale:

```
Spacing Scale (Direct Application)
    ↓
Component Implementation
```

**Why no semantic layer?**
Spacing is inherently contextual. Rather than creating semantic aliases like "Button Padding" or "Card Margin," we use a universal scale that designers apply with intent based on spatial concepts (inset, stack, inline, grid).

### Naming Convention

**Spacing Pattern:**
`Space/Size`
Examples: `Space/S`, `Space/XL`, `Space/None`

**T-shirt sizing:**
We use familiar sizing nomenclature (XS, S, M, L, XL, 2XL...) rather than numbers, making the scale intuitive and memorable.

---

## Spacing Scale

### Complete Spacing Scale

Built on an 8px base unit with a 2px half-step for precision adjustments.

| Token | Value | Multiplier | Common Use Cases |
|-------|-------|------------|------------------|
| `Space/None` | `0px` | 0 | Remove spacing, reset margins |
| `Space/2XS` | `2px` | 0.25× | **Half-step** - Fine adjustments, optical corrections |
| `Space/XS` | `4px` | 0.5× | Tight spacing, icon-text gaps, small badges |
| `Space/S` | `8px` | 1× | **Base unit** - Standard element spacing |
| `Space/M` | `12px` | 1.5× | Comfortable element spacing, button padding |
| `Space/L` | `16px` | 2× | Component internal padding, card padding |
| `Space/XL` | `24px` | 3× | Component external margins, section spacing |
| `Space/2XL` | `32px` | 4× | Large component spacing, content blocks |
| `Space/3XL` | `40px` | 5× | Section separators, layout spacing |
| `Space/4XL` | `48px` | 6× | Major section breaks, hero padding |
| `Space/5XL` | `56px` | 7× | Large layout spacing, page margins |
| `Space/6XL` | `64px` | 8× | Extra large sections, hero elements |
| `Space/7XL` | `72px` | 9× | Massive layout spacing, landing pages |
| `Space/8XL` | `80px` | 10× | Maximum spacing, dramatic separation |

### Spacing Ranges by Density

**Small & Compact (0px - 8px)**
`Space/None`, `Space/2XS`, `Space/XS`, `Space/S`
- Tight UI elements
- Icon-text relationships
- Badge spacing
- Form element details
- Inline lists
- Button internal spacing

**Medium & Balanced (12px - 24px)**
`Space/M`, `Space/L`, `Space/XL`
- Standard component padding
- Card internal spacing
- Form field spacing
- Navigation items
- List item padding
- Default section gaps

**Large & Spacious (32px - 80px)**
`Space/2XL` through `Space/8XL`
- Layout-level spacing
- Page sections
- Hero elements
- Marketing layouts
- Content block separation
- Container padding

---

## Spacing Concepts

Rather than memorizing specific rules for every component, learn these fundamental spatial concepts that apply universally.

### 1. Inset (Padding)

**Definition**: Space between a container's edge and its content.

**Variants:**
- **Inset**: Equal padding on all sides
- **Inset Squish**: Less vertical padding (comfortable for buttons)
- **Inset Stretch**: More vertical padding (spacious cards)

**Component Examples:**
- Buttons: `Space/S` to `Space/M` (squish)
- Cards: `Space/L` to `Space/XL` (equal)
- Modals: `Space/XL` to `Space/2XL` (equal)
- Hero sections: `Space/4XL` to `Space/6XL` (stretch)

### 2. Stack (Vertical Spacing)

**Definition**: Vertical space between stacked elements.

**Spacing by Relationship:**
- **Tightly related** (same section): `Space/S` to `Space/M` (8-12px)
- **Related** (same content block): `Space/M` to `Space/L` (12-16px)
- **Loosely related** (different blocks): `Space/XL` to `Space/2XL` (24-32px)
- **Unrelated** (different sections): `Space/3XL` to `Space/6XL` (40-64px)

### 3. Inline (Horizontal Spacing)

**Definition**: Horizontal space between elements that flow like text.

**Common Patterns:**
- Tags/pills in a group
- Breadcrumb separators
- Button groups
- Inline icons with text
- Toolbar items

**Typical Values:**
- Icon-text: `Space/XS` to `Space/S` (4-8px)
- Pills/tags: `Space/S` to `Space/M` (8-12px)
- Buttons in group: `Space/M` to `Space/L` (12-16px)

### 4. Grid (Layout Spacing)

**Definition**: Space in multi-column or grid layouts (gutters).

**Responsive Gutters:**
- **Desktop**: `Space/XL` to `Space/3XL` (24-40px)
- **Tablet**: `Space/L` to `Space/XL` (16-24px)
- **Mobile**: `Space/M` to `Space/L` (12-16px)

### 5. Internal ≤ External Rule

**Principle**: Space inside an element should be less than or equal to space outside it.

**Why?** This ensures elements feel like distinct units with clear boundaries.

**Visual Result:**
✔ Cards feel distinct and separated
✗ If margin < padding, cards visually merge

---

## Usage Guidelines

### Do's

**✔ Use the spacing scale exclusively**
Never use arbitrary values like 15px, 22px, or 35px. Stick to the scale.

**✔ Think in multiples of 8**
Even before opening your calculator, estimate in 8s: "That needs about 3× spacing = 24px."

**✔ Apply the internal ≤ external rule**
Padding inside a component should be less than margins between components.

**✔ Use Space/2XS (2px) sparingly**
Reserve the half-step for optical adjustments, not standard spacing.

**✔ Create rhythm with repetition**
Use the same spacing value for similar relationships (e.g., all form field gaps = `Space/M`).

**✔ Let white space breathe**
Don't be afraid of larger spacing values. Empty space improves comprehension.

### Don'ts

**✗ Don't use spacing values off the scale**
No 10px, 18px, 25px, 30px, etc. These break the system.

**✗ Don't mix arbitrary and system values**
Using `Space/L` (16px) and random 14px margins creates visual discord.

**✗ Don't ignore optical adjustments**
Sometimes visual balance requires slight deviation. That's what `Space/2XS` is for.

**✗ Don't over-complicate with too many values**
Limit your designs to 5-7 spacing values per component for consistency.

**✗ Don't forget responsive adjustments**
Spacing often needs to reduce on smaller screens. Plan for it.

**✗ Don't use large spacing values for small components**
A tiny badge with `Space/XL` (24px) padding looks absurd.

### Component-Specific Spacing

**Buttons:**
| Size | Vertical Padding | Horizontal Padding |
|------|-----------------|-------------------|
| Small | `Space/XS` (4px) | `Space/M` (12px) |
| Medium | `Space/S` (8px) | `Space/L` (16px) |
| Large | `Space/M` (12px) | `Space/XL` (24px) |

**Cards:**
| Density | Padding | Internal Gap |
|---------|---------|--------------|
| Compact | `Space/M` (12px) | `Space/S` (8px) |
| Standard | `Space/L` (16px) | `Space/M` (12px) |
| Spacious | `Space/XL` (24px) | `Space/L` (16px) |

**Forms:**
| Element | Spacing |
|---------|---------|
| Label to Input | `Space/XS` (4px) |
| Field to Field | `Space/L` (16px) |
| Section Break | `Space/2XL` (32px) |

**Lists:**
| Density | Item Padding |
|---------|-------------|
| Compact | `Space/XS` (4px) |
| Standard | `Space/S` (8px) |
| Spacious | `Space/M` (12px) |

---

## Responsive Spacing

### Scaling Strategy

Spacing should reduce proportionally on smaller screens to maximize content visibility.

**General Rule**: Reduce spacing by 25-50% on mobile compared to desktop.

### Responsive Spacing Matrix

| Context | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Button padding** | `Space/XS` - `Space/S` | `Space/S` - `Space/M` | `Space/S` - `Space/M` |
| **Card padding** | `Space/M` - `Space/L` | `Space/L` - `Space/XL` | `Space/XL` - `Space/2XL` |
| **Grid gutter** | `Space/M` - `Space/L` | `Space/L` - `Space/XL` | `Space/XL` - `Space/2XL` |
| **Section spacing** | `Space/XL` - `Space/2XL` | `Space/2XL` - `Space/3XL` | `Space/3XL` - `Space/6XL` |
| **Page margins** | `Space/L` - `Space/XL` | `Space/XL` - `Space/2XL` | `Space/2XL` - `Space/4XL` |

---

## Accessibility

### Touch Targets

**Minimum Size**: 44px × 44px (iOS) or 48px × 48px (Android)

Consider spacing when calculating touch targets. In Figma and Framer, ensure your interactive elements meet these minimum dimensions by combining content size with appropriate padding.

### Reading Comfort

**Line length and spacing** affect readability:
- Optimal line length: 60-90 characters
- Use `Space/L` to `Space/XL` (16-24px) between paragraphs
- Large text blocks need more surrounding white space

### Cognitive Load

Consistent spacing reduces cognitive load:
- Predictable patterns are easier to scan
- Rhythm helps users find information faster
- Clear hierarchy through spacing improves navigation

---

## Figma Implementation

### Setting Up Spacing Variables

1. **Create a Variable Collection** named "Spacing"
2. **Add Number Variables** for each spacing token:
   - `Space/None` = 0
   - `Space/2XS` = 2
   - `Space/XS` = 4
   - `Space/S` = 8
   - `Space/M` = 12
   - `Space/L` = 16
   - `Space/XL` = 24
   - `Space/2XL` = 32
   - `Space/3XL` = 40
   - `Space/4XL` = 48
   - `Space/5XL` = 56
   - `Space/6XL` = 64
   - `Space/7XL` = 72
   - `Space/8XL` = 80

3. **Organize with Groups**: Use the `/` naming convention to create a hierarchical structure in the variables panel

### Using Variables in Auto Layout

**Applying Spacing Variables:**
1. Select a frame with Auto Layout enabled
2. Click on the gap or padding value
3. Click the variable icon (hexagon)
4. Select the appropriate `Space/` variable

**Auto Layout Settings:**
- **Gap**: Use spacing variables for consistent gaps between child elements
- **Padding**: Apply variables to horizontal and vertical padding independently
- **Individual Padding**: For asymmetric layouts, apply different variables to each side

### Creating Spacing Variants

Build component variants with different spacing densities:

| Variant | Padding Variable | Gap Variable |
|---------|-----------------|--------------|
| Compact | `Space/M` | `Space/S` |
| Comfortable | `Space/L` | `Space/M` |
| Spacious | `Space/XL` | `Space/L` |

### Variable Modes for Responsive Design

Create modes within your Spacing collection for different breakpoints:

| Variable | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| `Space/Section` | 64 | 48 | 32 |
| `Space/Card` | 24 | 20 | 16 |
| `Space/Page-Margin` | 48 | 32 | 24 |

**Applying Modes:**
1. Select the top-level frame
2. In the Layer panel, click the variable mode selector
3. Choose the appropriate breakpoint mode

### Tokens Studio Integration

For advanced token management, use Tokens Studio plugin:

1. **Import tokens** from JSON following the DTCG specification
2. **Sync with repositories** for version control
3. **Use semantic aliases** when needed for specific use cases
4. **Export to code** for developer handoff

**Token Structure Example:**
```
spacing/
├── none
├── 2xs
├── xs
├── s (base)
├── m
├── l
├── xl
├── 2xl
├── 3xl
├── 4xl
├── 5xl
├── 6xl
├── 7xl
└── 8xl
```

### Best Practices for Figma

**✔ Always use variables, never hard-coded values**
This ensures consistency and enables easy system-wide updates.

**✔ Name layers descriptively**
Include spacing context in layer names for clearer handoff (e.g., "Card / Padding-L / Gap-M").

**✔ Create spacing documentation frames**
Build reference frames showing all spacing tokens with visual examples.

**✔ Use constraints with variables**
Combine Auto Layout with constraints for truly responsive components.

**✔ Leverage variable scoping**
Scope spacing variables to Gap and Padding to prevent misuse.

---

## Framer Implementation

### Understanding Framer's Layout System

Framer uses a powerful stack-based layout system that maps directly to the Scale spacing tokens.

### Setting Up Spacing in Framer

**Using the Design Panel:**
1. Select any frame or stack
2. In the Layout section, find Gap and Padding controls
3. Enter spacing values from the Scale system

**Creating Reusable Spacing:**
While Framer doesn't have native design tokens like Figma, you can:
1. Create template components with preset spacing
2. Use Code Overrides for programmatic spacing control
3. Leverage Framer's component variants for spacing densities

### Stacks and Spacing

**Vertical Stacks:**
- Set Direction to "Vertical"
- Apply Gap using Scale spacing values
- Use for content sections, form fields, card contents

**Horizontal Stacks:**
- Set Direction to "Horizontal"
- Apply Gap for inline element spacing
- Use for button groups, navigation items, tag lists

**Stack Properties:**
| Property | Scale Application |
|----------|-------------------|
| Gap | Use `Space/S` to `Space/XL` for element separation |
| Padding | Apply `Space/M` to `Space/2XL` for container insets |
| Distribution | Combine with spacing for precise layouts |

### Padding in Framer

**Uniform Padding:**
1. Select the frame
2. In Layout, click the padding control
3. Enter a single value (e.g., 16 for `Space/L`)

**Individual Padding:**
1. Click the padding control to expand
2. Set Top, Right, Bottom, Left independently
3. Use different Scale values for asymmetric layouts (e.g., `Space/4XL` top/bottom, `Space/XL` left/right for hero sections)

### Responsive Spacing with Breakpoints

**Setting Up Breakpoints:**
1. Add breakpoints for Tablet (810px) and Mobile (390px)
2. Adjust spacing values at each breakpoint
3. Use the inheritance system efficiently

**Responsive Spacing Strategy:**

| Breakpoint | Section Padding | Card Padding | Grid Gap |
|------------|-----------------|--------------|----------|
| Desktop (1440px) | `Space/4XL` (48px) | `Space/XL` (24px) | `Space/XL` (24px) |
| Tablet (810px) | `Space/2XL` (32px) | `Space/L` (16px) | `Space/L` (16px) |
| Mobile (390px) | `Space/XL` (24px) | `Space/M` (12px) | `Space/M` (12px) |

**Applying Responsive Values:**
1. Start with Desktop breakpoint
2. Switch to Tablet/Mobile breakpoints
3. Override only the spacing values that need to change
4. Let other values inherit from larger breakpoints

### Fill and Fit Sizing with Spacing

**Fill Mode:**
- Child elements expand to fill available space
- Combine with Gap to create fluid, evenly-spaced layouts
- Ideal for navigation bars, button groups

**Fit Content Mode:**
- Parent container shrinks to fit children
- Padding and Gap define the breathing room
- Ideal for cards, buttons, badges

### Component Variants for Spacing

Create component variants with different spacing densities:

**Card Component Variants:**
| Variant | Padding | Gap |
|---------|---------|-----|
| `density=compact` | 12px | 8px |
| `density=comfortable` | 16px | 12px |
| `density=spacious` | 24px | 16px |

**Button Component Variants:**
| Variant | Vertical Padding | Horizontal Padding |
|---------|-----------------|-------------------|
| `size=small` | 4px | 12px |
| `size=medium` | 8px | 16px |
| `size=large` | 12px | 24px |

### Best Practices for Framer

**✔ Use Stacks for everything**
Avoid manual positioning. Stacks with proper Gap values create maintainable layouts.

**✔ Set a max-width for content**
On large screens, constrain content width (1200-1440px) and center it with auto margins.

**✔ Minimize breakpoint overrides**
Only override spacing when necessary. Excessive overrides create maintenance burden.

**✔ Create spacing template sections**
Build reusable section templates with preset spacing for headers, content blocks, and footers.

**✔ Use relative sizing with fixed spacing**
Combine percentage widths with fixed pixel spacing from the Scale system.

**✔ Test on real devices**
Preview your Framer site on actual devices to verify spacing feels appropriate.

### Framer Code Overrides for Spacing

For advanced use cases, create code overrides to apply spacing programmatically:

```typescript
// spacingOverrides.tsx
export const compactSpacing = {
  padding: 12,
  gap: 8,
}

export const comfortableSpacing = {
  padding: 16,
  gap: 12,
}

export const spaciousSpacing = {
  padding: 24,
  gap: 16,
}
```

Apply these overrides to frames for consistent, reusable spacing patterns across your project.

---

## Best Practices

### 1. Start with the 8px Grid Mindset

Train yourself to think in multiples of 8:
- 8px = 1 unit
- 16px = 2 units
- 24px = 3 units
- 32px = 4 units

**Exercise**: When you see spacing, estimate it in units before measuring.

### 2. Establish Spatial Hierarchy

Use spacing to create clear information architecture:

**Micro (0-8px)**: Related inline elements
**Meso (12-24px)**: Related components
**Macro (32-80px)**: Unrelated sections

### 3. Create Spacing Patterns

Document standard patterns for common layouts:
- Form spacing pattern
- Card spacing pattern
- List spacing pattern
- Navigation spacing pattern

**Example Form Pattern:**
```
Label: 4px below previous field
Input: 4px below label
Helper text: 4px below input
Next field: 16px below helper text
Section break: 32px
```

### 4. Use Negative Space Intentionally

Empty space is not wasted space:
- Increases focus on important elements
- Improves readability
- Creates premium, professional feel
- Guides eye flow

### 5. Compensate for Visual Weight

Heavier elements may need more space:
- Images often need more surrounding space
- Dark backgrounds need more padding
- Text-heavy sections benefit from larger gaps

### 6. Test at Multiple Zoom Levels

Spacing should feel comfortable at:
- 100% zoom (default)
- 125% zoom (common accessibility setting)
- 150% zoom (high accessibility)

### 7. Document Exceptions

When you must break the spacing scale:
- Document why
- Use `Space/2XS` for optical corrections
- Propose new spacing values if pattern emerges

---

## Spacing Token Quick Reference

### Most Commonly Used Tokens

**Tight Spacing:**
- `Space/XS` (4px) - Icon-text gaps, badges
- `Space/S` (8px) - Base unit, tight element spacing

**Comfortable Spacing:**
- `Space/M` (12px) - Button padding, form spacing
- `Space/L` (16px) - Card padding, list items
- `Space/XL` (24px) - Component margins, section spacing

**Generous Spacing:**
- `Space/2XL` (32px) - Large component spacing
- `Space/3XL` (40px) - Section separators
- `Space/4XL` (48px) - Hero padding, major sections

### Spacing by Component Type

| Component | Internal Padding | External Margin | Gap (if applicable) |
|-----------|-----------------|-----------------|---------------------|
| **Button (S)** | `4px 12px` | `8px` | - |
| **Button (M)** | `8px 16px` | `12px` | - |
| **Button (L)** | `12px 24px` | `16px` | - |
| **Card** | `16px - 24px` | `16px - 24px` | `12px - 16px` |
| **Input** | `8px 12px` | - | - |
| **Form Field** | - | `16px` (between fields) | - |
| **List Item** | `8px 12px` | - | - |
| **Navigation** | `12px 16px` | - | `8px - 12px` |

---

## Changelog

### Version 3.0.0 (Current)
- Complete 8px-based spacing system
- 14 spacing tokens from 0px to 80px
- 2px half-step for precision
- Mathematical progression for scalability
- Figma Variables integration
- Framer implementation guidelines
- Responsive spacing strategies

---

## Resources

- **Figma File:** Scale Design System 3.0.0
- **Framer Project:** Scale Design System Templates
- **8pt Grid Guide:** [Intro to the 8-Point Grid System](https://spec.fm/specifics/8-pt-grid)
- **Spacing Articles:** Nathan Curtis on [Space in Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)
- **Figma Variables:** [Figma Variables Documentation](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- **Framer Academy:** [Stacks and Relative Positioning](https://www.framer.com/academy/lessons/framer-fundamentals-stacks-and-relative-positioning)

---

## Support

For questions about spacing usage, responsive strategies, or token application:
- Create an issue in the Scale Design System repository
- Contact the design system team
- Review component-specific documentation

---

*Built with care by the Scale Design System team*
