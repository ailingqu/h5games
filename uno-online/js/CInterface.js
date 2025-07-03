function CInterface(){
    var _oAudioToggle;
    var _oButExit;
    var _oButFullscreen;
    var _pStartPosColor;
    var _oColorSprite;
    
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    
    
    var _oContainer;
    
    var _oButRestart;
    var _pStartPosRestart;
    var _oSpecialIcon;
    
    this._init = function(){      
        
        _oContainer = new createjs.Container();
        var oExitX;        

        var oSprite = s_oSpriteLibrary.getSprite('but_quit');
        _pStartPosExit = {x: (oSprite.width/2)+ 10, y: (oSprite.height/2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite,s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        _oButExit.setLabel(20, -2, TEXT_QUIT, 20, 70, 30);
       
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            
            var oExitX = CANVAS_WIDTH - (oSprite.height/2) - 10;
            _pStartPosAudio = {x: oExitX, y: (oSprite.height/2) + 10};
            
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive, _oContainer);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);          
        }
       
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled){
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {x:oSprite.width/4 + 10,y:(oSprite.height/2)+10};
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,_oContainer);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreen,this);
        }
        

        var oSprite = s_oSpriteLibrary.getSprite('colors');
        var oData = {   
                        images: [oSprite], 
                        frames: {width: 103, height: 102,regX:103/2,regY:102/2}, 
                        animations: {  red: [0],green: [1],blue: [2],yellow: [3]}
                        
        };

        var _oSpriteSheetColors = new createjs.SpriteSheet(oData);
        _pStartPosColor = {x:(CANVAS_WIDTH/2)+220,y:(CANVAS_HEIGHT/2)-60};
        _oColorSprite = new createjs.Sprite(_oSpriteSheetColors,0);
        _oColorSprite.stop();
        _oColorSprite.x = _pStartPosColor.x;
        _oColorSprite.y = _pStartPosColor.y;
        
        if(s_bSpecialMode){
            var oSprite = s_oSpriteLibrary.getSprite('icon_special_mode');
            _oSpecialIcon = createBitmap(oSprite);
            _oSpecialIcon.regX = oSprite.width/2;
            _oSpecialIcon.regY = oSprite.height/2;
            _oSpecialIcon.x = (CANVAS_WIDTH/2)-220;
            _oSpecialIcon.y = (CANVAS_HEIGHT/2)-60;
            s_oStage.addChild(_oSpecialIcon); 
        }
        
        s_oStage.addChild(_oContainer);
        this.refreshButtonPos();
    };
    
    this.refreshColor = function(n){
        _oColorSprite.gotoAndStop(n);
        s_oStage.addChildAt(_oColorSprite,1);
    };
    
    
    
    this.unload = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        _oButExit.unload();

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }        

        s_oInterface = null;
    };
    
    this.refreshButtonPos = function(){
        _oButExit.setPosition(_pStartPosExit.x + s_iOffsetX,s_iOffsetY + _pStartPosExit.y);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX,s_iOffsetY + _pStartPosAudio.y);
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }
        
        if(s_oGame){
            s_oGame.refreshGUI();   
        }
        
    };
    
    this.disableSpecialIcon = function(){
        _oSpecialIcon.visible = false;
    };
    
    this.setOnTop = function(){
        s_oStage.addChildAt(_oContainer,s_oStage.numChildren); 
    }; 
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onExit = function(){
        new CAreYouSurePanel(s_oGame.onExit);
    };
    
    this._onRestart = function(){
        s_oGame.restart();
    };

    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.isEnabled){
		_oButFullscreen.setActive(s_bFullscreen);
	}
    };

    this._onFullscreen = function(){
        if(s_bFullscreen) { 
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };
    
    s_oInterface = this;
    
    this._init();
    
    return this;
}

var s_oInterface = null;