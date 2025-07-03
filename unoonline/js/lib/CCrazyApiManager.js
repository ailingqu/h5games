//////CRAZYGAMES
var ON_ADS_STARTED = 0;
var ON_ADS_FINISHED = 1;
var ON_ADS_ERROR = 2;

var ON_BANNER_RENDERED = 3;
var ON_BANNER_ERROR = 4;

var BANNER_LEADERBOARD = "leaderboard";
var BANNER_MEDIUM = "medium";
var BANNER_MOBILE = "mobile";

var s_bAdsInProgress = false;

function CCrazyApiManager(){
    //const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    
    var _bGamePlayStart;
    var _bLeaderboardBannerActive;
    var _bMediumBannerActive;
    var _bMobileBannerActive;
    
    var _aCbCompleted;
    var _aCbOwner;
    
    var _oLoading;
    
    this._init = function(){
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        //crazysdk.init();
        
        //this._initListener();

        _bLeaderboardBannerActive = false;
        _bMediumBannerActive = false;
        _bMobileBannerActive = false;
        
        $("#"+BANNER_LEADERBOARD).hide();
        $("#"+BANNER_MEDIUM).hide();
        $("#"+BANNER_MOBILE).hide();
        
        _bGamePlayStart = false;
        
        _oLoading = new createjs.Container();
        _oLoading.on("click", function(){}, this);

        var oBG = new createjs.Shape();
        oBG.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oLoading.addChild(oBG);
    };
    
    this.unload = function(){
        this._removeEventListener();
    };
    
    this.setGamePlayStart = function(bVal){       
        if(bVal && !_bGamePlayStart){
            //crazysdk.gameplayStart();
            window.CrazyGames.SDK.game.gameplayStart();
            _bGamePlayStart = true;
        }else if(!bVal && _bGamePlayStart) {
            //crazysdk.gameplayStop();
            window.CrazyGames.SDK.game.gameplayStop();
            _bGamePlayStart = false;
        }
    };
    
    this.setHappyTime = function(){
        //crazysdk.happytime();
        window.CrazyGames.SDK.game.happytime();
    };

    this.inviteLink = function(szRoomID, szPass, oCB){
        //const linkToShare = crazysdk.inviteLink({ roomid: szRoomID, pass: szPass });
        window.CrazyGames.SDK.game.inviteLink(
            { roomid: szRoomID, pass: szPass },
            /*this._onInviteLink*/
                    oCB
        );
    };
    
    this._onInviteLink = function(error, link){
        if (error) {
            console.log("Invite link error (callback)", error);
        } else {
            console.log("Invite link (callback)", link);
        }
    };
    
    this.showInviteButton = function(szRoomID, szPass){
        const callback = (error, link) => {
            if (error) {
                console.log("Invite link error (callback)", error);
            } else {
                console.log("Invite link (callback)", link);
            }
        };


        window.CrazyGames.SDK.game.showInviteButton(
            { roomid: szRoomID, pass: szPass },
            callback
        );
    };
    
    this.hideInviteButton = function(){
        window.CrazyGames.SDK.game.hideInviteButton();
    };
    
    this.loadingStart = function(){
        window.CrazyGames.SDK.game.sdkGameLoadingStart();
    };
    
    this.loadingStop = function(){
        window.CrazyGames.SDK.game.sdkGameLoadingStop();
    };
    
    this.showLoadingPanel = function(){
        s_oStage.addChild(_oLoading);
    };
    
    this.hideLoadingPanel = function(){
        s_oStage.removeChild(_oLoading);
    };
    
    this.showMidAds = function(){
        s_oCrazyApiManager.showLoadingPanel();

        const callbacks = {
            adFinished: () => this.adFinished(),
            adError: (error) => this.adError(error),
            adStarted: () => this.adStarted(),
        };
        
        //crazysdk.requestAd('midgame');
        window.CrazyGames.SDK.ad.requestAd("midgame", callbacks);
    };
    
    this.showRewardedAds = function(){
        s_oCrazyApiManager.showLoadingPanel();
        
        const callbacks = {
            adFinished: () => this.adFinished(),
            adError: (error) => this.adError(error),
            adStarted: () => this.adStarted(),
        };
        
        //crazysdk.requestAd('rewarded');
        window.CrazyGames.SDK.ad.requestAd("rewarded", callbacks);
        
    };
    
    this.showLeaderboardBanner = function(){
        if(s_bMobile){
            this.showMobileBanner();
        }else {
            _bLeaderboardBannerActive = true;
            $("#"+BANNER_LEADERBOARD).css("display","block");
            /*
            if(crazysdk && crazysdk.requestBanner){
                crazysdk.requestBanner([
                    {
                        containerId: BANNER_LEADERBOARD,
                        size: '728x90',
                    },
                ]);
            }else {
                this.bannerError("crazysdk.requestBanner not found");
            }
            */
            const callback = (error, result) => {
                if (error) {
                    this.bannerError(error);
                } else {
                    this.bannerRendered(result);
                }
            };
           
            window.CrazyGames.SDK.banner.requestBanner(
                {
                    id: BANNER_LEADERBOARD,
                    width: 728,
                    height: 90,
                },
                callback
            );
        }
        
    };
    
    this.hideLeaderboardBanner = function(){
        if(s_bMobile){
            this.hideMobileBanner();
        }else {
            _bLeaderboardBannerActive = false;
            $("#"+BANNER_LEADERBOARD).hide();
        }
    };
    
    this.showMediumBanner = function(){
        if(s_bMobile){
            this.showMobileBanner();
        }else {
            _bMediumBannerActive = true;
            $("#"+BANNER_MEDIUM).css("display","block");
            /*
            if(crazysdk && crazysdk.requestBanner){
                crazysdk.requestBanner([
                    {
                        containerId: BANNER_MEDIUM,
                        size: '300x250',
                    },
                ]);
            }else {
                this.bannerError("crazysdk.requestBanner not found");
            }
            */
            const callback = (error, result) => {
                if (error) {
                    this.bannerError(error);
                } else {
                    this.bannerRendered(result);
                }
            };
           
            window.CrazyGames.SDK.banner.requestBanner(
                {
                    id: BANNER_MEDIUM,
                    width: 300,
                    height: 250,
                },
                callback
            );
        }
        
    };
    
    this.hideMediumBanner = function(){
        if(s_bMobile){
            this.hideMobileBanner();
        }else {
            _bMediumBannerActive = false;
            $("#"+BANNER_MEDIUM).hide();
        }
    };
    
    this.showMobileBanner = function(){
        _bMobileBannerActive = true;
        $("#"+BANNER_MOBILE).css("display","block");
        /*
        if(crazysdk && crazysdk.requestBanner){
            crazysdk.requestBanner([
                {
                    containerId: BANNER_MOBILE,
                    size: '320x50',
                },
            ]);
        }else {
            this.bannerError("crazysdk.requestBanner not found");
        }
        */
        const callback = (error, result) => {
            if (error) {
                this.bannerError(error);
            } else {
                this.bannerRendered(result);
            }
        };

        window.CrazyGames.SDK.banner.requestBanner(
            {
                id: BANNER_MOBILE,
                width: 320,
                height: 50,
            },
            callback
        );
    };
    
    this.hideMobileBanner = function(){
        _bMobileBannerActive = false;
        $("#"+BANNER_MOBILE).hide();
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    /*
    this._initListener = function(){
        crazysdk.addEventListener('adStarted', this.adStarted); // mute sound
        crazysdk.addEventListener('adFinished', this.adFinished); // reenable sound, enable ui
        crazysdk.addEventListener('adError', this.adError); // reenable sound, enable ui
        
        crazysdk.addEventListener('bannerRendered', this.bannerRendered);
        
        crazysdk.addEventListener('bannerError', this.bannerError);
    };
    
    this._removeListener = function(){
        crazysdk.removeEventListener('adStarted', this.adStarted);
        crazysdk.removeEventListener('adFinished', this.adFinished);
        crazysdk.removeEventListener('adError', this.adError);
    };
    */
   
    this.adStarted = function(){
        console.log("adStarted");
        
        s_bAdsInProgress = true;
        
        if(_aCbCompleted[ON_ADS_STARTED]){
            _aCbCompleted[ON_ADS_STARTED].call(_aCbOwner[ON_ADS_STARTED]);
        }
    };
    
    this.adFinished = function(){
        console.log("adFinished");
        
        s_bAdsInProgress = false;
        
        if(_aCbCompleted[ON_ADS_FINISHED]){
            _aCbCompleted[ON_ADS_FINISHED].call(_aCbOwner[ON_ADS_FINISHED]);
        }
    };
    
    this.adError = function(szError){
        console.log("adError");
        
        s_bAdsInProgress = false;
        
        if(_aCbCompleted[ON_ADS_ERROR]){
            _aCbCompleted[ON_ADS_ERROR].call(_aCbOwner[ON_ADS_ERROR], szError);
        }
    };
    
    this.bannerRendered = function(evt){
        console.log(evt);
        /*
        var iContainerID = evt.containerId;

        switch(iContainerID){
            case BANNER_LEADERBOARD:{
                    console.log(BANNER_LEADERBOARD);
                    if(!_bLeaderboardBannerActive){
                        console.log("enter");
                        s_oCrazyApiManager.hideLeaderboardBanner();
                    }
                    break;
            }
            case BANNER_MEDIUM:{
                    console.log(BANNER_MEDIUM);
                    if(!_bMediumBannerActive){
                        s_oCrazyApiManager.hideMediumBanner();
                    }
                    break;
            }
            case BANNER_MOBILE:{
                    console.log(BANNER_MOBILE);
                    if(!_bMobileBannerActive){
                        s_oCrazyApiManager.hideMobileBanner();
                    }
                    break;
            }
        }
        console.log("bannerRendered:"+iContainerID);
        * 
        */
        
        if(_aCbCompleted[ON_BANNER_RENDERED]){
            _aCbCompleted[ON_BANNER_RENDERED].call(_aCbOwner[ON_BANNER_RENDERED], "");
        }
        
    };
    
    this.bannerError = function(evt){
        console.log("bannerError:");
        console.log(evt);
        if(_aCbCompleted[ON_BANNER_ERROR]){
            _aCbCompleted[ON_BANNER_ERROR].call(_aCbOwner[ON_BANNER_ERROR]);
        }
    };
    
    this._init();
}


