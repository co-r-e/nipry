# プロセスフロー テンプレート

左から右に流れる水平チェーン。手順、ステップ、パイプラインに最適。

## レイアウトルール

- **フロー方向**: 左 → 右
- **矢印**: 右辺中央 → 左辺中央（水平接続）
- **ノード配置**: 垂直中央揃え（Y座標統一）
- **水平間隔**: ノード間 64〜96px（矢印スペース込み）
- **番号バッジ**: 各ノード上部にオプションで配置

## ノード構造

### ステップノード（番号バッジ付き）
```xml
<g transform="translate({x}, {y})">
  <!-- 番号バッジ -->
  <circle cx="0" cy="-24" r="16"
          fill="{primary}" stroke="none"/>
  <text x="0" y="-24" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="13" font-weight="700" fill="#FFFFFF">
    1
  </text>
  <!-- ノード本体 -->
  <rect x="-80" y="0" width="160" height="72" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="0" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    ステップ名
  </text>
  <text x="0" y="52" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="13" fill="{textMuted}">
    補足テキスト
  </text>
</g>
```

### 番号なしシンプルノード
```xml
<g transform="translate({x}, {y})">
  <rect x="-80" y="0" width="160" height="56" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="0" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    ステップ名
  </text>
</g>
```

## 座標計算ガイド

4ステップの場合（viewBox 960x540）:

ノード幅160px、間隔64px → 合計幅 = 4×160 + 3×64 = 832px
開始X = (960 - 832) / 2 = 64

| ステップ | ノード中央X | ノード左端X | 備考 |
|---------|-----------|-----------|------|
| Step 1 | 144 | 64 | |
| Step 2 | 368 | 288 | 64+160+64+80 |
| Step 3 | 592 | 512 | |
| Step 4 | 816 | 736 | |

ノードY（垂直中央）: (540 - 72) / 2 = 234

## 矢印パターン

### ステップ間の水平接続
```xml
<path d="M {x1 + 80} {y + 28} H {x2 - 80}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### 矢印上のラベル
```xml
<text x="{midX}" y="{y + 16}" text-anchor="middle"
      font-family="{fontBody}" font-size="13" fill="{textMuted}">
  ラベル
</text>
```

## 完成SVG実例

「CI/CDパイプライン」（4ステップ）:

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

  <!-- 矢印 1→2 -->
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

  <!-- 矢印 2→3 -->
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

  <!-- 矢印 3→4 -->
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

## バリエーション

- **5ステップ以上**: ノード幅を 140px に縮小し間隔を 48px にする、または2行に折り返す
- **2行折り返し**: 1行目は左→右、2行目は右→左。行間を結ぶ垂直矢印で接続
- **番号なし**: バッジを省略してシンプルな水平チェーンに
- **サブステップ**: メインノードの下に小さなサブノードを垂直に追加
