function CGameMulti(oData){
    CGameBase.call(this, oData);
    
    this._bActionInProgress;
    this._aMessageQueue;
    
    this._aDisconnectedPlayer;
    
    this._oMoveTimeController;
    this._oSelectColorPanel;

    this.bTest = true;
    
    this._startGame();
    
};

CGameMulti.prototype = Object.create(CGameBase.prototype);

CGameMulti.prototype._startGame = function(){
    this._bActionInProgress = true;
    this._aMessageQueue = new Array();
    
    this._aDisconnectedPlayer = new Array();
    
    this._oUnoController.addEventListener(ON_APPLY_EFFECT, this.applyEffectOnCard, this);
    this._oUnoController.addEventListener(ON_APPLY_PENALITY, this.applyPenality, this);
    this._oUnoController.addEventListener(ON_UNO_CLICK, this._onUnoClick, this);
    //this._oUnoController.addEventListener(ON_UNO_SAVED_MESSAGE, this._onUnoSavedMessage, this);
    
    this._oContinueController.addEventListener(ON_PASS_TURN, this.onPassTurn, this);
    this._oContinueController.addEventListener(ON_PASS_AND_DRAW, this.onPassAndDraw, this);
    this._oContinueController.addEventListener(ON_HUMAN_INTERACTION, this._onHumanInteraction, this);
    
    this._oSummaryPanel.addEventListener(ON_NEXT, this._onConfirmNextMatch, this);
    this._oSummaryPanel.addEventListener(ON_HOME, this.onExit, this);
    
    this._oMsgBox.addEventListener(ON_HOME, this.onExit, this);

    this._initHandPlayers();

    this._oMoveTimeController = new CMoveTimeController(CANVAS_WIDTH, CANVAS_HEIGHT, this._oPanelContainer);
    this._oMoveTimeController.addEventListener(ON_TIMER_END, this._onTimerEnd, this);
    this._oMoveTimeController.addEventListener(ON_LAST_TIMER_END, this._onLastTimerEnd, this);
    //this._oMoveTimeController.startTimer();
    //this._oMoveTimeController.setSpectatorMode();
    //this._oMoveTimeController.stopTimer();

    s_oNetworkManager.addEventListener(ON_STATUS_OFFLINE, this._onConnectionCrashed, this);
    
    s_oNetworkManager.sendMsg(MSG_REQUEST_PIECES, "");
    
    s_oCrazyApiManager.setGamePlayStart(true);
    
    this.refreshGUI();
};

CGameMulti.prototype.refreshGUI = function(){
    var iOffset = 10;
    var iX = CANVAS_WIDTH-TIME_CONTROLLER_RADIUS-s_iOffsetX - iOffset;
    var iY = CANVAS_HEIGHT-TIME_CONTROLLER_RADIUS-s_iOffsetY - iOffset;
    this._oMoveTimeController.setPos(iX, iY);
};

CGameMulti.prototype.setNewGame = function(){
    for(var i=0; i<this._aPlayersHand.length; i++){
        this._aPlayersHand[i].setScore(0);
    }
    
    this._oTurnManager.resetFirstPlayer();
};

CGameMulti.prototype.restart = function(){
    s_oCrazyApiManager.setGamePlayStart(true);

    this.disposePlayersFromMatch();
    
    this.reset();

    var iNumPlayers = this.numRemainingPlayers();
    if(iNumPlayers === 1){
        return;
    }

    s_oNetworkManager.sendMsg(MSG_REQUEST_PIECES, "");
};

CGameMulti.prototype._initHandPlayers = function(){  
    var aHandPos = HAND_POS["num_player_"+NUM_PLAYERS];
    
    var aStartPos = new Array();
    for(var i=0; i<aHandPos.length; i++){
        var oPos = aHandPos[i];
        aStartPos.push({x:oPos.x, y:oPos.y, side:oPos.side});
    }
    
    var iClientIndexPlayer = s_oNetworkManager.getPlayerOrderID(); 
    var oShiftedElement;
    for(var i=0;i<iClientIndexPlayer;i++){
        oShiftedElement = aStartPos.pop();
        aStartPos.splice(0,0,oShiftedElement);
    }
    
    for(var i=0; i<NUM_PLAYERS; i++){
        
        var oPos = aStartPos[i];
        var iOffsetX =0;
        var iOffsetY =0;
        if (oPos.x===CANVAS_WIDTH/2){
            iOffsetX = CARD_WIDTH/2;
        }else{
            iOffsetY = CARD_HEIGHT/4;
        }
        this._aPlayersHand[i].setPosition(iOffsetX,iOffsetY,aStartPos[i].x, aStartPos[i].y, aStartPos[i].side);
        
        this._aPlayersHand[i].changeName(s_oNetworkManager.getNicknameByID(i));
    };
};

