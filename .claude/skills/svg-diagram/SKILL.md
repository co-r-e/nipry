---
name: svg-diagram
description: |
  SVGダイアグラム生成スキル。スライドのテーマカラー・フォントに合わせた
  プロフェッショナルな図解（フロー、アーキテクチャ、比較、階層、サイクル等）を
  SVGで直接生成し、デッキのassetsディレクトリに保存してMDXに挿入する。
  テキストは最小限に抑え、ビジュアルでの分かりやすさを重視する。
  矢印はすべて直角（orthogonal）で構成する。
  トリガー: /svg-diagram
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
---

# svg-diagram スキル

スライドのデザインテーマに合わせたSVGダイアグラムを生成し、MDXファイルに挿入するスキル。
外部APIは不要 — Claude が SVG マークアップを直接生成する。

## ワークフロー

### Step 1: 情報収集

ユーザーの要求から以下を特定する：

1. **対象デッキ**: どのデッキに図を追加するか（`decks/` 配下のディレクトリ名）
2. **対象スライド**: どのMDXファイルに図の参照を挿入するか
3. **ダイアグラムの内容**: 何を図解するか（概念、フロー、アーキテクチャ等）
4. **ファイル名**: 内容を反映した英語のケバブケース（例: `auth-flow.svg`, `system-architecture.svg`）

不足情報があれば質問して補完する。

### Step 2: テーマ抽出

デッキのテーマカラーを取得する：

```bash
npx tsx .claude/skills/svg-diagram/scripts/extract-theme.ts --deck <deck-name>
```

出力されるJSONのカラー値・フォント値を、以降のSVG生成で **すべて** 使用する。

### Step 3: レイアウト分析（任意）

対象スライドが指定されている場合、スライドの現在のレイアウトを確認して配置スペースを把握する：

1. dev サーバーが起動していることを確認（`npm run dev`）
2. スクリーンショットを撮影：

```bash
npx tsx .claude/skills/nanobanana-image/scripts/capture-slide.ts \
  --deck <deck-name> \
  --slide <0-indexed> \
  --output /tmp/slide-layout.png
```

3. キャプチャ画像を Read ツールで読み取り、空白領域のサイズ・形状を確認
4. 分析結果に応じて viewBox サイズを調整

### Step 4: ダイアグラムタイプの選択とテンプレート読み込み

ユーザーの要求内容から最適なダイアグラムタイプを判断し、対応するテンプレートファイルを **Read ツールで読み込む**。

| タイプ | テンプレートファイル | 適するケース |
|--------|---------------------|-------------|
| フローチャート | `templates/flowchart.md` | 処理の流れ、判断分岐、ワークフロー |
| アーキテクチャ | `templates/architecture.md` | システム構成、レイヤー構造、技術スタック |
| プロセスフロー | `templates/process-flow.md` | 手順、ステップ、パイプライン |
| 比較 | `templates/comparison.md` | 2〜3項目の並列比較、Before/After |
| 階層 | `templates/hierarchy.md` | 組織図、分類ツリー、継承関係 |
| サイクル | `templates/cycle.md` | 繰り返しプロセス、ライフサイクル、PDCA |
| コンセプトグリッド | `templates/concept-grid.md` | 概念の列挙、特徴一覧、カテゴリ分類 |

```bash
# テンプレート読み込み（Read ツールで）
.claude/skills/svg-diagram/templates/<type>.md
```

各テンプレートには完成SVGの実例コード、レイアウトルール、座標計算の詳細が含まれている。
**テンプレートの指示に厳密に従い**、後述の「SVG生成ガイドライン（共通）」と組み合わせてSVGを生成する。

### Step 5: SVG生成

テンプレートと共通ガイドラインに従い、SVGを生成する。
Write ツールで以下に出力：

```
decks/<deck>/assets/<filename>.svg
```

### Step 6: MDXに挿入

対象のMDXファイルに画像参照を挿入する：

```mdx
![説明テキスト](./assets/<filename>.svg)
```

- `resolveAssetPaths()` が自動的に `/api/decks/<deck>/assets/<filename>.svg` に変換する
- 挿入位置はスライドの文脈に合わせて適切な場所を選ぶ

### Step 7: 結果報告

ユーザーに以下を報告する：

- 生成したSVGのファイルパス
- ダイアグラムの種類とサイズ
- 使用したテーマカラー
- devサーバーでの確認方法（`npm run dev` → 該当スライドを表示）

