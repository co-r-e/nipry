# nipry — Project CLAUDE.md

## MDX Slide Authoring Rules

```yaml
slide_layout:
  inviolable_area:
    definition: >
      The content area inside the slide frame, bounded by padding on all sides.
      Overlay elements (logo, copyright, page number) float above this area via absolute positioning.
      All MDX content is rendered exclusively within this area.
    padding_by_type:
      content: "80px top, 72px left/right, 64px bottom"
      cover: "96px top, 96px left/right, 80px bottom"
      ending: "96px top, 96px left/right, 80px bottom"
      section: "96px top, 96px left/right, 80px bottom"
      quote: "120px top, 140px left/right, 100px bottom"
      image-full: "0 (no padding)"
    structure: |
      SlideFrame (relative, overflow-hidden)
        ├── SlideOverlay (absolute inset-0, z-10, pointer-events-none)
        │   ├── Logo
        │   ├── Copyright
        │   └── Page number
        └── Content container (flex-col, padding applied)
            └── SlideContent (flex-1, min-h-0)
                └── [data-mdx-status] (flex h-full flex-col)
                    └── MDX content (headings, paragraphs, charts, etc.)
    rules:
      - Never modify SlideFrame padding values; they are already calibrated.
      - All content must fit within the inviolable area. No negative margins to break out (except cover type).
      - Elements with data-growable expand via flex:1 to fill remaining vertical space.

no_markdown_lists_in_jsx:
  rule: Never use Markdown list syntax (- or 1.) inside JSX components
  reason: Causes MDX parse errors inside <Column>, <Card>, <Center>, <div>, etc.
  use_instead: <ul><li> HTML tags
  scope: Markdown list syntax is only allowed at the top level (not wrapped in JSX)
  example_bad: |
    <Column width="50%">
    - Item 1
    - Item 2
    </Column>
  example_good: |
    <Column width="50%">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    </Column>

prefer_p_over_ul_li:
  rule: Use <p> with middle dots (・) instead of JSX <ul><li>
  reason: JSX <ul><li> bypasses slide component font sizing and renders at browser default (small)
  example_good: |
    <p style={{ fontSize: "2.2rem", color: "var(--slide-text-muted)" }}>
      ・Item 1<br/>・Item 2
    </p>

minimum_font_size:
  rule: All text on slides must be 1.8rem or larger
  reason: Smaller sizes (1.5-1.7rem) are hard to read when projected
  exception: Dates, badges, and other auxiliary text

content_area_space_usage:
  rule: Minimize whitespace inside the content area; pack content tightly
  details:
    - Visual elements (charts, graphs, images, diagrams) must be displayed as large as possible.
      They are the focal point of the slide and should use all remaining space.
    - Block element margins use --slide-space-sm (16px) as the baseline. No wasted whitespace.
    - Expandable elements (code blocks, tables, charts, images) use the data-growable attribute
      to automatically fill remaining space.
    - Exception: when content is genuinely sparse (e.g., a single line of text), whitespace is acceptable.

accent_color:
  rule: Use at most one accent color per slide
  details:
    - The primary color (--slide-primary) is the base. Only one additional accent color is allowed.
    - Multiple accent colors compete for attention and weaken visual hierarchy.
    - Use color intensity (opacity, lighter/darker shades of the same hue) for variation instead.

icon_usage:
  rule: Only use icons when they accurately convey meaning. Never use icons "just because."
  allowed:
    - Checklist completion/incomplete states (circle-check, circle)
    - Before/After good/bad indicators (check-circle, x-circle)
    - Platform links like GitHub/Docs (github, book-open)
    - Process representation inside flow diagram steps
    - Avatar placeholders (user)
  prohibited:
    - Decorative icons next to headings
    - Atmosphere-setting icons on cover slides
    - Icons above feature card text when the text already conveys the meaning
    - Circle-background + icon combos for section dividers
  test: "If removing the icon loses no information, the icon is unnecessary."
```
