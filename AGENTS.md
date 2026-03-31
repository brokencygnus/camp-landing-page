<!-- BEGIN:figma-design-reference -->
# Figma Design

**File:** CAMP-LNDNG
**URL:** https://www.figma.com/design/fYgjv4fV1deyMGlfTP1QxL/CAMP-LNDNG--Copy-
**File key:** `fYgjv4fV1deyMGlfTP1QxL`

## Pages

| Page | Node ID | URL |
|---|---|---|
| Beranda | `1726:10461` | https://www.figma.com/design/mw58rfM6BxVVs1kGwYLZnQ/CAMP-LNDNG?node-id=1726-10461 |
| Layanan | `1726:1277` | https://www.figma.com/design/mw58rfM6BxVVs1kGwYLZnQ/CAMP-LNDNG?node-id=1726-1277 |
| Tentang Kami | `1726:14046` | https://www.figma.com/design/mw58rfM6BxVVs1kGwYLZnQ/CAMP-LNDNG?node-id=1726-14046 |
| Hubungi Kami | `1726:15240` | https://www.figma.com/design/mw58rfM6BxVVs1kGwYLZnQ/CAMP-LNDNG?node-id=1726-15240 |

## How to use the Figma MCP

The Figma MCP is available via the `mcp__figma__*` tools. Use them to read design context before implementing any UI.

### Get design context for a page or section

Use `mcp__figma__get_design_context` with the file key and a node ID:

```
fileKey: mw58rfM6BxVVs1kGwYLZnQ
nodeId:  1726:10461   ← use the node ID from the table above
clientFrameworks: nextjs
clientLanguages: typescript,html,css
```

> The full-page node IDs are too large to load at once. If the response says the design is too large, call `mcp__figma__get_metadata` on the page node first to get section-level node IDs, then call `get_design_context` on individual sections.

### Explore structure without full code

Use `mcp__figma__get_metadata` to get a lightweight XML tree of node IDs, names, and positions — useful for mapping out a page before fetching specific sections.

### Workflow when implementing a page

1. Call `get_design_context` on the relevant page node ID.
2. If too large, call `get_metadata` to find section node IDs, then `get_design_context` per section.
3. Adapt the reference code to the project stack — do not use it verbatim.
4. Check existing components in the codebase before creating new ones.
<!-- END:figma-design-reference -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:tailwind-conventions -->
# Tailwind CSS Conventions

## Use classes over `style={}`
Avoid inline `style={{}}` whenever a Tailwind class exists. This includes:
- Colors: use theme classes (`bg-secondary`, `text-primary`, etc.)
- Sizes: use scale classes (`w-10`, `h-16`, etc.) or arbitrary values (`w-[621px]`)
- Negative offsets: use `-left-[x%]`, `-top-[x%]` — not `style={{ left: "-25%" }}`
- Keep `style={{}}` only for things Tailwind genuinely cannot express, such as multi-stop angled gradients.

## `@theme` must use static values
In Tailwind v4, `@theme` blocks require static literal values. **Do not reference `:root` CSS variables** inside `@theme` — Tailwind cannot resolve them at build time.

**Wrong:**
```css
@theme {
  --color-secondary: var(--ui-secondary); /* ✗ won't work */
}
```

**Correct:**
```css
@theme {
  --color-secondary: #50573d; /* ✓ literal value */
}
```

If you need both runtime CSS variables and Tailwind utilities for the same token, define them separately: literal values in `@theme`, and if needed again as `:root` variables for any non-Tailwind consumers.
<!-- END:tailwind-conventions -->
