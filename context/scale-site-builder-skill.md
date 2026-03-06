# Scale site builder

This project is for a design system called Scale, used by Figma and Framer users.

## Sources

- **Design** — Figma components (use Figma MCP to read anatomy, variants, properties, token values)
- **CSS tokens** — `site/src/styles/` — map Figma variables to `--sc-*` equivalents
- **Foundations reference** — `site-md/foundations/`
- **Assets** — `site/public/assets/`

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

Segmented button style. Inactive buttons: `color: rgba(0,0,0,0.45)` in light, `[data-theme="dark"] color: rgba(255,255,255,0.45)` in dark — never use tokens here (insufficient contrast). Active: `background: var(--sc-color-background-primary)`, `color: var(--sc-color-text-primary)`.

## Gotchas

**Token quirks**
- `--sc-border-width-s` resolves to 0 — use `1px` directly.
- `--sc-color-background-primary` goes dark in dark mode — never use for knobs/thumbs. Use hardcoded `white`.

**Lit Boolean properties**
- `@property({ type: Boolean, reflect: true })` uses attribute *presence*, not value. `show-label="false"` sets it to `true` (attribute present). To set to `false`, omit the attribute and use the JS init pattern.
- `<sc-toggle checked>` = true (present). Absence = false.
