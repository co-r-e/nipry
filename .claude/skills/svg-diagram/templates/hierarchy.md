# 階層図（ツリー） テンプレート

上から下に展開するツリー構造。組織図、分類ツリー、継承関係に最適。

## レイアウトルール

- **フロー方向**: 上 → 下
- **矢印**: 親の下辺中央 → 子の上辺中央
- **ルートノード**: 上部中央に配置（primary強調）
- **兄弟ノード**: 水平に等間隔で並べる
- **レベル間隔**: 垂直 96〜120px

## ノードタイプ

### ルートノード
```xml
<g transform="translate({x}, {y})">
  <rect width="200" height="56" rx="12"
        fill="{primary}" stroke="none"/>
  <text x="100" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
    ルート
  </text>
</g>
```

### 子ノード（標準）
```xml
<g transform="translate({x}, {y})">
  <rect width="160" height="56" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    子ノード
  </text>
</g>
```

### リーフノード（末端）
```xml
<g transform="translate({x}, {y})">
  <rect width="140" height="48" rx="12"
        fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
  <text x="70" y="24" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="14" font-weight="600" fill="{primary}">
    リーフ
  </text>
</g>
```

## 矢印パターン（直角接続）

### 1対多の接続（親→複数の子）

親ノードの下辺中央から垂直に中間点まで下り、そこから水平に分岐して各子ノードの上辺中央まで垂直に下る。

```xml
<!-- 共通の垂直幹 -->
<path d="M {parentCX} {parentBottom} V {midY}" fill="none"
      stroke="{textMuted}" stroke-width="1.5"/>

<!-- 水平分岐ライン -->
<path d="M {child1CX} {midY} H {childNCX}" fill="none"
      stroke="{textMuted}" stroke-width="1.5"/>

<!-- 各子への垂直ドロップ -->
<path d="M {child1CX} {midY} V {childTop}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<path d="M {child2CX} {midY} V {childTop}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<path d="M {child3CX} {midY} V {childTop}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

## 座標計算ガイド

1ルート → 3子 → 各子に2孫の場合（viewBox 960x540）:

**Level 0（ルート）**: Y=48
- ルート: X=(960-200)/2=380, W=200

**Level 1（子、3ノード）**: Y=192
- 合計幅: 3×160 + 2×80 = 640
- 開始X: (960-640)/2 = 160
- 子1: X=160, 子2: X=400, 子3: X=640

**接続の中間Y**: (48+56+192)/2 = (104+192)/2 = 148

**Level 2（孫、6ノード）**: Y=336
- 各親の直下に2つずつ配置
- 孫ノード幅: 140px、間隔: 16px
- 親1の孫: X=90, X=246
- 親2の孫: X=330, X=486
- 親3の孫: X=570, X=726

## 完成SVG実例

「技術スタック分類」（1ルート → 3カテゴリ → 各2項目）:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <defs>
    <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4"
            markerWidth="10" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 4 L 0 8 z" fill="{textMuted}"/>
    </marker>
  </defs>

  <!-- Level 0: ルート -->
  <g transform="translate(380, 48)">
    <rect width="200" height="56" rx="12" fill="{primary}" stroke="none"/>
    <text x="100" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
      Tech Stack
    </text>
  </g>

  <!-- ルート → 子 接続 -->
  <path d="M 480 104 V 148" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 240 148 H 720" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 240 148 V 192" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 480 148 V 192" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 720 148 V 192" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Level 1: カテゴリ -->
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

  <!-- 子1 → 孫 接続 -->
  <path d="M 240 248 V 292" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 162 292 H 318" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 162 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 318 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 子2 → 孫 接続 -->
  <path d="M 480 248 V 292" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 402 292 H 558" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 402 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 558 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 子3 → 孫 接続 -->
  <path d="M 720 248 V 292" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 642 292 H 798" fill="none" stroke="{textMuted}" stroke-width="1.5"/>
  <path d="M 642 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
  <path d="M 798 292 V 336" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Level 2: リーフノード -->
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

## バリエーション

- **深い階層（4レベル以上）**: viewBox を `0 0 960 720` に拡大
- **不均等な子**: 子ノードの数が異なる場合、各サブツリーの幅を子の数に応じて按分
- **折りたたみ表現**: 末端を `...` で省略し、ノード下部に「+N items」テキスト
