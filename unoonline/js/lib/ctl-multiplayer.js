var CCTLMultiplayerGui = function(){
    
    this._cssClassDomain = "ctl-multiplayer-";
    this._idCurDialog;
    this._idLoadingDialog;
    this._idProvisionalDialog;
    this._iMaxPlayersInRoom = 2;
    this._iStartNumPlayers = 4;
    
    var szNickName = localStorage.getItem("nickname");
    this._szNickName = ( (szNickName === null || szNickName === undefined) ? "" : szNickName);
  
  
    jQuery(document).on( "click", "." + this._cssClassDomain + "room-list li", function(){

        var szRoomName  = jQuery(this).find("." + g_oCTLMultiplayer._cssClassDomain + "room-name").text();
        var bAccessible = jQuery(this).attr("data-accessible");
        var bPrivate    = jQuery(this).attr("data-private");
        var bSpecialMode = jQuery(this).attr("data-specialmode");        
        s_oNetworkManager.setSpecialMode(bSpecialMode === "true" ? true : false);

        if ( bAccessible === "false" ){
            return;
        }
        
        g_oCTLMultiplayer.closeCurrentDialog();
        
        if( bPrivate === "true" ){
            g_oCTLMultiplayer.showTypeRoomPassword(szRoomName);
        }else {
            g_oCTLMultiplayer.showLoading(TEXT_NETWORK_CONNECTING);
            on_ctl_multiplayer_join_room(szRoomName);
        }
    });
    
    jQuery(document).on("click", ".ctl-multiplayer-icons-cancel", function(){
        g_oCTLMultiplayer.closeCurrentDialog();
    });
};

CCTLMultiplayerGui.prototype.refreshRoomList = function( aRoomList ){
    var html = '';

    for( var i = 0; i < aRoomList.length; i++ ){    
        html += '<li data-private="' + aRoomList[i].private + '" data-accessible="' + aRoomList[i].accessible + '" data-specialmode="' + aRoomList[i].specialmode +'">'
        
            /*
            if(aRoomList[i].specialmode === true){
                html += '<span class="' + this._cssClassDomain +'icons-attention-alt">';
                html += '</span>';
            }
            */
            var szSpecialText = aRoomList[i].specialmode ? TEXT_SYS_SPECIAL + " " : "";

            html += '<span class="' + this._cssClassDomain + 'room-name">';
            html += aRoomList[i].name;
            html += '</span>';
           
            html += '<span class="' + this._cssClassDomain + 'current-users">';
            html += szSpecialText + aRoomList[i].curusers + "/" + aRoomList[i].maxusers;
            html += '</span>';           
           
            if( aRoomList[i].private === true ){
                html += '<i class="' + this._cssClassDomain + 'icons-lock"></i>';
            } else if( aRoomList[i].accessible === false ){
                html += '<i class="' + this._cssClassDomain + 'icons-block"></i>';
                //html += '<i class="' + this._cssClassDomain + 'icons-attention-alt"></i>';
            } else{
                html += '<i class="' + this._cssClassDomain + 'icons-login"></i>';
            }           
            
        html += '</li>'
    }
    
    jQuery('.'+this._cssClassDomain+'room-list').html(html);
};


