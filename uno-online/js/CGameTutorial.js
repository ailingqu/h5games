function CGameTutorial(oData){

    this._iCurTutStep = 0;
    this._iPlayerTurnCounter = 0;
    this._iNumCardsPerPlayer = 4;
    this._oTutorialPanel;

    CGameSingle.call(this, oData);

    

    this._initTutorial();
    
};

CGameTutorial.prototype = Object.create(CGameSingle.prototype);

CGameTutorial.prototype._initTutorial = function(){
    var iWidth = 300;
    var iHeight = 100;
    var iX = CANVAS_WIDTH/2;
    var iY = 150;
    var oTitle = new CTLText(s_oStage, 
                iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                60, "center", "#fff", PRIMARY_FONT, 1,
                2, 2,
                TEXT_TUTORIAL,
                true, true, false,
                false );
                
    this._oInterface.disableSpecialIcon();
};

CGameTutorial.prototype.matchCanStart = function(){
    var bStart = false;
    var iPlayerReadyCont = 0;
    for(var i=0; i<this._aPlayersHand.length; i++){
        if(this._aPlayersHand[i].getLength()===this._iNumCardsPerPlayer){
            iPlayerReadyCont++;
        }
    }
    
    if(iPlayerReadyCont === NUM_PLAYERS){
        bStart = true;
    }
    
    return bStart;
};

CGameTutorial.prototype._setPieces = function(){
    ///DEBUG
    //STARTING_NUM_CARDS = 4;

    var aPlayerCards = [7,48,47,18]; //First pos, First card received
    var aP2Cards = [0,26,34,34];
    var aP3Cards = [5,19,34,35];
    
    var aDeckCards = [4,21,20,19,20,24,18,18,17,15,23,39,25,43,7,45,52,53, 40, 42, 44, 46, 46];  //First pos, First card on discard pile
    
    var oData = new Array();
    for(var i=0; i<this._iNumCardsPerPlayer; i++){
        oData.unshift( aPlayerCards[i]);
        oData.unshift( aP2Cards[i]);
        oData.unshift( aP3Cards[i]);
    }
    
    for(var i=0; i<aDeckCards.length; i++){
        oData.unshift( aDeckCards[i]);
    }
    
    console.log(oData)
    
    //var oData = [30,31,32,33,34,5,0,20, 0,20,0,20,30,31,32,33,34,5,0,7];
    
    
    this._oDeck.initializeFromData(oData);
   
   
    //this._oDeck.initializeDeck();
    //this._oDeck.shuffle();
   
    this.getFirstHand();  
    
    console.log( this._oDeck.getLength() );
};

CGameTutorial.prototype.onCardDealed = function(oCard){
    var iThisTurn = this._oTurnManager.getTurn();
    var iRot = this._getCardRotation(iThisTurn);

    this._aPlayersHand[iThisTurn].pushCard(
        new CCard(  
                    this._aPlayersHand[iThisTurn].getPosNewCard().x,
                    this._aPlayersHand[iThisTurn].getPosNewCard().y,
                    this._aPlayersHand[iThisTurn].getContainer(),
                    oCard.getFotogram(),
                    oCard.getRank(),
                    oCard.getSuit(),
                    oCard.getUniqueID(),
                    iRot
                )
    ); 
    
    oCard.unload(); 
    
    var oNewCard = this._aPlayersHand[iThisTurn].getLastCard();
    this._aPlayersHand[iThisTurn].centerContainer();
    oNewCard.showCard();

    
    this._oTurnManager.nextTurn();

    if (!this.matchCanStart()){
        this.getFirstHand();
    }else{
        this._oCardsContainer.addChildAt(this._oDecksContainer,this._oCardsContainer);
        this._oDeck.setOnTop();
        oCard = this._oDeck.takeFirstLastCard();
        oCard.moveFirstLastCard(CARD_WIDTH,0,600);
    }
};

