function CContinueController(){
    var _aCbCompleted;
    var _aCbOwner;
    
    var _oContainer;
    var _oButContinue;
    var _oText;
    
    var _bButtonTypeDraw;
    
    this._init = function(){
        _bButtonTypeDraw = false;
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('but_continue');
        _oButContinue = new CGfxButton((CANVAS_WIDTH/2)+222,(CANVAS_HEIGHT/2)+60, oSprite,_oContainer);
        _oButContinue.addEventListener(ON_MOUSE_UP, this._onContinue, this);
        
        _oText = new CTLText(_oContainer, 
            CANVAS_WIDTH/2+288, CANVAS_HEIGHT/2, 200, 150, 
            50, "center", "#fff", PRIMARY_FONT, 1,
            0, 0,
            sprintf(" ", 0),
            true, true, true,
            false );

        _oText.setAlpha(0);
    };
    
    this.unload = function(){
        _oButContinue.unload();
        s_oStage.removeChild(_oContainer);
    };
    
     this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.removeEventListeners = function(  iEvent ){
        _aCbCompleted[iEvent]=null;
        _aCbOwner[iEvent] = null; 
    };
    
    this._onContinue = function(){
        var iEvent = _bButtonTypeDraw ?  ON_PASS_AND_DRAW : ON_PASS_TURN;
                
        if(_aCbCompleted[iEvent]){
            _aCbCompleted[iEvent].call(_aCbOwner[iEvent]);
        }
        
        if(_aCbCompleted[ON_HUMAN_INTERACTION]){
            _aCbCompleted[ON_HUMAN_INTERACTION].call(_aCbOwner[ON_HUMAN_INTERACTION]);
        }
    };
    
    this.setPassTurnState = function(){
        _bButtonTypeDraw = false;
        
        _oText.refreshText(TEXT_PASS_TURN);
        _oText.setAlpha(1);
        
        this.setClickable();
    };
    
    this.setDrawAndSkipTurn = function(iNumDraw){
        _bButtonTypeDraw = true;
        
        //_oText.refreshText(sprintf(TEXT_DRAW_AND_SKIP, iNumDraw));
        _oText.setAlpha(1);
        
        this.setClickable();
    };
    
    this.setNotClickable = function(){
        //_oText.setAlpha(0);
        
        _oButContinue.setClickable(false);
        _oButContinue.setAlpha(0.5);
        
        _oButContinue.stopPointAnim();
    };
    
    this.setClickable = function(){
        _oButContinue.setClickable(true);
        _oButContinue.setAlpha(1);
        
        _oButContinue.pointAnimation();
    };
    
    this.setMsg = function(szMsg){
        _oText.refreshText(szMsg);
        _oText.setAlpha(1);
    };
    
    this._init();
    
}

