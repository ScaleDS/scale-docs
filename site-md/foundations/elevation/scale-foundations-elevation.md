# Scale Design System
## Elevation Documentation

**Version:** 3.0.0
**Last Updated:** February 2026

---

## Overview

The Scale Design System uses a 5-level elevation system to communicate visual depth and spatial hierarchy in the interface. Surface tokens define the background color of elements at each elevation level, automatically adapting between light and dark themes.

### Key Features

- **5 surface levels** (L0–L4) covering all UI layering needs
- **Dual-mode support**: Light and Dark themes with automatic switching
- **Semantic naming**: Purpose-driven tokens that communicate spatial intent
- **WCAG AA compliant**: All surface/content pairings meet accessibility standards
- **Industry-aligned**: Comparable to Material Design 3 and other major design systems

---

## Elevation Philosophy

### Design Principles

**Depth Communicates Hierarchy**
Elevation creates a spatial metaphor where higher elements are more prominent:
- Base content sits at the lowest level
- Interactive overlays float above the page
- Critical alerts occupy the highest plane
- Users intuitively understand "closer = more important"

**Progressive Lightening in Dark Mode**
In dark mode, shadows are largely invisible. Surface colors get progressively lighter at higher elevation levels, mimicking how physical objects closer to a light source appear brighter. This ensures depth perception works in both themes.

**Fewer Levels, Clearer Choices**
Five levels cover every real-world UI scenario — from base backgrounds to system alerts — without introducing ambiguity. Each level has a distinct, well-defined purpose, making it easy for designers and developers to choose the right one.

**Surfaces Over Shadows Alone**
While shadows complement elevation, they are not sufficient on their own — especially in dark mode. Surface color is the primary depth cue, with shadows as a supporting visual reinforcement.

---

## Elevation Architecture

### How It Works

```
Surface/L0  →  Base layer (page background)
Surface/L1  →  First elevation (cards, containers)
Surface/L2  →  Second elevation (dropdowns, panels)
Surface/L3  →  Third elevation (modals, dialogs)
Surface/L4  →  Highest elevation (system alerts)
```

Each level maps to a surface color token with light and dark mode values. In light mode, surfaces are uniformly white — depth is communicated through shadows and borders. In dark mode, surfaces progressively lighten to create visible depth without relying on shadows.

### Relationship to Other Tokens

Elevation works alongside other semantic color tokens:

- **Background tokens** (`Background/Primary`, `Background/Hover`) handle interactive states on surfaces
- **Surface tokens** (`Surface/L0`–`Surface/L4`) define the base color of each elevation plane
- **Overlay tokens** (`Overlay/30`, `Overlay/70`) dim content beneath elevated elements
- **Border tokens** can reinforce elevation boundaries when needed

---

## Surface Levels

### Token Reference

| Token | Light Mode | Light Primitive | Dark Mode | Dark Primitive | CSS Variable | Purpose |
|-------|-----------|----------------|-----------|---------------|-------------|---------|
| `Surface/L0` | `#FFFFFF` | `Neutral/0` | `#000000` | `Neutral/1000` | `--sc-color-surface-l0` | Base page background, lowest elevation |
| `Surface/L1` | `#FFFFFF` | `Neutral/0` | `#0D0D0D` | `Neutral/950` | `--sc-color-surface-l1` | Cards on page, subtle containers |
| `Surface/L2` | `#FFFFFF` | `Neutral/0` | `#1A1A1A` | `Neutral/900` | `--sc-color-surface-l2` | Dropdowns, popovers, panels |
| `Surface/L3` | `#FFFFFF` | `Neutral/0` | `#262626` | `Neutral/850` | `--sc-color-surface-l3` | Modals, dialogs, overlays |
| `Surface/L4` | `#FFFFFF` | `Neutral/0` | `#333333` | `Neutral/800` | `--sc-color-surface-l4` | Highest elevation, system alerts |

### Level Details

**Surface/L0 — Base**
The foundation layer. This is the page background — the lowest plane in the UI. All other content sits above this level.
- Use for: Page backgrounds, canvas areas
- Paired with: `Text/Primary`, `Text/Secondary`, `Text/Tertiary`

**Surface/L1 — Cards & Containers**
The first elevation above the base. Creates subtle grouping of related content without heavy visual separation.
- Use for: Cards, content sections, list item containers
- Paired with: `Text/Primary`, `Border/Subtle`

**Surface/L2 — Panels & Popovers**
Mid-level elevation for interactive surfaces that appear temporarily or on demand.
- Use for: Dropdowns, popovers, side panels, navigation drawers
- Paired with: `Text/Primary`, `Border/Primary`

**Surface/L3 — Modals & Dialogs**
High elevation for surfaces that require user attention and typically block interaction with content below.
- Use for: Modal dialogs, confirmation sheets, full-screen overlays
- Paired with: `Overlay/30` or `Overlay/70` on the backdrop beneath

