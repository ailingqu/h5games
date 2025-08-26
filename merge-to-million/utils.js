let Utilites = {};
let savT = 'mill_merge_48';

Utilites.unlock = {
        init: function(scene) {
            /*Security.allowDomain("*");
            Security.allowDomain("coolmath-games.com");*/
            window.addEventListener("unlockAllLevels", Utilites.unlock.unlockAllLevels);
            scene.events.on("unlockAllLevels", Utilites.unlock.unlockAllLevels);

            //scene.events.on("resize",Utilites.unlock.unlockAllLevels);
            //window.addEventListener("resize",Utilites.unlock.unlockAllLevels);

        },

        unlockAllLevels: function(scene) {
            console.log('unlocked');
            for (let i = 0; i < Utilites.storage.levelArray.length; i++) {
                let current = Utilites.storage.levelArray[i];
                if (current === 0)
                    Utilites.storage.levelArray[i] = 1;
            }
            Utilites.storage.saveStorage();
        }
    },

    Utilites.storage = {
        highscores: 0,
        firstStart: false,
        loadStorage: function(scene) {

            Utilites.storage.levelArray = [];

            let file = null;

            if (this.checkLocalStorage()) {
                file = JSON.parse(localStorage.getItem(savT));
            }

            let last = 0;

            if (file) {
                Utilites.storage.highscores = file.highscores;
                Utilites.storage.firstStart = file.firstStart;
            } else {
                Utilites.storage.highscores = 0;
                Utilites.storage.firstStart = false;

                scene.registry.set('directLevel', -1);
                scene.registry.set('level', 0);
            }

            scene.registry.set('level', last);

            if (this.checkLocalStorage())
                this.saveStorage();
            //console.log('file 0k   ');

            for (let i = 0; i < Utilites.storage.levelArray.length; i++) {
                let current = Utilites.storage.levelArray[i];
                if (current != 0) {
                    last = i;
                }
            }
            scene.registry.set('level', last);
        },

        saveStorage: function() {
            let file = {
                highscores: Utilites.storage.highscores,
                firstStart: Utilites.storage.firstStart
            };
            console.log('save');
            if (this.checkLocalStorage())
                window.localStorage.setItem(savT, JSON.stringify(file));
        },

        checkLocalStorage: function() {
            try {
                let locStorage = window.localStorage;
                return true;
            } catch (exception) {
                return false;
            }
        }

    };