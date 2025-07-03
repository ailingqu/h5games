# 🎮 オープンソースH5ゲームコレクション

*🌍 Languages: [English](README.md) | [中文简体](README-zh.md) | **日本語** | [Deutsch](README-de.md) | [Français](README-fr.md)*

<!-- 言語切り替えスクリプト -->
<script>
function switchLanguage(lang) {
    const languageFiles = {
        'en': 'README.md',
        'zh': 'README-zh.md',
        'ja': 'README-ja.md',
        'de': 'README-de.md',
        'fr': 'README-fr.md'
    };
    if (languageFiles[lang]) {
        window.location.href = languageFiles[lang];
    }
}
</script>

<!-- 統計カウンター -->
<div align="center">
    <img src="https://komarev.com/ghpvc/?username=ailingqu&label=リポジトリ閲覧数&color=0e75b6&style=flat" alt="Repository Views" />
    <img src="https://img.shields.io/github/stars/ailingqu/h5games?style=social" alt="GitHub Stars" />
    <img src="https://img.shields.io/github/forks/ailingqu/h5games?style=social" alt="GitHub Forks" />
</div>

---

## 📊 統計データ

- **総ゲーム数**: 22個
- **ゲームカテゴリ**: パズル、アクション、アーケード、ストラテジー
- **対応言語**: 5言語
- **即座にプレイ可能**: ✅ 全ゲーム

---

オープンソースHTML5ゲームコレクションへようこそ！各ゲームはブラウザで直接実行でき、完全なソースコードが付属しています。

### 🎯 ゲームリスト

| ゲーム | ロゴ | オンラインプレイ | カテゴリ |
|--------|------|------------------|----------|
| 2048 | ![2048](./2048/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/2048) | パズル |
| 2048マルチタスク | ![2048 Multitask](./2048-multitask/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/2048-multitask) | パズル |
| キューブ2048 | ![Cubes 2048](./cubes-2048/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/cubes-2048) | パズル |
| カップケーキ2048 | ![Cupcake 2048](./cupcake2048/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/cupcake2048) | パズル |
| ドージ2048 | ![Doge 2048](./doge2048/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/doge2048) | パズル |
| ドライブマッド | ![Drive Mad](./drive-mad/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/drive-mad) | アクション |
| エッジサーフ | ![Edge Surf](./edge-surf/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/edge-surf) | アクション |
| エッギーカー | ![Eggy Car](./eggycar/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/eggycar) | アクション |
| フェアスクエア | ![Fair Squares](./fairsquares/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/fairsquares) | パズル |
| ファンシーパンツアドベンチャー | ![Fancy Pants Adventures](./fancypantsadventures/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/fancypantsadventures) | アクション |
| ファンタジーダッシュ | ![Fantasy Dash](./fantasy-dash/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/fantasy-dash) | アクション |
| フラッピーバード | ![Flappy Bird](./flappy-bird/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/flappy-bird) | アーケード |
| フラッピーバード（代替版） | ![Flappy Bird](./flappybird/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/flappybird) | アーケード |
| フラッシュテトリス | ![Flash Tetris](./flashtetris/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/flashtetris) | パズル |
| ゲームインサイド | ![Game Inside](./game-inside/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/game-inside) | アーケード |
| ジオダッシュ | ![Geo Dash](./geodash/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/geodash) | アクション |
| おやすみ | ![Good Night](./goodnight/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/goodnight) | アーケード |
| ミーム2048 | ![Meme 2048](./meme2048/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/meme2048) | パズル |
| ポリトラック | ![Poly Track](./polytrack/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/polytrack) | アクション |
| スライスマスター | ![Slice Master](./slice-master/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/slice-master) | アーケード |
| スパイダーFRVR | ![Spider FRVR](./spiderfrvr/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/spiderfrvr) | ストラテジー |
| UNOオンライン | ![UNO Online](./uno-online/cover.png) | [今すぐプレイ](https://cubes-2048.io/games/uno-online) | ストラテジー |

### 🚀 はじめに

1. **このリポジトリをクローンする**
   ```bash
   git clone https://github.com/ailingqu/h5games.git
   ```

2. **任意のゲームディレクトリに移動する**
   ```bash
   cd h5games/[ゲーム名]
   ```

3. **ブラウザで `index.html` ファイルを開く**
   ```bash
   open index.html
   ```

4. **プレイ開始！**

### 💻 開発

各ゲームには以下が含まれています：
- ✅ 完全なHTML5ソースコード
- ✅ CSSスタイルファイル
- ✅ JavaScriptゲームロジック
- ✅ アセットとリソース
- ✅ すぐに実行できる設定

### 📈 アナリティクス

<!-- ゲーム分析 -->
<script>
// ゲームクリック追跡
function trackGameClick(gameName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'game_click', {
            'game_name': gameName,
            'event_category': 'games',
            'event_label': gameName
        });
    }
}

// 言語切り替え追跡
function trackLanguageSwitch(language) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'language_switch', {
            'language': language,
            'event_category': 'navigation',
            'event_label': language
        });
    }
}
</script>

### 📜 ライセンス

すべてのゲームはオープンソースであり、教育および個人利用が可能です。具体的なライセンス情報については、各ゲームディレクトリを確認してください。

### 🤝 貢献

貢献を歓迎します！お気軽に：
- 🐛 バグレポート
- 💡 新機能の提案
- 🎮 新ゲームの追加
- 🌍 翻訳の改善
- 📚 ドキュメントの強化

### 📞 サポート

問題が発生した場合やご質問がある場合は、GitHub上で[イシューを作成](https://github.com/ailingqu/h5games/issues)してください。

### ⚠️ 著作権に関する注意

このコレクションに含まれるすべてのゲームは、教育および娯楽目的でインターネットから収集されています。ゲームの著作権者の方で削除をご希望の場合は、ご連絡いただければ直ちに削除いたします。

---

<div align="center">
    <strong>⭐ このプロジェクトを気に入ったら、ぜひスターを付けてください！ ⭐</strong>
    <br><br>
    <strong>🎮 楽しいゲームライフを！ 🎮</strong>
</div> 