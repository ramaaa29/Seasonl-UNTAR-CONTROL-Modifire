# Season 2 · UNTAR CONTROL

日本語・英語対応の非公式Modifierプランナー。ビルド不要・依存ライブラリ不要・外部通信不要の静的サイトです。Sitesでのホスティングは使用しません。

## GitHub Pagesで公開

1. GitHubで公開リポジトリを作成します。
2. このフォルダの**中身**をリポジトリ直下の`main`ブランチにアップロードします。隠しフォルダ`.github`も含めてください。
3. リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定します。
4. **Actions → Deploy GitHub Pages → Run workflow** を実行します。以後は`main`へのpushで自動更新します。
5. 公開先は通常 `https://<ユーザー名>.github.io/<リポジトリ名>/` です。独自ドメインの購入は不要です。

Actionsを使わない場合は **Deploy from a branch → main → /(root)** でも公開できます。その場合は同梱のワークフローを削除して二重デプロイを避けてください。

公開設定の詳細：[GitHub公式ドキュメント](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## ローカル確認

Node.jsで `npm start` を実行し、`http://127.0.0.1:4173` を開きます。HTMLファイルのダブルクリックではES Modulesのブラウザー制限により動作しません。

npmが使えない環境では `node server.mjs` でも起動できます。

`npm test` でポイント計算・全競合ペア・DIETの訂正内容を検証できます。パッケージのインストールは不要です。

## 操作と仕様

- 共通効果6項目は常時有効で青色表示。個人のポイントには影響しません。
- 個人バフ31項目・デバフ25項目。未選択はグレー、選択したバフは緑、デバフは赤。
- 初期ポイント0。デバフで加算、バフで減算。残り0以上でPASS、マイナスでOVER BUDGET。
- 最初にデバフを選ぶまで、未選択のバフは選択できません。デバフ選択後は予算超過のデモ確認ができるよう、ポイント不足時もバフを選択できます。デバフを解除して予算超過になった場合も状態を表示します。
- 競合は下記の確定済み15組だけです。競合するカードを選択不可にし、原因となる選択済みModifierを表示します。
- 日本語・英語のタブ切替。固有名は照合しやすいよう英語を併記します。日本語は非公式訳です。
- 1項目以上選択するとPNG画像を保存できます。選択した個人Modifierとポイントを保存し、共通効果・未選択項目は含めません。予算超過状態も保存可能です。
- 選択と言語は端末のブラウザーに保存します。データは送信しません。
- スキル効果・ポイントはユーザー提供ポスターから転記。競合はユーザー指定であり、公式の全競合一覧であるとは主張しません。

## 併用不可の15組

| Modifier | 同時選択不可 |
|---|---|
| STURDY BONES | OSTEOPOROSIS |
| YOUTH | EXHAUSTION、POLYPHAGIA |
| THROMBOPHILIA | HEMOPHILIA |
| LUCKY | UNLUCKY |
| HYPODIPSIA | POLYDIPSIA |
| PRODIGY | INCOMPETENT |
| INTROVERT | EXTROVERT |
| PERSONALITY VACUUM | THIRD LEG |
| AVERAGE | HERCULES、KLEPTOMANIAC、FAST CRAFTING、TAP, RACK, ROLL |
| MARATHON RUNNER | SPRINTER |
| SPRINTER | THIRD LEG |

DIETとPOLYPHAGIA・HYPODIPSIA・POLYDIPSIA・CHRONIC FATIGUE SYNDROMEは併用可能です。

## 編集

`data.js`：効果、ポイント、翻訳、競合ペア。`app.js`：選択・言語切替・PNG保存。`styles.css`：レイアウト・配色。

Escape from Tarkovおよび関連名称は権利者に帰属します。本サイトはBattlestate Gamesとは関係のないファンツールです。