CGameMulti.prototype._onPiecesReceived = function(oData){
    this._oUnoController.setVisible(true);

    // DEBUG
    //STARTING_NUM_CARDS = 3;
    //var oData = [0,0,0,0,0,0,0,0,30,30,30,30,30,30,  20,20,1,1,53,53]; //EXAMPLE WITH +4
    //var oData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,  53,20,23,20,24,20,25]; //START WITH ALL SPECIAL, TO TEST WITH NO FOCUS (2 players, 3 start cards)
    //var oData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,  20,20,20,53,20,20,20,23,20,20,20,24,20,20,20,25]; //START WITH ALL SPECIAL, TO TEST WITH NO FOCUS (4 players, 4 start cards)
    //var oData = [0,0,0,0,0,0,    23,0,23,0];
    //var oData = [30,31,0,0,0,0,   0,0,0,0,3,0];
    
    /*
    // ANOTHER DEBUG
    var aPlayerCards = [2,2,2,2, 2, 2, 2]; //First pos, First card received
    var aP2Cards = [2,2,2,2, 2, 2, 2 ];
    //var aP3Cards = [5,1,34,35, 0, 0, 0 ];
    //var aP4Cards = [5,19,34,35, 0, 0, 0 ];
    STARTING_NUM_CARDS = 1;
    var aDeckCards = [2,2,2,2,2,2, 2 ,2,2,2,2,52,53, 40, 10, 44, 46, 46, 1,10,3,4,5,6,7,8,9, 1,10,3,4,5,6,7,8,9,0,0,0,0,0,0,12,3,4,5,2];  //First pos, First card on discard pile
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
    */
    
    
    this._oDeck.initializeFromData(oData);

    this.getFirstHand();
};

CGameMulti.prototype._checkFirstCardEffect = function(iEffect){
    switch(iEffect){
        case EFFECT_SELECT_COLOR:{
                //this.onActionStop();
                //console.log("EFFECT_SELECT_COLOR")
                this._oTurnManager.nextTurn();
                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._oTurnManager.getNextPlayer();
                
                if(this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
                    this._applySelectColor();
                }
                
                this._oTurnManager.prevTurn();
                
                this.onActionStop();
                
                break;
        }
        case EFFECT_DRAW_FOUR:{
                ///CONSIDER TO SHUFFLE
                //this.onActionStop();
                //console.log("EFFECT_DRAW_FOUR")
                this._oTurnManager.nextTurn();
                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._oTurnManager.getNextPlayer();
                
                if(this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
                    this._applyDrawFourEffect();
                    this._iCurPlayer = this._oTurnManager.getTurn();
                    this._iNextPlayer = this._iCurPlayer;
                }
                
                this._oTurnManager.prevTurn();

                this.onActionStop();

                break;
        }
        case EFFECT_STOP:{
                //this._onActionBlockTurn();
                this.onActionStop();
                
                if(this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
                    this._applyStopTurn();
                }
                
                
                break;
        }
        case EFFECT_INVERT_TURN:{
                //if(NUM_PLAYERS !== 2){
                if(this.numRemainingPlayers() !== 2){
                    this._oTurnManager.nextTurn();
                }    
               
                this._onActionInvertTurn();
               
                break;
        }
        case EFFECT_DRAW_TWO_COLORED:{
                var oData = {playerindex: this._iNextPlayer};
                this._onActionDrawTwoColored(oData);

                break;
        }
        default:{
                //EFFECT_NORMAL_CARD
                this._oTurnManager.nextTurn();
                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._oTurnManager.getNextPlayer();
                
                if(this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
                    this.onInputPlayer(this._iCurPlayer);
                    this._oDeck.enableInputDraw();
                    this._oUnoController.setClickable();
                }
                
                this._aPlayersHand[this._iCurPlayer].setOnTurn();
                
                this.startTimer();
                
                this.onActionStop();

                break;
        }
    }
};

CGameMulti.prototype.onDraw = function(){    
    var bCheck = true;
    var oTmpCard;
    

    var iPlayerID = s_oNetworkManager.getPlayerOrderID();

    
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
            this._onHumanInteraction();
            
            this.startTimer();
            
            this.changeState(GAME_STATE_DRAW);
            
            this._oDeck.disableInputDraw();
            this._oDeck.hideHelp();
            

            //this._oContinueController.setPassTurnState();
            
            this.drawCards(iPlayerID,1,0,DRAW_TYPE_NORMAL);
        }
    }
    
    
    //console.log("numCardOnDeck:"+this._oDeck.getLength());
};

