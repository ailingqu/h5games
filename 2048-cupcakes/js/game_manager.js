
var baseUrl;
baseUrl = location.origin; 
baseUrl = baseUrl + "/api/"
var beginUrl = baseUrl + "game/begin";
var endUrl = baseUrl + "game/end";
var rankUrl = baseUrl + "game/rankings";
var gameName = "2048-cupcakes";

var userKey = "";
var userToken = "";
 
const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];
function generateUUID() {
    const d0 = Math.random() * 0xffffffff | 0, d1 = Math.random() * 0xffffffff | 0, d2 = Math.random() * 0xffffffff | 0, d3 = Math.random() * 0xffffffff | 0;
    const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
            _lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
            _lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
            _lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];
    return uuid.toLowerCase();
}

function getRandkey() {
    var randkey = localStorage.getItem(gameName + "ranking");
    if(!randkey) {
        randkey = generateUUID() + "_" + (new Date()).getTime();
        localStorage.setItem(gameName + "ranking", randkey);
    }
    return randkey;
}

function generateKey(timestamp, str) { 
    var hash = 0;
    const raw = timestamp.toString() + str;
    for (var i = 0; i < raw.length; i++) {
        hash = ((hash << 5) - hash) + raw.charCodeAt(i);
        hash |= 0; 
    } 
    return Math.abs(hash).toString(16);
}

var playerName_txt = document.getElementsByClassName('game-player-name-text')[0];
var playerName = getPlayerName();
playerName_txt.setAttribute("placeholder", playerName);
playerName_txt.value = playerName;
playerName_txt.onfocus = function() {
    window.scrollTo(0, 0),
    document.body.scrollTop = 0
}
playerName_txt.onblur = function() {
  setNewPlayerName();
}
playerName_txt.onkeyup = function(e) {
  if (e.keyCode === 13) {//回车
    setNewPlayerName();
  }
}

function setNewPlayerName() {
  var playerName = getPlayerName();
  var playerName2 = playerName_txt.value;
  if (!playerName2) {//没输入
    playerName_txt.value = playerName;
    playerName_txt.setAttribute("placeholder", playerName);
    localStorage.setItem(gameName + 'playerName', playerName);
  } else {//输入了
    if (playerName2 != playerName) {//和保存的值不同
      playerName = playerName2;
      localStorage.setItem(gameName + 'playerName', playerName);
    }
  }
  begin_ranking();
}

function getPlayerName() {
  var playerName = localStorage.getItem(gameName + 'playerName');
  if (!playerName) {//没保存的值生成
    playerName = "player" + Math.floor(1e4 * Math.random());
    localStorage.setItem(gameName + 'playerName', playerName);
  }
  return playerName;
}

beforePlayerName = null;
function begin_ranking() {
  var randkey = getRandkey();

  let playerName = getPlayerName();
  if(beforePlayerName === playerName) return;
  beforePlayerName = playerName;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', beginUrl, true); 
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) { // 4 表示请求已完成且响应已就绪
          if (xhr.status === 200) { // 200 表示成功
              var json = JSON.parse(xhr.responseText);
              userToken = json.data.token;
              //leaderboardObj.list = json.list;
              // console.log(xhr.responseText); // 打印响应文本
          } else {
              console.error('Request failed. Returned status of ' + xhr.status);
          }
      }
  };

  xhr.send(JSON.stringify({
      "randkey": randkey,
      "game_key": gameName,
      "user_name": playerName
  }));
}

function end_ranking(score) {
  var randkey = getRandkey();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', endUrl, true); 
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { // 4 表示请求已完成且响应已就绪
            if (xhr.status === 200) { // 200 表示成功
                var json = JSON.parse(xhr.responseText);
                // console.log(xhr.responseText); // 打印响应文本
            } else {
                console.error('Request failed. Returned status of ' + xhr.status);
            }
        }
    };
    var time = parseInt(new Date().getTime()/1000);
    xhr.send(
        JSON.stringify({
            "randkey": randkey,
            "game_key": gameName,
            "md5": generateKey(
                time,
                time + userToken + randkey
            ),
            "score": score
        })
    );
}

function GameManager(size, InputManager, Actuator, StorageManager) {
  this.size           = size; // Size of the grid
  this.inputManager   = new InputManager;
  this.storageManager = new StorageManager;
  this.actuator       = new Actuator;

  this.startTiles     = 2;

/*   this.inputManager.on("crowd", this.crowd.bind(this)); */
  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

  this.setup();
}


// Set Prices
function kcal(exp) {
  var kcal = [];
  kcal[2]=200;
  kcal[4]=250;
  kcal[8]=320;
  kcal[16]=400;
  kcal[32]=500;
  kcal[64]=650;
  kcal[128]=820;
  kcal[256]=1000;
  kcal[512]=1200;
  kcal[1024]=1500;
  kcal[2048]=2000;
  kcal[4096]=3000;
  kcal[8192]=5000;
  return kcal[exp];
}

