# Scale Design System Site — Product Requirements Document

> This PRD captures the full structure, design system, components, and behaviour of the Scale marketing site. Use it to recreate or mirror the site in AI-driven design tools such as Pencil, Paper, Stitch, or Figma.

---

## Overview

**Site name:** Scale Design System
**URL:** https://www.scaledesignsystem.com
**Description:** A Framer and Figma design system that helps individuals and organisations scale.
**Pages:** 2 — Home (`index.html`), Licence Agreement (`licence-agreement.html`)
**Stack:** Lit Web Components, SCSS, Vite, Inter (Google Fonts)
**Theme:** Light / Dark (CSS `data-theme` attribute on `<html>`, persisted in `localStorage`)

---

## Pages

### 1. Home (`index.html`)

**Meta**
- Title: "A Framer and Figma Design System that helps individuals and organisations Scale."
- OG image: `/images/og/sc-image-og.png`
- Favicon: `/images/favicon/sc-favicon.png`
- Apple touch icon: `/images/favicon/sc-app-icon.png`

**Section order:**
1. Header (fixed)
2. Hero (90vh)
3. Intro content (centered)
4. Platform switch (sticky)
5. Platform content — Framer or Figma (toggled, with fade transition)
6. Pricing (3 columns)
7. FAQ (2 columns)
8. Signup (email capture card)
9. Footer

---

### 2. Licence Agreement (`licence-agreement.html`)

**Meta**
- Title: "Scale — Design System for Figma & Framer"
- `data-page="licence"` on `<html>`

**Section order:**
1. Header (fixed)
2. Text content — h1, summary paragraph, h4 sections with paragraphs and lists
3. Signup (email capture card)
4. Footer

---

## Layout & Grid

| Breakpoint | Width | Notes |
|---|---|---|
| Desktop XL | 1920px | Base |
| Desktop M | 1440px | Max container |
| Tablet | ≤810px | 2-col → 1-col, header shrinks |
| Phone | ≤402px | Single column, stacked buttons |

**Container max-widths:**
- Default content: 1440px
- Pricing, FAQ, bento: 1168px

**Horizontal padding:** 32px (desktop), 16px (mobile)
**Section vertical gap:** 80px
**Card border-radius:** 16px

---

## Design Tokens

### Colours

**Primitives** (CSS custom properties, 50–1000 lightness steps):
- `--sc-color-neutral-{0|50|100|150|...|1000}`
- `--sc-color-brand-{100|...|900}`
- `--sc-color-blue-{100|...|900}`
- `--sc-color-green-{100|...|900}`
- `--sc-color-orange-{100|...|900}`
- `--sc-color-purple-{100|...|900}`
- `--sc-color-red-{100|...|900}`

**Semantic — backgrounds** (`--sc-color-background-*`):
`brand`, `brand-hover`, `brand-pressed`, `brand-subtle`, `disabled`, `hover`, `info`, `inverse`, `inverse-static`, `mono`, `mono-hover`, `mono-pressed`, `negative`, `negative-hover`, `negative-pressed`, `negative-subtle`, `neutral`, `neutral-hover`, `neutral-pressed`, `positive`, `positive-subtle`, `pressed`, `primary`, `selected`, `subtle`, `system-inverse-static`, `system-static`, `warning`, `warning-subtle`

**Semantic — borders** (`--sc-color-border-*`):
`brand`, `disabled`, `focus`, `info`, `inverse`, `mono`, `negative`, `positive`, `primary`, `selected`, `subtle`, `warning`

**Semantic — icons** (`--sc-color-icon-*`):
`brand`, `disabled`, `info`, `inverse`, `inverse-static`, `negative`, `positive`, `primary`, `primary-static`, `selected`, `subtle`, `warning`

**Semantic — text** (`--sc-color-text-*`):
`brand`, `disabled`, `link`, `link-hover`, `link-pressed`, `negative`, `negative-hover`, `negative-pressed`, `positive`, `primary`, `primary-inverse`, `primary-inverse-static`, `primary-static`, `secondary`, `secondary-inverse`, `secondary-inverse-static`, `secondary-static`, `selected`, `tertiary`, `tertiary-inverse`, `tertiary-inverse-static`, `tertiary-static`, `warning`

**Surfaces** (`--sc-color-surface-*`): `l0`, `l1`, `l2`, `l3`, `l4`

---

### Typography

**Font:** Inter — weights 300 (light), 400 (regular), 600 (semi-bold)

