# Hierarchy (Tree) Diagram Template

A tree structure that expands from top to bottom. Ideal for org charts, classification trees, and inheritance relationships.

## Layout Rules

- **Flow direction**: Top -> Bottom
- **Arrows**: Parent's bottom edge center -> Child's top edge center
- **Root node**: Placed at top center (primary emphasis)
- **Sibling nodes**: Arranged horizontally at equal intervals
- **Level spacing**: Vertical 96-120px

## Node Types

### Root Node
```xml
<g transform="translate({x}, {y})">
  <rect width="200" height="56" rx="12"
        fill="{primary}" stroke="none"/>
  <text x="100" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
    Root
  </text>
</g>
```

### Child Node (standard)
```xml
<g transform="translate({x}, {y})">
  <rect width="160" height="56" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    Child Node
  </text>
</g>
```

### Leaf Node (terminal)
```xml
<g transform="translate({x}, {y})">
  <rect width="140" height="48" rx="12"
        fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
  <text x="70" y="24" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="14" font-weight="600" fill="{primary}">
    Leaf
  </text>
</g>
```

## Arrow Patterns (right-angle connections)

### One-to-Many Connection (parent -> multiple children)

From the parent node's bottom edge center, descend vertically to a midpoint, then branch horizontally and descend vertically to each child node's top edge center.

```xml
<!-- Common vertical trunk -->
<path d="M {parentCX} {parentBottom} V {midY}" fill="none"
      stroke="{textMuted}" stroke-width="1.5"/>

<!-- Horizontal branch line -->
<path d="M {child1CX} {midY} H {childNCX}" fill="none"
      stroke="{textMuted}" stroke-width="1.5"/>

<!-- Vertical drop to each child -->
<path d="M {child1CX} {midY} V {childTop}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<path d="M {child2CX} {midY} V {childTop}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<path d="M {child3CX} {midY} V {childTop}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

## Coordinate Calculation Guide

For 1 root -> 3 children -> 2 grandchildren each (viewBox 960x540):

**Level 0 (Root)**: Y=48
- Root: X=(960-200)/2=380, W=200

**Level 1 (Children, 3 nodes)**: Y=192
- Total width: 3x160 + 2x80 = 640
- Start X: (960-640)/2 = 160
- Child 1: X=160, Child 2: X=400, Child 3: X=640

**Connection midpoint Y**: (48+56+192)/2 = (104+192)/2 = 148

**Level 2 (Grandchildren, 6 nodes)**: Y=336
- 2 placed under each parent
- Grandchild node width: 140px, spacing: 16px
- Parent 1's grandchildren: X=90, X=246
- Parent 2's grandchildren: X=330, X=486
- Parent 3's grandchildren: X=570, X=726

## Complete SVG Example

"Tech Stack Classification" (1 root -> 3 categories -> 2 items each):

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <defs>
    <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4"
            markerWidth="10" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 4 L 0 8 z" fill="{textMuted}"/>
    </marker>
  </defs>

  <!-- Level 0: Root -->
  <g transform="translate(380, 48)">
    <rect width="200" height="56" rx="12" fill="{primary}" stroke="none"/>
    <text x="100" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
      Tech Stack
    </text>
  </g>

  <!-- Root -> Children connections -->
  <path d="M 480 104 V 148" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 240 148 H 720" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 240 148 V 192" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 480 148 V 192" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 720 148 V 192" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Level 1: Categories -->
  <g transform="translate(160, 192)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      Frontend
    </text>
  </g>

  <g transform="translate(400, 192)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      Backend
    </text>
  </g>

  <g transform="translate(640, 192)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      Infra
    </text>
  </g>

  <!-- Child 1 -> Grandchildren connections -->
  <path d="M 240 248 V 292" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 162 292 H 318" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 162 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 318 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Child 2 -> Grandchildren connections -->
  <path d="M 480 248 V 292" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 402 292 H 558" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 402 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 558 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Child 3 -> Grandchildren connections -->
  <path d="M 720 248 V 292" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 642 292 H 798" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 642 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 798 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Level 2: Leaf nodes -->
  <g transform="translate(92, 336)">
    <rect width="140" height="48" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="70" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="14" font-weight="600" fill="{primary}">
      React
    </text>
  </g>
  <g transform="translate(248, 336)">
    <rect width="140" height="48" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="70" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="14" font-weight="600" fill="{primary}">
      Next.js
    </text>
  </g>

  <g transform="translate(332, 336)">
    <rect width="140" height="48" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="70" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="14" font-weight="600" fill="{primary}">
      Go
    </text>
  </g>
  <g transform="translate(488, 336)">
    <rect width="140" height="48" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="70" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="14" font-weight="600" fill="{primary}">
      PostgreSQL
    </text>
  </g>

  <g transform="translate(572, 336)">
    <rect width="140" height="48" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="70" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="14" font-weight="600" fill="{primary}">
      AWS
    </text>
  </g>
  <g transform="translate(728, 336)">
    <rect width="140" height="48" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="70" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="14" font-weight="600" fill="{primary}">
      Docker
    </text>
  </g>
</svg>
```

## Variations

- **Deep hierarchy (4+ levels)**: Expand viewBox to `0 0 960 720`
- **Uneven children**: When child counts differ, allocate subtree width proportionally to the number of children
- **Collapsed representation**: Abbreviate terminals with `...` and add "+N items" text below the node
