var CGameSingleWithBot = function(oData){

    CGameSingle.call(this, oData);

};

CGameSingleWithBot.prototype = Object.create(CGameSingle.prototype);

CGameSingleWithBot.prototype._startGame = function(){
    this._oUnoController.setVisible(true);
    
    this._oUnoController.addEventListener(ON_APPLY_EFFECT, this.applyEffectOnCard, this);
    this._oUnoController.addEventListener(ON_APPLY_PENALITY, this.applyPenality, this);
    this._oUnoController.addEventListener(ON_UNO_CLICK, this._onUnoClick, this);
    
    this._oSummaryPanel.addEventListener(ON_NEXT, this._onConfirmNextMatch, this);
    this._oSummaryPanel.addEventListener(ON_HOME, this.onExit, this);
    
    this._oMsgBox.addEventListener(ON_HOME, this.onExit, this);
    
    this._setPieces();
    
    this._aPlayersHand[0].changeName(s_oNetworkManager.getPlayerNickname());
    this._aPlayersHand[1].changeName(s_oNetworkManager.getBotName());    
};

CGameSingleWithBot.prototype._onConfirmNextMatch = function(){   
    $(s_oMain).trigger("show_interlevel_ad");
    
    s_oGame._oSummaryPanel.waitingMode();
    
    var iTime = randomFloatBetween(200, 2000);
    setTimeout(function(){
        if(s_oGame._bEndGame){
            if(Math.random()> 0.4){
                s_oGame.onOpponentAcceptNextMatch();
            }else {
                s_oGame.opponentLeftTheGame();
            }
        }else {
            s_oGame.onOpponentAcceptNextMatch();
        }
    }, iTime);
};

CGameSingleWithBot.prototype.onOpponentAcceptNextMatch = function(){
    if(this._bEndGame){
        this._bEndGame = false;
        this.setNewGame();
    };
    
    this.restart();
};

CGameSingleWithBot.prototype.opponentLeftTheGame = function(){
    var szPlayerName = s_oNetworkManager.getBotName();
    
    if(this._oSummaryPanel.isShown()){
        this._oSummaryPanel.playerQuitMode( sprintf(TEXT_QUIT_FROM_GAME, szPlayerName) );
    }else {
        if(!this._oMsgBox.isShown()){
            this._oSummaryPanel.hide();

            this._oMsgBox.show(sprintf(TEXT_QUIT_FROM_GAME, szPlayerName));
        }
    }
};