CGameTutorial.prototype._onFirstTurnStart = function(){    
    this._oTurnManager.prevTurn();
    this._iCurPlayer = this._oTurnManager.getTurn();
    this._iNextPlayer = this._oTurnManager.getNextPlayer();

    this.setOffTurn();

    var oNewCard = this._oUsedCards.getLastCard();
    this._checkFirstCardEffect(oNewCard.getEffect()); 
    
    this._oTutorialPanel = new CTutorialPanel();
    //new CHelpPanel();

};


CGameTutorial.prototype.playCard = function(oCard,Event){
    var iThisTurn = this._oTurnManager.getTurn();
    var bCanPlay = false;
    var iPlayerID = 0;
    if (iThisTurn===iPlayerID){
        bCanPlay = this.cardMatchTheWaste(oCard, iThisTurn);
    }
    
    if(bCanPlay){
        this._oCardsContainer.addChildAt(this._oHandsContainer,this._oCardsContainer.numChildren);
        this._aPlayersHand[iThisTurn].setOnTop();
        this._oDeck.disableInputDraw();
        
        this.offInputPlayer(iPlayerID);

        
        var oHandGlobalPos =this._aPlayersHand[iThisTurn].getContainerPos();
        var oUsedCardsGlobalPos = this._oUsedCards.getGlobalPosition();

        playSound("card",1,false);

        oCard.moveCard((oUsedCardsGlobalPos.x-oHandGlobalPos.x),oUsedCardsGlobalPos.y-oHandGlobalPos.y,0,300);
        oCard.showCard();

        this._oTutorialPanel.hide();

        this._oUsedCards.setChildDepth(2);
    }    
};

CGameTutorial.prototype.onNextTurn = function(){
    this._bUNO = false;
    this._iPlayerReclamedUNO = null;
    this._bReclamedUNO = false;
    
    var iWinner = this.checkWinner();
    if (iWinner!==null){
        this.gameOver(iWinner);
        this._oSummaryPanel.playerQuitMode(TEXT_TUT_END);
        
        
        if(iWinner === 0){
            $(s_oMain).trigger("save_score", this._calculateMatchScore());
            
            s_oCrazyApiManager.setHappyTime();
        }
        
    }else{
        /////OTHER HANDS
        this.changeState(GAME_STATE_TURN_START);
        
        this.setOffTurn();
        this._oDeck.enableInputDraw();
        
        this._oTurnManager.nextTurn();
        var iThisTurn = this._oTurnManager.getTurn();

        this._iCurPlayer = iThisTurn;
        this._iNextPlayer = this._oTurnManager.getNextPlayer();

        this._aPlayersHand[iThisTurn].setOnTurn();

        //console.log("iThisTurn:" + iThisTurn + " nextTurn:" + this._iNextPlayer);

        if (iThisTurn===0){
            this.onInputPlayer(iThisTurn);

            if (!this.playerCanPlay(iThisTurn)){
                this._oDeck.setHelp();
            }

            this._oUnoController.setClickable();
            
            this._iPlayerTurnCounter++;
            console.log("playerturn:"+this._iPlayerTurnCounter);
            
            if(this._iPlayerTurnCounter<4){
                this._iCurTutStep++;
                if(this._iCurTutStep === 2){
                    this._oDeck.hideHelp();
                }
                if(this._iCurTutStep === 4){
                    this.offInputPlayer(iThisTurn);
                    //this._oDeck
                    //ACTIVEDECKHERE
                }
                this._oTutorialPanel.showNextTut(this._iCurTutStep);
            }
            
            console.log(this._iCurTutStep)
            
            
        } else {
            //this._oAIManager.selectACard(iThisTurn, this._iSpecialStackMode);
            this.selectACard(iThisTurn);
            this._oUnoController.setNotClickable();
            
        }
    }
};


CGameTutorial.prototype.onDraw = function(){
    var bCheck = true;
    var oTmpCard;
    
    var iPlayerID = 0;
    
    if (this._oUsedCards.getLength()!==0&&this._iCurPlayer=== iPlayerID){
        
        for (var i=0;i<this._aPlayersHand[iPlayerID].getLength();i++){
            oTmpCard = this._aPlayersHand[iPlayerID].getCardByIndex(i);
            if(this.cardMatchTheWaste(oTmpCard, iPlayerID)){
                bCheck = false;
            }
        }

        if(this._iCurTutStep === 4){
            bCheck = true;
        }

        if(bCheck===true){
            this.changeState(GAME_STATE_DRAW);
            
            this._oDeck.disableInputDraw();
            this._oDeck.hideHelp();
            
            this.drawCards(iPlayerID,1,0,DRAW_TYPE_NORMAL);
            
            this._oTutorialPanel.hide();
        }
    }
    
    
};

