function CMenu(){
    var _oBg;
    var _oButPlay;
    var _oFade;
    var _oAudioToggle;
    var _oCreditsBut;
    var _oTutorialBut;
    
    var _pStartPosCredits;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    var _pStartPosTutorial;
    
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;    
    
    var _oButLocal;
    var _oButMultiplayer;
    var _iIdTimeout;
    
    var _oLogo;
    
    this._init = function(){
        //console.clear();
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);
        
        var oSprite = s_oSpriteLibrary.getSprite('logo');
        _oLogo = createBitmap(oSprite);
        _oLogo.regX = oSprite.width/2;
        _oLogo.regY = oSprite.height/2;
        _oLogo.x = CANVAS_WIDTH/2-300;
        _oLogo.y = CANVAS_HEIGHT/2;
        s_oStage.addChild(_oLogo);
       
        var pStartPosButLocal = {x: (CANVAS_WIDTH/2) + 400, y: CANVAS_HEIGHT/2 -100};
        var oSprite = s_oSpriteLibrary.getSprite('local_but');
        _oButLocal = new CGfxButton(pStartPosButLocal.x,pStartPosButLocal.y,oSprite, s_oStage);
        _oButLocal.addEventListener(ON_MOUSE_UP, this._onButLocalRelease, this);
        //_oButLocal.setMouseOverMsg(0, 120, TEXT_HOVER_SINGLE, 60);
        _oButLocal.setLabel(50, -10, TEXT_LABEL_SINGLE, 40, 200, 80);
        
        var pStartPosButMulti = {x: (CANVAS_WIDTH/2) + 400, y: CANVAS_HEIGHT/2 +100};
        var oSprite = s_oSpriteLibrary.getSprite('multiplayer_but');
        _oButMultiplayer = new CGfxButton(pStartPosButMulti.x,pStartPosButMulti.y,oSprite, s_oStage);
        _oButMultiplayer.addEventListener(ON_MOUSE_UP, this._onButMultiplayerRelease, this);
        //_oButMultiplayer.setMouseOverMsg(0, 120, TEXT_HOVER_MULTI, 60);
        _oButMultiplayer.setLabel(50, -10, TEXT_LABEL_MULTI, 40, 200, 80);
     
        var oSprite = s_oSpriteLibrary.getSprite('but_tutorial');
        _pStartPosTutorial = {x:pStartPosButMulti.x,y:pStartPosButMulti.y+200};         
        _oTutorialBut = new CGfxButton(_pStartPosTutorial.x,_pStartPosTutorial.y,oSprite, s_oStage);
        _oTutorialBut.addEventListener(ON_MOUSE_UP, this._onTutorialBut, this);
        //_oTutorialBut.setMouseOverMsg(0, 70, TEXT_TUTORIAL, 40);
        _oTutorialBut.setLabel(0, -10, TEXT_LABEL_TUTORIAL, 36, 220, 80);
     
        
     
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10};            
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);          
        }

        var oSprite = s_oSpriteLibrary.getSprite('but_info');
        _pStartPosCredits = {x:_pStartPosAudio.x -oSprite.width - 10,y:(oSprite.height/2)+10};         
        _oCreditsBut = new CGfxButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -240,oSprite, s_oStage);
        _oCreditsBut.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled){
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen");
            _pStartPosFullscreen = {x: _pStartPosCredits.x + oSprite.width/2 + 10, y: _pStartPosCredits.y};   
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreen,this);
        }

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0}, 1000).call(function(){_oFade.visible = false;});  
        
        if(s_oSoundtrack !== null){
            setVolume("soundtrack",1);
        }
        
        this.refreshButtonPos();


        //this.checkPendingInvitation();
        
        
        //s_oCrazyApiManager.showBanner(); 
        
        /*
        NUM_PLAYERS = s_iNumPlayersSingleMode;
        this.unload();
        s_oMain.gotoGame();
        */
    };
    
    this.unload = function(){
        _oButLocal.unload();
        _oButMultiplayer.unload();
        
        _oFade.visible = false;
        
        _oCreditsBut.unload();
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }
        
        s_oStage.removeAllChildren();

        s_oMenu = null;
    };
    
    this.refreshButtonPos = function(){
        _oCreditsBut.setPosition(_pStartPosCredits.x - s_iOffsetX,s_iOffsetY + _pStartPosCredits.y);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX,s_iOffsetY + _pStartPosAudio.y);
        } 
        
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }
        
        //_oTutorialBut.setPosition(_pStartPosTutorial.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        
        s_oNetworkManager.refreshListHeight();
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
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onCreditsBut = function(){
        new CCreditsPanel();
    };
    
    this.checkPendingInvitation = function(){
        var szRoomID = getParameterByName(PARAM_ROOM_ID);
        var szPass = getParameterByName(PARAM_ROOM_PASS);

        if(szRoomID !== undefined && szRoomID !== null){
            s_oNetworkManager.addEventListener(ON_LOGIN_SUCCESS, function(){
                s_oNetworkManager.tryJoinFromInvitation(szRoomID.toString(), szPass.toString());
            });
            s_oNetworkManager.connectToSystem();
        }
    };
    
    this._onTutorialBut = function(){
        s_oMenu.unload();
        
        s_oMain.gotoGameTutorial();
    };
    
    this._onButLocalRelease = function(){
        s_bMultiplayer = false;
        s_bPlayWithBot = false;
        
        s_oMenu.unload();

        $(s_oMain).trigger("start_session");
        s_oMain.gotoSelectPlayers();
        
    };

    this._onButMultiplayerRelease = function(){
        $(s_oMain).trigger("start_session");
        
        s_bMultiplayer = true;
        s_bPlayWithBot = false;

        s_oNetworkManager.addEventListener(ON_MATCHMAKING_CONNECTION_SUCCESS, this._onMatchmakingConnected);
        s_oNetworkManager.addEventListener(ON_GAMEROOM_CONNECTION_SUCCESS, this.clearBotCheck);
        s_oNetworkManager.addEventListener(ON_BACK_FROM_A_ROOM, this.clearBotCheck);
        s_oNetworkManager.addEventListener(ON_LOGIN_SUCCESS, s_oNetworkManager.gotoLobby);
        s_oNetworkManager.connectToSystem();
    };

    this.onRemoteGameStart = function(iNumPlayers){
        s_oMenu.clearBotCheck();
        
        s_bMultiplayer = true;
        s_bPlayWithBot = false;
        
        s_oMenu.unload();
        s_oMain.gotoGameMulti(iNumPlayers);
    };

    this._onMatchmakingConnected = function(){
        //s_oMenu._checkMatchWithBot();
    };

    this._checkMatchWithBot = function(){
        var iTime = randomFloatBetween(18000, 26000);
        _iIdTimeout = setTimeout(function(){
            s_bMultiplayer = true;
            s_bPlayWithBot = true;
            
            
            g_oCTLMultiplayer.closeAllDialog();
            
            s_oNetworkManager.disconnect();
            
            s_oNetworkManager.generateRandomName();
            
            s_oMenu.unload();
            s_oMain.gotoGameWithBot();
        }, iTime);
    };
    
    this.clearBotCheck = function(){
        clearTimeout(_iIdTimeout);
    };
    
    s_oMenu = this;
    
    this._init();
}

var s_oMenu = null;