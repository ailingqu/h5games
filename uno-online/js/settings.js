var CANVAS_WIDTH = 1920;
var CANVAS_HEIGHT = 1080;

var EDGEBOARD_X = 256;
var EDGEBOARD_Y = 84;

var PRIMARY_FONT = "comfortaabold";

var FPS           = 30;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;
var ENABLE_FULLSCREEN = true;

var GAME_PLAYERIO_ID = "four-colors-uno-gvzclncvwesv46dkzyoh9w";
var GAME_NAME = "four_colors";
var MULTIPLAYER_TEST_LOCAL = false;
var COMBINED_PLAYERS_MODE = false;

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_HELP    = 1;
var STATE_GAME    = 3;
var STATE_SELECT_PLAYERS = 4;

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_DRAG_START  = 4;
var ON_DRAG_END    = 5;
var ON_CARD_DEALED = 6;
var ON_HOME = 7;
var ON_CHECK = 8;
var ON_NEXT = 9;

var MODE_EASY = 0;
var MODE_MEDIUM = 1;
var MODE_HARD = 2;

var ENABLE_CHECK_ORIENTATION;
var ENABLE_FULLSCREEN;

var AD_SHOW_COUNTER;

var NUM_PLAYERS; 
var STARTING_NUM_CARDS;

var CARD_WIDTH = 156;
var CARD_HEIGHT = 242;
var SOUNDTRACK_VOLUME_IN_GAME = 0.4;

var DEBUG_SHOW_CARDS = false;

/////////// CUSTOM PARAM
var CARD_SCORE = [0,1,2,3,4,5,6,7,8,9,20,20,20,50,50];
var NUM_PENALTY_CARDS = 2;
var GAME_SCORE_WIN = 250;
var UNO_CLICK_TIME = 2000;
var UNO_OPPONENT_DELAY_TIME = 1000;

var TIME_PER_MOVE = 30000;                  /////Time a player has to do a move in multiplayer game (expressed in milliseconds), 
var TIME_HURRYUP_WARNING = 3000;           ////Warning alert of the timer. Below this time (in milliseconds), a player will be notified.
var TIME_CONTROLLER_RADIUS = 50;
var NUM_ATTEMPT = 3;                        ///num turns, before you get kicked
/////////////////////////////

/////////// AI PARAMS
var ADDITIONAL_DRAW_PERC = [20, 10, 0];
var PASS_TURN_PERC = [20,10,0];
var STACK_RESPOND_PERC = [20, 50, 100];
var PLAYER_NUM_CARDS_WARNING = 3;

var ON_HUMAN_INTERACTION = "human_interact";

var ON_TIMER_END = 0;
var ON_LAST_TIMER_END = 1;

var BOTTOM = 0;
var TOP = 1;
var LEFT = 2;
var RIGHT = 3;

var HAND_POS = new Array();
HAND_POS["num_player_2"] = [{x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)+350, side: BOTTOM},{x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)-350, side: TOP}];
HAND_POS["num_player_3"] = [{x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)+350, side: BOTTOM},{x:(CANVAS_WIDTH/2)-650, y: (CANVAS_HEIGHT/2)-40, side: LEFT},
                            {x:(CANVAS_WIDTH/2)+650, y: (CANVAS_HEIGHT/2)-40, side: RIGHT}];
HAND_POS["num_player_4"] = [{x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)+350, side: BOTTOM},{x:(CANVAS_WIDTH/2)-650, y: (CANVAS_HEIGHT/2)-40, side: LEFT},
                            {x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)-350, side: TOP},{x:(CANVAS_WIDTH/2)+650, y: (CANVAS_HEIGHT/2)-40, side: RIGHT}];

var FOTOGRAM_COLOR = 52;
var FOTOGRAM_DRAW_FOUR = 53;

var ON_COLOR_SELECTED = 0;

var ACTION_NEXT_TURN = 0;
var ACTION_USE_CARD = 1;
var ACTION_ON_SHUFFLECARDS = 2;
var ACTION_ON_DRAWCARDS = 3;
var ACTION_ON_UNO_CLICK = 4;
var ACTION_SELECT_COLOR = 5;
var ACTION_DRAW_FOUR = 6;
var ACTION_BLOCK_TURN = 7;
var ACTION_INVERT_TURN = 8;
var ACTION_DRAW_TWO_COLORED = 9;
var ACTION_SOMEONE_DECLARE_UNO = 10;
var ACTION_ON_UNO_SAVED_MESSAGE = 11;

var ACTION_DRAW_TWO_STACK_MODE = 12;
var ACTION_PASS_AND_DRAW = 13;
var ACTION_DRAW_FOUR_STACK_MODE = 14;
var ACTION_AFTER_CHOOSE_COLOR_IN_STACK_MODE = 15;
var ACTION_PLAYER_DISPOSED = 16;

var EFFECT_SELECT_COLOR = 0;
var EFFECT_DRAW_FOUR = 1;
var EFFECT_STOP = 2;
var EFFECT_INVERT_TURN = 3;
var EFFECT_DRAW_TWO_COLORED = 4;
var EFFECT_NORMAL_CARD = 5;

var ON_APPLY_EFFECT = 0;
var ON_APPLY_PENALITY = 1;
var ON_UNO_CLICK = 2;
var ON_UNO_SAVED_MESSAGE = 3;

var ON_PASS_TURN = 0;
var ON_PASS_AND_DRAW = 1;

var DRAW_TYPE_NORMAL = 0;
var DRAW_TYPE_PENALITY = 1;
var DRAW_TYPE_DRAW2_COLORED = 2;
var DRAW_TYPE_DRAW4 = 3;
var DRAW_TYPE_TIMER_END = 4;

var STACK_DRAW2_MODE = 0;
var STACK_DRAW4_MODE = 1;

var GAME_STATE_DEALING = "dealing";
var GAME_STATE_TURN_START = "turn_start";
var GAME_STATE_DRAW = "draw";
var GAME_STATE_CHOOSE_COLOR = "choose_color";
var GAME_STATE_STACK_MODE = "stack_mode";
var GAME_STATE_END = "game_end";

var PARAM_ROOM_ID = "roomid";
var PARAM_ROOM_PASS = "pass";