CGameMulti.prototype.onNextTurn = function(){
    this._bUNO = false;
    this._iPlayerReclamedUNO = null;
    this._bReclamedUNO = false;

    var iWinner = this.checkWinner();
    if (iWinner!==null){
        this.gameOver(iWinner);
        
        s_oNetworkManager.sendMsg(MSG_END_MATCH, "");
        
        if(iWinner === s_oNetworkManager.getPlayerOrderID()){
            s_oCrazyApiManager.setHappyTime();
        }
        
    }else{
        /////OTHER HANDS
        this.changeState(GAME_STATE_TURN_START);
        
        this.setOffTurn();
        this._oDeck.enableInputDraw();
        
        /*
        for(var i=0; i<this._aDisconnectedPlayer.length; i++){
            var iIndex = this._aDisconnectedPlayer[i];
            this.disposePlayer(iIndex);
        }
        this._aDisconnectedPlayer = new Array();
        */
        this.disposePlayersFromMatch();
        var iNumPlayers = this.numRemainingPlayers();
        if(iNumPlayers === 1){
            return;
        }
       
        this._oTurnManager.nextTurn();
        var iThisTurn = this._oTurnManager.getTurn();

        this._iCurPlayer = iThisTurn;
        this._iNextPlayer = this._oTurnManager.getNextPlayer();

        //console.log(this._iCurPlayer+" --> cur player")
        //console.log(this._iNextPlayer+" --> next player")



        if(this._iNumStackCards > 0){
            this._oContinueController.setMsg( sprintf(TEXT_PLUS_CARDS, this._iNumStackCards) );
        }else {
            this._oContinueController.setMsg("");
        }



        /*
        if(this._aDisconnectedPlayer.indexOf(iThisTurn) !== -1 &&  !this._aPlayersHand[iThisTurn].isDisposed()){
            //console.log(this._iCurPlayer+" --> questo giocatore si è disconnesso")
            var aDisposedCards = this.disposePlayer(iThisTurn);
            this.disposeCards(aDisposedCards);
            //this.onActionStop();
            
            this.onNextTurn();
            //return;
        }else {
        */
            this._aPlayersHand[iThisTurn].setOnTurn();

            this.startTimer();

            //console.trace("iThisTurn:" + iThisTurn + " nextTurn:" + this._iNextPlayer + " s_oNetworkManager.getPlayerOrderID():" +s_oNetworkManager.getPlayerOrderID());

            if (iThisTurn===s_oNetworkManager.getPlayerOrderID()){
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
                this._oUnoController.setNotClickable();
            }
        }

        
    //}
    
    this.onActionStop();
};

CGameMulti.prototype.playCard = function(oCard,Event){
    var iThisTurn = this._oTurnManager.getTurn();
    var bCanPlay = false;
    var iPlayerID = s_oNetworkManager.getPlayerOrderID();
    if (iThisTurn===iPlayerID){
        bCanPlay = this.cardMatchTheWaste(oCard, iThisTurn);
    }
    
    if(bCanPlay){
        this._onHumanInteraction();
        
        this.stopTimer();
        
        this._oContinueController.setNotClickable();
        this._aPlayersHand[iThisTurn].stopAllAnim();
        
        this._oCardsContainer.addChildAt(this._oHandsContainer,this._oCardsContainer.numChildren);
        this._aPlayersHand[iThisTurn].setOnTop();
        this._oDeck.disableInputDraw();
        
        this.offInputPlayer(iPlayerID);

        ///SEND MESSAGE   
        var iCardIndex = oCard.getUniqueID();
        var oJSONData = {action: ACTION_USE_CARD, playerindex: iPlayerID, cardindex:iCardIndex};
        
        s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
    }
};

CGameMulti.prototype.playedCard = function(oCard){
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
    
    this.onActionStop();
    
    //CARD ARRIVED, CONTROL HERE UNO
    if(iThisTurn === s_oNetworkManager.getPlayerOrderID()){
        this.checkUno(oCard.getEffect());
    } else {
        if (this._aPlayersHand[iThisTurn].getLength()===1){
            this._oUnoController.setOpponentTimeout();
        }
    }
};

CGameMulti.prototype._onUnoClick = function(){
    if (this._bUNO === true){
        this._bUNO = false;
        this._aPlayersHand[this._iCurPlayer].checkUno();
        
        var oJSONData = {action: ACTION_ON_UNO_CLICK, playerindex: this._iCurPlayer};
        s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
    }else {
        if(this.checkUNOPlayer() !== null && !this._bReclamedUNO){
            this._bReclamedUNO = true;
            var oJSONData = {action: ACTION_SOMEONE_DECLARE_UNO, playerindex: s_oNetworkManager.getPlayerOrderID()};
            s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
        }
    }
};

