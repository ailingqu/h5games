function CGameSingle(oData){

    CGameBase.call(this, oData);
    
    this._startGame();
    
};

CGameSingle.prototype = Object.create(CGameBase.prototype);

CGameSingle.prototype._startGame = function(){
    this._oUnoController.setVisible(true);
    
    this._oUnoController.addEventListener(ON_APPLY_EFFECT, this.applyEffectOnCard, this);
    this._oUnoController.addEventListener(ON_APPLY_PENALITY, this.applyPenality, this);
    this._oUnoController.addEventListener(ON_UNO_CLICK, this._onUnoClick, this);
    //this._oUnoController.addEventListener(ON_UNO_SAVED_MESSAGE, this._onUnoSavedMessage, this);
    
    this._oContinueController.addEventListener(ON_PASS_TURN, this.onPassTurn, this);
    this._oContinueController.addEventListener(ON_PASS_AND_DRAW, this.onPassAndDraw, this);
    
    this._oSummaryPanel.addEventListener(ON_NEXT, this._onConfirmNextMatch, this);
    this._oSummaryPanel.addEventListener(ON_HOME, this.onExit, this);
    
    this._oMsgBox.addEventListener(ON_HOME, this.onExit, this);
    
    this._setPieces();

    s_oCrazyApiManager.setGamePlayStart(true);
};

CGameSingle.prototype.refreshGUI = function(){
    
};

CGameSingle.prototype._setPieces = function(){
    ///DEBUG
    //STARTING_NUM_CARDS = 2;
    //var oData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,  11,20,20,20];
    //var oData = [12,25,13,44,50,27,33,36,1,46,4]  //SHUFFLE EXAMPLE (2 players, 2 start cards)
    //var oData = [0,0,0,0,0,0, 11,0,20,20,20,20] 
    //var oData = [30,31,32,33,34,5,0,20, 0,20,0,20];
    //this._oDeck.initializeFromData(oData);
   
   
    // ANOTHER DEBUG
    /*
    var aPlayerCards = [7,50,47,18, 0, 50, 51 ]; //First pos, First card received
    var aP2Cards = [7,32, 34,34, 53, 0, 0 ];
    //var aP3Cards = [0,32]//,34,34, 53, 0, 0 ];
    //var aP4Cards = [0,26,34,34, 53, 0, 0 ];
    //var aP4Cards = [32,32]//,32,32, 53, 32, 32 ];
    
    //var aP3Cards = [5,19,34,35];
    STARTING_NUM_CARDS = 1;
    //var aDeckCards = [12,23,10,10,15,23,39,25,43,7,45,52,53, 40, 8, 44, 46, 0,1,2,3];  //First pos, First card on discard pile
    //var aDeckCards = [23,10,12,20,8,25,12,38,43,27,45,27,53, 27, 8, 44, 46, 0,1,2,3];  //First pos, First card on discard pile
    var aDeckCards = [1,1,10,12,20,8,25,12,38,43,27,45,27,50, 27, 8, 44, 46, 0,1,2,3];  //First pos, First card on discard pile
    var oData = new Array();
    for(var i=0; i<STARTING_NUM_CARDS; i++){
        oData.unshift( aPlayerCards[i]);
        oData.unshift( aP2Cards[i]);
        //oData.unshift( aP3Cards[i]);
        //oData.unshift( aP4Cards[i]);
    }
    for(var i=0; i<aDeckCards.length; i++){
        oData.unshift( aDeckCards[i]);
    }
    this._oDeck.initializeFromData(oData);
    */
    
    
    this._oDeck.initializeDeck();
    this._oDeck.shuffle();
    
  
    this.getFirstHand();   
};

CGameSingle.prototype.setNewGame = function(){
    for(var i=0; i<this._aPlayersHand.length; i++){
        this._aPlayersHand[i].setScore(0);
    }
    
    this._oTurnManager.resetFirstPlayer();
};

CGameSingle.prototype.restart = function(){
    s_oCrazyApiManager.setGamePlayStart(true);
    
    this.reset();
    
    this._setPieces();
};

