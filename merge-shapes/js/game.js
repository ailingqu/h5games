var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BoardUtil = /** @class */ (function () {
    function BoardUtil() {
    }
    BoardUtil.revive = function () {
        do {
            var i = 50;
            while (i-- > 0) {
                this.switchTwoRandomPieces();
            }
        } while (this.checkIfNeighboursMergable() == false);
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            var c = Cube.myCubesArray[i];
            c.tweenToBoardXAndY();
        }
    };
    BoardUtil.switchTwoRandomPieces = function () {
        var x = Math.floor(Math.random() * Consts.BOARD_WIDTH);
        var y = Math.floor(Math.random() * Consts.BOARD_HEIGHT);
        var c1 = CubeUtil.getCubeByBoardCoords(x, y);
        var x = Math.floor(Math.random() * Consts.BOARD_WIDTH);
        var y = Math.floor(Math.random() * Consts.BOARD_HEIGHT);
        var c2 = CubeUtil.getCubeByBoardCoords(x, y);
        this.switchTwoPieces(c1, c2);
    };
    BoardUtil.switchTwoPieces = function (c1, c2) {
        if (c1 == c2)
            return;
        var c1x = c1.boardX;
        var c2x = c2.boardX;
        var c1y = c1.boardY;
        var c2y = c2.boardY;
        c1.boardX = c2x;
        c1.boardY = c2y;
        c2.boardX = c1x;
        c2.boardY = c1y;
    };
    BoardUtil.checkIfNeighboursMergable = function () {
        var movesAvailable = false;
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            var c = Cube.myCubesArray[i];
            if (CubeUtil.areNeighboursMergable(c)) {
                return true;
            }
        }
        return false;
    };
    BoardUtil.fixBug = function () {
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            var c = Cube.myCubesArray[i];
            var j = Cube.myCubesArray.length;
            while (j-- > 0) {
                var c1 = Cube.myCubesArray[j];
                if (c.myIdx != c1.myIdx && c.boardX == c1.boardX && c.boardY == c1.boardY) {
                    c1.remove();
                }
            }
        }
    };
    BoardUtil.addDragCheck = function () {
        this.dragCheckLoop = SimpleGame.myGame.time.events.loop(5, BoardUtil.dragCheck, BoardUtil);
    };
    BoardUtil.removeDragCheck = function () {
        SimpleGame.myGame.time.events.remove(this.dragCheckLoop);
    };
    BoardUtil.dragCheck = function () {
        var dragStoppedX = SimpleGame.myGame.input.activePointer.screenX;
        var dragStoppedY = SimpleGame.myGame.input.activePointer.screenY;
        var deltaX = dragStoppedX - this.dragStartedX;
        var deltaY = dragStoppedY - this.dragStartedY;
        if (Math.abs(deltaX) > 30 || Math.abs(deltaY) > 30) {
            this.dragStopped();
        }
    };
    BoardUtil.dragStopped = function () {
        this.removeDragCheck();
        console.log("drag stopped");
        var dragStoppedX = SimpleGame.myGame.input.activePointer.screenX;
        var dragStoppedY = SimpleGame.myGame.input.activePointer.screenY;
        var deltaX = dragStoppedX - this.dragStartedX;
        var deltaY = dragStoppedY - this.dragStartedY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // horizontal movement
            if (deltaX > 0) {
                this.goRight(true);
            }
            else {
                this.goLeft(true);
            }
        }
        else {
            //vertical movement
            if (deltaY > 0) {
                this.goDown(true);
            }
            else {
                this.goUp(true);
            }
        }
    };
    BoardUtil.dragStarted = function (dragStarted, arg1) {
        if (this.MOVE_ACTIVE) {
            console.log("cannot drag, move in progress");
            return;
        }
        console.log("drag started");
        this.dragStartedX = SimpleGame.myGame.input.activePointer.screenX;
        this.dragStartedY = SimpleGame.myGame.input.activePointer.screenY;
        BoardUtil.addDragCheck();
    };
    BoardUtil.removeIdxBeforeUpgradeFromAllPieces = function () {
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            Cube.myCubesArray[i].myIdxBeforeUpgrade = -999;
        }
    };
    BoardUtil.goLeft = function (firstTry) {
        if (firstTry === void 0) { firstTry = false; }
        this.mergesArray = [0, 0, 0, 0];
        this.mergesIdxArray = [-1, -1, -1, -1];
        console.log("goleft called");
        this.MOVE_ACTIVE = true;
        this.MOVE_ACTIVE_ARR = [true, true, true, true];
        var i = Consts.BOARD_HEIGHT;
        while (i-- > 0) {
            SimpleGame.myGame.time.events.add(Consts.ROW_CHECK_DELTA * i, this.goLeftSingleRow, this, [i], [firstTry]);
        }
    };
    BoardUtil.goLeftSingleRow = function (i, firstTry) {
        console.log("go left single row: " + i, firstTry);
        var movedZeroPieces = true;
        var j = -1;
        while (++j < Consts.BOARD_WIDTH) {
            var c = CubeUtil.getCubeByBoardCoords(j, i);
            if (c == null)
                continue;
            if (c.myIdx == Cube.IDX_TILE_INFINITY)
                continue;
            if (this.moveSinglePieceLeft(c)) {
                movedZeroPieces = false;
            }
        }
        if (movedZeroPieces == false) {
            console.log("moved some pieces");
            SimpleGame.myGame.time.events.add(Consts.SINGLE_MOVE_DURATION, this.goLeftSingleRow, this, [i], [false]);
        }
        else {
            this.MOVE_ACTIVE_ARR[i] = false;
            if (this.MOVE_ACTIVE_ARR.indexOf(true) < 0) {
                BoardUtil.movementStopped(false);
            }
        }
    };
    BoardUtil.moveSinglePieceLeft = function (c) {
        if (c.boardX <= 0) {
            return false;
        }
        else {
            var nextPiece = CubeUtil.getCubeByBoardCoords(c.boardX - 1, c.boardY);
            if (nextPiece == null) {
                c.tweenLeft();
                return true;
            }
            else {
                if ((nextPiece.myIdx == c.myIdx || nextPiece.myIdx == Cube.IDX_TILE_MULTI || c.myIdx == Cube.IDX_TILE_MULTI) && nextPiece.myIdxBeforeUpgrade < 0 && c.myIdxBeforeUpgrade < 0) {
                    if (nextPiece.myIdx == c.myIdx && nextPiece.myIdx == Cube.IDX_TILE_MULTI) {
                        return false;
                    }
                    console.log("merge found: " + c.boardY);
                    c.tweenLeftAndMerge(nextPiece);
                    this.mergesArray[c.boardY]++;
                    this.mergesIdxArray[c.boardY] = c.myIdx;
                    return true;
                }
                else if ((nextPiece.myIdxBeforeUpgrade == c.myIdx || c.myIdx == Cube.IDX_TILE_MULTI) && c.myIdxBeforeUpgrade < 0) {
                    if (nextPiece.myIdx == c.myIdx && nextPiece.myIdx == Cube.IDX_TILE_MULTI) {
                        return false;
                    }
                    console.log("merge found: " + c.boardY);
                    c.tweenLeftAndMerge(nextPiece);
                    this.mergesArray[c.boardY]++;
                    this.mergesIdxArray[c.boardY] = c.myIdx;
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
    BoardUtil.goRight = function (firstTry) {
        if (firstTry === void 0) { firstTry = false; }
        this.mergesArray = [0, 0, 0, 0];
        this.mergesIdxArray = [-1, -1, -1, -1];
        this.MOVE_ACTIVE = true;
        this.MOVE_ACTIVE_ARR = [true, true, true, true];
        var i = Consts.BOARD_HEIGHT;
        while (i-- > 0) {
            SimpleGame.myGame.time.events.add(Consts.ROW_CHECK_DELTA * i, this.goRightSingleRow, this, [i], [firstTry]);
        }
    };
    BoardUtil.goRightSingleRow = function (i, firstTry) {
        var movedZeroPieces = true;
        var j = Consts.BOARD_WIDTH;
        while (j-- > 0) {
            var c = CubeUtil.getCubeByBoardCoords(j, i);
            if (c == null)
                continue;
            if (c.myIdx == Cube.IDX_TILE_INFINITY)
                continue;
            if (this.moveSinglePieceRight(c)) {
                movedZeroPieces = false;
            }
        }
        if (movedZeroPieces == false) {
            SimpleGame.myGame.time.events.add(Consts.SINGLE_MOVE_DURATION, this.goRightSingleRow, this, [i], [false]);
        }
        else {
            this.MOVE_ACTIVE_ARR[i] = false;
            if (this.MOVE_ACTIVE_ARR.indexOf(true) < 0) {
                BoardUtil.movementStopped(false);
            }
        }
    };
    BoardUtil.moveSinglePieceRight = function (c) {
        if (c.boardX >= Consts.BOARD_WIDTH - 1) {
            return false;
        }
        else {
            var nextPiece = CubeUtil.getCubeByBoardCoords(c.boardX + 1, c.boardY);
            if (nextPiece == null) {
                c.tweenRight();
                return true;
            }
            else {
                if ((nextPiece.myIdx == c.myIdx || nextPiece.myIdx == Cube.IDX_TILE_MULTI || c.myIdx == Cube.IDX_TILE_MULTI) && nextPiece.myIdxBeforeUpgrade < 0 && c.myIdxBeforeUpgrade < 0) {
                    if (nextPiece.myIdx == c.myIdx && nextPiece.myIdx == Cube.IDX_TILE_MULTI) {
                        return false;
                    }
                    c.tweenRightAndMerge(nextPiece);
                    this.mergesArray[c.boardY]++;
                    this.mergesIdxArray[c.boardY] = c.myIdx;
                    return true;
                }
                else if ((nextPiece.myIdxBeforeUpgrade == c.myIdx || c.myIdx == Cube.IDX_TILE_MULTI) && c.myIdxBeforeUpgrade < 0) {
                    if (nextPiece.myIdx == c.myIdx && nextPiece.myIdx == Cube.IDX_TILE_MULTI) {
                        return false;
                    }
                    c.tweenRightAndMerge(nextPiece);
                    this.mergesArray[c.boardY]++;
                    this.mergesIdxArray[c.boardY] = c.myIdx;
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
    BoardUtil.goDown = function (firstTry) {
        if (firstTry === void 0) { firstTry = false; }
        this.mergesArray = [0, 0, 0, 0];
        this.mergesIdxArray = [-1, -1, -1, -1];
        this.MOVE_ACTIVE = true;
        this.MOVE_ACTIVE_ARR = [true, true, true, true];
        var i = Consts.BOARD_HEIGHT;
        while (i-- > 0) {
            SimpleGame.myGame.time.events.add(Consts.ROW_CHECK_DELTA * i, this.goDownSingleRow, this, [i], [firstTry]);
        }
    };
    BoardUtil.goDownSingleRow = function (i, firstTry) {
        var movedZeroPieces = true;
        var j = Consts.BOARD_WIDTH;
        while (j-- > 0) {
            var c = CubeUtil.getCubeByBoardCoords(i, j);
            if (c == null)
                continue;
            if (c.myIdx == Cube.IDX_TILE_INFINITY)
                continue;
            if (this.moveSinglePieceDown(c)) {
                movedZeroPieces = false;
            }
        }
        if (movedZeroPieces == false) {
            SimpleGame.myGame.time.events.add(Consts.SINGLE_MOVE_DURATION, this.goDownSingleRow, this, [i], [false]);
        }
        else {
            this.MOVE_ACTIVE_ARR[i] = false;
            if (this.MOVE_ACTIVE_ARR.indexOf(true) < 0) {
                BoardUtil.movementStopped(false);
            }
        }
    };
    BoardUtil.moveSinglePieceDown = function (c) {
        if (c.boardY >= Consts.BOARD_HEIGHT - 1) {
            return false;
        }
        else {
            var nextPiece = CubeUtil.getCubeByBoardCoords(c.boardX, c.boardY + 1);
            if (nextPiece == null) {
                c.tweenDown();
                return true;
            }
            else {
                if ((nextPiece.myIdx == c.myIdx || nextPiece.myIdx == Cube.IDX_TILE_MULTI || c.myIdx == Cube.IDX_TILE_MULTI) && nextPiece.myIdxBeforeUpgrade < 0 && c.myIdxBeforeUpgrade < 0) {
                    if (nextPiece.myIdx == c.myIdx && nextPiece.myIdx == Cube.IDX_TILE_MULTI) {
                        return false;
                    }
                    c.tweenDownAndMerge(nextPiece);
                    this.mergesArray[c.boardX]++;
                    this.mergesIdxArray[c.boardX] = c.myIdx;
                    return true;
                }
                else if ((nextPiece.myIdxBeforeUpgrade == c.myIdx || c.myIdx == Cube.IDX_TILE_MULTI) && c.myIdxBeforeUpgrade < 0) {
                    if (nextPiece.myIdx == c.myIdx && nextPiece.myIdx == Cube.IDX_TILE_MULTI) {
                        return false;
                    }
                    console.log("next piece before upgrade");
                    c.tweenDownAndMerge(nextPiece);
                    this.mergesArray[c.boardX]++;
                    this.mergesIdxArray[c.boardX] = c.myIdx;
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
    BoardUtil.goUp = function (firstTry) {
        if (firstTry === void 0) { firstTry = false; }
        this.mergesArray = [0, 0, 0, 0];
        this.mergesIdxArray = [-1, -1, -1, -1];
        this.MOVE_ACTIVE = true;
        this.MOVE_ACTIVE_ARR = [true, true, true, true];
        var i = Consts.BOARD_HEIGHT;
        while (i-- > 0) {
            SimpleGame.myGame.time.events.add(Consts.ROW_CHECK_DELTA * i, this.goUpSingleRow, this, [i], [firstTry]);
        }
    };
    BoardUtil.goUpSingleRow = function (i, firstTry) {
        var movedZeroPieces = true;
        var j = -1;
        while (++j < Consts.BOARD_HEIGHT) {
            var c = CubeUtil.getCubeByBoardCoords(i, j);
            if (c == null)
                continue;
            if (c.myIdx == Cube.IDX_TILE_INFINITY)
                continue;
            if (this.moveSinglePieceUp(c)) {
                movedZeroPieces = false;
            }
        }
        if (movedZeroPieces == false) {
            SimpleGame.myGame.time.events.add(Consts.SINGLE_MOVE_DURATION, this.goUpSingleRow, this, [i], [false]);
        }
        else {
            this.MOVE_ACTIVE_ARR[i] = false;
            if (this.MOVE_ACTIVE_ARR.indexOf(true) < 0) {
                BoardUtil.movementStopped(firstTry);
            }
        }
    };
    BoardUtil.moveSinglePieceUp = function (c) {
        if (c.boardY <= 0) {
            return false;
        }
        else {
            var nextPiece = CubeUtil.getCubeByBoardCoords(c.boardX, c.boardY - 1);
            if (nextPiece == null) {
                c.tweenUp();
                return true;
            }
            else {
                if ((nextPiece.myIdx == c.myIdx || nextPiece.myIdx == Cube.IDX_TILE_MULTI || c.myIdx == Cube.IDX_TILE_MULTI) && nextPiece.myIdxBeforeUpgrade < 0 && c.myIdxBeforeUpgrade < 0) {
                    if (nextPiece.myIdx == c.myIdx && nextPiece.myIdx == Cube.IDX_TILE_MULTI) {
                        return false;
                    }
                    c.tweenUpAndMerge(nextPiece);
                    this.mergesArray[c.boardX]++;
                    this.mergesIdxArray[c.boardX] = c.myIdx;
                    return true;
                }
                else if ((nextPiece.myIdxBeforeUpgrade == c.myIdx || c.myIdx == Cube.IDX_TILE_MULTI) && c.myIdxBeforeUpgrade < 0) {
                    if (nextPiece.myIdx == c.myIdx && nextPiece.myIdx == Cube.IDX_TILE_MULTI) {
                        return false;
                    }
                    c.tweenUpAndMerge(nextPiece);
                    this.mergesArray[c.boardX]++;
                    this.mergesIdxArray[c.boardX] = c.myIdx;
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
    BoardUtil.movementStopped = function (firstTry) {
        console.log(this.mergesArray);
        var i = this.mergesArray.length;
        while (i-- > 0) {
            if (this.mergesArray[i] > 1) {
                //COMBO!
                SimpleGame.myGame.camera.shake(0.01, 200);
            }
        }
        console.log("merges idx array: " + this.mergesIdxArray);
        var i = Consts.BOARD_WIDTH;
        var scoreToAdd = 0;
        var mergeCombo = false;
        var mergeFailed = true;
        while (i-- > 0) {
            var mergeIdx = 1 + this.mergesIdxArray[i];
            var mergeCount = this.mergesArray[i];
            scoreToAdd += mergeIdx * Consts.BASE_MERGE_SCORE * mergeCount * mergeCount;
            if (mergeCount > 1) {
                var powerupFill = mergeCount * mergeCount;
                GameContext.powerupFill += powerupFill;
                mergeFailed = false;
                mergeCombo = true;
                console.log("merge count is greater than 1");
                var mergeIdxToUpgrade = mergeIdx - 1;
                var i = Cube.myCubesArray.length;
                while (i-- > 0) {
                    var c = Cube.myCubesArray[i];
                    if (c.myIdx == mergeIdxToUpgrade) {
                        c.upgrade();
                    }
                }
            }
            else if (mergeCount == 1) {
                mergeFailed = false;
            }
        }
        if (mergeCombo) {
            SoundManager.combo_merge.play();
        }
        else if (mergeFailed == false) {
            SoundManager.merge.play();
        }
        else {
            SoundManager.movement.play();
        }
        GameContext.score += scoreToAdd;
        this.fixBug();
        console.log("movement stopped, can drag again");
        this.MOVE_ACTIVE = false;
        this.removeIdxBeforeUpgradeFromAllPieces();
        if (firstTry == false) {
            SpawnUtil.spawnNewCubes();
        }
        BoardUtil.checkForAvailableMoves();
        GameContext.saveBoardPositions();
        this.movesCounterTotal++;
        if (this.movesCounterTotal % 20 == 19) {
            GameContext.commercialBreak();
        }
    };
    BoardUtil.checkForAvailableMoves = function () {
        if (OutOfMovesPrompt.onScreen)
            return;
        var i = Cube.myCubesArray.length;
        if (i >= Consts.BOARD_HEIGHT * Consts.BOARD_WIDTH) {
            console.log("ALL SPOTS FILLED");
        }
        else {
            return;
        }
        var movesAvailable = false;
        while (i-- > 0) {
            var c = Cube.myCubesArray[i];
            if (CubeUtil.areNeighboursMergable(c)) {
                movesAvailable = true;
            }
        }
        if (movesAvailable) {
            return;
        }
        else {
            //here goes game over screen
            console.log("game over screen");
            var outOfMovesPrompt = new OutOfMovesPrompt(GameScreen.myref.layerUITop);
        }
    };
    BoardUtil.isCollidingWithPlacedCubes = function (c) {
        if (Cube.myCubesArray == null)
            return false;
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            var placedCube = Cube.myCubesArray[i];
            if (placedCube.boardX == c.boardX && placedCube.boardY == c.boardY) {
                return true;
            }
        }
        return false;
    };
    BoardUtil.mergesArray = [];
    BoardUtil.mergesIdxArray = [];
    BoardUtil.movesCounterTotal = 0;
    BoardUtil.MOVE_ACTIVE = false;
    return BoardUtil;
}());
var Consts = /** @class */ (function () {
    function Consts() {
    }
    Consts.COOKIE_NAME_BEST_SCORE = "mergeshapes3dnamebestscore";
    Consts.COOKIE_NAME_TUTORIAL_PLAYED = "mergeshapecookietutplayed";
    Consts.INITIAL_LOCATION_1_X_PORTRAIT = 280;
    Consts.INITIAL_LOCATION_1_Y_PORTRAIT = 1780;
    Consts.INITIAL_LOCATION_2_X_PORTRAIT = 600;
    Consts.INITIAL_LOCATION_2_Y_PORTRAIT = 1780;
    Consts.INITIAL_LOCATION_3_X_PORTRAIT = 920;
    Consts.INITIAL_LOCATION_3_Y_PORTRAIT = 1780;
    Consts.INITIAL_LOCATION_1_X_LANDSCAPE = 1590;
    Consts.INITIAL_LOCATION_1_Y_LANDSCAPE = 300;
    Consts.INITIAL_LOCATION_2_X_LANDSCAPE = 1590;
    Consts.INITIAL_LOCATION_2_Y_LANDSCAPE = 550;
    Consts.INITIAL_LOCATION_3_X_LANDSCAPE = 1590;
    Consts.INITIAL_LOCATION_3_Y_LANDSCAPE = 800;
    Consts.BOARD_INIT_X_PORTRAIT = 104;
    Consts.BOARD_INIT_Y_PORTRAIT = 505;
    Consts.BOARD_DELTA_X_PORTRAIT = 124;
    Consts.BOARD_DELTA_Y_PORTRAIT = 124;
    Consts.BOARD_INIT_X_LANDSCAPE = 585;
    Consts.BOARD_INIT_Y_LANDSCAPE = 133;
    Consts.BOARD_DELTA_X_LANDSCAPE = 96;
    Consts.BOARD_DELTA_Y_LANDSCAPE = 96;
    Consts.ORIENTATION_LANDSCAPE = 0;
    Consts.ORIENTATION_PORTRAIT = 1;
    Consts.POWERUP_HAMMER = 0;
    Consts.POWERUP_MULTICOLOR = 1;
    Consts.LEVEL_SCORE_FIXED = 3000;
    Consts.LEVEL_SCORE_DELTA = 300;
    Consts.COOKIE_SOUND_FLAG = "mergeshapes43cookiesoundflaggame1123";
    Consts.COOKIE_VOICE_FLAG = "mergeshapesc432ookievoiceflaggame232";
    Consts.COOKIE_NAME_CURRENT_SCORE = "mergeshapescookienamecurrentscore";
    Consts.BOARD_WIDTH = 4;
    Consts.BOARD_HEIGHT = 4;
    Consts.SINGLE_MOVE_DURATION = 50;
    Consts.ROW_CHECK_DELTA = 30;
    Consts.BASE_MERGE_SCORE = 20;
    Consts.COOKIE_NAME_POWERUP_FILL = "mergeshapespoewrupfill";
    return Consts;
}());
var Cube = /** @class */ (function () {
    function Cube(boardX, boardY, myIdx) {
        this.shakeActive = false;
        this.fixedFlag = false;
        this.partOfHorizontalMatch = false;
        this.partOfVerticalMatch = false;
        this.myIdxBeforeUpgrade = -999;
        console.log("cube spawned, x, y, idx: " + boardX, boardY, myIdx);
        this.boardX = boardX;
        this.boardY = boardY;
        this.myContainer = GameScreen.myref.layerFixedCubes;
        this.myIdx = myIdx;
        this.myName = Cube.CUBE_NAMES_ARRAY[myIdx];
        console.log("this.myName: " + this.myName);
        this.cubeSpr = SimpleGame.myGame.add.sprite(0, 0, this.myName, '', this.myContainer);
        this.cubeSpr.anchor.set(0.5, 0.5);
        this.cubeSpr.scale.set(0, 0);
        SimpleGame.myGame.add.tween(this.cubeSpr.scale).to({ x: 1, y: 1 }, 800, Phaser.Easing.Elastic.Out, true);
        this.cubeSpr.x = boardX * GameContext.boardSingleSpaceWidth;
        this.cubeSpr.y = boardY * GameContext.boardSingleSpaceHeight;
        if (Cube.myCubesArray == null) {
            Cube.myCubesArray = [];
        }
        Cube.myCubesArray.push(this);
        //add cube trails
        if (myIdx != Cube.IDX_TILE_INFINITY) {
            this.circle = SimpleGame.myGame.add.sprite(this.cubeSpr.x, this.cubeSpr.y, 'circle', '', this.myContainer);
            this.circle.tint = Cube.CUBE_TRAIL_COLOR[myIdx];
            this.circle.anchor.set(0.5, 0.5);
            this.circle.alpha = 0.4;
            this.circle.visible = false;
            this.trail1 = SimpleGame.myGame.add.sprite(this.cubeSpr.x, this.cubeSpr.y, 'trail', '', this.myContainer);
            this.trail1.tint = Cube.CUBE_TRAIL_COLOR[myIdx];
            this.trail1.anchor.set(0.5, 0.5);
            this.trail1.visible = false;
        }
    }
    Cube.prototype.startShakingForRemoval = function () {
        var delta = 10;
        var newX = this.cubeSpr.x - delta + Math.random() * delta * 2;
        var newY = this.cubeSpr.y - delta + Math.random() * delta * 2;
        var shakeTween = SimpleGame.myGame.add.tween(this.cubeSpr).to({ x: newX, y: newY }, 50, Phaser.Easing.Linear.None, true, 0, 100000000, true);
        this.shakeTween = shakeTween;
        SimpleGame.myGame.time.events.add(600, this.remove, this);
    };
    Cube.createCubeAt = function (x, y, idx) {
        if (idx === void 0) { idx = Cube.IDX_TILE_1; }
        var c = new Cube(x, y, idx);
    };
    Cube.prototype.hideTrailAfterMove = function () {
        SimpleGame.myGame.time.events.add(Consts.SINGLE_MOVE_DURATION, function () {
            this.trail1.visible = false;
        }, this);
    };
    Cube.prototype.startCircleAnim = function () {
        if (this.circle == null)
            return;
        this.circle.visible = true;
        this.circle.scale.set(0.3);
        this.circleAnimTween = SimpleGame.myGame.add.tween(this.circle.scale);
        this.circleAnimTween.to({ x: 1.5, y: 1.5 }, 250, Phaser.Easing.Exponential.Out, true, 75, 0);
        this.circle.alpha = 0.4;
        SimpleGame.myGame.add.tween(this.circle).to({ alpha: 0.02 }, 500, Phaser.Easing.Linear.None, true);
        this.circleAnimTween.onComplete.add(function () {
            this.circle.visible = false;
        }, this);
    };
    Cube.prototype.tweenDown = function () {
        this.trail1.rotation = -Math.PI / 2;
        this.trail1.visible = true;
        this.trail1.x = this.cubeSpr.x;
        this.trail1.y = this.cubeSpr.y - 60;
        console.log("tween down called");
        this.boardY++;
        SimpleGame.myGame.add.tween(this.cubeSpr).to({ y: this.boardY * GameContext.boardSingleSpaceHeight }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.add.tween(this.trail1).to({ y: this.boardY * GameContext.boardSingleSpaceHeight - 60 }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        this.hideTrailAfterMove();
    };
    Cube.prototype.tweenDownAndMerge = function (nextPiece) {
        this.trail1.rotation = -Math.PI / 2;
        this.trail1.visible = true;
        this.trail1.x = this.cubeSpr.x;
        this.trail1.y = this.cubeSpr.y - 60;
        this.boardY++;
        SimpleGame.myGame.add.tween(this.cubeSpr).to({ y: this.boardY * GameContext.boardSingleSpaceHeight }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.add.tween(this.trail1).to({ y: this.boardY * GameContext.boardSingleSpaceHeight - 60 }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.time.events.add(Consts.SINGLE_MOVE_DURATION, function () {
            if (this.myIdx == Cube.IDX_TILE_MULTI) {
                this.myIdx = nextPiece.myIdx;
            }
            nextPiece.remove();
            var c = new Cube(this.boardX, this.boardY, this.myIdx + 1);
            c.myIdxBeforeUpgrade = this.myIdx;
            c.startCircleAnim();
            if (Tutorial.myState == Tutorial.STATE_STEP_1) {
                Tutorial.gotoStep2();
            }
            else if (Tutorial.myState == Tutorial.STATE_STEP_2) {
                Tutorial.gotoStep3();
            }
            else if (Tutorial.myState == Tutorial.STATE_STEP_3) {
                Tutorial.gotoStep4();
            }
            this.remove();
        }, this);
    };
    Cube.prototype.tweenRight = function () {
        this.trail1.rotation = -2 * Math.PI / 2;
        this.trail1.visible = true;
        this.trail1.x = this.cubeSpr.x - 60;
        this.trail1.y = this.cubeSpr.y;
        console.log("tween right called");
        this.boardX++;
        SimpleGame.myGame.add.tween(this.cubeSpr).to({ x: this.boardX * GameContext.boardSingleSpaceHeight }, Consts.SINGLE_MOVE_DURATION, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.add.tween(this.trail1).to({ x: this.boardX * GameContext.boardSingleSpaceHeight - 60 }, Consts.SINGLE_MOVE_DURATION, Phaser.Easing.Linear.None, true);
        this.hideTrailAfterMove();
    };
    Cube.prototype.tweenRightAndMerge = function (nextPiece) {
        this.trail1.rotation = -2 * Math.PI / 2;
        this.trail1.visible = true;
        this.trail1.x = this.cubeSpr.x - 60;
        this.trail1.y = this.cubeSpr.y;
        console.log("tween right and merge called");
        this.boardX++;
        SimpleGame.myGame.add.tween(this.cubeSpr).to({ x: this.boardX * GameContext.boardSingleSpaceHeight }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.add.tween(this.trail1).to({ x: this.boardX * GameContext.boardSingleSpaceHeight - 60 }, Consts.SINGLE_MOVE_DURATION, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.time.events.add(Consts.SINGLE_MOVE_DURATION, function () {
            if (this.myIdx == Cube.IDX_TILE_MULTI) {
                this.myIdx = nextPiece.myIdx;
            }
            nextPiece.remove();
            var c = new Cube(this.boardX, this.boardY, this.myIdx + 1);
            c.myIdxBeforeUpgrade = this.myIdx;
            c.startCircleAnim();
            if (Tutorial.myState == Tutorial.STATE_STEP_1) {
                Tutorial.gotoStep2();
            }
            else if (Tutorial.myState == Tutorial.STATE_STEP_2) {
                Tutorial.gotoStep3();
            }
            else if (Tutorial.myState == Tutorial.STATE_STEP_3) {
                Tutorial.gotoStep4();
            }
            this.remove();
        }, this);
    };
    Cube.prototype.tweenLeft = function () {
        this.trail1.rotation = -4 * Math.PI / 2;
        this.trail1.visible = true;
        this.trail1.x = this.cubeSpr.x + 60;
        this.trail1.y = this.cubeSpr.y;
        console.log("tween right called");
        this.boardX--;
        SimpleGame.myGame.add.tween(this.cubeSpr).to({ x: this.boardX * GameContext.boardSingleSpaceHeight }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.add.tween(this.trail1).to({ x: this.boardX * GameContext.boardSingleSpaceHeight + 60 }, Consts.SINGLE_MOVE_DURATION, Phaser.Easing.Linear.None, true);
        this.hideTrailAfterMove();
    };
    Cube.prototype.tweenLeftAndMerge = function (nextPiece) {
        this.trail1.rotation = -4 * Math.PI / 2;
        this.trail1.visible = true;
        this.trail1.x = this.cubeSpr.x + 60;
        this.trail1.y = this.cubeSpr.y;
        console.log("tween right and merge called");
        this.boardX--;
        SimpleGame.myGame.add.tween(this.cubeSpr).to({ x: this.boardX * GameContext.boardSingleSpaceHeight }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.add.tween(this.trail1).to({ x: this.boardX * GameContext.boardSingleSpaceHeight + 60 }, Consts.SINGLE_MOVE_DURATION, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.time.events.add(Consts.SINGLE_MOVE_DURATION, function () {
            if (this.myIdx == Cube.IDX_TILE_MULTI) {
                this.myIdx = nextPiece.myIdx;
            }
            nextPiece.remove();
            var c = new Cube(this.boardX, this.boardY, this.myIdx + 1);
            c.myIdxBeforeUpgrade = this.myIdx;
            c.startCircleAnim();
            if (Tutorial.myState == Tutorial.STATE_STEP_1) {
                Tutorial.gotoStep2();
            }
            else if (Tutorial.myState == Tutorial.STATE_STEP_2) {
                Tutorial.gotoStep3();
            }
            else if (Tutorial.myState == Tutorial.STATE_STEP_3) {
                Tutorial.gotoStep4();
            }
            this.remove();
        }, this);
    };
    Cube.prototype.tweenUp = function () {
        this.trail1.rotation = -Math.PI / 2;
        this.trail1.visible = true;
        this.trail1.x = this.cubeSpr.x;
        this.trail1.y = this.cubeSpr.y + 60;
        console.log("tween down called");
        this.boardY--;
        SimpleGame.myGame.add.tween(this.cubeSpr).to({ y: this.boardY * GameContext.boardSingleSpaceHeight }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.add.tween(this.trail1).to({ y: this.boardY * GameContext.boardSingleSpaceHeight + 60 }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        this.hideTrailAfterMove();
    };
    Cube.prototype.tweenUpAndMerge = function (nextPiece) {
        this.trail1.rotation = -Math.PI / 2;
        this.trail1.visible = true;
        this.trail1.x = this.cubeSpr.x;
        this.trail1.y = this.cubeSpr.y + 60;
        this.boardY--;
        SimpleGame.myGame.add.tween(this.cubeSpr).to({ y: this.boardY * GameContext.boardSingleSpaceHeight }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.add.tween(this.trail1).to({ y: this.boardY * GameContext.boardSingleSpaceHeight + 60 }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
        SimpleGame.myGame.time.events.add(Consts.SINGLE_MOVE_DURATION, function () {
            if (this.myIdx == Cube.IDX_TILE_MULTI) {
                this.myIdx = nextPiece.myIdx;
            }
            nextPiece.remove();
            var c = new Cube(this.boardX, this.boardY, this.myIdx + 1);
            c.myIdxBeforeUpgrade = this.myIdx;
            c.startCircleAnim();
            if (Tutorial.myState == Tutorial.STATE_STEP_1) {
                Tutorial.gotoStep2();
            }
            else if (Tutorial.myState == Tutorial.STATE_STEP_2) {
                Tutorial.gotoStep3();
            }
            else if (Tutorial.myState == Tutorial.STATE_STEP_3) {
                Tutorial.gotoStep4();
            }
            this.remove();
        }, this);
    };
    Cube.prototype.upgrade = function () {
        console.log("UPGRADE CALLED");
        var c = new Cube(this.boardX, this.boardY, this.myIdx + 1);
        c.myIdxBeforeUpgrade = this.myIdx;
        c.startCircleAnim();
        if (Tutorial.myState == Tutorial.STATE_STEP_4) {
            Tutorial.gotoStep5();
        }
        this.remove();
    };
    Cube.prototype.tweenToBoardXAndY = function () {
        SimpleGame.myGame.add.tween(this.cubeSpr).to({ x: this.boardX * GameContext.boardSingleSpaceWidth, y: this.boardY * GameContext.boardSingleSpaceHeight }, Consts.SINGLE_MOVE_DURATION + 5, Phaser.Easing.Linear.None, true);
    };
    Cube.prototype.switchXandY = function () {
        var temp = this.myGroupX;
        this.myGroupX = this.myGroupY;
        this.myGroupY = temp;
        this.cubeSpr.x = this.myGroupX * this.cubeSpr.width;
        this.cubeSpr.y = this.myGroupY * this.cubeSpr.height;
    };
    Cube.removeAll = function () {
        // console.log("remove all placed cubes")
        if (Cube.myCubesArray == null)
            return;
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            Cube.myCubesArray[i].remove();
        }
        Cube.myCubesArray = new Array();
        // console.log("remove all placed cubes completed")
    };
    Cube.prototype.matchMade = function () {
        // console.log("added cube anim: " + this.cubeSpr.x, this.cubeSpr.y)
        this.remove();
        if (GameContext.tutorialActive == false) {
            GameContext.score += Consts.SCORE_PER_GROUP;
        }
    };
    Cube.prototype.remove = function () {
        if (Cube.myCubesArray != null) {
            if (Cube.myCubesArray.indexOf(this) > -1) {
                Cube.myCubesArray.splice(Cube.myCubesArray.indexOf(this), 1);
            }
        }
        SimpleGame.myGame.tweens.remove(this.circleAnimTween);
        if (this.circle != null) {
            this.circle.destroy();
        }
        if (this.trail1 != null) {
            this.trail1.destroy();
        }
        if (this.shakeTween) {
            SimpleGame.myGame.tweens.remove(this.shakeTween);
        }
        this.cubeSpr.destroy();
    };
    Cube.prototype.toGlobalCoords = function () {
        var retP = new Phaser.Point(this.cubeSpr.x + this.myContainer.x, this.cubeSpr.y + this.myContainer.y);
        return retP;
    };
    Cube.IDX_TILE_1 = 0;
    Cube.IDX_TILE_2 = 1;
    Cube.IDX_TILE_3 = 2;
    Cube.IDX_TILE_4 = 3;
    Cube.IDX_TILE_5 = 4;
    Cube.IDX_TILE_6 = 5;
    Cube.IDX_TILE_7 = 6;
    Cube.IDX_TILE_8 = 7;
    Cube.IDX_TILE_INFINITY = 8;
    Cube.IDX_TILE_MULTI = 9;
    Cube.CUBE_NAMES_ARRAY = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tileInfinity", "tileMulticolor"];
    Cube.CUBE_TRAIL_COLOR = [0xd93636, 0xe67422, 0xdebe21, 0xb2b32d, 0x30bf8f, 0x308fbf, 0x4747cc, 0xa63a96, 0xa63a96, 0xa63a96];
    return Cube;
}());
var fontsloadedflag = false;
/*
var WebFontConfig = {
    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function () {
        console.log("loadgoooglefonts");
        fontsloadedflag = true;
    },
    loading: function () {
        console.log("font being loaded");
    },
    google: {
        families: ["Montserrat"]
    },
    timeout: 20000
};
*/
var mouseIsWithinGame;
function resumeSoundContext() {
    SimpleGame.myGame.sound.context.resume();
    console.log("resume sound context");
    document.body.removeEventListener('pointerup', resumeSoundContext);
}
var SimpleGame = /** @class */ (function () {
    function SimpleGame() {
        var _this = this;
        this.mouseMovedWithinGameTicks = 0;
        this.ticks = 0;
        PokiSDK.init().then(function () {
            console.log("Poki SDK successfully initialized");
            // your code to continue to game
            _this.continueToGame();
        })["catch"](function () {
            console.log("Initialized, but the user likely has adblock");
            // your code to continue to game
            _this.continueToGame();
        });
        // PokiSDK.setDebug(true);
        window.addEventListener('keydown', function (ev) {
            if (['ArrowDown', 'ArrowUp', ' '].includes(ev.key)) {
                ev.preventDefault();
            }
        });
        window.addEventListener('wheel', function (ev) { return ev.preventDefault(); }, { passive: false });
        var touch = matchMedia('(hover: none)').matches;
        if (touch) {
            var config = {
                width: 1593,
                height: 2100,
                renderer: Phaser.AUTO,
                parent: 'content',
                disableVisibilityChange: true
            };
        }
        else {
            var config = {
                width: 1593,
                height: 2100,
                renderer: Phaser.CANVAS,
                parent: 'content',
                disableVisibilityChange: true
            };
        }
        this.game = new Phaser.Game(config);
        SimpleGame.myGame = this.game;
        document.body.addEventListener('click', function () {
            var context = new AudioContext();
            // Setup all nodes
            SimpleGame.myGame.sound.context.resume();
        });
        if (SimpleGame.isReleaseVersion) {
            console.log = function () { };
        }
        this.boot = new Phaser.State();
        this.game.state.add("Boot", this.boot, true);
        this.gamestate = new Phaser.State();
        this.gamestate.preload = this.preload;
        this.gamestate.create = this.create;
        this.gamestate.update = this.update;
        this.gamestate.render = this.render;
        this.game.state.add("Gamestate", this.gamestate, false);
        var resizeF = function () {
            return;
            console.log("resize game");
            var deviceWidth = window.outerWidth;
            var deviceHeight = window.outerHeight;
            if (SimpleGame.myGame.device.desktop == false) {
                var scaleX = deviceWidth / 800;
                var scaleY = deviceHeight / 600;
                var scale = Math.min(scaleX, scaleY);
                SimpleGame.myGame.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
                SimpleGame.myGame.scale.setUserScale(scale, scale);
                console.log("set to user scale: " + scale, scaleX, scaleY);
                SimpleGame.myGame.scale.pageAlignHorizontally = true;
            }
            else {
                SimpleGame.myGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                SimpleGame.myGame.scale.pageAlignVertically = true;
                SimpleGame.myGame.scale.pageAlignHorizontally = true;
            }
            if (SimpleGame.myGame.device.ie) {
                SimpleGame.myGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            }
            SimpleGame.myGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            SimpleGame.myGame.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            SimpleGame.myGame.scale.pageAlignVertically = true;
            SimpleGame.myGame.scale.pageAlignHorizontally = true;
            SimpleGame.myGame.scale.refresh();
        };
        this.boot.preload = function () {
            GameContext.initialize();
            this.game.load.script('BlurX', 'js/BlurX.js');
            this.game.load.script('BlurY', 'js/BlurY.js');
            //this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
            this.game.stage.backgroundColor = 0x000000;
            SimpleGame.myGame.stage.disableVisibilityChange = true;
            // SimpleGame.myGame.stage.smoothed = true
            window.addEventListener("resize", resizeF);
            SimpleGame.myGame.stage.disableVisibilityChange = true;
            resizeF();
            this.game.time.advancedTiming = true;
            // this.game.scale.refresh();
        };
        this.boot.create = function () {
            this.game.state.start("Gamestate");
        };
        console.log(Phaser.VERSION);
    }
    SimpleGame.prototype.continueToGame = function () {
        SimpleGame.pokiSdkLoadedFlag = true;
    };
    SimpleGame.loadStart = function () {
        console.log("load started");
    };
    SimpleGame.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
        console.log("file completed");
        SimpleGame.loadingText.text = "" + progress + "%";
    };
    SimpleGame.loadComplete = function () {
        console.log("load completed");
        SimpleGame.loadingText.destroy();
    };
    SimpleGame.prototype.preload = function () {
        // ResizeManager.update()
        SimpleGame.myGame.load.onLoadStart.add(SimpleGame.loadStart, this);
        SimpleGame.myGame.load.onFileComplete.add(SimpleGame.fileComplete, this);
        SimpleGame.myGame.load.onLoadComplete.add(SimpleGame.loadComplete, this);
        SimpleGame.loadingText = SimpleGame.myGame.add.text(window.innerWidth / 2, window.innerHeight / 2, "1%", { font: "72px Montserrat", fill: "#ffe4b5", align: "Right" });
        SimpleGame.loadingText.anchor.set(0.5, 0.5);
        PokiSDK.gameLoadingStart();
        SimpleGame.myGame.stage.backgroundColor = 0x000000;
        SimpleGame.myGame.time.advancedTiming = true;
        this.game.load.image('background_portrait', "assets/Background/bg0.png");
        this.game.load.image('board4bg', "assets/Gameplay/board4bg.png");
        this.game.load.image('board5bg', "assets/Gameplay/board5bg.png");
        this.game.load.image('circle', "assets/Gameplay/Tiles/circle.png");
        this.game.load.image('square', "assets/Gameplay/Tiles/square.png");
        this.game.load.image('tile1', "assets/Gameplay/Tiles/tile1.png");
        this.game.load.image('tile2', "assets/Gameplay/Tiles/tile2.png");
        this.game.load.image('tile3', "assets/Gameplay/Tiles/tile3.png");
        this.game.load.image('tile4', "assets/Gameplay/Tiles/tile4.png");
        this.game.load.image('tile5', "assets/Gameplay/Tiles/tile5.png");
        this.game.load.image('tile6', "assets/Gameplay/Tiles/tile6.png");
        this.game.load.image('tile7', "assets/Gameplay/Tiles/tile7.png");
        this.game.load.image('tile8', "assets/Gameplay/Tiles/tile8.png");
        this.game.load.image('tileInfinity', "assets/Gameplay/Tiles/tileInfinity.png");
        this.game.load.image('tileMulticolor', "assets/Gameplay/Tiles/tileMulticolor.png");
        this.game.load.image('trail', "assets/Gameplay/Tiles/trail.png");
        this.game.load.image('circle', "assets/UI/circle.png");
        this.game.load.image('closeBtn', "assets/UI/closeBtn.png");
        this.game.load.image('combo0', "assets/UI/combo0.png");
        this.game.load.image('combo1', "assets/UI/combo1.png");
        this.game.load.image('comboBtn', "assets/UI/comboBtn.png");
        this.game.load.image('currencyBig', "assets/UI/currencyBig.png");
        this.game.load.image('currencyIcon', "assets/UI/currencyIcon.png");
        this.game.load.image('currencyLabelBg', "assets/UI/currencyLabelBg.png");
        this.game.load.image('customizationBtn', "assets/UI/customizationBtn.png");
        this.game.load.image('faecbookIcon', "assets/UI/faecbookIcon.png");
        this.game.load.image('hammerPowerBtn', "assets/UI/hammerPowerBtn.png");
        this.game.load.image('homeIcon', "assets/UI/homeIcon.png");
        this.game.load.image('leaderboardsBtn', "assets/UI/leaderboardsBtn.png");
        this.game.load.image('loader', "assets/UI/loader.png");
        this.game.load.image('lock', "assets/UI/lock.png");
        this.game.load.image('logo', "assets/UI/logo.png");
        this.game.load.image('menuBtn', "assets/UI/menuBtn.png");
        this.game.load.image('musicIcon', "assets/UI/musicIcon.png");
        this.game.load.image('panelBg', "assets/UI/panelBg.png");
        this.game.load.image('playIcon', "assets/UI/playIcon.png");
        this.game.load.image('playServicesIcon', "assets/UI/playServicesIcon.png");
        this.game.load.image('pointsBg', "assets/UI/pointsBg.png");
        this.game.load.image('priceLabelBg', "assets/UI/priceLabelBg.png");
        this.game.load.image('restartIcon', "assets/UI/restartIcon.png");
        this.game.load.image('settingsBtn', "assets/UI/settingsBtn.png");
        this.game.load.image('shareIcon', "assets/UI/restartIcon.png");
        this.game.load.image('shopBtn', "assets/UI/restartIcon.png");
        this.game.load.image('shopIcon1', "assets/UI/shopIcon1.png");
        this.game.load.image('shopIcon2', "assets/UI/shopIcon2.png");
        this.game.load.image('shopIcon3', "assets/UI/shopIcon3.png");
        this.game.load.image('shopIcon4', "assets/UI/shopIcon4.png");
        this.game.load.image('shufflePowerBtn', "assets/UI/shufflePowerBtn.png");
        this.game.load.image('soundIcon', "assets/UI/soundIcon.png");
        this.game.load.image('starIcon', "assets/UI/starIcon.png");
        this.game.load.image('textBtnBig', "assets/UI/textBtnBig.png");
        this.game.load.image('textBtnSmall', "assets/UI/textBtnSmall.png");
        this.game.load.image('toggleBg', "assets/UI/toggleBg.png");
        this.game.load.image('trophiesBtn', "assets/UI/trophiesBtn.png");
        this.game.load.image('trophyBg', "assets/UI/trophyBg.png");
        this.game.load.image('twitterIcon', "assets/UI/twitterIcon.png");
        this.game.load.image('upgradePowerBtn', "assets/UI/upgradePowerBtn.png");
        this.game.load.image('watchIcon', "assets/UI/watchIcon.png");
        this.game.load.image('yesBtn', "assets/UI/yesBtn.png");
        this.game.load.image('shopIcon4', "assets/UI/restartIcon.png");
        this.game.load.image('OFF_BTN', "assets/OFF_BTN.png");
        this.game.load.image('ON_BTN', "assets/ON_BTN.png");
        this.game.load.image('OnOff_toggleBTN', "assets/OnOff_toggleBTN.png");
        this.game.load.image('toggle_BTN01', "assets/toggle_BTN01.png");
        this.game.load.image('arrow01', "assets/arrow01.png");
        // this.game.load.image('WB3D_html5_BG01', 'assets/WB3D_html5_BG01.png')
        this.game.load.audio('click', ['assets/SOUNDS/click.mp3']);
        this.game.load.audio('combo_merge', ['assets/SOUNDS/combo_merge.mp3']);
        this.game.load.audio('combo_ready', ['assets/SOUNDS/combo_ready.mp3']);
        this.game.load.audio('combo_use', ['assets/SOUNDS/combo_use.mp3']);
        this.game.load.audio('hammer', ['assets/SOUNDS/hammer.mp3']);
        this.game.load.audio('merge', ['assets/SOUNDS/merge.mp3']);
        this.game.load.audio('movement', ['assets/SOUNDS/movement.mp3']);
        this.game.load.audio('music', ['assets/SOUNDS/music.mp3']);
        this.game.load.audio('points', ['assets/SOUNDS/points.mp3']);
        this.game.load.audio('result_finish', ['assets/SOUNDS/result_finish.mp3']);
        this.game.load.audio('shuffle', ['assets/SOUNDS/shuffle.mp3']);
        this.game.load.audio('tutorial_started', ['assets/SOUNDS/tutorial_started.mp3']);
        this.game.load.start();
    };
    SimpleGame.onBlur = function () {
        SimpleGame.myGame.input.reset();
        SimpleGame.myGame.input.pointer1.reset();
    };
    SimpleGame.onFocus = function () {
        SimpleGame.myGame.input.reset();
        SimpleGame.myGame.input.pointer1.reset();
    };
    SimpleGame.prototype.create = function () {
        console.log("start preloading");
        SoundManager.click = this.game.add.audio('click');
        SoundManager.combo_merge = this.game.add.audio('combo_merge');
        SoundManager.combo_ready = this.game.add.audio('combo_ready');
        SoundManager.combo_use = this.game.add.audio('combo_use');
        SoundManager.hammer = this.game.add.audio('hammer');
        SoundManager.merge = this.game.add.audio('merge');
        SoundManager.movement = this.game.add.audio('movement');
        SoundManager.music = this.game.add.audio('music');
        SoundManager.points = this.game.add.audio('points');
        SoundManager.result_finish = this.game.add.audio('result_finish');
        SoundManager.shuffle = this.game.add.audio('shuffle');
        SoundManager.tutorial_started = this.game.add.audio('tutorial_started');
        SoundManager.init();
        this.game.load.onLoadStart.add(function name() {
            console.log("preload full started");
        });
        this.game.load.onLoadComplete.add(function name() {
            console.log("game fullyl oaded");
            GameContext.gameAssetsFullyLoaded = true;
        }, this);
        // load unimportant assets here....
        var adContainer = document.createElement("div");
        var perc = (window.innerWidth / 320) / 2 * 100;
        perc = 50 - 320 / window.innerWidth / 2 * 100;
        console.log(window.innerWidth);
        adContainer.style.position = "absolute";
        adContainer.style.left = "" + Math.floor(perc) + "%";
        adContainer.style.bottom = "0%";
        adContainer.style.height = "39px"
        document.body.appendChild(adContainer);
        PokiSDK.displayAd(adContainer, "320x50");
        this.game.load.start();
        // SoundManager.silence.loopFull()
        // return
        SimpleGame.addLayers();
        SimpleGame.handleOrientation();
        SimpleGame.myGame.onBlur.add(SimpleGame.onBlur, this);
        SimpleGame.myGame.onFocus.add(SimpleGame.onFocus, this);
        SimpleGame.myGame.onResume.add(SimpleGame.onFocus, this);
        SimpleGame.checkAssetsLoaded();
        SimpleGame.myGame.input.mspointer.capture = false;
        document.addEventListener('contextmenu', function (event) { return event.preventDefault(); });
        var key1 = SimpleGame.myGame.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        var key2 = SimpleGame.myGame.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        var key3 = SimpleGame.myGame.input.keyboard.addKey(Phaser.Keyboard.UP);
        var key4 = SimpleGame.myGame.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        var key5 = SimpleGame.myGame.input.keyboard.addKey(Phaser.Keyboard.A);
        var key6 = SimpleGame.myGame.input.keyboard.addKey(Phaser.Keyboard.D);
        var key7 = SimpleGame.myGame.input.keyboard.addKey(Phaser.Keyboard.W);
        var key8 = SimpleGame.myGame.input.keyboard.addKey(Phaser.Keyboard.S);
        var key9 = SimpleGame.myGame.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        var sBind;
        key9.onDown.add(function () {
            if (InitMenuPrompt.onScreen) {
                InitMenuPrompt.myRef.removeAndStartGame();
            }
        });
        key1.onDown.add(function () {
            if (WASD.myref) {
                WASD.myref.left.lit();
            }
            if (BoardUtil.MOVE_ACTIVE)
                return;
            BoardUtil.goLeft(true);
        });
        key2.onDown.add(function () {
            if (WASD.myref) {
                WASD.myref.right.lit();
            }
            if (BoardUtil.MOVE_ACTIVE)
                return;
            BoardUtil.goRight(true);
        });
        key3.onDown.add(function () {
            if (WASD.myref) {
                WASD.myref.up.lit();
            }
            if (BoardUtil.MOVE_ACTIVE)
                return;
            BoardUtil.goUp(true);
        });
        key4.onDown.add(function () {
            if (WASD.myref) {
                WASD.myref.down.lit();
            }
            if (BoardUtil.MOVE_ACTIVE)
                return;
            BoardUtil.goDown(true);
        });
        key5.onDown.add(function () {
            if (WASD.myref) {
                WASD.myref.left.lit();
            }
            if (BoardUtil.MOVE_ACTIVE)
                return;
            BoardUtil.goLeft(true);
        });
        key6.onDown.add(function () {
            if (WASD.myref) {
                WASD.myref.right.lit();
            }
            if (BoardUtil.MOVE_ACTIVE)
                return;
            BoardUtil.goRight(true);
        });
        key7.onDown.add(function () {
            if (WASD.myref) {
                WASD.myref.up.lit();
            }
            if (BoardUtil.MOVE_ACTIVE)
                return;
            BoardUtil.goUp(true);
        });
        key8.onDown.add(function () {
            if (WASD.myref) {
                WASD.myref.down.lit();
            }
            if (BoardUtil.MOVE_ACTIVE)
                return;
            BoardUtil.goDown(true);
        });
    };
    SimpleGame.prototype.preloadFullComplete = function () {
        GameContext.gameAssetsFullyLoaded = true;
    };
    SimpleGame.addLayers = function () {
        this.layerBackground = SimpleGame.myGame.add.group();
        this.layerGame = SimpleGame.myGame.add.group();
        // this.layerUI = SimpleGame.myGame.add.group();	
        // this.appbackgroundleft = SimpleGame.myGame.add.sprite(0, 0, 'bgleft', '', this.layerBackground)
        // this.appbackgroundright = SimpleGame.myGame.add.sprite(0, 0, 'bgright', '', this.layerBackground)
    };
    SimpleGame.handleOrientation = function () {
        // SimpleGame.myGame.scale.forceOrientation(false, true)
    };
    SimpleGame.checkAssetsLoaded = function () {
        if (SimpleGame.pokiSdkLoadedFlag) {
            SimpleGame.addInitScreen();
        }
        else {
            SimpleGame.myGame.time.events.add(50, SimpleGame.checkAssetsLoaded, this);
        }
    };
    SimpleGame.addInitScreen = function () {
        PokiSDK.gameLoadingFinished();
        SimpleGame.myGame.input.maxPointers = 1;
        GameContext.setMuteFlags();
        SimpleGame.myGame.scale.onOrientationChange.add(this.orientationChanged, this);
        var bg = SimpleGame.myGame.add.sprite(0, 0, 'background_portrait', '', this.layerBackground);
        ResizeManager.gameBackground = bg;
        bg.inputEnabled = true;
        SimpleGame.myGame.cache.getBaseTexture('shufflePowerBtn').mipmap = true;
        SimpleGame.myGame.cache.getBaseTexture('upgradePowerBtn').mipmap = true;
        SimpleGame.myGame.cache.getBaseTexture('settingsBtn').mipmap = true;
        // SimpleGame.myGame.cache.getBaseTexture('shufflePowerBtn').scaleMode = PIXI.scaleModes.LINEAR;
        // SimpleGame.myGame.cache.getBaseTexture('upgradePowerBtn').scaleMode = PIXI.scaleModes.LINEAR;
        // SimpleGame.myGame.cache.getBaseTexture('settingsBtn').scaleMode = PIXI.scaleModes.LINEAR;
        // // SimpleGame.myGame.cache.getBaseTexture('hammerPowerBtn').resolution = PIXI.scaleModes.LINEAR;
        // // SimpleGame.myGame.canvas.getContext("2d").imageSmoothingQuality = "high"
        ResizeManager.update();
        console.log("add bacgrund portrait");
        var initscreen = new InitMenuPrompt(true);
    };
    SimpleGame.orientationChanged = function () {
        console.log("orientation changed");
        SimpleGame.myGame.time.events.add(20, ResizeManager.update, ResizeManager);
        // ResizeManager.update()
    };
    SimpleGame.startGame = function (firstGame) {
        if (firstGame === void 0) { firstGame = true; }
        if (firstGame) {
            SimpleGame.myGame.add.sprite(0, 0, 'game_background');
            SimpleGame.gameEngineStarted = true;
            SimpleGame.game_bg.visible = true;
            SimpleGame.logo.visible = false;
            if (SimpleGame.myGame.device.safari == false && SimpleGame.myGame.device.firefox == false && SimpleGame.myGame.input.touch && (SimpleGame.myGame.device.android || SimpleGame.myGame.device.iOS)) {
                SimpleGame.myGame.input.mouse.stop();
            }
            else if (SimpleGame.myGame.device.safari == false && SimpleGame.myGame.device.firefox == false && SimpleGame.myGame.device.ie == false && SimpleGame.myGame.input.touch) {
                SimpleGame.myGame.input.mouse.stop();
            }
        }
        else {
        }
    };
    SimpleGame.prototype.update = function () {
        this.game.time.desiredFps = 144;
        // // this.game.time.slowMotion = 144/60;
        if (this.game.time.suggestedFps > 100) {
        }
        else {
            // this.game.time.desiredFps = 60
        }
        //    ResizeManager.update();
    };
    SimpleGame.prototype.render = function () {
        // SimpleGame.myGame.debug.text('FPS: ' + SimpleGame.myGame.time.fps  + "w: " + window.innerWidth || 'FPS: --', 40, 40, "#00ff00");
    };
    SimpleGame.fontsLoadedFlag = false;
    SimpleGame.gameEngineStarted = false;
    SimpleGame.unselectAllCards = false;
    SimpleGame.isReleaseVersion = false;
    SimpleGame.pointerDown = false;
    SimpleGame.pokiSdkLoadedFlag = false;
    return SimpleGame;
}());
// when the page has finished loading, create our game
window.onload = function () {
    var game = new SimpleGame();
};
var GameContext = /** @class */ (function () {
    function GameContext() {
    }
    GameContext.clearSavedData = function () {
        this.clearBoardPositions();
        Util.clearStorage(Consts.COOKIE_NAME_CURRENT_SCORE);
        Util.clearStorage(Consts.COOKIE_NAME_POWERUP_FILL);
    };
    GameContext.setMuteFlags = function () {
        SoundManager.setMuteFlags(!this.soundFlag);
        // SoundManager.setVoiceMuteFlags(!this.voiceFlag)
    };
    GameContext.clearBoardPositions = function () {
        var i = Consts.BOARD_WIDTH;
        while (i-- > 0) {
            var j = Consts.BOARD_HEIGHT;
            while (j-- > 0) {
                var s = "mergeshapesboardX_" + i + "_Y_" + j;
                Util.setStorage(s, -1);
            }
        }
    };
    GameContext.saveBoardPositions = function () {
        GameContext.clearBoardPositions();
        var i = Consts.BOARD_WIDTH;
        while (i-- > 0) {
            var j = Consts.BOARD_HEIGHT;
            while (j-- > 0) {
                var c = CubeUtil.getCubeByBoardCoords(i, j);
                if (c == null)
                    continue;
                Util.setStorage("mergeshapesboardX_" + i + "_Y_" + j, c.myIdx);
            }
        }
        Util.setStorage(Consts.COOKIE_NAME_CURRENT_SCORE, GameContext.score);
        Util.setStorage(Consts.COOKIE_NAME_POWERUP_FILL, GameContext.powerupFill);
    };
    GameContext.loadFromSavedBoard = function () {
        GameContext.score = Util.getStorage(Consts.COOKIE_NAME_CURRENT_SCORE, 0);
        // return false
        var i = Consts.BOARD_WIDTH;
        var totalCubesCreated = 0;
        while (i-- > 0) {
            var j = Consts.BOARD_HEIGHT;
            while (j-- > 0) {
                var s = "mergeshapesboardX_" + i + "_Y_" + j;
                var myidx = Util.getStorage(s, -1);
                if (myidx == -1)
                    continue;
                CubeUtil.createCubeAt(i, j, myidx);
                totalCubesCreated++;
            }
        }
        console.log("total cubes created: " + totalCubesCreated);
        if (totalCubesCreated > 0) {
            return true;
        }
        return false;
    };
    GameContext.addFromSavedBoard = function () {
        var i = this.savedPositonsBoardX.length;
        console.log("total saved: " + i);
        while (i-- > 0) {
            Cube.createCubeAt(this.savedPositonsBoardX[i], this.savedPositonsBoardY[i]);
        }
        this.savedPositonsBoardX = [];
        this.savedPositonsBoardY = [];
    };
    GameContext.revive = function () {
        var _this = this;
        this.gameplayStopped();
        console.log("GAMEPLAY STOPPEd");
        SoundManager.music.stop();
        PokiSDK.rewardedBreak().then(function (success) {
            if (success) {
                //  GameContext.explodePowerupsCount++;
                console.log("ad success");
                console.log("GAMEPLAY STOPPEd");
                SoundManager.music.loopFull();
                SimpleGame.myGame.time.events.add(100, function () {
                    BoardUtil.revive();
                }, _this);
            }
            else {
                console.log("GAMEPLAY STOPPEd");
                SoundManager.music.loopFull();
                // video not displayed, should probably not give reward
            }
        });
        GameContext.gameplayStarted();
    };
    GameContext.yellowPowerup = function () {
        var _this = this;
        this.gameplayStopped();
        console.log("GAMEPLAY STOPPEd");
        SoundManager.music.stop();
        PokiSDK.rewardedBreak().then(function (success) {
            if (success) {
                //  GameContext.explodePowerupsCount++;
                console.log("ad success");
                console.log("GAMEPLAY STOPPEd");
                SoundManager.music.loopFull();
                SimpleGame.myGame.time.events.add(600, function () {
                    GameContext.gameplayStarted();
                    GameScreen.spawnMultiColor();
                }, _this);
            }
            else {
                console.log("GAMEPLAY STOPPEd");
                SoundManager.music.loopFull();
                // video not displayed, should probably not give reward
            }
        });
    };
    GameContext.bluePowerup = function (powerupButton) {
        var _this = this;
        this.gameplayStopped();
        console.log("GAMEPLAY STOPPEd");
        SoundManager.music.stop();
        PokiSDK.rewardedBreak().then(function (success) {
            SoundManager.music.loopFull();
            if (success) {
                //  GameContext.explodePowerupsCount++;
                console.log("ad success");
                SimpleGame.myGame.time.events.add(200, function () {
                    GameContext.gameplayStarted();
                    powerupButton.bluePowerup();
                }, _this);
            }
            else {
                // video not displayed, should probably not give reward
            }
        });
    };
    GameContext.commercialBreak = function () {
        console.log("commercial break called");
        this.gameplayStopped();
        SoundManager.music.stop();
        PokiSDK.commercialBreak().then(function () {
            console.log("Commercial break finished, proceeding to game");
            GameContext.gameplayStarted();
            SoundManager.music.loopFull();
            // your code to continue to game
        });
    };
    GameContext.gameplayStarted = function () {
        if (GameContext.gameplayActive == false) {
            GameContext.gameplayActive = true;
            PokiSDK.gameplayStart();
        }
    };
    GameContext.gameplayStopped = function () {
        if (GameContext.gameplayActive) {
            GameContext.gameplayActive = false;
            PokiSDK.gameplayStop();
        }
    };
    GameContext.initialize = function (orientationChanged) {
        if (orientationChanged === void 0) { orientationChanged = false; }
        this.selectedTheme = 4;
        this.bestScore = Util.getStorage(Consts.COOKIE_NAME_BEST_SCORE, 0);
        if (!orientationChanged) {
            this.score = 0;
        }
        this.tutorialPlayedAlready = Util.getStorage(Consts.COOKIE_NAME_TUTORIAL_PLAYED, 0);
        if (this.tutorialPlayedAlready > 0) {
            GameContext.tutorialActive = false;
        }
        this.powerupFill = Util.getStorage(Consts.COOKIE_NAME_POWERUP_FILL, 0);
        if (Util.getStorage(Consts.COOKIE_SOUND_FLAG, 1) == 0) {
            this.soundFlag = false;
        }
        else {
            this.soundFlag = true;
        }
        if (Util.getStorage(Consts.COOKIE_VOICE_FLAG, 1) == 0) {
            this.voiceFlag = false;
        }
        else {
            this.voiceFlag = true;
        }
    };
    GameContext.newGame = function () {
        this.score = 0;
        this.rotatePowerupsCount = 0;
        this.explodePowerupsCount = 0;
    };
    GameContext.onThemeUpdated = function () {
        console.log("theme update called");
        // GameScreen.myref.updateTheme(this.selectedTheme)
        // Util.setStorage(Consts.COOKIE_NAME_THEME_INDEX, this.selectedTheme)
        // Cube.themeChanged()
    };
    GameContext.getNextLevelScore = function (level) {
        return Consts.LEVEL_SCORE_FIXED + level * Consts.LEVEL_SCORE_DELTA;
    };
    GameContext.getScoreUpUntilThisLevel = function (currentLevel) {
        var retval = 0;
        var i = currentLevel;
        while (i-- > 0) {
            retval += this.getNextLevelScore(i);
        }
        return retval;
    };
    GameContext.powerupFill = 0;
    GameContext.savedPositonsBoardX = [];
    GameContext.savedPositonsBoardY = [];
    GameContext.selectedTheme = 4;
    GameContext.gameAssetsFullyLoaded = false;
    GameContext.explodePowerupsCount = 1;
    GameContext.rotatePowerupsCount = 1;
    GameContext.currentLevel = 0;
    GameContext.currentLevelScore = 0;
    GameContext.gameplayActive = false;
    GameContext.availableAds = 1;
    GameContext.addSelectRewardScreen = false;
    GameContext.tutorialActive = true;
    return GameContext;
}());
var GameUITop = /** @class */ (function () {
    function GameUITop(parent) {
        // return
        console.log("add game ui top");
        this.parent = parent;
        GameUITop.myref = this;
        this.regularGameplayGroup = SimpleGame.myGame.add.group();
        this.tutorialGroup = SimpleGame.myGame.add.group();
        this.layerbggroup = SimpleGame.myGame.add.group(GameScreen.myref.layerBoard);
        this.topscoreboard = SimpleGame.myGame.add.sprite(ResizeManager.INTERNAL_GAME_WIDTH / 2, 0, 'panelBg', '', this.regularGameplayGroup);
        this.topscoreboard.anchor.set(0.5, 0);
        this.topscoreboard.scale.set(400, 4);
        this.scoreTxt = SimpleGame.myGame.make.text(ResizeManager.INTERNAL_GAME_WIDTH / 2, 180, "100", { font: "72px Montserrat", fill: "#000000", align: "Right" });
        this.scoreTxt2 = SimpleGame.myGame.make.text(ResizeManager.INTERNAL_GAME_WIDTH / 2, 180, "SCORE", { font: "60px Montserrat", fill: "#000000", align: "Right" });
        this.tutorialText = SimpleGame.myGame.make.text(ResizeManager.INTERNAL_GAME_WIDTH / 2, 60, "Make vertical lines...", { font: "60px Montserrat", fill: "#ffe4b5", align: "Right" });
        this.bestScoreTxt = SimpleGame.myGame.make.text(300, 260, "100", { font: "64px Montserrat", fill: "#000000", align: "Right" });
        this.bestScoreTxt2 = SimpleGame.myGame.make.text(300, 260, "BEST", { font: "60px Montserrat", fill: "#000000", align: "Right" });
        this.coinsTxt = SimpleGame.myGame.make.text(300, 260, "1234", { font: "60px Montserrat", fill: "#ffffff", align: "Right" });
        this.coinsIcon = SimpleGame.myGame.add.sprite(0, 0, 'currencyIcon');
        // this.buttonSettings
        this.bgScore = SimpleGame.myGame.make.graphics(0, 0);
        this.bgScore.beginFill(0xffffff);
        this.bgScore.drawRoundedRect(-200, -200, 550, 650, 50);
        this.bgScore.endFill();
        this.regularGameplayGroup.add(this.bgScore);
        if (GameContext.orientation == Consts.ORIENTATION_LANDSCAPE) {
            this.coinsBg = SimpleGame.myGame.make.graphics(0, 0);
            this.coinsBg.beginFill(0x1E2427);
            this.coinsBg.drawRoundedRect(30, 540, 500, 110, 120);
            this.coinsBg.endFill();
            this.regularGameplayGroup.add(this.coinsBg);
            this.regularGameplayGroup.add(this.coinsIcon);
            this.powerupBgGroup = SimpleGame.myGame.add.group(this.regularGameplayGroup);
            this.powerupBg = SimpleGame.myGame.make.graphics(1600, ResizeManager.INTERNAL_GAME_HEIGHT * 0.08);
            this.powerupBg.beginFill(0x1E2427);
            this.powerupBg.drawRoundedRect(0, 0, 280, ResizeManager.INTERNAL_GAME_HEIGHT * 0.84, 30);
            this.powerupBg.endFill();
            this.layerbggroup.add(this.powerupBg);
            this.comboButton = new ComboButton(1740, 540, this.layerbggroup);
            this.powerupButHammer = new PowerUpButton(Consts.POWERUP_HAMMER, 1620, 140, this.layerbggroup);
            this.powerupButMulticolor = new PowerUpButton(Consts.POWERUP_MULTICOLOR, 1620, 720, this.layerbggroup);
        }
        else {
            this.coinsBg = SimpleGame.myGame.make.graphics(0, 0);
            this.coinsBg.beginFill(0x1E2427);
            this.coinsBg.drawRoundedRect(0, 80, 400, 110, 120);
            this.coinsBg.endFill();
            this.regularGameplayGroup.add(this.coinsBg);
            this.regularGameplayGroup.add(this.coinsIcon);
            this.powerupBgGroup = SimpleGame.myGame.add.group(this.regularGameplayGroup);
            this.powerupBg = SimpleGame.myGame.make.graphics(ResizeManager.INTERNAL_GAME_WIDTH / 8, ResizeManager.INTERNAL_GAME_HEIGHT * 0.75 - 100);
            this.powerupBg.beginFill(0x1E2427);
            this.powerupBg.drawRoundedRect(0, 0, ResizeManager.INTERNAL_GAME_WIDTH * 6 / 8, 330, 30);
            this.powerupBg.endFill();
            this.regularGameplayGroup.add(this.powerupBg);
            this.comboButton = new ComboButton(ResizeManager.INTERNAL_GAME_WIDTH / 2, ResizeManager.INTERNAL_GAME_HEIGHT * 0.8 - 100, this.regularGameplayGroup);
            this.powerupButHammer = new PowerUpButton(Consts.POWERUP_HAMMER, ResizeManager.INTERNAL_GAME_WIDTH / 8 + 20, ResizeManager.INTERNAL_GAME_HEIGHT * 0.76 - 100, this.regularGameplayGroup);
            this.powerupButMulticolor = new PowerUpButton(Consts.POWERUP_MULTICOLOR, ResizeManager.INTERNAL_GAME_WIDTH * 5 / 8 + 30, ResizeManager.INTERNAL_GAME_HEIGHT * 0.76 - 100, this.regularGameplayGroup);
        }
        this.scoreTxt.anchor.set(0.5, 0.5);
        this.scoreTxt2.anchor.set(0.5, 0.5);
        this.bestScoreTxt.anchor.set(0.5, 0.5);
        this.bestScoreTxt2.anchor.set(0.5, 0.5);
        this.tutorialText.anchor.set(0, 0.5);
        this.regularGameplayGroup.add(this.scoreTxt);
        this.regularGameplayGroup.add(this.scoreTxt2);
        this.regularGameplayGroup.add(this.bestScoreTxt);
        this.regularGameplayGroup.add(this.bestScoreTxt2);
        this.regularGameplayGroup.add(this.coinsTxt);
        this.tutorialGroup.add(this.tutorialText);
        this.buttonSettings = new ButtonWithOverState(this.regularGameplayGroup, 'settingsBtn', 'settingsBtn', ResizeManager.INTERNAL_GAME_WIDTH / 12, ResizeManager.INTERNAL_GAME_HEIGHT / 32, this.settingsClicked.bind(this));
        this.buttonSettings.imgNormal.scale.set(0.5, 0.5);
        this.buttonSettings.imgOver.scale.set(0.5, 0.5);
        this.tutorialText.visible = false;
        if (GameContext.orientation == Consts.ORIENTATION_LANDSCAPE) {
            var scaleX = (window.innerWidth / 3) / 720;
            var scaleY = (window.innerHeight / 3) / 360;
            var wasd = new WASD(this.regularGameplayGroup);
            // this.regularGameplayGroup.scale.set((window.innerWidth/3)/720)
            this.regularGameplayGroup.scale.set(Math.min(scaleX, scaleY));
            this.tutorialGroup.scale.set((window.innerWidth / 3) / 720);
            this.topscoreboard.x = 350;
            this.bestScoreTxt.x = 360;
            this.bestScoreTxt.y = 50;
            this.scoreTxt.align = "Left";
            this.bestScoreTxt.align = "Left";
            this.scoreTxt.x = 180;
            this.scoreTxt2.x = 180;
            this.scoreTxt.y = 120;
            this.scoreTxt2.y = 200;
            this.bestScoreTxt.x = 180;
            this.bestScoreTxt2.x = 180;
            this.bestScoreTxt.y = 340;
            this.bestScoreTxt2.y = 400;
            this.scoreTxt.fontSize = 80;
            this.bestScoreTxt.fontSize = 48;
            this.bestScoreTxt2.fontSize = 48;
            this.buttonSettings.x = 40;
            this.buttonSettings.y = 0.8 * window.innerHeight / this.regularGameplayGroup.scale.y;
            console.log("gameuitop: " + window.innerWidth, window.innerHeight, this.regularGameplayGroup.scale, this.buttonSettings.y);
            this.topscoreboard.visible = false;
            this.coinsIcon.anchor.set(0.5, 0.5);
            this.coinsIcon.x = 80;
            this.coinsIcon.y = 600;
            this.regularGameplayGroup.add(this.coinsIcon);
            this.coinsTxt.anchor.set(1, 0);
            this.coinsTxt.x = 380;
            this.coinsTxt.y = 560;
        }
        else {
            this.bgScore.clear();
            this.parent.add(this.regularGameplayGroup);
            this.parent.add(this.tutorialGroup);
            this.topscoreboard.x = 350;
            this.bestScoreTxt.x = 100;
            this.bestScoreTxt.y = 10;
            this.scoreTxt.align = "Left";
            this.bestScoreTxt.align = "Left";
            this.scoreTxt.x = 600;
            this.scoreTxt2.x = 600;
            this.scoreTxt.y = 100;
            this.scoreTxt2.y = 180;
            this.bestScoreTxt.x = 1000;
            this.bestScoreTxt2.x = 1000;
            this.bestScoreTxt.y = 100;
            this.bestScoreTxt2.y = 160;
            this.scoreTxt.fontSize = 80;
            this.bestScoreTxt.fontSize = 48;
            this.bestScoreTxt2.fontSize = 48;
            this.topscoreboard.visible = true;
            this.coinsIcon.anchor.set(0.5, 0.5);
            this.coinsIcon.x = 110;
            this.coinsIcon.y = 140;
            this.coinsIcon.scale.set(0.5);
            this.regularGameplayGroup.add(this.coinsIcon);
            this.coinsTxt.anchor.set(1, 0);
            this.coinsTxt.x = 360;
            this.coinsTxt.y = 105;
            this.coinsBg.x = 0;
            this.coinsBg.y = 0;
            this.regularGameplayGroup.add(this.coinsBg);
        }
        var indicatorInitX = 1820;
        var indicatorDeltaX = 0;
        var indicatorInitY = 285;
        var indicatorDeltaY = 235;
        this.redIndicatorArr = [];
        this.blueIndicatorArr = [];
        this.coinsIcon.visible = false;
        this.coinsBg.visible = false;
        this.coinsTxt.visible = false;
        if (GameContext.orientation == Consts.ORIENTATION_PORTRAIT && GameContext.tutorialActive == false) {
            var adContainer = document.createElement("div");
            var perc = (window.innerWidth / 320) / 2 * 100;
            perc = 50 - 320 / window.innerWidth / 2 * 100;
            console.log(window.innerWidth);
            adContainer.style.position = "absolute";
            adContainer.style.left = "" + Math.floor(perc) + "%";
            adContainer.style.bottom = "0%";
            document.body.appendChild(adContainer);
            PokiSDK.displayAd(adContainer, "320x50");
            ResizeManager.adContainer = adContainer;
        }
        SimpleGame.myGame.time.events.loop(5, this.update, this);
    }
    GameUITop.prototype.scoreAnimation = function () {
        SimpleGame.myGame.add.tween(this.scoreTxt.scale).to({ x: 1.4, y: 1.4 }, 500, Phaser.Easing.Linear.None, true, 0, 0, true);
    };
    GameUITop.prototype.startNextLevel = function () {
        GameContext.currentLevel++;
    };
    GameUITop.prototype.settingsClicked = function () {
        console.log("settings clicked");
        var settingsScreen = new SettingsScreen(this.layerbggroup);
    };
    GameUITop.prototype.remove = function () {
        this.regularGameplayGroup.destroy();
        this.tutorialGroup.destroy();
        this.layerbggroup.destroy();
    };
    GameUITop.prototype.update = function () {
        this.comboButton.fillUpdate(GameContext.powerupFill);
        this.scoreTxt.text = "" + Math.round(GameUITop.scoreToShow);
        GameUITop.scoreToShow = GameUITop.scoreToShow + (GameContext.score - GameUITop.scoreToShow) * 0.1;
        // GameUITop.scoreToShow = Math.round(GameUITop.scoreToShow)
        this.bestScoreTxt.text = "" + GameContext.bestScore;
        if (GameContext.score > GameContext.bestScore) {
            GameContext.bestScore = GameContext.score;
            Util.setStorage(Consts.COOKIE_NAME_BEST_SCORE, GameContext.bestScore);
        }
        if (GameContext.tutorialActive) {
            this.regularGameplayGroup.visible = false;
            this.tutorialGroup.visible = true;
            this.layerbggroup.visible = false;
        }
        else {
            this.regularGameplayGroup.visible = true;
            this.tutorialGroup.visible = false;
            this.layerbggroup.visible = true;
        }
    };
    GameUITop.scoreToShow = 0;
    return GameUITop;
}());
var ResizeManager = /** @class */ (function () {
    function ResizeManager() {
    }
    ResizeManager.update = function () {
        if (this.adContainer != null) {
            this.adContainer.remove();
        }
        console.log("resize manager update caleld");
        // if (Math.random() < 0.99) return
        var deviceWidth = window.innerWidth;
        var deviceHeight = window.innerHeight;
        SimpleGame.myGame.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        if (deviceWidth > deviceHeight) {
            GameContext.orientation = Consts.ORIENTATION_LANDSCAPE;
            ResizeManager.INTERNAL_GAME_WIDTH = 1920;
            ResizeManager.INTERNAL_GAME_WIDTH_ORIGINAL = 1920;
            ResizeManager.INTERNAL_GAME_HEIGHT = 1080;
            SimpleGame.myGame.scale.setGameSize(deviceWidth, deviceHeight);
        }
        else {
            GameContext.orientation = Consts.ORIENTATION_PORTRAIT;
            ResizeManager.INTERNAL_GAME_WIDTH = 1593 * 0.75;
            ResizeManager.INTERNAL_GAME_WIDTH_ORIGINAL = 1593;
            ResizeManager.INTERNAL_GAME_HEIGHT = 2180;
            SimpleGame.myGame.scale.setGameSize(deviceWidth, deviceHeight);
        }
        // console.log(SimpleGame.myGame.width, SimpleGame.myGame.height)
        var gameScaleX = SimpleGame.myGame.width / this.INTERNAL_GAME_WIDTH;
        var gameScaleY = SimpleGame.myGame.height / this.INTERNAL_GAME_HEIGHT;
        // gameScaleX = gameScaleY = 1
        // SimpleGame.appbackgroundleft.visible = SimpleGame.appbackgroundright.visible = true;
        this.gameBackground.scale.set(1);
        this.gameBackground.width = 2160;
        this.gameBackground.height = 3840;
        console.log(SimpleGame.myGame.height, this.gameBackground.width, this.gameBackground.height);
        var bgScaleX = SimpleGame.myGame.width / this.gameBackground.width;
        var bgScaleY = SimpleGame.myGame.height / this.gameBackground.height;
        var bgscale = bgScaleY;
        if (bgScaleX > bgScaleY) {
            bgscale = bgScaleX;
        }
        console.log(bgscale, bgScaleX, bgScaleY);
        if (GameContext.orientation == Consts.ORIENTATION_PORTRAIT) {
            this.gameBackground.scale.set(bgscale);
            this.gameBackground.anchor.set(0, 0);
            if (gameScaleX > gameScaleY) {
                console.log("gamescaleX is larger");
                var scale = gameScaleY;
                SimpleGame.layerGame.scale.set(scale, scale);
                SimpleGame.layerGame.x = (SimpleGame.myGame.width - this.INTERNAL_GAME_WIDTH * scale) / 2;
                SimpleGame.layerGame.y = 0;
            }
            else {
                console.log("gamescaleY is larger");
                var scale = (gameScaleX + gameScaleY) / 2;
                SimpleGame.layerGame.scale.set(scale, scale);
                SimpleGame.layerGame.x = (SimpleGame.myGame.width - this.INTERNAL_GAME_WIDTH * scale) / 2;
                SimpleGame.layerGame.y = 0;
            }
        }
        else {
            this.gameBackground.anchor.set(0, 0.4);
            this.gameBackground.scale.set(bgscale * 1.25);
            if (gameScaleX > gameScaleY) {
                console.log("gamescaleX larger");
                var scale = gameScaleY;
                SimpleGame.layerGame.scale.set(scale, scale);
                SimpleGame.layerGame.x = (SimpleGame.myGame.width - this.INTERNAL_GAME_WIDTH * scale) / 2;
                SimpleGame.layerGame.y = 0;
            }
            else {
                var scale = gameScaleX;
                console.log("gamescaleY larger");
                SimpleGame.layerGame.scale.set(scale, scale);
                SimpleGame.layerGame.y = (SimpleGame.myGame.height - this.INTERNAL_GAME_HEIGHT * scale) / 2;
                SimpleGame.layerGame.x = 0;
                SimpleGame.layerGame.y = 0;
            }
        }
        ResizeManager.gameScale = scale;
        console.log(this.gameBackground.scale);
    };
    ResizeManager.INTERNAL_GAME_WIDTH = 1593 * 0.75 * 0.5;
    ResizeManager.INTERNAL_GAME_WIDTH_ORIGINAL = 1593 * 0.5;
    ResizeManager.INTERNAL_GAME_HEIGHT = 2180 * 0.5;
    ResizeManager.gameScale = 1;
    return ResizeManager;
}());
var SoundManager = /** @class */ (function () {
    function SoundManager() {
    }
    SoundManager.playClick = function () {
        if (SoundManager.canPlayClick) {
            // SoundManager.click.startTime = 0.1;
            // SoundManager.click.position = SoundManager.click.duration-100;
            // SoundManager.click.update()
            console.log("play CLICK");
            SoundManager.click.play();
            SoundManager.canPlayClick = false;
            // console.log("cannot play click")
            SimpleGame.myGame.time.events.add(100, function () {
                // console.log("can play click")
                SoundManager.canPlayClick = true;
            }, this);
        }
    };
    SoundManager.init = function () {
        SoundManager.sManager = new Phaser.SoundManager(SimpleGame.myGame);
        // SoundManager.deal1card.allowMultiple = true;
        // SoundManager.hint.volume = 0.7;
    };
    SoundManager.playGrabCard = function () {
        if (SoundManager.canPlayGrab && SoundManager.grabcard.mute == false) {
            //  console.log("play CLICK")
            SoundManager.grabcard.play();
            SoundManager.canPlayGrab = false;
            // console.log("cannot play click")
            SimpleGame.myGame.time.events.add(100, function () {
                // console.log("can play click")
                SoundManager.canPlayGrab = true;
            }, this);
        }
    };
    SoundManager.setMuteFlags = function (muteFlag) {
        console.log("set mute flags: " + muteFlag);
        SoundManager.click.mute = muteFlag;
        SoundManager.combo_merge.mute = muteFlag;
        SoundManager.combo_ready.mute = muteFlag;
        SoundManager.combo_use.mute = muteFlag;
        SoundManager.hammer.mute = muteFlag;
        SoundManager.merge.mute = muteFlag;
        SoundManager.movement.mute = muteFlag;
        SoundManager.music.mute = muteFlag;
        SoundManager.points.mute = muteFlag;
        SoundManager.result_finish.mute = muteFlag;
        SoundManager.shuffle.mute = muteFlag;
        SoundManager.tutorial_started.mute = muteFlag;
    };
    SoundManager.setVoiceMuteFlags = function (muteFlag) {
        //    SoundManager.Amazing.mute = muteFlag;
        //    SoundManager.Awesome.mute = muteFlag;
        //    SoundManager.Boss.mute = muteFlag;
        //    SoundManager.Easy.mute = muteFlag;
        //    SoundManager.Fantastic.mute = muteFlag;
        //    SoundManager.GoodJob.mute = muteFlag;
        //    SoundManager.Insane.mute = muteFlag;
        //    SoundManager.OhYeah.mute = muteFlag;
        //    SoundManager.Super.mute = muteFlag;
        //    SoundManager.Genius.mute = muteFlag;
        //    SoundManager.Great.mute = muteFlag;
        //    SoundManager.Perfect.mute = muteFlag;
        //    SoundManager.Wow.mute = muteFlag;
    };
    SoundManager.playDealRow = function () {
        SoundManager.timesToPlayDealSound = 10;
        SoundManager.playDealRowSound();
    };
    SoundManager.playDealRowSound = function () {
        return;
        SoundManager.dealcards.position = 200;
        SoundManager.dealcards.update();
        SoundManager.dealcards.play();
        // console.log("play dealcards")
        SoundManager.timesToPlayDealSound--;
        if (SoundManager.timesToPlayDealSound > 0) {
            SimpleGame.myGame.time.events.add(80, function () {
                SoundManager.playDealRowSound();
            });
        }
    };
    SoundManager.timesToPlayDealSound = 10;
    SoundManager.canPlayClick = true;
    SoundManager.canPlayGrab = true;
    return SoundManager;
}());
var Trace = /** @class */ (function () {
    function Trace() {
    }
    Trace.TraceCardByIdxAndPos = function (tableIdx, tablePos) {
        var i = Card.cardArray.length;
        while (i-- > 0) {
            var c = Card.cardArray[i];
            if (c.myTabIdx == tableIdx && c.tableuPosition == tablePos) {
                var name = CardUtil.cardNameArray[c.suitIdx * CardUtil.NUM_CARDS_PER_SUIT + c.cardIdx];
                console.log(name);
            }
        }
    };
    return Trace;
}());
var Tutorial = /** @class */ (function () {
    function Tutorial() {
    }
    Tutorial.tutorialCompleted = function () {
        Tutorial.myState = -1;
        GameContext.tutorialActive = false;
        BoardShadow.enableAllBoardShadows();
        GameScreen.myref.removeGameScreen();
        this.hand.visible = false;
        var gamescreen = new GameScreen();
    };
    Tutorial.start = function () {
        this.tutorialIconArr = [];
        Cube.createCubeAt(3, 0);
        Cube.createCubeAt(0, 3);
        Tutorial.myState = Tutorial.STATE_STEP_1;
        SimpleGame.myGame.add.group();
        if (GameContext.orientation == Consts.ORIENTATION_LANDSCAPE) {
            this.tutorialText = SimpleGame.myGame.add.text(10, window.innerHeight / 8, "Swipe anywhere & merge tiles of the same color ", { font: "72px Montserrat", fill: "#ffffff", align: "Center" });
            this.tutorialText.wordWrap = true;
            this.tutorialText.wordWrapWidth = window.innerWidth / 4;
            this.tutorialText.fontSize = window.innerHeight / 24;
            this.tutorialText.x = window.innerWidth / 4 / 12;
            this.tutorialText.y = window.innerHeight / 2 - this.tutorialText.height / 2;
        }
        else {
            this.tutorialText = SimpleGame.myGame.add.text(window.innerWidth / 2, window.innerHeight / 9, "Swipe anywhere & merge tiles of the same color ", { font: "72px Montserrat", fill: "#ffffff", align: "Center" });
            this.tutorialText.anchor.set(0.5, 0.5);
            this.tutorialText.wordWrap = true;
            this.tutorialText.wordWrapWidth = window.innerWidth * 0.8;
            this.tutorialText.fontSize = window.innerWidth / 24;
        }
    };
    Tutorial.gotoStep2 = function () {
        this.tutorialText.text = "Merging tiles upgrades them to higher level";
        // var c:Cube = Cube.myCubesArray[0];
        Tutorial.myState = Tutorial.STATE_STEP_2;
        // Cube.createCubeAt(c.boardY,c.boardX, Cube.IDX_TILE_2);
        SimpleGame.myGame.time.events.add(200, function () {
            Cube.removeAll();
            Cube.createCubeAt(0, 3, Cube.IDX_TILE_2);
            Cube.createCubeAt(3, 0, Cube.IDX_TILE_2);
        }, this);
    };
    Tutorial.gotoStep3 = function () {
        SimpleGame.myGame.time.events.add(200, function () {
            Cube.removeAll();
            Cube.createCubeAt(0, 1, Cube.IDX_TILE_3);
            Cube.createCubeAt(1, 2, Cube.IDX_TILE_3);
            Cube.createCubeAt(2, 3, Cube.IDX_TILE_3);
        }, this);
        this.tutorialText.text = "You can merge 3 tiles to make a Combo";
        Tutorial.myState = Tutorial.STATE_STEP_3;
    };
    Tutorial.gotoStep4 = function () {
        this.tutorialText.text = "Combo upgrades ALL tiles of the same color.";
        Tutorial.myState = Tutorial.STATE_STEP_4;
        SimpleGame.myGame.time.events.add(200, function () {
            Cube.removeAll();
            Cube.createCubeAt(3, 1, Cube.IDX_TILE_4);
            Cube.createCubeAt(3, 2, Cube.IDX_TILE_4);
            Cube.createCubeAt(3, 3, Cube.IDX_TILE_4);
            Cube.createCubeAt(2, 3, Cube.IDX_TILE_4);
            Cube.createCubeAt(1, 3, Cube.IDX_TILE_4);
        }, this);
    };
    Tutorial.gotoStep5 = function () {
        Tutorial.myState = Tutorial.STATE_STEP_5;
        Tutorial.myState = -1;
        GameContext.tutorialActive = false;
        this.tutorialText.text = "";
        Util.setStorage(Consts.COOKIE_NAME_TUTORIAL_PLAYED, 1);
    };
    Tutorial.removeIcons = function () {
        var i = this.tutorialIconArr.length;
        while (i-- > 0) {
            this.tutorialIconArr[i].destroy();
        }
        this.tutorialIconArr = [];
    };
    Tutorial.createIconAt = function (x, y) {
        var cubeSpr = SimpleGame.myGame.add.sprite(0, 0, 'icon-swap', '', GameScreen.myref.layerBoard);
        if (GameContext.orientation == Consts.ORIENTATION_LANDSCAPE) {
            cubeSpr.x = Consts.BOARD_INIT_X_LANDSCAPE + (0.5 + x) * Consts.BOARD_DELTA_X_LANDSCAPE;
            cubeSpr.y = Consts.BOARD_INIT_Y_LANDSCAPE + (0.5 + y) * Consts.BOARD_DELTA_Y_LANDSCAPE;
        }
        else {
            cubeSpr.x = Consts.BOARD_INIT_X_PORTRAIT + (0.5 + x) * Consts.BOARD_DELTA_X_PORTRAIT;
            cubeSpr.y = Consts.BOARD_INIT_Y_PORTRAIT + (0.5 + y) * Consts.BOARD_DELTA_Y_PORTRAIT;
        }
        if (GameContext.orientation == Consts.ORIENTATION_PORTRAIT) {
            cubeSpr.width = Consts.BOARD_DELTA_X_PORTRAIT;
            cubeSpr.height = Consts.BOARD_DELTA_X_PORTRAIT;
        }
        else {
            cubeSpr.width = Consts.BOARD_DELTA_X_LANDSCAPE;
            cubeSpr.height = Consts.BOARD_DELTA_X_LANDSCAPE;
        }
        cubeSpr.anchor.set(0.5, 0.5);
        this.tutorialIconArr.push(cubeSpr);
    };
    Tutorial.STATE_STEP_1 = 0;
    Tutorial.STATE_STEP_2 = 1;
    Tutorial.STATE_STEP_3 = 2;
    Tutorial.STATE_STEP_4 = 3;
    Tutorial.STATE_STEP_5 = 4;
    return Tutorial;
}());
var ColorButtonWithText = /** @class */ (function () {
    function ColorButtonWithText(text, color, x, y, width, height, mygroup, onClickFunction) {
        if (onClickFunction === void 0) { onClickFunction = function () {
        }; }
        this.myGroup = mygroup;
        this.onclickfunction = onClickFunction;
        this.bgblack = SimpleGame.myGame.make.graphics(x, y);
        this.bgblack.beginFill(color);
        this.bgblack.drawRoundedRect(-width / 2, -height / 2, width, height, 50);
        this.bgblack.endFill();
        this.bgblack.alpha = 1;
        this.bgblack.inputEnabled = true;
        this.myGroup.add(this.bgblack);
        this.bgblack.events.onInputDown.add(this.onclickfunction, this);
        this.myTxt = SimpleGame.myGame.add.text(this.bgblack.x, this.bgblack.y, "" + text, { font: "48px Montserrat", fill: "#ffffff", align: "Center" }, this.myGroup);
        this.myTxt.anchor.set(0.5, 0.5);
    }
    return ColorButtonWithText;
}());
var ComboButton = /** @class */ (function () {
    function ComboButton(x, y, parent) {
        this.enabled = false;
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.myGroup = SimpleGame.myGame.add.group(this.parent);
        this.myGroup.scale.set(0.85);
        this.myGroup.x = x;
        this.myGroup.y = y;
        this.combo0 = SimpleGame.myGame.add.sprite(0, 0, 'combo0', '', this.myGroup);
        this.combo1 = SimpleGame.myGame.add.sprite(0, 0, 'combo1', '', this.myGroup);
        // this.combo2 = SimpleGame.myGame.add.sprite(x, y, 'combo1', '', parent)
        this.combo0.anchor.set(0.5, 0.5);
        this.combo1.anchor.set(0.5, 0.5);
        this.combo0.scale.set(0.65);
        this.combo1.scale.set(0.65);
        this.mask = SimpleGame.myGame.add.graphics(0, 0, this.myGroup);
        this.mask.beginFill(0xffffff);
        this.mask.drawRect(-150, -150, 300, 300);
        this.mask.endFill();
        this.combo1.mask = this.mask;
        this.mask.y += 300;
        this.defaultY = this.mask.y;
        this.combo3 = SimpleGame.myGame.add.sprite(0, 0, 'comboBtn', '', this.myGroup);
        this.combo3.anchor.set(0.5, 0.5);
        this.combo3.scale.set(0.35);
        this.combo3.mask = this.mask;
        this.combo3.inputEnabled = true;
        this.combo3.events.onInputDown.add(this.powerupClicked, this);
    }
    ComboButton.prototype.fillUpdate = function (powerupFill) {
        this.mask.y = this.defaultY - 20 * powerupFill;
        if (this.mask.y < this.defaultY - 300) {
            this.mask.y = this.defaultY - 300;
            if (this.enabled == false) {
                this.enabled = true;
                SoundManager.combo_ready.play();
            }
        }
        else {
            this.enabled = false;
        }
    };
    ComboButton.prototype.powerupClicked = function (powerupClicked, arg1) {
        if (this.enabled == false)
            return;
        console.log("powerup cliced");
        GameContext.powerupFill = 0;
        this.fillUpdate(GameContext.powerupFill);
        SoundManager.combo_use.play();
        var i = Cube.myCubesArray.length;
        var r = 2;
        while (i-- > 0) {
            var c = Cube.myCubesArray[i];
            if (c.myIdx == Cube.IDX_TILE_INFINITY || c.myIdx == Cube.IDX_TILE_MULTI)
                continue;
            c.upgrade();
            if (r-- <= 0) {
                return;
            }
        }
    };
    return ComboButton;
}());
var OnOffButton = /** @class */ (function () {
    function OnOffButton(parent, x, y, onFlag, myIdx) {
        if (myIdx === void 0) { myIdx = 0; }
        this.toggleOnX = 123;
        this.toggleOffX = 13;
        this.onFlag = false;
        if (myIdx == 0) {
            onFlag = GameContext.soundFlag;
            console.log("onoffbutflags: " + myIdx, onFlag);
        }
        else {
            onFlag = GameContext.voiceFlag;
            console.log("onoffbutflags: " + myIdx, onFlag);
        }
        this.myIdx = myIdx;
        this.onFlag = onFlag;
        this.mygroup = SimpleGame.myGame.add.group(parent);
        this.mygroup.x = x;
        this.mygroup.y = y;
        this.offbtn = SimpleGame.myGame.add.sprite(0, 0, 'OFF_BTN', '', this.mygroup);
        this.onbtn = SimpleGame.myGame.add.sprite(0, 0, 'ON_BTN', '', this.mygroup);
        this.toggle = SimpleGame.myGame.add.sprite(17, 15, 'toggle_BTN01', '', this.mygroup);
        // this.offbtn.inputEnabled = true;
        this.offbtn.events.onInputDown.add(this.setToOnPositionWithTween, this, 0, [false]);
        // this.onbtn.inputEnabled = true;
        this.onbtn.events.onInputDown.add(this.setToOffPositionWithTween, this, 0, [false]);
        if (this.onFlag) {
            this.setToOnPosition(true);
        }
        else {
            this.setToOffPosition(true);
        }
    }
    OnOffButton.prototype.setToOffPositionWithTween = function (setToOffPositionWithTween, arg1, arg2, arg3) {
        this.setToOffPosition(false);
    };
    OnOffButton.prototype.setToOnPositionWithTween = function (setToOnPositionWithTween, arg1, arg2, arg3) {
        this.setToOnPosition(false);
    };
    OnOffButton.prototype.setToOnPosition = function (immediately) {
        if (immediately === void 0) { immediately = true; }
        this.onFlag = true;
        if (this.myIdx == 0) {
            GameContext.soundFlag = true;
        }
        else if (this.myIdx == 1) {
            GameContext.voiceFlag = true;
        }
        this.saveFlags();
        // console.log("imm falg: " + immediately)
        SimpleGame.myGame.time.events.add(150, function () {
            this.onbtn.inputEnabled = true;
            this.offbtn.inputEnabled = false;
        }, this);
        if (immediately) {
            this.toggle.x = this.toggleOnX;
        }
        else {
            this.toggle.x = this.toggleOnX;
            // SimpleGame.myGame.add.tween(this.toggle).to({x:this.toggleOnX}, 800, Phaser.Easing.Linear.None, true)
        }
        this.offbtn.visible = false;
        this.onbtn.visible = true;
    };
    OnOffButton.prototype.setToOffPosition = function (immediately) {
        if (immediately === void 0) { immediately = true; }
        this.onFlag = false;
        if (this.myIdx == 0) {
            GameContext.soundFlag = false;
        }
        else if (this.myIdx == 1) {
            GameContext.voiceFlag = false;
        }
        this.saveFlags();
        SimpleGame.myGame.time.events.add(150, function () {
            this.onbtn.inputEnabled = false;
            this.offbtn.inputEnabled = true;
        }, this);
        if (immediately) {
            this.toggle.x = this.toggleOffX;
        }
        else {
            this.toggle.x = this.toggleOffX;
            // SimpleGame.myGame.add.tween(this.toggle).to({x:this.toggleOnX}, 800, Phaser.Easing.Linear.None, true)
        }
        this.offbtn.visible = true;
        this.onbtn.visible = false;
    };
    OnOffButton.prototype.saveFlags = function () {
        if (GameContext.voiceFlag) {
            Util.setStorage(Consts.COOKIE_VOICE_FLAG, 1);
        }
        else {
            Util.setStorage(Consts.COOKIE_VOICE_FLAG, 0);
        }
        if (GameContext.soundFlag) {
            Util.setStorage(Consts.COOKIE_SOUND_FLAG, 1);
        }
        else {
            Util.setStorage(Consts.COOKIE_SOUND_FLAG, 0);
        }
        SoundManager.setMuteFlags(!GameContext.soundFlag);
        SoundManager.setVoiceMuteFlags(!GameContext.voiceFlag);
    };
    return OnOffButton;
}());
var PowerUpButton = /** @class */ (function () {
    //6076BF
    //B3783E
    function PowerUpButton(myType, x, y, parent) {
        this.myState = 0;
        this.inputBanned = false;
        this.myType = myType;
        if (myType == Consts.POWERUP_HAMMER) {
            PowerUpButton.hammerButton = this;
            this.mysprUnlit = SimpleGame.myGame.add.sprite(x + 20, y, 'hammerPowerBtn', '', parent);
            // this.myCoinLabel = SimpleGame.myGame.add.sprite(x+20, y + 150, 'priceLabelBg', '', parent)
            // this.myCoinLabel.scale.set(0.7, 0.4)
            // this.myCoinLabel.tint = 0x6076BF
            this.myTxtAd = SimpleGame.myGame.add.text(x + 95, y + 155, "AD", { font: "32px Montserrat", fill: "#CCE4FF", align: "Center" }, parent);
        }
        else {
            PowerUpButton.multicolorButton = this;
            this.mysprUnlit = SimpleGame.myGame.add.sprite(x + 20, y, 'upgradePowerBtn', '', parent);
            // this.myCoinLabel = SimpleGame.myGame.add.sprite(x+20, y + 150, 'priceLabelBg', '', parent)
            // this.myCoinLabel.scale.set(0.4)
            // this.myCoinLabel.tint = 0xB3783E
            this.myTxtAd = SimpleGame.myGame.add.text(x + 95, y + 155, "AD", { font: "32px Montserrat", fill: "#E5CA95", align: "Center" }, parent);
        }
        this.myCoinIcon = SimpleGame.myGame.add.sprite(x, y + 200, 'currencyIcon', '', parent);
        this.myCoinIcon.scale.set(0.6);
        this.mysprUnlit.scale.set(0.8);
        this.mysprUnlit.inputEnabled = true;
        this.mysprUnlit.events.onInputDown.add(this.clicked, this);
        this.mysprUnlit.input.useHandCursor = true;
        this.myCoinIcon.visible = false;
        this.myTxtAd.visible = true;
    }
    PowerUpButton.prototype.addTo = function (parent) {
        parent.add(this.mysprUnlit);
    };
    PowerUpButton.prototype.clicked = function () {
        if (this.inputBanned == true)
            return;
        this.inputBanned = true;
        SimpleGame.myGame.time.events.add(200, function () {
            this.inputBanned = false;
        }, this);
        if (this.myType == Consts.POWERUP_HAMMER) {
            GameContext.bluePowerup(this);
            //   this.bluePowerup()
        }
        else {
            GameContext.yellowPowerup();
            // GameScreen.spawnMultiColor();
        }
    };
    PowerUpButton.prototype.bluePowerup = function () {
        SoundManager.hammer.play();
        this.lineGraphics = SimpleGame.myGame.add.graphics(0, 0, GameUITop.myref.regularGameplayGroup);
        this.lineGraphics.lineStyle(8, 0x6076BF);
        this.lineGraphics.moveTo(GameUITop.myref.powerupButHammer.mysprUnlit.x + GameUITop.myref.powerupButHammer.mysprUnlit.width / 2, GameUITop.myref.powerupButHammer.mysprUnlit.y + GameUITop.myref.powerupButHammer.mysprUnlit.height / 2);
        var c = CubeUtil.getRandomPiece();
        c.startShakingForRemoval();
        var p = GameScreen.getPieceGlobalCoords(c);
        console.log("cworldscale: " + c.cubeSpr.worldScale);
        this.lineGraphics.lineTo(p.x + c.cubeSpr.width / 2 / c.cubeSpr.worldScale.x, p.y);
        this.lineGraphics.visible = false;
        SimpleGame.myGame.time.events.add(300, function () {
            this.lineGraphics.visible = true;
        }.bind(this), this);
        SimpleGame.myGame.time.events.add(700, this.removeLine.bind(this), this);
    };
    PowerUpButton.prototype.removeLine = function () {
        this.lineGraphics.destroy();
    };
    PowerUpButton.STATE_DESELECTED = 0;
    PowerUpButton.STATE_SELECTED = 1;
    return PowerUpButton;
}());
var ShuffleButton = /** @class */ (function () {
    function ShuffleButton(x, y, height, parent, outOfMovesPrompt) {
        this.outOfMovesPrompt = outOfMovesPrompt;
        console.log("height: " + height);
        this.myGroup = SimpleGame.myGame.add.group(parent);
        this.myGroup.x = x;
        this.myGroup.y = y;
        this.bgpink = SimpleGame.myGame.make.graphics(0, 0);
        this.bgpink.beginFill(0xB35998);
        this.bgpink.drawRoundedRect(0, 0, height * 4, height, 100);
        this.bgpink.endFill();
        this.bgpink.alpha = 1;
        this.bgpink.inputEnabled = true;
        this.myGroup.add(this.bgpink);
        this.bgpink.events.onInputDown.add(this.bgpinkclicked, this);
        this.myGroup.x -= this.myGroup.width / 2;
        this.myGroup.y -= this.myGroup.height / 2;
        this.coinIcon = SimpleGame.myGame.add.sprite(0, 0, 'currencyIcon', '', this.myGroup);
        this.coinIcon.anchor.set(0.5, 0.5);
        this.coinIcon.scale.set(height / 200);
        this.coinIcon.x += this.bgpink.width * 0.12;
        this.coinIcon.y += this.bgpink.height * 0.5;
        this.coinIcon.visible = false;
        this.coinTxt = SimpleGame.myGame.add.text(0, 0, "SHUFFLE", { font: "20px Montserrat", fill: "#ffffff", align: "Center" }, this.myGroup);
        this.coinTxt.anchor.set(0.5, 0.5);
        this.coinTxt.x = height * 2;
        this.coinTxt.y = height / 2;
    }
    ShuffleButton.prototype.bgpinkclicked = function (bgpinkclicked, arg1) {
        this.outOfMovesPrompt.reviveClicked();
    };
    return ShuffleButton;
}());
var SoundButton = /** @class */ (function () {
    function SoundButton(parent, imgNormalName, imgOverName, x, y) {
        var soundontxt = SimpleGame.myGame.make.text(0, 0, "" + Language.sound_on[Language.langIdx], {
            font: "26px Open Sans", fill: "#ffffff", fontWeight: "600"
        });
        this.soundOnBut = new ButtonWithOverAndText(soundontxt, parent, imgNormalName, imgOverName, x, y, this.toggleSoundButton.bind(this));
        this.soundOnBut.setXY(x, y);
        var soundofftxt = SimpleGame.myGame.make.text(0, 0, "" + Language.sound_off[Language.langIdx], {
            font: "26px Open Sans", fill: "#ffffff", fontWeight: "600"
        });
        this.soundOffBut = new ButtonWithOverAndText(soundofftxt, parent, imgNormalName, imgOverName, x, y, this.toggleSoundButton.bind(this));
        this.soundOffBut.setXY(x, y);
        this.setCorrectButtonVisible(true);
    }
    SoundButton.prototype.toggleSoundButton = function () {
        SoundButton.soundFlag = !SoundButton.soundFlag;
        // console.log("sound flag: " + SoundButton.soundFlag)
        this.setCorrectButtonVisible();
        SoundManager.setMuteFlags(!SoundButton.soundFlag);
        // console.log("mute flag: " + SoundManager.sManager.mute)
    };
    SoundButton.prototype.setCorrectButtonVisible = function (skipButtonOver) {
        if (skipButtonOver === void 0) { skipButtonOver = false; }
        // console.log("set correct but visible")
        if (SoundButton.soundFlag) {
            this.soundOnBut.setVisible();
            this.soundOffBut.setInvisible();
            if (!skipButtonOver)
                this.soundOnBut.onButtonOver();
        }
        else {
            this.soundOnBut.setInvisible();
            this.soundOffBut.setVisible();
            if (!skipButtonOver)
                this.soundOffBut.onButtonOver();
        }
    };
    SoundButton.manageTextualSoundButtons = function (sOnBut, sOffBut) {
        if (this.soundFlag) {
            console.log("sound is on!!!");
            sOffBut.goInvisible();
            sOnBut.goVisible();
        }
        else {
            sOnBut.goInvisible();
            sOffBut.goVisible();
        }
    };
    SoundButton.soundFlag = true;
    return SoundButton;
}());
var UndoButton = /** @class */ (function () {
    function UndoButton(parent, imgNormalName, imgOverName, x, y, onClickFunction) {
        if (onClickFunction === void 0) { onClickFunction = function () {
        }; }
        this.onClickExecuted = false;
        this.skipClickSound = false;
        this.skipMouseOver = false;
        this.imgnormalnamestr = imgNormalName;
        this.parent = parent;
        this.imgNormalName = imgNormalName;
        this.imgOverName = imgOverName;
        this.x = x;
        this.y = y;
        this.imgNormal = SimpleGame.myGame.make.sprite(this.x, this.y, imgNormalName);
        this.imgOver = SimpleGame.myGame.make.sprite(this.x, this.y, imgOverName);
        parent.add(this.imgNormal);
        parent.add(this.imgOver);
        this.imgNormal.inputEnabled = this.imgOver.inputEnabled = true;
        this.imgOver.inputEnabled = false;
        this.imgNormal.input.useHandCursor = true;
        UndoButton.myref = this;
        this.imgNormal.events.onInputDown.add(function () {
            this.onClickFunction();
            if (BoardManager.undoIsAvailable == false)
                this.imgOver.visible = false;
            if (SimpleGame.myGame.device.touch) {
                console.log("RESET");
                SimpleGame.myGame.input.reset();
                this.imgOver.visible = false;
            }
        }, this);
        this.imgNormal.events.onInputOver.add(function () {
            if (BoardManager.undoIsAvailable)
                this.imgOver.visible = true;
        }, this);
        this.imgNormal.events.onInputOut.add(function () {
            this.imgOver.visible = false;
        }, this);
        this.imgOver.visible = false;
        this.onClickFunction = onClickFunction;
        console.log("button created");
        SimpleGame.myGame.time.events.loop(10, this.update, this);
    }
    UndoButton.prototype.update = function () {
        // if (BoardManager.undoDisabled) this.imgOver.visible = false;
        if (BoardManager.undoIsAvailable == false)
            this.imgOver.visible = false;
    };
    return UndoButton;
}());
var WASD = /** @class */ (function () {
    function WASD(parent) {
        WASD.myref = this;
        var deltaY = -50;
        var deltaX = -40;
        this.left = new WASDButton(parent, 'arrow01', 120 + deltaX, 700 + deltaY, 0, this.leftClicked.bind(this));
        this.right = new WASDButton(parent, 'arrow01', 280 + deltaX, 700 + deltaY, 180, this.rightClicked.bind(this));
        this.up = new WASDButton(parent, 'arrow01', 200 + deltaX, 620 + deltaY, 90, this.upClicked.bind(this));
        this.down = new WASDButton(parent, 'arrow01', 200 + deltaX, 780 + deltaY, 270, this.downClicked.bind(this));
    }
    WASD.prototype.leftClicked = function () {
        if (WASD.myref) {
            WASD.myref.left.lit();
        }
        if (BoardUtil.MOVE_ACTIVE)
            return;
        BoardUtil.goLeft(true);
    };
    WASD.prototype.rightClicked = function () {
        if (WASD.myref) {
            WASD.myref.right.lit();
        }
        if (BoardUtil.MOVE_ACTIVE)
            return;
        BoardUtil.goRight(true);
    };
    WASD.prototype.upClicked = function () {
        if (WASD.myref) {
            WASD.myref.up.lit();
        }
        if (BoardUtil.MOVE_ACTIVE)
            return;
        BoardUtil.goUp(true);
    };
    WASD.prototype.downClicked = function () {
        if (WASD.myref) {
            WASD.myref.down.lit();
        }
        if (BoardUtil.MOVE_ACTIVE)
            return;
        BoardUtil.goDown(true);
    };
    return WASD;
}());
var WASDButton = /** @class */ (function () {
    function WASDButton(parent, imgName, x, y, rotation, fonClickFunction) {
        if (fonClickFunction === void 0) { fonClickFunction = function () {
        }; }
        this.litFlag = false;
        this.myGroup = SimpleGame.myGame.add.group();
        this.onClickFunction = fonClickFunction;
        parent.add(this.myGroup);
        this.mySprite = SimpleGame.myGame.add.sprite(x, y, imgName, '', this.myGroup);
        this.mySprite.anchor.set(0.5, 0.5);
        this.mySprite.angle = rotation;
        this.myGroup.add(this.mySprite);
        this.mySprite.alpha = 0.6;
        this.mySprite.inputEnabled = true;
        this.mySprite.events.onInputDown.add(this.onClickFunction, this);
        console.log("wadbutton: " + this.mySprite.worldPosition, this.mySprite.position);
    }
    WASDButton.prototype.lit = function () {
        if (this.litFlag)
            return;
        this.mySprite.alpha = 1;
        SimpleGame.myGame.time.events.add(500, function () {
            this.litFlag = false;
            this.mySprite.alpha = 0.6;
        }, this);
        // throw new Error("Method not implemented.");
    };
    return WASDButton;
}());
var BackToMenuPrompt = /** @class */ (function () {
    function BackToMenuPrompt(parent) {
        GameContext.gameplayStopped();
        console.log("added back to menu screen");
        this.myGroup = SimpleGame.myGame.add.group(parent);
        this.bgblack = SimpleGame.myGame.make.graphics(-2000, -2000);
        this.bgblack.beginFill(0x000000);
        this.bgblack.drawRect(0, 0, 4000, 4000);
        this.bgblack.endFill();
        this.bgblack.alpha = 0.67;
        this.bgblack.inputEnabled = true;
        this.myGroup.add(this.bgblack);
        this.mybg = SimpleGame.myGame.add.sprite(0, 0, 'small_board_wood01', '', this.myGroup);
        this.mybg.anchor.set(0.5, 0.5);
        this.myGroup.x = ResizeManager.INTERNAL_GAME_WIDTH / 2;
        this.myGroup.y = ResizeManager.INTERNAL_GAME_HEIGHT / 2;
        this.backtomenuTxt = SimpleGame.myGame.add.text(0, -200, "Back to menu?", { font: "72px Montserrat", fill: "#ffffff", align: "Right" });
        this.backtomenuTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.backtomenuTxt);
        this.backtomenuTxt2 = SimpleGame.myGame.add.text(0, -50, "you're going to lose the current progress", { font: "40px Montserrat", fill: "#ffffff", align: "Center" });
        this.backtomenuTxt2.anchor.set(0.5, 0.5);
        this.myGroup.add(this.backtomenuTxt2);
        this.backtomenuTxt2.wordWrap = true;
        this.backtomenuTxt2.wordWrapWidth = 600;
        this.yesTxt = SimpleGame.myGame.add.text(0, -200, "Yes", { font: "72px Montserrat", fill: "#7b3f00", align: "Center" });
        this.noTxt = SimpleGame.myGame.add.text(0, -200, "No", { font: "72px Montserrat", fill: "#7b3f00", align: "Center" });
        this.yesBut = new PlayButton(this.yesTxt, this.myGroup, 'yes-no_up_BTN', 'yes-no_down_BTN', -400, 100, this.yesButClicked.bind(this));
        this.noBut = new PlayButton(this.noTxt, this.myGroup, 'yes-no_up_BTN', 'yes-no_down_BTN', 50, 100, this.noButClicked.bind(this));
        this.yesBut.textYDelta = -20;
        this.noBut.textYDelta = -20;
    }
    BackToMenuPrompt.prototype.noButClicked = function () {
        this.myGroup.destroy();
        GameContext.commercialBreak();
    };
    BackToMenuPrompt.prototype.yesButClicked = function () {
        GameContext.clearSavedData();
        this.myGroup.destroy();
        GameScreen.myref.removeGameScreen();
        var initmenuprompt = new InitMenuPrompt(false);
    };
    return BackToMenuPrompt;
}());
var CollectYourReward = /** @class */ (function () {
    function CollectYourReward(parent) {
        GameContext.gameplayStopped();
        this.parent = parent;
        this.myGroup = SimpleGame.myGame.add.group(parent);
        this.bgblack = SimpleGame.myGame.make.graphics(-2000, -2000);
        this.bgblack.beginFill(0x000000);
        this.bgblack.drawRect(0, 0, 4000, 4000);
        this.bgblack.endFill();
        this.bgblack.alpha = 0.67;
        this.bgblack.inputEnabled = true;
        this.myGroup.add(this.bgblack);
        // this.collectReward
        this.collectRewardTxt = SimpleGame.myGame.add.text(ResizeManager.INTERNAL_GAME_WIDTH / 2, 300, "Collect your reward!", { font: "72px Montserrat", fill: "#ffffff", align: "Right" });
        this.collectRewardTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.collectRewardTxt);
        this.giftSpr = SimpleGame.myGame.add.sprite(ResizeManager.INTERNAL_GAME_WIDTH / 2, ResizeManager.INTERNAL_GAME_HEIGHT / 2, 'gift_lit_icon01', '', this.myGroup);
        this.giftSpr.anchor.set(0.5, 0.5);
        this.giftSpr.scale.set(3, 3);
        SimpleGame.myGame.add.tween(this.giftSpr.scale).to({ x: 3.3, y: 3.3 }, 300, Phaser.Easing.Linear.None, true, 0, 10000000000000, true);
        // SimpleGame.myGame.add.tween(this.giftSpr).to({}, 300, Phaser.Easing.Linear.None, true, 0, 10000000000000, true)
        this.openTxt = SimpleGame.myGame.add.text(0, -200, "Open", { font: "72px Montserrat", fill: "#7b3f00", align: "Center" });
        this.openBut = new PlayButton(this.openTxt, this.myGroup, 'yes-no_up_BTN', 'yes-no_down_BTN', ResizeManager.INTERNAL_GAME_WIDTH / 2 - 200, ResizeManager.INTERNAL_GAME_HEIGHT / 2 + 250, this.openButClicked.bind(this));
        this.openBut.textYDelta = -16;
    }
    CollectYourReward.prototype.openButClicked = function () {
        this.myGroup.destroy();
        GameContext.rewardedBreak();
    };
    return CollectYourReward;
}());
var GameOverPrompt = /** @class */ (function () {
    function GameOverPrompt(parent) {
        GameContext.clearSavedData();
        GameContext.gameplayStopped();
        this.myGroup = SimpleGame.myGame.add.group(parent);
        this.bgblack = SimpleGame.myGame.make.graphics(-2000, -2000);
        this.bgblack.beginFill(0x000000);
        this.bgblack.drawRect(0, 0, 4000, 4000);
        this.bgblack.endFill();
        this.bgblack.alpha = 0.67;
        this.bgblack.inputEnabled = true;
        this.myGroup.add(this.bgblack);
        this.myGroup.x = ResizeManager.INTERNAL_GAME_WIDTH / 2;
        this.myGroup.y = ResizeManager.INTERNAL_GAME_HEIGHT / 2;
        this.iconCrown = SimpleGame.myGame.add.sprite(0, -600, 'icon-crown', '', this.myGroup);
        this.iconLeaderboards = SimpleGame.myGame.add.sprite(0, -150, 'icon-leaderboards', '', this.myGroup);
        this.iconCrown.scale.set(0.2);
        this.iconLeaderboards.scale.set(0.2);
        this.iconCrown.anchor.set(0.5, 0.5);
        this.iconLeaderboards.anchor.set(0.5, 0.5);
        this.yourscoreTxt = SimpleGame.myGame.add.text(0, -500, "Your Score", { font: "36px Montserrat", fill: "#ffffff", align: "Center" });
        this.yourscoreTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.yourscoreTxt);
        this.yourscoreValueTxt = SimpleGame.myGame.add.text(0, -400, "3000", { font: "76px Montserrat", fill: "#ffffff", align: "Center" });
        this.yourscoreValueTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.yourscoreValueTxt);
        this.yourbestscoreTxt = SimpleGame.myGame.add.text(0, -50, "Your Score", { font: "36px Montserrat", fill: "#ffffff", align: "Center" });
        this.yourbestscoreTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.yourbestscoreTxt);
        this.yourscorebestValueTxt = SimpleGame.myGame.add.text(0, 50, "10000", { font: "76px Montserrat", fill: "#ffffff", align: "Center" });
        this.yourscorebestValueTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.yourscorebestValueTxt);
        var playTxt = SimpleGame.myGame.make.text(440, 26, "New Game", { font: "72px Montserrat", fill: "#7b3f00", align: "Right" });
        var playBut = new PlayButton(playTxt, this.myGroup, 'Big_up_BTN', 'Big_down_BTN', 0, 300, this.playClicked.bind(this));
        playBut.textYDelta = -16;
        playBut.setXY(-420, 300);
    }
    GameOverPrompt.prototype.playClicked = function () {
        this.myGroup.destroy();
        GameScreen.myref.removeGameScreen();
        GameContext.clearSavedData();
        var gamescreen = new GameScreen();
    };
    return GameOverPrompt;
}());
var GameScreen = /** @class */ (function () {
    function GameScreen(orientationChanged, skipGameplayStart) {
        if (orientationChanged === void 0) { orientationChanged = false; }
        if (skipGameplayStart === void 0) { skipGameplayStart = false; }
        this.orientationJustChangedFlag = orientationChanged;
        if (!orientationChanged) {
            GameContext.commercialBreak();
            // PokiSDK.gameplayStop();
            // PokiSDK.commercialBreak().then(
            //     () => {
            //         console.log("Commercial break finished, proceeding to game");
            //         // your code to continue to game
            //     }
            // );
        }
        GameScreen.myref = this;
        GameContext.initialize(orientationChanged);
        SimpleGame.myGame.scale.onOrientationChange.add(this.orientationChanged, this);
        ResizeManager.update();
        // console.log(window.innerWidth, window.innerHeight)
        this.layerBackground = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        this.layerBoard = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        this.layerFixedCubes = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        this.layerDoors = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        this.layerMovingGroups = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        this.layerUITop = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        this.layerUITop2 = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        this.initializeBackground(GameContext.selectedTheme);
        this.initializeUI();
        SimpleGame.myGame.time.events.add(100, function () {
            console.log("drag events added");
            ResizeManager.gameBackground.events.onInputDown.add(BoardUtil.dragStarted, BoardUtil);
            ResizeManager.gameBackground.events.onInputUp.add(BoardUtil.removeDragCheck, BoardUtil);
        }, this);
        if (!skipGameplayStart) {
            GameContext.gameplayStarted();
        }
        if (GameContext.loadFromSavedBoard() == false) {
            if (GameContext.tutorialActive) {
                Tutorial.start();
            }
            else {
                this.addNewCubeGroups();
            }
        }
        window.addEventListener("resize", this.orientationChanged);
    }
    GameScreen.restart = function () {
        if (GameScreen.myref != null) {
            GameScreen.myref.removeGameScreen();
            GameContext.clearSavedData();
            SimpleGame.myGame.time.events.add(50, function () {
                Cube.removeAll();
                console.log("cube placed arr len:" + Cube.myCubesArray.length);
                Cube.myCubesArray = [];
                var gamescreen = new GameScreen(false, true);
            }.bind(this), this);
        }
    };
    GameScreen.spawnMultiColor = function () {
        SoundManager.combo_ready.play();
        SpawnUtil.spawnSingleNewCube(Cube.IDX_TILE_MULTI);
        SpawnUtil.spawnSingleNewCube(Cube.IDX_TILE_MULTI);
    };
    GameScreen.destroyRandomPiece = function () {
        var c = Cube.myCubesArray[Math.floor(Math.random() * Cube.myCubesArray.length)];
        var globalPoint = c.toGlobalCoords();
        var p = globalPoint;
        c.remove();
        return p;
    };
    GameScreen.getPieceGlobalCoords = function (c) {
        var globalPoint = c.toGlobalCoords();
        var p = globalPoint;
        // c.remove()
        return p;
    };
    GameScreen.prototype.orientationChanged = function () {
        console.log("orientation changed");
        ResizeManager.update();
        // if (InitMenuPrompt.onScreen)
        // {
        //     InitMenuPrompt.myRef.removeAndRestartScreen()
        // }
        Cube.removeAll();
        GameScreen.myref.removeGameScreen();
        //    return
        SimpleGame.myGame.time.events.add(50, function () {
            Cube.removeAll();
            console.log("cube placed arr len:" + Cube.myCubesArray.length);
            Cube.myCubesArray = [];
            var gamescreen = new GameScreen(true);
            console.log("cube placed arr len:" + Cube.myCubesArray.length);
            // if (GameContext.tutorialActive == false)
            // {
            //     GameContext.loadFromSavedBoard()
            // }
            console.log("cube placed arr len:" + Cube.myCubesArray.length);
        }.bind(this), this);
    };
    GameScreen.prototype.checkIfUnlockedGroupsAvailable = function () {
        var i = CubeGroup.cubeGroupArr.length;
        while (i-- > 0) {
            if (CubeGroup.cubeGroupArr[i].locked == false) {
                return true;
            }
        }
        return false;
    };
    GameScreen.prototype.removeGameScreen = function () {
        console.log("remove all");
        console.log("remove ui");
        if (this.gameUiTop != null) {
            this.gameUiTop.remove();
        }
        this.layerBackground.destroy();
        this.layerBoard.destroy();
        this.layerFixedCubes.destroy();
        this.layerMovingGroups.destroy();
        this.layerUITop.destroy();
        if (Tutorial.tutorialText != null) {
            Tutorial.tutorialText.destroy();
        }
        Cube.removeAll();
        console.log("remove tweens and timers");
        SimpleGame.myGame.tweens.removeAll();
        SimpleGame.myGame.time.events.removeAll();
        SimpleGame.myGame.time.removeAll();
        console.log("all removed");
    };
    GameScreen.prototype.initializeUI = function () {
        this.gameUiTop = new GameUITop(this.layerUITop);
    };
    GameScreen.prototype.checkIfMatchMade = function () {
        console.log("check if match made");
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            var cFixed = Cube.myCubesArray[i];
            console.log("" + i + ": " + cFixed.boardX + ", " + cFixed.boardY);
            this.checkHorizontal(cFixed.boardY);
        }
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            var cFixed = Cube.myCubesArray[i];
            this.checkVertical(cFixed.boardX);
        }
        var piecesInMatch = 0;
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            var c = Cube.myCubesArray[i];
            if (c.partOfHorizontalMatch || c.partOfVerticalMatch) {
                console.log("match is made");
                c.matchMade();
                piecesInMatch++;
            }
        }
        ComboText.createCombo(piecesInMatch);
    };
    GameScreen.prototype.checkVertical = function (fixedX) {
        var j = Cube.myCubesArray.length;
        var totalFixedX = 0;
        while (j-- > 0) {
            var c0 = Cube.myCubesArray[j];
            if (fixedX == c0.boardX) {
                totalFixedX++;
            }
        }
        // console.log(totalFixedX, Consts.BOARD_SIZE)
        if (totalFixedX == Consts.BOARD_SIZE) {
            //match made
            var j = Cube.myCubesArray.length;
            var totalFixedX = 0;
            while (j-- > 0) {
                var c0 = Cube.myCubesArray[j];
                if (fixedX == c0.boardX) {
                    c0.partOfVerticalMatch = true;
                }
            }
        }
    };
    GameScreen.prototype.checkHorizontal = function (fixedY) {
        var j = Cube.myCubesArray.length;
        var totalFixedY = 0;
        while (j-- > 0) {
            var c0 = Cube.myCubesArray[j];
            if (fixedY == c0.boardY) {
                totalFixedY++;
            }
        }
        // console.log(totalFixedY, Consts.BOARD_SIZE)
        if (totalFixedY == Consts.BOARD_SIZE) {
            //match made
            var j = Cube.myCubesArray.length;
            var totalFixedY = 0;
            while (j-- > 0) {
                var c0 = Cube.myCubesArray[j];
                if (fixedY == c0.boardY) {
                    c0.partOfHorizontalMatch = true;
                }
            }
        }
    };
    GameScreen.prototype.initializeBackground = function (selectedTheme) {
        console.log("initialize background called");
        ResizeManager.update();
        var boardName = "board4bg";
        if (GameContext.orientation == Consts.ORIENTATION_LANDSCAPE) {
            this.boardSpr = SimpleGame.myGame.add.sprite(ResizeManager.INTERNAL_GAME_WIDTH / 2 + 5, 80, boardName, '', this.layerBoard);
            this.boardSpr.anchor.set(0.5, 0);
            this.boardSpr.scale.set(0.65, 0.65);
        }
        else {
            this.boardSpr = SimpleGame.myGame.add.sprite(ResizeManager.INTERNAL_GAME_WIDTH / 2 + 3, 410 - 3, boardName, '', this.layerBoard);
            this.boardSpr.anchor.set(0.5, 0);
            this.boardSpr.scale.set(0.7, 0.7);
        }
        GameContext.boardSingleSpaceWidth = GameScreen.myref.boardSpr.width / 4;
        GameContext.boardSingleSpaceHeight = GameScreen.myref.boardSpr.width / 4;
        this.layerFixedCubes.x = this.boardSpr.x - this.boardSpr.width / 2 + GameContext.boardSingleSpaceWidth / 2;
        this.layerFixedCubes.y = this.boardSpr.y + GameContext.boardSingleSpaceHeight / 2;
        // this.layerFixedCubes.scale.set(0.5)
    };
    GameScreen.prototype.addRandomCubesToBoard = function () {
        var i = 8;
        while (i-- > 0) {
            var j = 8;
            while (j-- > 0) {
                if (Math.random() < 0.6)
                    continue;
                var c = new Cube(0, 0, this.layerFixedCubes, null);
                c.boardX = i;
                c.boardY = j;
                c.setToLastCollisionCoords();
            }
        }
    };
    GameScreen.prototype.addNewCubeGroups = function () {
        console.log("add new cube groups: " + this.orientationJustChangedFlag, GameContext.tutorialActive);
        if (this.orientationJustChangedFlag && GameContext.tutorialActive) {
            this.orientationJustChangedFlag = false;
            return;
        }
        else if (Tutorial.myState == Tutorial.STATE_STEP_1) {
            Tutorial.gotoStep2();
        }
        else if (Tutorial.myState == Tutorial.STATE_STEP_2) {
            Tutorial.gotoStep3();
        }
        else if (Tutorial.myState == Tutorial.STATE_STEP_4) {
            Tutorial.gotoStep5();
        }
        else if (Tutorial.myState == Tutorial.STATE_STEP_5) {
            Tutorial.removeIcons();
            var endTutorial = new TutorialCompletePrompt();
        }
        else {
            SpawnUtil.addInitialCubeGroups();
        }
    };
    return GameScreen;
}());
var InitMenuPrompt = /** @class */ (function () {
    function InitMenuPrompt(firstGame) {
        if (firstGame === void 0) { firstGame = true; }
        InitMenuPrompt.myRef = this;
        InitMenuPrompt.onScreen = true;
        this.initmenubackgroundGroup = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        this.initmenugroup = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        this.playbutgroup = SimpleGame.myGame.add.group(SimpleGame.layerGame);
        console.log("simple game, layergame scale: " + SimpleGame.layerGame.scale.x, SimpleGame.layerGame.scale.y);
        this.logo = SimpleGame.myGame.add.image(ResizeManager.INTERNAL_GAME_WIDTH / 2, ResizeManager.INTERNAL_GAME_HEIGHT * 0.25, 'logo', '', this.initmenugroup);
        this.logo.anchor.set(0.5, 0);
        this.logo.alpha = 0.0;
        SimpleGame.myGame.add.tween(this.logo).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 200);
        this.createPlayButton();
        window.addEventListener("resize", InitMenuPrompt.myRef.orientationChanged.bind(this), { once: true });
    }
    InitMenuPrompt.prototype.orientationChanged = function () {
        if (InitMenuPrompt.onScreen && InitMenuPrompt.orientationChanging == false) {
            InitMenuPrompt.orientationChanging = true;
            console.log("orientation changed");
            ResizeManager.update();
            SimpleGame.myGame.time.events.add(200, this.removeAndRestartScreen.bind(this), this);
            // SimpleGame.myGame.time.events.add(400, this.removeAndRestartScreen.bind(this), this)
            // SimpleGame.myGame.time.events.add(800, this.removeAndRestartScreen.bind(this), this)
        }
    };
    InitMenuPrompt.prototype.createPlayButton = function () {
        var playTxt = SimpleGame.myGame.make.text(260, 36, "PLAY", { font: "72px Montserrat", fill: "#ffffff", align: "Right" });
        this.playButNormal = SimpleGame.myGame.make.graphics(0, 0);
        this.playButNormal.beginFill(0xb3c230);
        this.playButNormal.drawRoundedRect(0, 0, 700, 140, 40);
        this.playButNormal.endFill();
        this.playButNormal.alpha = 1;
        this.playButNormal.inputEnabled = true;
        this.playbutgroup.add(this.playButNormal);
        this.playButNormal.events.onInputDown.add(this.playClicked, this);
        this.playButNormal.input.useHandCursor = true;
        this.playIcon = SimpleGame.myGame.add.image(0, 0, 'playIcon', '', this.playbutgroup);
        this.playIcon.x = 600;
        this.playIcon.y = 50;
        this.playbutgroup.add(playTxt);
        this.playbutgroup.x = ResizeManager.INTERNAL_GAME_WIDTH / 2 - 350;
        this.playbutgroup.y = ResizeManager.INTERNAL_GAME_HEIGHT / 2 + 100;
        this.playbutgroup.y += 200;
        this.playbutgroup.alpha = 0;
        SimpleGame.myGame.add.tween(this.playbutgroup).to({ alpha: 1, y: '-200' }, 1000, Phaser.Easing.Exponential.Out, true, 500);
    };
    InitMenuPrompt.prototype.playClicked = function () {
        this.removeAndStartGame();
        console.log("play clicked");
        SoundManager.click.play();
        SoundManager.music.loopFull(0.7);
    };
    InitMenuPrompt.prototype.removeAndRestartScreen = function () {
        ResizeManager.update();
        console.log("remove and restart screen");
        this.initmenubackgroundGroup.destroy();
        this.initmenugroup.destroy();
        this.playbutgroup.destroy();
        InitMenuPrompt.orientationChanging = false;
        SimpleGame.myGame.time.events.add(150, function () {
            var gameScr = new InitMenuPrompt();
        }.bind(this), this);
    };
    InitMenuPrompt.prototype.removeAndStartGame = function () {
        SimpleGame.myGame.tweens.removeAll();
        this.initmenubackgroundGroup.destroy();
        this.initmenugroup.destroy();
        this.playbutgroup.destroy();
        var gameScr = new GameScreen();
        InitMenuPrompt.onScreen = false;
    };
    InitMenuPrompt.onScreen = false;
    InitMenuPrompt.orientationChanging = false;
    return InitMenuPrompt;
}());
var OutOfMovesPrompt = /** @class */ (function () {
    function OutOfMovesPrompt(parent) {
        OutOfMovesPrompt.onScreen = true;
        this.myGroup = SimpleGame.myGame.add.group();
        this.myGroup.visible = false;
        SimpleGame.myGame.time.events.add(500, function () {
            this.myGroup.visible = true;
        }, this);
        GameContext.gameplayStopped();
        this.parent = parent;
        this.bgblack = SimpleGame.myGame.make.graphics(-2000, -2000);
        this.bgblack.beginFill(0x000000);
        this.bgblack.drawRect(0, 0, 4000, 4000);
        this.bgblack.endFill();
        this.bgblack.alpha = 0.67;
        this.bgblack.inputEnabled = true;
        this.myGroup.add(this.bgblack);
        console.log(this.parent.scale, this.parent.parent.scale, window.innerWidth, window.innerHeight, SimpleGame.myGame.width, SimpleGame.myGame.height);
        var screenWidth = SimpleGame.myGame.width;
        var screenHeight = SimpleGame.myGame.height;
        if (GameContext.orientation == Consts.ORIENTATION_PORTRAIT) {
            this.mybg1 = SimpleGame.myGame.make.graphics(0, 0);
            this.mybg1.beginFill(0x1E2427);
            this.mybg1.drawRoundedRect(0, 0, screenWidth * 0.8, screenHeight * 0.6, 30);
            this.mybg1.endFill();
            this.myGroup.add(this.mybg1);
            this.mybg1.x -= this.mybg1.width / 2;
            this.mybg1.y -= this.mybg1.height / 2;
            this.mybg2 = SimpleGame.myGame.make.graphics(0, 0);
            this.mybg2.beginFill(0x000000);
            this.mybg2.drawRect(0, 0, screenWidth * 0.8, screenHeight * 0.4);
            this.mybg2.endFill();
            this.myGroup.add(this.mybg2);
            this.mybg2.x -= this.mybg2.width / 2;
            this.mybg2.y -= this.mybg2.height / 2;
        }
        else {
            this.mybg1 = SimpleGame.myGame.make.graphics(0, 0);
            this.mybg1.beginFill(0x1E2427);
            this.mybg1.drawRoundedRect(0, 0, screenHeight * 1, screenHeight * 0.8, 30);
            this.mybg1.endFill();
            this.myGroup.add(this.mybg1);
            this.mybg1.x -= this.mybg1.width / 2;
            this.mybg1.y -= this.mybg1.height / 2;
            this.mybg2 = SimpleGame.myGame.make.graphics(0, 0);
            this.mybg2.beginFill(0x000000);
            this.mybg2.drawRect(0, 0, screenHeight * 1, screenHeight * 0.5);
            this.mybg2.endFill();
            this.myGroup.add(this.mybg2);
            this.mybg2.x -= this.mybg2.width / 2;
            this.mybg2.y -= this.mybg2.height / 2;
        }
        this.myGroup.x = screenWidth / 2;
        this.myGroup.y = screenHeight / 2;
        this.oopsTxt = SimpleGame.myGame.add.text(0, -screenHeight * 0.310, "OOPS... OUT OF MOVES!", { font: "24px Montserrat", fill: "#ffffff", align: "Right" });
        this.oopsTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.oopsTxt);
        this.oopsTxt.fontSize = screenHeight * 0.035;
        if (GameContext.orientation == Consts.ORIENTATION_PORTRAIT) {
            this.oopsTxt.fontSize = screenWidth * 0.045;
            this.oopsTxt.y = -screenHeight * 0.245;
        }
        this.shuffleIcon = SimpleGame.myGame.add.sprite(0, 0, 'shufflePowerBtn', '', this.myGroup);
        this.shuffleIcon.anchor.set(0.5, 0.7);
        this.shuffleIcon.scale.set(this.oopsTxt.fontSize / 70);
        this.shuffleIcon.y = -screenHeight * 0.03;
        this.shuffleTxt = SimpleGame.myGame.add.text(0, screenHeight * 0.310 / 2, "Shuffle whole board and keep playing", { font: "24px Montserrat", fill: "#B35998", align: "Center" });
        this.shuffleTxt.anchor.set(0.5, 0.5);
        this.shuffleTxt.wordWrap = true;
        this.shuffleTxt.wordWrapWidth = screenWidth / 2;
        this.myGroup.add(this.shuffleTxt);
        this.shuffleTxt.fontSize = screenHeight * 0.035;
        if (GameContext.orientation == Consts.ORIENTATION_PORTRAIT) {
            this.shuffleTxt.fontSize = screenWidth * 0.045;
            this.shuffleTxt.y = screenHeight * 0.245 / 2;
        }
        this.closeIcon = SimpleGame.myGame.add.sprite(0, 0, 'closeBtn', '', this.myGroup);
        this.closeIcon.anchor.set(0.5, 0.5);
        this.closeIcon.scale.set(this.oopsTxt.fontSize / 80);
        this.closeIcon.y = screenHeight * 0.25;
        this.closeIcon.x = -screenWidth * 0.25;
        if (GameContext.orientation == Consts.ORIENTATION_LANDSCAPE) {
            this.closeIcon.y = screenHeight * 0.32;
            this.closeIcon.x = -screenWidth * 0.12;
        }
        this.closeIcon.inputEnabled = true;
        this.closeIcon.events.onInputDown.add(this.gameoverClicked, this);
        if (GameContext.orientation == Consts.ORIENTATION_PORTRAIT) {
            var shuffle = new ShuffleButton(this.closeIcon.x + 3 * this.closeIcon.width, this.closeIcon.y, this.closeIcon.height, this.myGroup, this);
        }
        else {
            var shuffle = new ShuffleButton(this.closeIcon.x + 5 * this.closeIcon.width, this.closeIcon.y, this.closeIcon.height, this.myGroup, this);
        }
        SimpleGame.myGame.scale.onOrientationChange.add(this.orientationChanged, this);
    }
    OutOfMovesPrompt.prototype.orientationChanged = function (orientationChanged, arg1) {
        this.myGroup.destroy();
    };
    OutOfMovesPrompt.prototype.reviveClicked = function () {
        GameContext.revive();
        // BoardUtil.revive()
        this.myGroup.destroy();
        OutOfMovesPrompt.onScreen = false;
    };
    OutOfMovesPrompt.prototype.gameoverClicked = function () {
        OutOfMovesPrompt.onScreen = false;
        this.myGroup.destroy();
        GameScreen.restart();
    };
    OutOfMovesPrompt.onScreen = false;
    return OutOfMovesPrompt;
}());
var SettingsScreen = /** @class */ (function () {
    function SettingsScreen(parent) {
        if (SettingsScreen.onScreen)
            return;
        SettingsScreen.onScreen = true;
        GameContext.gameplayStopped();
        console.log("select your reward added");
        this.myGroup = SimpleGame.myGame.add.group(GameScreen.myref.layerUITop2);
        this.bgblack = SimpleGame.myGame.make.graphics(-4000, -4000);
        this.bgblack.beginFill(0x000000);
        this.bgblack.drawRect(0, 0, 8000, 8000);
        this.bgblack.endFill();
        this.bgblack.alpha = 0.67;
        this.bgblack.inputEnabled = true;
        this.myGroup.add(this.bgblack);
        this.bgWhite = SimpleGame.myGame.make.graphics(ResizeManager.INTERNAL_GAME_WIDTH * 0.2, ResizeManager.INTERNAL_GAME_HEIGHT * 0.2);
        this.bgWhite.beginFill(0x1E2427);
        this.bgWhite.drawRoundedRect(0, 0, ResizeManager.INTERNAL_GAME_WIDTH * 0.6, ResizeManager.INTERNAL_GAME_HEIGHT * 0.6, 40);
        this.bgWhite.endFill();
        this.bgWhite.alpha = 1;
        this.myGroup.add(this.bgWhite);
        this.settingsTxt = SimpleGame.myGame.add.text(ResizeManager.INTERNAL_GAME_WIDTH / 2, ResizeManager.INTERNAL_GAME_HEIGHT * 0.28, "Settings", { font: "72px Montserrat", fill: "#ffffff", align: "Right" });
        this.settingsTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.settingsTxt);
        this.soundTxt = SimpleGame.myGame.add.text(ResizeManager.INTERNAL_GAME_WIDTH / 2 - 300, ResizeManager.INTERNAL_GAME_HEIGHT / 2 - 150 + 30, "Sound", { font: "64px Montserrat", fill: "#ffffff", align: "Right" });
        this.soundTxt.anchor.set(0, 0.5);
        this.myGroup.add(this.soundTxt);
        this.soundBtn = new OnOffButton(this.myGroup, ResizeManager.INTERNAL_GAME_WIDTH / 2 + 110, ResizeManager.INTERNAL_GAME_HEIGHT / 2 - 150, true, 0);
        var continueButon = new ColorButtonWithText("CONTINUE", 0xA6F1A6, this.settingsTxt.x, ResizeManager.INTERNAL_GAME_HEIGHT / 2 + 20, ResizeManager.INTERNAL_GAME_WIDTH * 0.42, 100, this.myGroup, this.continueClicked.bind(this));
        var restart = new ColorButtonWithText("RESTART", 0xFF69B4, this.settingsTxt.x, ResizeManager.INTERNAL_GAME_HEIGHT / 2 + 170, ResizeManager.INTERNAL_GAME_WIDTH * 0.42, 100, this.myGroup, this.restartClicked.bind(this));
    }
    SettingsScreen.prototype.restartClicked = function () {
        this.myGroup.destroy();
        GameScreen.restart();
        // GameContext.gameplayStarted()
        SettingsScreen.onScreen = false;
    };
    SettingsScreen.prototype.continueClicked = function () {
        this.removeAndContinue();
    };
    SettingsScreen.prototype.removeAndContinue = function () {
        SettingsScreen.onScreen = false;
        GameContext.gameplayStarted();
        this.myGroup.destroy();
    };
    SettingsScreen.onScreen = false;
    return SettingsScreen;
}());
var TutorialCompletePrompt = /** @class */ (function () {
    function TutorialCompletePrompt() {
        this.myGroup = SimpleGame.myGame.add.group(GameScreen.myref.layerUITop);
        GameContext.gameplayStopped();
        this.bgblack = SimpleGame.myGame.make.graphics(-2000, -2000);
        this.bgblack.beginFill(0x000000);
        this.bgblack.drawRect(0, 0, 4000, 4000);
        this.bgblack.endFill();
        this.bgblack.alpha = 0.67;
        this.bgblack.inputEnabled = true;
        this.myGroup.add(this.bgblack);
        this.myGroup.x = ResizeManager.INTERNAL_GAME_WIDTH / 2;
        this.myGroup.y = ResizeManager.INTERNAL_GAME_HEIGHT / 2;
        this.greatTxt = SimpleGame.myGame.add.text(0, -220, "Great!", { font: "96px Montserrat", fill: "#ffffff", align: "Right" });
        this.greatTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.greatTxt);
        this.mainTxt = SimpleGame.myGame.add.text(0, -20, "You completed the basic tutorial", { font: "64px Montserrat", fill: "#ffffff", align: "Right" });
        this.mainTxt.anchor.set(0.5, 0.5);
        this.myGroup.add(this.mainTxt);
        this.playTxt = SimpleGame.myGame.add.text(0, 200, "Let's Play", { font: "72px Montserrat", fill: "#7b3f00", align: "Center" });
        this.playBut = new PlayButton(this.playTxt, this.myGroup, 'Big_up_BTN', 'Big_down_BTN', -400, 100, this.playClicked.bind(this));
        this.playBut.textYDelta -= 10;
    }
    TutorialCompletePrompt.prototype.playClicked = function () {
        this.myGroup.destroy();
        Tutorial.tutorialCompleted();
    };
    return TutorialCompletePrompt;
}());
var ButtonTextOnly = /** @class */ (function () {
    function ButtonTextOnly(parent, x, y, width, height, text, onClickFunction) {
        if (onClickFunction === void 0) { onClickFunction = function () {
        }; }
        this.disabled = false;
        this.isVisible = true;
        this.parent = parent;
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.onClickFunction = onClickFunction;
        this.buttonText = SimpleGame.myGame.make.text(x, y, this.text, {
            font: "14px Arial", fill: "#000000", fontWeight: "400", align: "Right"
        });
        this.buttonText.inputEnabled = true;
        this.buttonText.anchor.set(0, 0.5);
        this.underline = SimpleGame.myGame.make.graphics(this.buttonText.left, this.buttonText.bottom - 5);
        // Specify the line (size, color)
        this.underline.lineStyle(2, 0x000000);
        // Location to start drawing the line (x, y)
        this.underline.moveTo(0, 0);
        // Draw a line the width of objectText's string
        this.underline.lineTo(this.buttonText.width, 0);
        this.buttonText.events.onInputDown.add(this.executeOnClickFunction, this);
        this.buttonText.events.onInputOver.add(this.addUnderline, this);
        this.buttonText.events.onInputOut.add(this.removeUnderline, this);
        this.buttonText.input.useHandCursor = true;
        this.underline.visible = false;
        parent.add(this.underline);
        parent.add(this.buttonText);
        console.log(this.underline);
    }
    ButtonTextOnly.prototype.executeOnClickFunction = function () {
        if (this.disabled)
            return;
        if (this.isVisible == false)
            return;
        console.log("execute on click function");
        this.onClickFunction();
        SimpleGame.myGame.input.reset();
        // this.buttonText.inputEnabled = true;
        //     SimpleGame.myGame.time.events.add(10, function()
        // {
        //     if (this.buttonText==null) return ;
        //     this.buttonText.events.onInputDown.add(this.executeOnClickFunction, this)
        //     this.buttonText.events.onInputOver.add(this.addUnderline,this)
        //     this.buttonText.events.onInputOut.add(this.removeUnderline,this)
        //     this.buttonText.input.useHandCursor  = true; 
        // })
    };
    ButtonTextOnly.prototype.addUnderline = function () {
        if (this.disabled)
            return;
        if (SimpleGame.myGame.device.touch)
            return;
        this.underline.visible = true;
    };
    ButtonTextOnly.prototype.removeUnderline = function () {
        this.underline.visible = false;
    };
    ButtonTextOnly.prototype.disable = function () {
        this.disabled = true;
        this.removeUnderline();
        this.buttonText.addColor("#87888b", 0);
    };
    ButtonTextOnly.prototype.enable = function () {
        this.disabled = false;
        this.buttonText.addColor("#000000", 0);
    };
    ButtonTextOnly.prototype.goInvisible = function () {
        console.log("go invisible called: " + this.buttonText.text);
        this.parent.remove(this.underline);
        this.parent.remove(this.buttonText);
        this.isVisible = false;
        // this.underline.y = -1000;
        // this.buttonText.y = -1000;
        // this.parent.removeAll()
        // this.underline.visible = false;
        // this.buttonText.visible = false;
    };
    ButtonTextOnly.prototype.goVisible = function () {
        console.log("go visible called: " + this.buttonText.text);
        this.parent.add(this.underline);
        this.parent.add(this.buttonText);
        // this.underline.y = this.y;
        SimpleGame.myGame.time.events.add(50, function () {
            this.isVisible = true;
        }, this);
        // this.buttonText.y = this.buttonText.bottom - 5
        // this.underline.visible = true;
        // this.buttonText.visible = true;
    };
    return ButtonTextOnly;
}());
var ButtonWithOverState = /** @class */ (function () {
    function ButtonWithOverState(parent, imgNormalName, imgOverName, x, y, onClickFunction) {
        if (onClickFunction === void 0) { onClickFunction = function () {
        }; }
        this.onClickExecuted = false;
        this.skipClickSound = false;
        this.skipMouseOver = false;
        this.skipAlphaChanges = false;
        this.imgnormalnamestr = imgNormalName;
        this.parent = parent;
        this.imgNormalName = imgNormalName;
        this.imgOverName = imgOverName;
        this.x = x;
        this.y = y;
        this.onButtonOutExtra = function () { };
        this.onButtonOverExtra = function () { };
        this.imgNormal = SimpleGame.myGame.make.sprite(this.x, this.y, imgNormalName);
        this.imgOver = SimpleGame.myGame.make.sprite(this.x, this.y, imgOverName);
        parent.add(this.imgNormal);
        parent.add(this.imgOver);
        this.imgNormal.inputEnabled = this.imgOver.inputEnabled = false;
        this.imgOver.inputEnabled = false;
        this.imgNormal.events.onInputOver.add(this.onButtonOver, this, 0);
        this.imgNormal.events.onInputUp.add(this.banInput, this, 100);
        this.imgNormal.events.onInputDown.add(this.onButtonClicked, this, 2);
        this.imgNormal.events.onInputOut.add(this.onButtonOut, this, 1);
        this.imgOver.events.onInputOut.add(this.onButtonOut, this, 1);
        this.imgOver.events.onInputUp.add(this.onButtonOut, this, 4);
        this.onClickFunction = onClickFunction;
        this.imgOver.visible = false;
        this.loopEvent = SimpleGame.myGame.time.events.loop(100, this.update, this);
        this.loopEvent1 = SimpleGame.myGame.time.events.loop(10, this.update1, this);
        console.log("button created");
        SimpleGame.myGame.time.events.add(0, function () {
            if (this.imgNormal == null)
                return;
            // if (this.imgNormal.input == null) return
            this.imgNormal.inputEnabled = true;
            this.imgNormal.input.useHandCursor = true;
            console.log("input enabled");
        }.bind(this), this);
        SimpleGame.myGame.input.onTap.add(function () {
            // console.log("mouse tapped")
        });
        this.imgNormal.events.onInputUp.add(function () {
            // console.log("input up")
        });
    }
    ButtonWithOverState.prototype.update = function () {
        //   console.log("update button: " + this.onClickExecuted)
        if (this.imgNormal.input != null) {
            if (this.skipMouseOver) {
                console.log("remove hand cursor");
                this.imgNormal.input.useHandCursor = false;
                // this.imgOver.visible = false;
            }
            else {
                this.imgNormal.input.useHandCursor = true;
                // this.imgOver.visible = true;
            }
        }
        if (this.imgOver.parent) {
            if (!this.imgOver.getBounds().contains(SimpleGame.myGame.input.x, SimpleGame.myGame.input.y)) {
                this.onButtonOut();
                // this.imgNormal.input.useHandCursor = false;
            }
            else {
                //very dirty hack
                // if (this.imgnormalnamestr == "open_menu2")
                // {
                //     this.imgNormal.input.useHandCursor = true;
                //     this.onButtonOver();
                // }
            }
        }
        else {
            SimpleGame.myGame.time.events.remove(this.loopEvent);
        }
        this.setXY(this.x, this.y);
    };
    ButtonWithOverState.prototype.update1 = function () {
        //   console.log("update button: " + this.onClickExecuted)
        this.setXY(this.x, this.y);
    };
    ButtonWithOverState.prototype.banInput = function () {
        this.onClickExecuted = true;
        // console.log("button click success")
        SimpleGame.myGame.time.events.add(50, function () {
            // console.log("can click button")
            this.onClickExecuted = false;
        }, this);
    };
    ButtonWithOverState.prototype.onButtonOver = function () {
        console.log("button over");
        this.imgNormal.input.useHandCursor = true;
        if (this.skipMouseOver) {
            // this.imgNormal.input.useHandCursor = false;
            console.log("skip mouse over is true!!");
            return;
        }
        this.imgOver.visible = true;
        // this.imgOver.alpha = 1;
        if (this.skipAlphaChanges == false)
            this.imgNormal.alpha = 0.00001;
        SimpleGame.myGame.canvas.style.cursor = "pointer";
        // console.log("mouse set to pointer")
        if (SimpleGame.myGame.device.touch) {
            // this.imgOver.visible = false;
        }
        this.onButtonOverExtra();
    };
    ButtonWithOverState.prototype.onButtonOut = function () {
        if (this.imgnormalnamestr == "open_menu2") {
            // console.log("button out")
        }
        this.imgOver.visible = false;
        if (this.skipAlphaChanges == false)
            this.imgNormal.alpha = 1;
        // this.imgNormal.input.useHandCursor = false;
        this.onButtonOutExtra();
    };
    ButtonWithOverState.prototype.onButtonClicked = function (evt) {
        console.log("button click attempt registered");
        //  var delay = Consts.DELAY_BETWEEN_EVENTS_DESKTOP;
        //  if (SimpleGame.myGame.device.touch)
        //  {
        //     delay = Consts.DELAY_BETWEEN_EVENTS_TOUCH;
        //  }
        // this.imgNormal.input.useHandCursor = false;
        if (this.onClickExecuted == false) {
            this.onClickExecuted = true;
            // console.log("button click success")
            SimpleGame.myGame.time.events.add(60, function () {
                // console.log("can click button")
                this.onClickExecuted = false;
            }, this);
            this.onClickFunction();
            //  if (this.skipClickSound == false)
            SoundManager.playClick();
        }
        else {
            //  console.log("cannot click button")
        }
        SimpleGame.myGame.input.enabled = false;
        SimpleGame.myGame.time.events.add(60, function () {
            SimpleGame.myGame.input.enabled = true;
            SimpleGame.myGame.input.reset();
        });
    };
    ButtonWithOverState.prototype.setXY = function (x, y) {
        this.imgNormal.x = x;
        this.imgOver.x = x;
        this.x = x;
        this.imgNormal.y = y;
        this.imgOver.y = y;
        this.y = y;
    };
    return ButtonWithOverState;
}());
var ButtonWithOverAndText = /** @class */ (function (_super) {
    __extends(ButtonWithOverAndText, _super);
    function ButtonWithOverAndText(text, parent, imgNormalName, imgOverName, x, y, onClickFunction) {
        if (onClickFunction === void 0) { onClickFunction = function () {
        }; }
        var _this = _super.call(this, parent, imgNormalName, imgOverName, x, y, onClickFunction) || this;
        _this.fixedTxtCoords = false;
        _this.fixedTxtX = 0;
        _this.fixedTxtY = 0;
        _this.textY = 0;
        _this.textX = 0;
        _this.textYDelta = 0;
        _this.text = text;
        // this.text.inputEnabled = false;
        // this.text.interactive = false;
        // this.text.input.useHandCursor = true;
        parent.add(text);
        return _this;
    }
    ButtonWithOverAndText.prototype.setXY = function (x, y) {
        _super.prototype.setXY.call(this, x, y);
        if (this.fixedTxtCoords) {
            this.text.x = this.imgNormal.x + this.fixedTxtX;
            this.text.y = this.imgNormal.y + this.fixedTxtY;
        }
        else {
            // this.text.x = this.imgNormal.x + 0.5*(this.imgNormal.width - this.text.width)
            this.text.x = this.imgNormal.x + 0.5 * (this.imgNormal.width - this.text.width);
            this.text.y = this.imgNormal.y + 0.5 * (this.imgNormal.height - this.text.height);
        }
        this.textX = this.text.x;
        this.textY = this.text.y + this.textYDelta;
        if (this.imgOver.visible) {
            this.text.y = this.textY;
        }
        else {
            this.text.y = this.textY;
        }
    };
    ButtonWithOverAndText.prototype.update = function () {
        _super.prototype.update.call(this);
        if (this.imgOver.visible) {
            this.text.y = this.textY;
        }
        else {
            this.text.y = this.textY;
        }
    };
    ButtonWithOverAndText.prototype.setVisible = function () {
        console.log("set visible");
        this.parent.add(this.imgNormal);
        this.parent.add(this.imgOver);
        this.parent.add(this.text);
    };
    ButtonWithOverAndText.prototype.setInvisible = function () {
        this.parent.remove(this.imgNormal);
        this.parent.remove(this.imgOver);
        this.parent.remove(this.text);
    };
    return ButtonWithOverAndText;
}(ButtonWithOverState));
var PlayButton = /** @class */ (function (_super) {
    __extends(PlayButton, _super);
    function PlayButton(text, parent, imgNormalName, imgOverName, x, y, onClickFunction) {
        if (onClickFunction === void 0) { onClickFunction = function () {
        }; }
        var _this = _super.call(this, text, parent, imgNormalName, imgOverName, x, y, onClickFunction) || this;
        _this.overTxtDeltaY = 8;
        return _this;
    }
    PlayButton.prototype.update = function () {
        _super.prototype.update.call(this);
        if (this.imgOver.visible) {
            this.text.y = this.textY + this.overTxtDeltaY;
        }
        else {
            this.text.y = this.textY;
        }
    };
    PlayButton.prototype.setXY = function (x, y) {
        _super.prototype.setXY.call(this, x, y);
        if (this.fixedTxtCoords) {
            this.text.x = this.imgNormal.x + this.fixedTxtX;
            this.text.y = this.imgNormal.y + this.fixedTxtY;
        }
        else {
            // this.text.x = this.imgNormal.x + 0.5*(this.imgNormal.width - this.text.width)
            this.text.x = this.imgNormal.x + 0.5 * (this.imgNormal.width - this.text.width);
            this.text.y = this.imgNormal.y + 0.5 * (this.imgNormal.height - this.text.height);
        }
        this.textX = this.text.x;
        this.textY = this.text.y + this.textYDelta;
        if (this.imgOver.visible) {
            this.text.y = this.textY + this.overTxtDeltaY;
        }
        else {
            this.text.y = this.textY;
        }
    };
    return PlayButton;
}(ButtonWithOverAndText));
var CheckboxControl = /** @class */ (function () {
    function CheckboxControl(parent, uncheckedImageName, checkedImageName, x, y) {
        this.isChecked = false;
        this.x = x;
        this.y = y;
        var uncheckedImage = SimpleGame.myGame.make.sprite(x, y, uncheckedImageName);
        parent.add(uncheckedImage);
        uncheckedImage.inputEnabled = true;
        uncheckedImage.events.onInputDown.add(this.switchState, this);
        var checkedImage = SimpleGame.myGame.make.sprite(x, y, checkedImageName);
        parent.add(checkedImage);
        checkedImage.inputEnabled = true;
        checkedImage.events.onInputDown.add(this.switchState, this);
        this.uncheckedImage = uncheckedImage;
        this.checkedImage = checkedImage;
        this.update();
    }
    CheckboxControl.prototype.update = function () {
        if (this.isChecked) {
            this.uncheckedImage.visible = false;
            this.checkedImage.visible = true;
        }
        else {
            this.uncheckedImage.visible = true;
            this.checkedImage.visible = false;
        }
    };
    CheckboxControl.prototype.switchState = function () {
        this.isChecked = !this.isChecked;
        this.update();
    };
    return CheckboxControl;
}());
var CubeUtil = /** @class */ (function () {
    function CubeUtil() {
    }
    CubeUtil.getRandomPiece = function () {
        var c = Cube.myCubesArray[Math.floor(Math.random() * Cube.myCubesArray.length)];
        return c;
    };
    CubeUtil.areNeighboursMergable = function (c) {
        var c1 = CubeUtil.getCubeByBoardCoords(c.boardX + 1, c.boardY);
        var c2 = CubeUtil.getCubeByBoardCoords(c.boardX - 1, c.boardY);
        var c3 = CubeUtil.getCubeByBoardCoords(c.boardX, c.boardY + 1);
        var c4 = CubeUtil.getCubeByBoardCoords(c.boardX, c.boardY - 1);
        if (this.areSameIdx(c, c1) || this.areSameIdx(c, c2) || this.areSameIdx(c, c3) || this.areSameIdx(c, c4)) {
            console.log("mergable");
            return true;
        }
        console.log("not mergable");
        return false;
    };
    CubeUtil.areSameIdx = function (c1, c2) {
        if (c1 == null || c2 == null)
            return false;
        if (c1.myIdx == c2.myIdx)
            return true;
        return false;
    };
    CubeUtil.createCubeAt = function (i, j, myidx) {
        var c = new Cube(i, j, myidx);
    };
    CubeUtil.getCubeByBoardCoords = function (x, y) {
        var i = Cube.myCubesArray.length;
        while (i-- > 0) {
            var c = Cube.myCubesArray[i];
            if (c.boardX == x && c.boardY == y) {
                return c;
            }
        }
        return null;
    };
    return CubeUtil;
}());
var FrameSequence = /** @class */ (function () {
    function FrameSequence(frameNameArr, x, y, frameRate, atlasName, parent) {
        if (atlasName === void 0) { atlasName = null; }
        if (parent === void 0) { parent = null; }
        this.playonceflag = false;
        this.paused = false;
        this.curIdx = 0;
        this.angle = 0;
        this.frameArr = new Array();
        this.x = x;
        this.y = y;
        this.scale = new Phaser.Point(1, 1);
        var i = frameNameArr.length;
        while (i-- > 0) {
            if (atlasName == null) {
                this.frameArr[i] = SimpleGame.myGame.add.sprite(x, y, frameNameArr[i]);
            }
            else {
                this.frameArr[i] = SimpleGame.myGame.add.sprite(x, y, atlasName, frameNameArr[i]);
            }
            this.frameArr[i].anchor.set(0.5, 0.5);
            // SimpleGame.myGame.physics.enable(this.frameArr[i]);
            if (parent != null) {
                parent.add(this.frameArr[i]);
            }
        }
        this.frameArr[0].visible = true;
        this.curSpr = this.frameArr[0];
        this.myloop1 = SimpleGame.myGame.time.events.loop(Math.ceil(1000 / frameRate), this.update, this);
        this.myloop2 = SimpleGame.myGame.time.events.loop(5, this.updateFast, this);
    }
    FrameSequence.prototype.playonceonly = function () {
        this.playonceflag = true;
    };
    FrameSequence.prototype.updateFast = function () {
        if (this.curSpr != null) {
            this.curSpr.x = this.x;
            this.curSpr.y = this.y;
            // this.curSpr.angle = this.angle;
            this.curSpr.angle = this.angle;
            this.curSpr.scale.x = this.scale.x;
            this.curSpr.scale.y = this.scale.y;
        }
    };
    FrameSequence.prototype.putOnTop = function () {
        var i = this.frameArr.length;
        while (i-- > 0) {
            this.frameArr[i].bringToTop();
        }
    };
    FrameSequence.prototype.update = function () {
        var i = this.frameArr.length;
        while (i-- > 0) {
            this.frameArr[i].x = this.x;
            this.frameArr[i].y = this.y;
        }
        if (this.paused)
            return;
        var i = this.frameArr.length;
        while (i-- > 0) {
            this.frameArr[i].visible = false;
        }
        var realidx = this.curIdx++ % this.frameArr.length;
        this.frameArr[realidx].visible = true;
        this.frameArr[realidx].x = this.x;
        this.frameArr[realidx].y = this.y;
        this.curSpr = this.frameArr[realidx];
        this.updateFast();
        if (this.playonceflag) {
            if (this.curIdx >= this.frameArr.length) {
                this.remove();
            }
        }
    };
    FrameSequence.prototype.pause = function () {
        this.paused = true;
    };
    FrameSequence.prototype.start = function () {
        this.paused = false;
    };
    FrameSequence.prototype.remove = function () {
        var i = this.frameArr.length;
        while (i-- > 0) {
            var spr = this.frameArr[i];
            spr.destroy();
        }
        SimpleGame.myGame.time.events.remove(this.myloop1);
        SimpleGame.myGame.time.events.remove(this.myloop2);
    };
    return FrameSequence;
}());
var SpawnUtil = /** @class */ (function () {
    function SpawnUtil() {
    }
    SpawnUtil.spawnNewCubes = function () {
        if (Tutorial.myState == Tutorial.STATE_STEP_1)
            return;
        if (Tutorial.myState == Tutorial.STATE_STEP_2)
            return;
        if (Tutorial.myState == Tutorial.STATE_STEP_3)
            return;
        if (Tutorial.myState == Tutorial.STATE_STEP_4)
            return;
        console.log("spawn new cubes");
        var i = 1;
        while (i-- > 0) {
            var spawnedC = this.spawnSingleNewCube();
            if (spawnedC == null) {
                return;
            }
        }
    };
    SpawnUtil.spawnSingleNewCube = function (cubeIdx) {
        if (cubeIdx === void 0) { cubeIdx = 0; }
        var timeout = 10000;
        do {
            var x = Math.floor(Math.random() * Consts.BOARD_WIDTH);
            var y = Math.floor(Math.random() * Consts.BOARD_WIDTH);
            var c = CubeUtil.getCubeByBoardCoords(x, y);
            timeout--;
        } while (c != null && timeout > 0);
        if (timeout <= 0) {
            return null;
        }
        else {
            return new Cube(x, y, cubeIdx);
        }
    };
    SpawnUtil.addInitialCubeGroups = function () {
        var c = new Cube(0, 0, Cube.IDX_TILE_1);
        var c = new Cube(1, 3, Cube.IDX_TILE_1);
        var c = new Cube(2, 2, Cube.IDX_TILE_1);
        var c = new Cube(3, 0, Cube.IDX_TILE_1);
        var c = new Cube(0, 1, Cube.IDX_TILE_1);
        var c = new Cube(0, 3, Cube.IDX_TILE_1);
    };
    return SpawnUtil;
}());
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.convertToHHMMSS = function (seconds) {
        var s = seconds % 60;
        var m = Math.floor((seconds % 3600) / 60);
        var h = Math.floor(seconds / (60 * 60));
        //var hourStr:String = (h == 0) ? "" : doubleDigitFormat(h) + ":";
        var hourStr = (false) ? "" : Util.doubleDigitFormat(h) + ":";
        var minuteStr = Util.doubleDigitFormat(m) + ":";
        var secondsStr = Util.doubleDigitFormat(s);
        return hourStr + minuteStr + secondsStr;
    };
    Util.convertToMMSS = function (seconds) {
        var s = seconds % 60;
        var m = Math.floor((seconds % 3600) / 60);
        var h = Math.floor(seconds / (60 * 60));
        //var hourStr:String = (h == 0) ? "" : doubleDigitFormat(h) + ":";
        var hourStr = (false) ? "" : Util.doubleDigitFormat(h) + ":";
        var minuteStr = Util.doubleDigitFormat(m) + ":";
        var secondsStr = Util.doubleDigitFormat(s);
        return minuteStr + secondsStr;
    };
    Util.doubleDigitFormat = function (num) {
        if (num < 10) {
            return ("0" + num);
        }
        return "" + num;
    };
    Util.getStorage = function (s, defaultRetValue) {
        if (defaultRetValue === void 0) { defaultRetValue = 0; }
        var storageData = 0;
        try {
            storageData = parseInt(window.localStorage.getItem(s));
        }
        catch (error) {
            return defaultRetValue;
        }
        if (isNaN(storageData)) {
            storageData = defaultRetValue;
            try {
                window.localStorage.setItem(s, defaultRetValue.toString());
            }
            catch (error) {
                return defaultRetValue;
            }
        }
        return storageData;
    };
    Util.setStorage = function (s, val) {
        try {
            window.localStorage.setItem(s, val.toString());
        }
        catch (error) {
        }
    };
    Util.clearStorage = function (s, defaultVal) {
        if (defaultVal === void 0) { defaultVal = 0; }
    };
    Util.overlapping = function (rect1, rect2) {
        if (rect1 == rect2)
            return false;
        if (rect1.x < rect2.x + rect2.width + 1 && rect1.x + rect1.width + 1 > rect2.x && rect1.y < rect2.y + rect2.height + 1 && rect1.height + 1 + rect1.y > rect2.y) {
            return true;
        }
        return false;
    };
    Util.fixedDigitCount = function (digits, number) {
        var digitCount = number.toString().length;
        var deltaCount = digits - digitCount;
        var retStr = "";
        while (deltaCount-- > 0) {
            retStr += "0";
        }
        retStr += number.toString();
        return retStr;
    };
    Util.pointerCoordsToGameCoords = function () {
        var apX = SimpleGame.myGame.input.activePointer.x;
        var apY = SimpleGame.myGame.input.activePointer.y;
        var screenPercX = apX / SimpleGame.myGame.width;
        var screenPercY = apY / SimpleGame.myGame.height;
        // var percZero = SimpleGame.layerGame.x / (SimpleGame.layerGame.width + SimpleGame.layerGame.x)
        var widthUpscale = (ResizeManager.INTERNAL_GAME_WIDTH * ResizeManager.gameScale + 2 * SimpleGame.layerGame.x) / (ResizeManager.INTERNAL_GAME_WIDTH * ResizeManager.gameScale);
        var heightUpscale = (ResizeManager.INTERNAL_GAME_HEIGHT * ResizeManager.gameScale + 2 * SimpleGame.layerGame.y) / (ResizeManager.INTERNAL_GAME_HEIGHT * ResizeManager.gameScale);
        var realX = screenPercX * ResizeManager.INTERNAL_GAME_WIDTH * widthUpscale;
        var realY = screenPercY * ResizeManager.INTERNAL_GAME_HEIGHT * heightUpscale;
        return new Phaser.Point(realX, realY);
    };
    //this is the backup one
    Util.pointerCoordsToGameCoords3 = function () {
        var apX = SimpleGame.myGame.input.activePointer.x;
        var apY = SimpleGame.myGame.input.activePointer.y;
        var screenPercX = apX / SimpleGame.myGame.width;
        var screenPercY = apY / SimpleGame.myGame.height;
        // var percZero = SimpleGame.layerGame.x / (SimpleGame.layerGame.width + SimpleGame.layerGame.x)
        var widthUpscale = (ResizeManager.INTERNAL_GAME_WIDTH * ResizeManager.gameScale + 2 * SimpleGame.layerGame.x) / (ResizeManager.INTERNAL_GAME_WIDTH * ResizeManager.gameScale);
        var realX = screenPercX * ResizeManager.INTERNAL_GAME_WIDTH * widthUpscale;
        var realY = screenPercY * ResizeManager.INTERNAL_GAME_HEIGHT;
        return new Phaser.Point(realX, realY);
    };
    Util.pointerCoordsToGameCoords2 = function () {
        var apX = SimpleGame.myGame.input.activePointer.x;
        var apY = SimpleGame.myGame.input.activePointer.y;
        var screenPercX = apX / SimpleGame.myGame.width;
        var screenPercY = apY / SimpleGame.myGame.height;
        var percZero = SimpleGame.layerGame.x / (SimpleGame.layerGame.width + SimpleGame.layerGame.x);
        var widthUpscale = 1 / (1 - 2 * percZero);
        // console.log(widthUpscale)
        var realX = screenPercX * ResizeManager.INTERNAL_GAME_WIDTH * widthUpscale;
        var realY = screenPercY * ResizeManager.INTERNAL_GAME_HEIGHT;
        return new Phaser.Point(realX, realY);
    };
    return Util;
}());
var Utils;
(function (Utils) {
    var ScreenMetrics = /** @class */ (function () {
        function ScreenMetrics() {
        }
        return ScreenMetrics;
    }());
    Utils.ScreenMetrics = ScreenMetrics;
    var Orientation;
    (function (Orientation) {
        Orientation[Orientation["PORTRAIT"] = 0] = "PORTRAIT";
        Orientation[Orientation["LANDSCAPE"] = 1] = "LANDSCAPE";
    })(Orientation = Utils.Orientation || (Utils.Orientation = {}));
    ;
    var ScreenUtils = /** @class */ (function () {
        function ScreenUtils() {
        }
        // -------------------------------------------------------------------------
        ScreenUtils.calculateScreenMetrics = function (aDefaultWidth, aDefaultHeight, aOrientation, aMaxGameWidth, aMaxGameHeight) {
            if (aOrientation === void 0) { aOrientation = Orientation.LANDSCAPE; }
            // get dimension of window
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            // swap if window dimensions do not match orientation
            if ((windowWidth < windowHeight && aOrientation === Orientation.LANDSCAPE) ||
                (windowHeight < windowWidth && aOrientation === Orientation.PORTRAIT)) {
                var tmp = windowWidth;
                windowWidth = windowHeight;
                windowHeight = tmp;
            }
            // calculate max game dimension. The bounds are iPad and iPhone 
            if (typeof aMaxGameWidth === "undefined" || typeof aMaxGameHeight === "undefined") {
                if (aOrientation === Orientation.LANDSCAPE) {
                    aMaxGameWidth = Math.round(aDefaultWidth * 1420 / 1280);
                    aMaxGameHeight = Math.round(aDefaultHeight * 960 / 800);
                }
                else {
                    aMaxGameWidth = Math.round(aDefaultWidth * 960 / 800);
                    aMaxGameHeight = Math.round(aDefaultHeight * 1420 / 1280);
                }
            }
            // default aspect and current window aspect
            var defaultAspect = (aOrientation === Orientation.LANDSCAPE) ? 1280 / 800 : 800 / 1280;
            var windowAspect = windowWidth / windowHeight;
            var offsetX = 0;
            var offsetY = 0;
            var gameWidth = 0;
            var gameHeight = 0;
            // if (aOrientation === Orientation.LANDSCAPE) {
            // "iPhone" landscape ... and "iPad" portrait
            if (windowAspect > defaultAspect) {
                gameHeight = aDefaultHeight;
                gameWidth = Math.ceil((gameHeight * windowAspect) / 2.0) * 2;
                gameWidth = Math.min(gameWidth, aMaxGameWidth);
                offsetX = (gameWidth - aDefaultWidth) / 2;
                offsetY = 0;
            }
            else { // "iPad" landscpae ... and "iPhone" portrait
                gameWidth = aDefaultWidth;
                gameHeight = Math.ceil((gameWidth / windowAspect) / 2.0) * 2;
                gameHeight = Math.min(gameHeight, aMaxGameHeight);
                offsetX = 0;
                offsetY = (gameHeight - aDefaultHeight) / 2;
            }
            /* } else {    // "iPhone" portrait
                if (windowAspect < defaultAspect) {
                    gameWidth = aDefaultWidth;
                    gameHeight = gameWidth / windowAspect;
                    gameHeight = Math.min(gameHeight, aMaxGameHeight);
                    offsetX = 0;
                    offsetY = (gameHeight - aDefaultHeight) / 2;
                } else {    // "iPad" portrait
                    gameHeight = aDefaultHeight;
                    gameWidth = gameHeight = windowAspect;
                    gameWidth = Math.min(gameWidth, aMaxGameWidth);
                    offsetX = (gameWidth - aDefaultWidth) / 2;
                    offsetY = 0;
                }
            }
            */
            // calculate scale
            var scaleX = windowWidth / gameWidth;
            var scaleY = windowHeight / gameHeight;
            // store values
            this.screenMetrics = new ScreenMetrics();
            this.screenMetrics.windowWidth = windowWidth;
            this.screenMetrics.windowHeight = windowHeight;
            this.screenMetrics.defaultGameWidth = aDefaultWidth;
            this.screenMetrics.defaultGameHeight = aDefaultHeight;
            this.screenMetrics.maxGameWidth = aMaxGameWidth;
            this.screenMetrics.maxGameHeight = aMaxGameHeight;
            this.screenMetrics.gameWidth = gameWidth;
            this.screenMetrics.gameHeight = gameHeight;
            this.screenMetrics.scaleX = scaleX;
            this.screenMetrics.scaleY = scaleY;
            this.screenMetrics.offsetX = offsetX;
            this.screenMetrics.offsetY = offsetY;
            return this.screenMetrics;
        };
        return ScreenUtils;
    }());
    Utils.ScreenUtils = ScreenUtils;
})(Utils || (Utils = {}));