// Restart the game
GameManager.prototype.restart = function () {
  this.storageManager.clearGameState();
  this.actuator.continueGame(); // Clear the game won/lost message
  this.setup();
};

// Crowd board
GameManager.prototype.crowd = function () {
  this.storageManager.clearGameState();
  this.actuator.continueGame(); // Clear the game won/lost message
  this.grid        = new Grid(this.size);
  this.score       = 0;
  this.points      = 0;
  this.over        = false;
  this.won         = false;
  this.keepPlaying = false;
  this.actuate();
  var counter = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
      counter++;
      var value = Math.pow(2, counter);
      var tile = new Tile({ x: j, y: i }, value);
      if (value <= 8192) this.grid.insertTile(tile);
    }
  }
};

// Keep playing after winning (allows going over 2048)
GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continueGame(); // Clear the game won/lost message
};

// Return true if the game is lost, or has won and the user hasn't kept playing
GameManager.prototype.isGameTerminated = function () {
  if (this.over || (this.won && !this.keepPlaying)) {
    return true;
  } else {
    return false;
  }
};

// Set up the game
GameManager.prototype.setup = function () {
  begin_ranking();

  var previousState = this.storageManager.getGameState();

  // Reload the game from a previous game if present
  if (previousState) {
    this.grid        = new Grid(previousState.grid.size,
                                previousState.grid.cells); // Reload grid
    this.score       = previousState.score;
    this.points      = previousState.points;
    this.over        = previousState.over;
    this.won         = previousState.won;
    this.keepPlaying = previousState.keepPlaying;
  } else {
    this.grid        = new Grid(this.size);
		this.score       = 0;
		this.points      = 0;
    this.over        = false;
    this.won         = false;
    this.keepPlaying = false;

    // Add the initial tiles
    this.addStartTiles();
  }

  // Localize page elements
  this.localizeElements();

  // Fill legend
  this.fillLegend();

  // Update the actuator
  this.actuate();
};

// Passive localization of page elements
GameManager.prototype.localizeElements = function () {
    var elementArray = [
        'game-intro',
        'restart-button',
        'retry-button',
        'keep-playing-button',
        'game-explanation',
        'disclaimer',
        'tile-legend',
        'credits'
      ];
    for (var i in elementArray) {
      LocalizeElement(elementArray[i]);
    }
  };

// Fill legend
GameManager.prototype.fillLegend = function () {

  var legend = document.getElementsByClassName("tile-legend");
  for (var i = 1; i <= 13; i++) {
    var exp = Math.pow(2, i);
    var row = document.createElement("div");
    var grid = document.createElement("div");
    var cell = document.createElement("div");
    var img = document.createElement("img");
    var p = document.createElement("p");
    row.classList.add('legend-row');
    grid.classList.add('legend-grid');
    cell.classList.add('legend-cell');
    cell.classList.add('cell-' + exp);
    img.src = "style/img/" + exp + ".jpg";
    cell.appendChild(img);
    grid.appendChild(cell);
    row.appendChild(grid);
    p.textContent = Localize(exp) + "  (" + kcal(exp) + " Kcal)";
    row.appendChild(p);

    legend[0].appendChild(row);
  }

};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = Math.random() < 0.9 ? 2 : 4;
    var tile = new Tile(this.grid.randomAvailableCell(), value);

    this.grid.insertTile(tile);
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.storageManager.getBestScore() < this.score) {
    this.storageManager.setBestScore(this.score);
  }
	if (this.storageManager.getBestPoints() < this.points) {
    this.storageManager.setBestPoints(this.points);
  }
  // Clear the state when the game is over (game over only, not win)
  if (this.over) {
    console.log("分数", this.score, this.points);
    end_ranking(this.points);

    this.storageManager.clearGameState();
  } else {
    this.storageManager.setGameState(this.serialize());
  }

  this.actuator.actuate(this.grid, {
		score:      this.score,
		points:     this.points,
    over:       this.over,
    won:        this.won,
    bestScore:  this.storageManager.getBestScore(),
    bestPoints: this.storageManager.getBestPoints(),
    terminated: this.isGameTerminated()
  });

};

// Represent the current game as an object
GameManager.prototype.serialize = function () {
  return {
    grid:        this.grid.serialize(),
    score:       this.score,
    points:      this.points,
    over:        this.over,
    won:         this.won,
    keepPlaying: this.keepPlaying
  };
};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2: down, 3: left
  var self = this;

  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);

      if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next      = self.grid.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) {
          var merged = new Tile(positions.next, tile.value * 2);
          merged.mergedFrom = [tile, next];

          self.grid.insertTile(merged);
          self.grid.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.points += kcal(tile.value) * 2;
          if (merged.value > self.score) self.score = merged.value;

          // The mighty 2048 tile
          if (merged.value === 2048 || merged.value === 2048) self.won = true;
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0,  y: -1 }, // Up
    1: { x: 1,  y: 0 },  // Right
    2: { x: 0,  y: 1 },  // Down
    3: { x: -1, y: 0 }   // Left
  };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) &&
           this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};
