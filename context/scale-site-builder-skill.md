---
name: scale-site-builder
description: >
  Build and modify the Scale design system docs site. Use when creating Lit
  components, editing pages, writing page scripts, or working with tokens,
  styles, or images for this project.
allowed-tools: Read, Edit, Write, Glob, Grep, Bash
---

## Project map

| Path | Purpose |
|---|---|
| `site/index.html` | Home/marketing page |
| `site/licence-agreement.html` | Licence page |
| `site/src/main.ts` | Registers all Lit components |
| `site/src/components/sc-*.ts` | Lit web components |
| `site/src/styles/main.scss` | Global styles, design tokens, utility classes |
| `site/src/index.js` | Home page script |
| `site/src/licence-agreement.js` | Licence page script |
| `site/src/signup.js` | Shared MailerLite subscribe logic — `setupSignup()` |
| `site/public/images/` | Static images — reference as `/images/…` |
| `site/components/sc-*.html` | Component preview pages |

Run: `cd site && npm run dev` — Build: `cd site && npm run build`

---

## Rules

**Tokens**
- All spacing, colour, and type values use `--sc-*` CSS custom properties. Never hardcode.
- `--sc-border-width-s` resolves to `0` — use `1px` directly.
- `--sc-color-background-primary` inverts in dark mode — for elements that must stay light use `--sc-color-surface-l1`.

**Lit components**
- `static styles` uses Lit's `css` tag — plain CSS only, no SCSS.
- Variants styled with `:host([prop='value'])` selectors.
- `@property({ type: Boolean, reflect: true })` uses attribute *presence* — `show-label="false"` sets it `true`. To set false, omit the attribute and set via JS.
- Boolean template bindings: `?attr=${bool}`, never the string `"false"`.

**Shadow DOM**
- `--sc-*` tokens inherit through Shadow DOM — always available inside components.
- External JS cannot reach inside Shadow DOM. Delegate methods on the host element:
  ```ts
  reportValidity(): boolean {
    return (this.shadowRoot!.querySelector('input') as HTMLInputElement).reportValidity()
  }
  ```
- Pass-through properties (`type`, `required`) must be declared as `@property()` and bound in `render()`.
- Style Shadow DOM elements from outside via `part="name"` → `::part(name)` in SCSS.

**Focus rings**
- Never transition `border-width` — it triggers layout recalculation and flickers. Use `box-shadow` instead:
  ```css
  .field { border: 1px solid var(--sc-color-border-primary); transition: border-color 150ms ease, box-shadow 150ms ease; }
  .field:focus-within { border-color: var(--sc-color-border-selected); box-shadow: 0 0 0 1px var(--sc-color-border-selected); }
  ```

**FOUC prevention**
- `body { opacity: 0; transition: opacity 250ms ease; }` must be an inline `<style>` in each HTML page's `<head>` — not in `main.scss`. Reveal with `document.body.style.opacity = '1'` only after all custom elements on the page are defined.

**Images**
- Never put images in `site/src/assets/` for HTML attribute use — always `site/public/images/`.
- Naming: `sc-image-{platform}-{section}-{variant}-{theme}.png`
- Always use `image-src` + `image-src-dark` on `sc-card-image` / `sc-section-feature`. Never inline `<img src>`.

**External links**
- Open in new tab: `window.open(url, '_blank', 'noopener,noreferrer')` in component handlers.
- Gumroad purchase URL: `https://christopherdeane.gumroad.com/l/scale`

**Page-specific styles**
- Add `data-page="pagename"` on `<html>` and scope overrides in `main.scss` with `[data-page='pagename']`.

---

## Workflows

### Add a new Lit component

1. Read Figma component for anatomy, variants, props, token values.
2. Create `site/src/components/sc-{name}.ts` with `@customElement`, `@property`, `static styles`, `render()`, and `declare global` block.
3. Register in `site/src/main.ts`: `import './components/sc-{name}'`
4. Create preview at `site/components/sc-{name}.html`.

### Add a new page

1. Create `site/{page-name}.html` with `data-page="{page-name}"` on `<html>`.
2. Add inline `<style>body { opacity: 0; transition: opacity 250ms ease; }</style>` in `<head>`.
3. Load `main.ts` and a page-specific `{page-name}.js` as `type="module"` scripts.
4. In `{page-name}.js`: import shared modules, call `setupSignup()` if needed, reveal page after all elements are defined.
5. Add page-scoped style overrides in `main.scss` under `[data-page='{page-name}']`.

---

## Component capabilities

| Component | Key props / slots |
|---|---|
| `sc-header` | `primary-label`, `primary-href`; `--sc-header-bg-bottom` controls gradient height; `::part(theme-toggle)` for glass effect |
| `sc-hero` | `primary-label`, `primary-href`, `secondary-label`, `secondary-href`, `image-src`, `image-src-dark` |
| `sc-button` | `type` (primary/secondary/tertiary), `size` (l/m/s), `disabled`; `--sc-button-width` for full-width; no `href` — wrap in `<a>` and add `::slotted(a) { display: block; text-decoration: none; }` to shadow CSS |
| `sc-input` | `label`, `placeholder`, `value`, `type`, `required`, `state` (default/negative/positive/disabled), `show-label`, `show-help-text`, `leading-icon`, `trailing-icon`; method `reportValidity()` |
| `sc-section-content` | `align` (center/left) |
| `sc-section-feature` | `reverse`; `image-src`, `image-src-dark`, `image-alt`; use `aspect-ratio: 38/35` for 1824×1680px images |
| `sc-card-image` | `image-src`, `image-src-dark`; `--sc-card-object-fit`, `--sc-card-object-position` |
| `sc-card-pricing` | slots: `heading`, `price`, `features`, `actions` |
| `sc-section-signup` | requires `id="signup"` for `setupSignup()`; slots: `heading`, `subtext`, `input`, `action` |
| `sc-footer` | `copyright`, `licence-label`, `licence-href` |

---

## Tokens quick reference

### Spacing

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

### Breakpoints

| Name | Value | Behaviour |
|---|---|---|
| Tablet | `max-width: 810px` | Multi-column → single column, stacking |
| Mobile | `max-width: 402px` | Full-width buttons/inputs, text left-aligned, reduced padding |