**Surface/L4 — System Alerts**
The highest elevation. Reserved for critical, time-sensitive content that must sit above everything else.
- Use for: System alerts, toast notifications, emergency banners
- Paired with: Appropriate status colors (`Background/Negative`, `Background/Warning`)

---

## Dark Mode Behavior

### Why Surfaces Lighten in Dark Mode

In light mode, shadows cast downward onto light backgrounds are clearly visible. In dark mode, shadows against dark backgrounds are nearly imperceptible. To maintain depth perception, each elevation level uses a progressively lighter surface color.

```
Dark Mode Surface Progression:

L0  ████████  #000000  Neutral/1000  (darkest — pure black)
L1  ████████  #0D0D0D  Neutral/950
L2  ████████  #1A1A1A  Neutral/900
L3  ████████  #262626  Neutral/850
L4  ████████  #333333  Neutral/800   (lightest)
```

This progressive lightening ensures users can distinguish between stacked layers — for example, a modal (L3) visibly floats above the page (L0) even without shadows.

### Light Mode Behavior

In light mode, all surface levels use `#FFFFFF`. Depth is communicated through:
- **Shadows**: Each elevation level casts a progressively larger shadow
- **Borders**: Subtle borders reinforce container boundaries
- **Overlays**: Backdrop overlays dim content beneath modals and dialogs

### Shadow Tokens

Each elevation level above L0 is paired with a corresponding shadow token. All shadows use a dual-layer approach: a directional shadow (y-offset + blur) for depth, and an ambient shadow (no offset, smaller blur) for grounding.

| Shadow Token | Box Shadow | Surface Pairing |
|-------------|-----------|-----------------|
| — | No shadow | `Surface/L0` |
| `Shadow/L1` | `0px 2px 4px rgba(0,0,0,0.1), 0px 0px 2px rgba(0,0,0,0.08)` | `Surface/L1` |
| `Shadow/L2` | `0px 4px 8px rgba(0,0,0,0.1), 0px 0px 4px rgba(0,0,0,0.08)` | `Surface/L2` |
| `Shadow/L3` | `0px 8px 16px rgba(0,0,0,0.1), 0px 0px 6px rgba(0,0,0,0.08)` | `Surface/L3` |
| `Shadow/L4` | `0px 10px 20px rgba(0,0,0,0.1), 0px 0px 8px rgba(0,0,0,0.08)` | `Surface/L4` |

**Shadow progression pattern:**
- Y-offset increases: 2px → 4px → 8px → 10px
- Primary blur increases: 4px → 8px → 16px → 20px
- Ambient blur increases: 2px → 4px → 6px → 8px
- Opacity remains constant: 10% directional, 8% ambient

---

## Accessibility

### Contrast Requirements

All text and UI elements on elevated surfaces must meet WCAG 2.1 AA standards:
- **Text < 24px**: Minimum 4.5:1 contrast ratio against the surface
- **Text ≥ 24px**: Minimum 3:1 contrast ratio against the surface
- **UI Components**: Minimum 3:1 contrast ratio against the surface

### Surface-to-Surface Contrast

Adjacent elevation levels should be visually distinguishable. In dark mode, the progressive lightening ensures perceptible difference between stacked surfaces.

### Never Rely on Elevation Alone

Elevation supports hierarchy but should not be the only way to communicate structure:
- Use borders to reinforce surface boundaries
- Add labels and headings to identify content regions
- Pair overlays with backdrop dimming for modals
- Ensure screen readers can navigate layered content via proper ARIA roles

### Testing Checklist

- Verify text contrast on every surface level in both themes
- Test with color blindness simulators
- Confirm depth perception at low screen brightness
- Validate surface distinction on low-quality displays
- Test with screen readers to ensure layered content is navigable

---

## Figma Implementation

### Setting Up Surface Variables

Surface tokens live in the **Semantic Colors** variable collection alongside other semantic tokens.

**1. Add Surface Variables:**
- Open the Semantic Colors collection
- Create a group called "Surface"
- Add 5 color variables: `Surface/L0` through `Surface/L4`

**2. Set Mode Values:**
- For each variable, set the Light mode value
- Set the corresponding Dark mode value
- Alias to primitive neutral tokens where applicable

**3. Scope Variables:**
- Scope surface variables to **Fill** properties only
- This prevents accidental use as text or stroke colors

### Applying Surface Colors

1. Select the frame or container
2. Click the fill color swatch
3. Open the "Libraries" tab
4. Choose the appropriate `Surface/L` token based on the element's role

### Testing Elevation in Figma

- Apply `Surface/L0` to your top-level frame
- Build cards using `Surface/L1`
- Create dropdown/popover components using `Surface/L2`
- Build modal components using `Surface/L3`
- Switch between Light and Dark modes to verify depth perception

