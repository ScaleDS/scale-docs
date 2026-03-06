# Iconography System

A comprehensive guide to using icons in the Scale Design System, including Feather Icons by Cole Bemis and custom status icons.

---

## Overview

Icons are visual symbols that represent actions, objects, or concepts, providing quick visual cues to help users understand and navigate your interface. Scale uses a systematic approach to iconography that ensures consistency, scalability, and clarity across all platforms. Our icon system combines:

- **Feather Icons** – A collection of open-source icons by Cole Bemis
- **Custom Status Icons** – Specialized icons for Info, Warning, Error, and Success states
- **Standardized Sizing** – Three core sizes: 16px, 24px, and 32px
- **Semantic Usage** – Clear guidelines for when and how to use each icon

> [!IMPORTANT]
> Always use the provided icon tokens and components rather than importing icons directly. This ensures consistency and proper sizing across your designs.

---

## Icon Libraries

### Feather Icons

Feather Icons by Cole Bemis is our primary icon library, providing a clean, consistent set of interface icons.

**Characteristics:**
- Minimal, geometric design
- 2px stroke width
- Consistent 24x24px viewBox
- Open source (MIT license)
- Optimized for UI interfaces

**Common Feather Icons:**
| Icon | Use Case | Token |
|------|----------|-------|
| `arrow-left` | Back navigation | `icon/navigation/arrow-left` |
| `arrow-right` | Forward navigation | `icon/navigation/arrow-right` |
| `chevron-down` | Expand/collapse | `icon/navigation/chevron-down` |
| `search` | Search actions | `icon/action/search` |
| `settings` | Settings/preferences | `icon/action/settings` |
| `user` | User profile/account | `icon/action/user` |
| `bell` | Notifications | `icon/notification/bell` |
| `alert-circle` | Information alerts | `icon/status/info-circle` |
| `check` | Success/confirmation | `icon/status/check` |
| `x` | Close/dismiss | `icon/action/close` |
| `menu` | Hamburger menu | `icon/action/menu` |
| `trash` | Delete/remove | `icon/action/trash` |
| `edit` | Edit/modify | `icon/action/edit` |
| `download` | Download action | `icon/action/download` |
| `upload` | Upload action | `icon/action/upload` |

### Custom Status Icons

Scale includes four custom status icons specifically designed for semantic messaging.

| Icon | Token | Use Case | Color |
|------|-------|----------|-------|
| **Info** | `icon/status/info` | Informational messages, help text | `Icon/Info` (Brand) |
| **Warning** | `icon/status/warning` | Warning messages, cautionary notes | `Icon/Warning` (Orange) |
| **Error** | `icon/status/error` | Error messages, critical failures | `Icon/Negative` (Red) |
| **Success** | `icon/status/success` | Success messages, confirmations | `Icon/Positive` (Green) |

**Design Specifications:**
- All status icons are 24x24px by default
- Designed with clear visual distinction
- Optimized for use in alerts and validation messages
- Always pair with appropriate semantic colors

---

## Sizing System

Scale uses three standard icon sizes to maintain visual hierarchy and consistency:

### Size Specifications

| Size | Token | Dimensions | Use Case |
|------|-------|------------|----------|
| **Small** | `icon/size/small` | 16×16px | Inline icons, compact UI, tags, small buttons |
| **Medium** | `icon/size/medium` | 24×24px | Standard UI elements, buttons, navigation, cards |
| **Large** | `icon/size/large` | 32×32px | Prominent actions, hero sections, large buttons |

### Size Usage Guidelines

#### **Small (16px)**
✅ **Do** use for:
- Inline text icons (e.g., "arrow-right" in links)
- Tags and badges
- Compact table cells
- Small icon buttons in dense interfaces
- Status indicators in lists

❌ **Don't** use for:
- Primary actions
- Navigation elements
- Standalone icons

#### **Medium (24px)**
✅ **Do** use for:
- Standard icon buttons
- Navigation elements
- Form input icons (search, clear)
- Card actions
- Menu items
- Default size for most use cases

❌ **Don't** use for:
- Very small UI elements (use 16px)
- Hero sections (use 32px)

#### **Large (32px)**
✅ **Do** use for:
- Hero section icons
- Large call-to-action buttons
- Empty state illustrations
- Prominent feature highlights
- Dashboard widgets

