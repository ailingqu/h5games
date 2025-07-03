function CSelectPlayers(){
    var _aButNumPlayer;
    var _aButDifficulty;
    
    var _oButP2;
    var _oButP3;
    var _oButP4;
    var _oButSpecial;
    var _oButNext;
    var _oSpecialText;
    

    var _pStartPosButP2;
    var _pStartPosButP3;
    var _pStartPosButP4;
    var _pStartPosButSpecial;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    var _pStartPosNext;
    var _pStartPosExit;
    
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _oAudioToggle;
    var _oButExit;
    
    this._init = function(){
        var oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_select_players"));
        s_oStage.addChild(oBg);

        var iTextX = CANVAS_WIDTH/2;
        var iTextY = 200;
        var iWidth = 800;
        var iHeight = 150;
        var oTitle = new CTLText(s_oStage, 
                    iTextX -iWidth/2, iTextY - iHeight/2, iWidth, iHeight, 
                    50, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_LABEL_SINGLE,
                    true, true, true,
                    false );

        var iGeneralScale = 0.75;
        var iGeneralY = CANVAS_HEIGHT/2 - 50;

        var oNumContainer = new createjs.Container();
        oNumContainer.x = CANVAS_WIDTH/2-350;
        oNumContainer.y = iGeneralY;
        oNumContainer.scale = iGeneralScale;
        s_oStage.addChild(oNumContainer);

        var iTextX = 0;
        var iTextY = -170;
        var iWidth = 800;
        var iHeight = 150;
        var oSelectPlayerText = new CTLText(oNumContainer, 
                    iTextX -iWidth/2, iTextY - iHeight/2, iWidth, iHeight, 
                    50, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_SELECT_PLAYERS,
                    true, true, true,
                    false );

        _aButNumPlayer = new Array();
        
        var oSpriteP2 = s_oSpriteLibrary.getSprite('but_p2');
        _pStartPosButP2 = {x: -250, y: 0};            
        _oButP2 = new CToggle(_pStartPosButP2.x,_pStartPosButP2.y,oSpriteP2, false, oNumContainer);
        _oButP2.addEventListener(ON_MOUSE_UP, this.setNumPlayers, this, 2);
        _aButNumPlayer.push(_oButP2);
        
        var oSpriteP3 = s_oSpriteLibrary.getSprite('but_p3');
        _pStartPosButP3 = {x: 0, y: 0};            
        _oButP3 = new CToggle(_pStartPosButP3.x,_pStartPosButP3.y,oSpriteP3,  false, oNumContainer);
        _oButP3.addEventListener(ON_MOUSE_UP, this.setNumPlayers, this, 3);
        _aButNumPlayer.push(_oButP3);
        
        var oSpriteP4 = s_oSpriteLibrary.getSprite('but_p4');
        _pStartPosButP4 = {x: 250, y: 0};                 
        _oButP4 = new CToggle(_pStartPosButP4.x,_pStartPosButP4.y,oSpriteP4,  false, oNumContainer);
        _oButP4.addEventListener(ON_MOUSE_UP, this.setNumPlayers, this, 4);
        _aButNumPlayer.push(_oButP4);

        this.setNumPlayers(s_iNumPlayersSingleMode);

        var oDiffContainer = new createjs.Container();
        oDiffContainer.x = CANVAS_WIDTH/2+350;
        oDiffContainer.y = iGeneralY;
        oDiffContainer.scale = iGeneralScale;
        s_oStage.addChild(oDiffContainer);

        var iTextX = 0;
        var iTextY = -170;
        var iWidth = 800;
        var iHeight = 150;
        var oSelectDifficultyText = new CTLText(oDiffContainer, 
                    iTextX -iWidth/2, iTextY - iHeight/2, iWidth, iHeight, 
                    50, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_SELECT_DIFFICULTY,
                    true, true, true,
                    false );

        _aButDifficulty = new Array();
        
        var oSprite = s_oSpriteLibrary.getSprite('but_easy');       
        var oEasy = new CToggle(-250,0,oSprite, false, oDiffContainer);
        oEasy.addEventListener(ON_MOUSE_UP, this.setDifficulty, this, MODE_EASY);
        _aButDifficulty.push(oEasy);
        
        var oSprite = s_oSpriteLibrary.getSprite('but_medium');        
        var oMedium = new CToggle(0,0,oSprite,  false, oDiffContainer);
        oMedium.addEventListener(ON_MOUSE_UP, this.setDifficulty, this, MODE_MEDIUM);
        _aButDifficulty.push(oMedium);
        
        var oSprite = s_oSpriteLibrary.getSprite('but_hard');                
        var oHard = new CToggle(250, 0,oSprite,  false, oDiffContainer);
        oHard.addEventListener(ON_MOUSE_UP, this.setDifficulty, this, MODE_HARD);
        _aButDifficulty.push(oHard);

        this.setDifficulty(s_iDifficulty);

        var iTextX = 310;
        var iTextY = CANVAS_HEIGHT/2 + 160;
        var iWidth = 300;
        var iHeight = 70;
        _oSpecialText = new CTLText(s_oStage, 
                    iTextX , iTextY - iHeight/2, iWidth, iHeight, 
                    30, "left", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_SPECIAL_MODE,
                    true, true, false,
                    false );
        
        var iTextX = iTextX + iWidth;
        var iWidth = 800;
        var oSpecialTextDesc = new CTLText(s_oStage, 
                    iTextX , iTextY - iHeight/2, iWidth, iHeight, 
                    30, "left", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_SPECIAL_INFO,
                    true, true, false,
                    false );
        
        var oSprite = s_oSpriteLibrary.getSprite('but_special_mode');
        _pStartPosButSpecial = {x: iTextX + iWidth + 100, y: iTextY};            
        _oButSpecial = new CToggle(_pStartPosButSpecial.x,_pStartPosButSpecial.y,oSprite,  s_bSpecialMode, s_oStage);
        _oButSpecial.addEventListener(ON_MOUSE_UP, this.setSpecialMode, this);
        _oButSpecial.setScalable(false);


       
        
        var oSprite = s_oSpriteLibrary.getSprite('but_goto_game');
        _pStartPosNext = {x: CANVAS_WIDTH/2, y: CANVAS_HEIGHT/2 +320};            
        _oButNext = new CGfxButton(_pStartPosNext.x,_pStartPosNext.y,oSprite, s_oStage);
        _oButNext.addEventListener(ON_MOUSE_UP, this._onButNext, this);    
        _oButNext.setLabel(0, -10, TEXT_START_GAME, 30, 280, 40);

        var oSprite = s_oSpriteLibrary.getSprite('but_back');
        _pStartPosExit = {x: (oSprite.width/2)+ 10, y: (oSprite.height/2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite,s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        _oButExit.setLabel(20, -2, TEXT_LABEL_BACK, 20, 70, 30);
        
        
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            
            var oExitX = CANVAS_WIDTH - (oSprite.height/2) - 10;
            _pStartPosAudio = {x: oExitX, y: (oSprite.height/2) + 10};
        
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive, s_oStage);
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
            _pStartPosFullscreen = {x:oSprite.width/4 +10,y:(oSprite.height/2)+10};
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreen,this);
        }
        
        this.refreshButtonPos();
    };
    
    this._onButP2 = function (){
        NUM_PLAYERS = 2;
        this.unload();
        $(s_oMain).trigger("select_players",2);
        s_oMain.gotoGame();
    };

    this._onButP3 = function (){
        NUM_PLAYERS = 3;
        this.unload();
        $(s_oMain).trigger("select_players",3);
        s_oMain.gotoGame();
    };

    this._onButP4 = function (){
        NUM_PLAYERS = 4;
        this.unload();
        $(s_oMain).trigger("select_players",4);
        s_oMain.gotoGame();
    };

    this.setNumPlayers = function(iNum){
        s_iNumPlayersSingleMode = iNum;
        
        for(var i=0; i<_aButNumPlayer.length; i++){
            _aButNumPlayer[i].setActive(false);
        }
        
        var iNewIndex = iNum-2;

        _aButNumPlayer[iNewIndex].setActive(true);
    };
    
    this.setDifficulty = function(iDiff){
        s_iDifficulty = iDiff;
        
        for(var i=0; i<_aButDifficulty.length; i++){
            _aButDifficulty[i].setActive(false);
        }
        
        _aButDifficulty[iDiff].setActive(true);
    };
    
    this.setSpecialMode = function(){
        s_bSpecialMode = !s_bSpecialMode;
        
        //_oSpecialText.setVisible(s_bSpecialMode);

    };

    this._onButNext = function(){
        NUM_PLAYERS = s_iNumPlayersSingleMode;
        
        this.unload();
        $(s_oMain).trigger("select_players",s_iNumPlayersSingleMode);
        s_oMain.gotoGame();
    };

    this.unload = function (){
        _oButExit.unload();
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }
        
        _oButP2.unload();
        _oButP3.unload();
        _oButP4.unload();
        
        for(var i=0; i<_aButDifficulty.length; i++){
            _aButDifficulty[i].unload();
        }
        
        _oButSpecial.unload();
        _oButNext.unload();
        
        s_oStage.removeAllChildren();
        
        s_oSelectPlayers = null;
    };
    
    this.refreshButtonPos = function(){
        _oButExit.setPosition(_pStartPosExit.x + s_iOffsetX,s_iOffsetY + _pStartPosExit.y);
       if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX,s_iOffsetY + _pStartPosAudio.y);
        } 
        
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }
        
        /*
        var iX = _pStartPosButSpecial.x + s_iOffsetX;
        var iY = _pStartPosButSpecial.y - s_iOffsetY;
        _oButSpecial.setPosition(iX, iY);
        _oSpecialText.setPos(iX + 130, iY-75);
        
        _oButNext.setPosition(_pStartPosNext.x - s_iOffsetX, _pStartPosNext.y - s_iOffsetY)*/
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
    
    this._onExit = function(){
        this.unload();
        s_oMain.gotoMenu();
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    s_oSelectPlayers = this;
    this._init();
};


var s_oSelectPlayers = null;