//////////////////////APPLY EFFECTS ////////////////////////
CGameMulti.prototype.applyEffectOnCard = function(iEffect){
    if(this._iCurPlayer !== s_oNetworkManager.getPlayerOrderID()){
        return;
    }
    
    this._checkEffect(iEffect);
    
    //console.log("applyEffectOnCard")
};


CGameMulti.prototype._applySelectColor = function(){
    //console.log("_applySelectColor");
    this.startTimer();
    
    this.changeState(GAME_STATE_CHOOSE_COLOR);
    
    this._oSelectColorPanel = new CSelectColorPanel(EFFECT_SELECT_COLOR);
    this._oSelectColorPanel.addEventListener(ON_HUMAN_INTERACTION, this._onHumanInteraction, this);
    this._oSelectColorPanel.addEventListener(ON_COLOR_SELECTED, function(iColor){
        this.stopTimer();
        
        var oJSONData = {action: ACTION_SELECT_COLOR, playerindex: s_oNetworkManager.getPlayerOrderID(), colorindex:iColor};
        s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
    }, this);
};

CGameMulti.prototype._applyDrawFourEffect = function(){
    //console.log("_applyDrawFourEffect");
    this.startTimer();
    
    this.changeState(GAME_STATE_CHOOSE_COLOR);
    
    this._oSelectColorPanel = new CSelectColorPanel(EFFECT_DRAW_FOUR);
    this._oSelectColorPanel.addEventListener(ON_HUMAN_INTERACTION, this._onHumanInteraction, this);
    this._oSelectColorPanel.addEventListener(ON_COLOR_SELECTED, function(iColor){
        this.stopTimer();
        
        var oJSONData = {action: ACTION_DRAW_FOUR, playerindex: this._iNextPlayer, colorindex:iColor};
        s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
    }, this);
};

CGameMulti.prototype._applyStopTurn = function(){
    ///SEND MESSAGE   
    var oJSONData = {action: ACTION_BLOCK_TURN/*, playerindex: s_oNetworkManager.getPlayerOrderID()*/};

    s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
};

CGameMulti.prototype._applyInvertTurn = function(){
    ///SEND MESSAGE   
    var oJSONData = {action: ACTION_INVERT_TURN/*, playerindex: s_oNetworkManager.getPlayerOrderID()*/};

    s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
};

CGameMulti.prototype._applyDrawTwoColored = function(){
    var oJSONData = {action: ACTION_DRAW_TWO_COLORED, playerindex: this._iNextPlayer};
    s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
};

CGameMulti.prototype._applyNormalCardEffect = function(){
    this._notifyChangeTurn();
};
/////////////////////////////////////////////////////

CGameMulti.prototype._notifyChangeTurn = function(){
    if(this._iCurPlayer !== s_oNetworkManager.getPlayerOrderID()){
        return;
    }
   
    //console.log("_notifyChangeTurn:"+this._iCurPlayer + " s_oNetworkManager.getPlayerOrderID():"+s_oNetworkManager.getPlayerOrderID())
    
    ///SEND MESSAGE   
    var oJSONData = {action: ACTION_NEXT_TURN, playerindex: s_oNetworkManager.getPlayerOrderID()};

    s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
};

CGameMulti.prototype.shuffleCards = function (iIndexPlayer,iNumberOfCards,iDelay,iDrawType){
    //console.log("SHUFFLECARDS--> iIndexPlayer:"+iIndexPlayer + " s_oNetworkManager.getPlayerOrderID():"+s_oNetworkManager.getPlayerOrderID())

    var aCardsObj = this._oUsedCards.removeAllCardUnderTheDeck();
    var aCardsFotogram = new Array();
    for(var i=0; i<aCardsObj.length; i++){
        aCardsFotogram.push(aCardsObj[i].getFotogram());
    }

    this._oAnimation.shuffleAnimation().then(()=>{
        this.onActionStop();
       
        if(this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
            shuffle(aCardsFotogram);
            
            ///SEND MESSAGE   
            var oJSONData = {action: ACTION_ON_SHUFFLECARDS, playerindex: iIndexPlayer, numberofcards:iNumberOfCards, delay: iDelay, drawtype: iDrawType, cards: aCardsFotogram};
            s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
        }
    });
}; 

CGameMulti.prototype.drawCards = function (iIndexPlayer,iNumberOfCards,iDelay,iDrawType){
    //console.log("DRAWCARDS--> iIndexPlayer:"+iIndexPlayer + " s_oNetworkManager.getPlayerOrderID():"+s_oNetworkManager.getPlayerOrderID())

    ///SEND MESSAGE   
    var oJSONData = {action: ACTION_ON_DRAWCARDS, playerindex: iIndexPlayer, numberofcards:iNumberOfCards, delay: iDelay, drawtype: iDrawType};    
    s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
    
}; 

