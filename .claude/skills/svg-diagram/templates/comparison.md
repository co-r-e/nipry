# Comparison Diagram Template

A diagram that compares 2-3 items in parallel columns. Ideal for Before/After, product comparisons, and methodology comparisons.

## Layout Rules

- **Connecting arrows**: None (comparison diagrams do not use arrows)
- **Column placement**: Equal width, arranged horizontally
- **Header row**: Emphasis label at the top of each column
- **Item rows**: Items listed vertically below the header
- **Between columns**: Divider line (thin vertical line)

## Column Structure

### Column Header
```xml
<g transform="translate({colX}, 48)">
  <rect width="{colW}" height="64" rx="12"
        fill="{primary}" stroke="none"/>
  <text x="{colW/2}" y="32" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
    Column Name
  </text>
</g>
```

### Item Row
```xml
<g transform="translate({colX}, {rowY})">
  <rect width="{colW}" height="48" rx="8"
        fill="{surface}" stroke="{border}" stroke-width="1"/>
  <text x="{colW/2}" y="24" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="15" font-weight="400" fill="{text}">
    Item Text
  </text>
</g>
```

### Divider Line (between columns)
```xml
<line x1="{divX}" y1="48" x2="{divX}" y2="492"
      stroke="{border}" stroke-width="1" stroke-dasharray="4,4"/>
```

## Coordinate Calculation Guide

### 2-Column Comparison (viewBox 960x540)

Column width = (960 - 48*2 - 32) / 2 = 416 (outer padding 48 + column gap 32)

| Element | X | Width |
|---------|---|-------|
| Column 1 | 48 | 416 |
| Divider line | 480 | - |
| Column 2 | 496 | 416 |

### 3-Column Comparison (viewBox 960x540)

Column width = (960 - 48*2 - 32*2) / 3 = 256

| Element | X | Width |
|---------|---|-------|
| Column 1 | 48 | 256 |
| Divider line 1 | 320 | - |
| Column 2 | 336 | 256 |
| Divider line 2 | 608 | - |
| Column 3 | 624 | 256 |

Row layout:
- Header: Y=48, height 64
- Item 1: Y=128, height 48
- Item 2: Y=192, height 48
- Item 3: Y=256, height 48
- ... subsequent items at 64px intervals

## Complete SVG Example

"REST vs GraphQL" (2 columns, 4 items):

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <!-- Divider line -->
  <line x1="480" y1="48" x2="480" y2="460"
        stroke="{border}" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- Column 1: REST -->
  <g transform="translate(48, 48)">
    <rect width="416" height="64" rx="12" fill="{primary}" stroke="none"/>
    <text x="208" y="32" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
      REST API
    </text>
  </g>

  <g transform="translate(48, 128)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      One endpoint per resource
    </text>
  </g>

  <g transform="translate(48, 192)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      Risk of over-fetching
    </text>
  </g>

  <g transform="translate(48, 256)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      Easy to cache
    </text>
  </g>

  <g transform="translate(48, 320)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      Simple learning curve
    </text>
  </g>

  <!-- Column 2: GraphQL -->
  <g transform="translate(496, 48)">
    <rect width="416" height="64" rx="12" fill="{primary}" stroke="none"/>
    <text x="208" y="32" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
      GraphQL
    </text>
  </g>

  <g transform="translate(496, 128)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      Single endpoint
    </text>
  </g>

  <g transform="translate(496, 192)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      Fetch only needed data
    </text>
  </g>

  <g transform="translate(496, 256)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      Complex caching strategy
    </text>
  </g>

  <g transform="translate(496, 320)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      Schema definition required
    </text>
  </g>
</svg>
```

## Variations

- **3 columns**: Reduce column width to 256px, font size to 14px
- **Highlighted row**: Highlight a specific row with `{primary}1A` background + `{primary}` border
- **With icons**: Place small geometric shapes (circle, triangle, square) as status icons at the left of each item
- **Header with subtitle**: 2-line text in header (title + small supplementary text)
