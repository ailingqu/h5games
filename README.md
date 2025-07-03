# 🎮 Open Source H5 Games Collection

*🌍 Languages: **English** | [中文简体](README-zh.md) | [日本語](README-ja.md) | [Deutsch](README-de.md) | [Français](README-fr.md)*

<!-- Language Switch Script -->
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

<!-- Stats Counter -->
<div align="center">
    <img src="https://komarev.com/ghpvc/?username=ailingqu&label=Repository%20views&color=0e75b6&style=flat" alt="Repository Views" />
    <img src="https://img.shields.io/github/stars/ailingqu/h5games?style=social" alt="GitHub Stars" />
    <img src="https://img.shields.io/github/forks/ailingqu/h5games?style=social" alt="GitHub Forks" />
</div>

---

## 📊 Statistics

- **Total Games**: 22
- **Game Categories**: Puzzle, Action, Arcade, Strategy
- **Languages Supported**: 5
- **Ready to Play**: ✅ All games

---

Welcome to our collection of open-source HTML5 games! Each game is ready to run directly in your browser and comes with complete source code.

### 🎯 Games List

| Game | Logo | Play Online | Category |
|------|------|-------------|----------|
| 2048 | ![2048](./2048/cover.png) | [Play Now](https://cubes-2048.io/games/2048) | Puzzle |
| 2048 Multitask | ![2048 Multitask](./2048-multitask/cover.png) | [Play Now](https://cubes-2048.io/games/2048-multitask) | Puzzle |
| Cubes 2048 | ![Cubes 2048](./cubes-2048/cover.png) | [Play Now](https://cubes-2048.io/games/cubes-2048) | Puzzle |
| Cupcake 2048 | ![Cupcake 2048](./cupcake2048/cover.png) | [Play Now](https://cubes-2048.io/games/cupcake2048) | Puzzle |
| Doge 2048 | ![Doge 2048](./doge2048/cover.png) | [Play Now](https://cubes-2048.io/games/doge2048) | Puzzle |
| Drive Mad | ![Drive Mad](./drive-mad/cover.png) | [Play Now](https://cubes-2048.io/games/drive-mad) | Action |
| Edge Surf | ![Edge Surf](./edge-surf/cover.png) | [Play Now](https://cubes-2048.io/games/edge-surf) | Action |
| Eggy Car | ![Eggy Car](./eggycar/cover.png) | [Play Now](https://cubes-2048.io/games/eggycar) | Action |
| Fair Squares | ![Fair Squares](./fairsquares/cover.png) | [Play Now](https://cubes-2048.io/games/fairsquares) | Puzzle |
| Fancy Pants Adventures | ![Fancy Pants Adventures](./fancypantsadventures/cover.png) | [Play Now](https://cubes-2048.io/games/fancypantsadventures) | Action |
| Fantasy Dash | ![Fantasy Dash](./fantasy-dash/cover.png) | [Play Now](https://cubes-2048.io/games/fantasy-dash) | Action |
| Flappy Bird | ![Flappy Bird](./flappy-bird/cover.png) | [Play Now](https://cubes-2048.io/games/flappy-bird) | Arcade |
| Flappy Bird (Alternative) | ![Flappy Bird](./flappybird/cover.png) | [Play Now](https://cubes-2048.io/games/flappybird) | Arcade |
| Flash Tetris | ![Flash Tetris](./flashtetris/cover.png) | [Play Now](https://cubes-2048.io/games/flashtetris) | Puzzle |
| Game Inside | ![Game Inside](./game-inside/cover.png) | [Play Now](https://cubes-2048.io/games/game-inside) | Arcade |
| Geo Dash | ![Geo Dash](./geodash/cover.png) | [Play Now](https://cubes-2048.io/games/geodash) | Action |
| Good Night | ![Good Night](./goodnight/cover.png) | [Play Now](https://cubes-2048.io/games/goodnight) | Arcade |
| Meme 2048 | ![Meme 2048](./meme2048/cover.png) | [Play Now](https://cubes-2048.io/games/meme2048) | Puzzle |
| Poly Track | ![Poly Track](./polytrack/cover.png) | [Play Now](https://cubes-2048.io/games/polytrack) | Action |
| Slice Master | ![Slice Master](./slice-master/cover.png) | [Play Now](https://cubes-2048.io/games/slice-master) | Arcade |
| Spider FRVR | ![Spider FRVR](./spiderfrvr/cover.png) | [Play Now](https://cubes-2048.io/games/spiderfrvr) | Strategy |
| UNO Online | ![UNO Online](./uno-online/cover.png) | [Play Now](https://cubes-2048.io/games/uno-online) | Strategy |

### 🚀 Getting Started

1. **Clone this repository**
   ```bash
   git clone https://github.com/ailingqu/h5games.git
   ```

2. **Navigate to any game directory**
   ```bash
   cd h5games/[game-name]
   ```

3. **Open the `index.html` file in your browser**
   ```bash
   open index.html
   ```

4. **Start playing!**

### 💻 Development

Each game comes with:
- ✅ Complete HTML5 source code
- ✅ CSS styling files
- ✅ JavaScript game logic
- ✅ Assets and resources
- ✅ Ready-to-run configuration

### 📈 Analytics

<!-- Game Analytics -->
<script>
// Game click tracking
function trackGameClick(gameName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'game_click', {
            'game_name': gameName,
            'event_category': 'games',
            'event_label': gameName
        });
    }
}

// Language switch tracking
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

### 📜 License

All games are open source and available for educational and personal use. Please check individual game directories for specific license information.

### 🤝 Contributing

We welcome contributions! Please feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🎮 Add new games
- 🌍 Improve translations
- 📚 Enhance documentation

### 📞 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/ailingqu/h5games/issues) on GitHub.

### ⚠️ Copyright Notice

All games in this collection are gathered from the internet for educational and entertainment purposes. If you are the copyright holder of any game and wish to have it removed, please contact us and we will remove it immediately.

---

<div align="center">
    <strong>⭐ If you like this project, please give it a star! ⭐</strong>
    <br><br>
    <strong>🎮 Happy Gaming! 🎮</strong>
</div> 