CGameSingle.prototype._checkFirstCardEffect = function(iEffect){
    switch(iEffect){
        case EFFECT_SELECT_COLOR:{
                this._oTurnManager.nextTurn();
                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._oTurnManager.getNextPlayer();
                
                this._applySelectColor();
                
                this._oTurnManager.prevTurn();
                
                break;
        }
        case EFFECT_DRAW_FOUR:{
                ///CONSIDER TO SHUFFLE
                this._oTurnManager.nextTurn();
                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._oTurnManager.getNextPlayer();

                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._iCurPlayer;
                this._applyDrawFourEffect();

                
                this._oTurnManager.prevTurn();

                break;
        }
        case EFFECT_STOP:{
                this._applyStopTurn();
                
                
                break;
        }
        case EFFECT_INVERT_TURN:{
                if(NUM_PLAYERS !== 2){
                    this._oTurnManager.nextTurn();
                }    
               
                this._applyInvertTurn();
               
                break;
        }
        case EFFECT_DRAW_TWO_COLORED:{      
                this._applyDrawTwoColored();

                break;
        }
        default:{
                //EFFECT_NORMAL_CARD
                this._oTurnManager.nextTurn();
                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._oTurnManager.getNextPlayer();
                
                if(this._iCurPlayer === 0){
                    this.onInputPlayer(this._iCurPlayer);
                    this._oDeck.enableInputDraw();
                    this._oUnoController.setClickable();
                }else {
                    this._oAIManager.selectACard(this._iCurPlayer, this._iSpecialStackMode);
                }
                
                this._aPlayersHand[this._iCurPlayer].setOnTurn();

                break;
        }
    }
};

CGameSingle.prototype.onDraw = function(){
    var bCheck = true;
    var oTmpCard;
    
    var iPlayerID = 0;
    
    if (this._oUsedCards.getLength()!==0&&this._iCurPlayer=== iPlayerID){
        
        /* THIS FORCE TO DRAW CARD ONLY IF YOU HAVE NO CHOICE
        for (var i=0;i<this._aPlayersHand[iPlayerID].getLength();i++){
            oTmpCard = this._aPlayersHand[iPlayerID].getCardByIndex(i);
            if(this.cardMatchTheWaste(oTmpCard)){
                bCheck = false;
            }
        }
        */
       
        if(bCheck===true){
            this.changeState(GAME_STATE_DRAW);
            
            this._oDeck.disableInputDraw();
            this._oDeck.hideHelp();
            
            //this._oContinueController.setNotClickable();
            //this._oContinueController.setPassTurnState();
            
            this.drawCards(iPlayerID,1,0,DRAW_TYPE_NORMAL);
        }
    }
    
    
    //console.log("numCardOnDeck:"+this._oDeck.getLength());
};

CGameSingle.prototype.onNextTurn = function(){
    this._bUNO = false;
    this._iPlayerReclamedUNO = null;
    this._bReclamedUNO = false;
    
    var iWinner = this.checkWinner();
    if (iWinner!==null){
        this.gameOver(iWinner);
        
        if(iWinner === 0){
            $(s_oMain).trigger("save_score", this._calculateMatchScore());
            
            s_oCrazyApiManager.setHappyTime();
        }
        
    }else{
        this.changeState(GAME_STATE_TURN_START);
        
        this.setOffTurn();
        this._oDeck.enableInputDraw();

        this._oTurnManager.nextTurn();
        var iThisTurn = this._oTurnManager.getTurn();

        this._iCurPlayer = iThisTurn;
        this._iNextPlayer = this._oTurnManager.getNextPlayer();
    
        this._aPlayersHand[iThisTurn].setOnTurn();
    
    
    
        if(this._iNumStackCards > 0){
            this._oContinueController.setMsg( sprintf(TEXT_PLUS_CARDS, this._iNumStackCards) );
        }else {
            this._oContinueController.setMsg("");
        }
        
    
    
        if (iThisTurn===0){
            if(this._iSpecialStackMode === null){
                this.onInputPlayer(iThisTurn);

                if (!this.playerCanPlay(iThisTurn)){
                    this._oDeck.setHelp();
                }

                
            }else {
                this._setPlayerInStackMode();
            }
            this._oUnoController.setClickable();
        } else {
            this._oAIManager.selectACard(iThisTurn, this._iSpecialStackMode);

            this._oUnoController.setNotClickable();
        }
    }
};

