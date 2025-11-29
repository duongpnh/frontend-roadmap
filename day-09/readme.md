# Day 9 — Responsive Design System

Decisions and rationale:

Breakpoints
- 900px: transition complex grids to 2 columns (comfortable tablets)
- 600px: stack to a single column (phones)

Fluid typography
- Headings use `clamp()` to scale with viewport while preserving readable min/max sizes
- Example: `h1 { font-size: clamp(1.5rem, 2.5vw + 1rem, 2.25rem); }`

Updated assets
- `../day-06/styles.css`: Added breakpoints for `.card-grid` (3→2→1), stacked two‑column inline-block; fluid headings
- `../day-07/styles.css`: Navbar wraps/hides CTA on small screens; fluid headings
- `../day-08/styles.css`: Fluid heading sizes; responsive gallery tile heights

Responsive images
- Use `object-fit: cover` and constrained heights for predictable crops

Next steps
- Consider container queries for component‑level responsiveness (where supported)
- Add dark‑mode adjustments via `prefers-color-scheme` if needed

