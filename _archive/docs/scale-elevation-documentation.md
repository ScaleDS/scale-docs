# Elevation System

A comprehensive guide to using elevation, surface levels, and shadows in the Scale Design System.

---

## What is Elevation?

Elevation creates depth and separation between UI elements. It combines **surface colors** with **shadows** to indicate which elements appear above others in the interface.

Elevation serves three key purposes:
- **Visual Hierarchy** – Shows which elements are most important
- **Spatial Awareness** – Helps users understand relationships between components
- **Interaction Feedback** – Indicates interactive states like hover, focus, and active states

> [!IMPORTANT]
> Always use semantic elevation tokens (`Surface/L1` through `Surface/L6`) paired with their corresponding shadow tokens (`Shadow/L1` through `Shadow/L6`). This ensures consistent depth across both light and dark themes.

---

## Levels

Scale uses a 6-level elevation scale. Each level combines a surface color with a shadow value.

### Complete Elevation Reference

| Level | Surface Token | Shadow Token | Use Case | Light Mode Surface | Dark Mode Surface |
|-------|---------------|--------------|----------|-------------------|-------------------|
| **L0** | `Surface/L0` | – | Base page background, lowest elevation | `#ffffff` | `#000000` |
| **L1** | `Surface/L1` | `Shadow/L1` | Cards on page, subtle containers | `#ffffff` | `#0d0d0d` |
| **L2** | `Surface/L2` | `Shadow/L2` | Dropdowns, popovers, panels | `#ffffff` | `#1a1a1a` |
| **L3** | `Surface/L3` | `Shadow/L3` | Modals, dialogs, overlays | `#ffffff` | `#262626` |
| **L4** | `Surface/L4` | `Shadow/L4` | Tooltips, floating action buttons | `#ffffff` | `#333333` |
| **L5** | `Surface/L5` | `Shadow/L5` | High-priority overlays, context menus | `#ffffff` | `#404040` |
| **L6** | `Surface/L6` | `Shadow/L6` | Highest elevation, system alerts | `#ffffff` | `#4c4c4c` |

---

## Shadow Specifications

Each shadow level uses a two-layer system for optimal depth perception:

### Shadow Values

| Token | CSS Box Shadow | Visual Effect |
|-------|----------------|---------------|
| **Shadow/L1** | `0px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.08)` | Subtle lift |
| **Shadow/L2** | `0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.08)` | Light elevation |
| **Shadow/L3** | `0px 8px 16px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.08)` | Medium elevation |
| **Shadow/L4** | `0px 10px 20px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(0, 0, 0, 0.08)` | High elevation |
| **Shadow/L5** | `0px 12px 24px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08)` | Very high elevation |
| **Shadow/L6** | `0px 16px 32px rgba(0, 0, 0, 0.1), 0px 0px 12px rgba(0, 0, 0, 0.08)` | Maximum elevation |

### Shadow Anatomy

Each shadow consists of two parts:
1. **Drop Shadow** – Creates the main depth effect (e.g., `0px 8px 16px`)
2. **Ambient Shadow** – Adds subtle depth around edges (e.g., `0px 0px 6px`)

---

## Elevation in Themes

### Light Mode
In light mode, all surfaces use white backgrounds. **Elevation is created entirely by shadows.**

```
Light Mode Example:
┌─────────────────────────────────┐
│ Surface/L0 (White page)         │
│  ┌────────────────────────────┐ │
│  │ Surface/L1 (White card)    │ │
│  │  Shadow/L1 (Subtle)        │ │
│  │  ┌──────────────────────┐  │ │
│  │  │ Surface/L3 (White)   │  │ │
│  │  │ Shadow/L3 (Medium)   │  │ │
│  │  └──────────────────────┘  │ │
│  └────────────────────────────┘ │
└─────────────────────────────────┘
```

### Dark Mode
In dark mode, surfaces become progressively **lighter** as elevation increases, creating depth through color contrast **in addition to shadows.**

```
Dark Mode Example:
┌─────────────────────────────────┐
│ Surface/L0 (#000000 - Black)    │
│  ┌────────────────────────────┐ │
│  │ Surface/L1 (#0d0d0d)       │ │
│  │ Shadow/L1 (Subtle)         │ │
│  │  ┌──────────────────────┐  │ │
│  │  │ Surface/L3 (#262626) │  │ │
│  │  │ Shadow/L3 (Medium)   │  │ │
│  │  └──────────────────────┘  │ │
│  └────────────────────────────┘ │
└─────────────────────────────────┘
```