**Scale (desktop → mobile ≤810px):**
| Token | Desktop | Mobile |
|---|---|---|
| 10xl | 72px | 56px |
| 9xl | 64px | 48px |
| 8xl | 56px | 44px |
| 7xl | 48px | 40px |
| 6xl | 40px | 36px |
| 5xl | 36px | 32px |
| 4xl | 32px | 28px |
| 3xl | 28px | 24px |
| 2xl | 24px | 22px |
| xl | 20px | 18px |
| l | 18px | 16px |
| m | 16px | 16px |
| s | 14px | 14px |
| xs | 12px | 12px |

**Semantic styles:**
- `heading-{10xl|9xl|8xl|7xl|6xl|5xl|4xl|3xl|2xl|xl|l|m|s|xs|2xs}` — semi-bold, negative letter spacing
- `text-{2xl|xl|l|m|s}` — regular weight
- `label-{l|m|s}` — semi-bold
- `link-{l|m|s}` — semi-bold

**Letter spacing:** `xs` = -1px, `s` = -0.5px, `none` = 0px

---

### Spacing

| Token | Value |
|---|---|
| `--sc-spacing-2xs` | 2px |
| `--sc-spacing-xs` | 4px |
| `--sc-spacing-s` | 8px |
| `--sc-spacing-m` | 12px |
| `--sc-spacing-l` | 16px |
| `--sc-spacing-xl` | 24px |
| `--sc-spacing-2xl` | 32px |
| `--sc-spacing-3xl` | 40px |
| `--sc-spacing-4xl` | 48px |
| `--sc-spacing-5xl` | 56px |
| `--sc-spacing-6xl` | 64px |
| `--sc-spacing-7xl` | 72px |
| `--sc-spacing-8xl` | 80px |

---

### Border Radius

| Token | Value |
|---|---|
| none | 0px |
| xs | 4px |
| s | 8px |
| m | 12px |
| l | 16px |
| xl | 24px |
| 2xl | 32px |
| 3xl | 40px |
| 4xl | 48px |
| 5xl | 56px |
| 6xl | 64px |
| pill | 999px |
| circle | 50% |

---

### Shadows

| Token | Value |
|---|---|
| `--sc-shadow-l1` | `0px 2px 4px rgba(0,0,0,0.10), 0px 0px 2px rgba(0,0,0,0.08)` |
| `--sc-shadow-l2` | `0px 4px 8px rgba(0,0,0,0.10), 0px 0px 4px rgba(0,0,0,0.08)` |
| `--sc-shadow-l3` | `0px 8px 16px rgba(0,0,0,0.10), 0px 0px 6px rgba(0,0,0,0.08)` |
| `--sc-shadow-l4` | `0px 10px 20px rgba(0,0,0,0.10), 0px 0px 8px rgba(0,0,0,0.08)` |

---

## Components

### `sc-header`

Fixed navigation bar.

| Attribute | Type | Default | Notes |
|---|---|---|---|
| `primary-label` | string | — | CTA button label, e.g. "Buy now" |
| `primary-href` | string | — | CTA button URL |
| `secondary-label` | string | — | Optional secondary CTA |
| `secondary-href` | string | — | |
| `nav-links` | array | — | Navigation items |
| `nav-align` | string | `center` | `center`, `leading`, `trailing` |

**Visual:**
- Fixed, z-index 100
- Height: 96px desktop → 64px (≤810px)
- Backdrop blur: 24px
- Contains: logo (left), nav links (center), theme toggle + CTA (right)
- Theme toggle uses sun/moon icons

---

### `sc-hero`

Full-bleed hero section.

| Attribute | Type | Notes |
|---|---|---|
| `badge` | string | Version badge, e.g. "3.2" |
| `primary-label` | string | Primary CTA label |
| `primary-href` | string | Primary CTA URL |
| `primary-leading-icon` | string | Feather icon name |
| `secondary-label` | string | |
| `secondary-href` | string | |
| `secondary-leading-icon` | string | |
| `image-src` | string | Light theme hero image |
| `image-src-dark` | string | Dark theme hero image |
| `image-alt` | string | |

**Slots:** `heading` (h1), `subtext` (p)

**Visual:**
- Height: 90vh
- Full-bleed background image with gradient overlay
- Image switches on theme change
- Badge above heading
- Dual CTA buttons below subtext

**Images:**
- Light: `/images/hero/Scale - Framer - Hero - Light.jpg`
- Dark: `/images/hero/Scale - Framer - Hero - Dark.jpg`

---

### `sc-section-content`

Centered or left-aligned heading + subtext block.

| Attribute | Type | Default |
|---|---|---|
| `align` | string | `center` |

**Slots:** `heading` (h2), `subtext` (p)
**Padding:** 80px vertical, 16px horizontal (64px top on mobile)

---

### `sc-section-bento`

Z-pattern 4-card feature grid.

**Slots:** `heading`, `subtext`, `card-1`, `card-2`, `card-3`, `card-4`

