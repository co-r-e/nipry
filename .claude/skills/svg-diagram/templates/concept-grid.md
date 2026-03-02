# Concept Grid Template

A diagram that arranges 2-6 boxes in a grid layout. Ideal for concept listings, feature overviews, and category classifications.
No connecting arrows.

## Layout Rules

- **Connecting arrows**: None
- **Placement**: Equal-width and equal-height boxes arranged in a grid
- **Spacing**: 24-32px between boxes
- **Icons**: Simple geometric shapes at the top of each box (optional)
- **Text**: Title + 1-line description

## Grid Patterns

### 2 Boxes (1x2 horizontal)
Box width: (960 - 48*2 - 32) / 2 = 416

### 3 Boxes (1x3 horizontal)
Box width: (960 - 48*2 - 32*2) / 3 = 256

### 4 Boxes (2x2 grid)
Box width: (960 - 48*2 - 32) / 2 = 416
Box height: (540 - 48*2 - 32) / 2 = 206

### 6 Boxes (2x3 grid)
Box width: (960 - 48*2 - 32*2) / 3 = 256
Box height: (540 - 48*2 - 32) / 2 = 206

## Box Structure

### Box with Icon
```xml
<g transform="translate({x}, {y})">
  <rect width="{w}" height="{h}" rx="16"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>

  <!-- Geometric icon (circle) -->
  <circle cx="{w/2}" cy="48" r="20"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

  <!-- Title -->
  <text x="{w/2}" y="96" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
    Title
  </text>

  <!-- Description (optional) -->
  <text x="{w/2}" y="128" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="14" fill="{textMuted}">
    Description text
  </text>
</g>
```

### Simple Box (no icon)
```xml
<g transform="translate({x}, {y})">
  <rect width="{w}" height="{h}" rx="16"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="{w/2}" y="{h/2 - 12}" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
    Title
  </text>
  <text x="{w/2}" y="{h/2 + 16}" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="14" fill="{textMuted}">
    Description text
  </text>
</g>
```

### Emphasis Box (primary background)
```xml
<g transform="translate({x}, {y})">
  <rect width="{w}" height="{h}" rx="16"
        fill="{primary}" stroke="none"/>
  <text x="{w/2}" y="{h/2 - 12}" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
    Title
  </text>
  <text x="{w/2}" y="{h/2 + 16}" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="14" fill="#FFFFFF" opacity="0.8">
    Description text
  </text>
</g>
```

## Geometric Icon Variations

Shapes that can be used as icons inside boxes:

```xml
<!-- Circle -->
<circle cx="{cx}" cy="{cy}" r="20" fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- Square -->
<rect x="{cx-16}" y="{cy-16}" width="32" height="32" rx="6"
      fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- Triangle -->
<polygon points="{cx},{cy-18} {cx+18},{cy+12} {cx-18},{cy+12}"
         fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- Diamond -->
<polygon points="{cx},{cy-18} {cx+18},{cy} {cx},{cy+18} {cx-18},{cy}"
         fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- Hexagon -->
<polygon points="{cx-18},{cy} {cx-9},{cy-16} {cx+9},{cy-16} {cx+18},{cy} {cx+9},{cy+16} {cx-9},{cy+16}"
         fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- Star (5-point) -->
<polygon points="{cx},{cy-20} {cx+6},{cy-6} {cx+20},{cy-6} {cx+9},{cy+4} {cx+12},{cy+18} {cx},{cy+10} {cx-12},{cy+18} {cx-9},{cy+4} {cx-20},{cy-6} {cx-6},{cy-6}"
         fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
```

## Complete SVG Example

"4 Product Values" (2x2 grid, with icons):

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <!-- Box 1: Speed (top-left) -->
  <g transform="translate(48, 48)">
    <rect width="416" height="206" rx="16"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <circle cx="208" cy="56" r="20"
            fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <!-- Lightning bolt icon (simple line) -->
    <path d="M 208 42 L 202 56 H 212 L 206 70" fill="none"
          stroke="{primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="208" y="104" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Speed
    </text>
    <text x="208" y="136" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="14" fill="{textMuted}">
      Fast response time
    </text>
  </g>

  <!-- Box 2: Security (top-right) -->
  <g transform="translate(496, 48)">
    <rect width="416" height="206" rx="16"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <rect x="192" y="36" width="32" height="32" rx="6"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="208" y="104" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Security
    </text>
    <text x="208" y="136" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="14" fill="{textMuted}">
      Enterprise-grade protection
    </text>
  </g>

  <!-- Box 3: Scalability (bottom-left) -->
  <g transform="translate(48, 286)">
    <rect width="416" height="206" rx="16"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <polygon points="208,36 226,60 190,60"
             fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="208" y="104" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Scalability
    </text>
    <text x="208" y="136" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="14" fill="{textMuted}">
      Auto-scaling based on demand
    </text>
  </g>

  <!-- Box 4: Reliability (bottom-right) -->
  <g transform="translate(496, 286)">
    <rect width="416" height="206" rx="16"
          fill="{primary}" stroke="none"/>
    <circle cx="208" cy="56" r="20"
            fill="#FFFFFF33" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="208" y="104" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
      Reliability
    </text>
    <text x="208" y="136" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="14" fill="#FFFFFF" opacity="0.8">
      99.99% uptime
    </text>
  </g>
</svg>
```

## Variations

- **1x3 horizontal**: Place 3 concepts in a single row, with taller box heights
- **Numbered icons**: Place large numbers (1, 2, 3...) at the icon position instead of geometric shapes
- **Color variations**: Vary icon colors across boxes for visual distinction (within theme colors)
- **With header**: Add a title row above the grid
