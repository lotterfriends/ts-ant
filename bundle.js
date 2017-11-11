/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(type, cls, content) {
        this.node = document.createElement(type);
        this.node.classList.add(cls);
        if (content) {
            this.node.innerHTML = content;
        }
    }
    Node.prototype.getNode = function () {
        return this.node;
    };
    Node.prototype.addItem = function (item) {
        this.node.appendChild(item);
    };
    Node.prototype.removeItem = function (item) {
        this.node.removeChild(item);
    };
    Node.prototype.addCls = function () {
        var cls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cls[_i] = arguments[_i];
        }
        (_a = this.node.classList).add.apply(_a, cls);
        var _a;
    };
    Node.prototype.destroy = function () {
        this.node.remove();
    };
    return Node;
}());
exports.Node = Node;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(0);
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super.call(this, 'div', 'board') || this;
        _this.bootstrap();
        return _this;
    }
    Board.prototype.bootstrap = function () {
        this.addCls('center');
        this.node.style.width = Board.WIDTH + 'px';
        this.node.style.height = Board.HEIGHT + 'px';
    };
    Board.getCords = function (position, radius) {
        var cords = {
            x: 0,
            y: 0
        };
        var halfBoardWidth = Board.WIDTH / 2;
        var halfBoardHeight = Board.HEIGHT / 2;
        if (position.x < halfBoardWidth * -1) {
            position.x = halfBoardWidth * -1;
        }
        if (position.x > halfBoardWidth) {
            position.x = halfBoardWidth;
        }
        if (position.y < halfBoardHeight * -1) {
            position.y = halfBoardHeight * -1;
        }
        if (position.y > halfBoardHeight) {
            position.y = halfBoardHeight;
        }
        cords.x = (halfBoardWidth + position.x) - radius;
        cords.y = (halfBoardWidth + position.y) - radius;
        return cords;
    };
    Board.atTheEdge = function (position) {
        var halfBoardWidth = Board.WIDTH / 2;
        var halfBoardHeight = Board.HEIGHT / 2;
        return position.x === halfBoardWidth * -1 || position.x === halfBoardWidth ||
            position.y === halfBoardHeight * -1 || position.y === halfBoardHeight;
    };
    Board.WIDTH = 500;
    Board.HEIGHT = 500;
    return Board;
}(node_1.Node));
exports.Board = Board;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var boardObject_1 = __webpack_require__(3);
var DeadObject = /** @class */ (function (_super) {
    __extends(DeadObject, _super);
    function DeadObject(position, radius) {
        var _this = _super.call(this, position, radius) || this;
        _this.addCls('dead-object');
        return _this;
    }
    return DeadObject;
}(boardObject_1.BoardObject));
exports.DeadObject = DeadObject;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(0);
var board_1 = __webpack_require__(1);
var BoardObject = /** @class */ (function (_super) {
    __extends(BoardObject, _super);
    function BoardObject(position, radius, viewRadius, angle) {
        var _this = _super.call(this, 'div', 'board-object') || this;
        _this.node.style.width = radius * 2 + 'px';
        _this.node.style.height = radius * 2 + 'px';
        _this.radius = radius;
        if (viewRadius) {
            _this.viewRadius = viewRadius;
        }
        if (angle) {
            _this.setPositionAndAngleOnBoard(position, angle);
        }
        else {
            _this.setPositionOnBoard(position);
        }
        return _this;
    }
    BoardObject.prototype.collidesdWith = function (otherBoardObject) {
        var rect1 = {
            x: this.position.x,
            y: this.position.y,
            width: this.getSize(),
            height: this.getSize()
        };
        var rect2 = {
            x: otherBoardObject.position.x,
            y: otherBoardObject.position.y,
            width: otherBoardObject.getSize(),
            height: otherBoardObject.getSize()
        };
        return rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y;
    };
    BoardObject.prototype.setPositionAndAngleOnBoard = function (position, angle) {
        this.angle = angle;
        this.position = position;
        var cords = board_1.Board.getCords(this.position, this.radius);
        this.getNode().style.transform = ['translate(' + cords.x + 'px, ' + cords.y + 'px)', 'rotate(' + this.angle + 'deg)'].join(' ');
    };
    BoardObject.prototype.setPositionOnBoard = function (position) {
        this.position = position;
        var cords = board_1.Board.getCords(this.position, this.radius);
        var transform = this.getNode().style.transform;
        var rotateMatches = transform.match(/(rotate\(.*?\))/g);
        if (transform && rotateMatches) {
            this.getNode().style.transform = ['translate(' + cords.x + 'px, ' + cords.y + 'px)', rotateMatches].join(' ');
        }
        else {
            this.getNode().style.transform = 'translate(' + cords.x + 'px, ' + cords.y + 'px)';
        }
    };
    BoardObject.prototype.rotate = function (angle) {
        this.angle = angle;
        var transform = this.getNode().style.transform;
        var translateMatches = transform.match(/(translate\(.*?\))/g);
        if (transform && translateMatches) {
            this.getNode().style.transform = [translateMatches[0], 'rotate(' + this.angle + 'deg)'].join(' ');
        }
        else {
            this.getNode().style.transform = 'rotate(' + angle + 'deg)';
        }
    };
    BoardObject.prototype.getPosition = function () {
        return this.position;
    };
    BoardObject.prototype.getRadius = function () {
        return this.radius;
    };
    BoardObject.prototype.getViewRadius = function () {
        return this.viewRadius;
    };
    BoardObject.prototype.getSize = function () {
        return this.radius * 2;
    };
    return BoardObject;
}(node_1.Node));
exports.BoardObject = BoardObject;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(0);
var board_1 = __webpack_require__(1);
var anthill_1 = __webpack_require__(5);
var sugar_1 = __webpack_require__(6);
var myant_1 = __webpack_require__(7);
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this, 'div', 'game') || this;
        _this.currentAngle = 300.2;
        _this.board = new board_1.Board();
        _this.anthill = new anthill_1.Anthill();
        _this.sugar = [];
        _this.ants = [];
        _this.spawnDelay = 6;
        _this.maxAnts = 100;
        _this.turn = 0;
        _this.bootstrap();
        return _this;
    }
    Game.prototype.start = function () {
        this.run();
    };
    Game.prototype.bootstrap = function () {
        this.addItem(this.board.getNode());
        this.board.addItem(this.anthill.getNode());
        this.board.addItem(new sugar_1.Sugar({ x: -200, y: 100 }).getNode());
        this.board.addItem(new sugar_1.Sugar({ x: 100, y: 30 }).getNode());
        this.board.addItem(new sugar_1.Sugar({ x: 90, y: -150 }).getNode());
        this.board.addItem(new sugar_1.Sugar({ x: -190, y: -190 }).getNode());
        // var angle: number = 300.2;
        // while (this.ants.length < this.maxAnts) {
        //     var ant = new MyAnt(angle);
        //     this.ants.push(ant);
        //     this.board.addItem(ant.getNode());
        //     angle -= 7.2;
        //     if (angle < 0) {
        //         angle += 360;
        //     }
        // }
        document.body.appendChild(this.getNode());
    };
    /**
     * main loop
     */
    Game.prototype.run = function () {
        var _this = this;
        if (this.ants.length < this.maxAnts && this.turn % this.spawnDelay === 0) {
            var ant = new myant_1.MyAnt(this.currentAngle);
            this.ants.push(ant);
            this.board.addItem(ant.getNode());
            this.currentAngle -= 7.2;
            if (this.currentAngle < 0) {
                this.currentAngle += 360;
            }
        }
        for (var _i = 0, _a = this.ants; _i < _a.length; _i++) {
            var ant_1 = _a[_i];
            ant_1.live(this.turn);
            if (ant_1.collidesdWith(this.anthill)) {
                ant_1.rest();
            }
        }
        this.turn++;
        window.requestAnimationFrame(function () {
            _this.run();
        });
    };
    return Game;
}(node_1.Node));
var game = new Game();
game.start();


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var deadObject_1 = __webpack_require__(2);
var Anthill = /** @class */ (function (_super) {
    __extends(Anthill, _super);
    function Anthill() {
        var _this = _super.call(this, { x: 0, y: 0 }, Anthill.RADIUS) || this;
        _this.addCls('anthill');
        return _this;
    }
    Anthill.prototype.bootstrap = function () {
    };
    Anthill.WIDTH = 20;
    Anthill.HEIGHT = 20;
    Anthill.RADIUS = 10;
    return Anthill;
}(deadObject_1.DeadObject));
exports.Anthill = Anthill;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var deadObject_1 = __webpack_require__(2);
var Sugar = /** @class */ (function (_super) {
    __extends(Sugar, _super);
    function Sugar(position) {
        var _this = _super.call(this, position, 10) || this;
        _this.amount = 20;
        _this.addCls('sugar');
        return _this;
    }
    Sugar.prototype.reduce = function () {
        this.amount--;
    };
    Sugar.prototype.getAmount = function () {
        return this.amount;
    };
    return Sugar;
}(deadObject_1.DeadObject));
exports.Sugar = Sugar;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ant_1 = __webpack_require__(8);
var MyAnt = /** @class */ (function (_super) {
    __extends(MyAnt, _super);
    function MyAnt(angle) {
        return _super.call(this, angle) || this;
    }
    MyAnt.prototype.getTired = function () {
        this.goToAnthill();
    };
    return MyAnt;
}(ant_1.Ant));
exports.MyAnt = MyAnt;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var livingObject_1 = __webpack_require__(9);
var Ant = /** @class */ (function (_super) {
    __extends(Ant, _super);
    function Ant(angle) {
        var _this = _super.call(this, { x: 0, y: 0 }, 5, 20, angle) || this;
        _this.speed = 5;
        _this.currentRange = Ant.RANGE;
        _this.restDistance = 0;
        _this.cloud = 0;
        _this.currentEnergy = Ant.ENERGY;
        _this.turn = 0;
        _this.tired = false;
        _this.addCls('ant');
        return _this;
    }
    Ant.prototype.live = function (turn) {
        if (this.currentEnergy < Ant.ENERGY) {
            this.currentEnergy++;
        }
        if (this.currentEnergy <= 0) {
            this.destroy();
        }
        this.turn++;
        this.tired = this.currentRange <= Ant.RANGE / 3 * 2;
        if (this.tired) {
            this.getTired();
        }
        if (this.currentRange > 0) {
            this.go();
        }
    };
    Ant.prototype.rest = function () {
        this.currentRange = Ant.RANGE;
    };
    ;
    Ant.prototype.go = function () {
        _super.prototype.go.call(this);
        this.currentRange -= this.speed;
    };
    Ant.prototype.isTired = function () {
        return this.tired;
    };
    Ant.prototype.goToAnthill = function () {
        this.goToPosition({ x: 0, y: 0 });
    };
    Ant.WIDTH = 10;
    Ant.HEIGHT = 10;
    Ant.ENERGY = 500;
    Ant.RANGE = 5000;
    Ant.TURN_AROUND_SPEED = 5;
    return Ant;
}(livingObject_1.LivingObject));
exports.Ant = Ant;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var boardObject_1 = __webpack_require__(3);
var board_1 = __webpack_require__(1);
var LivingObject = /** @class */ (function (_super) {
    __extends(LivingObject, _super);
    function LivingObject(position, radius, viewRadius, angle) {
        var _this = _super.call(this, position, radius, viewRadius, angle) || this;
        _this.position = position;
        _this.angle = angle;
        _this.addCls('living-object');
        return _this;
    }
    LivingObject.prototype.go = function () {
        if (board_1.Board.atTheEdge(this.position)) {
            this.angle = this.angle - 90;
        }
        var arc = Math.PI * this.angle / 180.0;
        this.position.x = (Math.cos(arc) * this.speed) + this.position.x;
        this.position.y = (Math.sin(arc) * this.speed) + this.position.y;
        this.setPositionOnBoard(this.position);
    };
    LivingObject.prototype.turnAround = function () {
        this.angle = this.angle - 180;
    };
    LivingObject.prototype.goToTarget = function (boardObject) {
        this.goToPosition(boardObject.getPosition());
    };
    LivingObject.prototype.goToPosition = function (position) {
        var newX = this.position.x - position.x;
        var newY = this.position.y - position.y;
        if (newX < 0) {
            newX = newX * -1;
        }
        if (newY < 0) {
            newY = newY * -1;
        }
        var distance = Math.sqrt(newX * newX + newY * newY);
        var fraction = newY / distance;
        var direction = Math.asin(fraction) * 180 / Math.PI;
        if (this.getPosition().x < position.x && this.getPosition().y > position.y) {
            direction = 360 - direction;
        }
        if (this.getPosition().x > position.x && this.getPosition().y > position.y) {
            direction += 180;
        }
        if (this.getPosition().x > position.x && this.getPosition().y < position.y) {
            direction = 180 - direction;
        }
        this.rotate(direction);
    };
    return LivingObject;
}(boardObject_1.BoardObject));
exports.LivingObject = LivingObject;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDRjMzMyNDIyYjEzZjYzMDMyOGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWFkT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW50aGlsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VnYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpdmluZ09iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7SUFHSSxjQUFZLElBQVksRUFBRSxHQUFXLEVBQUUsT0FBZ0I7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FB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Q0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUNELElBQUksUUFBUSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxRQUFRLEdBQVcsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN2QyxJQUFJLFNBQVMsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRTVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLFNBQVMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxTQUFTLElBQUksR0FBRyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxTQUFTLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBSUwsbUJBQUM7QUFBRCxDQUFDLENBNUQwQyx5QkFBVyxHQTREckQ7QUE1RHFCLG9DQUFZIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA0YzMzMjQyMmIxM2Y2MzAzMjhlIiwiZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgY2xzOiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENscyguLi5jbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKC4uLmNscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25vZGUudHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA1MDA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDUwMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2JvYXJkJyk7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdjZW50ZXInKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLndpZHRoID0gQm9hcmQuV0lEVEggKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuaGVpZ2h0ID0gQm9hcmQuSEVJR0hUICsgJ3B4JztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldENvcmRzKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICB2YXIgY29yZHMgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgaGFsZkJvYXJkV2lkdGggPSBCb2FyZC5XSURUSCAvIDI7XG4gICAgICAgIHZhciBoYWxmQm9hcmRIZWlnaHQgPSBCb2FyZC5IRUlHSFQgLyAyO1xuICAgICAgICBpZiAocG9zaXRpb24ueCA8IGhhbGZCb2FyZFdpZHRoICogLTEpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPSBoYWxmQm9hcmRXaWR0aCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi54ID4gaGFsZkJvYXJkV2lkdGgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPSBoYWxmQm9hcmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueSA8IGhhbGZCb2FyZEhlaWdodCAqIC0xKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi55ID0gaGFsZkJvYXJkSGVpZ2h0ICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiBoYWxmQm9hcmRIZWlnaHQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBoYWxmQm9hcmRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29yZHMueCA9IChoYWxmQm9hcmRXaWR0aCArIHBvc2l0aW9uLngpIC0gcmFkaXVzO1xuICAgICAgICBjb3Jkcy55ID0gKGhhbGZCb2FyZFdpZHRoICsgcG9zaXRpb24ueSkgLSByYWRpdXM7XG4gICAgICAgIHJldHVybiBjb3JkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGF0VGhlRWRnZShwb3NpdGlvbjogQm9hcmRQb3NpdGlvbik6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaGFsZkJvYXJkV2lkdGggPSBCb2FyZC5XSURUSCAvIDI7XG4gICAgICAgIHZhciBoYWxmQm9hcmRIZWlnaHQgPSBCb2FyZC5IRUlHSFQgLyAyO1xuICAgICAgICByZXR1cm4gcG9zaXRpb24ueCA9PT0gaGFsZkJvYXJkV2lkdGggKiAtMSB8fCBwb3NpdGlvbi54ID09PSBoYWxmQm9hcmRXaWR0aCB8fFxuICAgICAgICAgICAgcG9zaXRpb24ueSA9PT0gaGFsZkJvYXJkSGVpZ2h0ICogLTEgfHwgcG9zaXRpb24ueSA9PT0gaGFsZkJvYXJkSGVpZ2h0O1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZC50cyIsImltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWFkT2JqZWN0IGV4dGVuZHMgQm9hcmRPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCByYWRpdXMpO1xuICAgICAgICB0aGlzLmFkZENscygnZGVhZC1vYmplY3QnKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVhZE9iamVjdC50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmRPYmplY3QgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogQm9hcmRQb3NpdGlvbjtcbiAgICBwcm90ZWN0ZWQgdmlld1JhZGl1czogbnVtYmVyO1xuICAgIHByb3RlY3RlZCByYWRpdXM6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgYW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlciwgdmlld1JhZGl1cz86IG51bWJlciwgYW5nbGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZC1vYmplY3QnKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLndpZHRoID0gcmFkaXVzICogMiArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSByYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIGlmICh2aWV3UmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdSYWRpdXMgPSB2aWV3UmFkaXVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbkFuZEFuZ2xlT25Cb2FyZChwb3NpdGlvbiwgYW5nbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbk9uQm9hcmQocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNvbGxpZGVzZFdpdGgob3RoZXJCb2FyZE9iamVjdDogQm9hcmRPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlY3QxID0ge1xuICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0U2l6ZSgpLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdldFNpemUoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZWN0MiA9IHtcbiAgICAgICAgICAgIHg6IG90aGVyQm9hcmRPYmplY3QucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IG90aGVyQm9hcmRPYmplY3QucG9zaXRpb24ueSxcbiAgICAgICAgICAgIHdpZHRoOiBvdGhlckJvYXJkT2JqZWN0LmdldFNpemUoKSxcbiAgICAgICAgICAgIGhlaWdodDogb3RoZXJCb2FyZE9iamVjdC5nZXRTaXplKClcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJlxuICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxuICAgICAgICAgICAgcmVjdDEueSA8IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQgJiZcbiAgICAgICAgICAgIHJlY3QxLmhlaWdodCArIHJlY3QxLnkgPiByZWN0Mi55O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbkFuZEFuZ2xlT25Cb2FyZChwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgYW5nbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdmFyIGNvcmRzID0gQm9hcmQuZ2V0Q29yZHModGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMpO1xuICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSBbJ3RyYW5zbGF0ZSgnICsgY29yZHMueCArICdweCwgJyArIGNvcmRzLnkgKyAncHgpJywgJ3JvdGF0ZSgnICsgdGhpcy5hbmdsZSArICdkZWcpJ10uam9pbignICcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbk9uQm9hcmQocG9zaXRpb246IEJvYXJkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB2YXIgY29yZHMgPSBCb2FyZC5nZXRDb3Jkcyh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIHZhciByb3RhdGVNYXRjaGVzID0gdHJhbnNmb3JtLm1hdGNoKC8ocm90YXRlXFwoLio/XFwpKS9nKTtcbiAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiByb3RhdGVNYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSBbJ3RyYW5zbGF0ZSgnICsgY29yZHMueCArICdweCwgJyArIGNvcmRzLnkgKyAncHgpJywgcm90YXRlTWF0Y2hlc10uam9pbignICcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgY29yZHMueCArICdweCwgJyArIGNvcmRzLnkgKyAncHgpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByb3RhdGUoYW5nbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIHZhciB0cmFuc2xhdGVNYXRjaGVzID0gdHJhbnNmb3JtLm1hdGNoKC8odHJhbnNsYXRlXFwoLio/XFwpKS9nKTtcbiAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2xhdGVNYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSBbdHJhbnNsYXRlTWF0Y2hlc1swXSwgJ3JvdGF0ZSgnICsgdGhpcy5hbmdsZSArICdkZWcpJ10uam9pbignICcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgYW5nbGUgKyAnZGVnKSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogQm9hcmRQb3NpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSYWRpdXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWaWV3UmFkaXVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdSYWRpdXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzICogMjtcbiAgICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZE9iamVjdC50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBBbnRoaWxsIH0gZnJvbSBcIi4vYW50aGlsbFwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5pbXBvcnQgeyBNeUFudCB9IGZyb20gXCIuL215YW50XCI7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHByaXZhdGUgY3VycmVudEFuZ2xlOiBudW1iZXIgPSAzMDAuMjtcbiAgICBwcml2YXRlIGJvYXJkOiBCb2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgIHByaXZhdGUgYW50aGlsbDogQW50aGlsbCA9IG5ldyBBbnRoaWxsKCk7XG4gICAgcHJpdmF0ZSBzdWdhcjogQXJyYXk8U3VnYXI+ID0gW107XG4gICAgcHJpdmF0ZSBhbnRzOiBBcnJheTxBbnQ+ID0gW107XG4gICAgcHJpdmF0ZSBzcGF3bkRlbGF5OiBudW1iZXIgPSA2O1xuICAgIHByaXZhdGUgbWF4QW50czogbnVtYmVyID0gMTAwO1xuICAgIHByaXZhdGUgdHVybjogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0aGlzLmJvYXJkLmdldE5vZGUoKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbSh0aGlzLmFudGhpbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IC0yMDAsIHk6IDEwMCB9KS5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0obmV3IFN1Z2FyKHsgeDogMTAwLCB5OiAzMCB9KS5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0obmV3IFN1Z2FyKHsgeDogOTAsIHk6IC0xNTAgfSkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IC0xOTAsIHk6IC0xOTAgfSkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgLy8gdmFyIGFuZ2xlOiBudW1iZXIgPSAzMDAuMjtcbiAgICAgICAgLy8gd2hpbGUgKHRoaXMuYW50cy5sZW5ndGggPCB0aGlzLm1heEFudHMpIHtcbiAgICAgICAgLy8gICAgIHZhciBhbnQgPSBuZXcgTXlBbnQoYW5nbGUpO1xuICAgICAgICAvLyAgICAgdGhpcy5hbnRzLnB1c2goYW50KTtcbiAgICAgICAgLy8gICAgIHRoaXMuYm9hcmQuYWRkSXRlbShhbnQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgLy8gICAgIGFuZ2xlIC09IDcuMjtcbiAgICAgICAgLy8gICAgIGlmIChhbmdsZSA8IDApIHtcbiAgICAgICAgLy8gICAgICAgICBhbmdsZSArPSAzNjA7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdldE5vZGUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFpbiBsb29wXG4gICAgICovXG4gICAgcHJpdmF0ZSBydW4oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuYW50cy5sZW5ndGggPCB0aGlzLm1heEFudHMgJiYgdGhpcy50dXJuICUgdGhpcy5zcGF3bkRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICB2YXIgYW50ID0gbmV3IE15QW50KHRoaXMuY3VycmVudEFuZ2xlKTtcbiAgICAgICAgICAgIHRoaXMuYW50cy5wdXNoKGFudCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYW50LmdldE5vZGUoKSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSAtPSA3LjI7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5nbGUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgKz0gMzYwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgYW50IG9mIHRoaXMuYW50cykge1xuICAgICAgICAgICAgYW50LmxpdmUodGhpcy50dXJuKTtcbiAgICAgICAgICAgIGlmIChhbnQuY29sbGlkZXNkV2l0aCh0aGlzLmFudGhpbGwpKSB7XG4gICAgICAgICAgICAgICAgYW50LnJlc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHVybisrO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG52YXIgZ2FtZSA9IG5ldyBHYW1lKCk7XG5nYW1lLnN0YXJ0KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUudHMiLCJpbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBEZWFkT2JqZWN0IH0gZnJvbSBcIi4vZGVhZE9iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgQW50aGlsbCBleHRlbmRzIERlYWRPYmplY3Qge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gMjA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDIwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFESVVTOiBudW1iZXIgPSAxMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7IHg6IDAsIHk6IDAgfSwgQW50aGlsbC5SQURJVVMpXG4gICAgICAgIHRoaXMuYWRkQ2xzKCdhbnRoaWxsJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FudGhpbGwudHMiLCJpbXBvcnQgeyBEZWFkT2JqZWN0IH0gZnJvbSBcIi4vZGVhZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFN1Z2FyIGV4dGVuZHMgRGVhZE9iamVjdCB7XG5cbiAgICBwcml2YXRlIGFtb3VudDogbnVtYmVyID0gMjA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgMTApO1xuICAgICAgICB0aGlzLmFkZENscygnc3VnYXInKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVkdWNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFtb3VudC0tO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbW91bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50O1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdWdhci50cyIsImltcG9ydCB7IEFudCB9IGZyb20gXCIuL2FudFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIE15QW50IGV4dGVuZHMgQW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoYW5nbGUpO1xuICAgIH1cblxuICAgIGdldFRpcmVkKCkge1xuICAgICAgICB0aGlzLmdvVG9BbnRoaWxsKCk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL215YW50LnRzIiwiaW1wb3J0IHsgTGl2aW5nT2JqZWN0IH0gZnJvbSBcIi4vbGl2aW5nT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW50IGV4dGVuZHMgTGl2aW5nT2JqZWN0IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIEVORVJHWTogbnVtYmVyID0gNTAwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFOR0U6IG51bWJlciA9IDUwMDA7XG5cbiAgICBwdWJsaWMgc3RhdGljIFRVUk5fQVJPVU5EX1NQRUVEOiBudW1iZXIgPSA1O1xuXG4gICAgcHJvdGVjdGVkIHNwZWVkOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByb3VuZDogbnVtYmVyO1xuICAgIHByaXZhdGUgY3VycmVudFJhbmdlOiBudW1iZXIgPSBBbnQuUkFOR0U7XG4gICAgcHJpdmF0ZSByZXN0RGlzdGFuY2U6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjbG91ZDogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgY3VycmVudEVuZXJneTogbnVtYmVyID0gQW50LkVORVJHWTtcbiAgICBwcml2YXRlIHRhcmdldDogQm9hcmRPYmplY3Q7XG4gICAgcHJpdmF0ZSB0dXJuOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdGlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHsgeDogMCwgeTogMCB9LCA1LCAyMCwgYW5nbGUpO1xuICAgICAgICB0aGlzLmFkZENscygnYW50Jyk7XG4gICAgfVxuXG4gICAgbGl2ZSh0dXJuOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDwgQW50LkVORVJHWSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RW5lcmd5Kys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJuKys7XG4gICAgICAgIHRoaXMudGlyZWQgPSB0aGlzLmN1cnJlbnRSYW5nZSA8PSBBbnQuUkFOR0UgLyAzICogMlxuICAgICAgICBpZiAodGhpcy50aXJlZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUaXJlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFJhbmdlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5nbygpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXN0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRSYW5nZSA9IEFudC5SQU5HRTtcbiAgICB9O1xuXG4gICAgZ28oKSB7XG4gICAgICAgIHN1cGVyLmdvKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFJhbmdlIC09IHRoaXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgaXNUaXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlyZWQ7XG4gICAgfVxuXG4gICAgZ29Ub0FudGhpbGwoKSB7XG4gICAgICAgIHRoaXMuZ29Ub1Bvc2l0aW9uKHsgeDogMCwgeTogMCB9KTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRUaXJlZCgpOiB2b2lkO1xuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FudC50cyIsImltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMaXZpbmdPYmplY3QgZXh0ZW5kcyBCb2FyZE9iamVjdCB7XG5cbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IEJvYXJkUG9zaXRpb247XG4gICAgcHJvdGVjdGVkIGFuZ2xlOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHNwZWVkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIsIHZpZXdSYWRpdXM/OiBudW1iZXIsIGFuZ2xlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCByYWRpdXMsIHZpZXdSYWRpdXMsIGFuZ2xlKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdsaXZpbmctb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgZ28oKSB7XG4gICAgICAgIGlmIChCb2FyZC5hdFRoZUVkZ2UodGhpcy5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gOTA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFyYzogbnVtYmVyID0gTWF0aC5QSSAqIHRoaXMuYW5nbGUgLyAxODAuMFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAoTWF0aC5jb3MoYXJjKSAqIHRoaXMuc3BlZWQpICsgdGhpcy5wb3NpdGlvbi54O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSAoTWF0aC5zaW4oYXJjKSAqIHRoaXMuc3BlZWQpICsgdGhpcy5wb3NpdGlvbi55O1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uT25Cb2FyZCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHVybkFyb3VuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgLSAxODA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdvVG9UYXJnZXQoYm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ29Ub1Bvc2l0aW9uKGJvYXJkT2JqZWN0LmdldFBvc2l0aW9uKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnb1RvUG9zaXRpb24ocG9zaXRpb246IEJvYXJkUG9zaXRpb24pOiB2b2lkIHtcbiAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnBvc2l0aW9uLnggLSBwb3NpdGlvbi54O1xuICAgICAgICBsZXQgbmV3WSA9IHRoaXMucG9zaXRpb24ueSAtIHBvc2l0aW9uLnk7XG4gICAgICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgICAgICAgbmV3WCA9IG5ld1ggKiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdZIDwgMCkge1xuICAgICAgICAgICAgbmV3WSA9IG5ld1kgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGlzdGFuY2U6IG51bWJlciA9IE1hdGguc3FydChuZXdYICogbmV3WCArIG5ld1kgKiBuZXdZKTtcbiAgICAgICAgbGV0IGZyYWN0aW9uOiBudW1iZXIgPSBuZXdZIC8gZGlzdGFuY2U7XG4gICAgICAgIGxldCBkaXJlY3Rpb246IG51bWJlciA9IE1hdGguYXNpbihmcmFjdGlvbikgKiAxODAgLyBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA8IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPiBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAzNjAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPiBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55ID4gcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uICs9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA+IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPCBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxODAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3RhdGUoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBsaXZlKHR1cm46IG51bWJlcik6IHZvaWQ7XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGl2aW5nT2JqZWN0LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==