CCTLMultiplayerGui.prototype.showRoomList = function( aRoomList ){
    var html = '';

    //var html = '<input type="text" placeholder="'+TEXT_SYS_FINDROOM+'" name="nickname" maxlength="60" value="" oninput="on_ctl_user_search(this.value)">';

    html += '<ul class="'+this._cssClassDomain+'room-list">';
    html += '</ul>';
    
    /*
    html += '<button onclick="on_ctl_multiplayer_refresh_room_list()" type="button" class="'+this._cssClassDomain+'update '+this._cssClassDomain+'btn-gray">';
        html += '<i class="'+this._cssClassDomain+'icons-arrows-cw"></i>';
        html += '<span>'+TEXT_SYS_UPDATE+'</span>';
    html += '</button>'
*/

    //html += this._setSpecialModeDiv();

    this._idCurDialog = this.showDialog( '<span class="ctl-multiplayer-title">' + TEXT_SYS_MATCH_LIST + '</span>' +
            '<input type="text" placeholder="'+TEXT_SYS_FINDROOM+'" name="nickname" maxlength="60" value="" oninput="on_ctl_user_search(this.value)">'+
               '<button onclick="on_ctl_multiplayer_refresh_room_list()" type="button" class="'+this._cssClassDomain+'update">' + 
               '<i class="'+this._cssClassDomain+'icons-arrows-cw"></i>' + 
               '<span>'+TEXT_SYS_UPDATE+'</span>' +
               '</button>', html, 
    [ 
        {   txt : TEXT_SYS_CREATEMATCH, 
            cb : "on_ctl_multiplayer_show_create_match", 
            classes : "ctl-multiplayer-create-match" },
        
        {   txt : TEXT_SYS_QUICKMATCH, 
            cb : "on_ctl_multiplayer_join_quick_match", 
            classes : "ctl-multiplayer-quick-match" },  
        
          
        /*
        {   txt : TEXT_SYS_BACK, 
            cb : "g_oCTLMultiplayer.closeCurrentDialog", 
            classes : "" }*/
    ], "ctl-multiplayer-room-list-management" );
    
    this.refreshRoomList(aRoomList);
    
};

CCTLMultiplayerGui.prototype.showTypeRoomPassword = function(szRoomName){
    
    var html = '';
    
    html += '<div class="'+ this._cssClassDomain +'form-group">';
        html += '<label>'+TEXT_SYS_TYPEROOMPASS+'</label>';
        html += '<div class="ctl-multiplayer-form-content">';
            html += '<input type="password" name="password" data-room-name="'+szRoomName+'">';
        html += '</div>';
    html += '</div>';

    this._idCurDialog = this.showDialog( TEXT_SYS_TYPEROOMPASS, html, 
    [ 
        {   txt : TEXT_SYS_OK, 
            cb : "on_ctl_multiplayer_send_password", 
            classes : "" },
        {   txt : TEXT_SYS_BACK, 
            cb : "on_ctl_multiplayer_close_type_room_password", 
            classes : "" }
    ] );
};


CCTLMultiplayerGui.prototype.showCreateRoom = function(){
    
    var html = '';
    

    html += '<div class="'+ this._cssClassDomain +'form-group">';
        html += '<label>'+TEXT_SYS_NAMEROOM+'</label>';
        html += '<div class="ctl-multiplayer-form-content">';
            html += '<input type="text" name="roomname" maxlength="30" value="'+ this._szNickName + '\'s room">';
        html += '</div>';
    html += '</div>';
    
    html += '<div class="'+ this._cssClassDomain +'form-group">';    
        html += '<label>'+TEXT_SYS_PASSWORD+'</label>';
            html += '<div class="ctl-multiplayer-form-content">';
                html += '<input type="password" name="password">';
                html += '<p>'+TEXT_SYS_INFOPASS+'</p>'
        html += '</div>';
    html += '</div>';
    
    
    html += this._setSpecialModeDiv();
    
    html += '<div class="'+ this._cssClassDomain +'form-group'+ ( this._iMaxPlayersInRoom === 2 ? ' ' + this._cssClassDomain +'display-none' : '') +'">';    
        html += '<label>'+TEXT_SYS_MAXPLAYERS+'</label>';
            html += '<div class="ctl-multiplayer-form-content">';        
                html += '<ul class="'+ this._cssClassDomain +'inline-list">';
                    if ( this._iMaxPlayersInRoom > 2 ){
                        for ( var i = 2; i < (this._iMaxPlayersInRoom+1); i++ ){
                            if(this._iStartNumPlayers === i){
                                html += '<li><input type="radio" name="maxplayers" value="'+i+'" checked="checked"><span>'+i+'</span></li>';
                            }else {
                                html += '<li><input type="radio" name="maxplayers" value="'+i+'"><span>'+i+'</span></li>';
                            }
                        }
                    }
                html += '<p>'+TEXT_SYS_CHOOSEMAXNUMPLAYERS+'</p>'
        html += '</div>';                
    html += '</div>';
    
    this._idCurDialog = this.showDialog( "Create room", html, 
    [ 
        {   txt : TEXT_SYS_CREATE, 
            cb : "on_ctl_multiplayer_create_room", 
            classes : "" },
        {   txt : TEXT_SYS_BACK, 
            cb : "on_ctl_multiplayer_close_create_room", 
            classes : "" }
    ] );
};

