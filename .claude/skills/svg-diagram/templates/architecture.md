# Architecture Diagram Template

A system architecture diagram composed of layers flowing from left to right. Ideal for tech stacks, microservices, and infrastructure configurations.

## Layout Rules

- **Flow direction**: Left -> Right
- **Arrows**: Right edge center -> Left edge center (horizontal connections)
- **Layer placement**: Arranged as vertical groups from left to right
- **Layer spacing**: Minimum 48px
- **Node spacing within layers**: Vertical 32-48px

## Layer Structure

### Layer Background
```xml
<g>
  <!-- Layer background -->
  <rect x="{lx}" y="48" width="{lw}" height="444" rx="16"
        fill="{surfaceAlt}" stroke="{border}" stroke-width="1"
        stroke-dasharray="6,3" opacity="0.5"/>
  <!-- Layer label -->
  <text x="{lx + lw/2}" y="76" text-anchor="middle"
        font-family="{fontBody}" font-size="14" font-weight="600" fill="{textMuted}">
    Layer Name
  </text>
</g>
```

### Nodes Within a Layer
```xml
<g transform="translate({nx}, {ny})">
  <rect width="160" height="56" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    Service Name
  </text>
</g>
```

## Coordinate Calculation Guide

For a 3-layer configuration (viewBox 960x540):

| Layer | X Start | Width | Notes |
|-------|---------|-------|-------|
| Layer 1 (Client) | 48 | 240 | Left edge |
| Layer 2 (Server) | 336 | 288 | Center |
| Layer 3 (Data) | 672 | 240 | Right edge |

Node placement within each layer:
- Node width: 160px
- Node X: Layer X + (Layer width - 160) / 2 (centered)
- Node Y: Starting from 100, with 88px intervals (56px height + 32px spacing)

## Arrow Patterns

### Horizontal Connection Between Layers
```xml
<!-- Node A right edge -> Node B left edge -->
<path d="M {ax + aw} {ay + ah/2} H {bx}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### One-to-Many Connection (one node to multiple nodes)
```xml
<!-- Node A right edge center -> branch at midpoint -> Node B1, B2 left edge -->
<path d="M {ax + aw} {ay + ah/2} H {midX} V {b1y + bh/2} H {bx}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<path d="M {midX} {ay + ah/2} V {b2y + bh/2} H {bx}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

## Complete SVG Example

"Web Application 3-Tier Architecture":

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <defs>
    <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4"
            markerWidth="10" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 4 L 0 8 z" fill="{textMuted}"/>
    </marker>
  </defs>

  <!-- Layer 1: Client -->
  <rect x="48" y="48" width="240" height="444" rx="16"
        fill="{surfaceAlt}" stroke="{border}" stroke-width="1"
        stroke-dasharray="6,3" opacity="0.5"/>
  <text x="168" y="80" text-anchor="middle"
        font-family="{fontBody}" font-size="14" font-weight="600" fill="{textMuted}">
    Client
  </text>

  <g transform="translate(88, 120)">
    <rect width="160" height="56" rx="12"
          fill="{primary}" stroke="none"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="700" fill="#FFFFFF">
      Browser
    </text>
  </g>

  <g transform="translate(88, 208)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      Mobile App
    </text>
  </g>

  <!-- Layer 2: Server -->
  <rect x="336" y="48" width="288" height="444" rx="16"
        fill="{surfaceAlt}" stroke="{border}" stroke-width="1"
        stroke-dasharray="6,3" opacity="0.5"/>
  <text x="480" y="80" text-anchor="middle"
        font-family="{fontBody}" font-size="14" font-weight="600" fill="{textMuted}">
    Server
  </text>

  <g transform="translate(400, 120)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      API Gateway
    </text>
  </g>

  <g transform="translate(400, 208)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      Auth Service
    </text>
  </g>

  <g transform="translate(400, 296)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
      App Service
    </text>
  </g>

  <!-- Layer 3: Data -->
  <rect x="672" y="48" width="240" height="444" rx="16"
        fill="{surfaceAlt}" stroke="{border}" stroke-width="1"
        stroke-dasharray="6,3" opacity="0.5"/>
  <text x="792" y="80" text-anchor="middle"
        font-family="{fontBody}" font-size="14" font-weight="600" fill="{textMuted}">
    Data
  </text>

  <g transform="translate(712, 164)">
    <rect width="160" height="56" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{primary}">
      PostgreSQL
    </text>
  </g>

  <g transform="translate(712, 280)">
    <rect width="160" height="56" rx="12"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="600" fill="{primary}">
      Redis
    </text>
  </g>

  <!-- Arrow: Browser -> API Gateway -->
  <path d="M 248 148 H 400" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: Mobile -> API Gateway -->
  <path d="M 248 236 H 320 V 148 H 400" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: API Gateway -> Auth Service -->
  <path d="M 480 176 V 208" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: API Gateway -> App Service -->
  <path d="M 480 176 V 296" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: Auth Service -> PostgreSQL -->
  <path d="M 560 236 H 640 V 192 H 712" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: App Service -> PostgreSQL -->
  <path d="M 560 324 H 660 V 192 H 712" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow: App Service -> Redis -->
  <path d="M 560 324 H 660 V 308 H 712" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
</svg>
```

## Variations

- **4+ layers**: Extend the viewBox horizontally to `0 0 1200 540`
- **Bidirectional arrows**: Draw 2 parallel arrows offset by 8px (separating up/down directions)
- **External services**: Place as independent nodes outside layers with dashed borders
