function CGfxButton(iXPos,iYPos,oSprite, oParentContainer){
    
    var _bDisabled;
    var _iScaleFactor;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListenerDown;
    var _oListenerUp;
    
    var _oButton;
    var _oButtonImage;
    var _oTween;
    var _oParent;
    var _oMsg;
    
    var _oScalableContainer;
    var _oLabel;
    
    this._init =function(iXPos,iYPos,oSprite, oParentContainer){
        _bDisabled = false;
        
        _iScaleFactor = 1;
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oButton = new createjs.Container();
        _oButton.x = iXPos;
        _oButton.y = iYPos; 
        oParentContainer.addChild(_oButton);  
        
        _oScalableContainer = new createjs.Container();
        _oButton.addChild(_oScalableContainer);  
        
        _oButtonImage = createBitmap( oSprite);
        _oButtonImage.scaleX =   _oButton.scaleY = _iScaleFactor;                         
        _oButtonImage.regX = oSprite.width/2;
        _oButtonImage.regY = oSprite.height/2;
        _oButtonImage.cursor = "pointer";
        _oScalableContainer.addChild(_oButtonImage);  
        
        this._initListener();
    };
    
    this.unload = function(){
        _oButton.removeAllEventListeners();

        
        oParentContainer.removeChild(_oButton);
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this.setAlpha = function(iAlpha){
        _oButton.alpha = iAlpha;
    };
    
    this.setClickable = function(bVal){
        _bDisabled = !bVal;
        if(_bDisabled){
            _oButton.cursor = "default";
        }else {
            _oButton.cursor = "pointer";
        }
    };
    
    this._initListener = function(){
        _oListenerDown = _oButton.on("mousedown", this.buttonDown);
        _oListenerUp = _oButton.on("pressup" , this.buttonRelease);      
        _oButton.on("mouseover" , this.mouseOver);   
        _oButton.on("mouseout" , this.mouseOut);   
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.buttonRelease = function(){
        if(_bDisabled){
            return;
        }
        _oScalableContainer.scaleX = _iScaleFactor;
        _oScalableContainer.scaleY = _iScaleFactor;

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP]);
        }
    };
    
    this.buttonDown = function(){
        if(_bDisabled){
            return;
        }
        _oScalableContainer.scaleX = _iScaleFactor*0.9;
        _oScalableContainer.scaleY = _iScaleFactor*0.9;

        playSound("click",1,false);

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN]);
       }
    };

    this.mouseOver = function(){
        if(_oMsg){
            _oMsg.setVisible(true);
        }
    };
    
    this.mouseOut = function(){
        if(_oMsg){
            _oMsg.setVisible(false);
        }
    };
    
    this.setMouseOverMsg = function(iTextX, iTextY ,szText, szSize){
        var iWidth = 300;
        var iHeight = 100;
        var iX = iTextX;
        var iY = iTextY;
        _oMsg = new CTLText(_oButton, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    szSize, "center", "#fff", PRIMARY_FONT, 1,
                    2, 2,
                    szText,
                    true, true, false,
                    false );
        _oMsg.setVisible(false);
    };
    
    this.setLabel = function(iTextX, iTextY ,szText, szSize, iWidth, iHeight){
        var iX = iTextX;
        var iY = iTextY;
        _oLabel = new CTLText(_oScalableContainer, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    szSize, "center", "#fff", PRIMARY_FONT, 1.2,
                    2, 2,
                    szText,
                    true, true, true,
                    false );
    };
    
    this.changeLabelText = function(szText){
        _oLabel.refreshText(szText);
    };
    
    this.pulseAnimation = function () {
        _oTween = createjs.Tween.get(_oButton, {loop:true}).to({scaleX: _iScaleFactor*0.9, scaleY: _iScaleFactor*0.9}, 850, createjs.Ease.quadOut)
                .to({scaleX: _iScaleFactor, scaleY: _iScaleFactor}, 650, createjs.Ease.quadIn);
    };
    
    this.pointAnimation = function () {
        var iOffset = 10;
        var iTime = 250;
        _oTween = createjs.Tween.get(_oButton, {loop:true}).to({x: iXPos+iOffset}, iTime, createjs.Ease.quadOut)
                .to({x: iXPos}, iTime*2, createjs.Ease.quadIn);
    };
    
    this.stopPointAnim = function(){
        _oButton.x = iXPos;
        createjs.Tween.removeTweens(_oButton);
    };
    
    this.trembleAnimation = function () {
        _oTween = createjs.Tween.get(_oButton).to({rotation: 10}, 75, createjs.Ease.quadOut).to({rotation: -10}, 140, createjs.Ease.quadIn).to({rotation: 0}, 75, createjs.Ease.quadIn).call(function () {
            _oParent.trembleAnimation();
        });
    };
    
    this.removeAnimation = function(){
        _oButton.scale = _iScaleFactor;
        _oButton.rotation = 0;
        createjs.Tween.removeTweens(_oButton);
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
    };
    
    this.setX = function(iXPos){
         _oButton.x = iXPos;
    };
    
    this.setY = function(iYPos){
         _oButton.y = iYPos;
    };
    
    this.setImage = function(oSprite){
        _oButtonImage.image = oSprite;
    };
    
    this.getButtonImage = function(){
        return _oButtonImage;
    };

    this.getX = function(){
        return _oButton.x;
    };
    
    this.getY = function(){
        return _oButton.y;
    };

    _oParent = this;
    this._init(iXPos,iYPos,oSprite, oParentContainer);
    
    return this;
}