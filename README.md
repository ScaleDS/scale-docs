# Scale Design System — Docs & Preview Site

A site for the **Scale** design system, built for Figma and Framer users.

## What's in this repo

| Folder | Purpose |
|---|---|
| `site/` | Vite + Lit + TypeScript site with all components and previews |
| `site/src/components/` | Lit web components (`sc-button`, `sc-input`, `sc-toggle`, etc.) |
| `site/src/styles/` | SCSS design tokens (`--sc-*` CSS custom properties) |
| `site/components/` | Interactive preview pages, one per component |
| `site-md/` | Markdown reference for foundations and design decisions |
| `context/` | AI builder context and skill files |

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

## Components

| Component | Preview |
|---|---|
| `sc-button` | `/components/sc-button.html` |
| `sc-input` | `/components/sc-input.html` |
| `sc-toggle` | `/components/sc-toggle.html` |
| `sc-badge` | `/components/sc-badge.html` |
| `sc-accordion` | `/components/sc-accordion.html` |

## Tech

- **Vite** — dev server and build
- **Lit** — web components with Shadow DOM
- **TypeScript** — component authoring
- **SCSS** — design token definitions
