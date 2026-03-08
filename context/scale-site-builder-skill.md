# Scale site builder

This project is for a design system called Scale, used by Figma and Framer users.

## Sources

- **Design** — Figma components (use Figma MCP to read anatomy, variants, properties, token values)
- **CSS tokens** — `site/src/styles/` — map Figma variables to `--sc-*` equivalents
- **Token JSON source** — `site/src/styles/json/` — upstream design token JSON files
- **Foundations reference** — `site-md/foundations/`
- **Framer context** — `context/framer/` — Framer template and DS submission docs
- **Static assets** — `site/public/` — images and other files served at root URL (e.g. `/images/hero/…`)

## Framework

**Vite + Lit + TypeScript** — static site, no framework.

- Entry point: `site/index.html`
- Components: `site/src/components/` — one Lit web component per file
- Styles: `site/src/styles/` — SCSS design tokens
- Component registration: `site/src/main.ts`
- Component previews: `site/components/` — one HTML file per component (e.g. `sc-button.html`)
- Build output: `dist/` (deployed to GitHub Pages)

Run locally: `cd site && npm run dev`
Build: `cd site && npm run build`

## Creating Lit components

### Naming

- File: `sc-{name}.ts` — Tag: `<sc-{name}>` — Class: `Sc{Name}`

### Structure

```ts
import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sc-{name}')
export class Sc{Name} extends LitElement {
  @property({ reflect: true }) propName = 'default'

  static styles = css`...`

  render() {
    return html`...`
  }
}
```

### Styling rules

- Use CSS custom properties from global SCSS tokens — they inherit through Shadow DOM.
- Style variants with `:host([prop='value'])` selectors, e.g. `:host([size='l']) button { ... }`.
- No SCSS inside Lit components — `static styles` is plain CSS via Lit's `css` tag.
- Never hardcode colours, spacing, or type values — always use `--sc-*` tokens.

### Workflow (Figma → component)

1. Use Figma MCP to read anatomy, variants, properties, and token values
2. Map Figma variables to `--sc-*` CSS custom properties
3. Create `site/src/components/sc-{name}.ts` with all variants, sizes, and states
4. Register in `site/src/main.ts`: `import './components/sc-{name}'`
5. Create preview at `site/components/sc-{name}.html`

### Static assets

Images and other static files go in `site/public/` — they're served verbatim at the root URL and are not processed by Vite. Reference them as absolute paths (e.g. `/images/hero/filename.jpg`). Do **not** put images in `site/src/assets/` unless they are imported directly in TypeScript — string attributes in HTML cannot be resolved by Vite.

### Icons

Feather icons via `feather-icons` package. Render as inline SVGs; size via CSS per component size.

## Preview pages

Every preview page follows a standard canvas + sidebar layout.

### Layout

`grid-template-columns: 1fr 280px`, `height: 100vh`, `overflow: hidden`.

- **Canvas** — `background: var(--sc-color-background-subtle)`, flex-centered.
- **Sidebar** — `background: var(--sc-color-surface-l1)`, `border-left: 1px solid var(--sc-color-border-secondary)`, `padding: 1.5rem`, `gap: 1.25rem` column flex.

### Controls

All controls use `<sc-input>` with a `label` attribute — no separate `<label>` tags.

**Text inputs** — `<sc-input id="..." label="X" value="...">`.

**Select controls** — `<sc-input>` as visual display, native `<select>` overlaid transparently:

```html
<div class="select-control">
  <sc-input class="select-input" id="fooDisplay" label="Foo" value="Default" trailing-icon="chevron-down"></sc-input>
  <select id="fooSelect">...</select>
</div>
```

```css
.select-control { position: relative; }
.select-control select { position: absolute; inset: 0; opacity: 0; cursor: pointer; z-index: 1; }
```

**Toggle controls** — `<sc-toggle>` in a `.toggle-row` flex row with a plain `<label>`.

### Init pattern

After the element is defined, disable help text on all sidebar inputs:

```js
customElements.whenDefined('sc-input').then(() => {
  document.querySelectorAll('.sidebar sc-input').forEach(el => {
    el.showHelpText = false
  })
})
```

### Event handlers

- **sc-input text**: `e.detail.value` — guard with `if (!e.detail) return` (native events also bubble)
- **sc-input select display**: sync from the native `<select>` `change` event via `e.target.options[e.target.selectedIndex].text`
- **sc-toggle**: `e.detail.checked`

### Theme toggle

Segmented button style. Inactive buttons: `color: var(--sc-color-text-tertiary)`. Active: `color: var(--sc-color-text-primary)`.

## Header background