---

## SVG生成ガイドライン（共通）

以下は全ダイアグラムタイプに共通するルール。タイプ固有のルールはテンプレートファイルに記載されている。

### 1. キャンバス設定

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
```

| 用途 | viewBox | 備考 |
|------|---------|------|
| フルワイド図 | `0 0 960 540` | 16:9、スライドと同比率 |
| カラム内図（50%幅） | `0 0 480 540` | 半幅 |
| 正方形図 | `0 0 600 600` | 1:1 |
| 縦長図 | `0 0 640 720` | ポートレート |

- 外部パディング: **48px**（全辺）
- 使用可能領域: 864 x 444（48,48 から 912,492）

### 2. グリッドシステム

24pxグリッドに全要素をスナップさせる。

- **ノード間隔**: 最低 48px（グリッド2単位）
- **矢印とノードの間隙**: 12px
- **ノード内テキストパディング**: 水平16px、垂直12px

### 3. ノード描画

#### 標準ノード（デフォルト）

```xml
<g transform="translate(x, y)">
  <rect width="W" height="H" rx="12"
        fill="{surface}" stroke="{border}" stroke-width="1.5"/>
  <text x="{W/2}" y="{H/2}" text-anchor="middle" dominant-baseline="central"
        font-family="{fontHeading}" font-size="18" font-weight="600" fill="{text}">
    ラベル
  </text>
</g>
```

#### 強調ノード（primary）

```xml
<rect ... fill="{primary}" stroke="none"/>
<text ... fill="#FFFFFF" font-weight="700">キーワード</text>
```

#### アクセントノード（軽い強調）

```xml
<rect ... fill="{primary}15" stroke="{primary}" stroke-width="1.5"/>
<text ... fill="{primary}">サブ項目</text>
```

**ノード共通ルール**:
- 最小幅: 120px
- 最小高さ: 56px
- 角丸: `rx="12"`
- 同じ階層のノードは同一サイズで統一
- テキストがはみ出さないようノードサイズを調整

#### グループ背景（レイヤー等）

```xml
<rect x="x" y="y" width="W" height="H" rx="16"
      fill="{surfaceAlt}" stroke="{border}" stroke-width="1" stroke-dasharray="6,3"
      opacity="0.5"/>
<text x="{x+16}" y="{y+24}" font-family="{fontBody}" font-size="14"
      font-weight="600" fill="{textMuted}">
  グループ名
</text>
```

### 4. 矢印描画（直角 / orthogonal のみ）

**最重要ルール: 曲線・斜線は一切使わない。すべて水平線(H)と垂直線(V)の組み合わせ。**

#### マーカー定義（SVGの冒頭に1回だけ記述）

```xml
<defs>
  <marker id="arrow" viewBox="0 0 10 8" refX="10" refY="4"
          markerWidth="10" markerHeight="8" orient="auto-start-reverse">
    <path d="M 0 0 L 10 4 L 0 8 z" fill="{textMuted}"/>
  </marker>
  <marker id="arrow-primary" viewBox="0 0 10 8" refX="10" refY="4"
          markerWidth="10" markerHeight="8" orient="auto-start-reverse">
    <path d="M 0 0 L 10 4 L 0 8 z" fill="{primary}"/>
  </marker>
</defs>
```

#### 矢印パスパターン

**水平→垂直（L字）**:
```xml
<path d="M {x1} {y1} H {midX} V {y2}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

**水平→垂直→水平（Z字）**:
```xml
<path d="M {x1} {y1} H {midX} V {y2} H {x2}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

**垂直→水平（L字）**:
```xml
<path d="M {x1} {y1} V {midY} H {x2}" fill="none"
      stroke="{textMuted}" stroke-width="1.5" marker-end="url(#arrow)"/>
```

#### ルーティングルール

1. 矢印はノードの辺の中心から出入りする（右辺中央、左辺中央、上辺中央、下辺中央）
2. 折れ曲がりは1回（L字）か2回（Z字）のみ
3. 他のノードを貫通する矢印は禁止 — 迂回させる
4. 平行する矢印は最低 24px 間隔を空ける
5. 同一ノードから複数矢印が出る場合は 16px 間隔で分散

#### 方向の規約

| ダイアグラムタイプ | フロー方向 | 矢印出口 → 入口 |
|---|---|---|
| フローチャート | 上 → 下 | 下辺 → 上辺 |
| アーキテクチャ | 左 → 右 | 右辺 → 左辺 |
| プロセスフロー | 左 → 右 | 右辺 → 左辺 |
| サイクル | 時計回り | 適切な辺を選択 |

#### 矢印ラベル（任意）

```xml
<text x="{midX}" y="{midY - 8}" text-anchor="middle"
      font-family="{fontBody}" font-size="13" fill="{textMuted}">
  ラベル