**Layout:**
- Desktop/Tablet: 5-column CSS grid
  - Row 1: Card 1 (3 cols) + Card 2 (2 cols)
  - Row 2: Card 3 (2 cols) + Card 4 (3 cols)
  - Row height: 560px desktop, 408px tablet
- Mobile (≤402px): 1 column, 4 rows (408px each)

---

### `sc-section-feature`

Two-column feature block with image and text.

| Attribute | Type | Notes |
|---|---|---|
| `image-src` | string | Light theme |
| `image-src-dark` | string | Dark theme |
| `image-alt` | string | |
| `reverse` | boolean | Flips image/text order |

**Slots:** `heading` (h2), `subtext` (p), `actions` (buttons)

**Visual:**
- Flex row, gap 32px
- Image aspect ratio: 38:35
- Stacks vertically on mobile

---

### `sc-section-pricing`

3-column pricing card layout.

**Slots:** `heading` (h2), `subtext` (p), `card-1`, `card-2`, `card-3`

**Layout:** 3 columns desktop → 1 column (≤810px). Max-width 1168px.

---

### `sc-section-faq`

Two-column FAQ section.

**Slots:** `heading` (h2), `subtext` (p), default slot (sc-accordion items)

**Layout:**
- Desktop: flex row — heading/subtext left (370px min), accordions right
- Mobile: stacked column

---

### `sc-section-signup`

Email capture card.

**Slots:** `heading` (span), `subtext` (span), `input` (sc-input), `action` (sc-button)

**Visual:**
- Card: surface-l1 background, 16px border-radius, shadow-l1
- Flex row desktop → column mobile

---

### `sc-card-image`

Feature card with image, used inside bento grids.

| Attribute | Type | Notes |
|---|---|---|
| `variant` | string | `default` (image top) or `fill` (image fills remaining space) |
| `image-src` | string | Light |
| `image-src-dark` | string | Dark |
| `image-alt` | string | |
| `--sc-card-object-position` | CSS prop | Custom image position |

**Slots:** `heading` (h4), `description` (p)

---

### `sc-card-pricing`

Pricing tier card.

**Slots:** `badge` (sc-badge), `plan` (price), `description` (p), default (sc-row items), `actions` (button/link)

**Visual:**
- surface-l1, 16px border-radius, shadow-l1
- Dividers between sections (subtle variant)
- Flex column layout

---

### `sc-button`

| Attribute | Type | Options |
|---|---|---|
| `type` | string | `primary`, `secondary`, `tertiary`, `tertiary-mono`, `inverse`, `mono`, `outline`, `outline-mono`, `text`, `text-mono`, `negative-primary`, `negative-outline`, `negative-text` |
| `size` | string | `l`, `m`, `s` |
| `leading-icon` | string | Feather icon name |
| `trailing-icon` | string | Feather icon name |
| `loading` | boolean | Shows spinner |
| `disabled` | boolean | |
| `--sc-button-width` | CSS prop | Custom width |

**Sizes:**
| Size | Padding | Label style | Icon size |
|---|---|---|---|
| l | 12px | label-l | 24px |
| m | 8px | label-m | 20px |
| s | 4px | label-s | 16px |

---

### `sc-input`

Text input field.

| Attribute | Type | Notes |
|---|---|---|
| `label` | string | Field label |
| `placeholder` | string | |
| `value` | string | Controlled value |
| `type` | string | HTML input type (e.g. `email`) |
| `state` | string | `default`, `negative`, `positive`, `disabled` |
| `leading-icon` | string | Feather icon |
| `trailing-icon` | string | Feather icon |
| `help-text` | string | Helper message |
| `show-label` | boolean | Default true |
| `required` | boolean | |

---

### `sc-badge`

Status badge / label chip.

| Attribute | Type | Options |
|---|---|---|
| `status` | string | `default`, `info`, `warning`, `negative`, `positive`, `mono`, `disabled` |
| `icon` | string | Feather icon name |

**Slot:** text content
**Visual:** inline-flex, text-s, pill border-radius, 4px 8px padding, 1px border

---

### `sc-accordion`

Collapsible FAQ item.

| Attribute | Type | Notes |
|---|---|---|
| `heading` | string | Accordion title |
| `open` | boolean | Expanded state |

**Slot:** accordion body content
**Visual:** Chevron rotates on open, grid-based height animation (0fr → 1fr), divider below

---

### `sc-row`

List row with optional icons and divider.

| Attribute | Type | Notes |
|---|---|---|
| `leading-icon` | string | Feather icon |
| `trailing-icon` | string | Feather icon |
| `hide-divider` | boolean | |
| `disabled` | boolean | |
| `--sc-row-divider-display` | CSS prop | Custom divider visibility |

