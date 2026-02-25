# 比較図 テンプレート

2〜3項目を並列カラムで比較する図。Before/After、製品比較、手法比較に最適。

## レイアウトルール

- **接続矢印**: なし（比較図には矢印を使わない）
- **カラム配置**: 等幅で水平に並べる
- **ヘッダー行**: 各カラム上部に強調ラベル
- **項目行**: ヘッダーの下に項目を縦に列挙
- **カラム間**: 区切り線（垂直の薄い線）

## カラム構造

### カラムヘッダー
```xml
<g transform="translate({colX}, 48)">
  <rect width="{colW}" height="64" rx="12"
        fill="{primary}" stroke="none"/>
  <text x="{colW/2}" y="32" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
    カラム名
  </text>
</g>
```

### 項目行
```xml
<g transform="translate({colX}, {rowY})">
  <rect width="{colW}" height="48" rx="8"
        fill="{surface}" stroke="{border}" stroke-width="1"/>
  <text x="{colW/2}" y="24" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="15" font-weight="400" fill="{text}">
    項目テキスト
  </text>
</g>
```

### 区切り線（カラム間）
```xml
<line x1="{divX}" y1="48" x2="{divX}" y2="492"
      stroke="{border}" stroke-width="1" stroke-dasharray="4,4"/>
```

## 座標計算ガイド

### 2カラム比較（viewBox 960x540）

カラム幅 = (960 - 48*2 - 32) / 2 = 416  （外部パディング48 + カラム間隔32）

| 要素 | X | 幅 |
|------|---|-----|
| カラム1 | 48 | 416 |
| 区切り線 | 480 | - |
| カラム2 | 496 | 416 |

### 3カラム比較（viewBox 960x540）

カラム幅 = (960 - 48*2 - 32*2) / 3 = 256

| 要素 | X | 幅 |
|------|---|-----|
| カラム1 | 48 | 256 |
| 区切り線1 | 320 | - |
| カラム2 | 336 | 256 |
| 区切り線2 | 608 | - |
| カラム3 | 624 | 256 |

行レイアウト:
- ヘッダー: Y=48, 高さ64
- 項目1: Y=128, 高さ48
- 項目2: Y=192, 高さ48
- 項目3: Y=256, 高さ48
- ... 以降 64px 間隔

## 完成SVG実例

「REST vs GraphQL」（2カラム、4項目）:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <!-- 区切り線 -->
  <line x1="480" y1="48" x2="480" y2="460"
        stroke="{border}" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- カラム1: REST -->
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
      リソースごとにエンドポイント
    </text>
  </g>

  <g transform="translate(48, 192)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      Over-fetching の可能性
    </text>
  </g>

  <g transform="translate(48, 256)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      キャッシュが容易
    </text>
  </g>

  <g transform="translate(48, 320)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      シンプルな学習コスト
    </text>
  </g>

  <!-- カラム2: GraphQL -->
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
      単一エンドポイント
    </text>
  </g>

  <g transform="translate(496, 192)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      必要なデータのみ取得
    </text>
  </g>

  <g transform="translate(496, 256)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      キャッシュ戦略が複雑
    </text>
  </g>

  <g transform="translate(496, 320)">
    <rect width="416" height="48" rx="8"
          fill="{surface}" stroke="{border}" stroke-width="1"/>
    <text x="208" y="24" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="15" fill="{text}">
      スキーマ定義が必要
    </text>
  </g>
</svg>
```

## バリエーション

- **3カラム**: カラム幅を256pxに縮小、フォントサイズを14pxに
- **強調行**: 特定の行を `{primary}1A` 背景 + `{primary}` 枠にしてハイライト
- **アイコン付き**: 各項目の左端に小さな幾何学図形（丸、三角、四角）をステータスアイコンとして配置
- **ヘッダーにサブタイトル**: ヘッダー内に2行テキスト（タイトル + 小さな補足）