CGameMulti.prototype._onAllCardsDrawCompleted = function(iIndexPlayer,iDrawType){
    this._checkEffectAfterDrawCompleted(iIndexPlayer,iDrawType);
    this.onActionStop();
};

CGameMulti.prototype._checkIfCanStillPlayTheTurn = function(iIndexPlayer){
    //this.onInputPlayer(iIndexPlayer);
    
    
    if (this.playerCanPlay(iIndexPlayer)){
        console.log("CANPLAYACARD:"+this._iCurPlayer);
        if(iIndexPlayer === s_oNetworkManager.getPlayerOrderID() && this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
            this.onInputPlayer(iIndexPlayer);
        
            this._oContinueController.setPassTurnState();
        }
        
    }else{
        console.log("NOFIT");
        this._aPlayersHand[iIndexPlayer].centerContainer();
        //this._oTurnManager.nextTurn();

        this._oMoveTimeController.stopTimer();

        this._notifyChangeTurn();
        this._oContinueController.setNotClickable();
    }
    
};

/*
CGameMulti.prototype._onUnoSavedMessage = function(){
    var oJSONData = {action: ACTION_ON_UNO_SAVED_MESSAGE, playerindex: s_oNetworkManager.getPlayerOrderID()};    
    s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
};
*/


////////////////ACTIONS //////////////////////////
CGameMulti.prototype.onActionReceived = function(oData){
    ////CALL THIS WHENEVER AN ACTION IS RECEIVED FROM SERVER
    this._aMessageQueue.push(oData);
    this._evaluateMessageQueue();
};

CGameMulti.prototype.onActionStop = function(){
    ////CALL THIS WHENEVER AN ACTION IS STOPPED
    this._bActionInProgress = false;
    this._evaluateMessageQueue();
};

CGameMulti.prototype._evaluateMessageQueue = function(){
    if(this._aMessageQueue.length===0 || this._bActionInProgress){
        return;
    }

    this._bActionInProgress = true;
    var oMessage = this._aMessageQueue.shift();

    ///MAP HERE ALL THE ACTION OF PLAYERS THAT SHOULD BE QUEUED
    switch(oMessage.action){
        case ACTION_NEXT_TURN:{
                this.onNextTurn();
                break;
        }
        case ACTION_USE_CARD:{
                this._onActionPlayCard(oMessage);
                break;
        }
        case ACTION_ON_SHUFFLECARDS:{
                this._onActionShuffleCard(oMessage);
                break;
        }
        case ACTION_ON_DRAWCARDS:{
                this._onActionDrawCards(oMessage);
                break;
        }
        case ACTION_ON_UNO_CLICK:{
                this._onActionUnoClick(oMessage);
                break;
        }
        case ACTION_SOMEONE_DECLARE_UNO:{
                this._onActionSomeoneDeclareUno(oMessage);
                break;
        }
        case ACTION_ON_UNO_SAVED_MESSAGE:{
                this._onActionUnoSavedMessage(oMessage);
                break;
        }
        case ACTION_SELECT_COLOR:{
                this._onActionSelectColor(oMessage);
                break;
        }
        case ACTION_DRAW_FOUR:{
                this._onActionDrawFour(oMessage);
                break;
        }
        case ACTION_BLOCK_TURN:{
                this._onActionBlockTurn(oMessage);
                break;
        }
        case ACTION_INVERT_TURN:{
                this._onActionInvertTurn(oMessage);
                break;
        }
        case ACTION_DRAW_TWO_COLORED:{
                this._onActionDrawTwoColored(oMessage);
                break;
        }
        case ACTION_PASS_AND_DRAW:{
                this._onActionPassAndDraw(oMessage);
                break;
        }
        case ACTION_DRAW_TWO_STACK_MODE:{
                this._onActionTwoCardsStackMode(oMessage);
                break;
        }
        case ACTION_DRAW_FOUR_STACK_MODE:{
                this._onActionFourCardsStackMode(oMessage);
                break;
        }
        case ACTION_AFTER_CHOOSE_COLOR_IN_STACK_MODE:{
                this._onActionAfterChooseColorInStackMode(oMessage);
                break;
        }
        
        case ACTION_PLAYER_DISPOSED:{
                this._onActionPlayerDisposed(oMessage);
                break;
        }  
        
    }
};

