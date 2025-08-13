function activateAnalytics() {

}

let gameplayActive = false;

function callAnalytics(eventName, params) {
    switch (eventName) {
        case "start":
            trackStartGameplay();
            break;
        case "game_over":
            trackStopGameplay();
            break;
        case "happy_time":
            PokiSDK.happyTime(params["value"]);
            break;
        case "enter":
            PokiSDK.gameLoadingFinished();
            break;
    }
}

function trackStartGameplay() {
    if (!gameplayActive) {
        PokiSDK.gameplayStart();
        gameplayActive = true;
    }
}

function trackStopGameplay() {
    if (gameplayActive) {
        PokiSDK.gameplayStop();
        gameplayActive = false;
    }
}