//Хранит конфиги из index.html
let appConfig;
//Хранит данные по версиям из ver.json
let appVersions;

class Loader {

    constructor() {
        this.loadAttempts = 5;
    }

    showError() {
        alert("Oops... Loading error. Please, try again.");
        location.reload();
    }

    loadRes() {
        requirejs.config({
            waitSeconds: 30,
            urlArgs: "v=" + appVersions["scr"],
            baseUrl: appConfig["scrURL"],
            paths: {
                "connector": "connectors/" + appConfig["provider"],
                "ads": "ads/" + appConfig["ads"],
                "analytics": "analytics/" + appConfig["analytics"],

                "provider": "provider",
                "Frame": "frame",

                "pixi-sound": "lib/pixi/pixi-sound",
                "sprintf": "lib/sprintf",
                "tween_max": "lib/TweenMax",
                "pixi": "lib/pixi/pixi.min"
            },
            shim: {
                'pixi-sound': {
                    deps: ['pixi'],
                    exports: 'pixi-sound'
                },
                'provider': {
                    deps: ["connector", "ads"],
                    exports: 'provider'
                },
                "Frame": {
                    deps: ["ads", "connector", "pixi", "pixi-sound", "sprintf", "provider", "tween_max"],
                    exports: 'Frame'
                }
            }
        });
        requirejs(["Frame", "analytics", "pixi-sound", "sprintf", "ads", "pixi", "tween_max", "provider", "connector"],
            () => {},
            this.showError.bind(this));
    }

    loadVer() {
        this.load(versionsURL + "?h=" + Date.now(),
            result => {
                appVersions = result;
                this.loadConf();
            },
            this.showError.bind(this)
        );
    }

    loadConf() {
        this.load("config.json" + "?v=" + appVersions["cnf"],
            result => {
                appConfig = result;
                this.loadRes();
            },
            this.showError.bind(this)
        );
    }

    load(link, onComplete, onError) {
        if (!this.loadAttempts) {
            onError();
            return;
        }
        this.loadAttempts--;
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', link, true);
        xobj.onreadystatechange = () => {
            if (xobj.readyState === 4) {
                if (xobj.status === 200) {
                    try {
                        onComplete(JSON.parse(xobj.responseText));
                    } catch (error) {
                        setTimeout(this.load.bind(this), 1000, link, onComplete, onError);
                    }
                } else {
                    setTimeout(this.load.bind(this), 1000, link, onComplete, onError);
                }
            }
        };
        xobj.onerror = () => {
            setTimeout(this.load.bind(this), 1000, link, onComplete, onError);
        };
        xobj.send(null);
    }
}
//Изолируем методы
let appLoader = new Loader();
appLoader.loadVer();