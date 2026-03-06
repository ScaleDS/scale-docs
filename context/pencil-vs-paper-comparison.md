# Pencil.dev vs Paper.design — Comparison

> Research conducted February 2026.

---

## Overview

Both tools occupy a new category: **code-native design tools** that treat design and code as the same artifact rather than separate handoff steps. Both expose MCP servers for AI agent integration. Despite surface-level similarities, their architectures and philosophies differ significantly.

| | [Pencil.dev](https://www.pencil.dev/) | [Paper.design](https://paper.design) |
|---|---|---|
| **Tagline** | "Design on canvas. Land in code." | "Design, share, ship." |
| **Status** | Early access, free | Open alpha, free |
| **Platform** | VS Code / Cursor extension (IDE-embedded) | Standalone desktop app + browser |
| **Primary user** | Developer / engineer | Designer + developer team |
| **File format** | JSON-based `.pen` files in your git repo | Proprietary format, exports HTML/CSS/Tailwind |
| **Canvas type** | Custom vector canvas | HTML/CSS canvas (real browser rendering) |
| **MCP server** | Local, auto-starts with Pencil | Local, auto-starts with Paper Desktop |
| **Code output** | React, Next.js, Vue, Svelte, HTML/CSS | HTML, JSX, Tailwind CSS |
| **Figma import** | Copy-paste (preserves layers, styles, auto-layout) | Token sync via MCP |
| **Pricing** | Free (early access) | Free (open alpha) |

---

## Architecture

### Pencil.dev

Pencil lives **inside your IDE** — it is a VS Code/Cursor extension, not a standalone app. Designs are stored as **`.pen` files**: a lightweight, open JSON format that lives directly in your git repository alongside your code. This is the core architectural bet: design files are version-controlled the same way code is. There is no separate design history — you commit, branch, and merge designs like any other file.

The **MCP server** runs locally on your machine with no cloud dependency. It gives connected AI assistants (Claude Code, Cursor, Windsurf, Codex CLI, etc.) a set of structured tools to read and modify `.pen` files:

- `batch_get` — reads component trees, searches for elements by pattern
- `batch_design` — executes insert, update, copy, replace, move, delete operations
- `snapshot_layout` — analyzes computed layout rectangles, detects positioning issues
- `get_screenshot` — renders a visual of any node
- `get_variables` / `set_variables` — manages design tokens

The **design-to-code** flow works by asking the AI to generate code from the open `.pen` file. Pencil supports generating for React, Next.js, Vue, Svelte, or plain HTML/CSS with Tailwind, CSS Modules, Styled Components, or plain CSS. It also supports component libraries like Shadcn UI, Radix UI, Chakra UI, and Material UI.

The **reverse flow** (code → design) is also supported: an AI agent can import an existing component from your codebase back into the canvas, reconstructing its structure, layout, colors, and typography as editable design elements.

**Figma integration** works via copy-paste: copy a frame in Figma, paste it into Pencil. Layers, auto-layout, and styles are preserved. Complex Auto Layout configurations may need manual adjustment post-import.

### Paper.design

Paper is a **standalone desktop application** (macOS/Windows) with a companion browser interface at `app.paper.design`. Its core architectural bet is different from Pencil's: the canvas **is** HTML and CSS. Elements are rendered using real browser layout — real flexbox, real CSS properties, real font rendering. There is no conversion step: the design exports as the same code that powers it.

Paper has a **partnership with the Tailwind team** to render Tailwind in real time and import/export idiomatic Tailwind code. This means you can work in Tailwind's design language natively within Paper's canvas.

The **MCP server** auto-starts when you open a file in Paper Desktop. Because Paper's canvas is DOM-based, and LLMs naturally understand HTML/DOM structure, agents can interact with designs at a granular level:

- **Read tools**: file metadata, selection info, node tree, computed styles, visual screenshots, JSX representations
- **Write tools**: create artboards, parse and insert HTML, modify text, rename layers, duplicate nodes, update styles, delete elements

The **CLI sync** allows engineers to pull the design's code output directly into their codebase. Because the canvas renders real CSS, what engineers pull is genuinely production-ready — not a translation of a design spec.

Paper also supports connecting to **live data sources** (databases, Notion, external APIs), allowing designs to use real content rather than placeholder text. This is a differentiator no other tool in this space currently offers.

---

## How They Differ

### 1. Where they live
Pencil embeds inside your IDE — it's a development tool that happens to have a design canvas. Paper is a design tool that happens to produce code. This shapes everything about who reaches for it first and how it fits into a workflow.

### 2. File format and version control
Pencil's `.pen` files are open JSON that Git understands natively. This is an elegant approach for developer-led teams: no separate design tooling infrastructure, no locked formats. Paper's format is proprietary, but its CLI sync and code exports bridge the gap for engineers.

### 3. Canvas fidelity
Paper's HTML/CSS canvas means what you see is literally what ships — there's no interpretation layer between design and output. Pencil translates its canvas format to code via AI, which introduces some variability (complex layouts may need tweaking).

### 4. AI integration model
Both use MCP, but differently. Pencil's MCP exposes custom design operations (`batch_design`, `batch_get`) that are structured specifically for its canvas format — high control, structured API. Paper's MCP is more DOM-native: agents interact with the canvas the same way they'd interact with a web page, which means LLMs need less special training to use it effectively.

### 5. Collaboration
Pencil has **no multiplayer**. The official docs explicitly state "Real-time multiplayer not available — collaboration via Git only." Teams coordinate through branches and PRs like any other code change.

Paper is marketed as a tool "for teams" and multiplayer infrastructure exists — a Dec 2025 build log entry references a bug fix for "another user in multiplayer" — but it is not a prominent, documented feature. There are no confirmed live cursors, presence indicators, or observation mode. Paper's multiplayer appears to be early-stage and is not comparable to Figma's collaborative editing today.

Neither tool is close to Figma's real-time multiplayer, which remains one of Figma's strongest advantages: simultaneous editing, live cursors, presence awareness, and conflict resolution are all first-class features Figma has spent years building out.

### 6. Design expressiveness
Paper ships features like shaders, halftone effects, OKLCH color picker, blur/saturation/filter panels, and AI image generation (Flux, Gemini). It's clearly building toward being a full creative design tool. Pencil is more utilitarian — focused on accurate, fast UI construction and code generation rather than visual effects.

### 7. Figma relationship
Pencil has a direct Figma copy-paste import and a Figma community plugin (`pencil-dev-pen-file-import`). Paper can sync Figma tokens via MCP but doesn't position itself as Figma-adjacent — it's positioning as a Figma replacement built on web standards.

### 8. Framework and styling flexibility
Pencil explicitly supports multiple frameworks and styling approaches out of the box: React, Next.js, Vue, Svelte, or plain HTML/CSS, with Tailwind CSS, CSS Modules, Styled Components, or plain CSS as styling options. Angular is not on its list natively, but the range is broad.

Paper's native "Copy as" output is currently limited to three options: React with plain CSS, React with Tailwind CSS, and raw HTML/CSS. There is no native Angular, SCSS, Vue, or CSS Modules export. The MCP docs state you can "choose any technologies you want," but this refers to what you ask the **AI agent** to generate — Paper itself does not produce Angular or SCSS output. In practice, you could prompt Claude Code or Cursor (via Paper's MCP) to convert a design into Angular components with SCSS, but that's the agent doing the translation, not Paper. Neither tool supports Angular or SCSS as a first-class output today.

