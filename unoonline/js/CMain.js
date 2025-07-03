function CMain(oData){
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;
    
    var _oPreloader;
    var _oMenu;
    var _oHelp;
    var _oGame;
    var _oSelectPlayers;
    
    var _aColors;

    this.initContainer = function(){
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
		s_oStage.preventSelection = true;
        createjs.Touch.enable(s_oStage, true);
		
	s_bMobile = isMobile();

        if(s_bMobile === false){
            s_oStage.enableMouseOver(FPS);  
            $('body').on('contextmenu', '#canvas', function(e){ return false; });
        }
		
        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        
        if(navigator.userAgent.match(/Windows Phone/i)){
                DISABLE_SOUND_MOBILE = true;
        }
        
        s_oSpriteLibrary  = new CSpriteLibrary();

        s_oNetworkManager = new CNetworkManager();

        //ADD PRELOADER
        _oPreloader = new CPreloader();

        s_oCrazyApiManager = new CCrazyApiManager();
        //s_oCrazyApiManager.addEventListener(ON_ADS_STARTED, this.stopUpdate, this);
        //s_oCrazyApiManager.addEventListener(ON_ADS_FINISHED, this.startUpdate, this);
        
    };
    
    this.preloaderReady = function(){
        this._loadImages();
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            this._initSounds();
        }
        
        s_oCrazyApiManager.loadingStart();
        
        _bUpdate = true;
    };
    
    this.soundLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        _oPreloader.refreshLoader(iPerc);
    };
    
    this._initSounds = function(){
        Howler.mute(!s_bAudioActive);

        s_aSoundsInfo = new Array();
        s_aSoundsInfo.push({path: './sounds/',filename:'soundtrack',loop:true,volume:1, ingamename: 'soundtrack'});
        s_aSoundsInfo.push({path: './sounds/',filename:'click',loop:false,volume:1, ingamename: 'click'});
        s_aSoundsInfo.push({path: './sounds/',filename:'game_over',loop:false,volume:1, ingamename: 'game_over'});
        s_aSoundsInfo.push({path: './sounds/',filename:'card_dealing',loop:false,volume:1, ingamename: 'card_dealing'});
        s_aSoundsInfo.push({path: './sounds/',filename:'snap',loop:false,volume:1, ingamename: 'snap'});
        s_aSoundsInfo.push({path: './sounds/',filename:'card',loop:false,volume:1, ingamename: 'card'});
        s_aSoundsInfo.push({path: './sounds/',filename:'special_card',loop:false,volume:1, ingamename: 'special_card'});
        s_aSoundsInfo.push({path: './sounds/',filename:'change_color',loop:false,volume:1, ingamename: 'change_color'});
        s_aSoundsInfo.push({path: './sounds/',filename:'hurryup',loop:false,volume:1, ingamename: 'hurryup'});
        
        RESOURCE_TO_LOAD += s_aSoundsInfo.length;

        s_aSounds = new Array();
        for(var i=0; i<s_aSoundsInfo.length; i++){
            this.tryToLoadSound(s_aSoundsInfo[i], false);
        }
        
    };  
    
    this.tryToLoadSound = function(oSoundInfo, bDelay){
        
       setTimeout(function(){        
            s_aSounds[oSoundInfo.ingamename] = new Howl({ 
                                                            src: [oSoundInfo.path+oSoundInfo.filename+'.mp3'],
                                                            autoplay: false,
                                                            preload: true,
                                                            loop: oSoundInfo.loop, 
                                                            volume: oSoundInfo.volume,
                                                            onload: s_oMain.soundLoaded,
                                                            onloaderror: function(szId,szMsg){
                                                                                for(var i=0; i < s_aSoundsInfo.length; i++){
                                                                                     if ( szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id){
                                                                                         s_oMain.tryToLoadSound(s_aSoundsInfo[i], true);
                                                                                         break;
                                                                                     }
                                                                                }
                                                                        },
                                                            onplayerror: function(szId) {
                                                                for(var i=0; i < s_aSoundsInfo.length; i++){
                                                                                     if ( szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id){
                                                                                          s_aSounds[s_aSoundsInfo[i].ingamename].once('unlock', function() {
                                                                                            s_aSounds[s_aSoundsInfo[i].ingamename].play();
                                                                                            if(s_aSoundsInfo[i].ingamename === "soundtrack" && s_oGame !== null){
                                                                                                setVolume("soundtrack",SOUNDTRACK_VOLUME_IN_GAME);
                                                                                            }
                                                                                          });
                                                                                         break;
                                                                                     }
                                                                                 }
                                                                       
                                                            } 
                                                        });

            
        }, (bDelay ? 200 : 0) );
        
        
    };

    this._loadImages = function(){
        _aColors = ["Red","Green","Blue","Yellow"];
        s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );

        //s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("credits_panel","./sprites/credits_panel.png");
        s_oSpriteLibrary.addSprite("select_color_panel","./sprites/select_color_panel.png");
        s_oSpriteLibrary.addSprite("ctl_logo","./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("cg_logo","./sprites/cg_logo.png");
        s_oSpriteLibrary.addSprite("but_info","./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big","./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("but_exit_big","./sprites/but_exit_big.png");
        s_oSpriteLibrary.addSprite("but_restart","./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home","./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_uno","./sprites/but_uno.png");
        
        s_oSpriteLibrary.addSprite("but_p2","./sprites/but_p2.png");
        s_oSpriteLibrary.addSprite("but_p3","./sprites/but_p3.png");
        s_oSpriteLibrary.addSprite("but_p4","./sprites/but_p4.png");
        s_oSpriteLibrary.addSprite("but_red","./sprites/_oButRed.png");
        s_oSpriteLibrary.addSprite("but_green","./sprites/_oButGreen.png");
        s_oSpriteLibrary.addSprite("but_blue","./sprites/_oButBlue.png");
        s_oSpriteLibrary.addSprite("but_yellow","./sprites/_oButYellow.png");
        
        
        s_oSpriteLibrary.addSprite("stop_turn","./sprites/stop_turn.png");
        
        s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg"); 
        s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_select_players","./sprites/bg_select_players.jpg");
        
        s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen","./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_arrow","./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("but_skip","./sprites/but_skip.png");
        
        
        s_oSpriteLibrary.addSprite("line_player","./sprites/line_players.png");
        s_oSpriteLibrary.addSprite("cards","./sprites/cards.png");
        s_oSpriteLibrary.addSprite("colors","./sprites/colors.png");
        s_oSpriteLibrary.addSprite("draw_four_anim","./sprites/draw_4.png");
        s_oSpriteLibrary.addSprite("draw_two_anim","./sprites/draw_2.png");
        s_oSpriteLibrary.addSprite("stop_turn_anim","./sprites/stop_turn.png");
        s_oSpriteLibrary.addSprite("clock_wise_anim","./sprites/change_clockwise.png");
        s_oSpriteLibrary.addSprite("change_color","./sprites/change_color.png");
        s_oSpriteLibrary.addSprite("cloud_uno","./sprites/cloud.png");
        s_oSpriteLibrary.addSprite("finger","./sprites/finger.png");
        s_oSpriteLibrary.addSprite("shuffle_anim","./sprites/shuffle_anim.png");
        
        s_oSpriteLibrary.addSprite("local_but","./sprites/local_but.png");
        s_oSpriteLibrary.addSprite("multiplayer_but","./sprites/multiplayer_but.png");
        
        s_oSpriteLibrary.addSprite("but_next","./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_show","./sprites/but_show.png");
        s_oSpriteLibrary.addSprite("score_icon","./sprites/score_icon.png");
        s_oSpriteLibrary.addSprite("info_label","./sprites/info_label.png");
        
        s_oSpriteLibrary.addSprite("cup_icon","./sprites/cup_icon.png");
        
        s_oSpriteLibrary.addSprite("but_tutorial","./sprites/but_tutorial.png");
        s_oSpriteLibrary.addSprite("but_special_mode","./sprites/but_special_mode.png");
        
        s_oSpriteLibrary.addSprite("but_easy","./sprites/but_easy.png");
        s_oSpriteLibrary.addSprite("but_medium","./sprites/but_medium.png");
        s_oSpriteLibrary.addSprite("but_hard","./sprites/but_hard.png");
        
        s_oSpriteLibrary.addSprite("but_continue","./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("icon_draw_counter","./sprites/icon_draw_counter.png");
        
        s_oSpriteLibrary.addSprite("icon_special_mode","./sprites/icon_special_mode.png");
        
        s_oSpriteLibrary.addSprite("logo","./sprites/logo.png");
        s_oSpriteLibrary.addSprite("but_goto_game","./sprites/but_goto_game.png");
        s_oSpriteLibrary.addSprite("but_back","./sprites/but_back.png");
        s_oSpriteLibrary.addSprite("but_quit","./sprites/but_quit.png");
        
        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };
    
    this._onImagesLoaded = function(){
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource/RESOURCE_TO_LOAD *100);
        _oPreloader.refreshLoader(iPerc);
    };
    
    this._onAllImagesLoaded = function(){
        
    };
    
    this.onRemovePreloader = function (){
        _oPreloader.unload();
        
        s_oCrazyApiManager.loadingStop();
            
        s_oSoundtrack = playSound("soundtrack",1,true);
            
        this.gotoMenu();
        
        s_oMenu.checkPendingInvitation();
    };
    
    this.gotoMenu = function(){
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };
    

    this.gotoSelectPlayers = function(){
        _oSelectPlayers = new CSelectPlayers();
        _iState = STATE_SELECT_PLAYERS;
    };

    this.gotoGame = function(){
        s_oGame = _oGame = new CGameSingle(_oData);   						
        _iState = STATE_GAME;
    };
    
    this.gotoGameMulti = function(iNumPlayers){
        NUM_PLAYERS = iNumPlayers;
        
        s_oGame = _oGame = new CGameMulti(_oData);   						
        _iState = STATE_GAME;
    };
    
    this.gotoGameTutorial = function(){
        NUM_PLAYERS = 3;
        
        s_oGame = _oGame = new CGameTutorial(_oData);   						
        _iState = STATE_GAME;
    };
    
    this.gotoGameWithBot = function(){
        NUM_PLAYERS = 2;
        
        s_oGame  = _oGame = new CGameSingleWithBot(_oData);   
        _iState = STATE_GAME;
    };
    
    this.gotoHelp = function(){
        _oHelp = new CHelp();
        _iState = STATE_HELP;
    };
	
     this.stopUpdate = function(){
         /*
         * MULTIPLAYER GAMES SHOULD NEVER BE PAUSED
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display","block");
        */
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            Howler.mute(true);
        }
        
    };

    this.startUpdate = function(){
        /*
         * MULTIPLAYER GAMES SHOULD NEVER BE PAUSED
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display","none");
        */
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            if(s_bAudioActive && !s_bAdsInProgress){
                Howler.mute(false);
            }
        }
        
    };

    
    this._update = function(event){
		if(_bUpdate === false){
			return;
		}
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;
        
        if ( s_iCntTime >= 1000 ){
            s_iCurFps = s_iCntFps;
            s_iCntTime-=1000;
            s_iCntFps = 0;
        }
                
        if(_iState === STATE_GAME){
            _oGame.update();
        }
        
        s_oStage.update(event);

    };
    
    s_oMain = this;

    
    _oData = oData;
    ENABLE_CHECK_ORIENTATION = true;
    ENABLE_FULLSCREEN = false;
    
    STARTING_NUM_CARDS = 7;

    s_bAudioActive = false;
    
    this.initContainer();
}
var s_bMobile;
var s_bAudioActive = false;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;
var s_bFullscreen = false;

var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oSoundtrack = null;
var s_oCanvas;
var s_aSounds;
var s_aSoundsInfo;
var s_oNetworkManager;
var s_bMultiplayer;
var s_bPlayWithBot;
var s_oGame;
var s_oCrazyApiManager;

var s_iNumPlayersSingleMode = 2;
var s_iDifficulty = MODE_MEDIUM;
var s_bSpecialMode = true;