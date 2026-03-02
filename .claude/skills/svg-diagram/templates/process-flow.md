# Process Flow Template

A horizontal chain flowing from left to right. Ideal for procedures, steps, and pipelines.

## Layout Rules

- **Flow direction**: Left -> Right
- **Arrows**: Right edge center -> Left edge center (horizontal connections)
- **Node placement**: Vertically centered (uniform Y coordinate)
- **Horizontal spacing**: 64-96px between nodes (including arrow space)
- **Number badges**: Optionally placed above each node

## Node Structure

### Step Node (with number badge)
```xml
<g transform="translate({x}, {y})">
  <!-- Number badge -->
  <circle cx="0" cy="-24" r="16"
          fill="{primary}" stroke="none"/>
  <text x="0" y="-24" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="13" font-weight="700" fill="#FFFFFF">
    1
  </text>
  <!-- Node body -->
  <rect x="-80" y="0" width="160" height="72" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="0" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    Step Name
  </text>
  <text x="0" y="52" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="13" fill="{textMuted}">
    Supplementary text
  </text>
</g>
```

### Simple Node (no number)
```xml
<g transform="translate({x}, {y})">
  <rect x="-80" y="0" width="160" height="56" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="0" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    Step Name
  </text>
</g>
```

## Coordinate Calculation Guide

For 4 steps (viewBox 960x540):

Node width 160px, spacing 64px -> Total width = 4x160 + 3x64 = 832px
Start X = (960 - 832) / 2 = 64

| Step | Node Center X | Node Left Edge X | Notes |
|------|---------------|------------------|-------|
| Step 1 | 144 | 64 | |
| Step 2 | 368 | 288 | 64+160+64+80 |
| Step 3 | 592 | 512 | |
| Step 4 | 816 | 736 | |

Node Y (vertically centered): (540 - 72) / 2 = 234

## Arrow Patterns

### Horizontal Connection Between Steps
```xml
<path d="M {x1 + 80} {y + 28} H {x2 - 80}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### Label Above Arrow
```xml
<text x="{midX}" y="{y + 16}" text-anchor="middle"
      font-family="{fontBody}" font-size="13" fill="{textMuted}">
  Label
</text>
```

## Complete SVG Example

"CI/CD Pipeline" (4 steps):

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <defs>
    <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4"
            markerWidth="10" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 4 L 0 8 z" fill="{textMuted}"/>
    </marker>
  </defs>

  <!-- Step 1: Code -->
  <g transform="translate(144, 222)">
    <circle cx="0" cy="-24" r="16" fill="{primary}" stroke="none"/>
    <text x="0" y="-24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="13" font-weight="700" fill="#FFFFFF">1</text>
    <rect x="-80" y="0" width="160" height="72" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="0" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{primary}">
      Code Push
    </text>
    <text x="0" y="52" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="13" fill="{textMuted}">
      git push
    </text>
  </g>

  <!-- Arrow 1->2 -->
  <path d="M 224 258 H 288" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Step 2: Build -->
  <g transform="translate(368, 222)">
    <circle cx="0" cy="-24" r="16" fill="{primary}" stroke="none"/>
    <text x="0" y="-24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="13" font-weight="700" fill="#FFFFFF">2</text>
    <rect x="-80" y="0" width="160" height="72" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="0" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      Build
    </text>
    <text x="0" y="52" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="13" fill="{textMuted}">
      Docker image
    </text>
  </g>

  <!-- Arrow 2->3 -->
  <path d="M 448 258 H 512" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Step 3: Test -->
  <g transform="translate(592, 222)">
    <circle cx="0" cy="-24" r="16" fill="{primary}" stroke="none"/>
    <text x="0" y="-24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="13" font-weight="700" fill="#FFFFFF">3</text>
    <rect x="-80" y="0" width="160" height="72" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="0" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      Test
    </text>
    <text x="0" y="52" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="13" fill="{textMuted}">
      Unit + E2E
    </text>
  </g>

  <!-- Arrow 3->4 -->
  <path d="M 672 258 H 736" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Step 4: Deploy -->
  <g transform="translate(816, 222)">
    <circle cx="0" cy="-24" r="16" fill="{primary}" stroke="none"/>
    <text x="0" y="-24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="13" font-weight="700" fill="#FFFFFF">4</text>
    <rect x="-80" y="0" width="160" height="72" rx="12"
          fill="{primary}" stroke="none"/>
    <text x="0" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="700" fill="#FFFFFF">
      Deploy
    </text>
    <text x="0" y="52" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="13" fill="#FFFFFF" opacity="0.8">
      Production
    </text>
  </g>
</svg>
```

## Variations

- **5+ steps**: Reduce node width to 140px and spacing to 48px, or wrap to 2 rows
- **2-row wrap**: Row 1 flows left->right, row 2 flows right->left. Connect rows with vertical arrows
- **No numbers**: Omit badges for a simple horizontal chain
- **Sub-steps**: Add small sub-nodes vertically below main nodes