❌ **Don't** use for:
- Inline text
- Compact interfaces
- Standard navigation

---

## Crafting Guidelines

### Design Principles

#### **1. Consistency**
- Use only Feather Icons or the four custom status icons
- Maintain consistent stroke width (2px for Feather)
- Keep aspect ratios consistent
- Use the standard sizing system

#### **2. Clarity**
- Icons should be immediately recognizable
- Avoid overly complex or decorative icons
- Test at small sizes (16px) for legibility
- Use negative space effectively

#### **3. Semantic Meaning**
- Icons should reinforce meaning, not replace it
- Pair icons with text labels when possible
- Use status icons only for their intended purpose
- Avoid using color alone to convey meaning

#### **4. Accessibility**
- Provide text alternatives for all icons
- Use `aria-label` attributes in code
- Ensure sufficient contrast ratios
- Don't rely solely on icons for critical information

### Icon States

Icons should reflect the state of their parent element:

| State | Visual Treatment | Usage |
|-------|------------------|-------|
| **Default** | Standard icon color | Normal display |
| **Hover** | Same color or slightly lighter | Interactive elements |
| **Active/Selected** | Semantic color (Brand, Positive, etc.) | Selected state |
| **Disabled** | `Icon/Disabled` color (30% opacity) | Inactive elements |

### Icon + Text Combinations

When combining icons with text:

1. **Spacing**: Use 4-8px spacing between icon and text
2. **Alignment**: Center-align icons with text
3. **Size Matching**: 
   - 16px icon → 12-14px text
   - 24px icon → 14-16px text
   - 32px icon → 18-20px text

---

## Usage in Figma

### Using Feather Icons in Figma

#### **Method 1: Feather Icon Plugin**
1. Install the "Feather Icons" plugin in Figma
2. Access via Plugins → Feather Icons
3. Search for the icon you need
4. Insert at current selection
5. Resize to appropriate size (16, 24, or 32px)

#### **Method 2: Scale Icon Components**
1. Open the Scale Design System file
2. Navigate to the "Icons" page/library
3. Find the required icon component
4. Drag instance onto canvas
5. Use the component properties to:
   - Select size (Small/Medium/Large)
   - Choose variant (if applicable)
   - Set color via style variables

### Figma Component Structure

Scale icons in Figma follow this structure:

```
Icon Component
├── Size Property (16/24/32px)
├── Color Property (Primary/Subtle/Semantic)
└── Variant (if multiple states)
```

### Figma Best Practices

✅ **Do**:
- Use component instances, not raw SVGs
- Apply color styles from the design system
- Use auto-layout for icon + text combinations
- Create variants for different states

❌ **Don't**:
- Break apart icon components
- Manually edit SVG paths
- Use arbitrary colors
- Scale disproportionately

### Figma Icon Styles

Scale provides these color styles for icons:
- `Icon/Primary`
- `Icon/Subtle`
- `Icon/Inverse`
- `Icon/Disabled`
- `Icon/Selected`
- `Icon/Brand`
- `Icon/Info`
- `Icon/Positive`
- `Icon/Warning`
- `Icon/Negative`

---

## Usage in Framer

### Using Icons in Framer

#### **Method 1: Feather Icons Component**
1. Use the Feather Icons component from the Scale library
2. Select the icon name from the dropdown
3. Adjust size via component properties
4. Set color using Framer's color variables

#### **Method 2: SVG Import**
1. Import SVG files from the Feather Icons library
2. Wrap in a component for reusability
3. Expose size and color as properties
4. Use Framer variables for theming

### Framer Component Setup

```javascript
// Icon component properties
{
  icon: "arrow-left" | "search" | "check" | ...,
  size: "small" | "medium" | "large",
  color: "primary" | "subtle" | "brand" | "positive" | ...
}
```

### Framer Best Practices

#### **1. Create Reusable Icon Components**
```javascript
// Base icon component
export function Icon({ icon, size = "medium", color = "primary" }) {
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32
  };
  
  const colorMap = {
    primary: "var(--icon-primary)",
    brand: "var(--icon-brand)",
    positive: "var(--icon-positive)",
    // ... etc
  };
  
  return (
    <FeatherIcon 
      name={icon}
      width={sizeMap[size]}
      height={sizeMap[size]}
      color={colorMap[color]}
    />
  );
}
```

