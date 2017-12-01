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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
var node_1 = __webpack_require__(1);
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
    Board.randomNegative = function (padding) {
        if (padding === void 0) { padding = 0; }
        return 0 - this.randomPositive(padding);
    };
    Board.randomPositive = function (padding) {
        if (padding === void 0) { padding = 0; }
        return Math.floor(Math.random() * (Board.WIDTH / 2 - padding)) + 0;
    };
    Board.randomPosition = function (padding) {
        if (padding === void 0) { padding = 0; }
        return {
            x: ((Math.random() * 1) > .5) ? Board.randomPositive(padding) : Board.randomNegative(padding),
            y: ((Math.random() * 1) > .5) ? Board.randomPositive(padding) : Board.randomNegative(padding),
        };
    };
    Board.getRandomAngle = function () {
        return Math.floor(Math.random() * 360);
    };
    Board.WIDTH = 500;
    Board.HEIGHT = 500;
    return Board;
}(node_1.Node));
exports.Board = Board;


/***/ }),
/* 1 */
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
var node_1 = __webpack_require__(1);
var board_1 = __webpack_require__(0);
var BoardObject = /** @class */ (function (_super) {
    __extends(BoardObject, _super);
    function BoardObject(position, radius, viewRadius, angle) {
        var _this = _super.call(this, 'div', 'board-object') || this;
        _this.radius = radius;
        _this.setSize();
        if (typeof viewRadius === 'number') {
            _this.viewRadius = viewRadius;
        }
        if (position) {
            if (typeof angle === 'number') {
                _this.setPositionAndAngleOnBoard(position, angle);
            }
            else {
                _this.setPositionOnBoard(position);
            }
        }
        if (typeof viewRadius === 'number') {
            var viewRadiusObj = new node_1.Node('span', 'viewRadius');
            viewRadiusObj.addCls('center');
            viewRadiusObj.getNode().style.width = viewRadius * 2 + 'px';
            viewRadiusObj.getNode().style.height = viewRadius * 2 + 'px';
            _this.addItem(viewRadiusObj.getNode());
        }
        return _this;
    }
    BoardObject.prototype.setSize = function () {
        if (typeof this.radius === 'number') {
            this.node.style.width = this.radius * 2 + 'px';
            this.node.style.height = this.radius * 2 + 'px';
        }
    };
    BoardObject.prototype.collidesdWith = function (otherBoardObject) {
        return BoardObject.collision(this.position, this.radius, otherBoardObject.position, otherBoardObject.radius);
    };
    BoardObject.prototype.sees = function (otherBoardObject) {
        return BoardObject.collision(this.position, this.viewRadius, otherBoardObject.position, otherBoardObject.getSize());
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
    BoardObject.prototype.viewInDirection = function (angle) {
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
    BoardObject.collision = function (positionA, sizeA, positionB, sizeB) {
        var rect1 = {
            x: positionA.x,
            y: positionA.y,
            width: sizeA,
            height: sizeA
        };
        var rect2 = {
            x: positionB.x,
            y: positionB.y,
            width: sizeB,
            height: sizeB
        };
        return rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y;
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
var deadObject_1 = __webpack_require__(2);
var Sugar = /** @class */ (function (_super) {
    __extends(Sugar, _super);
    function Sugar(position, radius, amount, ant) {
        if (radius === void 0) { radius = 10; }
        if (amount === void 0) { amount = 20; }
        var _this = _super.call(this, position, radius) || this;
        _this.ants = [];
        _this.addCls('sugar');
        _this.amount = amount;
        if (ant) {
            _this.ants.push(ant);
        }
        return _this;
    }
    Sugar.prototype.reduce = function (ant) {
        if (this.amount === 1 && this.ants.length) {
            return;
        }
        this.amount--;
        if (this.radius <= 1) {
            this.radius = 0;
        }
        else {
            this.radius -= 0.5;
        }
        this.setSize();
        return new Sugar(this.position, 1, 1, ant);
    };
    Sugar.prototype.getAmount = function () {
        return this.amount;
    };
    Sugar.prototype.destroy = function (ant) {
        if (ant) {
            this.ants.splice(this.ants.indexOf(ant));
        }
        _super.prototype.destroy.call(this);
    };
    return Sugar;
}(deadObject_1.DeadObject));
exports.Sugar = Sugar;


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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(position) {
        var _this = _super.call(this, position, 20) || this;
        _this.carrier = [];
        _this.addCls('apple');
        return _this;
    }
    Apple.prototype.carry = function (ant) {
        this.carrier.push(ant);
    };
    Apple.prototype.stopCarrying = function (ant) {
        this.carrier.splice(this.carrier.indexOf(ant), 1);
    };
    Apple.prototype.getCarrier = function () {
        return this.carrier;
    };
    Apple.prototype.destroy = function (ant) {
        if (this.carrier.length) {
            this.carrier.splice(this.carrier.indexOf(ant));
        }
        if (!this.carrier.length) {
            _super.prototype.destroy.call(this);
        }
    };
    return Apple;
}(deadObject_1.DeadObject));
exports.Apple = Apple;


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
var Anthill = /** @class */ (function (_super) {
    __extends(Anthill, _super);
    function Anthill() {
        var _this = _super.call(this, Anthill.POSITION, Anthill.RADIUS) || this;
        _this.addCls('anthill');
        return _this;
    }
    Anthill.prototype.bootstrap = function () {
    };
    Anthill.WIDTH = 20;
    Anthill.HEIGHT = 20;
    Anthill.RADIUS = 10;
    Anthill.POSITION = { x: 0, y: 0 };
    return Anthill;
}(deadObject_1.DeadObject));
exports.Anthill = Anthill;


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
var boardObject_1 = __webpack_require__(3);
var board_1 = __webpack_require__(0);
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
        var tmpAngle = this.angle;
        if (board_1.Board.atTheEdge(this.position)) {
            tmpAngle = tmpAngle - 90;
        }
        var arc = Math.PI * tmpAngle / 180.0;
        this.position.x = (Math.cos(arc) * this.speed) + this.position.x;
        this.position.y = (Math.sin(arc) * this.speed) + this.position.y;
        this.setPositionAndAngleOnBoard(this.position, tmpAngle);
    };
    LivingObject.prototype.turnAround = function () {
        this.rotate(180);
    };
    LivingObject.prototype.rotate = function (angle) {
        this.angle = this.angle - angle;
        this.setPositionAndAngleOnBoard(this.position, this.angle);
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
        this.viewInDirection(direction);
    };
    return LivingObject;
}(boardObject_1.BoardObject));
exports.LivingObject = LivingObject;


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
var node_1 = __webpack_require__(1);
var board_1 = __webpack_require__(0);
var anthill_1 = __webpack_require__(6);
var sugar_1 = __webpack_require__(4);
var apple_1 = __webpack_require__(5);
var myant_1 = __webpack_require__(9);
var boardObject_1 = __webpack_require__(3);
var keys_1 = __webpack_require__(11);
var bug_1 = __webpack_require__(12);
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this, 'div', 'game') || this;
        _this.currentAngle = 300.2;
        _this.board = new board_1.Board();
        _this.anthill = new anthill_1.Anthill();
        _this.sugar = [];
        _this.apples = [];
        _this.ants = [];
        _this.bugs = [];
        _this.spawnDelay = 6;
        _this.maxAnts = 50;
        _this.turn = 0;
        _this.pause = false;
        _this.bootstrap();
        return _this;
    }
    Game.prototype.start = function () {
        this.run();
    };
    Game.prototype.bootstrap = function () {
        this.addItem(this.board.getNode());
        this.sugar.push(new sugar_1.Sugar({ x: board_1.Board.randomNegative(20), y: board_1.Board.randomPositive(20) }));
        this.sugar.push(new sugar_1.Sugar({ x: board_1.Board.randomPositive(20), y: board_1.Board.randomPositive(20) }));
        this.sugar.push(new sugar_1.Sugar({ x: board_1.Board.randomPositive(20), y: board_1.Board.randomNegative(20) }));
        this.sugar.push(new sugar_1.Sugar({ x: board_1.Board.randomNegative(20), y: board_1.Board.randomNegative(20) }));
        this.apples.push(new apple_1.Apple({ x: board_1.Board.randomNegative(20), y: board_1.Board.randomNegative(50) }));
        this.bugs.push(new bug_1.Bug());
        this.board.addItem(this.anthill.getNode());
        for (var _i = 0, _a = this.sugar; _i < _a.length; _i++) {
            var sugar = _a[_i];
            this.board.addItem(sugar.getNode());
        }
        for (var _b = 0, _c = this.apples; _b < _c.length; _b++) {
            var apple = _c[_b];
            this.board.addItem(apple.getNode());
        }
        for (var _d = 0, _e = this.bugs; _d < _e.length; _d++) {
            var bug = _e[_d];
            this.board.addItem(bug.getNode());
        }
        document.body.appendChild(this.getNode());
        this.initKeyboardListener();
    };
    Game.prototype.initKeyboardListener = function () {
        var _this = this;
        document.addEventListener('keydown', function (event) {
            if (event.which === keys_1.Keys.P) {
                _this.pause = !_this.pause;
            }
            if (event.which === keys_1.Keys.D) {
                _this.getNode().classList.toggle('debug');
            }
        });
    };
    /**
     * main loop
     */
    Game.prototype.run = function () {
        var _this = this;
        if (!this.pause) {
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
                if (ant_1.isDead()) {
                    continue;
                }
                // all sugar
                for (var _b = 0, _c = this.sugar; _b < _c.length; _b++) {
                    var sugar = _c[_b];
                    if (ant_1.sees(sugar)) {
                        ant_1.seesSugar(sugar);
                    }
                    if (ant_1.collidesdWith(sugar)) {
                        ant_1.reachSugar(sugar);
                    }
                }
                // all apples
                for (var _d = 0, _e = this.apples; _d < _e.length; _d++) {
                    var apple = _e[_d];
                    if (ant_1.sees(apple)) {
                        ant_1.seesApple(apple);
                    }
                    // one, so they have to reach the center
                    if (boardObject_1.BoardObject.collision(ant_1.getPosition(), ant_1.getSize(), apple.getPosition(), 1)) {
                        ant_1.reachApple(apple);
                    }
                }
                for (var _f = 0, _g = this.bugs; _f < _g.length; _f++) {
                    var bug = _g[_f];
                    if (ant_1.sees(bug)) {
                        ant_1.seesBug(bug);
                    }
                    if (ant_1.collidesdWith(bug)) {
                        ant_1.reachBug(bug);
                    }
                }
                var antLoad = ant_1.getLoad();
                if (antLoad instanceof sugar_1.Sugar) {
                    if (this.sugar.indexOf(antLoad) < 0) {
                        this.sugar.push(antLoad);
                        this.board.addItem(antLoad.getNode());
                    }
                }
                if (antLoad) {
                    if (antLoad instanceof apple_1.Apple) {
                        if (antLoad.getCarrier()[0]) {
                            antLoad.setPositionOnBoard(antLoad.getCarrier()[0].getPosition());
                        }
                    }
                    else {
                        antLoad.setPositionOnBoard(ant_1.getPosition());
                    }
                }
                if (ant_1.collidesdWith(this.anthill)) {
                    ant_1.rest();
                    ant_1.reachAnthill();
                    // dropt at anthill
                    if (antLoad) {
                        if (antLoad && !ant_1.getLoad()) {
                            if (antLoad instanceof sugar_1.Sugar) {
                                this.sugar.splice(this.sugar.indexOf(antLoad));
                                antLoad.destroy(ant_1);
                            }
                            if (antLoad instanceof apple_1.Apple) {
                                this.apples.splice(this.apples.indexOf(antLoad));
                                antLoad.destroy(ant_1);
                            }
                            // TODO: add points;
                        }
                        if (antLoad instanceof apple_1.Apple) {
                            antLoad.destroy();
                        }
                    }
                }
                ant_1.live(this.turn);
            }
            for (var _h = 0, _j = this.bugs; _h < _j.length; _h++) {
                var bug = _j[_h];
                for (var _k = 0, _l = this.ants; _k < _l.length; _k++) {
                    var ant_2 = _l[_k];
                    if (ant_2.isDead()) {
                        continue;
                    }
                    if (bug.sees(ant_2)) {
                        bug.seesAnt(ant_2);
                    }
                    if (bug.collidesdWith(ant_2)) {
                        ant_2.decreaseEngergy(10);
                        if (ant_2.getEngery() <= 0) {
                            ant_2.destroy();
                        }
                    }
                }
                bug.live(this.turn);
            }
            this.turn++;
        }
        window.requestAnimationFrame(function () {
            _this.run();
        });
    };
    return Game;
}(node_1.Node));
var game = new Game();
game.start();


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
var ant_1 = __webpack_require__(10);
var sugar_1 = __webpack_require__(4);
var apple_1 = __webpack_require__(5);
var board_1 = __webpack_require__(0);
var MyAnt = /** @class */ (function (_super) {
    __extends(MyAnt, _super);
    function MyAnt(angle) {
        return _super.call(this, angle) || this;
    }
    MyAnt.prototype.getTired = function () {
        this.goToAnthill();
    };
    MyAnt.prototype.seesSugar = function (sugar) {
        if (!this.getLoad() && sugar.getAmount() > 0 && sugar.ants.length < 1) {
            this.goToTarget(sugar);
        }
    };
    MyAnt.prototype.reachSugar = function (sugar) {
        if (!this.getLoad() && sugar.getAmount() > 0 && sugar.ants.length < 1) {
            this.takeObject(sugar);
            this.goToAnthill();
        }
    };
    MyAnt.prototype.reachAnthill = function () {
        if (this.getLoad() instanceof sugar_1.Sugar) {
            this.turnAround();
        }
        if (this.getLoad() instanceof apple_1.Apple) {
            this.rotate(board_1.Board.getRandomAngle());
        }
        this.drop();
    };
    MyAnt.prototype.reachApple = function (apple) {
        if (!this.getLoad() && apple.getCarrier().length < 5) {
            this.takeObject(apple);
            this.goToAnthill();
        }
    };
    MyAnt.prototype.seesApple = function (apple) {
        if (!this.getLoad() && apple.getCarrier().length < 5) {
            this.goToTarget(apple);
        }
    };
    MyAnt.prototype.seesBug = function (bug) {
        this.turnAround();
    };
    MyAnt.prototype.reachBug = function (bug) {
        this.turnAround();
    };
    return MyAnt;
}(ant_1.Ant));
exports.MyAnt = MyAnt;


