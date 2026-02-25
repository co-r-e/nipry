# サイクル図 テンプレート

繰り返しプロセスを時計回りの循環で表現する図。PDCA、開発サイクル、ライフサイクルに最適。

## レイアウトルール

- **フロー方向**: 時計回り
- **矢印**: 隣接ノード間を直角接続
- **ノード配置**: 矩形パターンに配置（4ノード=四角形、6ノード=六角形風）
- **中心**: viewBoxの中央
- **対称性**: 全ノードが中心から等距離

## ノード配置パターン

### 4ノードサイクル（最も一般的）

矩形の四隅に配置し、時計回りに接続:

```
    [1: 上]
      ↓
[4: 左]   [2: 右]
      ↑
    [3: 下]
```

座標（viewBox 960x540、中心 480,270）:

| ノード | 位置 | X | Y | 備考 |
|-------|------|---|---|------|
| 1 | 上 | 400 | 72 | 中央揃え |
| 2 | 右 | 640 | 186 | |
| 3 | 下 | 400 | 336 | |
| 4 | 左 | 160 | 186 | |

ノードサイズ: 160 x 56

### 6ノードサイクル

2行3列のグリッドで:
```
  [1]  →  [2]  →  [3]
   ↑                ↓
  [6]  ←  [5]  ←  [4]
```

## 矢印パターン（時計回り）

### 4ノードサイクルの矢印

```xml
<!-- 1(上) → 2(右): 右辺→上辺 -->
<path d="M {n1_right} {n1_cy} H {midX1} V {n2_top}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 2(右) → 3(下): 下辺→右辺 -->
<path d="M {n2_cx} {n2_bottom} V {midY1} H {n3_right}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 3(下) → 4(左): 左辺→下辺 -->
<path d="M {n3_left} {n3_cy} H {midX2} V {n4_bottom}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 4(左) → 1(上): 上辺→左辺 -->
<path d="M {n4_cx} {n4_top} V {midY2} H {n1_left}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

### 6ノードサイクルの矢印

```xml
<!-- 1→2: 水平右 -->
<path d="M {n1_right} {n1_cy} H {n2_left}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 2→3: 水平右 -->
<path d="M {n2_right} {n2_cy} H {n3_left}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 3→4: 垂直下 -->
<path d="M {n3_cx} {n3_bottom} V {n4_top}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 4→5: 水平左 -->
<path d="M {n4_left} {n4_cy} H {n5_right}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 5→6: 水平左 -->
<path d="M {n5_left} {n5_cy} H {n6_right}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

<!-- 6→1: 垂直上 -->
<path d="M {n6_cx} {n6_top} V {n1_bottom}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

## 完成SVG実例

「PDCA サイクル」（4ノード）:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <defs>
    <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4"
            markerWidth="10" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 4 L 0 8 z" fill="{textMuted}"/>
    </marker>
  </defs>

  <!-- Node 1: Plan (上) -->
  <g transform="translate(400, 72)">
    <rect width="160" height="56" rx="12" fill="{primary}" stroke="none"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
      Plan
    </text>
  </g>

  <!-- Node 2: Do (右) -->
  <g transform="translate(640, 218)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Do
    </text>
  </g>

  <!-- Node 3: Check (下) -->
  <g transform="translate(400, 368)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Check
    </text>
  </g>

  <!-- Node 4: Act (左) -->
  <g transform="translate(160, 218)">
    <rect width="160" height="56" rx="12"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <text x="80" y="28" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Act
    </text>
  </g>

  <!-- 矢印: Plan → Do (右辺→上辺) -->
  <path d="M 560 100 H 620 V 218" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: Do → Check (下辺→右辺) -->
  <path d="M 720 274 V 348 H 560" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: Check → Act (左辺→下辺) -->
  <path d="M 400 396 H 340 V 274" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 矢印: Act → Plan (上辺→左辺) -->
  <path d="M 240 218 V 148 H 400" fill="none"
        stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- 中央ラベル（任意） -->
  <text x="480" y="252" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="14" font-weight="600" fill="{textMuted}">
    継続的改善
  </text>
</svg>
```

## バリエーション

- **中央にアイコン/ラベル**: サイクルの中心にテーマを示すテキストや図形を配置
- **ノードにサブテキスト**: 各ノード内を2行にし、下段に簡潔な説明を追加
- **強調ノード**: 現在のフェーズを `{primary}` で、他を `{surface}` にする
- **5ノード**: 五角形パターン — 上1 + 中段2 + 下段2
