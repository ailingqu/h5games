function CTutorialPanel(){

    var _oContainer;
    var _oContentContainer;
    var _oFade;
    var _oMsg;
    var _oFinger;
    
    this._init = function(){
        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);
        
        _oContentContainer = new createjs.Container();
        _oContentContainer.x = 790;
        _oContentContainer.y = 840;
        _oContainer.addChild(_oContentContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite("finger");
        var iWidth = oSprite.width/5;
        var iHeight = oSprite.height/2;
        var oData = {
            images: [oSprite],
            frames: {width: iWidth, height: iHeight, regX: iWidth/2, regY: iHeight/2},
            animations: {idle: {frames: [0,1,2,3,4,5,6,7,8,9], speed: 0.9}}
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        
        _oFinger = createSprite(oSpriteSheet,"idle", iWidth/2, iHeight/2, iWidth, iHeight);
        _oFinger.scaleX = 0.5;
        _oFinger.scaleY = 0.5;
        _oFinger.x = 0;
        _oFinger.y = 0;
        _oContentContainer.addChild(_oFinger);
        
        var iWidth = 500;
        var iHeight = 200;
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(-iWidth/2,-iHeight/2,iWidth,iHeight);
        _oFade.alpha = 0.9;
        //_oFade.on("mousedown",function(){});
        _oFade.y = _oFinger.y -iHeight;
        _oContentContainer.addChild(_oFade);
        

        var iX = 0;
        var iY = _oFade.y;
        _oMsg = new CTLText(_oContentContainer, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    60, "center", "#fff", PRIMARY_FONT, 1.2,
                    20, 20,
                    TEXT_TUT_0,
                    true, true, true,
                    false );
                    
        //this.showTut2();
    };
    
    this.unload = function(){
        s_oStage.removeChild(_oContainer);
    };
    
    this.hide = function(){
        _oContentContainer.visible = false;
    };
    
    this.showNextTut = function(iCurTutStep){
        switch(iCurTutStep){
            case 1:{
                    this.showTut1();
                    break;
            }
            case 2:{
                    this.showTut2();
                    break;
            }
            case 3:{
                    this.showTutExtra1();
                    break;
            }
            case 4:{
                    this.showTutExtra2();
                    break;
            }
            case 5:{
                    this.showTut3();
                    break;
            }
            case 6:{
                    this.showTut4();
                    break;
            }
            case 7:{
                    this.showTut5();
                    break;
            }
            case 8:{
                    this.showTut6();
                    break;
            }
            case 9:{
                    this.showTut7();
                    break;
            }
        }
    };
    
    this.showTut1 = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = 1020;
        
        _oMsg.refreshText(TEXT_TUT_1);
    };
    
    this.showTut2 = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = 860;
        _oContentContainer.y = 470;

        _oMsg.refreshText(TEXT_TUT_2);
    };
    
    this.showTutExtra1 = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = (CANVAS_WIDTH/2)+200;
        _oContentContainer.y = (CANVAS_HEIGHT/2)+10;

        _oMsg.refreshText(TUT_EXTRA_1);
    };
    
    this.showTutExtra2 = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = 860;
        _oContentContainer.y = 470;

        _oMsg.refreshText(TUT_EXTRA_2);
    };
    
    this.showTut3 = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = 1060;
        _oContentContainer.y = 840;

        _oMsg.refreshText(sprintf(TEXT_TUT_3, CARD_SCORE[11]));
    };
    
    this.showTut4 = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = 1020;
        _oContentContainer.y = 840;

        _oMsg.refreshText(sprintf(TEXT_TUT_4, CARD_SCORE[10]));
    };
    
    this.showTut5 = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = 1020;
        _oContentContainer.y = 840;

        _oMsg.refreshText(sprintf(TEXT_TUT_5, CARD_SCORE[12]));
    };
    
    this.showTut6 = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = 1020;
        _oContentContainer.y = 840;

        _oMsg.refreshText(sprintf(TEXT_TUT_6, CARD_SCORE[13]));
    };
    
    this.showTut7 = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = 980;
        _oContentContainer.y = 840;

        _oMsg.refreshText(sprintf(TEXT_TUT_7, CARD_SCORE[14]));
    };
    
    this.showUnoTut = function(){
        _oContentContainer.visible = true;
        
        _oContentContainer.x = (CANVAS_WIDTH/2)-240;
        _oContentContainer.y = 550;

        _oMsg.refreshText( sprintf(TEXT_TUTORIAL7,NUM_PENALTY_CARDS) );
    };
    
    this._init();
}