---

## Strengths and Weaknesses

### Pencil.dev

**Strengths**
- Zero context switching — design never leaves the IDE
- `.pen` files in Git = design history is free via version control
- Precise, structured MCP API with broad IDE support
- Strong Figma import for teams migrating workflows
- Bidirectional design ↔ code sync
- Supports multiple frameworks and component libraries

**Weaknesses**
- No multiplayer / real-time collaboration
- Complex Auto Layout from Figma may need manual cleanup
- No backend logic — complex state/API work still requires traditional dev
- Claude-centric currently (less tested with other agents)
- Early stage — feature set still maturing

### Paper.design

**Strengths**
- Canvas IS the code — no translation layer, guaranteed output fidelity
- Native Tailwind partnership for idiomatic CSS output
- Real data integration (live content from external sources)
- Strong team collaboration features
- DOM-based canvas = LLMs understand it natively without custom tooling
- Rich creative features (shaders, image gen, effects)
- Ships to production nearly every day

**Weaknesses**
- Standalone app — requires context switch from IDE
- Proprietary file format (no Git-native versioning)
- Still in open alpha — some instability expected
- Less IDE-embedded than Pencil
- Figma migration path less mature
- Code output limited to React + CSS and React + Tailwind — no Angular, SCSS, Vue, or CSS Modules natively

---

## Recommendation

**Choose Pencil.dev if:**
- Your team is developer-led and design lives inside the engineering workflow
- You want design files version-controlled in Git without extra tooling
- You're already using Claude Code or Cursor heavily
- You're migrating from Figma and want a direct import path
- You prioritize framework flexibility (React, Vue, Svelte, etc.)

**Choose Paper.design if:**
- You have a design team working alongside engineering
- Pixel-perfect, zero-translation code output is a hard requirement
- You want to use real content and live data in designs
- You want Tailwind as a first-class design language
- You need team collaboration built in from day one

**Overall:** For a developer-first workflow where design is embedded in the codebase, **Pencil.dev** has the more coherent architecture — `.pen` files in Git is a genuinely elegant solution to the design-code gap, and the IDE integration eliminates handoff entirely. For a design team that ships to production and needs output fidelity guarantees, **Paper.design**'s HTML/CSS canvas is architecturally superior — what you design is literally what ships, with no AI interpretation required.

The two tools are not quite direct competitors yet: Pencil is further along for developer adoption, Paper is further along for design team adoption. If your team spans both disciplines with serious requirements on both ends, it's worth watching both closely — they are the two most interesting tools in this space right now.

---

## Sources

- [Pencil.dev](https://www.pencil.dev/)
- [Pencil Documentation](https://docs.pencil.dev/)
- [Pencil AI Integration Docs](https://docs.pencil.dev/getting-started/ai-integration)
- [Pencil Design-to-Code Docs](https://docs.pencil.dev/design-and-code/design-to-code)
- [Paper.design](https://paper.design)
- [Paper MCP Server Docs](https://paper.design/docs/mcp)
- [Paper Build Log](https://paper.design/build-log)
- [Pencil.dev Review — Banani](https://www.banani.co/blog/pencil-dev-review)
- [Paper.design Review: MCP, Features, Pricing — Banani](https://www.banani.co/blog/paper-design-mcp-review)
- [Pencil.dev: Bridging the Design-to-Code Gap — Medium](https://medium.com/@tentenco/pencil-dev-bridging-the-design-to-code-gap-in-modern-development-fede236fa551)
- [This tool will replace Figma — Medium](https://medium.com/design-bootcamp/is-figma-being-replaced-a9f7c5ef2ef3)