CGameSingle.prototype.playCard = function(oCard,Event){
    var iThisTurn = this._oTurnManager.getTurn();
    
    
    
    var bCanPlay = false;
    var iPlayerID = 0;
    if (iThisTurn===iPlayerID){
        bCanPlay = this.cardMatchTheWaste(oCard, iThisTurn);
    }
    
    if(bCanPlay){
        
        this._oContinueController.setNotClickable();
        this._aPlayersHand[iThisTurn].stopAllAnim();
        
        this._oCardsContainer.addChildAt(this._oHandsContainer,this._oCardsContainer.numChildren);
        this._aPlayersHand[iThisTurn].setOnTop();
        this._oDeck.disableInputDraw();
        
        this.offInputPlayer(iPlayerID);

        
        var oHandGlobalPos =this._aPlayersHand[iThisTurn].getContainerPos();
        var oUsedCardsGlobalPos = this._oUsedCards.getGlobalPosition();

        playSound("card",1,false);

        oCard.moveCard((oUsedCardsGlobalPos.x-oHandGlobalPos.x),oUsedCardsGlobalPos.y-oHandGlobalPos.y,0,300);
        oCard.showCard();

        this._oUsedCards.setChildDepth(2);
    }    
};

CGameSingle.prototype.playedCard = function(oCard){
    var iThisTurn = this._oTurnManager.getTurn();
    var iParent = this._aPlayersHand[iThisTurn].searchIndexCard(oCard);
    this._oUsedCards.pushCard(new CCard(0,0,this._oUsedCards.getContainer(),oCard.getFotogram(),oCard.getRank(),oCard.getSuit(),oCard.getUniqueID(),0));
    this._oUsedCards.disableInputUsedCards();
    this._oUsedCards.getLastCard().instantShow();
    this._aPlayersHand[iThisTurn].removeCardByIndex(iParent);
    oCard.unload();

    if(this._oUsedCards.getLastCard().getSuit()!==4){
        this._iCurrentColor = this._oUsedCards.getLastCard().getSuit();
        this._oInterface.refreshColor(this._iCurrentColor);
    }
    this._aPlayersHand[iThisTurn].organizeHand(iParent);
    
    this._iPlayerReclamedUNO = null;
    this._bReclamedUNO = false;
    
    //CARD ARRIVED, CONTROL HERE UNO
    this.checkUno(oCard.getEffect());
    
    if(iThisTurn !== 0){
        //CPU WILL ALWAYS CLICK ON UNO
        this._onUnoClick();
    } else {
        //CPU WILL ALWAYS RECLAME UNO
        this.reclameUNO();
    }
};

CGameSingle.prototype._onUnoClick = function(){
    if (this._bUNO === true){
        this._bUNO = false;
        this._aPlayersHand[this._iCurPlayer].checkUno();
    }
};

CGameSingle.prototype.reclameUNO = function(){
    if(this.checkUNOPlayer() !== null && !this._bReclamedUNO){
        this._bReclamedUNO = true;
        if(this._iPlayerReclamedUNO === null){
            ////1 exclude the 0
            this._iPlayerReclamedUNO = 1 + Math.floor( Math.random()* (NUM_PLAYERS-1) );
        }
    }
};

//////////////////////APPLY EFFECTS ////////////////////////
CGameSingle.prototype.applyEffectOnCard = function(iEffect){
    this._checkEffect(iEffect);
};

CGameSingle.prototype._applySelectColor = function(){
    if(this._iCurPlayer === 0){
        this.changeState(GAME_STATE_CHOOSE_COLOR);
        
        var oSelectColorPanel = new CSelectColorPanel(EFFECT_SELECT_COLOR);
        oSelectColorPanel.addEventListener(ON_COLOR_SELECTED, function(iColor){
            var oData = {colorindex:iColor};
            this._onActionSelectColor(oData);
        }, this);
    }else{
        var iColor = this._oAIManager.onSelectColorCpu(this._iCurPlayer);
        var oData = {colorindex:iColor};
        this._onActionSelectColor(oData);
    } 
};

CGameSingle.prototype._applyDrawFourEffect = function(){
    if(this._iCurPlayer === 0){
        this.changeState(GAME_STATE_CHOOSE_COLOR);
        
        var oSelectColorPanel = new CSelectColorPanel(EFFECT_DRAW_FOUR);
        oSelectColorPanel.addEventListener(ON_COLOR_SELECTED, function(iColor){
            var oData = {playerindex: this._iNextPlayer, colorindex:iColor};
            this._onActionDrawFour(oData);
            
        }, this);
    }else {
        var iColor = this._oAIManager.onSelectColorCpu(this._iCurPlayer);
        var oData = {playerindex: this._iNextPlayer, colorindex:iColor};
        this._onActionDrawFour(oData);
    } 
};