CCTLMultiplayerGui.prototype._setSpecialModeDiv = function(){
    var html = '';
    
    html += '<div class="'+ this._cssClassDomain +'form-group">';    
        html += '<label>'+TEXT_SYS_SPECIAL_MODE+'</label>';
        html += '<div class="ctl-multiplayer-form-content">';  
            html += '<p>'+TEXT_SPECIAL_INFO+'</p>'
            var szChecked = s_bSpecialMode ? 'checked="false"' : '';
            html += '<input type="checkbox" name="specialmode"'+szChecked+'>';
            //html += '<p>'+TEXT_SPECIAL_INFO+'</p>'
        html += '</div>';            
    html += '</div>';
    
    return html;
};

CCTLMultiplayerGui.prototype.showChooseNickName = function(){
    this.closeAllDialog();
    
    var html = '<input type="text" name="nickname" maxlength="20" value="'+ this._szNickName +'">';
    this._idCurDialog = this.showDialog( TEXT_SYS_CHOOSENICK, html, 
    [ 
        {   txt : TEXT_SYS_OK, 
            cb : "on_ctl_multiplayer_send_nickname", 
            classes : "" },
        /*
        {   txt : TEXT_SYS_CLOSE, 
            cb : "g_oCTLMultiplayer.closeCurrentDialog", 
            classes : "" }
        */
    ] );
};

CCTLMultiplayerGui.prototype.showGeneralDialog = function(szText, szCallback){
    //var html = '<input type="text" name="nickname" value="'+ this._szNickName +'">';
    this._idCurDialog = this.showDialog( szText, '', 
    [ 
        {   txt : TEXT_SYS_BACK, 
            cb : szCallback, 
            classes : "" }
    ] );
};

CCTLMultiplayerGui.prototype.resumePrevDialog = function(){
    this.closeDlg(this._idCurDialog);
    this._idCurDialog = this._idProvisionalDialog;
};
CCTLMultiplayerGui.prototype.saveProvisionalDialog = function(){
    this._idProvisionalDialog = this._idCurDialog;
};


CCTLMultiplayerGui.prototype.closeLoadingDialog = function(){
    this.closeDlg(this._idLoadingDialog);
};
CCTLMultiplayerGui.prototype.closeCurrentDialog = function(){
    this.closeDlg(this._idCurDialog);
};
CCTLMultiplayerGui.prototype.closeCurrentDialogAndRetrieveOld = function(){
    this.closeDlg(this._idCurDialog);
};

/*framework starts here*/

CCTLMultiplayerGui.prototype.makeCode = function() {
    var code = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 32; i++ )
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    return code; 
};

CCTLMultiplayerGui.prototype.showDialog = function( szTitle, szHtmlContent, aBtn, id ){
    var szHtml = "";

    if(!id){
        id = this.makeCode();
    }

    szHtml += "<div id='"+id+"' class='"+this._cssClassDomain+"dlg-wrapper'>";
        szHtml += "<div class='"+this._cssClassDomain+"dlg-block'></div>";
        szHtml += "<div class='"+this._cssClassDomain+"dlg-content'>";

            szHtml += '<i class="'+this._cssClassDomain+'icons-cancel"></i>';

            szHtml += "<div class='"+this._cssClassDomain+"dlg-header'>";
                szHtml += "<h1>"+szTitle+"</h1>";                    
            szHtml += "</div>";

            szHtml += "<div class='"+this._cssClassDomain+"dlg-content-body'>";
            szHtml += szHtmlContent;
            szHtml += "</div>";

            if( aBtn && aBtn.length > 0 ){
                szHtml += "<div class='"+this._cssClassDomain+"dlg-footer'>";
                for( var i=0; i < aBtn.length; i++){
                    szHtml += "<button type='button' onclick='" + aBtn[i].cb +
                              "(\""+id+"\");' class='"+this._cssClassDomain+"mini" + 
                              " "+ aBtn[i].classes +"'>"+
                              aBtn[i].txt+"</button>";
                }
                
                szHtml += this.buildExtraFooter();
                
                szHtml += "</div>";
            }

        szHtml += "</div>";
    szHtml += "</div>";

    jQuery("body").append(szHtml);

    return id;
}; 