CGameTutorial.prototype._checkIfCanStillPlayTheTurn = function(iIndexPlayer){
    if(this._iCurPlayer === 0){
        //this.onInputPlayer(iIndexPlayer);
        
        if (this.playerCanPlay(iIndexPlayer)){
            console.log("CANPLAYACARD");
            this.onInputPlayer(iIndexPlayer);
            
            this._oContinueController.setNotClickable();
            
            if(this._iCurTutStep === 3){
                this.setOffTurn();
                this._oContinueController.setPassTurnState();
            }
            
            
            
        }else{
            console.log("NOFIT");
            this._aPlayersHand[iIndexPlayer].centerContainer();

            this._notifyChangeTurn();
            this._oContinueController.setNotClickable();
        }
        
    }else {
        if (this.playerCanPlay(iIndexPlayer)){
            this.onInputPlayer(iIndexPlayer);
            //this._oAIManager.selectACard(this._iCurPlayer, this._iSpecialStackMode);
            this.selectACard(iIndexPlayer);

        }else{
            this._aPlayersHand[iIndexPlayer].centerContainer();

            this._notifyChangeTurn();
        }
    }
};

CGameTutorial.prototype.drawCardsTween = function(iIndexPlayer,iNumberOfCards,iDelay,iDrawType){
    this._oCardsContainer.addChildAt(this._oDecksContainer,this._oCardsContainer.numChildren);
    this._oDeck.setOnTop();
    
    
    
    var oHandGlobalPos = this._aPlayersHand[iIndexPlayer].getContainerPos();
    var oCardPos = this._aPlayersHand[iIndexPlayer].getPosNewCard();
    var oDeckGlobalPos = this._oDeck.getGlobalPosition();

    var oParent = this;

    var oCard = this._oDeck.takeLastCard();
    oCard.setOnTop();

    var iFinalPosX = (oHandGlobalPos.x+oCardPos.x)-(oDeckGlobalPos.x);
    var iFinalPosY = (oHandGlobalPos.y+oCardPos.y)-(oDeckGlobalPos.y);

    var iRot = this._getCardRotation(iIndexPlayer);
    
    createjs.Tween.get(oCard.getSprite()).wait(iDelay).to({x: iFinalPosX, y: iFinalPosY, rotation: iRot},400,createjs.Ease.cubicOut).call(function(){
        
        oParent._aPlayersHand[iIndexPlayer].pushCard(
            new CCard(  oParent._aPlayersHand[iIndexPlayer].getPosNewCard().x,
                        oParent._aPlayersHand[iIndexPlayer].getPosNewCard().y,
                        oParent._aPlayersHand[iIndexPlayer].getContainer(),
                        oCard.getFotogram(),oCard.getRank(),oCard.getSuit(),oCard.getUniqueID(),
                        iRot)
                    );
        oCard.unload();


        var oNewCard = oParent._aPlayersHand[iIndexPlayer].getLastCard();
        oNewCard.showCard();
        if (oParent.canCardBeShown(iIndexPlayer)){
            //oNewCard.showCard();
            
            if(oParent._iCurPlayer === 0){
                oParent._iCurTutStep++;
                oParent._oTutorialPanel.showNextTut(oParent._iCurTutStep);
            }
        }else{
            playSound("card",1,false);
        }
        
        oParent._aPlayersHand[iIndexPlayer].centerContainer();

        oParent.checkForMoreDraws(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
        
    }); 
};

CGameTutorial.prototype._applySelectColor = function(){
    if(this._iCurPlayer === 0){
        this.changeState(GAME_STATE_CHOOSE_COLOR);
        
        var oSelectColorPanel = new CSelectColorPanel(EFFECT_SELECT_COLOR);
        oSelectColorPanel.enableOnlyYellow();
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

CGameTutorial.prototype._applyTwoCardStackMode = function(){
    this.changeState(GAME_STATE_STACK_MODE);
    
    var iDrawType = DRAW_TYPE_DRAW2_COLORED;
    var iNumberOfCards = 2;
    var iDelay = 0;
    var iIndexPlayer = this._iNextPlayer;

    this.drawCards(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
};

CGameTutorial.prototype._applyDrawFourEffect = function(){
    if(this._iCurPlayer === 0){
        this.changeState(GAME_STATE_CHOOSE_COLOR);
        
        var oSelectColorPanel = new CSelectColorPanel(EFFECT_DRAW_FOUR);
        oSelectColorPanel.enableOnlyYellow();
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

CGameTutorial.prototype._applyWildFourCardsStackMode = function(){
    this._onActionFourCardsStackMode();
};

CGameTutorial.prototype._onActionFourCardsStackMode = function(){
    if(this._iCurPlayer === 0){
        this.changeState(GAME_STATE_CHOOSE_COLOR);
        
        var oSelectColorPanel = new CSelectColorPanel(EFFECT_DRAW_FOUR);
        oSelectColorPanel.enableOnlyYellow();
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

CGameTutorial.prototype.checkUno = function(iEffect){
    var iThisTurn = this._oTurnManager.getTurn();
    var oParent = this;

    if (this._aPlayersHand[iThisTurn].getLength()===1 && iThisTurn === 0){  
        this._bUNO = true;
        
        this._oUnoController.unoAnimation();
        this._oUnoController.addEventListener(ON_UNO_CLICK, function(){
            oParent._oUnoController._triggerEffect(iEffect);
            oParent._oUnoController.stopAnim();
            oParent._oTutorialPanel.hide();
            oParent._oUnoController.removeEventListeners(ON_UNO_CLICK);
        }, this);
        
        if(this._iPlayerTurnCounter === 8){
            this._oTutorialPanel.showUnoTut();
        }
        
        
    }else {
        this._oUnoController._triggerEffect(iEffect);
    }

    

    //this._oUnoController.check(iEffect);    
    
};

CGameTutorial.prototype.selectACard = function(iPlayer){
    //console.log("onSelectACardCpu")

    var oPlayerHand = s_oGame.getPlayersHand(iPlayer);
    var iCurColor = s_oGame.getCurColor();
    var oCurCard = s_oGame.getLastCard();

    var aBestCards = new Array();
    for (var i=0;i<oPlayerHand.getLength();i++){
        if(oPlayerHand.getCardByIndex(i).getSuit()!==4&&(oPlayerHand.getCardByIndex(i).getRank()===oCurCard.getRank()||oPlayerHand.getCardByIndex(i).getSuit() === iCurColor)){
            if(oPlayerHand.getCardByIndex(i).getRank()===12){
                aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 6});
            }else if (oPlayerHand.getCardByIndex(i).getRank()===10){
                aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 5});
            }else if (oPlayerHand.getCardByIndex(i).getRank()===11){
                aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 4});
            }else{
                aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 3});
            }
        }else if(oPlayerHand.getCardByIndex(i).getFotogram()===FOTOGRAM_COLOR){
            aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 2});
        }else if(oPlayerHand.getCardByIndex(i).getFotogram()===FOTOGRAM_DRAW_FOUR){
            aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 1});
        }
    }
    if (aBestCards.length===0){
        s_oGame.drawCards(iPlayer,1,1000,DRAW_TYPE_NORMAL);
    }else{
        aBestCards.sort(function(a,b){
            return parseFloat(b.iValue) - parseFloat(a.iValue);
        });

        s_oGame.cpuPlayCard(aBestCards[0].oCard);
    }
};

////// STACK FUNCTIONS
CGameTutorial.prototype.onPassTurn = function(){
    console.log("PASSTURN")
    this._oContinueController.setNotClickable();
    this._oContinueController.setMsg("");
    
    this._oTutorialPanel.hide();
    
    this._notifyChangeTurn();    
};