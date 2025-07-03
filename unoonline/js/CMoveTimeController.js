function CMoveTimeController(iX, iY, oParentContainer){
  
    var _aCbCompleted;
    var _aCbOwner;
  
    var _iIDListener;
    var _iTimerTime;
    var _iStartTime;
    var _iTimer;
    
    var _iEndGameCounter;

    var _oContainer;
    var _oThis;
    var _oRadialWidget;
    var _oNumAttempt;
    
    var _pStartPosTimer;

    this._init = function(){
        _aCbCompleted = new Array();
        _aCbOwner = new Array();
        
        _iTimerTime = TIME_PER_MOVE;
        _iIDListener = null;
        _iEndGameCounter = 0;
        
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        oParentContainer.addChild(_oContainer);

        var iWidth = 300;
        var iHeight = 100;
        var iTextX = -100;
        var iTextY = 0;
        _oNumAttempt = new CTLText(_oContainer, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    30, "center", "#fff", PRIMARY_FONT, 1,
                    2, 2,
                    "",
                    true, true, false,
                    false );

        _oRadialWidget = new CRadialWipeWidget(0, 0, _oContainer);

        _pStartPosTimer = {x: iX, y: iY};
        
        console.log("_iTimerTime:"+_iTimerTime)

    };
    
    this.unload = function(){
        oParentContainer.removeChild(_oContainer);
        this.stopTimer();
    };
    
    this.setPos = function(iNewX, iNewY){
        //_oRadialWidget.setPos(iX, iY);
        _oContainer.x = iNewX;
        _oContainer.y = iNewY;
    };
    
    this.setScale = function(iValue){
        _oRadialWidget.setScale(iValue);
    };
    
    this.setSpectatorMode = function(){
        _oRadialWidget.removeHurryUpMode();
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.restartEndGameCounter = function(){
        _iEndGameCounter = 0;
        _iTimerTime = TIME_PER_MOVE;
    };  
    
    this.startTimer = function(){
        _oRadialWidget.setHurryUpMode(TIME_HURRYUP_WARNING);
        
        _iStartTime = _iTimerTime;
        _iTimer = _iStartTime;
        
        var iAttempt = _iEndGameCounter + 1;
        _oNumAttempt.refreshText(iAttempt + "/" + NUM_ATTEMPT);
        
        if(_iIDListener !== null){
            return;
        }
        
        _iIDListener = setInterval(function(){
            _oThis.update();
            _oContainer.visible = true;
        },FPS_TIME);
    };

    this.stopTimer = function(){
        _oContainer.visible = false;
        
        _oNumAttempt.refreshText("");
        _oRadialWidget.reset();
        
        clearInterval(_iIDListener);
        _iIDListener = null;
    };
    
    this._onTimerEnd = function(){
        _iEndGameCounter++;
        /*
        var iEventToLaunch = ON_TIMER_END;
        if(_aCbCompleted[iEventToLaunch]){
            _aCbCompleted[iEventToLaunch].call(_aCbOwner[iEventToLaunch]);
        }
        */
        if(_iEndGameCounter < NUM_ATTEMPT){
            ///FIRST TIME, HALF THE TIME
            _iTimerTime /= 2;
            var iEventToLaunch = ON_TIMER_END;
            if(_aCbCompleted[iEventToLaunch]){
                _aCbCompleted[iEventToLaunch].call(_aCbOwner[iEventToLaunch]);
            }
        } else {
            this.restartEndGameCounter();
            
            ///SECOND TIME IN A ROW, END THE GAME
            var iEventToLaunch = ON_LAST_TIMER_END;
            if(_aCbCompleted[iEventToLaunch]){
                _aCbCompleted[iEventToLaunch].call(_aCbOwner[iEventToLaunch]);
            }
        }
    };

    this.update = function(){
        _iTimer -= s_iTimeElaps;
        
        if(_iTimer < 0 ){
            
            this.stopTimer();
            
            this._onTimerEnd();
            
            _iTimer = 0;
        }

        _oRadialWidget.update(_iTimer, _iStartTime);
    };
    
    this._init();
    _oThis = this;
};