CCTLMultiplayerGui.prototype.buildExtraFooter = function(){
    var szHtml = "";
    
    szHtml += '<div class="'+this._cssClassDomain+'copyright">';
        //szHtml += '<a href="http://www.codethislab.com" target="_blank">www.codethislab.com</a>';
    szHtml += "</div>";
    
    return szHtml;
};

CCTLMultiplayerGui.prototype.showLoading = function( szTitle, oBtnCallback ){
    var szHtml = "";
    this._idLoadingDialog = this.makeCode();

    if(!szTitle){
        szTitle = TEXT_SYS_LOADING;
    }

    szHtml += "<div id='"+this._idLoadingDialog+"' class='"+this._cssClassDomain+"dlg-wrapper " + 
            this._cssClassDomain+"fixed'>";
        szHtml += "<div class='"+this._cssClassDomain+"dlg-block'></div>";
        szHtml += "<div class='"+this._cssClassDomain+"dlg-content'>";

            szHtml += "<div class='"+this._cssClassDomain+"dlg-header'>";
                szHtml += "<h1>"+szTitle+"</h1>";
            szHtml += "</div>";
            szHtml += "<div class='"+this._cssClassDomain+"dlg-content-body "+this._cssClassDomain+"align-center "+this._cssClassDomain+"align-v-middle'>";
            
                szHtml += '<div class="ctl-multiplayer-spinner-container">';
                    szHtml += '<i class="'+this._cssClassDomain+'icons-spin5 animate-spin"></i>';
                szHtml += "</div>";
            szHtml += "</div>";
            
            if( oBtnCallback ){
                szHtml += "<div class='"+this._cssClassDomain+"dlg-footer "+this._cssClassDomain+"center'>";
                //for( var i=0; i < aBtn.length; i++){
                    szHtml += "<button type='button' onclick='" + oBtnCallback +
                              "(\""+this._idLoadingDialog+"\");' class='"+this._cssClassDomain+"mini" + 
                              " "+ "" +"'>"+
                              TEXT_SYS_BACK+"</button>";
                //}

                szHtml += this.buildExtraFooter();
                
                szHtml += "</div>";
            }
            
        szHtml += "</div>";
    szHtml += "</div>";

    jQuery("body").append(szHtml);
};  

CCTLMultiplayerGui.prototype.updateRoomUserList = function( aUserList, iMaxUsers ){
    var oNodeUserList = jQuery('.' + this._cssClassDomain + 'user-list');

    if ( oNodeUserList.length > 0 ){
        oNodeUserList.html("");        
        for( var i = 0; i < aUserList.length; i++ ){
            oNodeUserList.append("<li>"+aUserList[i]+"</li>");
        }
        
        var szMessage = TEXT_WAITING_ROOM_MESSAGE.replace("%d", iMaxUsers);
        jQuery('.' + this._cssClassDomain + 'room-info').text(szMessage);
        
        var oNodeButPlayNow = jQuery('.' + this._cssClassDomain + 'room-play-now');

        if ( oNodeButPlayNow.length > 0 ){
            if ( aUserList.length === 1 ){
                jQuery('.' + this._cssClassDomain + 'room-play-now').addClass(this._cssClassDomain + 'display-none');
            }else{
                jQuery('.' + this._cssClassDomain + 'room-play-now').removeClass(this._cssClassDomain + 'display-none');
            }  
        }
    }
};