CGameSingle.prototype._applyStopTurn = function(){
    this._oAnimation.stopTurn().then(()=> {
        this._oTurnManager.nextTurn();
        this._notifyChangeTurn();
    });
};

CGameSingle.prototype._applyInvertTurn = function(){
    this._oTurnManager.changeClockWise();
    if(NUM_PLAYERS === 2){
        ///IN 2 PLAYERS THE CARD BEHAVIOUR IS DIFFERENT
        this._oTurnManager.nextTurn();
    }

    this._oAnimation.changeClockWise(s_oGame._oTurnManager.getClockWise()).then(()=> {
        this._notifyChangeTurn();
    });
};

CGameSingle.prototype._applyDrawTwoColored = function(){
    var iDrawType = DRAW_TYPE_DRAW2_COLORED;
    var iNumberOfCards = 2;
    var iDelay = 0;
    var iIndexPlayer = this._iNextPlayer;

    this.drawCards(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
};

CGameSingle.prototype._applyNormalCardEffect = function(){
    this._notifyChangeTurn();
};
/////////////////////////////////////////////////////

CGameSingle.prototype.drawCards = function (iIndexPlayer,iNumberOfCards,iDelay,iDrawType){   
    var bPenality = iDrawType === DRAW_TYPE_PENALITY ? true : false; 
    this._checkUnoNotify(bPenality, 0, iIndexPlayer);
    
    this._checkNumberCardsToDraw(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
}; 

CGameSingle.prototype._notifyChangeTurn = function(){
    s_oGame.onNextTurn();
};

CGameSingle.prototype.shuffleCards = function (iIndexPlayer,iNumberOfCards,iDelay,iDrawType){
    //console.log("SHUFFLECARDS--> iIndexPlayer:"+iIndexPlayer + " s_oNetworkManager.getPlayerOrderID():"+s_oNetworkManager.getPlayerOrderID())

    var aCardsObj = this._oUsedCards.removeAllCardUnderTheDeck();
    var aCardsFotogram = new Array();
    for(var i=0; i<aCardsObj.length; i++){
        aCardsFotogram.push(aCardsObj[i].getFotogram());
    }
    console.log(aCardsFotogram);
    this._oAnimation.shuffleAnimation().then(()=>{
        shuffle(aCardsFotogram);

        this._oDeck.clearCards();
        this._oDeck.initializeFromData(aCardsFotogram);

        this.checkForMoreDraws(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
    });
}; 

CGameSingle.prototype._onAllCardsDrawCompleted = function(iIndexPlayer,iDrawType){
    this._checkEffectAfterDrawCompleted(iIndexPlayer,iDrawType);
};

CGameSingle.prototype._checkIfCanStillPlayTheTurn = function(iIndexPlayer){
    if(this._iCurPlayer === 0){
        //this.onInputPlayer(iIndexPlayer);
        
        if (this.playerCanPlay(iIndexPlayer)){
            console.log("CANPLAYACARD");
            this.onInputPlayer(iIndexPlayer);
            
            this._oContinueController.setPassTurnState();
            
        }else{
            console.log("NOFIT");
            this._aPlayersHand[iIndexPlayer].centerContainer();

            this._notifyChangeTurn();
            this._oContinueController.setNotClickable();
        }
        
    }else {
        if (this.playerCanPlay(iIndexPlayer)){
            this.onInputPlayer(iIndexPlayer);
            this._oAIManager.selectACard(this._iCurPlayer, this._iSpecialStackMode);

        }else{
            this._aPlayersHand[iIndexPlayer].centerContainer();

            this._notifyChangeTurn();
        }
    }
    
    /*
    if (this.playerCanPlay(iIndexPlayer)){
        console.log("CANPLAYACARD");
        this.onInputPlayer(iIndexPlayer);


        if(this._iCurPlayer !== 0){
            this._oAIManager.selectACard(this._iCurPlayer, this._iSpecialStackMode);
        }

    }else{
        console.log("NOFIT");
        this._aPlayersHand[iIndexPlayer].centerContainer();

        this._notifyChangeTurn();
    }
    */
};

///////////ACTIONS
/*
CGameSingle.prototype._onUnoSavedMessage = function(oData){
    var szPlayerName = this._aPlayersHand[ this._iPlayerReclamedUNO ].getName().toUpperCase();
    this._oUnoController.showAlertMsg( sprintf(TEXT_ALERT_3, szPlayerName) );
    this._oUnoController.unoAnimation();
};
*/

CGameSingle.prototype._onActionDrawFour = function(oData){
    this._iCurrentColor = oData.colorindex;
    
    this._oAnimation.changeColor(this._iCurrentColor).then(()=> {
        this._oInterface.refreshColor(this._iCurrentColor);

        var iDrawType = DRAW_TYPE_DRAW4;
        var iNumberOfCards = 4;
        var iDelay = 0;
        var iIndexPlayer = oData.playerindex;

        this.drawCards(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
    });
};

CGameSingle.prototype._onActionSelectColor = function(oData){
    this._iCurrentColor = oData.colorindex;
    
    this._oAnimation.changeColor(this._iCurrentColor).then(()=> {
        this._oInterface.refreshColor(this._iCurrentColor);

        this._notifyChangeTurn();
    });
};
/////////////////


////////NEXT MATCH
CGameSingle.prototype._onConfirmNextMatch = function(){
    $(s_oMain).trigger("show_interlevel_ad");
    
    if(this._bEndGame){
        this._bEndGame = false;
        this.setNewGame();
    };
    
    this.restart();
};

CGameSingle.prototype.onExit = function(){
    s_oCrazyApiManager.setGamePlayStart(false);
    
    s_oGame.unload();

    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("show_interlevel_ad");
    
    s_oCrazyApiManager.showMidAds();
    s_oCrazyApiManager.addEventListener(ON_ADS_STARTED, function(){
        s_oMain.stopUpdate();
    }, this);
    s_oCrazyApiManager.addEventListener(ON_ADS_FINISHED, function(){
        s_oMain.startUpdate();
        s_oCrazyApiManager.hideLoadingPanel();
        
        s_oMain.gotoMenu();
    }, this);
    s_oCrazyApiManager.addEventListener(ON_ADS_ERROR, function(){
        s_oMain.startUpdate();
        
        setTimeout(function(){
            s_oCrazyApiManager.hideLoadingPanel();

            s_oMain.gotoMenu();
        },1000);
    }, this);
};



////// STACK FUNCTIONS
CGameSingle.prototype.onPassTurn = function(){
    console.log("PASSTURN")
    this._oContinueController.setNotClickable();
    
    this._notifyChangeTurn();    
};

CGameSingle.prototype.onPassAndDraw = function(){
    var iDrawType = DRAW_TYPE_DRAW2_COLORED;
    if(this._iSpecialStackMode === STACK_DRAW4_MODE){
        iDrawType = DRAW_TYPE_DRAW4;
    }
    
    this._resetSpecialMode();
    
    this._oDrawCounter.hide();
    
    this._oContinueController.setNotClickable();
    if(this._iCurPlayer === 0){
        this._aPlayersHand[this._iCurPlayer].stopAllAnim();
    }

    var iNumberOfCards = this._iNumStackCards;
    var iDelay = 0;
    var iIndexPlayer = this._iCurPlayer;

    this.drawCards(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
    
    this._oTurnManager.prevTurn();
    
    this._iNumStackCards = 0;
};

CGameSingle.prototype._applyTwoCardStackMode = function(){
    this._enableStackMode(STACK_DRAW2_MODE);
};


CGameSingle.prototype._applyWildFourCardsStackMode = function(){
    this._onActionFourCardsStackMode();
};

CGameSingle.prototype._onActionFourCardsStackMode = function(){
    if(this._iCurPlayer === 0){
        this.changeState(GAME_STATE_CHOOSE_COLOR);
        
        var oSelectColorPanel = new CSelectColorPanel(EFFECT_DRAW_FOUR);
        oSelectColorPanel.addEventListener(ON_COLOR_SELECTED, function(iColor){
            var oData = {playerindex: this._iNextPlayer, colorindex:iColor};
            this.onAfterChooseColorInStackMode(oData);
            
        }, this);
    }else {
        var iColor = this._oAIManager.onSelectColorCpu(this._iCurPlayer);
        var oData = {playerindex: this._iNextPlayer, colorindex:iColor};
        this.onAfterChooseColorInStackMode(oData);
    }    
};

CGameSingle.prototype.onAfterChooseColorInStackMode = function(oData){
    this._iCurrentColor = oData.colorindex;
    
    this._oAnimation.changeColor(this._iCurrentColor).then(()=> {
        this._oInterface.refreshColor(this._iCurrentColor);
        this._enableStackMode(STACK_DRAW4_MODE);
    });
};



