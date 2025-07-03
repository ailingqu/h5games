///////MESSAGE TYPE ARE ONLY STRING
////MSG FROM SERVER
var MSG_ROOM_UPDATE = "room_update";
var MSG_ROOM_IS_FULL = "room_is_full";
var MSG_ROOM_EXPIRED = "room_expired";
var MSG_GAME_FOUND = "game_found";
var MSG_PLAYER_LEFT_GAME = "player_left_game";
var MSG_REMATCH_PANEL = "rematch_panel";
var MSG_REMATCH_ANSWER_RESULTS = "rematch_answer_results";
var MSG_NEXTMATCH_ANSWER_RESULTS = "next_match_answer_results";
var MSG_OPPONENT_MOVES = "opponent_moves";
var MSG_PIECES_RECEIVED = "pieces_received";
var MSG_NOTIFY_RECEIVED = "notify_received";

var MSG_START_THE_GAME = "start_the_game";
var MSG_BOT_ADDED = "bot_added";
var MSG_BOT_REMOVED = "bot_removed";

////MSG TO SERVER
var MSG_END_MATCH = "end_match";
var MSG_END_GAME = "end_game";
var MSG_ACCEPT_REMATCH = "accept_rematch";
var MSG_ACCEPT_NEXTMATCH = "accept_next_match";
var MSG_DISCONNECTION = "disconnection";
var MSG_MOVE = "move";
var MSG_REQUEST_PIECES = "request_pieces";
var MSG_NOTIFY = "notify";

var MSG_PLAYNOW = "play_now";
var MSG_ADDBOT = "add_bot";
var MSG_REMOVEBOT = "remove_bot";



function CNetworkMessageForwarder(){
    
    var _oThis;
    
    this._init = function(){
        
    };
      
    //////////////////// COMMUNICATION FROM SERVER /////////
    this.messageHandler = function(message){
        switch (message.type) {
            case MSG_ROOM_UPDATE: _oThis._onUpdateRoom(message); break;
            case MSG_ROOM_IS_FULL: _oThis._onFullRoom(message); break;
            case MSG_ROOM_EXPIRED: _oThis._onExpiredRoom(message); break;
            case MSG_GAME_FOUND: _oThis._onGameFound(message); break;
            case MSG_PLAYER_LEFT_GAME: _oThis._onOpponentLeftTheGame(message); break;
            case MSG_REMATCH_PANEL: _oThis._onRematchPanel(message); break;
            case MSG_REMATCH_ANSWER_RESULTS: _oThis._onRematchResults(message); break;
            case MSG_NEXTMATCH_ANSWER_RESULTS: _oThis._onNextMatchResults(message); break;
            case MSG_OPPONENT_MOVES: _oThis._onEnemyMoves(message); break;
            case MSG_PIECES_RECEIVED: _oThis._onPiecesReceived(message); break;
            case MSG_NOTIFY_RECEIVED: _oThis._onNotifyReceived(message); break;
            
            case MSG_START_THE_GAME: _oThis._onGameStart(message); break;
            case MSG_BOT_ADDED: _oThis._onBotAdded(message); break;
            case MSG_BOT_REMOVED: _oThis._onBotRemoved(message); break;
            
        }
    };
    
    this._onUpdateRoom = function(szMessage){
        var szInfo = szMessage.getString(0);
        var oData = JSON.parse(szInfo);
        
        var aUserList = oData["nicknamelist"];
        var iMaxNumPlayers = parseInt(oData["maxnumplayers"]);
        
        g_oCTLMultiplayer.updateRoomUserList(aUserList, iMaxNumPlayers);
        
    };
    
    this._onFullRoom = function(){
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showGeneralDialog(TEXT_ROOM_IS_FULL, "s_oNetworkManager.gotoLobby");
    };
    
    this._onExpiredRoom = function(){
        s_oNetworkManager.disconnectFromCurRoom();
        
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showGeneralDialog(TEXT_ROOM_IS_EXPIRED, "s_oNetworkManager.gotoLobby");
    };
    
    this._onGameFound = function(szMessage){
        s_oNetworkManager.gotoGameRoom(szMessage);
    };
    
    this._onGameStart = function(szMessage){
        var szInfoMoves = szMessage.getString(0);
        var oData = JSON.parse(szInfoMoves);
        
        var iNumPlayers = parseInt( oData.maxusers );
        
        console.log(szInfoMoves)
        if(s_oMenu){
            s_oMenu.onRemoteGameStart(iNumPlayers);
        }
        s_oNetworkManager.onGameStarted();
    };
    
    this._onBotAdded = function(szMessage){
        var szInfo = szMessage.getInt(0);
        var iNumBot = parseInt( JSON.parse(szInfo) );
        
        s_oNetworkManager.onBotAdded(iNumBot);
    };
    
    this._onBotRemoved = function(szMessage){
        var szInfo = szMessage.getInt(0);
        var iNumBot = parseInt( JSON.parse(szInfo) );
        
        s_oNetworkManager.onBotRemoved(iNumBot);
    };
    
    this._onOpponentLeftTheGame = function(szMessage){
        var iPlayerID = parseInt( szMessage.getInt(0) );
        //var oData = JSON.parse(szInfo);
        console.log("_onOpponentLeftTheGame:"+iPlayerID);
        
        s_oGame.opponentLeftTheGame(iPlayerID);
    };
    
    this._onRematchPanel = function(){
        s_oGame.showRematchQuestion();
    };

    this._onNextMatchResults = function(szMessage){
        var bAccepted = szMessage.getBoolean(0);
        if(bAccepted){
            s_oGame.onOpponentAcceptNextMatch();
        }else {
            s_oGame.onOpponentRefuseNextMatch();
        }
    };

    this._onRematchResults = function(szMessage){
        var bAccepted = szMessage.getBoolean(0);
        if(bAccepted){
            s_oGame.onOpponentAcceptRematch();
        }else {
            s_oGame.onOpponentRefuseRematch();
        }
    };

    this._onPiecesReceived = function(szMessage){
        var szInfoMoves = szMessage.getString(0);
        var oData = JSON.parse(szInfoMoves);
        
        s_oGame._onPiecesReceived(oData);
    };

    this._onNotifyReceived = function(szMessage){
        var szInfoMoves = szMessage.getString(0);
        var oData = JSON.parse(szInfoMoves);
        
        s_oGame._onNotifyReceived(oData);
    };

    this._onEnemyMoves = function(szMessage){
        var szInfoMoves = szMessage.getString(0);
        var oData = JSON.parse(szInfoMoves);

        //s_oGame.remoteMovePiece(oData);
        s_oGame.onActionReceived(oData);
    };

    
    _oThis = this;
    this._init();
};


