function CCreditsPanel(){
    
    var _oFade;
    var _oPanelContainer;
    var _oButExit;

    var _pStartPanelPos;
    
    this._init = function(){
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown",function(){});
        s_oStage.addChild(_oFade);
        
        new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        
        _oPanelContainer = new createjs.Container();        
        s_oStage.addChild(_oPanelContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(oPanel);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;  
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2 - 40},500, createjs.Ease.quartIn);

        var oDeveloped = new createjs.Text(TEXT_DEVELOPED,"30px "+PRIMARY_FONT, "#ffffff");
        oDeveloped.y = -oSprite.height/2 + 80;
        oDeveloped.textAlign = "center";
        oDeveloped.textBaseline = "middle";
        oDeveloped.lineWidth = 300;
        _oPanelContainer.addChild(oDeveloped);

        var oSprite = s_oSpriteLibrary.getSprite('ctl_logo');
        var oLogoCTL = createBitmap(oSprite);
        //oLogoCTL.on("click",this._onLogoButRelease);
        oLogoCTL.regX = oSprite.width/2;
        oLogoCTL.regY = oSprite.height/2;
        oLogoCTL.y = -100;
        _oPanelContainer.addChild(oLogoCTL);
        
        var oVer = new createjs.Text("ver1.03","18px "+PRIMARY_FONT, "#ffffff");
        oVer.x = -370;
        oVer.y = 230;
        oVer.textAlign = "left";
        oVer.textBaseline = "middle";
        oVer.lineWidth = 500;
        _oPanelContainer.addChild(oVer);

        var oBrought = new createjs.Text(TEXT_BROUGHT,"30px "+PRIMARY_FONT, "#ffffff");
        oBrought.y = 30;
        oBrought.textAlign = "center";
        oBrought.textBaseline = "middle";
        oBrought.lineWidth = 500;
        _oPanelContainer.addChild(oBrought);
        
        var oSprite = s_oSpriteLibrary.getSprite('cg_logo');
        var oLogoCG = createBitmap(oSprite);
        //oLogoCG.on("click",this._onLogoButRelease);
        oLogoCG.regX = oSprite.width/2;
        oLogoCG.regY = oSprite.height/2;
        oLogoCG.y = 120;
        _oPanelContainer.addChild(oLogoCG);
      
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _oButExit = new CGfxButton(340, -202, oSprite, _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);
        
    };
    
    this.unload = function(){
        
        _oButExit.setClickable(false);
        
        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            s_oStage.removeChild(_oFade);
            s_oStage.removeChild(_oPanelContainer);

            _oButExit.unload();
        }); 
        
        _oFade.off("mousedown",function(){});
        //_oLogo.off("mousedown",this._onLogoButRelease);
        
        
    };
    
    this._onLogoButRelease = function(){
        window.open("http://www.codethislab.com/index.php?&l=en");
    };
    
    this._init();
    
    
};