#### **2. Use Local Variables**
- Define icon sizes as local variables
- Create color tokens for semantic usage
- Use variants for different states

#### **3. Component Variants**
Create variants for:
- Size (Small, Medium, Large)
- State (Default, Hover, Active, Disabled)
- Color (Primary, Brand, Positive, Warning, Negative)

#### **4. Documentation**
- Add descriptions to component properties
- Include usage examples
- Document which icons are available

### Framer Limitations & Workarounds

**Limitations:**
- No global icon library system
- Cannot easily swap icon sets
- Limited built-in icon components

**Workarounds:**
- Create a master icon component with all variants
- Use Framer's component property system
- Document available icons in a separate page
- Create helper components for common patterns (Icon + Text)

---

## Icon Tokens & Naming

### Token Structure

Icons follow the same semantic naming convention as other Scale tokens:

```
Icon/{Variant}
```

**Variants:**
- **Primary** – Standard icons for main actions
- **Subtle** – Secondary, less prominent icons
- **Inverse** – Icons on dark backgrounds
- **Disabled** – Inactive icons
- **Selected** – Selected or active icons
- **Brand** – Brand-colored icons
- **Info** – Informational icons
- **Positive** – Success icons
- **Warning** – Warning icons
- **Negative** – Error icons

### Examples

| Token | Use Case | Color |
|-------|----------|-------|
| `Icon/Primary` | Standard UI icons | Neutral/900 (light) / Neutral/50 (dark) |
| `Icon/Subtle` | Secondary/decorative icons | Neutral/600 |
| `Icon/Inverse` | Icons on dark backgrounds | Neutral/50 (light) / Neutral/900 (dark) |
| `Icon/Disabled` | Inactive icons | Neutral/300 (light) / Neutral/700 (dark) |
| `Icon/Selected` | Selected/active icons | Brand/500 (light) / Brand/400 (dark) |
| `Icon/Brand` | Brand-colored icons | Brand/500 (light) / Brand/400 (dark) |
| `Icon/Info` | Informational icons | Brand/500 (light) / Brand/400 (dark) |
| `Icon/Positive` | Success icons | Green/500 (light) / Green/400 (dark) |
| `Icon/Warning` | Warning icons | Orange/500 (light) / Orange/400 (dark) |
| `Icon/Negative` | Error icons | Red/500 (light) / Red/400 (dark) |

### Icon Component Tokens

For actual icon components in Figma/Framer, use these naming patterns:

**Feather Icons:**
```
icon/navigation/arrow-left
icon/action/search
icon/status/alert-circle
icon/action/settings
icon/action/user
icon/notification/bell
icon/action/close
icon/action/menu
icon/action/edit
icon/action/trash
icon/action/download
icon/action/upload
```

**Custom Status Icons:**
```
icon/status/info
icon/status/warning
icon/status/error
icon/status/success
```

### Size Tokens

Icons use size tokens that follow the t-shirt sizing pattern:

```
icon/size/small   → 16px
icon/size/medium  → 24px
icon/size/large   → 32px
```

---

## Common Patterns

### 1. Navigation with Icons

```css
/* CSS */
.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
}

.nav-icon {
  width: 24px;
  height: 24px;
  color: var(--icon-primary);
}
```

```javascript
// Framer
<Stack direction="horizontal" gap={8} align="center">
  <Icon icon="arrow-left" size="medium" color="primary" />
  <Text>Back</Text>
</Stack>
```

### 2. Status Messages

```css
/* Success message */
.success-message {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--background-positive);
  color: var(--text-primary);
}

.success-icon {
  width: 24px;
  height: 24px;
  color: var(--icon-positive);
}
```

**Visual:**
```
✓ Success message here
```

### 3. Icon Buttons

```css
/* Icon button */
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.icon-button:hover {
  background: var(--background-subtle);
}

.icon-button svg {
  width: 24px;
  height: 24px;
  color: var(--icon-primary);
}
```

### 4. Empty States

```css
/* Empty state */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px;
  text-align: center;
}

.empty-icon {
  width: 32px;
  height: 32px;
  color: var(--icon-subtle);
}
```

---

## Accessibility

### Text Alternatives

