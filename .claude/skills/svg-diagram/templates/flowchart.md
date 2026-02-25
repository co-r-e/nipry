# フローチャート テンプレート

上から下へ流れるフローチャート。処理の流れ、判断分岐、ワークフローに最適。

## レイアウトルール

- **フロー方向**: 上 → 下
- **矢印**: 下辺中央 → 上辺中央（垂直接続）
- **ノード配置**: 水平中央揃え
- **垂直間隔**: 80〜120px（ノード間）
- **分岐間隔**: 左右に最低 200px

## ノードタイプ

### 処理ノード（角丸矩形）
```xml
<g transform="translate({x}, {y})">
  <rect width="200" height="56" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="100" y="28" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="600" fill="{text}">
    処理名
  </text>
</g>
```

### 判断ノード（ダイヤモンド）
```xml
<g transform="translate({centerX}, {centerY})">
  <polygon points="0,-40 80,0 0,40 -80,0"
           fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="0" y="0" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="14" font-weight="600" fill="{text}">
    条件？
  </text>
</g>
```
- ダイヤモンドサイズ: 幅160 x 高さ80
- テキストは短く（最大3語）

### 開始/終了ノード（primary強調）
```xml
<g transform="translate({x}, {y})">
  <rect width="160" height="48" rx="24"
        fill="{primary}" stroke="none"/>
  <text x="80" y="24" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="16" font-weight="700" fill="#FFFFFF">
    開始
  </text>
</g>
```
- `rx="24"` で角をより丸くして開始/終了を視覚的に区別

## 矢印パターン

### 直線接続（上→下）
```xml
<path d="M {x} {y1} V {y2}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### 分岐（判断ノードから左右へ）
```xml
<!-- Yes分岐（下方向） -->
<path d="M {cx} {cy+40} V {nextY}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<text x="{cx+8}" y="{cy+56}" font-family="{fontBody}" font-size="13" fill="{textMuted}">
  Yes
</text>

<!-- No分岐（右方向→下方向） -->
<path d="M {cx+80} {cy} H {rightX} V {nextY}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
<text x="{cx+88}" y="{cy-8}" font-family="{fontBody}" font-size="13" fill="{textMuted}">
  No
</text>
```

## 座標計算ガイド

3ノード直線フローの場合（viewBox 960x540）:

| 要素 | X | Y | 備考 |
|------|---|---|------|
| 開始ノード | 400 | 48 | 中央揃え (960-160)/2 |
| 矢印1 | 480 | 96→168 | 開始下辺→処理1上辺 |
| 処理ノード1 | 380 | 168 | 中央揃え (960-200)/2 |
| 矢印2 | 480 | 224→312 | 処理1下辺→処理2上辺 |
| 処理ノード2 | 380 | 312 | |
| 矢印3 | 480 | 368→432 | |
| 終了ノード | 400 | 432 | |

## 完成SVG実例

「ユーザー認証フロー」（3ステップ + 1分岐）:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <defs>
    <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4"
            markerWidth="10" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 4 L 0 8 z" fill="{textMuted}"/>
    </marker>
  </defs>

  <!-- 開始 -->
  <g transform="translate(400, 48)">
    <rect width="160" height="48" rx="24" fill="{primary}" stroke="none"/>
    <text x="80" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="700" fill="#FFFFFF">
      リクエスト受信
    </text>
  </g>

  <!-- 矢印: 開始 → 判断 -->
  <path d="M 480 96 V 148" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 判断: トークン有効？ -->
  <g transform="translate(480, 188)">
    <polygon points="0,-40 80,0 0,40 -80,0"
             fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="0" y="0" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="14" font-weight="600" fill="{text}">
      Token有効？
    </text>
  </g>

  <!-- Yes分岐（下方向）→ アクセス許可 -->
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
      アクセス許可
    </text>
  </g>

  <!-- No分岐（右方向→下方向）→ 認証エラー -->
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
      認証エラー
    </text>
  </g>

  <!-- 終了 -->
  <g transform="translate(400, 432)">
    <rect width="160" height="48" rx="24" fill="{primary}" stroke="none"/>
    <text x="80" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="16" font-weight="700" fill="#FFFFFF">
      レスポンス返却
    </text>
  </g>

  <!-- 矢印: アクセス許可 → 終了 -->
  <path d="M 480 368 V 420" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: 認証エラー → 終了 -->
  <path d="M 700 368 V 408 H 560" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
</svg>
```

## バリエーション

- **ノード数が多い場合**: viewBox を `0 0 960 720` に拡大
- **分岐が2つ以上**: 左・中央・右の3列レイアウトに拡張
- **ループバック矢印**: ノードの右辺から出て、右側を大きく迂回して上のノードの右辺に入る
