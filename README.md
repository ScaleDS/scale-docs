# Scale Design System — Docs & Preview Site

A site for the **Scale** design system, built for Figma and Framer users.

## What's in this repo

| Folder | Purpose |
|---|---|
| `site/` | Vite + Lit + TypeScript site with all components and previews |
| `site/src/components/` | Lit web components (`sc-button`, `sc-input`, `sc-toggle`, etc.) |
| `site/src/styles/` | SCSS design tokens (`--sc-*` CSS custom properties) |
| `site/src/styles/json/` | Upstream design token JSON source files |
| `site/public/` | Static assets served at root URL (hero images, etc.) |
| `site/components/` | Interactive preview pages, one per component |
| `site-md/` | Markdown reference for foundations and design decisions |
| `context/` | AI builder context and skill files |
| `context/framer/` | Framer template submission and DS checklist docs |
| `pencil/` | Pencil design files (`.pen`) |

## Running locally

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Building

```bash
cd site
npm run build
```

Output goes to `site/dist/`.

## Home page

`site/index.html` — the main marketing/sales page for Scale. Uses:

- `sc-header` — fixed header with scroll-reactive frosted-glass background, animated pill theme toggle (light/dark), and mobile drawer
- `sc-hero` — full-width hero with badge, heading, CTAs, and dual-image crossfade (light ↔ dark)
- `sc-button`, `sc-button-icon`, `sc-logo`, `sc-input`, `sc-accordion` — throughout sections
- Platform switch (Framer / Figma) — plain JS, no framework
- Pricing cards and FAQ accordion

## Components

### UI components

| Component | Preview |
|---|---|
| `sc-button` | `/components/sc-button.html` |
| `sc-input` | `/components/sc-input.html` |
| `sc-toggle` | `/components/sc-toggle.html` |
| `sc-badge` | `/components/sc-badge.html` |
| `sc-accordion` | `/components/sc-accordion.html` |
| `sc-button-icon` | *(no standalone preview)* |
| `sc-button-pill` | *(no standalone preview)* |
| `sc-logo` | *(no standalone preview)* |
| `sc-divider` | *(no standalone preview)* |

### Page layout components

| Component | Description |
|---|---|
| `sc-header` | Fixed header with scroll-reactive frosted-glass background, animated pill theme toggle, mobile drawer |
| `sc-hero` | Full-width hero with badge, heading, CTAs, dual-image crossfade (light ↔ dark) |
| `sc-footer` | Site footer with logo, copyright, and licence link |
| `sc-row` | Horizontal layout row wrapper |

### Section components

| Component | Description |
|---|---|
| `sc-section-content` | Centred heading + subtext section |
| `sc-section-feature` | Side-by-side content + image layout (supports `reverse` variant) |
| `sc-section-bento` | Bento-style grid section |
| `sc-section-pricing` | 3-column pricing card grid |
| `sc-section-faq` | FAQ section with accordion |
| `sc-section-signup` | Email signup card with heading and inline form |

### Card components

| Component | Description |
|---|---|
| `sc-card-image` | Image card used in bento and feature grids |
| `sc-card-pricing` | Pricing tier card with header, feature rows, and CTA footer |

## Responsive design

All section and layout components are fully responsive with two breakpoints:

| Breakpoint | Value | Behaviour |
|---|---|---|
| Tablet | `max-width: 810px` | Multi-column → single column; form/card stacking |
| Mobile | `max-width: 402px` | Full-width buttons and inputs; text left-aligned; reduced padding |

All spacing (padding, margin, gap) uses `--sc-space-*` CSS custom property tokens — never raw `px` values.

## Tech

- **Vite** — dev server and build
- **Lit** — web components with Shadow DOM
- **TypeScript** — component authoring
- **SCSS** — design token definitions