---

## Usage Guidelines

### When to Use Each Level

#### **Surface/L0 (Base)**
- Page backgrounds
- Base containers without elevation
- Static content areas

#### **Surface/L1 + Shadow/L1**
- Cards on a page
- List items
- Table rows
- Subtle containers

#### **Surface/L2 + Shadow/L2**
- Dropdown menus
- Popover panels
- Context menus
- Floating cards

#### **Surface/L3 + Shadow/L3**
- Modal dialogs
- Overlay panels
- Slide-out drawers
- Full-screen overlays

#### **Surface/L4 + Shadow/L4**
- Tooltips
- Floating action buttons (FABs)
- Toast notifications
- Small floating elements

#### **Surface/L5 + Shadow/L5**
- High-priority modals
- Context menus above overlays
- Multi-level dropdowns

#### **Surface/L6 + Shadow/L6**
- System alerts
- Critical notifications
- Highest priority overlays

### Elevation Hierarchy Rules

> [!TIP]
> **Do** maintain consistent elevation hierarchy – elements at the same level should have the same elevation.

> [!TIP]
> **Do** use the minimum elevation needed for visual hierarchy. Don't jump levels unnecessarily.

> [!TIP]
> **Do** pair surface and shadow tokens together (e.g., `Surface/L3` with `Shadow/L3`).

> [!WARNING]
> **Don't** place lower elevation elements above higher elevation elements (e.g., don't show L1 above L3).

> [!WARNING]
> **Don't** skip elevation levels without reason. Use L2 for dropdowns, not L4.

> [!WARNING]
> **Don't** use shadows without corresponding surface colors, or vice versa.

---

## Common Patterns

### Card on Page
```css
/* Card component */
.card {
  background: var(--surface-l1);
  box-shadow: var(--shadow-l1);
  border-radius: 8px;
}
```

### Modal Dialog
```css
/* Modal overlay */
.modal-overlay {
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
}

.modal-content {
  background: var(--surface-l3);
  box-shadow: var(--shadow-l3);
  border-radius: 12px;
}
```

### Dropdown Menu
```css
.dropdown {
  background: var(--surface-l2);
  box-shadow: var(--shadow-l2);
  border-radius: 6px;
}
```

### Tooltip
```css
.tooltip {
  background: var(--surface-l4);
  box-shadow: var(--shadow-l4);
  border-radius: 4px;
}
```

### Floating Action Button
```css
.fab {
  background: var(--surface-l4);
  box-shadow: var(--shadow-l4);
  border-radius: 50%;
}
```

---

## Elevation in Framer

Based on the Framer context, here's how elevation works in Framer:

### Framer Limitations
- ❌ No global elevation variables across components
- ❌ Shadows must be applied manually to each component
- ❌ No automatic pairing of surface colors with shadows
- ❌ Cannot define "elevation tokens" that update system-wide

### Framer Workarounds
- ✅ Create **component variants** for each elevation level
- ✅ Use **local variables** within components for shadow values
- ✅ Define **styles** for common elevation combinations
- ✅ Document elevation usage in component descriptions

### Framer Best Practices
1. **Create Elevation Component Variants**
   - Make a base component with variants: L1, L2, L3, etc.
   - Each variant has both surface color and shadow pre-configured

2. **Use Style Presets**
   - Save common elevation combinations as styles
   - Apply styles consistently across the project

3. **Document in Component Properties**
   - Expose elevation level as a property control
   - Help users choose the correct level

---

## Accessibility Considerations

### Visual Depth for All Users
- **Don't rely solely on shadows** – Some users may have visual impairments
- **Use surface color contrast** in dark mode to ensure depth is visible without shadows
- **Provide alternative indicators** like borders or spacing when elevation is critical

### Reduced Motion Preferences
- Consider users with motion sensitivity
- Shadows are generally acceptable as they don't animate, but be cautious with animated elevation changes

### High Contrast Mode
- In high contrast modes, shadows may be removed
- Ensure elevation hierarchy is still clear through surface color differences

