function CAIManager(){
    var _iCurColor;
    var _iCurPlayer;
    var _iGameState;
    var _iStackModeType;
    
    var _iAIColorDominance;
    
    var _oCurWasteCard;
    
    var _oParent;
    
    this._init = function(){
        
    };
    
    this.unload = function(){
        
    };

    this._calculateColorDominance = function(aCardsList){
        var iColorDominance = null;
        var aColorsCounter = new Array(0,0,0,0);
        for(var i=0; i<aCardsList.length; i++){
            var oCard = aCardsList[i];
            var iColor = oCard.getSuit();
        }
        
        
        for(var i=0; i<aCardsList.length; i++){
            var oCard = aCardsList[i];
            var iColor = oCard.getSuit();
            
            aColorsCounter[iColor]++;
        }
        
        iColorDominance = indexOfMax(aColorsCounter);    
        
        return iColorDominance;
    };
    
    this.onSelectColorCpu = function(iPlayer){
        /*
        var oPlayerHand = s_oGame.getPlayersHand(iPlayer);

        var oTmpCard;
        var aColor = new Array();
        aColor[0] = {iColor: 0, iPoints: 0};
        aColor[1] = {iColor: 1, iPoints: 0};
        aColor[2] = {iColor: 2, iPoints: 0};
        aColor[3] = {iColor: 3, iPoints: 0};

        for (var i=0;i<oPlayerHand.getLength();i++){
            oTmpCard = oPlayerHand.getCardByIndex(i);
            for (var j=0;j<aColor.length;j++){
                if (oTmpCard.getSuit()===j){
                    aColor[j].iPoints++;
                }
            }
        }
        aColor.sort(function(a,b){
            return parseFloat(b.iPoints) - parseFloat(a.iPoints);
        });

        return aColor[0].iColor;
        */
        var aCardsList = s_oGame.getPlayersHand(iPlayer).getAllCards();
        var iColor = this._calculateColorDominance(aCardsList);
        
        return iColor;
    };
    
    this.selectACard = function(iPlayer, iStackModeType){
        var aCardsList = s_oGame.getPlayersHand(iPlayer).getAllCards();
        
        _iStackModeType = iStackModeType;
        //this._calculateColorDominance(aCardsList);
        
        _iCurPlayer = iPlayer;
        _iCurColor = s_oGame.getCurColor();
        _oCurWasteCard = s_oGame.getLastCard();
        _iGameState = s_oGame.getGameState();
        
        //console.log(_iGameState)
        
        //this._evaluateCardsEasy(aCardsList);
        
        //console.log("onSelectACardCpu")
        
        this._evaluateMoves(aCardsList);
        
        /*
        if(iStackModeType === null){
            
            this._evaluateMoves(aCardsList);
           
        }else {
            var oBestCard = this._evaluateStackCard(aCardsList, iStackModeType);
            
            if (oBestCard === null){
                //DRAW PENALTY
                s_oGame.onPassAndDraw();
            }else{
                s_oGame.cpuPlayCard(oBestCard);
            }
        }
        */
    };

    this._evaluateMoves = function(aCardsList){
        var oBestCard = null;
        
        var iStackRespondPerc = Math.random()*100;
        
        if(_iStackModeType === null || iStackRespondPerc < STACK_RESPOND_PERC[s_iDifficulty]){
            switch(s_iDifficulty){
                case MODE_EASY:{
                        oBestCard = this._evaluateCardsEasy(aCardsList);
                        break;
                }
                case MODE_MEDIUM:{
                        oBestCard = this._evaluateCardsMedium(aCardsList);
                        break;
                }
                case MODE_HARD:{
                        oBestCard = this._evaluateCardsHard(aCardsList);
                        break;
                }
            }
        }
        
        
        
        if(_iGameState === GAME_STATE_TURN_START){
            //////DECIDE IF CPU MUST PICK CARD BEFORE PLAY. THE MORE CARDS PICK, THE EASIER THE MATCH FOR PLAYER
            var iAdditionalDrawPerc = Math.random()*100;
            var bAdditionalDraw = false;
            if(iAdditionalDrawPerc < ADDITIONAL_DRAW_PERC[s_iDifficulty]){
                bAdditionalDraw = true;
            }

            if(bAdditionalDraw){
                //return null;
                s_oGame.changeState(GAME_STATE_DRAW);
                s_oGame.drawCards(_iCurPlayer,1,1000,DRAW_TYPE_NORMAL);
            }else {
                if(oBestCard === null){
                    s_oGame.changeState(GAME_STATE_DRAW);
                    s_oGame.drawCards(_iCurPlayer,1,1000,DRAW_TYPE_NORMAL);
                }else {
                    s_oGame.cpuPlayCard(oBestCard);
                }
            }
            
            
        }else {
            ///PLAY OR PASS. THE STACK CARDS ARE EVALUATED HERE

            ///SET A PERCENT TO PASS EVEN IF HAVE CARDS TOP PLAY
            var iPassTurnPercent = Math.random()*100;

            if(oBestCard !== null && iPassTurnPercent > PASS_TURN_PERC[s_iDifficulty] ){
                s_oGame.cpuPlayCard(oBestCard);
            }else {
                if(_iStackModeType === null){
                    s_oGame.onPassTurn();
                }else {
                    s_oGame.onPassAndDraw();
                }
                
            }
        }
    };

    this._evaluateCardsEasy = function(aCardsList){
        var aPlayableCards = this._filterPlayableCards(aCardsList);

        //console.log(aPlayableCards)
        //this._debugCards(aPlayableCards)

        var aEvaluatedCards = new Array();
        for(var i=0; i<aPlayableCards.length; i++){
            var oCard = aPlayableCards[i];

            if(oCard.getRank() < 10){
                //console.log(oCard.getSuit())
                //NOT SPECIAL
                if(oCard.getSuit() === _iCurColor){

                    //SAME COLOR 
                    aEvaluatedCards.push({oCard: oCard, iValue: 6});
                }else if(oCard.getRank() === _oCurWasteCard.getRank()){
                    //SAME RANK
                    aEvaluatedCards.push({oCard: oCard, iValue: 5});
                }
            }else {
                //SPECIAL
                if(oCard.getSuit() === _iCurColor){
                    //SAME COLOR 
                    aEvaluatedCards.push({oCard: oCard, iValue: 4});
                }else if(oCard.getRank() === _oCurWasteCard.getRank()){
                    //SAME RANK
                    aEvaluatedCards.push({oCard: oCard, iValue: 3});
                }

                if(oCard.getRank() === 13){
                    aEvaluatedCards.push({oCard: oCard, iValue: 2});
                }
                if(oCard.getRank() === 14){
                    aEvaluatedCards.push({oCard: oCard, iValue: 1});
                }
            }
        }

        //console.log(aEvaluatedCards)

        var oBestCard = this._findBestCard(aEvaluatedCards);
        
        return oBestCard;
        
    };
    
    this._evaluateCardsMedium = function(aCardsList){
        var aPlayableCards = this._filterPlayableCards(aCardsList);

        //console.log(aPlayableCards)
        //this._debugCards(aPlayableCards)

        var aEvaluatedCards = new Array();
        for(var i=0; i<aPlayableCards.length; i++){
            var oCard = aPlayableCards[i];

            if(oCard.getRank() < 10){
                //console.log(oCard.getSuit())
                //NOT SPECIAL
                if(oCard.getSuit() === _iCurColor){

                    //SAME COLOR 
                    aEvaluatedCards.push({oCard: oCard, iValue: 3});
                }else if(oCard.getRank() === _oCurWasteCard.getRank()){
                    //SAME RANK
                    aEvaluatedCards.push({oCard: oCard, iValue: 2});
                }
            }else {
                //SPECIAL
                if(oCard.getSuit() === _iCurColor){
                    //SAME COLOR 
                    aEvaluatedCards.push({oCard: oCard, iValue: 5});
                }else if(oCard.getRank() === _oCurWasteCard.getRank()){
                    //SAME RANK
                    aEvaluatedCards.push({oCard: oCard, iValue: 4});
                }

                if(oCard.getRank() === 13){
                    aEvaluatedCards.push({oCard: oCard, iValue: 1});
                }
                if(oCard.getRank() === 14){
                    aEvaluatedCards.push({oCard: oCard, iValue: 6});
                }
            }
        }

        //console.log(aEvaluatedCards)

        var oBestCard = this._findBestCard(aEvaluatedCards);
        
        return oBestCard;
        
    };
    
    this._evaluateCardsHard = function(aCardsList){
        var aPlayableCards = this._filterPlayableCards(aCardsList);

        //console.log(aPlayableCards)
        //this._debugCards(aPlayableCards)

        var aEvaluatedCards = new Array();
        for(var i=0; i<aPlayableCards.length; i++){
            var oCard = aPlayableCards[i];

            if(oCard.getRank() < 10){
                //console.log(oCard.getSuit())
                //NOT SPECIAL
                if(oCard.getSuit() === _iCurColor){

                    //SAME COLOR 
                    aEvaluatedCards.push({oCard: oCard, iValue: 6 + oCard.getRank()});
                }else if(oCard.getRank() === _oCurWasteCard.getRank()){
                    //SAME RANK
                    aEvaluatedCards.push({oCard: oCard, iValue: 5});
                }
            }else {
                //SPECIAL
                if(oCard.getSuit() === _iCurColor){
                    //SAME COLOR 
                    aEvaluatedCards.push({oCard: oCard, iValue: 4});
                }else if(oCard.getRank() === _oCurWasteCard.getRank()){
                    //SAME RANK
                    aEvaluatedCards.push({oCard: oCard, iValue: 3});
                }

                if(oCard.getRank() === 13){
                    aEvaluatedCards.push({oCard: oCard, iValue: 2});
                }
                if(oCard.getRank() === 14){
                    aEvaluatedCards.push({oCard: oCard, iValue: 1});
                }
            }
        }

        if(this._isPlayerClosing()){
            ///PLAY AGGRESSIVE
            for(var i=0; i<aEvaluatedCards.length; i++){
                var oCard = aEvaluatedCards[i].oCard;
                if(oCard.getRank() === 14){
                    aEvaluatedCards[i].iValue = 100;
                }
                if(oCard.getRank() === 13){
                    aEvaluatedCards[i].iValue = 90;
                }
                if(oCard.getRank() === 12){
                    aEvaluatedCards[i].iValue = 80;
                }
                if(oCard.getRank() === 11){
                    aEvaluatedCards[i].iValue = 70;
                }
                if(oCard.getRank() === 10){
                    aEvaluatedCards[i].iValue = 60;
                }
            }
        }
        var oBestCard = this._findBestCard(aEvaluatedCards);
        
        return oBestCard;
        
    };
    
    /*
    this._evaluateBestCardEasy_old = function(aCardsList){
        var oBestCard = null;
        
        var aEvaluatedCards = new Array();
        
        /////EVALUATE NORMAL CARDS FIRST
        var aNormalCards = this._getNormalCards(aCardsList);
        
        //console.log("NORMAL CARDS:");
        //this._debugCards(aNormalCards);
        
        /////EVALUATE SAME COLOR FROM NORMAL CARDS
        aEvaluatedCards = this._getSameColorCards(aNormalCards, _iCurColor);
        
        //console.log("SAME COLOR CARDS:");
        //this._debugCards(aSameColorCards);
        
        ///IF NO CARDS FOUND, CHECK SAME RANK CARDS
        if(aEvaluatedCards.length===0){
            aEvaluatedCards = this._getSameRankCards(aCardsList, _oCurWasteCard.getRank());
        }
        
        ////IF THERE ARE NO MORE NORMAL CARDS, CHECK SPECIALS
        if(aEvaluatedCards.length===0){
            //+2
            aEvaluatedCards = this._getSameColorCards(aCardsList, _iCurColor);
        }
        
        if(aEvaluatedCards.length===0){
            //WILD COLOR
            aEvaluatedCards = this._getSameRankCards(aCardsList, 13);
        }
        
        if(aEvaluatedCards.length===0){
            //WILD FOUR
            aEvaluatedCards = this._getSameRankCards(aCardsList, 14);
        }
        
        if(aEvaluatedCards.length>0){
            var iRandomCard = Math.floor( Math.random()*aEvaluatedCards.length );
            oBestCard = aEvaluatedCards[iRandomCard];
        }
        
        
        return oBestCard;
    };
    
    this._evaluateStackCard = function(aCardsList, iStackModeType){
        ////CHECK BEST COLOR TO PLAY, PLAY +2 ACCORDING WITH YOUR MAJORITY OF CARDS COLOR
        _iAIColorDominance = this._calculateColorDominance(aCardsList);
            
        ////DEPENDING ON THE DIFFICULTY, CHOOSE IF RESPOND WITH MORE +2 CARDS IN STACK
        var aBestCards = new Array();
        for(var i=0; i<aCardsList.length; i++){
            var oCard = aCardsList[i];
            var iRank = oCard.getRank();

            if(iStackModeType === STACK_DRAW2_MODE){
                var iValue = 1;
                if(oCard.getSuit() === _iAIColorDominance){
                    iValue = 2;
                }
                if(iRank === 12){
                    aBestCards.push({oCard: oCard, iValue: iValue});
                }
            }else {
                if(iRank === 14){
                    aBestCards.push({oCard: oCard, iValue: 1});
                }
            }
            
        }
        
        var oBestCard = this._findBestCard(aBestCards);
        
        return oBestCard;
    };
    */
    this._isPlayerClosing = function(){
        var iNextPlayer = s_oGame.getNextPlayerToPlay();
        var aPlayerCardsList = s_oGame.getPlayersHand(0).getAllCards();
        
        var bClosing = false;
        if(iNextPlayer === 0 && aPlayerCardsList.length <= PLAYER_NUM_CARDS_WARNING){
            bClosing = true;
        }
        
        return bClosing;
    };
   
    this._getNormalCards = function(aCardsList){
        var aEvaluatedCards = new Array();
        for (var i=0;i<aCardsList.length;i++){
            var oCard = aCardsList[i];

            if(oCard.getRank()<10){
                aEvaluatedCards.push(oCard);
            }
        }
        
        return aEvaluatedCards;
    };
    
    this._getSameColorCards = function(aCardsList, iColor){
        var aEvaluatedCards = new Array();
        for (var i=0;i<aCardsList.length;i++){
            var oCard = aCardsList[i];
            
            if(oCard.getSuit() === iColor){
                aEvaluatedCards.push(oCard);
            }
        }
        
        return aEvaluatedCards;
    };

    this._getSameRankCards = function(aCardsList, iRank){
        var aEvaluatedCards = new Array();
        for (var i=0;i<aCardsList.length;i++){
            var oCard = aCardsList[i];

            if(oCard.getRank() === iRank){
                aEvaluatedCards.push(oCard);
            }
        }
        
        return aEvaluatedCards;
    };

    this._findBestCard = function(aBestCards){
        var oBestCard;
        if (aBestCards.length===0){
            oBestCard = null;
        }else {
            aBestCards.sort(function(a,b){
                return parseFloat(b.iValue) - parseFloat(a.iValue);
            });
            
            var iBestValue = aBestCards[0].iValue;
            
            var aCards = this._getAllCardsByValue(aBestCards, iBestValue);
            
            //this._debugCards(aCards);
            
            //oBestCard = aBestCards[0].oCard;
            var iRandomIndex = Math.floor( Math.random()*aCards.length);
            oBestCard = aCards[iRandomIndex];
        }
        
        return oBestCard;
    };

    this._getAllCardsByValue = function(aCardsInfo, iValue){
        var aSameValueCard = new Array();
        for(var i=0; i<aCardsInfo.length; i++){
            if(aCardsInfo[i].iValue === iValue){
                aSameValueCard.push( aCardsInfo[i].oCard );
            }
        }
        
        return aSameValueCard;
    };

    this._filterPlayableCards = function(aCardsList){
        
        var aEvaluatedCards = new Array();
        if(_iStackModeType === STACK_DRAW2_MODE){
            aEvaluatedCards = this._getSameRankCards(aCardsList, 12);
        }else if(_iStackModeType === STACK_DRAW4_MODE){
            aEvaluatedCards = this._getSameRankCards(aCardsList, 14);
        }else {
            for (var i=0;i<aCardsList.length;i++){
                var oCard = aCardsList[i];

                if(oCard.getSuit() === _iCurColor){
                    aEvaluatedCards.push(oCard);
                }else if(oCard.getRank() === _oCurWasteCard.getRank()){
                    aEvaluatedCards.push(oCard);
                } else if(oCard.getRank() === 13){
                    aEvaluatedCards.push(oCard);
                } else if(oCard.getRank() === 14 && s_bSpecialMode){
                    aEvaluatedCards.push(oCard);
                }
            }
            
            if(aEvaluatedCards.length === 0 && !s_bSpecialMode){
                aEvaluatedCards = this._getSameRankCards(aCardsList, 14);
            }
        }
        
        return aEvaluatedCards;
    };

    this._debugCards = function(aCardsList){
        for (var i=0;i<aCardsList.length;i++){
            var oCard = aCardsList[i];
            console.log(i + " Card---> rank:"+oCard.getRank() + " suit:" +oCard.getSuit() );
        }
    };

    _oParent = this;
    this._init();
}


