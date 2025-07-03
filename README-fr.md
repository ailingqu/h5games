# 🎮 Collection de Jeux H5 Open Source

*🌍 Languages: [English](README.md) | [中文简体](README-zh.md) | [日本語](README-ja.md) | [Deutsch](README-de.md) | **Français***

<!-- Script de changement de langue -->
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

<!-- Compteur de statistiques -->
<div align="center">
    <img src="https://komarev.com/ghpvc/?username=ailingqu&label=Vues%20du%20dépôt&color=0e75b6&style=flat" alt="Repository Views" />
    <img src="https://img.shields.io/github/stars/ailingqu/h5games?style=social" alt="GitHub Stars" />
    <img src="https://img.shields.io/github/forks/ailingqu/h5games?style=social" alt="GitHub Forks" />
</div>

---

## 📊 Statistiques

- **Nombre total de jeux**: 22
- **Catégories de jeux**: Puzzle, Action, Arcade, Stratégie
- **Langues supportées**: 5
- **Prêt à jouer**: ✅ Tous les jeux

---

Bienvenue dans notre collection de jeux HTML5 open source ! Chaque jeu peut être exécuté directement dans votre navigateur et est livré avec un code source complet.

### 🎯 Liste des Jeux

| Jeu | Logo | Jouer en Ligne | Catégorie |
|-----|------|----------------|-----------|
| 2048 | ![2048](./2048/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/2048) | Puzzle |
| 2048 Multitâche | ![2048 Multitask](./2048-multitask/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/2048-multitask) | Puzzle |
| Cubes 2048 | ![Cubes 2048](./cubes-2048/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/cubes-2048) | Puzzle |
| Cupcake 2048 | ![Cupcake 2048](./cupcake2048/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/cupcake2048) | Puzzle |
| Doge 2048 | ![Doge 2048](./doge2048/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/doge2048) | Puzzle |
| Drive Mad | ![Drive Mad](./drive-mad/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/drive-mad) | Action |
| Edge Surf | ![Edge Surf](./edge-surf/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/edge-surf) | Action |
| Eggy Car | ![Eggy Car](./eggycar/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/eggycar) | Action |
| Fair Squares | ![Fair Squares](./fairsquares/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/fairsquares) | Puzzle |
| Fancy Pants Adventures | ![Fancy Pants Adventures](./fancypantsadventures/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/fancypantsadventures) | Action |
| Fantasy Dash | ![Fantasy Dash](./fantasy-dash/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/fantasy-dash) | Action |
| Flappy Bird | ![Flappy Bird](./flappy-bird/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/flappy-bird) | Arcade |
| Flappy Bird (Alternative) | ![Flappy Bird](./flappybird/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/flappybird) | Arcade |
| Flash Tetris | ![Flash Tetris](./flashtetris/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/flashtetris) | Puzzle |
| Game Inside | ![Game Inside](./game-inside/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/game-inside) | Arcade |
| Geo Dash | ![Geo Dash](./geodash/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/geodash) | Action |
| Bonne Nuit | ![Good Night](./goodnight/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/goodnight) | Arcade |
| Meme 2048 | ![Meme 2048](./meme2048/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/meme2048) | Puzzle |
| Poly Track | ![Poly Track](./polytrack/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/polytrack) | Action |
| Slice Master | ![Slice Master](./slice-master/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/slice-master) | Arcade |
| Spider FRVR | ![Spider FRVR](./spiderfrvr/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/spiderfrvr) | Stratégie |
| UNO Online | ![UNO Online](./uno-online/cover.png) | [Jouer Maintenant](https://cubes-2048.io/games/uno-online) | Stratégie |

### 🚀 Commencer

1. **Clonez ce dépôt**
   ```bash
   git clone https://github.com/ailingqu/h5games.git
   ```

2. **Naviguez vers n'importe quel répertoire de jeu**
   ```bash
   cd h5games/[nom-du-jeu]
   ```

3. **Ouvrez le fichier `index.html` dans votre navigateur**
   ```bash
   open index.html
   ```

4. **Commencez à jouer !**

### 💻 Développement

Chaque jeu comprend :
- ✅ Code source HTML5 complet
- ✅ Fichiers de style CSS
- ✅ Logique de jeu JavaScript
- ✅ Assets et ressources
- ✅ Configuration prête à l'emploi

### 📈 Analytique

<!-- Analytique des jeux -->
<script>
// Suivi des clics sur les jeux
function trackGameClick(gameName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'game_click', {
            'game_name': gameName,
            'event_category': 'games',
            'event_label': gameName
        });
    }
}

// Suivi du changement de langue
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

### 📜 Licence

Tous les jeux sont open source et disponibles pour un usage éducatif et personnel. Veuillez vérifier les répertoires de jeux individuels pour des informations de licence spécifiques.

### 🤝 Contribution

Nous accueillons les contributions ! N'hésitez pas à :
- 🐛 Signaler des bugs
- 💡 Suggérer de nouvelles fonctionnalités
- 🎮 Ajouter de nouveaux jeux
- 🌍 Améliorer les traductions
- 📚 Enrichir la documentation

### 📞 Support

Si vous rencontrez des problèmes ou avez des questions, veuillez [créer un issue](https://github.com/ailingqu/h5games/issues) sur GitHub.

### ⚠️ Avis de droits d'auteur

Tous les jeux de cette collection ont été collectés sur Internet à des fins éducatives et de divertissement. Si vous êtes le détenteur des droits d'auteur d'un jeu et souhaitez qu'il soit supprimé, veuillez nous contacter et nous le supprimerons immédiatement.

---

<div align="center">
    <strong>⭐ Si vous aimez ce projet, merci de nous donner une étoile ! ⭐</strong>
    <br><br>
    <strong>🎮 Amusez-vous bien ! 🎮</strong>
</div> 