---

## Quick Reference Table

| Use Case | Surface | Shadow | Example |
|----------|---------|--------|---------|
| **Page background** | `Surface/L0` | – | Main content area |
| **Card** | `Surface/L1` | `Shadow/L1` | Product card, info box |
| **Dropdown** | `Surface/L2` | `Shadow/L2` | Select menu, filter panel |
| **Modal** | `Surface/L3` | `Shadow/L3` | Dialog, confirmation |
| **Tooltip** | `Surface/L4` | `Shadow/L4` | Help tooltip, hint |
| **High priority** | `Surface/L5` | `Shadow/L5` | Context menu above modal |
| **Critical alert** | `Surface/L6` | `Shadow/L6` | System notification |

---

## Implementation Examples

### CSS Custom Properties
```css
:root {
  /* Surface Colors */
  --surface-l0: #ffffff;
  --surface-l1: #ffffff;
  --surface-l2: #ffffff;
  --surface-l3: #ffffff;
  --surface-l4: #ffffff;
  --surface-l5: #ffffff;
  --surface-l6: #ffffff;
  
  /* Shadows */
  --shadow-l1: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.08);
  --shadow-l2: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.08);
  --shadow-l3: 0px 8px 16px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.08);
  --shadow-l4: 0px 10px 20px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(0, 0, 0, 0.08);
  --shadow-l5: 0px 12px 24px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
  --shadow-l6: 0px 16px 32px rgba(0, 0, 0, 0.1), 0px 0px 12px rgba(0, 0, 0, 0.08);
}

/* Dark mode overrides */
[data-theme="dark"] {
  --surface-l0: #000000;
  --surface-l1: #0d0d0d;
  --surface-l2: #1a1a1a;
  --surface-l3: #262626;
  --surface-l4: #333333;
  --surface-l5: #404040;
  --surface-l6: #4c4c4c;
}
```

### Utility Classes
```css
.elevation-l1 {
  background: var(--surface-l1);
  box-shadow: var(--shadow-l1);
}

.elevation-l2 {
  background: var(--surface-l2);
  box-shadow: var(--shadow-l2);
}

/* ... repeat for L3-L6 */
```

### Component Example
```css
/* Card component using elevation */
.card {
  background: var(--surface-l1);
  box-shadow: var(--shadow-l1);
  border-radius: 8px;
  padding: 16px;
  transition: box-shadow 0.2s ease;
}

.card:hover {
  /* Elevate on hover for interactive cards */
  background: var(--surface-l2);
  box-shadow: var(--shadow-l2);
}
```

---

## Testing Checklist

When implementing elevation, verify:

- [ ] **Light mode**: Shadows are visible and create clear depth
- [ ] **Dark mode**: Surface color contrast + shadows create depth
- [ ] **Hierarchy**: Elevation levels follow logical order
- [ ] **Consistency**: Same elements use same elevation across the product
- [ ] **Accessibility**: Depth is clear even without shadows (high contrast mode)
- [ ] **Interactive states**: Hover/focus states use appropriate elevation changes
- [ ] **Mobile**: Shadows render correctly on different screen sizes

---

## Common Mistakes to Avoid

❌ **Using only shadows without surface colors**  
✅ **Always pair Surface/Lx with Shadow/Lx**

❌ **Skipping levels (e.g., L1 → L3)**  
✅ **Use sequential levels for smooth hierarchy**

❌ **Inconsistent elevation for similar elements**  
✅ **Create patterns and stick to them**

❌ **Over-elevating content**  
✅ **Use the minimum elevation needed**

❌ **Mixing elevation systems**  
✅ **Stick to the L0-L6 scale**

---

## Summary

Elevation in the Scale Design System is a **combined system** of surface colors and shadows that creates visual depth and hierarchy. 

**Key Principles:**
1. **Always pair** surface tokens with shadow tokens
2. **Use sequential levels** (L1, L2, L3...)
3. **Consider both themes** – light mode uses shadows, dark mode uses both
4. **Maintain consistency** across all components
5. **Test accessibility** – ensure depth is clear for all users

**Remember:** Elevation is not just visual decoration – it communicates important information about content relationships and interaction patterns.

---

**Last Updated:** January 2026  
**Design System:** Scale v1.0