All icons must have appropriate text alternatives:

#### **Decorative Icons**
If the icon is purely decorative:
```html
<!-- Decorative - no alt text needed -->
<svg aria-hidden="true">...</svg>
```

#### **Informative Icons**
If the icon conveys meaning:
```html
<!-- Informative -->
<svg aria-label="Settings" role="img">...</svg>

<!-- Or with hidden text -->
<span class="sr-only">Settings</span>
<svg aria-hidden="true">...</svg>
```

### Contrast Requirements

- **Standard icons**: Minimum 3:1 contrast ratio
- **Small icons (16px)**: May require higher contrast
- **Status icons**: Always use semantic colors for proper contrast

### Don't Rely on Icons Alone

✅ **Do**:
- Pair icons with text labels
- Use multiple indicators (icon + color + text)
- Provide context for icon actions

❌ **Don't**:
- Use icons without labels for critical actions
- Rely solely on color to differentiate icons
- Use ambiguous icons without explanation

---

## Quick Reference

### Common Icon Sizes

| Use Case | Size | Example |
|----------|------|---------|
| Inline links | 16px | "Learn more →" |
| Form inputs | 16px | Search, clear |
| Table cells | 16px | Action icons |
| Standard buttons | 24px | Save, Edit, Delete |
| Navigation | 24px | Menu, Back, Close |
| Card actions | 24px | Card menu, expand |
| Hero sections | 32px | Feature highlights |
| Empty states | 32px | No data, success |

### Status Icon Combinations

| Message Type | Icon | Icon Color | Background | Text |
|--------------|------|------------|------------|------|
| **Info** | `icon/status/info` | `Icon/Info` | `Background/Info` | `Text/Primary` |
| **Success** | `icon/status/success` | `Icon/Positive` | `Background/Positive` | `Text/Primary` |
| **Warning** | `icon/status/warning` | `Icon/Warning` | `Background/Warning` | `Text/Primary` |
| **Error** | `icon/status/error` | `Icon/Negative` | `Background/Negative` | `Text/Primary` |

### Icon + Text Spacing

| Icon Size | Text Size | Gap |
|-----------|-----------|-----|
| 16px | 12-14px | 4px |
| 24px | 14-16px | 8px |
| 32px | 18-20px | 12px |

---

## Do's and Don'ts

### ✅ Do

- **Use the standard sizes** (16, 24, 32px)
- **Pair icons with text** for clarity
- **Use semantic colors** for status icons
- **Maintain consistent stroke widths**
- **Test icons at small sizes** for legibility
- **Provide text alternatives** for accessibility
- **Use Feather Icons** for standard UI elements
- **Use custom status icons** for messaging

### ❌ Don't

- **Use arbitrary sizes** outside the system
- **Use icons without labels** for critical actions
- **Mix icon libraries** (stick to Feather + custom)
- **Scale icons disproportionately**
- **Use color alone** to convey meaning
- **Overuse decorative icons**
- **Use status icons** for non-status purposes
- **Break apart icon components**

---

## Implementation Checklist

When using icons in your designs:

- [ ] **Choose the right icon** – Does it clearly communicate the action/state?
- [ ] **Select appropriate size** – 16/24/32px based on context
- [ ] **Apply correct color** – Use semantic tokens for status icons
- [ ] **Add text alternative** – Provide `aria-label` or hidden text
- [ ] **Check contrast** – Ensure 3:1 minimum ratio
- [ ] **Test at small sizes** – Verify 16px is legible
- [ ] **Maintain spacing** – 4-12px gap between icon and text
- [ ] **Use component instances** – Don't break apart SVGs
- [ ] **Document usage** – Add notes for complex icon patterns

---

## Summary

The Scale iconography system provides a comprehensive, consistent approach to using icons across your designs. By following these guidelines:

1. **Use Feather Icons** for standard UI elements
2. **Use custom status icons** for messaging
3. **Stick to 16/24/32px sizes**
4. **Apply semantic colors** appropriately
5. **Always provide text alternatives**
6. **Use component systems** in Figma/Framer

This ensures your icons are clear, accessible, and consistent with the Scale Design System.

---

**Last Updated:** January 2026  
**Design System:** Scale v1.0  
**Icon Library:** Feather Icons v4.29.0