**Visual:** Flex row, text-l, 12px 0 padding, divider below

---

### `sc-divider`

| Attribute | Options |
|---|---|
| `variant` | `default`, `subtle`, `selected` |

1px horizontal rule using semantic border colours.

---

### `sc-logo`

| Attribute | Options |
|---|---|
| `size` | `l` (48px mark), `m` (36px mark), `s` (24px mark) |
| `logo-style` | `default`, `inverse` |
| `hide-text` | boolean — shows mark only |
| `--sc-logo-mark-size` | CSS prop |

Inline SVG: geometric blue mark + Inter logotype.

---

### `sc-footer`

| Attribute | Notes |
|---|---|
| `copyright` | Copyright string |
| `licence-label` | Link label |
| `licence-href` | Link URL |

---

## Images

### Hero
| File | Theme |
|---|---|
| `/images/hero/Scale - Framer - Hero - Light.jpg` | Light |
| `/images/hero/Scale - Framer - Hero - Dark.jpg` | Dark |

### Framer — Bento (4 cards × light/dark)
- `/images/framer/sc-image-framer-bento-components-{light|dark}.png`
- `/images/framer/sc-image-framer-bento-variables-{light|dark}.png`
- `/images/framer/sc-image-framer-bento-icons-{light|dark}.png`
- `/images/framer/sc-image-framer-bento-sections-{light|dark}.png`

### Framer — Features (5 × light/dark)
- `/images/framer/sc-image-framer-variables-{light|dark}.png`
- `/images/framer/sc-image-framer-typography-{light|dark}.png`
- `/images/framer/sc-image-framer-components-{light|dark}.png`
- `/images/framer/sc-image-framer-sections-{light|dark}.png`
- `/images/framer/sc-image-framer-templates-{light|dark}.png`

### Figma — Bento (4 × light/dark)
- `/images/figma/sc-image-figma-bento-components-{light|dark}.png`
- `/images/figma/sc-image-figma-bento-variables-{light|dark}.png`
- `/images/figma/sc-image-figma-bento-icons-{light|dark}.png`
- `/images/figma/sc-image-figma-bento-modules-{light|dark}.png`

### Figma — Features (6 × light/dark)
- `/images/figma/sc-image-figma-liquid-glass-{light|dark}.png`
- `/images/figma/sc-image-figma-color-picker-plugin-{light|dark}.png`
- `/images/figma/sc-image-figma-color-variables-{light|dark}.png`
- `/images/figma/sc-image-figma-type-variables-{light|dark}.png`
- `/images/figma/sc-image-figma-components-{light|dark}.png`
- `/images/figma/sc-image-figma-modules-{light|dark}.png`

### OG / Favicon
- `/images/og/sc-image-og.png`
- `/images/favicon/sc-favicon.png`
- `/images/favicon/sc-app-icon.png`

---

## Behaviour

### Theme Switching
- Stored in `localStorage` as `sc-theme`
- Falls back to `prefers-color-scheme`
- Applied as `data-theme="light|dark"` on `<html>`
- Dispatches custom event `theme-change` with `detail: { theme }`
- All image-bearing components listen and swap `image-src` / `image-src-dark`
- Header background and platform switch use `backdrop-filter: blur(24px)`

### Platform Content Switch (Home only)
- Two hidden content sections: `#content-framer`, `#content-figma`
- Sticky toggle bar with two `sc-button` components
- Z-index: 101 (above header at 100)
- Toggle: fade-out 100ms → swap visibility → fade-in 100ms
- Active button: `type="secondary"`, inactive: `type="tertiary"`

### Page Reveal
- `body { opacity: 0 }` until all 16 web components are defined
- `Promise.all([customElements.whenDefined(...)])` → `body.style.opacity = 1`
- Transition: `opacity 250ms ease`

### Signup Form
- `setupSignup()` handles email field + subscribe button
- Input validation: `required`, `type="email"`
- Help text hidden in signup context

### Image Preloading
- On page load: preloads opposite-theme hero + all Figma section images (26 total)
- Ensures zero-delay image swap on platform or theme toggle

---

## Accessibility

- Semantic HTML: `<section>`, `<header>`, `<footer>`, `<nav>`
- ARIA: `aria-expanded`, `aria-controls`, `aria-label`, `aria-busy`, `aria-current`
- Focus rings: 2px `--sc-color-border-focus` on all interactive elements
- Keyboard navigation: all buttons and inputs fully reachable
- Reduced motion: `@media (prefers-reduced-motion: reduce)` applied globally
- Screen reader utilities: visually-hidden class for icon-only buttons

---

## Analytics

- Google Tag Manager ID: `GTM-SBTLFNGKX7`
- Script injected in `<head>` via `<script>` + `<noscript>` fallback
