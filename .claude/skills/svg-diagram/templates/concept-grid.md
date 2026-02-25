# コンセプトグリッド テンプレート

2〜6個のボックスをグリッド配置する図。概念の列挙、特徴一覧、カテゴリ分類に最適。
接続矢印なし。

## レイアウトルール

- **接続矢印**: なし
- **配置**: 等幅・等高のボックスをグリッドに並べる
- **間隔**: ボックス間 24〜32px
- **アイコン**: 各ボックス上部に単純な幾何学図形を配置（任意）
- **テキスト**: タイトル + 1行説明

## グリッドパターン

### 2ボックス（1x2 横並び）
ボックス幅: (960 - 48*2 - 32) / 2 = 416

### 3ボックス（1x3 横並び）
ボックス幅: (960 - 48*2 - 32*2) / 3 = 256

### 4ボックス（2x2 グリッド）
ボックス幅: (960 - 48*2 - 32) / 2 = 416
ボックス高さ: (540 - 48*2 - 32) / 2 = 206

### 6ボックス（2x3 グリッド）
ボックス幅: (960 - 48*2 - 32*2) / 3 = 256
ボックス高さ: (540 - 48*2 - 32) / 2 = 206

## ボックス構造

### アイコン付きボックス
```xml
<g transform="translate({x}, {y})">
  <rect width="{w}" height="{h}" rx="16"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>

  <!-- 幾何学アイコン（円） -->
  <circle cx="{w/2}" cy="48" r="20"
          fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

  <!-- タイトル -->
  <text x="{w/2}" y="96" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
    タイトル
  </text>

  <!-- 説明（任意） -->
  <text x="{w/2}" y="128" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="14" fill="{textMuted}">
    説明テキスト
  </text>
</g>
```

### シンプルボックス（アイコンなし）
```xml
<g transform="translate({x}, {y})">
  <rect width="{w}" height="{h}" rx="16"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="{w/2}" y="{h/2 - 12}" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
    タイトル
  </text>
  <text x="{w/2}" y="{h/2 + 16}" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="14" fill="{textMuted}">
    説明テキスト
  </text>
</g>
```

### 強調ボックス（primary背景）
```xml
<g transform="translate({x}, {y})">
  <rect width="{w}" height="{h}" rx="16"
        fill="{primary}" stroke="none"/>
  <text x="{w/2}" y="{h/2 - 12}" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="700" fill="#FFFFFF">
    タイトル
  </text>
  <text x="{w/2}" y="{h/2 + 16}" text-anchor="middle" dominant-baseline="central"
        font-family="{fontBody}" font-size="14" fill="#FFFFFF" opacity="0.8">
    説明テキスト
  </text>
</g>
```

## 幾何学アイコンのバリエーション

ボックス内のアイコンとして使える図形:

```xml
<!-- 円 -->
<circle cx="{cx}" cy="{cy}" r="20" fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- 四角 -->
<rect x="{cx-16}" y="{cy-16}" width="32" height="32" rx="6"
      fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- 三角 -->
<polygon points="{cx},{cy-18} {cx+18},{cy+12} {cx-18},{cy+12}"
         fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- ダイヤモンド -->
<polygon points="{cx},{cy-18} {cx+18},{cy} {cx},{cy+18} {cx-18},{cy}"
         fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- 六角形 -->
<polygon points="{cx-18},{cy} {cx-9},{cy-16} {cx+9},{cy-16} {cx+18},{cy} {cx+9},{cy+16} {cx-9},{cy+16}"
         fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>

<!-- 星（5角） -->
<polygon points="{cx},{cy-20} {cx+6},{cy-6} {cx+20},{cy-6} {cx+9},{cy+4} {cx+12},{cy+18} {cx},{cy+10} {cx-12},{cy+18} {cx-9},{cy+4} {cx-20},{cy-6} {cx-6},{cy-6}"
         fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
```

## 完成SVG実例

「プロダクトの4つの価値」（2x2 グリッド、アイコン付き）:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <!-- Box 1: Speed (上左) -->
  <g transform="translate(48, 48)">
    <rect width="416" height="206" rx="16"
          fill="{surface}" stroke="{border}" stroke-width="1.5"/>
    <circle cx="208" cy="56" r="20"
            fill="{primary}1A" stroke="{primary}" stroke-width="1.5"/>
    <!-- 稲妻アイコン（シンプルなライン） -->
    <path d="M 208 42 L 202 56 H 212 L 206 70" fill="none"
          stroke="{primary}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="208" y="104" text-anchor="middle" dominant-baseline="central"
          font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
      Speed
    </text>
    <text x="208" y="136" text-anchor="middle" dominant-baseline="central"
          font-family="{fontBody}" font-size="14" fill="{textMuted}">
      高速なレスポンスタイム
    </text>
  </g>

  <!-- Box 2: Security (上右) -->
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
      エンタープライズ品質の保護
    </text>
  </g>

  <!-- Box 3: Scalability (下左) -->
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
      需要に応じた自動拡張
    </text>
  </g>

  <!-- Box 4: Reliability (下右) -->
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
      99.99% の稼働率
    </text>
  </g>
</svg>
```

## バリエーション

- **1x3 横並び**: 3つの概念を横一列に配置、ボックス高さを大きめに
- **数字入りアイコン**: 幾何学図形の代わりに大きな数字（1, 2, 3...）をアイコン位置に配置
- **カラーバリエーション**: 各ボックスのアイコン色を変えて視覚的に区別（ただしテーマカラーの範囲内）
- **ヘッダー付き**: グリッド上部にタイトル行を追加