CCTLMultiplayerGui.prototype.showWaitingPlayersInRoom = function( szTitle, bSpecialMode, aPlayers, aBtn, szLink ){
    var szHtml = "";
    this._idLoadingDialog = this.makeCode();

    if(!szTitle){
        szTitle = TEXT_SYS_LOADING;
    }

    szHtml += "<div id='"+this._idLoadingDialog+"' class='"+this._cssClassDomain+"dlg-wrapper " + 
            this._cssClassDomain+"fixed'>";
        szHtml += "<div class='"+this._cssClassDomain+"dlg-block'></div>";
        szHtml += "<div class='"+this._cssClassDomain+"dlg-content'>";
        /*
            if(bSpecialMode === true){
                szHtml += '<span class="' + this._cssClassDomain +'icons-attention-alt">';
                szHtml += '</span>';
            }
*/
            szHtml += "<div class='"+this._cssClassDomain+"dlg-header'>";
                szHtml += "<h1>"+szTitle+"</h1>";
            szHtml += "</div>";
            szHtml += "<div class='"+this._cssClassDomain+"dlg-content-body "+this._cssClassDomain+"align-center'>";
            
                szHtml += "<ul class='"+this._cssClassDomain+"list "+this._cssClassDomain+"user-list'>";
                    for( var i = 0; i < aPlayers.length; i++ ){
                        szHtml += "<li>"+aPlayers[i]+"</li>";
                    } 
                szHtml += "</ul>";

                szHtml += "<p class='"+this._cssClassDomain+"room-info'></p>";

                
                if(szLink){
                    szHtml += '<input class="'+this._cssClassDomain+'room-link" type="text" placeholder="'+szLink+'" id="link" name="link"'// maxlength="60" value="'+szLink+'" size="4" readonly display="none">';
                    szHtml +='maxlength="60" value="'+szLink+'" size="4" data-clipboard-target="#link" readonly>';
                }
                
                
            szHtml += "</div>";
            
            
            
            if( aBtn ){
                szHtml += "<div class='"+this._cssClassDomain+"dlg-footer "+this._cssClassDomain+"center'>";
                for( var i=0; i < aBtn.length; i++){
                    var oBtn = aBtn[i];
                    szHtml += "<button id='"+oBtn.id+"' type='button' data-clipboard-target='#link' onclick='" + oBtn.func +
                              "(\""+this._idLoadingDialog+"\");' class='"+this._cssClassDomain+"mini" +
                              
                              ( oBtn.classes ? (" " + oBtn.classes) : "")   +
                              
                              " "+ "" +"'>"+ oBtn.label +"</button>";
                }

                szHtml += this.buildExtraFooter();
                
            
                szHtml += '<div class="ctl-multiplayer-spinner-container">';
                    szHtml += '<i class="'+this._cssClassDomain+'icons-spin5 animate-spin"></i>';
                szHtml += '</div>';                
                
                szHtml += "</div>";
            }
            
        szHtml += "</div>";
    szHtml += "</div>";

    jQuery("body").append(szHtml);
};  

CCTLMultiplayerGui.prototype.closeDlg = function(idDlg){
    jQuery('#'+idDlg).remove();
};    

CCTLMultiplayerGui.prototype.closeAllDialog = function(){
    g_oCTLMultiplayer.closeLoadingDialog();
    g_oCTLMultiplayer.closeCurrentDialog();
}; 

CCTLMultiplayerGui.prototype.setNickName = function( szNickName ){
    this._szNickName = ( (szNickName === null || szNickName === undefined) ? "" : szNickName);
    localStorage.setItem("nickname",this._szNickName);
};

CCTLMultiplayerGui.prototype.getNickname = function(){
    return this._szNickName;
};    
CCTLMultiplayerGui.prototype.setMaxPlayersInRoom = function( iMaxPlayersInRoom ){
    if ( iMaxPlayersInRoom < 2 || iMaxPlayersInRoom > 4 ){
        return;
    }
    this._iMaxPlayersInRoom = iMaxPlayersInRoom;
}; 


var g_oCTLMultiplayer = new CCTLMultiplayerGui();
g_oCTLMultiplayer.setMaxPlayersInRoom(4);