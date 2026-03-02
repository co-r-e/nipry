# Cycle Diagram Template

A diagram that represents repeating processes as a clockwise cycle. Ideal for PDCA, development cycles, and lifecycles.

## Layout Rules

- **Flow direction**: Clockwise
- **Arrows**: Right-angle connections between adjacent nodes
- **Node placement**: Arranged in a rectangular pattern (4 nodes = rectangle, 6 nodes = hexagonal-style)
- **Center**: Center of the viewBox
- **Symmetry**: All nodes equidistant from center

## Node Placement Patterns

### 4-Node Cycle (most common)

Placed at the four corners of a rectangle, connected clockwise:

```
    [1: Top]
       ↓
[4: Left]   [2: Right]
       ↑
    [3: Bottom]
```

Coordinates (viewBox 960x540, center 480,270):

| Node | Position | X | Y | Notes |
|------|----------|---|---|-------|
| 1 | Top | 400 | 72 | Centered |
| 2 | Right | 640 | 186 | |
| 3 | Bottom | 400 | 336 | |
| 4 | Left | 160 | 186 | |

Node size: 160 x 56

### 6-Node Cycle

In a 2-row by 3-column grid:
```
  [1]  ->  [2]  ->  [3]
   ↑                 ↓
  [6]  <-  [5]  <-  [4]
```

## Arrow Patterns (clockwise)

### 4-Node Cycle Arrows

```xml
<!-- 1(Top) -> 2(Right): Right edge -> Top edge -->
<path d="M {n1_right} {n1_cy} H {midX1} V {n2_top}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 2(Right) -> 3(Bottom): Bottom edge -> Right edge -->
<path d="M {n2_cx} {n2_bottom} V {midY1} H {n3_right}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 3(Bottom) -> 4(Left): Left edge -> Bottom edge -->
<path d="M {n3_left} {n3_cy} H {midX2} V {n4_bottom}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 4(Left) -> 1(Top): Top edge -> Left edge -->
<path d="M {n4_cx} {n4_top} V {midY2} H {n1_left}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### 6-Node Cycle Arrows

```xml
<!-- 1->2: Horizontal right -->
<path d="M {n1_right} {n1_cy} H {n2_left}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 2->3: Horizontal right -->
<path d="M {n2_right} {n2_cy} H {n3_left}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 3->4: Vertical down -->
<path d="M {n3_cx} {n3_bottom} V {n4_top}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 4->5: Horizontal left -->
<path d="M {n4_left} {n4_cy} H {n5_right}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 5->6: Horizontal left -->
<path d="M {n5_left} {n5_cy} H {n6_right}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 6->1: Vertical up -->
<path d="M {n6_cx} {n6_top} V {n1_bottom}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

## Complete SVG Example

"PDCA Cycle" (4 nodes):

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <defs>
    <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4"
            markerWidth="10" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 4 L 0 8 z" fill="{textMuted}"/>
    </marker>
  </defs>

  <!-- Node 1: Plan (Top) -->
  <g transform="translate(400, 72)">
    <rect width="160" height="56" rx="12" fill="{primary}" stroke="none"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
      Plan
    </text>
  </g>

  <!-- Node 2: Do (Right) -->
  <g transform="translate(640, 218)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Do
    </text>
  </g>

  <!-- Node 3: Check (Bottom) -->
  <g transform="translate(400, 368)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Check
    </text>
  </g>

  <!-- Node 4: Act (Left) -->
  <g transform="translate(160, 218)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Act
    </text>
  </g>

  <!-- Arrow: Plan -> Do (Right edge -> Top edge) -->
  <path d="M 560 100 H 620 V 218" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: Do -> Check (Bottom edge -> Right edge) -->
  <path d="M 720 274 V 348 H 560" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: Check -> Act (Left edge -> Bottom edge) -->
  <path d="M 400 396 H 340 V 274" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: Act -> Plan (Top edge -> Left edge) -->
  <path d="M 240 218 V 148 H 400" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Center label (optional) -->
  <text x="480" y="252" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="14" font-weight="600" fill="{textMuted}">
    Continuous Improvement
  </text>
</svg>
```

## Variations

- **Center icon/label**: Place theme text or shape at the center of the cycle
- **Nodes with subtext**: Make each node 2-line with a brief description on the second line
- **Emphasis node**: Use `{primary}` for the current phase and `{surface}` for others
- **5 nodes**: Pentagon pattern -- 1 top + 2 middle + 2 bottom