Use a separate `.header-bg` child element — never put `opacity` on the host or header itself or all content will disappear. The background always extends below the header's bottom edge via a negative `bottom` value to cover sticky controls beneath it.

```css
.header-bg {
  position: absolute;
  top: 0; left: 0; right: 0;
  bottom: -96px; /* extends 96px below header bottom */
  z-index: -1;
  background: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--sc-color-surface-l3) 80%, transparent) 0%,
    transparent 100%
  );
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  mask-image: linear-gradient(to bottom, black 16px, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 16px, transparent 100%);
  pointer-events: none;
}
```

## Animated pill toggle (sliding thumb)

Two explicit buttons are industry best practice over a single toggle hit region — direct state selection, better accessibility. Thumb uses absolute position + `transform: translateX()` transition; buttons sit above via `z-index: 1`.

```css
.theme-toggle {
  position: relative; display: flex; align-items: center;
  border-radius: 999px; padding: 3px;
  /* glass effect applied via sc-header::part(theme-toggle) from external CSS */
}
.theme-toggle-thumb {
  position: absolute; left: 3px; width: 28px; height: 28px;
  border-radius: 50%; background: var(--sc-color-surface-l4);
  box-shadow: var(--sc-shadow-l1);
  transition: transform 250ms ease; pointer-events: none;
}
.theme-toggle-thumb.dark { transform: translateX(28px); }
.theme-toggle button {
  position: relative; z-index: 1; width: 28px; height: 28px;
  border: none; border-radius: 50%; background: transparent; cursor: pointer;
  color: var(--sc-color-icon-subtle); transition: color 150ms ease;
}
.theme-toggle button.active { color: var(--sc-color-icon-primary); }
```

Expose the toggle container as a CSS part so external styles can apply glass effect:

```ts
html`<div class="theme-toggle" part="theme-toggle" ...>`
```

Then in the external SCSS:

```css
sc-header::part(theme-toggle) {
  background: color-mix(in srgb, var(--sc-color-background-neutral) 64%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
```

## Glass effect utility

A `.sc-glass` utility class is defined in `main.scss` for frosted-glass surfaces. Use it on regular (non-shadow DOM) elements. For shadow DOM elements, use `::part()` with the same values.

```css
.sc-glass {
  background: color-mix(in srgb, var(--sc-color-background-neutral) 64%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
```

## Sticky platform switch

The platform switch uses pure CSS sticky — no JS needed, no snap. Set `top` to the desired visual gap from the viewport edge (acts as both the sticky threshold and the visual offset). Use `pointer-events: none` on the section container and restore it on the switch itself so the transparent area doesn't block header controls.

```css
.platform-switch-section {
  position: sticky;
  top: 12px; /* desktop: gap from viewport top when stuck */
  z-index: 101; /* above header z-index: 100 */
  pointer-events: none;
}
.platform-switch-section .platform-switch {
  pointer-events: auto;
}
@media (max-width: 402px) {
  .platform-switch-section {
    top: 48px; /* mobile: clears the fixed header height */
  }
  .platform-switch {
    width: 100%;
  }
  .platform-switch button {
    flex: 1;
  }
}
```

## Theme-reactive image swap

Use a single `<img>` element and swap `src` based on `_theme`. Same element = identical sizing, `object-fit`, and `object-position` guaranteed. No stacking, no overlay, no specificity issues.

### Image focal point for bento cards

Always use `object-position: left top` (the `sc-card-image` default) for bento card images. This anchors to the top-left, preventing content from being cropped off the top when the card is shorter than the image's natural height.

Override the horizontal offset per-card with the `--sc-card-object-position` custom property:

```html
<sc-card-image style="--sc-card-object-position: -16px top">
```

Override `object-fit` per-card with `--sc-card-object-fit` (defaults to `cover`):

```html
<sc-card-image style="--sc-card-object-fit: contain">
```

The breakpoint reset at `≤810px` also applies `left top`, keeping the crop consistent across all screen sizes.

### Section feature images

`sc-section-feature` uses `aspect-ratio` and `height: auto` on the image so it renders at its natural ratio — no clipping. The `.image-wrap` is a flex container to centre the image vertically.

```css
.image-wrap {
  flex: 1;
  min-width: 370px;
  aspect-ratio: 38 / 35; /* matches 1824×1680px source images */
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.image-wrap img {
  width: 100%;
  height: auto;
  display: block;
}
```

Use `aspect-ratio` that exactly matches the source image dimensions to avoid any clipping. For 1824×1680px: GCD is 48, so `38 / 35`. CSS `aspect-ratio` accepts decimal values if needed (e.g. `6 / 5.2`).

```ts
// In render():
const src = this.imageSrcDark && this._theme === 'dark' ? this.imageSrcDark : this.imageSrc
// html`<img src=${src} alt=${this.imageAlt} />`
```

