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
    Board.getDistanceBetweenPositions = function (object1, object2) {
        var a = object1.x - object2.x;
        var b = object1.y - object2.y;
        return Math.sqrt(a * a + b * b);
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
            viewRadiusObj.getNode().style.width = viewRadius + 'px';
            viewRadiusObj.getNode().style.height = viewRadius + 'px';
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
        if (this.radius <= 1 && !this.amount) {
            this.radius = 0;
        }
        else {
            this.radius -= 0.5;
        }
        if (!this.amount) {
            this.destroy();
        }
        else {
            this.setSize();
        }
        return new Sugar(this.position, 1, 1, ant);
    };
    Sugar.prototype.stopCarrying = function (ant) {
        if (ant) {
            this.ants.splice(this.ants.indexOf(ant));
        }
    };
    Sugar.prototype.getAmount = function () {
        return this.amount;
    };
    Sugar.prototype.destroy = function (ant) {
        if (ant) {
            this.ants.splice(this.ants.indexOf(ant));
        }
        this.amount = 0;
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
        _this.dead = false;
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
    LivingObject.prototype.isDead = function () {
        return this.dead;
    };
    LivingObject.prototype.destroy = function () {
        this.dead = true;
        _super.prototype.destroy.call(this);
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
        this.bugs.push(new bug_1.Bug());
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
                    if (!sugar.getAmount()) {
                        sugar.destroy();
                        continue;
                    }
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
                                // this.sugar.splice(this.sugar.indexOf(antLoad));
                                antLoad.destroy(ant_1);
                            }
                            if (antLoad instanceof apple_1.Apple) {
                                // this.apples.splice(this.apples.indexOf(antLoad));
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
                    if (bug.collidesdWith(this.anthill)) {
                        bug.destroy();
                    }
                }
                if (bug.sees(this.anthill)) {
                    bug.seesAnthill();
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
        console.log(sugar, this);
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
    MyAnt.prototype.toDegrees = function (radians) {
        return radians * 180 / Math.PI;
    };
    ;
    MyAnt.prototype.seesBug = function (bug) {
        var currentDistance = board_1.Board.getDistanceBetweenPositions(this.position, bug.getPosition());
        if (this.oldBugDistance > currentDistance) {
            var angle = this.toDegrees(Math.atan2(bug.getPosition().y - this.position.y, bug.getPosition().x - this.position.x));
            this.rotate(angle);
            this.getPosition();
        }
        this.oldBugDistance = currentDistance;
        if (this.getLoad()) {
            this.drop();
        }
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
            if (this.currentLoad instanceof sugar_1.Sugar) {
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
    Ant.prototype.destroy = function () {
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
        var _this = _super.call(this, board_1.Board.randomPosition(20), 10, 30, board_1.Board.getRandomAngle()) || this;
        _this.speed = .45;
        _this.addCls('bug');
        return _this;
    }
    Bug.prototype.live = function (turn) {
        if (Math.random() * 1000 > 999) {
            this.rotate(board_1.Board.getRandomAngle());
        }
        this.go();
    };
    Bug.prototype.seesAnthill = function () {
        this.turnAround();
    };
    Bug.prototype.seesAnt = function (ant) {
        this.goToTarget(ant);
    };
    return Bug;
}(livingObject_1.LivingObject));
exports.Bug = Bug;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjQyMDhkYzIxNzkwZWM2MmIzYzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9ub2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWFkT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VnYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hbnRoaWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9saXZpbmdPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLG9DQUE4QjtBQUk5QjtJQUEyQix5QkFBSTtJQUszQjtRQUFBLFlBQ0ksa0JBQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUV4QjtRQURHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7SUFDckIsQ0FBQztJQUVPLHlCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFFYSxjQUFRLEdBQXRCLFVBQXVCLFFBQXVCLEVBQUUsTUFBYztRQUMxRCxJQUFJLEtBQUssR0FBRztZQUNSLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLFFBQVEsQ0FBQyxDQUFDLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7UUFDaEMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxDQUFDLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDakQsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVhLGVBQVMsR0FBdkIsVUFBd0IsUUFBdUI7UUFDM0MsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEtBQUssY0FBYztZQUN0RSxRQUFRLENBQUMsQ0FBQyxLQUFLLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxLQUFLLGVBQWUsQ0FBQztJQUM5RSxDQUFDO0lBRWEsb0JBQWMsR0FBNUIsVUFBNkIsT0FBbUI7UUFBbkIscUNBQW1CO1FBQzVDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRWEsb0JBQWMsR0FBNUIsVUFBNkIsT0FBbUI7UUFBbkIscUNBQW1CO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFYSxvQkFBYyxHQUE1QixVQUE2QixPQUFtQjtRQUFuQixxQ0FBbUI7UUFDNUMsTUFBTSxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQzdGLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztTQUNoRztJQUNMLENBQUM7SUFFYSxpQ0FBMkIsR0FBekMsVUFBMEMsT0FBc0IsRUFBRSxPQUFzQjtRQUNwRixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVhLG9CQUFjLEdBQTVCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFwRWEsV0FBSyxHQUFXLEdBQUcsQ0FBQztJQUNwQixZQUFNLEdBQVcsR0FBRyxDQUFDO0lBcUV2QyxZQUFDO0NBQUEsQ0F4RTBCLFdBQUksR0F3RTlCO0FBeEVZLHNCQUFLOzs7Ozs7Ozs7O0FDSmxCO0lBR0ksY0FBWSxJQUFZLEVBQUUsR0FBVyxFQUFFLE9BQWdCO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHNCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sc0JBQU8sR0FBZCxVQUFlLElBQWlCO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSx5QkFBVSxHQUFqQixVQUFrQixJQUFpQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0scUJBQU0sR0FBYjtRQUFjLGFBQWdCO2FBQWhCLFVBQWdCLEVBQWhCLHFCQUFnQixFQUFoQixJQUFnQjtZQUFoQix3QkFBZ0I7O1FBQzFCLFVBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLEdBQUcsV0FBSSxHQUFHLEVBQUU7O0lBQ3BDLENBQUM7SUFFTSxzQkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUM7QUE5Qlksb0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWpCLDJDQUE0QztBQUk1QztJQUFnQyw4QkFBVztJQUV2QyxvQkFBWSxRQUF1QixFQUFFLE1BQWM7UUFBbkQsWUFDSSxrQkFBTSxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBRTFCO1FBREcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7SUFDL0IsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FBQyxDQVArQix5QkFBVyxHQU8xQztBQVBZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p2QixvQ0FBOEI7QUFFOUIscUNBQWdDO0FBRWhDO0lBQWlDLCtCQUFJO0lBT2pDLHFCQUFZLFFBQXdCLEVBQUUsTUFBZSxFQUFFLFVBQW1CLEVBQUUsS0FBYztRQUExRixZQUNJLGtCQUFNLEtBQUssRUFBRSxjQUFjLENBQUMsU0FvQi9CO1FBbkJHLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQyxDQUFDLE9BQU8sVUFBVSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNMLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksYUFBYSxHQUFTLElBQUksV0FBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN6RCxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDeEQsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN6RCxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7O0lBQ0wsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7UUFDSSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFTSxtQ0FBYSxHQUFwQixVQUFxQixnQkFBNkI7UUFDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRU0sMEJBQUksR0FBWCxVQUFZLGdCQUE2QjtRQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEgsQ0FBQztJQUVNLGdEQUEwQixHQUFqQyxVQUFrQyxRQUF1QixFQUFFLEtBQWE7UUFDcEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxLQUFLLEdBQUcsYUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEksQ0FBQztJQUVNLHdDQUFrQixHQUF6QixVQUEwQixRQUF1QjtRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQy9DLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEgsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3ZGLENBQUM7SUFDTCxDQUFDO0lBRU0scUNBQWUsR0FBdEIsVUFBdUIsS0FBYTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUMvQyxJQUFJLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM5RCxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RHLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2hFLENBQUM7SUFDTCxDQUFDO0lBRU0saUNBQVcsR0FBbEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0sK0JBQVMsR0FBaEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sbUNBQWEsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRU0sNkJBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRWEscUJBQVMsR0FBdkIsVUFBd0IsU0FBd0IsRUFBRSxLQUFhLEVBQUUsU0FBd0IsRUFBRSxLQUFhO1FBQ3BHLElBQUksS0FBSyxHQUFHO1lBQ1IsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsS0FBSztTQUNoQixDQUFDO1FBRUYsSUFBSSxLQUFLLEdBQUc7WUFDUixDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDZCxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDZCxLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUM7UUFFRixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLO1lBQ2xDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztZQUMvQixLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU07WUFDaEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxDQS9HZ0MsV0FBSSxHQStHcEM7QUEvR1ksa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnhCLDBDQUEwQztBQUkxQztJQUEyQix5QkFBVTtJQU1qQyxlQUFZLFFBQXVCLEVBQUUsTUFBbUIsRUFBRSxNQUFtQixFQUFFLEdBQVM7UUFBbkQsb0NBQW1CO1FBQUUsb0NBQW1CO1FBQTdFLFlBQ0ksa0JBQU0sUUFBUSxFQUFFLE1BQU0sQ0FBQyxTQU0xQjtRQVZELFVBQUksR0FBZSxFQUFFLENBQUM7UUFLbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQzs7SUFDTCxDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLEdBQVE7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sNEJBQVksR0FBbkIsVUFBb0IsR0FBUztRQUN6QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHlCQUFTLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxHQUFTO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixpQkFBTSxPQUFPLFdBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQ0FuRDBCLHVCQUFVLEdBbURwQztBQW5EWSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbEIsMENBQTBDO0FBSTFDO0lBQTJCLHlCQUFVO0lBR2pDLGVBQVksUUFBdUI7UUFBbkMsWUFDSSxrQkFBTSxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBRXRCO1FBTE8sYUFBTyxHQUFlLEVBQUUsQ0FBQztRQUk3QixLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztJQUN6QixDQUFDO0lBRU0scUJBQUssR0FBWixVQUFhLEdBQVE7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLDRCQUFZLEdBQW5CLFVBQW9CLEdBQVE7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLDBCQUFVLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxHQUFTO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLENBNUIwQix1QkFBVSxHQTRCcEM7QUE1Qlksc0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGxCLDBDQUEwQztBQUkxQztJQUE2QiwyQkFBVTtJQU9uQztRQUFBLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBRTFDO1FBREcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDM0IsQ0FBQztJQUVPLDJCQUFTLEdBQWpCO0lBQ0EsQ0FBQztJQVhhLGFBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsY0FBTSxHQUFXLEVBQUUsQ0FBQztJQUNwQixjQUFNLEdBQVcsRUFBRSxDQUFDO0lBQ3BCLGdCQUFRLEdBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFVM0QsY0FBQztDQUFBLENBZjRCLHVCQUFVLEdBZXRDO0FBZlksMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHBCLDJDQUE0QztBQUU1QyxxQ0FBZ0M7QUFFaEM7SUFBMkMsZ0NBQVc7SUFPbEQsc0JBQVksUUFBdUIsRUFBRSxNQUFjLEVBQUUsVUFBbUIsRUFBRSxLQUFjO1FBQXhGLFlBQ0ksa0JBQU0sUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLFNBSTdDO1FBUFMsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUk1QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDOztJQUNqQyxDQUFDO0lBRUQseUJBQUUsR0FBRjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUIsRUFBRSxDQUFDLENBQUMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFDRCxJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsR0FBRyxLQUFLO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRVMsaUNBQVUsR0FBcEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFUyw2QkFBTSxHQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFUyxpQ0FBVSxHQUFwQixVQUFxQixXQUF3QjtRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFUyxtQ0FBWSxHQUF0QixVQUF1QixRQUF1QjtRQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksUUFBUSxHQUFXLElBQUksR0FBRyxRQUFRLENBQUM7UUFDdkMsSUFBSSxTQUFTLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUU1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxTQUFTLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsU0FBUyxJQUFJLEdBQUcsQ0FBQztRQUNyQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENB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QUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUdNLHlCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxxQkFBTyxHQUFkLFVBQWUsR0FBUTtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFHTCxVQUFDO0FBQUQsQ0FBQyxDQTNCd0IsMkJBQVksR0EyQnBDO0FBM0JZLGtCQUFHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY0MjA4ZGMyMTc5MGVjNjJiM2MzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCBleHRlbmRzIE5vZGUge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gNTAwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSA1MDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZCcpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZENscygnY2VudGVyJyk7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IEJvYXJkLldJRFRIICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IEJvYXJkLkhFSUdIVCArICdweCc7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb3Jkcyhwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGNvcmRzID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGhhbGZCb2FyZFdpZHRoID0gQm9hcmQuV0lEVEggLyAyO1xuICAgICAgICB2YXIgaGFsZkJvYXJkSGVpZ2h0ID0gQm9hcmQuSEVJR0hUIC8gMjtcbiAgICAgICAgaWYgKHBvc2l0aW9uLnggPCBoYWxmQm9hcmRXaWR0aCAqIC0xKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi54ID0gaGFsZkJvYXJkV2lkdGggKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueCA+IGhhbGZCb2FyZFdpZHRoKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi54ID0gaGFsZkJvYXJkV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnkgPCBoYWxmQm9hcmRIZWlnaHQgKiAtMSkge1xuICAgICAgICAgICAgcG9zaXRpb24ueSA9IGhhbGZCb2FyZEhlaWdodCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi55ID4gaGFsZkJvYXJkSGVpZ2h0KSB7XG4gICAgICAgICAgICBwb3NpdGlvbi55ID0gaGFsZkJvYXJkSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvcmRzLnggPSAoaGFsZkJvYXJkV2lkdGggKyBwb3NpdGlvbi54KSAtIHJhZGl1cztcbiAgICAgICAgY29yZHMueSA9IChoYWxmQm9hcmRXaWR0aCArIHBvc2l0aW9uLnkpIC0gcmFkaXVzO1xuICAgICAgICByZXR1cm4gY29yZHM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhdFRoZUVkZ2UocG9zaXRpb246IEJvYXJkUG9zaXRpb24pOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGhhbGZCb2FyZFdpZHRoID0gQm9hcmQuV0lEVEggLyAyO1xuICAgICAgICB2YXIgaGFsZkJvYXJkSGVpZ2h0ID0gQm9hcmQuSEVJR0hUIC8gMjtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uLnggPT09IGhhbGZCb2FyZFdpZHRoICogLTEgfHwgcG9zaXRpb24ueCA9PT0gaGFsZkJvYXJkV2lkdGggfHxcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPT09IGhhbGZCb2FyZEhlaWdodCAqIC0xIHx8IHBvc2l0aW9uLnkgPT09IGhhbGZCb2FyZEhlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbU5lZ2F0aXZlKHBhZGRpbmc6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMCAtIHRoaXMucmFuZG9tUG9zaXRpdmUocGFkZGluZyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Qb3NpdGl2ZShwYWRkaW5nOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChCb2FyZC5XSURUSCAvIDIgLSBwYWRkaW5nKSkgKyAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tUG9zaXRpb24ocGFkZGluZzogbnVtYmVyID0gMCk6IEJvYXJkUG9zaXRpb24ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogKChNYXRoLnJhbmRvbSgpICogMSkgPiAuNSkgPyBCb2FyZC5yYW5kb21Qb3NpdGl2ZShwYWRkaW5nKSA6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKHBhZGRpbmcpLFxuICAgICAgICAgICAgeTogKChNYXRoLnJhbmRvbSgpICogMSkgPiAuNSkgPyBCb2FyZC5yYW5kb21Qb3NpdGl2ZShwYWRkaW5nKSA6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKHBhZGRpbmcpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXREaXN0YW5jZUJldHdlZW5Qb3NpdGlvbnMob2JqZWN0MTogQm9hcmRQb3NpdGlvbiwgb2JqZWN0MjogQm9hcmRQb3NpdGlvbik6IG51bWJlciB7XG4gICAgICAgIHZhciBhID0gb2JqZWN0MS54IC0gb2JqZWN0Mi54XG4gICAgICAgIHZhciBiID0gb2JqZWN0MS55IC0gb2JqZWN0Mi55XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21BbmdsZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmQudHMiLCJleHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBjbHM6IHN0cmluZywgY29udGVudD86IHN0cmluZykge1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm9kZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ2xzKC4uLmNsczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoLi4uY2xzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbm9kZS50cyIsImltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWFkT2JqZWN0IGV4dGVuZHMgQm9hcmRPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCByYWRpdXMpO1xuICAgICAgICB0aGlzLmFkZENscygnZGVhZC1vYmplY3QnKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVhZE9iamVjdC50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmRPYmplY3QgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogQm9hcmRQb3NpdGlvbjtcbiAgICBwcm90ZWN0ZWQgdmlld1JhZGl1czogbnVtYmVyO1xuICAgIHByb3RlY3RlZCByYWRpdXM6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgYW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uPzogQm9hcmRQb3NpdGlvbiwgcmFkaXVzPzogbnVtYmVyLCB2aWV3UmFkaXVzPzogbnVtYmVyLCBhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcignZGl2JywgJ2JvYXJkLW9iamVjdCcpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5zZXRTaXplKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygdmlld1JhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMudmlld1JhZGl1cyA9IHZpZXdSYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFuZ2xlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQocG9zaXRpb24sIGFuZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbk9uQm9hcmQocG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygdmlld1JhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGxldCB2aWV3UmFkaXVzT2JqOiBOb2RlID0gbmV3IE5vZGUoJ3NwYW4nLCAndmlld1JhZGl1cycpO1xuICAgICAgICAgICAgdmlld1JhZGl1c09iai5hZGRDbHMoJ2NlbnRlcicpO1xuICAgICAgICAgICAgdmlld1JhZGl1c09iai5nZXROb2RlKCkuc3R5bGUud2lkdGggPSB2aWV3UmFkaXVzICsgJ3B4JztcbiAgICAgICAgICAgIHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpLnN0eWxlLmhlaWdodCA9IHZpZXdSYWRpdXMgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTaXplKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnN0eWxlLndpZHRoID0gdGhpcy5yYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLnJhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNvbGxpZGVzZFdpdGgob3RoZXJCb2FyZE9iamVjdDogQm9hcmRPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEJvYXJkT2JqZWN0LmNvbGxpc2lvbih0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgb3RoZXJCb2FyZE9iamVjdC5wb3NpdGlvbiwgb3RoZXJCb2FyZE9iamVjdC5yYWRpdXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWVzKG90aGVyQm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBCb2FyZE9iamVjdC5jb2xsaXNpb24odGhpcy5wb3NpdGlvbiwgdGhpcy52aWV3UmFkaXVzLCBvdGhlckJvYXJkT2JqZWN0LnBvc2l0aW9uLCBvdGhlckJvYXJkT2JqZWN0LmdldFNpemUoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBvc2l0aW9uQW5kQW5nbGVPbkJvYXJkKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB2YXIgY29yZHMgPSBCb2FyZC5nZXRDb3Jkcyh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9IFsndHJhbnNsYXRlKCcgKyBjb3Jkcy54ICsgJ3B4LCAnICsgY29yZHMueSArICdweCknLCAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknXS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBvc2l0aW9uT25Cb2FyZChwb3NpdGlvbjogQm9hcmRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHZhciBjb3JkcyA9IEJvYXJkLmdldENvcmRzKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgdmFyIHJvdGF0ZU1hdGNoZXMgPSB0cmFuc2Zvcm0ubWF0Y2goLyhyb3RhdGVcXCguKj9cXCkpL2cpO1xuICAgICAgICBpZiAodHJhbnNmb3JtICYmIHJvdGF0ZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9IFsndHJhbnNsYXRlKCcgKyBjb3Jkcy54ICsgJ3B4LCAnICsgY29yZHMueSArICdweCknLCByb3RhdGVNYXRjaGVzXS5qb2luKCcgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyBjb3Jkcy54ICsgJ3B4LCAnICsgY29yZHMueSArICdweCknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHZpZXdJbkRpcmVjdGlvbihhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZU1hdGNoZXMgPSB0cmFuc2Zvcm0ubWF0Y2goLyh0cmFuc2xhdGVcXCguKj9cXCkpL2cpO1xuICAgICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zbGF0ZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9IFt0cmFuc2xhdGVNYXRjaGVzWzBdLCAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknXS5qb2luKCcgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKCcgKyBhbmdsZSArICdkZWcpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBCb2FyZFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJhZGl1cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZpZXdSYWRpdXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld1JhZGl1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpdXMgKiAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29sbGlzaW9uKHBvc2l0aW9uQTogQm9hcmRQb3NpdGlvbiwgc2l6ZUE6IG51bWJlciwgcG9zaXRpb25COiBCb2FyZFBvc2l0aW9uLCBzaXplQjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZWN0MSA9IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uQS54LFxuICAgICAgICAgICAgeTogcG9zaXRpb25BLnksXG4gICAgICAgICAgICB3aWR0aDogc2l6ZUEsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemVBXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlY3QyID0ge1xuICAgICAgICAgICAgeDogcG9zaXRpb25CLngsXG4gICAgICAgICAgICB5OiBwb3NpdGlvbkIueSxcbiAgICAgICAgICAgIHdpZHRoOiBzaXplQixcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZUJcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJlxuICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxuICAgICAgICAgICAgcmVjdDEueSA8IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQgJiZcbiAgICAgICAgICAgIHJlY3QxLmhlaWdodCArIHJlY3QxLnkgPiByZWN0Mi55O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmRPYmplY3QudHMiLCJpbXBvcnQgeyBEZWFkT2JqZWN0IH0gZnJvbSBcIi4vZGVhZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEFudCB9IGZyb20gXCIuL2FudFwiO1xuXG5leHBvcnQgY2xhc3MgU3VnYXIgZXh0ZW5kcyBEZWFkT2JqZWN0IHtcblxuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIGFudHM6IEFycmF5PEFudD4gPSBbXTtcblxuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyID0gMTAsIGFtb3VudDogbnVtYmVyID0gMjAsIGFudD86IEFudCkge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ3N1Z2FyJyk7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xuICAgICAgICBpZiAoYW50KSB7XG4gICAgICAgICAgICB0aGlzLmFudHMucHVzaChhbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlZHVjZShhbnQ6IEFudCk6IFN1Z2FyIHtcbiAgICAgICAgaWYgKHRoaXMuYW1vdW50ID09PSAxICYmIHRoaXMuYW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFtb3VudC0tO1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPD0gMSAmJiAhdGhpcy5hbW91bnQpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDAuNTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYW1vdW50KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU3VnYXIodGhpcy5wb3NpdGlvbiwgMSwgMSwgYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcENhcnJ5aW5nKGFudD86IEFudCk6IHZvaWQge1xuICAgICAgICBpZiAoYW50KSB7XG4gICAgICAgICAgICB0aGlzLmFudHMuc3BsaWNlKHRoaXMuYW50cy5pbmRleE9mKGFudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFtb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hbW91bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koYW50PzogQW50KTogdm9pZCB7XG4gICAgICAgIGlmIChhbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW50cy5zcGxpY2UodGhpcy5hbnRzLmluZGV4T2YoYW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbW91bnQgPSAwO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1Z2FyLnRzIiwiaW1wb3J0IHsgRGVhZE9iamVjdCB9IGZyb20gJy4vZGVhZE9iamVjdCc7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSAnLi9ib2FyZFBvc2l0aW9uJztcbmltcG9ydCB7IEFudCB9IGZyb20gJy4vYW50JztcblxuZXhwb3J0IGNsYXNzIEFwcGxlIGV4dGVuZHMgRGVhZE9iamVjdCB7XG4gICAgcHJpdmF0ZSBjYXJyaWVyOiBBcnJheTxBbnQ+ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgMjApO1xuICAgICAgICB0aGlzLmFkZENscygnYXBwbGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FycnkoYW50OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYXJyaWVyLnB1c2goYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcENhcnJ5aW5nKGFudDogQW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2Fycmllci5zcGxpY2UodGhpcy5jYXJyaWVyLmluZGV4T2YoYW50KSwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENhcnJpZXIoKTogQXJyYXk8QW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnJpZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koYW50PzogQW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNhcnJpZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZXIuc3BsaWNlKHRoaXMuY2Fycmllci5pbmRleE9mKGFudCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jYXJyaWVyLmxlbmd0aCkge1xuICAgICAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHBsZS50cyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IERlYWRPYmplY3QgfSBmcm9tIFwiLi9kZWFkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQW50aGlsbCBleHRlbmRzIERlYWRPYmplY3Qge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gMjA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDIwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFESVVTOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIFBPU0lUSU9OOiBCb2FyZFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQW50aGlsbC5QT1NJVElPTiwgQW50aGlsbC5SQURJVVMpO1xuICAgICAgICB0aGlzLmFkZENscygnYW50aGlsbCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbnRoaWxsLnRzIiwiaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExpdmluZ09iamVjdCBleHRlbmRzIEJvYXJkT2JqZWN0IHtcblxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogQm9hcmRQb3NpdGlvbjtcbiAgICBwcm90ZWN0ZWQgYW5nbGU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgZGVhZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyLCB2aWV3UmFkaXVzPzogbnVtYmVyLCBhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzLCB2aWV3UmFkaXVzLCBhbmdsZSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLmFkZENscygnbGl2aW5nLW9iamVjdCcpO1xuICAgIH1cblxuICAgIGdvKCkge1xuICAgICAgICBsZXQgdG1wQW5nbGUgPSB0aGlzLmFuZ2xlO1xuICAgICAgICBpZiAoQm9hcmQuYXRUaGVFZGdlKHRoaXMucG9zaXRpb24pKSB7XG4gICAgICAgICAgICB0bXBBbmdsZSA9IHRtcEFuZ2xlIC0gOTA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFyYzogbnVtYmVyID0gTWF0aC5QSSAqIHRtcEFuZ2xlIC8gMTgwLjBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gKE1hdGguY29zKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gKE1hdGguc2luKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbkFuZEFuZ2xlT25Cb2FyZCh0aGlzLnBvc2l0aW9uLCB0bXBBbmdsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHR1cm5Bcm91bmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm90YXRlKDE4MCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJvdGF0ZShhbmdsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gYW5nbGU7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQodGhpcy5wb3NpdGlvbiwgdGhpcy5hbmdsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdvVG9UYXJnZXQoYm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ29Ub1Bvc2l0aW9uKGJvYXJkT2JqZWN0LmdldFBvc2l0aW9uKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnb1RvUG9zaXRpb24ocG9zaXRpb246IEJvYXJkUG9zaXRpb24pOiB2b2lkIHtcbiAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnBvc2l0aW9uLnggLSBwb3NpdGlvbi54O1xuICAgICAgICBsZXQgbmV3WSA9IHRoaXMucG9zaXRpb24ueSAtIHBvc2l0aW9uLnk7XG4gICAgICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgICAgICAgbmV3WCA9IG5ld1ggKiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdZIDwgMCkge1xuICAgICAgICAgICAgbmV3WSA9IG5ld1kgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGlzdGFuY2U6IG51bWJlciA9IE1hdGguc3FydChuZXdYICogbmV3WCArIG5ld1kgKiBuZXdZKTtcbiAgICAgICAgbGV0IGZyYWN0aW9uOiBudW1iZXIgPSBuZXdZIC8gZGlzdGFuY2U7XG4gICAgICAgIGxldCBkaXJlY3Rpb246IG51bWJlciA9IE1hdGguYXNpbihmcmFjdGlvbikgKiAxODAgLyBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA8IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPiBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAzNjAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPiBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55ID4gcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uICs9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA+IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPCBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxODAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3SW5EaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEZWFkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWFkO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgbGl2ZSh0dXJuOiBudW1iZXIpOiB2b2lkO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGl2aW5nT2JqZWN0LnRzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IEFudGhpbGwgfSBmcm9tIFwiLi9hbnRoaWxsXCI7XG5pbXBvcnQgeyBTdWdhciB9IGZyb20gXCIuL3N1Z2FyXCI7XG5pbXBvcnQgeyBBbnQgfSBmcm9tIFwiLi9hbnRcIjtcbmltcG9ydCB7IEFwcGxlIH0gZnJvbSBcIi4vYXBwbGVcIjtcbmltcG9ydCB7IE15QW50IH0gZnJvbSBcIi4vbXlhbnRcIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEtleXMgfSBmcm9tIFwiLi9rZXlzXCI7XG5pbXBvcnQgeyBCdWcgfSBmcm9tIFwiLi9idWdcIjtcblxuY2xhc3MgR2FtZSBleHRlbmRzIE5vZGUge1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5nbGU6IG51bWJlciA9IDMwMC4yO1xuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgcHJpdmF0ZSBhbnRoaWxsOiBBbnRoaWxsID0gbmV3IEFudGhpbGwoKTtcbiAgICBwcml2YXRlIHN1Z2FyOiBBcnJheTxTdWdhcj4gPSBbXTtcbiAgICBwcml2YXRlIGFwcGxlczogQXJyYXk8QXBwbGU+ID0gW107XG4gICAgcHJpdmF0ZSBhbnRzOiBBcnJheTxBbnQ+ID0gW107XG4gICAgcHJpdmF0ZSBidWdzOiBBcnJheTxCdWc+ID0gW107XG4gICAgcHJpdmF0ZSBzcGF3bkRlbGF5OiBudW1iZXIgPSA2O1xuICAgIHByaXZhdGUgbWF4QW50czogbnVtYmVyID0gNTA7XG4gICAgcHJpdmF0ZSB0dXJuOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0aGlzLmJvYXJkLmdldE5vZGUoKSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbVBvc2l0aXZlKDIwKSB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiBCb2FyZC5yYW5kb21Qb3NpdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbVBvc2l0aXZlKDIwKSB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiBCb2FyZC5yYW5kb21Qb3NpdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDIwKSB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDIwKSB9KSk7XG4gICAgICAgIHRoaXMuYXBwbGVzLnB1c2gobmV3IEFwcGxlKHsgeDogQm9hcmQucmFuZG9tTmVnYXRpdmUoMjApLCB5OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSg1MCkgfSkpO1xuICAgICAgICB0aGlzLmJ1Z3MucHVzaChuZXcgQnVnKCkpO1xuICAgICAgICB0aGlzLmJ1Z3MucHVzaChuZXcgQnVnKCkpO1xuICAgICAgICB0aGlzLmJ1Z3MucHVzaChuZXcgQnVnKCkpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0odGhpcy5hbnRoaWxsLmdldE5vZGUoKSk7XG4gICAgICAgIGZvciAobGV0IHN1Z2FyIG9mIHRoaXMuc3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShzdWdhci5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGFwcGxlIG9mIHRoaXMuYXBwbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYXBwbGUuZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBidWcgb2YgdGhpcy5idWdzKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYnVnLmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdldE5vZGUoKSk7XG4gICAgICAgIHRoaXMuaW5pdEtleWJvYXJkTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRLZXlib2FyZExpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuUCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UgPSAhdGhpcy5wYXVzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5EKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnRvZ2dsZSgnZGVidWcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFpbiBsb29wXG4gICAgICovXG4gICAgcHJpdmF0ZSBydW4oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBhdXNlKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFudHMubGVuZ3RoIDwgdGhpcy5tYXhBbnRzICYmIHRoaXMudHVybiAlIHRoaXMuc3Bhd25EZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBhbnQgPSBuZXcgTXlBbnQodGhpcy5jdXJyZW50QW5nbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW50cy5wdXNoKGFudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGFudC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2xlIC09IDcuMjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5nbGUgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2xlICs9IDM2MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGFudCBvZiB0aGlzLmFudHMpIHtcblxuICAgICAgICAgICAgICAgIGlmIChhbnQuaXNEZWFkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWxsIHN1Z2FyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc3VnYXIgb2YgdGhpcy5zdWdhcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1Z2FyLmdldEFtb3VudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWdhci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LnNlZXMoc3VnYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuc2Vlc1N1Z2FyKHN1Z2FyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LmNvbGxpZGVzZFdpdGgoc3VnYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hTdWdhcihzdWdhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhbGwgYXBwbGVzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYXBwbGUgb2YgdGhpcy5hcHBsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudC5zZWVzKGFwcGxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnNlZXNBcHBsZShhcHBsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gb25lLCBzbyB0aGV5IGhhdmUgdG8gcmVhY2ggdGhlIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoQm9hcmRPYmplY3QuY29sbGlzaW9uKGFudC5nZXRQb3NpdGlvbigpLCBhbnQuZ2V0U2l6ZSgpLCBhcHBsZS5nZXRQb3NpdGlvbigpLCAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnJlYWNoQXBwbGUoYXBwbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYnVnIG9mIHRoaXMuYnVncykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LnNlZXMoYnVnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnNlZXNCdWcoYnVnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnQuY29sbGlkZXNkV2l0aChidWcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hCdWcoYnVnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBhbnRMb2FkOiBCb2FyZE9iamVjdCA9IGFudC5nZXRMb2FkKCk7XG4gICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWdhci5pbmRleE9mKGFudExvYWQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWdhci5wdXNoKGFudExvYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGFudExvYWQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkIGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkLmdldENhcnJpZXIoKVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuc2V0UG9zaXRpb25PbkJvYXJkKGFudExvYWQuZ2V0Q2FycmllcigpWzBdLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50TG9hZC5zZXRQb3NpdGlvbk9uQm9hcmQoYW50LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFudC5jb2xsaWRlc2RXaXRoKHRoaXMuYW50aGlsbCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbnQucmVzdCgpO1xuICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hBbnRoaWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRyb3B0IGF0IGFudGhpbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkICYmICFhbnQuZ2V0TG9hZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN1Z2FyLnNwbGljZSh0aGlzLnN1Z2FyLmluZGV4T2YoYW50TG9hZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLmRlc3Ryb3koYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFwcGxlcy5zcGxpY2UodGhpcy5hcHBsZXMuaW5kZXhPZihhbnRMb2FkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuZGVzdHJveShhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZGQgcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhbnQubGl2ZSh0aGlzLnR1cm4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBidWcgb2YgdGhpcy5idWdzKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhbnQgb2YgdGhpcy5hbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnQuaXNEZWFkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWcuc2VlcyhhbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWcuc2Vlc0FudChhbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWcuY29sbGlkZXNkV2l0aChhbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuZGVjcmVhc2VFbmdlcmd5KDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnQuZ2V0RW5nZXJ5KCkgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVnLmNvbGxpZGVzZFdpdGgodGhpcy5hbnRoaWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVnLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChidWcuc2Vlcyh0aGlzLmFudGhpbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1Zy5zZWVzQW50aGlsbCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1Zy5saXZlKHRoaXMudHVybik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudHVybisrO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbnZhciBnYW1lID0gbmV3IEdhbWUoKTtcbmdhbWUuc3RhcnQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lLnRzIiwiaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuaW1wb3J0IHsgQXBwbGUgfSBmcm9tIFwiLi9hcHBsZVwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgQnVnIH0gZnJvbSBcIi4vYnVnXCI7XG5cbmV4cG9ydCBjbGFzcyBNeUFudCBleHRlbmRzIEFudCB7XG5cbiAgICBvbGRCdWdEaXN0YW5jZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoYW5nbGU6IG51bWJlcikge1xuICAgICAgICBzdXBlcihhbmdsZSk7XG4gICAgfVxuXG4gICAgZ2V0VGlyZWQoKSB7XG4gICAgICAgIHRoaXMuZ29Ub0FudGhpbGwoKTtcbiAgICB9XG5cbiAgICBzZWVzU3VnYXIoc3VnYXI6IFN1Z2FyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1Z2FyLCB0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmdldExvYWQoKSAmJiBzdWdhci5nZXRBbW91bnQoKSA+IDAgJiYgc3VnYXIuYW50cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmdvVG9UYXJnZXQoc3VnYXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVhY2hTdWdhcihzdWdhcjogU3VnYXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldExvYWQoKSAmJiBzdWdhci5nZXRBbW91bnQoKSA+IDAgJiYgc3VnYXIuYW50cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aGlzLnRha2VPYmplY3Qoc3VnYXIpO1xuICAgICAgICAgICAgdGhpcy5nb1RvQW50aGlsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVhY2hBbnRoaWxsKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRMb2FkKCkgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgdGhpcy50dXJuQXJvdW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2V0TG9hZCgpIGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlKEJvYXJkLmdldFJhbmRvbUFuZ2xlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcCgpO1xuXG4gICAgfVxuXG4gICAgcmVhY2hBcHBsZShhcHBsZTogQXBwbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldExvYWQoKSAmJiBhcHBsZS5nZXRDYXJyaWVyKCkubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgdGhpcy50YWtlT2JqZWN0KGFwcGxlKTtcbiAgICAgICAgICAgIHRoaXMuZ29Ub0FudGhpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlZXNBcHBsZShhcHBsZTogQXBwbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldExvYWQoKSAmJiBhcHBsZS5nZXRDYXJyaWVyKCkubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgdGhpcy5nb1RvVGFyZ2V0KGFwcGxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdG9EZWdyZWVzKHJhZGlhbnMpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG4gICAgfTtcblxuICAgIHNlZXNCdWcoYnVnOiBCdWcpIHtcblxuICAgICAgICBsZXQgY3VycmVudERpc3RhbmNlID0gQm9hcmQuZ2V0RGlzdGFuY2VCZXR3ZWVuUG9zaXRpb25zKHRoaXMucG9zaXRpb24sIGJ1Zy5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgaWYgKHRoaXMub2xkQnVnRGlzdGFuY2UgPiBjdXJyZW50RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IHRoaXMudG9EZWdyZWVzKE1hdGguYXRhbjIoYnVnLmdldFBvc2l0aW9uKCkueSAtIHRoaXMucG9zaXRpb24ueSwgYnVnLmdldFBvc2l0aW9uKCkueCAtIHRoaXMucG9zaXRpb24ueCkpO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbGRCdWdEaXN0YW5jZSA9IGN1cnJlbnREaXN0YW5jZTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TG9hZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3AoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVhY2hCdWcoYnVnOiBCdWcpIHtcbiAgICAgICAgdGhpcy50dXJuQXJvdW5kKCk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbXlhbnQudHMiLCJpbXBvcnQgeyBMaXZpbmdPYmplY3QgfSBmcm9tIFwiLi9saXZpbmdPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBTdWdhciB9IGZyb20gXCIuL3N1Z2FyXCI7XG5pbXBvcnQgeyBBcHBsZSB9IGZyb20gXCIuL2FwcGxlXCI7XG5pbXBvcnQgeyBCdWcgfSBmcm9tIFwiLi9idWdcIjtcbmltcG9ydCB7IEFudGhpbGwgfSBmcm9tIFwiLi9hbnRoaWxsXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbnQgZXh0ZW5kcyBMaXZpbmdPYmplY3Qge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgRU5FUkdZOiBudW1iZXIgPSA1MDA7XG4gICAgcHVibGljIHN0YXRpYyBSQU5HRTogbnVtYmVyID0gNTAwMDtcbiAgICBwdWJsaWMgc3RhdGljIFNQRUVEOiBudW1iZXIgPSAxO1xuXG4gICAgcHVibGljIHN0YXRpYyBUVVJOX0FST1VORF9TUEVFRDogbnVtYmVyID0gNTtcblxuICAgIHByb3RlY3RlZCBzcGVlZDogbnVtYmVyID0gNTtcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgcm91bmQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5nZTogbnVtYmVyID0gQW50LlJBTkdFO1xuICAgIHByaXZhdGUgcmVzdERpc3RhbmNlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2xvdWQ6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRFbmVyZ3k6IG51bWJlciA9IEFudC5FTkVSR1k7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEJvYXJkT2JqZWN0O1xuICAgIHByaXZhdGUgdHVybjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjdXJyZW50TG9hZDogQm9hcmRPYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcih7IHg6IDAsIHk6IDAgfSwgNSwgMjAsIGFuZ2xlKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2FudCcpO1xuICAgICAgICB0aGlzLmluaXRNb3VzZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0TW91c2VMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXROb2RlKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFNwZWVkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkIGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCBpbnN0YW5jZW9mIEFwcGxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZC5nZXRDYXJyaWVyKCkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmN1cnJlbnRMb2FkLmdldENhcnJpZXIoKS5sZW5ndGggKiAwLjA1XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwLjA1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwZWVkID4gQW50LlNQRUVEKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gQW50LlNQRUVEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGl2ZSh0dXJuOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnR1cm4gPSB0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbmVyZ3kgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDwgQW50LkVORVJHWSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RW5lcmd5Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aXJlZCA9IHRoaXMuY3VycmVudFJhbmdlIDw9IEFudC5SQU5HRSAvIDMgKiAyXG4gICAgICAgIGlmICh0aGlzLnRpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRpcmVkKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5jb250YWlucygndGlyZWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5hZGQoJ3RpcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QucmVtb3ZlKCd0aXJlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTcGVlZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRSYW5nZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ28oKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVzdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UmFuZ2UgPSBBbnQuUkFOR0U7XG4gICAgfTtcblxuICAgIGdvKCkge1xuICAgICAgICBzdXBlci5nbygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRSYW5nZSAtPSB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIGlzVGlyZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpcmVkO1xuICAgIH1cblxuICAgIGdvVG9BbnRoaWxsKCkge1xuICAgICAgICB0aGlzLmdvVG9Qb3NpdGlvbihBbnRoaWxsLlBPU0lUSU9OKTtcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb3NpdGlvbiwgQW50aGlsbC5QT1NJVElPTiwgdGhpcy5wb3NpdGlvbiA9PSBBbnRoaWxsLlBPU0lUSU9OKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uID09IEFudGhpbGwuUE9TSVRJT04pIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRMb2FkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkIGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkLnN0b3BDYXJyeWluZyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkIGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkLnN0b3BDYXJyeWluZyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0YWtlT2JqZWN0KGJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCkge1xuICAgICAgICBpZiAoIWJvYXJkT2JqZWN0LmNvbGxpZGVzZFdpdGgodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkT2JqZWN0IGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWQgPSBib2FyZE9iamVjdC5yZWR1Y2UodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkT2JqZWN0IGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWQgPSBib2FyZE9iamVjdDtcbiAgICAgICAgICAgIGJvYXJkT2JqZWN0LmNhcnJ5KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjcmVhc2VFbmdlcmd5KGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEVuZXJneSAtPSBhbW91bnQ7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kcm9wKCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9hZCgpOiBCb2FyZE9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMb2FkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbmdlcnkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEVuZXJneTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRUaXJlZCgpOiB2b2lkO1xuICAgIGFic3RyYWN0IHNlZXNBcHBsZShhcHBsZTogQXBwbGUpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlYWNoQXBwbGUoYXBwbGU6IEFwcGxlKTogdm9pZDtcbiAgICBhYnN0cmFjdCBzZWVzU3VnYXIoc3VnZXI6IFN1Z2FyKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaFN1Z2FyKHN1Z2VyOiBTdWdhcik6IHZvaWQ7XG4gICAgYWJzdHJhY3Qgc2Vlc0J1ZyhidWc6IEJ1Zyk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcmVhY2hCdWcoYnVnOiBCdWcpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlYWNoQW50aGlsbCgpOiB2b2lkO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYW50LnRzIiwiZXhwb3J0IGVudW0gS2V5cyB7XG4gICAgVEFCID0gOSxcbiAgICBFTlRFUiA9IDEzLFxuICAgIFNISUZUID0gMTYsXG4gICAgQ1RSTCA9IDE3LFxuICAgIEFMVCA9IDE4LFxuICAgIEVTQyA9IDI3LFxuICAgIFBPUzEgPSAzNixcbiAgICBMRUZUID0gMzcsXG4gICAgVVAgPSAzOCxcbiAgICBSSUdIVCA9IDM5LFxuICAgIERPV04gPSA0MCxcbiAgICBTUEFDRSA9IDMyLFxuICAgIFBBR0VfVVAgPSAzMyxcbiAgICBQQUdFX0RPV04gPSAzNCxcbiAgICBQID0gODAsXG4gICAgRCA9IDY4XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva2V5cy50cyIsImltcG9ydCB7IExpdmluZ09iamVjdCB9IGZyb20gJy4vbGl2aW5nT2JqZWN0JztcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgeyBBbnQgfSBmcm9tICcuL2FudCc7XG5pbXBvcnQgeyBBbnRoaWxsIH0gZnJvbSAnLi9hbnRoaWxsJztcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSAnLi9ib2FyZE9iamVjdCc7XG5cbmV4cG9ydCBjbGFzcyBCdWcgZXh0ZW5kcyBMaXZpbmdPYmplY3Qge1xuICAgIHByb3RlY3RlZCBzcGVlZDogbnVtYmVyID0gLjQ1O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEJvYXJkLnJhbmRvbVBvc2l0aW9uKDIwKSwgMTAsIDMwLCBCb2FyZC5nZXRSYW5kb21BbmdsZSgpKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2J1ZycpO1xuICAgIH1cblxuICAgIGxpdmUodHVybjogbnVtYmVyKSB7XG5cbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgKiAxMDAwID4gOTk5KSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZShCb2FyZC5nZXRSYW5kb21BbmdsZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ28oKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzZWVzQW50aGlsbCgpIHtcbiAgICAgICAgdGhpcy50dXJuQXJvdW5kKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlZXNBbnQoYW50OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nb1RvVGFyZ2V0KGFudCk7XG4gICAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idWcudHMiXSwic291cmNlUm9vdCI6IiJ9