---

## Framer Implementation

### Setting Up Surface Styles

Create color styles for each surface level with both Light and Dark values.

**1. Create Surface Color Styles:**
- Open Assets panel → Color Styles
- Create styles: `Surface L0`, `Surface L1`, `Surface L2`, `Surface L3`, `Surface L4`
- Define Light and Dark values for each

**2. Apply Surface Styles:**
- Select the frame or container
- Click Fill color picker
- Choose the appropriate Surface style
- Style adapts automatically to the active theme

### Theme Toggle Behavior

Surface colors switch automatically when the theme changes:
- Light mode: All surfaces appear as `#FFFFFF`, with shadows providing depth
- Dark mode: Surfaces progressively lighten from `#0D0D0D` to `#333333`

Framer automatically detects the user's system preference (light/dark), and surfaces adapt accordingly.

### Maintaining Consistency with Figma

- Match Figma variable names exactly: `Surface/L0` through `Surface/L4`
- Verify visual parity between Figma designs and Framer implementation
- Test theme switching in both tools side by side

---

## Usage Guidelines

### Do's

**Use the correct level for each element's role**
A card belongs on `Surface/L1`, not `Surface/L3`. Match the token to the element's spatial purpose.

**Pair elevated surfaces with overlays for modals**
When `Surface/L3` or `Surface/L4` is used, dim the content below with `Overlay/30` or `Overlay/70`.

**Test in both themes**
Verify that elevation is perceptible in both Light and Dark modes. Depth that only works in one theme is incomplete.

**Use shadows to reinforce elevation in light mode**
Since light mode surfaces are all `#FFFFFF`, shadows are essential for communicating depth.

**Stay within the system**
Use existing surface tokens before inventing new background colors. Five levels cover every standard UI pattern.

### Don'ts

**Don't skip levels arbitrarily**
Jumping from `Surface/L0` to `Surface/L3` without a reason creates inconsistent spatial logic.

**Don't use surface tokens for interactive states**
Hover, pressed, and selected states use `Background/` tokens, not `Surface/` tokens. Surfaces define the plane; backgrounds define the interaction.

**Don't rely on shadows alone in dark mode**
Shadows are nearly invisible on dark backgrounds. Always use the correct surface token — the progressive lightening is what communicates depth.

**Don't nest more than 3 levels deep**
If your UI requires a card inside a panel inside a modal, reconsider the information architecture. Deeply nested elevation creates visual noise and confusion.

**Don't use surface tokens for decorative purposes**
Surface tokens communicate spatial hierarchy. Using `Surface/L3` for visual styling without actual elevation intent undermines the system.

### Component Mapping

| Component | Surface Level | Notes |
|-----------|--------------|-------|
| Page background | `Surface/L0` | Always the base layer |
| Cards | `Surface/L1` | Subtle lift above page |
| Dropdowns | `Surface/L2` | Temporary interactive surfaces |
| Popovers | `Surface/L2` | Contextual content panels |
| Side panels | `Surface/L2` | Persistent or sliding panels |
| Modals | `Surface/L3` | Pair with `Overlay/30` or `Overlay/70` |
| Dialogs | `Surface/L3` | Confirmation and action dialogs |
| Toast notifications | `Surface/L4` | Highest priority, brief messages |
| System alerts | `Surface/L4` | Critical, must-see information |

---

## Best Practices

### Industry Alignment

The Scale elevation system is aligned with major design system standards:

| System | Surface Levels | Approach |
|--------|---------------|----------|
| Apple HIG | 2 | Materials + blur |
| eBay Playbook | ~3 | Background tokens + shadows |
| Carbon (IBM) | 3 | Theme alternation |
| Atlassian | 4 | Tokens + shadows |
| **Scale** | **5** | **Progressive lightening** |
| Material Design 3 | 5 | Tonal surface color |

### Design Review Checklist

- [ ] Every elevated element uses the correct `Surface/L` token
- [ ] No hard-coded hex values used for surface colors
- [ ] Modals and dialogs use backdrop overlays
- [ ] Shadows are applied in light mode to reinforce depth
- [ ] All text meets contrast requirements against each surface level
- [ ] UI tested in both Light and Dark themes
- [ ] No surface levels nested more than 3 deep
- [ ] Interactive states use `Background/` tokens, not `Surface/` tokens

---

## Resources

- **Color Documentation:** [Scale Foundations — Color](../color/scale-foundations-color.md)
- **Figma Variables Guide:** [help.figma.com](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- **Material Design 3 Elevation:** [m3.material.io](https://m3.material.io/styles/elevation/applying-elevation)
- **Accessibility Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Support

For questions about elevation usage, surface token proposals, or accessibility concerns:
- Create an issue in the Scale Design System repository
- Contact the design system team
- Review component-specific documentation

---

*Built with care by the Scale Design System team*