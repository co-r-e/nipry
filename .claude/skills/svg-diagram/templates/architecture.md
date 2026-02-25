# アーキテクチャ図 テンプレート

左から右へレイヤーで構成されるシステム構成図。技術スタック、マイクロサービス、インフラ構成に最適。

## レイアウトルール

- **フロー方向**: 左 → 右
- **矢印**: 右辺中央 → 左辺中央（水平接続）
- **レイヤー配置**: 縦のグループとして左から右に並べる
- **レイヤー間隔**: 最低 48px
- **レイヤー内ノード間隔**: 垂直 32〜48px

## レイヤー構造

### レイヤー背景
```xml
<g>
  <!-- レイヤー背景 -->
  <rect x="{lx}" y="48" width="{lw}" height="444" rx="16"
        fill="{surfaceAlt}" stroke="{border}" stroke-width="1"
        stroke-dasharray="6,3" opacity="0.5"/>
  <!-- レイヤーラベル -->
  <text x="{lx + lw/2}" y="76" text-anchor="middle"
        font-family="{fontBody}" font-size="14" font-weight="600" fill="{textMuted}">
    レイヤー名
  </text>
</g>
```

### レイヤー内ノード
```xml
<g transform="translate({nx}, {ny})">
  <rect width="160" height="56" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    サービス名
  </text>
</g>
```

## 座標計算ガイド

3レイヤー構成の場合（viewBox 960x540）:

| レイヤー | X開始 | 幅 | 備考 |
|---------|-------|-----|------|
| Layer 1 (Client) | 48 | 240 | 左端 |
| Layer 2 (Server) | 336 | 288 | 中央 |
| Layer 3 (Data) | 672 | 240 | 右端 |

各レイヤー内のノード配置:
- ノード幅: 160px
- ノードのX: レイヤーX + (レイヤー幅 - 160) / 2（中央揃え）
- ノードのY: 100 から開始、88px 間隔（56px高さ + 32px間隔）

## 矢印パターン

### レイヤー間の水平接続
```xml
<!-- ノードAの右辺 → ノードBの左辺 -->
<path d="M {ax + aw} {ay + ah/2} H {bx}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### 1対多の接続（1ノードから複数ノードへ）
```xml
<!-- ノードAの右辺中央 → 中間地点で分岐 → ノードB1, B2の左辺 -->
<path d="M {ax + aw} {ay + ah/2} H {midX} V {b1y + bh/2} H {bx}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<path d="M {midX} {ay + ah/2} V {b2y + bh/2} H {bx}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

## 完成SVG実例

「Webアプリケーション 3層アーキテクチャ」:

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

  <!-- 矢印: Browser → API Gateway -->
  <path d="M 248 148 H 400" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: Mobile → API Gateway -->
  <path d="M 248 236 H 320 V 148 H 400" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: API Gateway → Auth Service -->
  <path d="M 480 176 V 208" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: API Gateway → App Service -->
  <path d="M 480 176 V 296" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: Auth Service → PostgreSQL -->
  <path d="M 560 236 H 640 V 192 H 712" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: App Service → PostgreSQL -->
  <path d="M 560 324 H 660 V 192 H 712" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: App Service → Redis -->
  <path d="M 560 324 H 660 V 308 H 712" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
</svg>
```

## バリエーション

- **4レイヤー以上**: viewBox を `0 0 1200 540` に横拡張
- **双方向矢印**: 2本の平行矢印を 8px オフセットで描画（上向き/下向きを分ける）
- **外部サービス**: レイヤー外の独立ノードとして点線枠で配置
