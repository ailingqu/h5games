var ON_CONNECTION_ERROR = 0;
var ON_DISCONNECTION = 1;
var ON_DISCONNECTION_FROM_MATCH = 2;
var ON_LOGIN_SUCCESS = 3;
var ON_MATCHMAKING_CONNECTION_SUCCESS = 4;
var ON_GAMEROOM_CONNECTION_SUCCESS = 5;
var ON_USEROWNERROOM_CREATE_SUCCESS = 6;
var ON_USEROWNERROOM_JOIN_SUCCESS = 7;
var ON_ROOM_INFO_RETURNED = 8;
var ON_BACK_FROM_A_ROOM = 9;

var ERROR_CODE_UNKNOWNROOM = "UnknownRoom";

var ON_STATUS_ONLINE = "online";
var ON_STATUS_OFFLINE = "offline";

/////////////// ROOM TYPE
var ROOM_TYPE_MATCHMAKING = 'MatchmakingRoom';
var ROOM_TYPE_USEROWNER = 'UserOwnerRoom';
var ROOM_TYPE_GAME = "GameRoom";

var WAITING_PLAYERS_TIMEOUT = 10000;

function CNetworkManager(){
    
    var _bStatusOnline;
    var _bSpecialMode;
    
    var _aCbCompleted;
    var _aCbOwner;
    var _aRoomsOwnerList;
    var _aRoomsGameList;
    
    var _oCurConnection;
    var _oCurClient;
    var _oMessageForwarder;
    
    var _iPlayerOrderID;
    var _iMaxPlayers;
    var _iNumGamePlayers;
    var _iTypeRoomsListedCounter;
    var _iIdWaitingPlayersTimeout;
    var _iNumBot;
    
    var _szNickname;
    var _aNicknameList;
    var _aAvatarList;
    
    var _szCurRoomID;
    var _szCurRoomPass;
    var _szBotName;
    
    var _oThis;
    
    this._init = function(){
        _bStatusOnline = navigator.onLine;
        
        _aCbCompleted = new Array();
        _aCbOwner = new Array();
        _aRoomsOwnerList = new Array();
        _aRoomsGameList = new Array();
        
        _iTypeRoomsListedCounter = 0;
        _iNumBot = 0;
        
        window.addEventListener('online',  this._onConnectionChangeStatusOnline);
        window.addEventListener('offline',  this._onConnectionChangeStatusOffline);
        
        _oMessageForwarder = new CNetworkMessageForwarder();
        
        _oThis = this;
    };

    this.unload = function(){
        s_oNetworkManager = null;
    };
    
    this.disconnectFromSystem = function(){
        g_oCTLMultiplayer.closeAllDialog();
        _oThis.disconnectFromCurRoom();
    };
    
    this.connectToSystem = function(){
        
        if(_bStatusOnline){
            //_oThis.addEventListener(ON_LOGIN_SUCCESS, _oThis.gotoLobby, _oThis);
            g_oCTLMultiplayer.showChooseNickName();
        }else {
            _oThis.showErrorMessage(TEXT_NO_CONNECTION);
        }
        
       
        /*
        this.login("test-"+Math.floor( Math.random()*100) );
        s_oNetworkManager.addEventListener(ON_LOGIN_SUCCESS, function(){
            s_oNetworkManager.createRoom("room-test", "", 3, true);
        });
        */
    };

    this.login = function(szNickname){
        
        if(!_oThis.isAllowed(szNickname)){
            g_oCTLMultiplayer.closeAllDialog();
            g_oCTLMultiplayer.showGeneralDialog(TEXT_INVALID_NAME, "g_oCTLMultiplayer.showChooseNickName");
            return;
        }
       
        _szNickname = szNickname;
        
        var szIDNickname = _oThis._setValidNick(szNickname);
        
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_SYS_LOADING);
        
        PlayerIO.useSecureApiRequests = !MULTIPLAYER_TEST_LOCAL;	
        
        PlayerIO.authenticate(GAME_PLAYERIO_ID, "public", { userId: szIDNickname }, {}, function (client) {
            _oCurClient = client;
            _oCurClient.multiplayer.useSecureConnections = !MULTIPLAYER_TEST_LOCAL;
            //console.log("Authenticated to PlayerIO as: " + client.connectUserId);

            if(MULTIPLAYER_TEST_LOCAL){
                
                _oCurClient.multiplayer.developmentServer = 'localhost:8184';
                
            }
            if(_aCbCompleted[ON_LOGIN_SUCCESS]){
                _aCbCompleted[ON_LOGIN_SUCCESS].call(_aCbOwner[ON_LOGIN_SUCCESS]);
            }
            
            //_oThis.gotoLobby();
            
        }, _oThis.callbackError);
    };
    
    this._stripHTML = function(myString){
        return myString.replace(/<[^>]*>?/gm, '');
    };
    
    this.isAllowed = function(szNickname){
        var bAllowed = true;
        
        var szCheckWord = szNickname.toLocaleLowerCase();
        
        for(var i=0; i<FORBIDDEN_LIST.length; i++){
            var szForbiddenName = FORBIDDEN_LIST[i];
            if(szCheckWord.includes(szForbiddenName)){
                bAllowed = false;
                break;
            }
        }

        return bAllowed;
    };

    this._setValidNick = function(szNickname){
        var szValidNickname;
        var szCodeNumber = _oThis._getRandomCodeNumber();
        
        ///EMPTY CASE
        if(szNickname === ""){
            szValidNickname = "guest-"+szCodeNumber;
            _szNickname = szValidNickname;
        } else {
            szValidNickname = szNickname +"-"+ szCodeNumber;
        }
        
        return szValidNickname; 
    };

    this._getRandomCodeNumber = function(){
        return Math.floor( Math.random()*1000);
    };


    this.generateRandomName = function(){
        var aListName = [
            "xmariox", "alex", "max", "mahuro", "biajus", "rob", "idah", "fabrix", "seth", "ikillyou", "commander", "admiral", "general", "seasalt", "emperorofthesea",
            "Aspect","Kraken","Dragon","Shiver","Dracula","Doom","Scar","Roadkill","Cobra","Psycho","Ranger","Ripley","Clink","Bruise","Bowser","Creep","Cannon","Daemon",
            "Steel","Tempest","Hurricane","Titanium","Tito", "Lightning", "IronHeart", "Sabotage" ,"Rex", "Hydra", "Terminator", "Agrippa", "Gash",
            "Blade","Katana","Gladius","Angon","Claymore","Pike","Hammer","Club","Heart","Gauntlet","Montante","Longbow","bow","Dagger"
        ];

        var iRandomIndex = Math.floor( Math.random()*aListName.length );
        var szRandomName = aListName[iRandomIndex];

        /////SET RANDOM NUMBER
        if(Math.random()> 0.5){
            var szRandomNumber = Math.floor( Math.random()*100 );
            /////ADD SPECIAL CHAR
            if(Math.random() > 0.5){
                var aSpecial = ["-", "_"];
                var iRandomIndex = Math.floor( Math.random()*aSpecial.length );
                var szSpecialChar = aSpecial[iRandomIndex];

                szRandomName += szSpecialChar;
            }
            szRandomName += szRandomNumber;
        }

        _szBotName = szRandomName;
        
        return szRandomName;
    };  

    this.getBotName = function(){
        return _szBotName;
    };

    this._onConnectionChangeStatusOnline = function(event){
        _bStatusOnline = true;
        
        if(_aCbCompleted[ON_STATUS_ONLINE]){
            _aCbCompleted[ON_STATUS_ONLINE].call(_aCbOwner[ON_STATUS_ONLINE]);
        }
        
        if ( jQuery(".ctl-multiplayer-dlg-content").length > 0 ){
            _oThis._onReconnection();
        }
    };

    this._onConnectionChangeStatusOffline = function(){
        _bStatusOnline = false;
        
        if(_aCbCompleted[ON_STATUS_OFFLINE]){
            _aCbCompleted[ON_STATUS_OFFLINE].call(_aCbOwner[ON_STATUS_OFFLINE]);
        }
        
        if ( jQuery(".ctl-multiplayer-dlg-content").length > 0 ){
            _oThis.showErrorMessage(TEXT_NO_CONNECTION);
            
            _oThis.disconnect();
        }
    };

    this._onReconnection = function(){
        if(_szNickname === null || _szNickname === undefined){
            g_oCTLMultiplayer.closeAllDialog();
            _oThis.connectToSystem();
        }else {
            g_oCTLMultiplayer.closeAllDialog();
            _oThis.gotoLobby();
        }
    };

    this.showErrorMessage = function(szMsg){
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showGeneralDialog( szMsg, "g_oCTLMultiplayer.closeAllDialog");
    };

    this.addEventListener = function(iEvent,cbCompleted, cbOwner){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    ///////////////////////////////// EVENT FUNCTIONS
    //Log all errors to console
    this.callbackError = function(error) {
        console.log("Error: " + error.code + " - " + error.message);
        if(_aCbCompleted[ON_CONNECTION_ERROR]){
            _aCbCompleted[ON_CONNECTION_ERROR].call(_aCbOwner[ON_CONNECTION_ERROR], error);
        }
        
        _oThis.showErrorMessage(error);
    };
    
    //Log disconnection
    this.callbackDisconnect = function(error) {
        console.log("Disconnected From Menu");
        if(_aCbCompleted[ON_DISCONNECTION]){
            _aCbCompleted[ON_DISCONNECTION].call(_aCbOwner[ON_DISCONNECTION], error);
        }
    };
    
    this.callbackDisconnectFromMatch = function(error){
        console.log("Disconnected From Match");
        if(_aCbCompleted[ON_DISCONNECTION_FROM_MATCH]){
            _aCbCompleted[ON_DISCONNECTION_FROM_MATCH].call(_aCbOwner[ON_DISCONNECTION_FROM_MATCH], error);
        }
    };
    
    //////////////////// COMMUNICATION TO SERVER /////////
    this.sendMsg = function(szMessage, oParam){
        if(_oCurConnection){
            _oCurConnection.send(szMessage, oParam);
        }
    };
    //////////////////////////////////////////////////////

    this.disconnect = function(){
        if(_oCurConnection){
            _oCurConnection.disconnect();
            _oCurConnection = null;
        }
        
    };
    
    this.isUserA = function(){
        return parseInt(_iPlayerOrderID) === 0 ? true:false;
    };
    
    this.getPlayerOrderID = function(){
        return _iPlayerOrderID;
    };
    
    this.getPlayerNickname = function(){
        return _szNickname;
    };
    
    this.getNicknameByID = function(iID){
        return _aNicknameList[iID];
    };
    
    this.getNicknameList = function(){
        return _aNicknameList;
    };
    
    this.getAvatarByID = function(iID){
        return _aAvatarList[iID];
    };
    
    this.getAvatarList = function(){
        return _aAvatarList;
    };
    
    this.setSpecialMode = function(bSpecial){
        _bSpecialMode = bSpecial;
    };

    ////////////////////////////////////////////////////////////
    ///////////////////// ROOMS SYSTEM FUNCTIONS////////////////

    this.createRoom = function(szRoomID, szPass, iMaxPlayers, bSpecialMode){
        _oThis.addEventListener(ON_USEROWNERROOM_CREATE_SUCCESS, _oThis._onRoomCreated);

        //Use local development server
        if(MULTIPLAYER_TEST_LOCAL){
            _oCurClient.multiplayer.developmentServer = 'localhost:8184';
        }
        //console.log("maxusers:"+iMaxPlayers)
        //Join the room
        _oCurClient.multiplayer.createJoinRoom(szRoomID, ROOM_TYPE_USEROWNER, true, 
            {id: szRoomID, pass: szPass, curusers:1, maxusers: iMaxPlayers, specialmode: bSpecialMode}, 
            {nickname:_szNickname, avatar:""}, 
            function (connection) {

                //console.log("create owner room for user: " + _oCurClient.connectUserId);
                _oCurConnection = connection;
                connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
                connection.addDisconnectCallback(_oThis.callbackDisconnect);

                if(_aCbCompleted[ON_USEROWNERROOM_CREATE_SUCCESS]){
                    _aCbCompleted[ON_USEROWNERROOM_CREATE_SUCCESS].call(_aCbOwner[ON_USEROWNERROOM_CREATE_SUCCESS]);
                }


            }, _oThis.callbackError);
    };
    
    this.joinRoom = function(szRoomID){
        _oThis.addEventListener(ON_CONNECTION_ERROR, _oThis._onRoomJoinedFailed);
        _oThis.addEventListener(ON_USEROWNERROOM_JOIN_SUCCESS, _oThis._onRoomJoined);
        //console.log("join room as: " + _oCurClient.connectUserId);

        _szCurRoomID = szRoomID;

        //Use local development server
        if(MULTIPLAYER_TEST_LOCAL){
            _oCurClient.multiplayer.developmentServer = 'localhost:8184';
        }

        //Join the room
        _oCurClient.multiplayer.joinRoom(szRoomID, {nickname:_szNickname, avatar:""}, function (connection) {
            _oCurConnection = connection;
            connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
            connection.addDisconnectCallback(_oThis.callbackDisconnect);

            if(_aCbCompleted[ON_USEROWNERROOM_JOIN_SUCCESS]){
                _aCbCompleted[ON_USEROWNERROOM_JOIN_SUCCESS].call(_aCbOwner[ON_USEROWNERROOM_JOIN_SUCCESS]);
            }
        }, _oThis.callbackError);
    };
    
    this.gotoGameRoom = function(oMessage){
        //Use local development server
        if(MULTIPLAYER_TEST_LOCAL){
            _oCurClient.multiplayer.developmentServer = 'localhost:8184';
        }

        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_MATCH_FOUND.toUpperCase());

        ///////COLLECT DATA
        var szRoomID = oMessage.getString(0);
        //console.log("szRoomID:"+szRoomID);
        _iPlayerOrderID = oMessage.getInt(1);
        //console.log("_iPlayerOrderID:"+_iPlayerOrderID);
        /*
        var szNicknameList = oMessage.getString(2);
        _aNicknameList = JSON.parse(szNicknameList);
        //console.log(_aNicknameList);
        
        var szAvatarList = oMessage.getString(3);
        _aAvatarList = JSON.parse(szAvatarList);
        //console.log(_aAvatarList);
        
        _iNumGamePlayers = _aNicknameList.length;

        _iNumBot = oMessage.getInt(4);
        */
        
        var oPlayersInfo = oMessage.getString(2);
        var oPlayersObj = JSON.parse(oPlayersInfo);
        var aPlayersInfo = Object.values(oPlayersObj);

        s_bSpecialMode = oMessage.getBoolean(3);

        _aNicknameList = new Array();
        _aAvatarList = new Array();
        for(var i=0; i<aPlayersInfo.length; i++){
            _aNicknameList[i] = aPlayersInfo[i].nickname;
            _aAvatarList[i] = aPlayersInfo[i].avatar;
        }

        _iNumGamePlayers = aPlayersInfo.length;

        //console.log("gotoGameRoom")

        //Join the room
        _oCurClient.multiplayer.createJoinRoom(szRoomID, ROOM_TYPE_GAME, true, {/*numgameplayers: _iNumGamePlayers,*/ pass:"", /*curusers:_iNumGamePlayers,*/ maxusers:_iNumGamePlayers,/*, jokeravailable: JOKER_AVAILABLE*/playersinfo: oPlayersInfo, specialmode: s_bSpecialMode}, {ingameid: _iPlayerOrderID}, function (connection) {     
                _oThis.disconnectFromCurRoom();
                _oCurConnection = connection;
                connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
                connection.addDisconnectCallback(_oThis.callbackDisconnectFromMatch);

                s_oCrazyApiManager.hideInviteButton();
                console.log("game found! move players to a game room");

                //g_oCTLMultiplayer.closeAllDialog();

                if(_aCbCompleted[ON_GAMEROOM_CONNECTION_SUCCESS]){
                    _aCbCompleted[ON_GAMEROOM_CONNECTION_SUCCESS].call(_aCbOwner[ON_GAMEROOM_CONNECTION_SUCCESS], _iNumGamePlayers);
                }
                
                _oThis._onGameRoomEntered();
                
        }, _oThis.callbackError);
    };
    
    
    this.gotoGameRoomWithBot = function(){
        ///ITS USE IS JUST TO FILL IN LIST ROOMS
        
        //Use local development server
        if(MULTIPLAYER_TEST_LOCAL){
            _oCurClient.multiplayer.developmentServer = 'localhost:8184';
        }
        
        var szRoomID = randomFloatBetween(1000000, 2000000,0) + "";
        
        _iPlayerOrderID = 0;
        
        _aNicknameList = new Array();
        _aNicknameList[0] = _szNickname;
        _aNicknameList[1] = _szBotName;
        
        _aAvatarList = new Array();
        _aAvatarList[0] = "";
        _aAvatarList[1] = "";
        
        //Join the room
        _oCurClient.multiplayer.createJoinRoom(szRoomID, ROOM_TYPE_GAME, true, {/*numgameplayers: 2,*/ pass:"", /*curusers:2,*/ maxusers:2, bot:true}, {ingameid: _iPlayerOrderID}, function (connection) {
                _oThis.disconnectFromCurRoom();
                _oCurConnection = connection;
                connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
                connection.addDisconnectCallback(_oThis.callbackDisconnectFromMatch);

                //console.log("game found! move players to a game room");

                g_oCTLMultiplayer.closeAllDialog();

        }, _oThis.callbackError);
    };  
    
    this.gotoMatchMakingRoom = function(bSpecialMode){
        //Use local development server
        if(MULTIPLAYER_TEST_LOCAL){
            _oCurClient.multiplayer.developmentServer = 'localhost:8184';
        }

        //Join the room
        _oCurClient.multiplayer.createJoinRoom('matchmakingroom2', ROOM_TYPE_MATCHMAKING, true, {specialmode:bSpecialMode}, {nickname:_szNickname, avatar:""}, function (connection) {
                _oCurConnection = connection;
                connection.addMessageCallback("*", _oMessageForwarder.messageHandler);
                connection.addDisconnectCallback(_oThis.callbackDisconnect);

                //console.log("Connected to matchmaking room");

                if(_aCbCompleted[ON_MATCHMAKING_CONNECTION_SUCCESS]){
                    _aCbCompleted[ON_MATCHMAKING_CONNECTION_SUCCESS].call(_aCbOwner[ON_MATCHMAKING_CONNECTION_SUCCESS]);
                }
                
                g_oCTLMultiplayer.closeAllDialog();
                g_oCTLMultiplayer.showLoading(TEXT_FIND_OPPONENT, "s_oNetworkManager._onDisconnectFromARoom");
        

        }, _oThis.callbackError);
    };

    this._onGameRoomEntered = function(){
        _iIdWaitingPlayersTimeout = setTimeout(function(){
            g_oCTLMultiplayer.closeAllDialog();
            g_oCTLMultiplayer.showGeneralDialog(TEXT_OPPONENT_LEFT, "s_oNetworkManager.gotoLobby");
            _oThis.disconnect();
        }, WAITING_PLAYERS_TIMEOUT);
    };

    this.onGameStarted = function(){
        g_oCTLMultiplayer.closeAllDialog();
        clearTimeout(_iIdWaitingPlayersTimeout);
    };

    this.tryCreateUniqueRoom = function(szRoomID, szPass, iMaxPlayers, bSpecialMode ){
        if(!_oThis.isAllowed(szRoomID)){
            //g_oCTLMultiplayer.closeAllDialog();
            g_oCTLMultiplayer.saveProvisionalDialog();
            
            g_oCTLMultiplayer.showGeneralDialog( TEXT_INVALID_NAME, "g_oCTLMultiplayer.resumePrevDialog");
            return;
        }
        
        _szCurRoomID = szRoomID;
        _szCurRoomPass = szPass;
        _iMaxPlayers = iMaxPlayers;
        _bSpecialMode = bSpecialMode;
        
        g_oCTLMultiplayer.showLoading(TEXT_NETWORK_CONNECTING);

        _oCurClient.multiplayer.listRooms(ROOM_TYPE_USEROWNER, {id: szRoomID}, 0,0,_oThis._onUniqueListRoomSearch, _oThis.callbackError);
    };
    
    this._onUniqueListRoomSearch = function(aRooms){
        if(aRooms.length > 0){
            ///ANOTHER ROOM WITH SAME NAME EXIST!
            _szCurRoomID += "-" + _oThis._getRandomCodeNumber();
        }
        
        _oThis.createRoom(_szCurRoomID, _szCurRoomPass, _iMaxPlayers, _bSpecialMode);
    };

    this._onPlayNow = function(){
        _oThis.sendMsg(MSG_PLAYNOW, "");
    };
    
    this._addBotInRoom = function(){
        if(!COMBINED_PLAYERS_MODE){
            return;
        }
        _oThis.sendMsg(MSG_ADDBOT, _oThis.generateRandomName()+"-bot");
        ////prevent accidentally double click
        jQuery('.ctl-multiplayer-room-add-bot').addClass('ctl-multiplayer-display-none');
        jQuery('.ctl-multiplayer-room-remove-bot').addClass('ctl-multiplayer-display-none');
    };
    
    this._removeBotInRoom = function(){
        if(!COMBINED_PLAYERS_MODE){
            return;
        }
        _oThis.sendMsg(MSG_REMOVEBOT, "");
        ////prevent accidentally double click
        jQuery('.ctl-multiplayer-room-add-bot').addClass('ctl-multiplayer-display-none');
        jQuery('.ctl-multiplayer-room-remove-bot').addClass('ctl-multiplayer-display-none');
    };
    
    this.onBotAdded = function(iNumBot){
        if(!COMBINED_PLAYERS_MODE){
            return;
        }
        //console.log("BOTADDED:"+iNumBot)

        jQuery('.ctl-multiplayer-room-add-bot').removeClass('ctl-multiplayer-display-none');
        jQuery('.ctl-multiplayer-room-remove-bot').removeClass('ctl-multiplayer-display-none');
    };
    
    this.onBotRemoved = function(iNumBot){
        if(!COMBINED_PLAYERS_MODE){
            return;
        }
        //console.log("BOTREMOVED:"+iNumBot);
        
        if(iNumBot>0){
            jQuery('.ctl-multiplayer-room-add-bot').removeClass('ctl-multiplayer-display-none');
            jQuery('.ctl-multiplayer-room-remove-bot').removeClass('ctl-multiplayer-display-none');
        }else {
            jQuery('.ctl-multiplayer-room-add-bot').removeClass('ctl-multiplayer-display-none');
            jQuery('.ctl-multiplayer-room-remove-bot').addClass('ctl-multiplayer-display-none');
        }
    };
    
    this.disconnectFromCurRoom = function(){
        if(_oCurConnection){
            ////SILENT DISCONNECTION. PREVENT USELESS DISCONNECTION MESSAGE
            //console.log("TEST")
            _oCurConnection.removeDisconnectCallback(_oThis.callbackDisconnect);
            _oCurConnection.disconnect();
        }
    };
    
    this._onDisconnectFromARoom = function(){
        if(_aCbCompleted[ON_BACK_FROM_A_ROOM]){
            _aCbCompleted[ON_BACK_FROM_A_ROOM].call(_aCbOwner[ON_BACK_FROM_A_ROOM]);
        }
        
        s_oCrazyApiManager.hideInviteButton();
        
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_CONNECT_TO_LOBBY);
        _oThis.disconnectFromCurRoom();

        ///Seems there is some delay to listrooms when you delete a room. Even with a callback to disconnect function
        setTimeout(function(){
            _oThis.gotoLobby();
        }, 500);
    };
    
    this.inviteLink = function(){
        //ENCODE IN BASE64 BECOUSE ROOM ID CAN HAVE SPACES AND URL DON'T SUPPORT SPACES, OR OTHER SPECIAL CHAR
        var szBase64RoomID = btoa(_szCurRoomID);
        var szBase64Pass = btoa(_szCurRoomPass);
        
        s_oCrazyApiManager.showInviteButton(szBase64RoomID, szBase64Pass);
        
        s_oCrazyApiManager.inviteLink(szBase64RoomID, szBase64Pass, this._onInviteLink);
    };

    this._onInviteLink = function(error, link){
        if (error) {
            console.log("Invite link error (callback)", error);
            
        } else {
            console.log("Invite link (callback)", link);
            
            var oInputField = $(".ctl-multiplayer-room-link").val(link);
        }
    };

    this._onClickInvite = function(){

    };

    this._onRoomCreated = function(){
        ///////// USER CREATED AND JOINED A ROOM
        
        var oPlayNowButton = {id:"playnow", func : "s_oNetworkManager._onPlayNow", label : TEXT_PLAY_NOW, classes : "ctl-multiplayer-room-play-now ctl-multiplayer-display-none" };
        var oBackButton = {id:"back", func : "s_oNetworkManager._onDisconnectFromARoom", label : TEXT_SYS_BACK };
        var oAddBotButton = {id:"addbot", func : "s_oNetworkManager._addBotInRoom", label : TEXT_SYS_ADD_BOT, classes : "ctl-multiplayer-room-add-bot ctl-multiplayer-display-block"};
        var oRemoveBotButton = {id:"removebot", func : "s_oNetworkManager._removeBotInRoom", label : TEXT_SYS_REMOVE_BOT, classes : "ctl-multiplayer-room-remove-bot ctl-multiplayer-display-none"};
        var oInviteButton = {id:"invite", func : "s_oNetworkManager._onClickInvite", label : TEXT_SYS_INVITE, classes : "ctl-multiplayer-room-invite"};
        
        _oThis.inviteLink();
        
        var szLink = "waiting for link...";
        
        var aButtonList = [oPlayNowButton, oBackButton, oInviteButton];
        if(COMBINED_PLAYERS_MODE){
            aButtonList.push(oAddBotButton, oRemoveBotButton);
        }
        
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showWaitingPlayersInRoom(TEXT_WAITING_FOR_PLAYERS_IN_ROOM +_szCurRoomID,
                _bSpecialMode,
                [_szNickname], 
                aButtonList,
                szLink
        );
        
        tippy('#link', {
            content: TEXT_SYS_COPIED_TO_CLIPBOARD,
            trigger: 'click',
            duration: 100,
        });
        
        const instance = tippy('#invite', {
            content: TEXT_SYS_COPIED_TO_CLIPBOARD,
            trigger: 'click',
            duration: 100,
        });
                
        var clipboard = new ClipboardJS('.ctl-multiplayer-room-invite');
        var clipboard = new ClipboardJS('.ctl-multiplayer-room-link');
                
                
        
                
    };
    
    this._onRoomJoined = function(){
        ///////// USER JOINED A ROOM
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showWaitingPlayersInRoom(TEXT_WAITING_FOR_PLAYERS_IN_ROOM +_szCurRoomID,
                _bSpecialMode,
                [], 
                [
                    { func : "s_oNetworkManager._onDisconnectFromARoom", label : TEXT_SYS_BACK }
                ]);
    };
    
    this._onRoomJoinedFailed = function(szError){
        _oThis.addEventListener(ON_CONNECTION_ERROR, function(){});
        
        switch(szError.code){
            case ERROR_CODE_UNKNOWNROOM: {
                    g_oCTLMultiplayer.closeAllDialog();
                    g_oCTLMultiplayer.showGeneralDialog(TEXT_ROOM_DOESNT_EXIST, "s_oNetworkManager.gotoLobby");
                break;
            }
        }
    };
    
    this.gotoLobby = function(){
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_CONNECT_TO_LOBBY);
        
        _oThis.refreshRooms();
    };
    
    this.refreshRooms = function(){
        _oCurClient.multiplayer.listRooms(ROOM_TYPE_USEROWNER, null, 0,0,_oThis._onFillWithOwnerRoom, _oThis.callbackError);
        _oCurClient.multiplayer.listRooms(ROOM_TYPE_GAME, null, 0,0,_oThis._onFillWithGameRoom, _oThis.callbackError);
    };
    
    this._onFillWithOwnerRoom = function(aRooms){
        _iTypeRoomsListedCounter++;
        
        _oThis._extractOwnerRoomInfo(aRooms);
 
        if(_iTypeRoomsListedCounter >= 2){
            _oThis._onFinalUpdateRoomList();
        }
        
        //console.log(aRooms)
    };
    
    this._onFillWithGameRoom = function(aRooms){
        _iTypeRoomsListedCounter++;
        
        _oThis._extractGameRoomInfo(aRooms);
        
        if(_iTypeRoomsListedCounter >= 2){
            _oThis._onFinalUpdateRoomList();
        }
        
        //console.log(aRooms)
    };
    
    this._onFinalUpdateRoomList = function(){
        var aCombRooms = _oThis._getCombinedRoomsLists();
        
        if ( jQuery(".ctl-multiplayer-room-list").length > 0 ){
            g_oCTLMultiplayer.refreshRoomList(aCombRooms);
        }else{
            this._showLobby(aCombRooms);                
        }        
        
        this.refreshListHeight();
    };

    this.refreshListHeight = function(){
        /*
        var szMaxHeight;

        var szHeight = jQuery("#canvas").css("height");
        var szCut = jQuery("#canvas").css("top");

        var iHeight = parseInt( szHeight.replace("px", "") );
        var iCut = parseInt( szCut.replace("px", "") );

        var iWindowView = iHeight + iCut*2;
        var iMargins = 320;

        var iListHeight = iWindowView - iMargins;

        szMaxHeight = iListHeight+"px";
         */
        
        /*
        var szMaxHeight = "300px";
        if(s_bMobile){
            szMaxHeight = "70px";
        }

        $(".ctl-multiplayer-room-list").css("max-height", szMaxHeight)
         * 
         */
    };

    this._showLobby = function(aRooms){
        _iTypeRoomsListedCounter = 0;
        
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showRoomList(aRooms);
        //_oThis._autoRefreshRooms();
    };
    
    this._extractOwnerRoomInfo = function(aRooms){
        _aRoomsOwnerList = new Array();
        for(var i=0; i<aRooms.length; i++){
            var bPrivate = aRooms[i].roomData.pass.length === 0 ? false : true;
            var bSpecial = aRooms[i].roomData.specialmode === "true" ? true : false;
            _aRoomsOwnerList[i] = {
                                       name: aRooms[i].id, 
                                       private:bPrivate,
                                       accessible : true,
                                       curusers: aRooms[i].roomData.curusers,
                                       maxusers: aRooms[i].roomData.maxusers,
                                       specialmode: bSpecial,
                                    };
        }
        
        return _aRoomsOwnerList;
    };

    this._extractGameRoomInfo = function(aRooms){
        _aRoomsGameList = new Array();
        
        
        //FILL WITH FAKE ROOMS
        /*
        var oObjRoom = {id: 0, roomData:{pass:"", curusers:1, maxusers:4} };
        aRooms = new Array();
        for(var i=0; i<40; i++){
            aRooms.push(oObjRoom);
        }
        */
        
        for(var i=0; i<aRooms.length; i++){
            var bPrivate = aRooms[i].roomData.pass.length === 0 ? false : true;
            var bSpecial = aRooms[i].roomData.specialmode === "true" ? true : false;
            _aRoomsGameList[i] = { 
                                   name: "game-"+aRooms[i].id, 
                                   private: bPrivate,
                                   accessible : false,
                                   curusers: aRooms[i].roomData.curusers,
                                   maxusers: aRooms[i].roomData.maxusers,
                                   specialmode: bSpecial,
                                  };
        }
        
        return _aRoomsGameList;
    };
    
    this._getCombinedRoomsLists = function(){
        var aRooms = new Array();
        for(var i=0; i<_aRoomsOwnerList.length; i++){
            aRooms.push(_aRoomsOwnerList[i]);
        }
        for(var i=0; i<_aRoomsGameList.length; i++){
            aRooms.push(_aRoomsGameList[i]);
        }
        
        return aRooms;
    };
    
    
    
    this.joinQuickMatch = function(bSpecialMode){
        g_oCTLMultiplayer.showLoading(TEXT_NETWORK_CONNECTING);
        
        _bSpecialMode = bSpecialMode;
        
        _oThis.gotoMatchMakingRoom(bSpecialMode);
    };

    this.tryJoinFromInvitation = function(szRoomID, szPass){
        _szCurRoomID = atob(szRoomID);
        _szCurRoomPass = atob(szPass);

        //trace("_szCurRoomID:"+_szCurRoomID)
        //trace("_szCurRoomPass:"+_szCurRoomPass)

        _oThis.addEventListener(ON_ROOM_INFO_RETURNED, _oThis._checkRoomAvailableFromInvitation);
        _oThis.getRoomInfo(_szCurRoomID, _szCurRoomPass);
    };

    this._checkRoomAvailableFromInvitation = function(aRoomInfo){
        if(aRoomInfo.length > 0){
            //"PERMISSIONGRANTED"
            _bSpecialMode = aRoomInfo[0].roomData.specialmode === "true" ? true : false;
            _oThis.joinRoom(aRoomInfo[0].roomData.id, aRoomInfo[0].roomData.pass);
        }else {
            //"PERMISSIONREFUSED"
            g_oCTLMultiplayer.closeAllDialog();
            g_oCTLMultiplayer.showGeneralDialog(TEXT_ROOM_IS_EXPIRED, "s_oNetworkManager.gotoLobby");
        }
    };

    this.tryJoinRoomWithPass = function(szRoomID, szPass){
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showLoading(TEXT_NETWORK_CONNECTING);
        
        _szCurRoomID = szRoomID;
        _szCurRoomPass = szPass;
        
        //trace("_szCurRoomID:"+_szCurRoomID)
        //trace("_szCurRoomPass:"+_szCurRoomPass)
        
        _oThis.addEventListener(ON_ROOM_INFO_RETURNED, _oThis._checkUserPermissionToJoin);
        _oThis.getRoomInfo(szRoomID, szPass);
    };
    
    this._checkUserPermissionToJoin = function(aRoomInfo){
        if(aRoomInfo.length > 0){
            //"PERMISSIONGRANTED"
            _bSpecialMode = aRoomInfo[0].roomData.specialmode === "true" ? true : false;
            _oThis.joinRoom(aRoomInfo[0].roomData.id, aRoomInfo[0].roomData.pass);
        }else {
            //"PERMISSIONREFUSED"
            g_oCTLMultiplayer.closeAllDialog();
            g_oCTLMultiplayer.showGeneralDialog(TEXT_WRONG_PASSWORD, "s_oNetworkManager._onPasswordFailed");
        }
    };
    
    this._onPasswordFailed = function(){
        g_oCTLMultiplayer.closeAllDialog();
        g_oCTLMultiplayer.showTypeRoomPassword(_szCurRoomID);
    };
    
    this.getRoomInfo = function(szRoomID, szPass){
        _oCurClient.multiplayer.listRooms(ROOM_TYPE_USEROWNER, {id: szRoomID, pass: szPass}, 0,0, _oThis._onRoomInfoReturned, _oThis.callbackError);
    };
    
    this._onRoomInfoReturned = function(aRoomInfo){
        if(_aCbCompleted[ON_ROOM_INFO_RETURNED]){
            _aCbCompleted[ON_ROOM_INFO_RETURNED].call(_aCbOwner[ON_ROOM_INFO_RETURNED], aRoomInfo);
        }
    };

    this.filterRoomsShown = function(szFilter){
        var aCombRooms = _oThis._getCombinedRoomsLists();

        szFilter = szFilter.toLowerCase();

        var aRoomsToShown = new Array();
        for(var i=0; i<aCombRooms.length; i++){
            var szRoomName = aCombRooms[i].name.toLowerCase();

            if(szRoomName !== undefined && szRoomName.includes(szFilter)){
                aRoomsToShown.push(aCombRooms[i]);
            }
        }
        
        if(szFilter.length>0){
            g_oCTLMultiplayer.refreshRoomList(aRoomsToShown);
        }else {
            g_oCTLMultiplayer.refreshRoomList(aCombRooms);
        }
    };

    this._init();
}