CGameMulti.prototype._onActionPlayCard = function(oData){
    var iThisTurn = oData.playerindex;
    var oHandGlobalPos =this._aPlayersHand[iThisTurn].getContainerPos();
    var oUsedCardsGlobalPos = this._oUsedCards.getGlobalPosition();
    
    var oCard = this._aPlayersHand[iThisTurn].getCardByUniqueID( oData.cardindex );   
    var iFotogram = oCard.getFotogram();
    if(iFotogram === FOTOGRAM_DRAW_FOUR || iFotogram === FOTOGRAM_COLOR){
        this.changeState(GAME_STATE_CHOOSE_COLOR);
    }
    
    playSound("card",1,false);
    
    this._iPlayerReclamedUNO = null;
    this._bReclamedUNO = false;
    
    oCard.moveCard((oUsedCardsGlobalPos.x-oHandGlobalPos.x),oUsedCardsGlobalPos.y-oHandGlobalPos.y,0,300);
    oCard.showCard();
    
    this._oUsedCards.setChildDepth(2);
};

CGameMulti.prototype._onActionShuffleCard = function(oData){
    var iIndexPlayer = oData.playerindex;
    var iNumberOfCards = oData.numberofcards;
    var iDelay = oData.delay;
    var iDrawType = oData.drawtype;
    var aCards = oData.cards;
    
    this._oDeck.clearCards();
    this._oDeck.initializeFromData(aCards);

    this.checkForMoreDraws(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
};

CGameMulti.prototype._onActionDrawCards = function(oData){
    var iDrawType = oData.drawtype;
    var iNumberOfCards = oData.numberofcards;
    var iDelay = oData.delay;
    var iIndexPlayer = oData.playerindex;
    
    var bPenality = iDrawType === DRAW_TYPE_PENALITY ? true : false; 
    this._checkUnoNotify(bPenality, s_oNetworkManager.getPlayerOrderID(), iIndexPlayer);
    
    this._checkNumberCardsToDraw(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
};

CGameMulti.prototype._onActionUnoClick = function(oData){
    var iIndexPlayer = oData.playerindex;
    
    this._aPlayersHand[iIndexPlayer].checkUno();
    
    this.onActionStop();
};

CGameMulti.prototype._onActionSomeoneDeclareUno = function(oData){
    if(this._iPlayerReclamedUNO === null){
        this._iPlayerReclamedUNO = oData.playerindex;
    }
    
    this.onActionStop();
};
/*
CGameMulti.prototype._onActionUnoSavedMessage = function(oData){
    var szPlayerName = this._aPlayersHand[ oData.playerindex ].getName().toUpperCase();
    this._oUnoController.showAlertMsg( sprintf(TEXT_ALERT_3, szPlayerName) );
    this._oUnoController.unoAnimation();

    this.onActionStop();
};
*/
CGameMulti.prototype._onActionSelectColor = function(oData){
    this._iCurrentColor = oData.colorindex;
    
    this._oAnimation.changeColor(this._iCurrentColor).then(()=> {
        this._oInterface.refreshColor(this._iCurrentColor);

        this._notifyChangeTurn();

        this.onActionStop();
    });
};

CGameMulti.prototype._onActionDrawFour = function(oData){
    this._iCurrentColor = oData.colorindex;
    
    this._oAnimation.changeColor(this._iCurrentColor).then(()=> {
        this._oInterface.refreshColor(this._iCurrentColor);

        var iDrawType = DRAW_TYPE_DRAW4;
        var iNumberOfCards = 4;
        var iDelay = 0;
        var iIndexPlayer = oData.playerindex;

        oData = {playerindex: iIndexPlayer, numberofcards:iNumberOfCards, delay: iDelay, drawtype: iDrawType}

        this._onActionDrawCards(oData);
    });
};

CGameMulti.prototype._onActionBlockTurn = function(oData){
    this._oAnimation.stopTurn().then(()=> {
        this._oTurnManager.nextTurn();
        
        console.log( this._oTurnManager.getTurn() );
        //console.log( this._oTurnManager.getNextPlayer() );
        
        this._notifyChangeTurn();
        this.onActionStop();
    });
};

CGameMulti.prototype._onActionInvertTurn = function(oData){
    this._oTurnManager.changeClockWise();
    //if(NUM_PLAYERS === 2){
    if(this.numRemainingPlayers() === 2){
        ///IN 2 PLAYERS THE CARD BEHAVIOUR IS DIFFERENT
        this._oTurnManager.nextTurn();
    }

    this._oAnimation.changeClockWise(s_oGame._oTurnManager.getClockWise()).then(()=> {
        this._notifyChangeTurn();
        this.onActionStop();
    });
};

CGameMulti.prototype._onActionDrawTwoColored = function(oData){
    var iDrawType = DRAW_TYPE_DRAW2_COLORED;
    var iNumberOfCards = 2;
    var iDelay = 0;
    var iIndexPlayer = oData.playerindex;

    oData = {playerindex: iIndexPlayer, numberofcards:iNumberOfCards, delay: iDelay, drawtype: iDrawType}

    this._onActionDrawCards(oData);
};
////////////////////////////////////////////////////


CGameMulti.prototype.onExit = function(){
    
    s_oCrazyApiManager.setGamePlayStart(false);
    
    s_oGame._oMoveTimeController.unload();
    
    s_oGame.unload();

    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("show_interlevel_ad");
    
    s_oNetworkManager.disconnect();
    
    
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

////////NEXT MATCH
CGameMulti.prototype._onConfirmNextMatch = function(){
    $(s_oMain).trigger("show_interlevel_ad");
    
    this._oSummaryPanel.waitingMode();

    s_oNetworkManager.sendMsg(MSG_ACCEPT_NEXTMATCH, "");
};

CGameMulti.prototype.onOpponentAcceptNextMatch = function(){
    if(this._bEndGame){
        this._bEndGame = false;
        this.setNewGame();
    };
    
    this.restart();
};

CGameMulti.prototype.opponentLeftTheGame = function(iRefusedPlayerID){
    
    this._aDisconnectedPlayer.push(iRefusedPlayerID);
    console.log(iRefusedPlayerID)

        
    var oJSONData = {action: ACTION_PLAYER_DISPOSED, playerindex: iRefusedPlayerID};    
    this.onActionReceived(oJSONData);

};

CGameMulti.prototype._onActionPlayerDisposed = function(oData){    
    
    //-----------> DISPOSE <------------//
    /*
    if(this._iGameState === GAME_STATE_END){
        this.disposePlayersFromMatch();
        return;
    }
    */

    var iRefusedPlayerID = oData.playerindex; 
    if(iRefusedPlayerID === this._iCurPlayer){
        this.onNextTurn();
    }else {
        this.onActionStop();
    }
};

CGameMulti.prototype.disposePlayersFromMatch = function(){
    for(var i=0; i<this._aDisconnectedPlayer.length; i++){
        var iIndex = this._aDisconnectedPlayer[i];
        this.disposePlayer(iIndex);
    }
    this._aDisconnectedPlayer = new Array();
    
    this.checkIfMatchCanContinue();
    
};

CGameMulti.prototype.checkIfMatchCanContinue = function(){
    var iNumPlayers = this.numRemainingPlayers();
    console.log(iNumPlayers)
    if(iNumPlayers === 1){
        this._oSummaryPanel.hide();
        this._oMsgBox.show(TEXT_ALL_PLAYERS_LEFT);
        
        this._oMoveTimeController.stopTimer();
    }
};

CGameMulti.prototype._onConnectionCrashed = function(){
    this._oSummaryPanel.hide();
    this._oMsgBox.show(TEXT_SOMETHING_WENT_WRONG);
};

////// TIMER FUNC
CGameMulti.prototype.startTimer = function(){
    console.log("startTimer");
    if(this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
        this._oMoveTimeController.stopTimer();
        this._oMoveTimeController.startTimer();
    }
};

CGameMulti.prototype.stopTimer = function(){
    this._oMoveTimeController.stopTimer();
};

CGameMulti.prototype._onTimerEnd = function(){
    console.log("_onTimerEnd");
    
    switch(this._iGameState){
        case GAME_STATE_TURN_START:{
                //this.onDraw();
                //this.onPassTurn();
                
                this.changeState(GAME_STATE_DRAW);  
                this._oDeck.disableInputDraw();
                this._oDeck.hideHelp();

                this._iNumStackCards = 1;
                
                
                var bSkipAnim = true;
                this.onPassAndDraw(bSkipAnim);
                
                /*
                this.drawCards(this._iCurPlayer,1,0,DRAW_TYPE_NORMAL);

                this.onPassTurn();       
                */
                break;
        }
        case GAME_STATE_DRAW:{
                this.onPassTurn();
                break;
        }
        case GAME_STATE_CHOOSE_COLOR:{
                this._oSelectColorPanel.setRandomSelectColor();
                break;
        }
        case GAME_STATE_STACK_MODE:{
                this.onPassAndDraw();
                break;
        }
    }
    
    var oJSONData = {playerindex: this._iCurPlayer, msg:TEXT_PLAYER_AFK};    
    s_oNetworkManager.sendMsg(MSG_NOTIFY, JSON.stringify(oJSONData));
};

CGameMulti.prototype._onLastTimerEnd = function(){
    s_oNetworkManager.disconnect();
    
    this._oSummaryPanel.hide();
    this._oMsgBox.show(TEXT_PLAYER_KICKED);
};

CGameMulti.prototype._onNotifyReceived = function(oData){
    var iPlayerIndex = parseInt(oData.playerindex);
    var szMsg = oData.msg;
    
    //var szPlayerName = s_oNetworkManager.getNicknameByID(iPlayerIndex);
    if(szMsg === ""){
        this._aPlayersHand[iPlayerIndex].hideMsgBox( szMsg );
    }else {
        this._aPlayersHand[iPlayerIndex].showHandScore( szMsg );
    }    
};

CGameMulti.prototype._onHumanInteraction = function(oData){
    console.log("HUMANACTION")
    this._oMoveTimeController.restartEndGameCounter();
    
    var oJSONData = {playerindex: this._iCurPlayer, msg:""};    
    s_oNetworkManager.sendMsg(MSG_NOTIFY, JSON.stringify(oJSONData));
};




////// STACK FUNCTIONS
CGameMulti.prototype.onPassTurn = function(){
    console.log("PASSTURN")
    this.stopTimer();
    
    this._oContinueController.setNotClickable();
    
    this._oDeck.disableInputDraw();
    this.offInputPlayer(this._iCurPlayer);
    
    console.log(this._iCurPlayer);
    
    this._notifyChangeTurn();    
};

CGameMulti.prototype.onPassAndDraw = function(bSkipAnim){
    this.stopTimer();
    
    this._oDrawCounter.hide();
    
    this._oContinueController.setNotClickable();
    if(this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
        this._aPlayersHand[this._iCurPlayer].stopAllAnim();
    }
    
    var oJSONData = {action: ACTION_PASS_AND_DRAW, playerindex: this._iCurPlayer, skipanim : bSkipAnim};
    s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
};

CGameMulti.prototype._onActionPassAndDraw = function(oData){    
    var iDrawType = DRAW_TYPE_DRAW2_COLORED;
    if(this._iSpecialStackMode === STACK_DRAW4_MODE){
        iDrawType = DRAW_TYPE_DRAW4;
    }else if(oData.skipanim){
        iDrawType = DRAW_TYPE_TIMER_END;
    }
    
    this._resetSpecialMode();
    
    this._oDrawCounter.hide();
    
    this._oContinueController.setNotClickable();
    if(this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
        this._aPlayersHand[this._iCurPlayer].stopAllAnim();
    }

    var iNumberOfCards = this._iNumStackCards;
    var iDelay = 0;
    var iIndexPlayer = this._iCurPlayer;


    var oData = {playerindex: iIndexPlayer, numberofcards:iNumberOfCards, delay: iDelay, drawtype: iDrawType}
    this._onActionDrawCards(oData);

    this._oTurnManager.prevTurn();
    this._iNumStackCards = 0;
};

CGameMulti.prototype._applyTwoCardStackMode = function(){
    //console.log("_applyTwoCardStackMode")
    
    var oJSONData = {action: ACTION_DRAW_TWO_STACK_MODE, playerindex: this._iCurPlayer};
    s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
};

CGameMulti.prototype._onActionTwoCardsStackMode = function(){
    this._enableStackMode(STACK_DRAW2_MODE);
    this.onActionStop();
};

CGameMulti.prototype._applyWildFourCardsStackMode = function(){
    var oJSONData = {action: ACTION_DRAW_FOUR_STACK_MODE, playerindex: this._iCurPlayer};
    s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
};

CGameMulti.prototype._onActionFourCardsStackMode = function(){
    this.onActionStop();
    
    this.startTimer();
    
    this.changeState(GAME_STATE_CHOOSE_COLOR);
    
    if(this._iCurPlayer === s_oNetworkManager.getPlayerOrderID()){
        this._oSelectColorPanel = new CSelectColorPanel(EFFECT_DRAW_FOUR);
        this._oSelectColorPanel.addEventListener(ON_HUMAN_INTERACTION, this._onHumanInteraction, this);
        this._oSelectColorPanel.addEventListener(ON_COLOR_SELECTED, function(iColor){
            this.stopTimer();
            
            var oJSONData = {action: ACTION_AFTER_CHOOSE_COLOR_IN_STACK_MODE, playerindex: this._iNextPlayer, colorindex:iColor};
            s_oNetworkManager.sendMsg(MSG_MOVE, JSON.stringify(oJSONData));
        }, this);
    } 
};

CGameMulti.prototype._onActionAfterChooseColorInStackMode = function(oData){
    this._iCurrentColor = oData.colorindex;
    
    this._oAnimation.changeColor(this._iCurrentColor).then(()=> {
        this._oInterface.refreshColor(this._iCurrentColor);
        this._enableStackMode(STACK_DRAW4_MODE);
        this.onActionStop();
    });
};
