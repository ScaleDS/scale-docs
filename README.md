# Scale Design System — Docs & Preview Site

Marketing and documentation site for the **Scale** design system, built for Figma and Framer users.

## Repo structure

| Folder | Purpose |
|---|---|
| `docs/` | Build output — deployed to GitHub Pages |
| `site/` | Vite + Lit + TypeScript site |
| `site/src/components/` | Lit web components (`sc-button`, `sc-input`, etc.) |
| `site/src/styles/` | SCSS design tokens (`--sc-*` CSS custom properties) |
| `site/public/` | Static assets served at root URL |
| `site/components/` | Interactive component preview pages |
| `site-md/` | Markdown reference for foundations and design decisions |
| `context/` | AI builder context and skill files |
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

Output goes to `docs/` in the repo root (configured in `site/vite.config.ts`).

## Pages

| Page | File |
|---|---|
| Home / marketing | `site/index.html` |
| Licence Agreement | `site/licence-agreement.html` |

Each page `<head>` includes: Google Analytics (G-SBTLFNGKX7), canonical URL, Open Graph + Twitter/X meta tags, favicons, and an inline FOUC-prevention style.

## Components

### UI

| Component | Preview |
|---|---|
| `sc-button` | `/components/sc-button.html` |
| `sc-input` | `/components/sc-input.html` |
| `sc-toggle` | `/components/sc-toggle.html` |
| `sc-badge` | `/components/sc-badge.html` |
| `sc-accordion` | `/components/sc-accordion.html` |
| `sc-button-icon`, `sc-button-pill`, `sc-logo`, `sc-divider` |

### Layout & sections

| Component | Description |
|---|---|
| `sc-header` | Fixed header with frosted-glass background (20% opacity, 24px blur), single-pill theme toggle, mobile drawer |
| `sc-hero` | Full-width hero with badge, CTAs, theme-reactive image |
| `sc-footer` | Footer with logo, copyright, and licence link |
| `sc-row` | Horizontal layout row wrapper |
| `sc-section-content` | Centred heading + subtext |
| `sc-section-feature` | Side-by-side content + image (supports `reverse`) |
| `sc-section-bento` | Bento grid section |
| `sc-section-pricing` | 3-column pricing card grid |
| `sc-section-faq` | FAQ accordion section |
| `sc-section-signup` | Email signup card with MailerLite integration |
| `sc-card-image` | Image card for bento and feature grids |
| `sc-card-pricing` | Pricing tier card |

## Static assets

| Path | Contents |
|---|---|
| `site/public/images/favicon/` | `sc-favicon.png` (browser tab), `sc-app-icon.png` (iOS/Android home screen) |
| `site/public/images/og/` | `sc-image-og.png` — Open Graph share image |
| `site/public/images/framer/` | Framer bento + feature section images |
| `site/public/images/figma/` | Figma bento + feature section images |

## Tech

- **Vite** — dev server and build
- **Lit** — web components with Shadow DOM
- **TypeScript** — component authoring
- **SCSS** — design token definitions
- **MailerLite** — email signup via REST API