function CDrawCounter(){
    var _oContainer;
    var _oTextCounter;
    
    this._init = function(){
        _oContainer = new createjs.Container();
        _oContainer.x = (CANVAS_WIDTH/2)-222;
        _oContainer.y = (CANVAS_HEIGHT/2)-60;
        s_oStage.addChild(_oContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('icon_draw_counter');
        var oBg = createBitmap(oSprite);
        oBg.regX = oSprite.width/2;
        oBg.regY = oSprite.height/2;
        _oContainer.addChild(oBg);
        
        var iX = -4;
        var iY = 0;
        var iWidth = oSprite.width-40;
        var iHeight = oSprite.height-40;
        _oTextCounter = new CTLText(_oContainer, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    40, "center", "#fff", PRIMARY_FONT, 1,
                    2, 2,
                    "+0",
                    true, true, false,
                    false );
    };
    
    this.unload = function(){
        s_oStage.removeChild(_oContainer);
    };
    
    this.hide = function(){
        _oContainer.visible = false;
    };
    
    this.show = function(iNumCards){
        /*
        _oContainer.visible = true;
        _oTextCounter.refreshText(sprintf("+%s", iNumCards));
         *
         */
    };
    
    this._init();
    
}