</text>
```

### 5. テーマカラーマッピング

extract-theme.ts の出力JSONからの値を以下のように適用する：

| SVG要素 | テーマ変数 | 用途 |
|---------|-----------|------|
| 標準ノード背景 | `surface` | デフォルトのボックス背景 |
| 標準ノード枠線 | `border` | デフォルトのボックス枠 |
| 強調ノード背景 | `primary` | キーとなるボックス |
| 強調ノードテキスト | `#FFFFFF` | 白テキスト |
| アクセントノード背景 | `{primary}15` | 10%透過の軽い強調 |
| アクセントノード枠線 | `primary` | アクセント枠 |
| 矢印線 | `textMuted` | 接続線 |
| 矢印ラベル | `textMuted` | 小さな説明テキスト |
| メインラベル | `text` | ノード内テキスト |
| サブラベル | `textMuted` | 補足テキスト |
| グループ背景 | `surfaceAlt` | レイヤー区分の背景 |
| グループ枠線 | `border` + 点線 | グループの境界 |

**透過色の指定方法**: HEXカラーの末尾に2桁を追加する。
- 10% → `{color}1A`
- 15% → `{color}26`
- 20% → `{color}33`
- 50% → `{color}80`

### 6. タイポグラフィ

- **ノードラベル**: `font-family="{fontHeading}"`, `font-size="16"〜"18"`, `font-weight="600"`
- **サブラベル**: `font-family="{fontBody}"`, `font-size="13"〜"14"`, `font-weight="400"`
- **ダイアグラムタイトル**（付ける場合）: `font-size="22"〜"24"`, `font-weight="700"`
- **矢印ラベル**: `font-size="13"`, `fill="{textMuted}"`
- **最小フォントサイズ**: 13px（これ以下は不可）
- すべての `<text>` 要素に `font-family`, `font-size`, `font-weight`, `fill` を明示的に指定する（SVGはCSS変数を継承しない）

### 7. デザイン原則

- **テキストは最小限**: ノードラベルは1〜4語に収める。説明文はスライドのテキストに任せる
- **ビジュアル優先**: 色分け・矢印・配置で関係性を表現する
- **余計な装飾は不要**: グラデーション、ドロップシャドウ、装飾的な図形は使わない（シンプルなflatデザイン）
- **色は3〜4色まで**: primary + surface + textMuted + 1アクセントで十分
- **背景は透明**: SVG自体に背景 `<rect>` は付けない（スライド背景に任せる）

### 8. 品質チェックリスト

SVGファイルを書き出す前に以下を確認する：

- [ ] **整列**: 同じ階層のノードは同一座標軸上に揃っている
- [ ] **一貫性**: 同タイプのノードが同サイズ・同スタイルである
- [ ] **等間隔**: ノード間のスペースが均一である
- [ ] **重なりなし**: ノード同士、ノードと矢印が重なっていない
- [ ] **矢印が直角**: すべての接続線が水平・垂直のみで構成されている
- [ ] **読みやすさ**: テキストが13px以上で、ノードラベルが4語以内
- [ ] **色の調和**: 使用色が4色以内、すべてテーマ変数から取得
- [ ] **視覚バランス**: 図がviewBox内でほぼ中央に配置されている
- [ ] **パディング**: 外周48pxの安全領域を確保している

## エラーハンドリング

- `extract-theme.ts` がデッキを見つけられない → デッキ名を確認してリトライ
- `deck.config.ts` にテーマ設定がない → エラーメッセージを表示
- SVG出力先ディレクトリがない → `decks/{deck}/assets/` を作成してから書き出す

## ファイル命名規約

```
{主題}-{ダイアグラムタイプ}.svg
```

例:
- `auth-flow.svg`
- `system-architecture.svg`
- `deploy-process.svg`
- `pricing-comparison.svg`
- `data-hierarchy.svg`
- `dev-cycle.svg`
- `feature-overview.svg`

ルール:
- すべて小文字の英語
- 単語区切りはハイフン
- 最大40文字
- `diagram.svg` や `chart.svg` のような汎用名は禁止