Listen for `theme-change` events dispatched by `sc-header`:

```ts
private _onThemeChange = (e: Event) => {
  this._theme = (e as CustomEvent).detail.theme
}
connectedCallback() {
  super.connectedCallback()
  this._theme = (document.documentElement.dataset.theme as 'light' | 'dark') ?? 'light'
  window.addEventListener('theme-change', this._onThemeChange)
}
disconnectedCallback() {
  super.disconnectedCallback()
  window.removeEventListener('theme-change', this._onThemeChange)
}
```

## Image file naming conventions

All static images live in `site/public/images/` organised by platform:

| Folder | Pattern | Usage |
|---|---|---|
| `images/framer/` | `sc-image-framer-{section}-{variant}-{theme}.png` | Framer bento + feature images |
| `images/figma/` | `sc-image-figma-{section}-{variant}-{theme}.png` | Figma bento + feature images |

Bento cards use `-light` / `-dark` pairs. Framer feature section images are light-only (no dark variant). Always use `image-src` + `image-src-dark` attributes on `sc-card-image` and `sc-section-feature` — never inline `src` on `<img>` tags.

## Platform switch default

The platform switch defaults to **Framer** (active button + active content panel). When updating JS that manages the platform switch state, ensure Framer starts as active:

```js
// Active button gets type="secondary", inactive gets type="tertiary"
framerBtn.setAttribute('type', 'secondary')
figmaBtn.setAttribute('type', 'tertiary')
```

## `color-mix()` for opacity without new tokens

```css
background: color-mix(in srgb, var(--sc-color-surface-l3) 80%, transparent);
```

Note: using `transparent` as the mix target can produce black-tinged gradients. For fade-to-transparent gradients, use CSS relative color syntax instead:

```css
rgb(from var(--sc-color-surface-l0) r g b / 0)
```

## Vite config ESM gotcha

`package.json` has `"type": "module"` so `__dirname` doesn't exist in `vite.config.ts`. Use:

```ts
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))
```

## Breakpoints

Two breakpoints used consistently across all section and layout components:

| Breakpoint | Value | Usage |
|---|---|---|
| Tablet | `max-width: 810px` | Multi-column → single column, form/card stacking |
| Mobile | `max-width: 402px` | Full-width buttons, text left-align, reduced padding |

## Spacing tokens

All padding, margin, and gap values use `--sc-space-*` tokens. Never use raw `px` for spacing (exceptions: `3px` toggle padding, `20px` header mobile padding, border widths, dimensions).

| Token | Value |
|---|---|
| `--sc-space-xs` | 4px |
| `--sc-space-s` | 8px |
| `--sc-space-m` | 12px |
| `--sc-space-l` | 16px |
| `--sc-space-xl` | 24px |
| `--sc-space-2xl` | 32px |
| `--sc-space-3xl` | 48px |
| `--sc-space-4xl` | 64px |
| `--sc-space-5xl` | 80px |
| `--sc-space-8xl` | 128px |

## Mobile layout patterns

### Stacking flex rows

```css
@media (max-width: 402px) {
  .container {
    flex-direction: column;
  }
}
```

### Full-width buttons in stacked actions

```css
@media (max-width: 402px) {
  .actions {
    flex-direction: column;
  }
  .actions sc-button {
    --sc-button-width: 100%;
  }
}
```

### Full-width slotted inputs and buttons

```css
@media (max-width: 402px) {
  .form {
    flex-direction: column;
  }
  .form ::slotted([slot='input']),
  .form ::slotted([slot='action']) {
    width: 100%;
  }
}
```

### Preventing flex children from over-stretching

When a flex container has a min-height or the parent is `flex: 1`, empty slot children can grow to fill the space, showing as a large gap. Fix with `flex: none` on mobile:

```css
@media (max-width: 402px) {
  .content {
    flex: none;  /* sizes to natural height only */
  }
}
```

### Left-aligning section text on mobile

```css
@media (max-width: 402px) {
  .container {
    text-align: left;
    align-items: flex-start;
  }
}
```

## Gotchas

**Token quirks**
- `--sc-border-width-s` resolves to 0 — use `1px` directly.
- `--sc-color-background-primary` goes dark in dark mode — never use for knobs/thumbs that need to stay light. Use `--sc-color-surface-l1` instead.

**Lit Boolean properties**
- `@property({ type: Boolean, reflect: true })` uses attribute *presence*, not value. `show-label="false"` sets it to `true` (attribute present). To set to `false`, omit the attribute and use the JS init pattern.
- `<sc-toggle checked>` = true (present). Absence = false.
