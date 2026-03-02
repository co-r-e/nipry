# Flowchart Template

A top-to-bottom flowchart. Ideal for process flows, decision branches, and workflows.

## Layout Rules

- **Flow direction**: Top -> Bottom
- **Arrows**: Bottom edge center -> Top edge center (vertical connections)
- **Node placement**: Horizontally centered
- **Vertical spacing**: 80-120px (between nodes)
- **Branch spacing**: Minimum 200px left/right

## Node Types

### Process Node (rounded rectangle)
```xml
<g transform="translate({x}, {y})">
  <rect width="200" height="56" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="100" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    Process Name
  </text>
</g>
```

### Decision Node (diamond)
```xml
<g transform="translate({centerX}, {centerY})">
  <polygon points="0,-40 80,0 0,40 -80,0"
           fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="0" y="0" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="14" font-weight="600" fill="{text}">
    Condition?
  </text>
</g>
```
- Diamond size: 160 wide x 80 tall
- Keep text short (max 3 words)

### Start/End Node (primary emphasis)
```xml
<g transform="translate({x}, {y})">
  <rect width="160" height="48" rx="24"
        fill="{primary}" stroke="none"/>
  <text x="80" y="24" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="700" fill="#FFFFFF">
    Start
  </text>
</g>
```
- `rx="24"` makes corners more rounded to visually distinguish start/end nodes

## Arrow Patterns

### Straight Connection (top -> bottom)
```xml
<path d="M {x} {y1} V {y2}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### Branch (from decision node to left/right)
```xml
<!-- Yes branch (downward) -->
<path d="M {cx} {cy+40} V {nextY}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<text x="{cx+8}" y="{cy+56}" font-family="{fontBody}" font-size="13" fill="{textMuted}">
  Yes
</text>

<!-- No branch (rightward then downward) -->
<path d="M {cx+80} {cy} H {rightX} V {nextY}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<text x="{cx+88}" y="{cy-8}" font-family="{fontBody}" font-size="13" fill="{textMuted}">
  No
</text>
```

## Coordinate Calculation Guide

For a 3-node linear flow (viewBox 960x540):

| Element | X | Y | Notes |
|---------|---|---|-------|
| Start node | 400 | 48 | Centered (960-160)/2 |
| Arrow 1 | 480 | 96->168 | Start bottom -> Process 1 top |
| Process node 1 | 380 | 168 | Centered (960-200)/2 |
| Arrow 2 | 480 | 224->312 | Process 1 bottom -> Process 2 top |
| Process node 2 | 380 | 312 | |
| Arrow 3 | 480 | 368->432 | |
| End node | 400 | 432 | |

## Complete SVG Example

"User Authentication Flow" (3 steps + 1 branch):

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <defs>
    <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4"
            markerWidth="10" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 4 L 0 8 z" fill="{textMuted}"/>
    </marker>
  </defs>

  <!-- Start -->
  <g transform="translate(400, 48)">
    <rect width="160" height="48" rx="24" fill="{primary}" stroke="none"/>
    <text x="80" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="700" fill="#FFFFFF">
      Request Received
    </text>
  </g>

  <!-- Arrow: Start -> Decision -->
  <path d="M 480 96 V 148" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Decision: Token Valid? -->
  <g transform="translate(480, 188)">
    <polygon points="0,-40 80,0 0,40 -80,0"
             fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="0" y="0" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="14" font-weight="600" fill="{text}">
      Token Valid?
    </text>
  </g>

  <!-- Yes branch (downward) -> Access Granted -->
  <path d="M 480 228 V 300" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="492" y="252" font-family="{fontBody}" font-size="13" fill="{textMuted}">
    Yes
  </text>

  <g transform="translate(380, 312)">
    <rect width="200" height="56" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="100" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{primary}">
      Access Granted
    </text>
  </g>

  <!-- No branch (rightward then downward) -> Auth Error -->
  <path d="M 560 188 H 700 V 300" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="572" y="178" font-family="{fontBody}" font-size="13" fill="{textMuted}">
    No
  </text>

  <g transform="translate(600, 312)">
    <rect width="200" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="100" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      Auth Error
    </text>
  </g>

  <!-- End -->
  <g transform="translate(400, 432)">
    <rect width="160" height="48" rx="24" fill="{primary}" stroke="none"/>
    <text x="80" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="700" fill="#FFFFFF">
      Return Response
    </text>
  </g>

  <!-- Arrow: Access Granted -> End -->
  <path d="M 480 368 V 420" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: Auth Error -> End -->
  <path d="M 700 368 V 408 H 560" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
</svg>
```

## Variations

- **Many nodes**: Expand viewBox to `0 0 960 720`
- **2+ branches**: Extend to a 3-column layout (left, center, right)
- **Loopback arrows**: Exit from a node's right edge, detour widely to the right, and enter the upper node's right edge