/***/ }),
/* 10 */
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
var livingObject_1 = __webpack_require__(7);
var sugar_1 = __webpack_require__(4);
var apple_1 = __webpack_require__(5);
var anthill_1 = __webpack_require__(6);
var Ant = /** @class */ (function (_super) {
    __extends(Ant, _super);
    function Ant(angle) {
        var _this = _super.call(this, { x: 0, y: 0 }, 5, 20, angle) || this;
        _this.speed = 5;
        _this.dead = false;
        _this.currentRange = Ant.RANGE;
        _this.restDistance = 0;
        _this.cloud = 0;
        _this.currentEnergy = Ant.ENERGY;
        _this.turn = 0;
        _this.tired = false;
        _this.addCls('ant');
        _this.initMouseListener();
        return _this;
    }
    Ant.prototype.initMouseListener = function () {
        var _this = this;
        this.getNode().addEventListener('click', function (event) {
            console.log(_this);
        });
    };
    Ant.prototype.setSpeed = function () {
        if (!this.currentLoad) {
            this.speed = 1;
        }
        if (this.currentLoad instanceof sugar_1.Sugar) {
            this.speed = 0.5;
        }
        if (this.currentLoad instanceof apple_1.Apple) {
            if (this.currentLoad.getCarrier().length > 1) {
                this.speed = this.currentLoad.getCarrier().length * 0.05;
            }
            else {
                this.speed = 0.05;
            }
        }
        if (this.speed > Ant.SPEED) {
            this.speed = Ant.SPEED;
        }
    };
    Ant.prototype.live = function (turn) {
        this.turn = turn;
        if (this.currentEnergy <= 0) {
            this.destroy();
            return;
        }
        if (this.currentEnergy < Ant.ENERGY) {
            this.currentEnergy++;
        }
        this.tired = this.currentRange <= Ant.RANGE / 3 * 2;
        if (this.tired) {
            this.getTired();
            if (!this.getNode().classList.contains('tired')) {
                this.getNode().classList.add('tired');
            }
        }
        else {
            this.getNode().classList.remove('tired');
        }
        this.setSpeed();
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
        this.goToPosition(anthill_1.Anthill.POSITION);
    };
    Ant.prototype.drop = function () {
        if (this.currentLoad) {
            // console.log(this.position, Anthill.POSITION, this.position == Anthill.POSITION);
            // if (this.position == Anthill.POSITION) {
            //     this.currentLoad.destroy();
            // }
            if (this.currentLoad instanceof apple_1.Apple) {
                this.currentLoad.stopCarrying(this);
            }
            this.currentLoad = undefined;
        }
    };
    Ant.prototype.takeObject = function (boardObject) {
        if (!boardObject.collidesdWith(this)) {
            return;
        }
        if (this.currentLoad) {
            this.drop();
        }
        if (boardObject instanceof sugar_1.Sugar) {
            this.currentLoad = boardObject.reduce(this);
        }
        if (boardObject instanceof apple_1.Apple) {
            this.currentLoad = boardObject;
            boardObject.carry(this);
        }
    };
    Ant.prototype.decreaseEngergy = function (amount) {
        this.currentEnergy -= amount;
    };
    Ant.prototype.isDead = function () {
        return this.dead;
    };
    Ant.prototype.destroy = function () {
        this.dead = true;
        this.drop();
        _super.prototype.destroy.call(this);
    };
    Ant.prototype.getLoad = function () {
        return this.currentLoad;
    };
    Ant.prototype.getEngery = function () {
        return this.currentEnergy;
    };
    Ant.WIDTH = 10;
    Ant.HEIGHT = 10;
    Ant.ENERGY = 500;
    Ant.RANGE = 5000;
    Ant.SPEED = 1;
    Ant.TURN_AROUND_SPEED = 5;
    return Ant;
}(livingObject_1.LivingObject));
exports.Ant = Ant;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Keys;
(function (Keys) {
    Keys[Keys["TAB"] = 9] = "TAB";
    Keys[Keys["ENTER"] = 13] = "ENTER";
    Keys[Keys["SHIFT"] = 16] = "SHIFT";
    Keys[Keys["CTRL"] = 17] = "CTRL";
    Keys[Keys["ALT"] = 18] = "ALT";
    Keys[Keys["ESC"] = 27] = "ESC";
    Keys[Keys["POS1"] = 36] = "POS1";
    Keys[Keys["LEFT"] = 37] = "LEFT";
    Keys[Keys["UP"] = 38] = "UP";
    Keys[Keys["RIGHT"] = 39] = "RIGHT";
    Keys[Keys["DOWN"] = 40] = "DOWN";
    Keys[Keys["SPACE"] = 32] = "SPACE";
    Keys[Keys["PAGE_UP"] = 33] = "PAGE_UP";
    Keys[Keys["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    Keys[Keys["P"] = 80] = "P";
    Keys[Keys["D"] = 68] = "D";
})(Keys = exports.Keys || (exports.Keys = {}));


/***/ }),
/* 12 */
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
var livingObject_1 = __webpack_require__(7);
var board_1 = __webpack_require__(0);
var Bug = /** @class */ (function (_super) {
    __extends(Bug, _super);
    function Bug() {
        var _this = _super.call(this, board_1.Board.randomPosition(20), 10, 20, board_1.Board.getRandomAngle()) || this;
        _this.speed = .25;
        _this.addCls('bug');
        return _this;
    }
    Bug.prototype.live = function (turn) {
        if (Math.random() * 1000 > 999) {
            this.rotate(board_1.Board.getRandomAngle());
        }
        this.go();
    };
    Bug.prototype.seesAnt = function (ant) {
        this.goToTarget(ant);
    };
    return Bug;
}(livingObject_1.LivingObject));
exports.Bug = Bug;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY1YjFjY2IyZDE2OTk4YzMzM2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9ub2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWFkT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VnYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hbnRoaWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9saXZpbmdPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLG9DQUE4QjtBQUk5QjtJQUEyQix5QkFBSTtJQUszQjtRQUFBLFlBQ0ksa0JBQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUV4QjtRQURHLEtBQUksQ0FB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QUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHFCQUFPLEdBQWQsVUFBZSxHQUFRO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLENBcEJ3QiwyQkFBWSxHQW9CcEM7QUFwQlksa0JBQUciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODY1YjFjY2IyZDE2OTk4YzMzM2YiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA1MDA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDUwMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2JvYXJkJyk7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdjZW50ZXInKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLndpZHRoID0gQm9hcmQuV0lEVEggKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuaGVpZ2h0ID0gQm9hcmQuSEVJR0hUICsgJ3B4JztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldENvcmRzKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICB2YXIgY29yZHMgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgaGFsZkJvYXJkV2lkdGggPSBCb2FyZC5XSURUSCAvIDI7XG4gICAgICAgIHZhciBoYWxmQm9hcmRIZWlnaHQgPSBCb2FyZC5IRUlHSFQgLyAyO1xuICAgICAgICBpZiAocG9zaXRpb24ueCA8IGhhbGZCb2FyZFdpZHRoICogLTEpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPSBoYWxmQm9hcmRXaWR0aCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi54ID4gaGFsZkJvYXJkV2lkdGgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPSBoYWxmQm9hcmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueSA8IGhhbGZCb2FyZEhlaWdodCAqIC0xKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi55ID0gaGFsZkJvYXJkSGVpZ2h0ICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiBoYWxmQm9hcmRIZWlnaHQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBoYWxmQm9hcmRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29yZHMueCA9IChoYWxmQm9hcmRXaWR0aCArIHBvc2l0aW9uLngpIC0gcmFkaXVzO1xuICAgICAgICBjb3Jkcy55ID0gKGhhbGZCb2FyZFdpZHRoICsgcG9zaXRpb24ueSkgLSByYWRpdXM7XG4gICAgICAgIHJldHVybiBjb3JkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGF0VGhlRWRnZShwb3NpdGlvbjogQm9hcmRQb3NpdGlvbik6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaGFsZkJvYXJkV2lkdGggPSBCb2FyZC5XSURUSCAvIDI7XG4gICAgICAgIHZhciBoYWxmQm9hcmRIZWlnaHQgPSBCb2FyZC5IRUlHSFQgLyAyO1xuICAgICAgICByZXR1cm4gcG9zaXRpb24ueCA9PT0gaGFsZkJvYXJkV2lkdGggKiAtMSB8fCBwb3NpdGlvbi54ID09PSBoYWxmQm9hcmRXaWR0aCB8fFxuICAgICAgICAgICAgcG9zaXRpb24ueSA9PT0gaGFsZkJvYXJkSGVpZ2h0ICogLTEgfHwgcG9zaXRpb24ueSA9PT0gaGFsZkJvYXJkSGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tTmVnYXRpdmUocGFkZGluZzogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAwIC0gdGhpcy5yYW5kb21Qb3NpdGl2ZShwYWRkaW5nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbVBvc2l0aXZlKHBhZGRpbmc6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKEJvYXJkLldJRFRIIC8gMiAtIHBhZGRpbmcpKSArIDA7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Qb3NpdGlvbihwYWRkaW5nOiBudW1iZXIgPSAwKTogQm9hcmRQb3NpdGlvbiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAoKE1hdGgucmFuZG9tKCkgKiAxKSA+IC41KSA/IEJvYXJkLnJhbmRvbVBvc2l0aXZlKHBhZGRpbmcpIDogQm9hcmQucmFuZG9tTmVnYXRpdmUocGFkZGluZyksXG4gICAgICAgICAgICB5OiAoKE1hdGgucmFuZG9tKCkgKiAxKSA+IC41KSA/IEJvYXJkLnJhbmRvbVBvc2l0aXZlKHBhZGRpbmcpIDogQm9hcmQucmFuZG9tTmVnYXRpdmUocGFkZGluZyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUFuZ2xlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjApO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZC50cyIsImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBwcm90ZWN0ZWQgbm9kZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNsczogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb2RlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRDbHMoLi4uY2xzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCguLi5jbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ub2RlLnRzIiwiaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIERlYWRPYmplY3QgZXh0ZW5kcyBCb2FyZE9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHJhZGl1cyk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdkZWFkLW9iamVjdCcpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWFkT2JqZWN0LnRzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZE9iamVjdCBleHRlbmRzIE5vZGUge1xuXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uO1xuICAgIHByb3RlY3RlZCB2aWV3UmFkaXVzOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHJhZGl1czogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBhbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24/OiBCb2FyZFBvc2l0aW9uLCByYWRpdXM/OiBudW1iZXIsIHZpZXdSYWRpdXM/OiBudW1iZXIsIGFuZ2xlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnYm9hcmQtb2JqZWN0Jyk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLnNldFNpemUoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB2aWV3UmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy52aWV3UmFkaXVzID0gdmlld1JhZGl1cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYW5nbGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbkFuZEFuZ2xlT25Cb2FyZChwb3NpdGlvbiwgYW5nbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uT25Cb2FyZChwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2aWV3UmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbGV0IHZpZXdSYWRpdXNPYmo6IE5vZGUgPSBuZXcgTm9kZSgnc3BhbicsICd2aWV3UmFkaXVzJyk7XG4gICAgICAgICAgICB2aWV3UmFkaXVzT2JqLmFkZENscygnY2VudGVyJyk7XG4gICAgICAgICAgICB2aWV3UmFkaXVzT2JqLmdldE5vZGUoKS5zdHlsZS53aWR0aCA9IHZpZXdSYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgICAgIHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpLnN0eWxlLmhlaWdodCA9IHZpZXdSYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbSh2aWV3UmFkaXVzT2JqLmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2l6ZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IHRoaXMucmFkaXVzICogMiArICdweCc7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5yYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjb2xsaWRlc2RXaXRoKG90aGVyQm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBCb2FyZE9iamVjdC5jb2xsaXNpb24odGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMsIG90aGVyQm9hcmRPYmplY3QucG9zaXRpb24sIG90aGVyQm9hcmRPYmplY3QucmFkaXVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VlcyhvdGhlckJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gQm9hcmRPYmplY3QuY29sbGlzaW9uKHRoaXMucG9zaXRpb24sIHRoaXMudmlld1JhZGl1cywgb3RoZXJCb2FyZE9iamVjdC5wb3NpdGlvbiwgb3RoZXJCb2FyZE9iamVjdC5nZXRTaXplKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbkFuZEFuZ2xlT25Cb2FyZChwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgYW5nbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdmFyIGNvcmRzID0gQm9hcmQuZ2V0Q29yZHModGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMpO1xuICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSBbJ3RyYW5zbGF0ZSgnICsgY29yZHMueCArICdweCwgJyArIGNvcmRzLnkgKyAncHgpJywgJ3JvdGF0ZSgnICsgdGhpcy5hbmdsZSArICdkZWcpJ10uam9pbignICcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbk9uQm9hcmQocG9zaXRpb246IEJvYXJkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB2YXIgY29yZHMgPSBCb2FyZC5nZXRDb3Jkcyh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIHZhciByb3RhdGVNYXRjaGVzID0gdHJhbnNmb3JtLm1hdGNoKC8ocm90YXRlXFwoLio/XFwpKS9nKTtcbiAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiByb3RhdGVNYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSBbJ3RyYW5zbGF0ZSgnICsgY29yZHMueCArICdweCwgJyArIGNvcmRzLnkgKyAncHgpJywgcm90YXRlTWF0Y2hlc10uam9pbignICcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgY29yZHMueCArICdweCwgJyArIGNvcmRzLnkgKyAncHgpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB2aWV3SW5EaXJlY3Rpb24oYW5nbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIHZhciB0cmFuc2xhdGVNYXRjaGVzID0gdHJhbnNmb3JtLm1hdGNoKC8odHJhbnNsYXRlXFwoLio/XFwpKS9nKTtcbiAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2xhdGVNYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSBbdHJhbnNsYXRlTWF0Y2hlc1swXSwgJ3JvdGF0ZSgnICsgdGhpcy5hbmdsZSArICdkZWcpJ10uam9pbignICcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgYW5nbGUgKyAnZGVnKSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogQm9hcmRQb3NpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSYWRpdXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWaWV3UmFkaXVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdSYWRpdXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzICogMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbGxpc2lvbihwb3NpdGlvbkE6IEJvYXJkUG9zaXRpb24sIHNpemVBOiBudW1iZXIsIHBvc2l0aW9uQjogQm9hcmRQb3NpdGlvbiwgc2l6ZUI6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcmVjdDEgPSB7XG4gICAgICAgICAgICB4OiBwb3NpdGlvbkEueCxcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uQS55LFxuICAgICAgICAgICAgd2lkdGg6IHNpemVBLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplQVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZWN0MiA9IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uQi54LFxuICAgICAgICAgICAgeTogcG9zaXRpb25CLnksXG4gICAgICAgICAgICB3aWR0aDogc2l6ZUIsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemVCXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHJlY3QxLnggPCByZWN0Mi54ICsgcmVjdDIud2lkdGggJiZcbiAgICAgICAgICAgIHJlY3QxLnggKyByZWN0MS53aWR0aCA+IHJlY3QyLnggJiZcbiAgICAgICAgICAgIHJlY3QxLnkgPCByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0ICYmXG4gICAgICAgICAgICByZWN0MS5oZWlnaHQgKyByZWN0MS55ID4gcmVjdDIueTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JvYXJkT2JqZWN0LnRzIiwiaW1wb3J0IHsgRGVhZE9iamVjdCB9IGZyb20gXCIuL2RlYWRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBBbnQgfSBmcm9tIFwiLi9hbnRcIjtcblxuZXhwb3J0IGNsYXNzIFN1Z2FyIGV4dGVuZHMgRGVhZE9iamVjdCB7XG5cbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICBhbnRzOiBBcnJheTxBbnQ+ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIgPSAxMCwgYW1vdW50OiBudW1iZXIgPSAyMCwgYW50PzogQW50KSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCByYWRpdXMpO1xuICAgICAgICB0aGlzLmFkZENscygnc3VnYXInKTtcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgICAgIGlmIChhbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW50cy5wdXNoKGFudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVkdWNlKGFudDogQW50KTogU3VnYXIge1xuICAgICAgICBpZiAodGhpcy5hbW91bnQgPT09IDEgJiYgdGhpcy5hbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW1vdW50LS07XG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTaXplKCk7XG4gICAgICAgIHJldHVybiBuZXcgU3VnYXIodGhpcy5wb3NpdGlvbiwgMSwgMSwgYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QW1vdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFtb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveShhbnQ/OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGFudCkge1xuICAgICAgICAgICAgdGhpcy5hbnRzLnNwbGljZSh0aGlzLmFudHMuaW5kZXhPZihhbnQpKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1Z2FyLnRzIiwiaW1wb3J0IHsgRGVhZE9iamVjdCB9IGZyb20gJy4vZGVhZE9iamVjdCc7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSAnLi9ib2FyZFBvc2l0aW9uJztcbmltcG9ydCB7IEFudCB9IGZyb20gJy4vYW50JztcblxuZXhwb3J0IGNsYXNzIEFwcGxlIGV4dGVuZHMgRGVhZE9iamVjdCB7XG4gICAgcHJpdmF0ZSBjYXJyaWVyOiBBcnJheTxBbnQ+ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgMjApO1xuICAgICAgICB0aGlzLmFkZENscygnYXBwbGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FycnkoYW50OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYXJyaWVyLnB1c2goYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcENhcnJ5aW5nKGFudDogQW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2Fycmllci5zcGxpY2UodGhpcy5jYXJyaWVyLmluZGV4T2YoYW50KSwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENhcnJpZXIoKTogQXJyYXk8QW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnJpZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koYW50PzogQW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNhcnJpZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZXIuc3BsaWNlKHRoaXMuY2Fycmllci5pbmRleE9mKGFudCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jYXJyaWVyLmxlbmd0aCkge1xuICAgICAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHBsZS50cyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IERlYWRPYmplY3QgfSBmcm9tIFwiLi9kZWFkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQW50aGlsbCBleHRlbmRzIERlYWRPYmplY3Qge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gMjA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDIwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFESVVTOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIFBPU0lUSU9OOiBCb2FyZFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQW50aGlsbC5QT1NJVElPTiwgQW50aGlsbC5SQURJVVMpO1xuICAgICAgICB0aGlzLmFkZENscygnYW50aGlsbCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbnRoaWxsLnRzIiwiaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExpdmluZ09iamVjdCBleHRlbmRzIEJvYXJkT2JqZWN0IHtcblxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogQm9hcmRQb3NpdGlvbjtcbiAgICBwcm90ZWN0ZWQgYW5nbGU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlciwgdmlld1JhZGl1cz86IG51bWJlciwgYW5nbGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHJhZGl1cywgdmlld1JhZGl1cywgYW5nbGUpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2xpdmluZy1vYmplY3QnKTtcbiAgICB9XG5cbiAgICBnbygpIHtcbiAgICAgICAgbGV0IHRtcEFuZ2xlID0gdGhpcy5hbmdsZTtcbiAgICAgICAgaWYgKEJvYXJkLmF0VGhlRWRnZSh0aGlzLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgdG1wQW5nbGUgPSB0bXBBbmdsZSAtIDkwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcmM6IG51bWJlciA9IE1hdGguUEkgKiB0bXBBbmdsZSAvIDE4MC4wXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IChNYXRoLmNvcyhhcmMpICogdGhpcy5zcGVlZCkgKyB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IChNYXRoLnNpbihhcmMpICogdGhpcy5zcGVlZCkgKyB0aGlzLnBvc2l0aW9uLnk7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQodGhpcy5wb3NpdGlvbiwgdG1wQW5nbGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0dXJuQXJvdW5kKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdGF0ZSgxODApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByb3RhdGUoYW5nbGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtIGFuZ2xlO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uQW5kQW5nbGVPbkJvYXJkKHRoaXMucG9zaXRpb24sIHRoaXMuYW5nbGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnb1RvVGFyZ2V0KGJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdvVG9Qb3NpdGlvbihib2FyZE9iamVjdC5nZXRQb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ29Ub1Bvc2l0aW9uKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCBuZXdYID0gdGhpcy5wb3NpdGlvbi54IC0gcG9zaXRpb24ueDtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnBvc2l0aW9uLnkgLSBwb3NpdGlvbi55O1xuICAgICAgICBpZiAobmV3WCA8IDApIHtcbiAgICAgICAgICAgIG5ld1ggPSBuZXdYICogLTFcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3WSA8IDApIHtcbiAgICAgICAgICAgIG5ld1kgPSBuZXdZICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpc3RhbmNlOiBudW1iZXIgPSBNYXRoLnNxcnQobmV3WCAqIG5ld1ggKyBuZXdZICogbmV3WSk7XG4gICAgICAgIGxldCBmcmFjdGlvbjogbnVtYmVyID0gbmV3WSAvIGRpc3RhbmNlO1xuICAgICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXIgPSBNYXRoLmFzaW4oZnJhY3Rpb24pICogMTgwIC8gTWF0aC5QSTtcblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPCBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55ID4gcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMzYwIC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb24oKS54ID4gcG9zaXRpb24ueCAmJiB0aGlzLmdldFBvc2l0aW9uKCkueSA+IHBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiArPSAxODA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPiBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55IDwgcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTgwIC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld0luRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgbGl2ZSh0dXJuOiBudW1iZXIpOiB2b2lkO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGl2aW5nT2JqZWN0LnRzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IEFudGhpbGwgfSBmcm9tIFwiLi9hbnRoaWxsXCI7XG5pbXBvcnQgeyBTdWdhciB9IGZyb20gXCIuL3N1Z2FyXCI7XG5pbXBvcnQgeyBBbnQgfSBmcm9tIFwiLi9hbnRcIjtcbmltcG9ydCB7IEFwcGxlIH0gZnJvbSBcIi4vYXBwbGVcIjtcbmltcG9ydCB7IE15QW50IH0gZnJvbSBcIi4vbXlhbnRcIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEtleXMgfSBmcm9tIFwiLi9rZXlzXCI7XG5pbXBvcnQgeyBCdWcgfSBmcm9tIFwiLi9idWdcIjtcblxuY2xhc3MgR2FtZSBleHRlbmRzIE5vZGUge1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5nbGU6IG51bWJlciA9IDMwMC4yO1xuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgcHJpdmF0ZSBhbnRoaWxsOiBBbnRoaWxsID0gbmV3IEFudGhpbGwoKTtcbiAgICBwcml2YXRlIHN1Z2FyOiBBcnJheTxTdWdhcj4gPSBbXTtcbiAgICBwcml2YXRlIGFwcGxlczogQXJyYXk8QXBwbGU+ID0gW107XG4gICAgcHJpdmF0ZSBhbnRzOiBBcnJheTxBbnQ+ID0gW107XG4gICAgcHJpdmF0ZSBidWdzOiBBcnJheTxCdWc+ID0gW107XG4gICAgcHJpdmF0ZSBzcGF3bkRlbGF5OiBudW1iZXIgPSA2O1xuICAgIHByaXZhdGUgbWF4QW50czogbnVtYmVyID0gNTA7XG4gICAgcHJpdmF0ZSB0dXJuOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0aGlzLmJvYXJkLmdldE5vZGUoKSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbVBvc2l0aXZlKDIwKSB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiBCb2FyZC5yYW5kb21Qb3NpdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbVBvc2l0aXZlKDIwKSB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiBCb2FyZC5yYW5kb21Qb3NpdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDIwKSB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDIwKSB9KSk7XG4gICAgICAgIHRoaXMuYXBwbGVzLnB1c2gobmV3IEFwcGxlKHsgeDogQm9hcmQucmFuZG9tTmVnYXRpdmUoMjApLCB5OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSg1MCkgfSkpO1xuICAgICAgICB0aGlzLmJ1Z3MucHVzaChuZXcgQnVnKCkpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0odGhpcy5hbnRoaWxsLmdldE5vZGUoKSk7XG4gICAgICAgIGZvciAobGV0IHN1Z2FyIG9mIHRoaXMuc3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShzdWdhci5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGFwcGxlIG9mIHRoaXMuYXBwbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYXBwbGUuZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBidWcgb2YgdGhpcy5idWdzKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYnVnLmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdldE5vZGUoKSk7XG4gICAgICAgIHRoaXMuaW5pdEtleWJvYXJkTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRLZXlib2FyZExpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuUCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UgPSAhdGhpcy5wYXVzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5EKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnRvZ2dsZSgnZGVidWcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFpbiBsb29wXG4gICAgICovXG4gICAgcHJpdmF0ZSBydW4oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBhdXNlKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFudHMubGVuZ3RoIDwgdGhpcy5tYXhBbnRzICYmIHRoaXMudHVybiAlIHRoaXMuc3Bhd25EZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBhbnQgPSBuZXcgTXlBbnQodGhpcy5jdXJyZW50QW5nbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW50cy5wdXNoKGFudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGFudC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2xlIC09IDcuMjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5nbGUgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2xlICs9IDM2MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGFudCBvZiB0aGlzLmFudHMpIHtcblxuICAgICAgICAgICAgICAgIGlmIChhbnQuaXNEZWFkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWxsIHN1Z2FyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc3VnYXIgb2YgdGhpcy5zdWdhcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LnNlZXMoc3VnYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuc2Vlc1N1Z2FyKHN1Z2FyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LmNvbGxpZGVzZFdpdGgoc3VnYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hTdWdhcihzdWdhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhbGwgYXBwbGVzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYXBwbGUgb2YgdGhpcy5hcHBsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudC5zZWVzKGFwcGxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnNlZXNBcHBsZShhcHBsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gb25lLCBzbyB0aGV5IGhhdmUgdG8gcmVhY2ggdGhlIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoQm9hcmRPYmplY3QuY29sbGlzaW9uKGFudC5nZXRQb3NpdGlvbigpLCBhbnQuZ2V0U2l6ZSgpLCBhcHBsZS5nZXRQb3NpdGlvbigpLCAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnJlYWNoQXBwbGUoYXBwbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYnVnIG9mIHRoaXMuYnVncykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LnNlZXMoYnVnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnNlZXNCdWcoYnVnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnQuY29sbGlkZXNkV2l0aChidWcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hCdWcoYnVnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBhbnRMb2FkOiBCb2FyZE9iamVjdCA9IGFudC5nZXRMb2FkKCk7XG4gICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWdhci5pbmRleE9mKGFudExvYWQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWdhci5wdXNoKGFudExvYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGFudExvYWQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkIGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkLmdldENhcnJpZXIoKVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuc2V0UG9zaXRpb25PbkJvYXJkKGFudExvYWQuZ2V0Q2FycmllcigpWzBdLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50TG9hZC5zZXRQb3NpdGlvbk9uQm9hcmQoYW50LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFudC5jb2xsaWRlc2RXaXRoKHRoaXMuYW50aGlsbCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbnQucmVzdCgpO1xuICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hBbnRoaWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRyb3B0IGF0IGFudGhpbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkICYmICFhbnQuZ2V0TG9hZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Z2FyLnNwbGljZSh0aGlzLnN1Z2FyLmluZGV4T2YoYW50TG9hZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLmRlc3Ryb3koYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGxlcy5zcGxpY2UodGhpcy5hcHBsZXMuaW5kZXhPZihhbnRMb2FkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuZGVzdHJveShhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZGQgcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhbnQubGl2ZSh0aGlzLnR1cm4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBidWcgb2YgdGhpcy5idWdzKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhbnQgb2YgdGhpcy5hbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnQuaXNEZWFkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWcuc2VlcyhhbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWcuc2Vlc0FudChhbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWcuY29sbGlkZXNkV2l0aChhbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuZGVjcmVhc2VFbmdlcmd5KDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnQuZ2V0RW5nZXJ5KCkgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidWcubGl2ZSh0aGlzLnR1cm4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnR1cm4rKztcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG52YXIgZ2FtZSA9IG5ldyBHYW1lKCk7XG5nYW1lLnN0YXJ0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS50cyIsImltcG9ydCB7IEFudCB9IGZyb20gXCIuL2FudFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IFN1Z2FyIH0gZnJvbSBcIi4vc3VnYXJcIjtcbmltcG9ydCB7IEFwcGxlIH0gZnJvbSBcIi4vYXBwbGVcIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IEJ1ZyB9IGZyb20gXCIuL2J1Z1wiO1xuXG5leHBvcnQgY2xhc3MgTXlBbnQgZXh0ZW5kcyBBbnQge1xuXG4gICAgY29uc3RydWN0b3IoYW5nbGU6IG51bWJlcikge1xuICAgICAgICBzdXBlcihhbmdsZSk7XG4gICAgfVxuXG4gICAgZ2V0VGlyZWQoKSB7XG4gICAgICAgIHRoaXMuZ29Ub0FudGhpbGwoKTtcbiAgICB9XG5cbiAgICBzZWVzU3VnYXIoc3VnYXI6IFN1Z2FyKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgc3VnYXIuZ2V0QW1vdW50KCkgPiAwICYmIHN1Z2FyLmFudHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5nb1RvVGFyZ2V0KHN1Z2FyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlYWNoU3VnYXIoc3VnYXI6IFN1Z2FyKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgc3VnYXIuZ2V0QW1vdW50KCkgPiAwICYmIHN1Z2FyLmFudHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy50YWtlT2JqZWN0KHN1Z2FyKTtcbiAgICAgICAgICAgIHRoaXMuZ29Ub0FudGhpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlYWNoQW50aGlsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TG9hZCgpIGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMudHVybkFyb3VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldExvYWQoKSBpbnN0YW5jZW9mIEFwcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZShCb2FyZC5nZXRSYW5kb21BbmdsZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3AoKTtcblxuICAgIH1cblxuICAgIHJlYWNoQXBwbGUoYXBwbGU6IEFwcGxlKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgYXBwbGUuZ2V0Q2FycmllcigpLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHRoaXMudGFrZU9iamVjdChhcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmdvVG9BbnRoaWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWVzQXBwbGUoYXBwbGU6IEFwcGxlKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgYXBwbGUuZ2V0Q2FycmllcigpLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub1RhcmdldChhcHBsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWVzQnVnKGJ1ZzogQnVnKSB7XG4gICAgICAgIHRoaXMudHVybkFyb3VuZCgpO1xuICAgIH1cblxuICAgIHJlYWNoQnVnKGJ1ZzogQnVnKSB7XG4gICAgICAgIHRoaXMudHVybkFyb3VuZCgpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL215YW50LnRzIiwiaW1wb3J0IHsgTGl2aW5nT2JqZWN0IH0gZnJvbSBcIi4vbGl2aW5nT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuaW1wb3J0IHsgQXBwbGUgfSBmcm9tIFwiLi9hcHBsZVwiO1xuaW1wb3J0IHsgQnVnIH0gZnJvbSBcIi4vYnVnXCI7XG5pbXBvcnQgeyBBbnRoaWxsIH0gZnJvbSBcIi4vYW50aGlsbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW50IGV4dGVuZHMgTGl2aW5nT2JqZWN0IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIEVORVJHWTogbnVtYmVyID0gNTAwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFOR0U6IG51bWJlciA9IDUwMDA7XG4gICAgcHVibGljIHN0YXRpYyBTUEVFRDogbnVtYmVyID0gMTtcblxuICAgIHB1YmxpYyBzdGF0aWMgVFVSTl9BUk9VTkRfU1BFRUQ6IG51bWJlciA9IDU7XG5cbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IG51bWJlciA9IDU7XG4gICAgcHJpdmF0ZSBkZWFkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IG51bWJlcjtcbiAgICBwcml2YXRlIHJvdW5kOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjdXJyZW50UmFuZ2U6IG51bWJlciA9IEFudC5SQU5HRTtcbiAgICBwcml2YXRlIHJlc3REaXN0YW5jZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNsb3VkOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBjdXJyZW50RW5lcmd5OiBudW1iZXIgPSBBbnQuRU5FUkdZO1xuICAgIHByaXZhdGUgdGFyZ2V0OiBCb2FyZE9iamVjdDtcbiAgICBwcml2YXRlIHR1cm46IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY3VycmVudExvYWQ6IEJvYXJkT2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IoYW5nbGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoeyB4OiAwLCB5OiAwIH0sIDUsIDIwLCBhbmdsZSk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdhbnQnKTtcbiAgICAgICAgdGhpcy5pbml0TW91c2VMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdE1vdXNlTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZSgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTcGVlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQuZ2V0Q2FycmllcigpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5jdXJyZW50TG9hZC5nZXRDYXJyaWVyKCkubGVuZ3RoICogMC4wNVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMC4wNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IEFudC5TUEVFRCkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IEFudC5TUEVFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpdmUodHVybjogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy50dXJuID0gdHVybjtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEVuZXJneSA8IEFudC5FTkVSR1kpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEVuZXJneSsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGlyZWQgPSB0aGlzLmN1cnJlbnRSYW5nZSA8PSBBbnQuUkFOR0UgLyAzICogMlxuICAgICAgICBpZiAodGhpcy50aXJlZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUaXJlZCgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RpcmVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuYWRkKCd0aXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSgndGlyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3BlZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UmFuZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmdvKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlc3QoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFJhbmdlID0gQW50LlJBTkdFO1xuICAgIH07XG5cbiAgICBnbygpIHtcbiAgICAgICAgc3VwZXIuZ28oKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UmFuZ2UgLT0gdGhpcy5zcGVlZDtcbiAgICB9XG5cbiAgICBpc1RpcmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aXJlZDtcbiAgICB9XG5cbiAgICBnb1RvQW50aGlsbCgpIHtcbiAgICAgICAgdGhpcy5nb1RvUG9zaXRpb24oQW50aGlsbC5QT1NJVElPTik7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24sIEFudGhpbGwuUE9TSVRJT04sIHRoaXMucG9zaXRpb24gPT0gQW50aGlsbC5QT1NJVElPTik7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbiA9PSBBbnRoaWxsLlBPU0lUSU9OKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50TG9hZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCBpbnN0YW5jZW9mIEFwcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9hZC5zdG9wQ2FycnlpbmcodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFrZU9iamVjdChib2FyZE9iamVjdDogQm9hcmRPYmplY3QpIHtcbiAgICAgICAgaWYgKCFib2FyZE9iamVjdC5jb2xsaWRlc2RXaXRoKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2FyZE9iamVjdCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gYm9hcmRPYmplY3QucmVkdWNlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2FyZE9iamVjdCBpbnN0YW5jZW9mIEFwcGxlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gYm9hcmRPYmplY3Q7XG4gICAgICAgICAgICBib2FyZE9iamVjdC5jYXJyeSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY3JlYXNlRW5nZXJneShhbW91bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnRFbmVyZ3kgLT0gYW1vdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0RlYWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlYWQ7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kcm9wKCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9hZCgpOiBCb2FyZE9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2FkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbmdlcnkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEVuZXJneTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRUaXJlZCgpOiB2b2lkO1xuICAgIGFic3RyYWN0IHNlZXNBcHBsZShhcHBsZTogQXBwbGUpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlYWNoQXBwbGUoYXBwbGU6IEFwcGxlKTogdm9pZDtcbiAgICBhYnN0cmFjdCBzZWVzU3VnYXIoc3VnZXI6IFN1Z2FyKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaFN1Z2FyKHN1Z2VyOiBTdWdhcik6IHZvaWQ7XG4gICAgYWJzdHJhY3Qgc2Vlc0J1ZyhidWc6IEJ1Zyk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcmVhY2hCdWcoYnVnOiBCdWcpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlYWNoQW50aGlsbCgpOiB2b2lkO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYW50LnRzIiwiZXhwb3J0IGVudW0gS2V5cyB7XG4gICAgVEFCID0gOSxcbiAgICBFTlRFUiA9IDEzLFxuICAgIFNISUZUID0gMTYsXG4gICAgQ1RSTCA9IDE3LFxuICAgIEFMVCA9IDE4LFxuICAgIEVTQyA9IDI3LFxuICAgIFBPUzEgPSAzNixcbiAgICBMRUZUID0gMzcsXG4gICAgVVAgPSAzOCxcbiAgICBSSUdIVCA9IDM5LFxuICAgIERPV04gPSA0MCxcbiAgICBTUEFDRSA9IDMyLFxuICAgIFBBR0VfVVAgPSAzMyxcbiAgICBQQUdFX0RPV04gPSAzNCxcbiAgICBQID0gODAsXG4gICAgRCA9IDY4XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva2V5cy50cyIsImltcG9ydCB7IExpdmluZ09iamVjdCB9IGZyb20gJy4vbGl2aW5nT2JqZWN0JztcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgeyBBbnQgfSBmcm9tICcuL2FudCc7XG5cbmV4cG9ydCBjbGFzcyBCdWcgZXh0ZW5kcyBMaXZpbmdPYmplY3Qge1xuICAgIHByb3RlY3RlZCBzcGVlZDogbnVtYmVyID0gLjI1O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEJvYXJkLnJhbmRvbVBvc2l0aW9uKDIwKSwgMTAsIDIwLCBCb2FyZC5nZXRSYW5kb21BbmdsZSgpKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2J1ZycpO1xuICAgIH1cblxuICAgIGxpdmUodHVybjogbnVtYmVyKSB7XG5cbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgKiAxMDAwID4gOTk5KSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZShCb2FyZC5nZXRSYW5kb21BbmdsZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ28oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2Vlc0FudChhbnQ6IEFudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdvVG9UYXJnZXQoYW50KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnVnLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==