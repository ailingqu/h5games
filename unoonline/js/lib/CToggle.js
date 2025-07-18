function CToggle(iXPos,iYPos,oSprite,bActive, oParentContainer){
    var _bActive;
    var _bScalable;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListenerDown;
    var _oListenerUp;
    
    var _oParams;
    
    var _oButton;
    
    this._init = function(iXPos,iYPos,oSprite,bActive, oParentContainer){
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _bScalable = true;
        
        var oData = {   
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: oSprite.width/2, height: oSprite.height, regX: (oSprite.width/2)/2, regY: oSprite.height/2}, 
                        animations: {state_true:[0],state_false:[1]}
                   };
                   
         var oSpriteSheet = new createjs.SpriteSheet(oData);
         
         _bActive = bActive;
		_oButton = createSprite(oSpriteSheet, "state_"+_bActive,(oSprite.width/2)/2,oSprite.height/2,oSprite.width/2,oSprite.height);
         
        _oButton.x = iXPos;
        _oButton.y = iYPos; 
        _oButton.stop();
        _oButton.cursor = "pointer";
        oParentContainer.addChild(_oButton);
        
        this._initListener();
    };
    
    this.unload = function(){
        _oButton.off("mousedown", _oListenerDown);
        _oButton.off("pressup" , _oListenerUp); 
        
        oParentContainer.removeChild(_oButton);
    };
    
    this._initListener = function(){
        _oListenerDown = _oButton.on("mousedown", this.buttonDown);
        _oListenerUp = _oButton.on("pressup" , this.buttonRelease);      
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner, oParams ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
        
        _oParams = oParams;
    };
    
    this.setActive = function(bActive){
        _bActive = bActive;
        _oButton.gotoAndStop("state_"+_bActive);
    };
    
    this.buttonRelease = function(){
        _oButton.scaleX = 1;
        _oButton.scaleY = 1;
        
        playSound("click",1,false);
        
        _bActive = !_bActive;
        _oButton.gotoAndStop("state_"+_bActive);

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP],_oParams);
        }
    };
    
    this.buttonDown = function(){
        if(_bScalable){
            _oButton.scaleX = 0.9;
            _oButton.scaleY = 0.9;
        }
        

        if(_aCbCompleted[ON_MOUSE_DOWN]){
            _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN],_oParams);
        }
    };
    
    this.setScalable = function(bVal){
        _bScalable = bVal;
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
    };
    
    this._init(iXPos,iYPos,oSprite,bActive, oParentContainer);
}