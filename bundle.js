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
        _this.delivered = false;
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
    Apple.prototype.setDelivered = function (delivered) {
        this.delivered = delivered;
    };
    Apple.prototype.isDelivered = function () {
        return this.delivered;
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
                    if (apple.isDelivered()) {
                        apple.destroy();
                        continue;
                    }
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
                                antLoad.setDelivered(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzcxY2UyZTZlYzUwYTJkZTI0MDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9ub2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWFkT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VnYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hbnRoaWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9saXZpbmdPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLG9DQUE4QjtBQUc5QjtJQUEyQix5QkFBSTtJQUszQjtRQUFBLFlBQ0ksa0JBQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUV4QjtRQURHLEtBQUksQ0FB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O0FDakJELDRDQUE4QztBQUM5QyxxQ0FBZ0M7QUFHaEM7SUFBeUIsdUJBQVk7SUFHakM7UUFBQSxZQUNJLGtCQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxhQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsU0FFbEU7UUFMUyxXQUFLLEdBQVcsR0FBRyxDQUFDO1FBSTFCLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBQ3ZCLENBQUM7SUFFRCxrQkFBSSxHQUFKLFVBQUssSUFBWTtRQUViLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBR00seUJBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLHFCQUFPLEdBQWQsVUFBZSxHQUFRO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUdMLFVBQUM7QUFBRCxDQUFDLENBM0J3QiwyQkFBWSxHQTJCcEM7QUEzQlksa0JBQUciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzcxY2UyZTZlYzUwYTJkZTI0MDYiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA1MDA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDUwMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2JvYXJkJyk7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdjZW50ZXInKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLndpZHRoID0gQm9hcmQuV0lEVEggKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuaGVpZ2h0ID0gQm9hcmQuSEVJR0hUICsgJ3B4JztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldENvcmRzKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICB2YXIgY29yZHMgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgaGFsZkJvYXJkV2lkdGggPSBCb2FyZC5XSURUSCAvIDI7XG4gICAgICAgIHZhciBoYWxmQm9hcmRIZWlnaHQgPSBCb2FyZC5IRUlHSFQgLyAyO1xuICAgICAgICBpZiAocG9zaXRpb24ueCA8IGhhbGZCb2FyZFdpZHRoICogLTEpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPSBoYWxmQm9hcmRXaWR0aCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi54ID4gaGFsZkJvYXJkV2lkdGgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPSBoYWxmQm9hcmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueSA8IGhhbGZCb2FyZEhlaWdodCAqIC0xKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi55ID0gaGFsZkJvYXJkSGVpZ2h0ICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiBoYWxmQm9hcmRIZWlnaHQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBoYWxmQm9hcmRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29yZHMueCA9IChoYWxmQm9hcmRXaWR0aCArIHBvc2l0aW9uLngpIC0gcmFkaXVzO1xuICAgICAgICBjb3Jkcy55ID0gKGhhbGZCb2FyZFdpZHRoICsgcG9zaXRpb24ueSkgLSByYWRpdXM7XG4gICAgICAgIHJldHVybiBjb3JkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGF0VGhlRWRnZShwb3NpdGlvbjogQm9hcmRQb3NpdGlvbik6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaGFsZkJvYXJkV2lkdGggPSBCb2FyZC5XSURUSCAvIDI7XG4gICAgICAgIHZhciBoYWxmQm9hcmRIZWlnaHQgPSBCb2FyZC5IRUlHSFQgLyAyO1xuICAgICAgICByZXR1cm4gcG9zaXRpb24ueCA9PT0gaGFsZkJvYXJkV2lkdGggKiAtMSB8fCBwb3NpdGlvbi54ID09PSBoYWxmQm9hcmRXaWR0aCB8fFxuICAgICAgICAgICAgcG9zaXRpb24ueSA9PT0gaGFsZkJvYXJkSGVpZ2h0ICogLTEgfHwgcG9zaXRpb24ueSA9PT0gaGFsZkJvYXJkSGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tTmVnYXRpdmUocGFkZGluZzogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAwIC0gdGhpcy5yYW5kb21Qb3NpdGl2ZShwYWRkaW5nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbVBvc2l0aXZlKHBhZGRpbmc6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKEJvYXJkLldJRFRIIC8gMiAtIHBhZGRpbmcpKSArIDA7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21Qb3NpdGlvbihwYWRkaW5nOiBudW1iZXIgPSAwKTogQm9hcmRQb3NpdGlvbiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAoKE1hdGgucmFuZG9tKCkgKiAxKSA+IC41KSA/IEJvYXJkLnJhbmRvbVBvc2l0aXZlKHBhZGRpbmcpIDogQm9hcmQucmFuZG9tTmVnYXRpdmUocGFkZGluZyksXG4gICAgICAgICAgICB5OiAoKE1hdGgucmFuZG9tKCkgKiAxKSA+IC41KSA/IEJvYXJkLnJhbmRvbVBvc2l0aXZlKHBhZGRpbmcpIDogQm9hcmQucmFuZG9tTmVnYXRpdmUocGFkZGluZyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldERpc3RhbmNlQmV0d2VlblBvc2l0aW9ucyhvYmplY3QxOiBCb2FyZFBvc2l0aW9uLCBvYmplY3QyOiBCb2FyZFBvc2l0aW9uKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIGEgPSBvYmplY3QxLnggLSBvYmplY3QyLnhcbiAgICAgICAgdmFyIGIgPSBvYmplY3QxLnkgLSBvYmplY3QyLnlcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUFuZ2xlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjApO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZC50cyIsImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBwcm90ZWN0ZWQgbm9kZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNsczogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb2RlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRDbHMoLi4uY2xzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCguLi5jbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ub2RlLnRzIiwiaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIERlYWRPYmplY3QgZXh0ZW5kcyBCb2FyZE9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHJhZGl1cyk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdkZWFkLW9iamVjdCcpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWFkT2JqZWN0LnRzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZE9iamVjdCBleHRlbmRzIE5vZGUge1xuXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uO1xuICAgIHByb3RlY3RlZCB2aWV3UmFkaXVzOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHJhZGl1czogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBhbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24/OiBCb2FyZFBvc2l0aW9uLCByYWRpdXM/OiBudW1iZXIsIHZpZXdSYWRpdXM/OiBudW1iZXIsIGFuZ2xlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnYm9hcmQtb2JqZWN0Jyk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLnNldFNpemUoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB2aWV3UmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy52aWV3UmFkaXVzID0gdmlld1JhZGl1cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYW5nbGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbkFuZEFuZ2xlT25Cb2FyZChwb3NpdGlvbiwgYW5nbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uT25Cb2FyZChwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2aWV3UmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbGV0IHZpZXdSYWRpdXNPYmo6IE5vZGUgPSBuZXcgTm9kZSgnc3BhbicsICd2aWV3UmFkaXVzJyk7XG4gICAgICAgICAgICB2aWV3UmFkaXVzT2JqLmFkZENscygnY2VudGVyJyk7XG4gICAgICAgICAgICB2aWV3UmFkaXVzT2JqLmdldE5vZGUoKS5zdHlsZS53aWR0aCA9IHZpZXdSYWRpdXMgKyAncHgnO1xuICAgICAgICAgICAgdmlld1JhZGl1c09iai5nZXROb2RlKCkuc3R5bGUuaGVpZ2h0ID0gdmlld1JhZGl1cyArICdweCc7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0odmlld1JhZGl1c09iai5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNpemUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSB0aGlzLnJhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IHRoaXMucmFkaXVzICogMiArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY29sbGlkZXNkV2l0aChvdGhlckJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gQm9hcmRPYmplY3QuY29sbGlzaW9uKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzLCBvdGhlckJvYXJkT2JqZWN0LnBvc2l0aW9uLCBvdGhlckJvYXJkT2JqZWN0LnJhZGl1cyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlZXMob3RoZXJCb2FyZE9iamVjdDogQm9hcmRPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEJvYXJkT2JqZWN0LmNvbGxpc2lvbih0aGlzLnBvc2l0aW9uLCB0aGlzLnZpZXdSYWRpdXMsIG90aGVyQm9hcmRPYmplY3QucG9zaXRpb24sIG90aGVyQm9hcmRPYmplY3QuZ2V0U2l6ZSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHZhciBjb3JkcyA9IEJvYXJkLmdldENvcmRzKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gWyd0cmFuc2xhdGUoJyArIGNvcmRzLnggKyAncHgsICcgKyBjb3Jkcy55ICsgJ3B4KScsICdyb3RhdGUoJyArIHRoaXMuYW5nbGUgKyAnZGVnKSddLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9zaXRpb25PbkJvYXJkKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdmFyIGNvcmRzID0gQm9hcmQuZ2V0Q29yZHModGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMpO1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICB2YXIgcm90YXRlTWF0Y2hlcyA9IHRyYW5zZm9ybS5tYXRjaCgvKHJvdGF0ZVxcKC4qP1xcKSkvZyk7XG4gICAgICAgIGlmICh0cmFuc2Zvcm0gJiYgcm90YXRlTWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gWyd0cmFuc2xhdGUoJyArIGNvcmRzLnggKyAncHgsICcgKyBjb3Jkcy55ICsgJ3B4KScsIHJvdGF0ZU1hdGNoZXNdLmpvaW4oJyAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIGNvcmRzLnggKyAncHgsICcgKyBjb3Jkcy55ICsgJ3B4KSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdmlld0luRGlyZWN0aW9uKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICB2YXIgdHJhbnNsYXRlTWF0Y2hlcyA9IHRyYW5zZm9ybS5tYXRjaCgvKHRyYW5zbGF0ZVxcKC4qP1xcKSkvZyk7XG4gICAgICAgIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNsYXRlTWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gW3RyYW5zbGF0ZU1hdGNoZXNbMF0sICdyb3RhdGUoJyArIHRoaXMuYW5nbGUgKyAnZGVnKSddLmpvaW4oJyAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArIGFuZ2xlICsgJ2RlZyknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IEJvYXJkUG9zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Vmlld1JhZGl1cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3UmFkaXVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGl1cyAqIDI7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb2xsaXNpb24ocG9zaXRpb25BOiBCb2FyZFBvc2l0aW9uLCBzaXplQTogbnVtYmVyLCBwb3NpdGlvbkI6IEJvYXJkUG9zaXRpb24sIHNpemVCOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlY3QxID0ge1xuICAgICAgICAgICAgeDogcG9zaXRpb25BLngsXG4gICAgICAgICAgICB5OiBwb3NpdGlvbkEueSxcbiAgICAgICAgICAgIHdpZHRoOiBzaXplQSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZUFcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVjdDIgPSB7XG4gICAgICAgICAgICB4OiBwb3NpdGlvbkIueCxcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uQi55LFxuICAgICAgICAgICAgd2lkdGg6IHNpemVCLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplQlxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZWN0MS54IDwgcmVjdDIueCArIHJlY3QyLndpZHRoICYmXG4gICAgICAgICAgICByZWN0MS54ICsgcmVjdDEud2lkdGggPiByZWN0Mi54ICYmXG4gICAgICAgICAgICByZWN0MS55IDwgcmVjdDIueSArIHJlY3QyLmhlaWdodCAmJlxuICAgICAgICAgICAgcmVjdDEuaGVpZ2h0ICsgcmVjdDEueSA+IHJlY3QyLnk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZE9iamVjdC50cyIsImltcG9ydCB7IERlYWRPYmplY3QgfSBmcm9tIFwiLi9kZWFkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5cbmV4cG9ydCBjbGFzcyBTdWdhciBleHRlbmRzIERlYWRPYmplY3Qge1xuXG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgYW50czogQXJyYXk8QW50PiA9IFtdO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIgPSAxMCwgYW1vdW50OiBudW1iZXIgPSAyMCwgYW50PzogQW50KSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCByYWRpdXMpO1xuICAgICAgICB0aGlzLmFkZENscygnc3VnYXInKTtcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgICAgIGlmIChhbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW50cy5wdXNoKGFudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVkdWNlKGFudDogQW50KTogU3VnYXIge1xuICAgICAgICBpZiAodGhpcy5hbW91bnQgPT09IDEgJiYgdGhpcy5hbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW1vdW50LS07XG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA8PSAxICYmICF0aGlzLmFtb3VudCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMC41O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hbW91bnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTdWdhcih0aGlzLnBvc2l0aW9uLCAxLCAxLCBhbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wQ2FycnlpbmcoYW50PzogQW50KTogdm9pZCB7XG4gICAgICAgIGlmIChhbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW50cy5zcGxpY2UodGhpcy5hbnRzLmluZGV4T2YoYW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QW1vdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFtb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveShhbnQ/OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGFudCkge1xuICAgICAgICAgICAgdGhpcy5hbnRzLnNwbGljZSh0aGlzLmFudHMuaW5kZXhPZihhbnQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFtb3VudCA9IDA7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VnYXIudHMiLCJpbXBvcnQgeyBEZWFkT2JqZWN0IH0gZnJvbSAnLi9kZWFkT2JqZWN0JztcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tICcuL2JvYXJkUG9zaXRpb24nO1xuaW1wb3J0IHsgQW50IH0gZnJvbSAnLi9hbnQnO1xuXG5leHBvcnQgY2xhc3MgQXBwbGUgZXh0ZW5kcyBEZWFkT2JqZWN0IHtcbiAgICBwcml2YXRlIGNhcnJpZXI6IEFycmF5PEFudD4gPSBbXTtcbiAgICBwcml2YXRlIGRlbGl2ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24pIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIDIwKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2FwcGxlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhcnJ5KGFudDogQW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2Fycmllci5wdXNoKGFudCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3BDYXJyeWluZyhhbnQ6IEFudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhcnJpZXIuc3BsaWNlKHRoaXMuY2Fycmllci5pbmRleE9mKGFudCksIDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDYXJyaWVyKCk6IEFycmF5PEFudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJyaWVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREZWxpdmVyZWQoZGVsaXZlcmVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZGVsaXZlcmVkID0gZGVsaXZlcmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0RlbGl2ZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsaXZlcmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGFudD86IEFudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYXJyaWVyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jYXJyaWVyLnNwbGljZSh0aGlzLmNhcnJpZXIuaW5kZXhPZihhbnQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2Fycmllci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwbGUudHMiLCJpbXBvcnQgeyBEZWFkT2JqZWN0IH0gZnJvbSBcIi4vZGVhZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEFudGhpbGwgZXh0ZW5kcyBEZWFkT2JqZWN0IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDIwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSAyMDtcbiAgICBwdWJsaWMgc3RhdGljIFJBRElVUzogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIHN0YXRpYyBQT1NJVElPTjogQm9hcmRQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFudGhpbGwuUE9TSVRJT04sIEFudGhpbGwuUkFESVVTKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2FudGhpbGwnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYW50aGlsbC50cyIsImltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMaXZpbmdPYmplY3QgZXh0ZW5kcyBCb2FyZE9iamVjdCB7XG5cbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IEJvYXJkUG9zaXRpb247XG4gICAgcHJvdGVjdGVkIGFuZ2xlOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHNwZWVkOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGRlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlciwgdmlld1JhZGl1cz86IG51bWJlciwgYW5nbGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHJhZGl1cywgdmlld1JhZGl1cywgYW5nbGUpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2xpdmluZy1vYmplY3QnKTtcbiAgICB9XG5cbiAgICBnbygpIHtcbiAgICAgICAgbGV0IHRtcEFuZ2xlID0gdGhpcy5hbmdsZTtcbiAgICAgICAgaWYgKEJvYXJkLmF0VGhlRWRnZSh0aGlzLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgdG1wQW5nbGUgPSB0bXBBbmdsZSAtIDkwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcmM6IG51bWJlciA9IE1hdGguUEkgKiB0bXBBbmdsZSAvIDE4MC4wXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IChNYXRoLmNvcyhhcmMpICogdGhpcy5zcGVlZCkgKyB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IChNYXRoLnNpbihhcmMpICogdGhpcy5zcGVlZCkgKyB0aGlzLnBvc2l0aW9uLnk7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQodGhpcy5wb3NpdGlvbiwgdG1wQW5nbGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0dXJuQXJvdW5kKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdGF0ZSgxODApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByb3RhdGUoYW5nbGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtIGFuZ2xlO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uQW5kQW5nbGVPbkJvYXJkKHRoaXMucG9zaXRpb24sIHRoaXMuYW5nbGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnb1RvVGFyZ2V0KGJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdvVG9Qb3NpdGlvbihib2FyZE9iamVjdC5nZXRQb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ29Ub1Bvc2l0aW9uKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCBuZXdYID0gdGhpcy5wb3NpdGlvbi54IC0gcG9zaXRpb24ueDtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnBvc2l0aW9uLnkgLSBwb3NpdGlvbi55O1xuICAgICAgICBpZiAobmV3WCA8IDApIHtcbiAgICAgICAgICAgIG5ld1ggPSBuZXdYICogLTFcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3WSA8IDApIHtcbiAgICAgICAgICAgIG5ld1kgPSBuZXdZICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpc3RhbmNlOiBudW1iZXIgPSBNYXRoLnNxcnQobmV3WCAqIG5ld1ggKyBuZXdZICogbmV3WSk7XG4gICAgICAgIGxldCBmcmFjdGlvbjogbnVtYmVyID0gbmV3WSAvIGRpc3RhbmNlO1xuICAgICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXIgPSBNYXRoLmFzaW4oZnJhY3Rpb24pICogMTgwIC8gTWF0aC5QSTtcblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPCBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55ID4gcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMzYwIC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb24oKS54ID4gcG9zaXRpb24ueCAmJiB0aGlzLmdldFBvc2l0aW9uKCkueSA+IHBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiArPSAxODA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPiBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55IDwgcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTgwIC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld0luRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRGVhZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVhZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGxpdmUodHVybjogbnVtYmVyKTogdm9pZDtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpdmluZ09iamVjdC50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBBbnRoaWxsIH0gZnJvbSBcIi4vYW50aGlsbFwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5pbXBvcnQgeyBBcHBsZSB9IGZyb20gXCIuL2FwcGxlXCI7XG5pbXBvcnQgeyBNeUFudCB9IGZyb20gXCIuL215YW50XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSBcIi4va2V5c1wiO1xuaW1wb3J0IHsgQnVnIH0gZnJvbSBcIi4vYnVnXCI7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHByaXZhdGUgY3VycmVudEFuZ2xlOiBudW1iZXIgPSAzMDAuMjtcbiAgICBwcml2YXRlIGJvYXJkOiBCb2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgIHByaXZhdGUgYW50aGlsbDogQW50aGlsbCA9IG5ldyBBbnRoaWxsKCk7XG4gICAgcHJpdmF0ZSBzdWdhcjogQXJyYXk8U3VnYXI+ID0gW107XG4gICAgcHJpdmF0ZSBhcHBsZXM6IEFycmF5PEFwcGxlPiA9IFtdO1xuICAgIHByaXZhdGUgYW50czogQXJyYXk8QW50PiA9IFtdO1xuICAgIHByaXZhdGUgYnVnczogQXJyYXk8QnVnPiA9IFtdO1xuICAgIHByaXZhdGUgc3Bhd25EZWxheTogbnVtYmVyID0gNjtcbiAgICBwcml2YXRlIG1heEFudHM6IG51bWJlciA9IDUwO1xuICAgIHByaXZhdGUgdHVybjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHBhdXNlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdnYW1lJyk7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJ1bigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5ib2FyZC5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLnN1Z2FyLnB1c2gobmV3IFN1Z2FyKHsgeDogQm9hcmQucmFuZG9tTmVnYXRpdmUoMjApLCB5OiBCb2FyZC5yYW5kb21Qb3NpdGl2ZSgyMCkgfSkpO1xuICAgICAgICB0aGlzLnN1Z2FyLnB1c2gobmV3IFN1Z2FyKHsgeDogQm9hcmQucmFuZG9tUG9zaXRpdmUoMjApLCB5OiBCb2FyZC5yYW5kb21Qb3NpdGl2ZSgyMCkgfSkpO1xuICAgICAgICB0aGlzLnN1Z2FyLnB1c2gobmV3IFN1Z2FyKHsgeDogQm9hcmQucmFuZG9tUG9zaXRpdmUoMjApLCB5OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSgyMCkgfSkpO1xuICAgICAgICB0aGlzLnN1Z2FyLnB1c2gobmV3IFN1Z2FyKHsgeDogQm9hcmQucmFuZG9tTmVnYXRpdmUoMjApLCB5OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSgyMCkgfSkpO1xuICAgICAgICB0aGlzLmFwcGxlcy5wdXNoKG5ldyBBcHBsZSh7IHg6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDIwKSwgeTogQm9hcmQucmFuZG9tTmVnYXRpdmUoNTApIH0pKTtcbiAgICAgICAgdGhpcy5idWdzLnB1c2gobmV3IEJ1ZygpKTtcbiAgICAgICAgdGhpcy5idWdzLnB1c2gobmV3IEJ1ZygpKTtcbiAgICAgICAgdGhpcy5idWdzLnB1c2gobmV3IEJ1ZygpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKHRoaXMuYW50aGlsbC5nZXROb2RlKCkpO1xuICAgICAgICBmb3IgKGxldCBzdWdhciBvZiB0aGlzLnN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oc3VnYXIuZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBhcHBsZSBvZiB0aGlzLmFwcGxlcykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGFwcGxlLmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgYnVnIG9mIHRoaXMuYnVncykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGJ1Zy5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0S2V5Ym9hcmRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLlApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlID0gIXRoaXMucGF1c2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC50b2dnbGUoJ2RlYnVnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1haW4gbG9vcFxuICAgICAqL1xuICAgIHByaXZhdGUgcnVuKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5wYXVzZSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hbnRzLmxlbmd0aCA8IHRoaXMubWF4QW50cyAmJiB0aGlzLnR1cm4gJSB0aGlzLnNwYXduRGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgYW50ID0gbmV3IE15QW50KHRoaXMuY3VycmVudEFuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFudHMucHVzaChhbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShhbnQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSAtPSA3LjI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSArPSAzNjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBhbnQgb2YgdGhpcy5hbnRzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoYW50LmlzRGVhZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFsbCBzdWdhclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHN1Z2FyIG9mIHRoaXMuc3VnYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWdhci5nZXRBbW91bnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VnYXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudC5zZWVzKHN1Z2FyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnNlZXNTdWdhcihzdWdhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudC5jb2xsaWRlc2RXaXRoKHN1Z2FyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnJlYWNoU3VnYXIoc3VnYXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWxsIGFwcGxlc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGFwcGxlIG9mIHRoaXMuYXBwbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcHBsZS5pc0RlbGl2ZXJlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LnNlZXMoYXBwbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuc2Vlc0FwcGxlKGFwcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBvbmUsIHNvIHRoZXkgaGF2ZSB0byByZWFjaCB0aGUgY2VudGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb2FyZE9iamVjdC5jb2xsaXNpb24oYW50LmdldFBvc2l0aW9uKCksIGFudC5nZXRTaXplKCksIGFwcGxlLmdldFBvc2l0aW9uKCksIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hBcHBsZShhcHBsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBidWcgb2YgdGhpcy5idWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnQuc2VlcyhidWcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuc2Vlc0J1ZyhidWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudC5jb2xsaWRlc2RXaXRoKGJ1ZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFudC5yZWFjaEJ1ZyhidWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGFudExvYWQ6IEJvYXJkT2JqZWN0ID0gYW50LmdldExvYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Z2FyLmluZGV4T2YoYW50TG9hZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Z2FyLnB1c2goYW50TG9hZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYW50TG9hZC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFudExvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQuZ2V0Q2FycmllcigpWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW50TG9hZC5zZXRQb3NpdGlvbk9uQm9hcmQoYW50TG9hZC5nZXRDYXJyaWVyKClbMF0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLnNldFBvc2l0aW9uT25Cb2FyZChhbnQuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYW50LmNvbGxpZGVzZFdpdGgodGhpcy5hbnRoaWxsKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFudC5yZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGFudC5yZWFjaEFudGhpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHJvcHQgYXQgYW50aGlsbFxuICAgICAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgJiYgIWFudC5nZXRMb2FkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3VnYXIuc3BsaWNlKHRoaXMuc3VnYXIuaW5kZXhPZihhbnRMb2FkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuZGVzdHJveShhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCBpbnN0YW5jZW9mIEFwcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuc2V0RGVsaXZlcmVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFwcGxlcy5zcGxpY2UodGhpcy5hcHBsZXMuaW5kZXhPZihhbnRMb2FkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuZGVzdHJveShhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZGQgcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhbnQubGl2ZSh0aGlzLnR1cm4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBidWcgb2YgdGhpcy5idWdzKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhbnQgb2YgdGhpcy5hbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnQuaXNEZWFkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWcuc2VlcyhhbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWcuc2Vlc0FudChhbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWcuY29sbGlkZXNkV2l0aChhbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuZGVjcmVhc2VFbmdlcmd5KDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnQuZ2V0RW5nZXJ5KCkgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVnLmNvbGxpZGVzZFdpdGgodGhpcy5hbnRoaWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVnLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChidWcuc2Vlcyh0aGlzLmFudGhpbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1Zy5zZWVzQW50aGlsbCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1Zy5saXZlKHRoaXMudHVybik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudHVybisrO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbnZhciBnYW1lID0gbmV3IEdhbWUoKTtcbmdhbWUuc3RhcnQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lLnRzIiwiaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5pbXBvcnQgeyBTdWdhciB9IGZyb20gXCIuL3N1Z2FyXCI7XG5pbXBvcnQgeyBBcHBsZSB9IGZyb20gXCIuL2FwcGxlXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBCdWcgfSBmcm9tIFwiLi9idWdcIjtcblxuZXhwb3J0IGNsYXNzIE15QW50IGV4dGVuZHMgQW50IHtcblxuICAgIG9sZEJ1Z0Rpc3RhbmNlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGFuZ2xlKTtcbiAgICB9XG5cbiAgICBnZXRUaXJlZCgpIHtcbiAgICAgICAgdGhpcy5nb1RvQW50aGlsbCgpO1xuICAgIH1cblxuICAgIHNlZXNTdWdhcihzdWdhcjogU3VnYXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coc3VnYXIsIHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIHN1Z2FyLmdldEFtb3VudCgpID4gMCAmJiBzdWdhci5hbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub1RhcmdldChzdWdhcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWFjaFN1Z2FyKHN1Z2FyOiBTdWdhcikge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIHN1Z2FyLmdldEFtb3VudCgpID4gMCAmJiBzdWdhci5hbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMudGFrZU9iamVjdChzdWdhcik7XG4gICAgICAgICAgICB0aGlzLmdvVG9BbnRoaWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWFjaEFudGhpbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldExvYWQoKSBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm5Bcm91bmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZXRMb2FkKCkgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGUoQm9hcmQuZ2V0UmFuZG9tQW5nbGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wKCk7XG5cbiAgICB9XG5cbiAgICByZWFjaEFwcGxlKGFwcGxlOiBBcHBsZSkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIGFwcGxlLmdldENhcnJpZXIoKS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICB0aGlzLnRha2VPYmplY3QoYXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5nb1RvQW50aGlsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Vlc0FwcGxlKGFwcGxlOiBBcHBsZSkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIGFwcGxlLmdldENhcnJpZXIoKS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICB0aGlzLmdvVG9UYXJnZXQoYXBwbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b0RlZ3JlZXMocmFkaWFucyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbiAgICB9O1xuXG4gICAgc2Vlc0J1ZyhidWc6IEJ1Zykge1xuXG4gICAgICAgIGxldCBjdXJyZW50RGlzdGFuY2UgPSBCb2FyZC5nZXREaXN0YW5jZUJldHdlZW5Qb3NpdGlvbnModGhpcy5wb3NpdGlvbiwgYnVnLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBpZiAodGhpcy5vbGRCdWdEaXN0YW5jZSA+IGN1cnJlbnREaXN0YW5jZSkge1xuICAgICAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy50b0RlZ3JlZXMoTWF0aC5hdGFuMihidWcuZ2V0UG9zaXRpb24oKS55IC0gdGhpcy5wb3NpdGlvbi55LCBidWcuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5wb3NpdGlvbi54KSk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZShhbmdsZSk7XG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9sZEJ1Z0Rpc3RhbmNlID0gY3VycmVudERpc3RhbmNlO1xuICAgICAgICBpZiAodGhpcy5nZXRMb2FkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZWFjaEJ1ZyhidWc6IEJ1Zykge1xuICAgICAgICB0aGlzLnR1cm5Bcm91bmQoKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9teWFudC50cyIsImltcG9ydCB7IExpdmluZ09iamVjdCB9IGZyb20gXCIuL2xpdmluZ09iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuaW1wb3J0IHsgQXBwbGUgfSBmcm9tIFwiLi9hcHBsZVwiO1xuaW1wb3J0IHsgQnVnIH0gZnJvbSBcIi4vYnVnXCI7XG5pbXBvcnQgeyBBbnRoaWxsIH0gZnJvbSBcIi4vYW50aGlsbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW50IGV4dGVuZHMgTGl2aW5nT2JqZWN0IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIEVORVJHWTogbnVtYmVyID0gNTAwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFOR0U6IG51bWJlciA9IDUwMDA7XG4gICAgcHVibGljIHN0YXRpYyBTUEVFRDogbnVtYmVyID0gMTtcblxuICAgIHB1YmxpYyBzdGF0aWMgVFVSTl9BUk9VTkRfU1BFRUQ6IG51bWJlciA9IDU7XG5cbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IG51bWJlciA9IDU7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IG51bWJlcjtcbiAgICBwcml2YXRlIHJvdW5kOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjdXJyZW50UmFuZ2U6IG51bWJlciA9IEFudC5SQU5HRTtcbiAgICBwcml2YXRlIHJlc3REaXN0YW5jZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNsb3VkOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBjdXJyZW50RW5lcmd5OiBudW1iZXIgPSBBbnQuRU5FUkdZO1xuICAgIHByaXZhdGUgdGFyZ2V0OiBCb2FyZE9iamVjdDtcbiAgICBwcml2YXRlIHR1cm46IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY3VycmVudExvYWQ6IEJvYXJkT2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IoYW5nbGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoeyB4OiAwLCB5OiAwIH0sIDUsIDIwLCBhbmdsZSk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdhbnQnKTtcbiAgICAgICAgdGhpcy5pbml0TW91c2VMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdE1vdXNlTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZSgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTcGVlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQuZ2V0Q2FycmllcigpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5jdXJyZW50TG9hZC5nZXRDYXJyaWVyKCkubGVuZ3RoICogMC4wNVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMC4wNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IEFudC5TUEVFRCkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IEFudC5TUEVFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpdmUodHVybjogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy50dXJuID0gdHVybjtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEVuZXJneSA8IEFudC5FTkVSR1kpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEVuZXJneSsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGlyZWQgPSB0aGlzLmN1cnJlbnRSYW5nZSA8PSBBbnQuUkFOR0UgLyAzICogMlxuICAgICAgICBpZiAodGhpcy50aXJlZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUaXJlZCgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RpcmVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuYWRkKCd0aXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSgndGlyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3BlZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UmFuZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmdvKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlc3QoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFJhbmdlID0gQW50LlJBTkdFO1xuICAgIH07XG5cbiAgICBnbygpIHtcbiAgICAgICAgc3VwZXIuZ28oKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UmFuZ2UgLT0gdGhpcy5zcGVlZDtcbiAgICB9XG5cbiAgICBpc1RpcmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aXJlZDtcbiAgICB9XG5cbiAgICBnb1RvQW50aGlsbCgpIHtcbiAgICAgICAgdGhpcy5nb1RvUG9zaXRpb24oQW50aGlsbC5QT1NJVElPTik7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24sIEFudGhpbGwuUE9TSVRJT04sIHRoaXMucG9zaXRpb24gPT0gQW50aGlsbC5QT1NJVElPTik7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbiA9PSBBbnRoaWxsLlBPU0lUSU9OKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50TG9hZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCBpbnN0YW5jZW9mIEFwcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9hZC5zdG9wQ2FycnlpbmcodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9hZC5zdG9wQ2FycnlpbmcodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFrZU9iamVjdChib2FyZE9iamVjdDogQm9hcmRPYmplY3QpIHtcbiAgICAgICAgaWYgKCFib2FyZE9iamVjdC5jb2xsaWRlc2RXaXRoKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2FyZE9iamVjdCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gYm9hcmRPYmplY3QucmVkdWNlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2FyZE9iamVjdCBpbnN0YW5jZW9mIEFwcGxlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gYm9hcmRPYmplY3Q7XG4gICAgICAgICAgICBib2FyZE9iamVjdC5jYXJyeSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY3JlYXNlRW5nZXJneShhbW91bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnRFbmVyZ3kgLT0gYW1vdW50O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZHJvcCgpO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvYWQoKTogQm9hcmRPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9hZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RW5nZXJ5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRFbmVyZ3k7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0VGlyZWQoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBzZWVzQXBwbGUoYXBwbGU6IEFwcGxlKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaEFwcGxlKGFwcGxlOiBBcHBsZSk6IHZvaWQ7XG4gICAgYWJzdHJhY3Qgc2Vlc1N1Z2FyKHN1Z2VyOiBTdWdhcik6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcmVhY2hTdWdhcihzdWdlcjogU3VnYXIpOiB2b2lkO1xuICAgIGFic3RyYWN0IHNlZXNCdWcoYnVnOiBCdWcpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlYWNoQnVnKGJ1ZzogQnVnKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaEFudGhpbGwoKTogdm9pZDtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FudC50cyIsImV4cG9ydCBlbnVtIEtleXMge1xuICAgIFRBQiA9IDksXG4gICAgRU5URVIgPSAxMyxcbiAgICBTSElGVCA9IDE2LFxuICAgIENUUkwgPSAxNyxcbiAgICBBTFQgPSAxOCxcbiAgICBFU0MgPSAyNyxcbiAgICBQT1MxID0gMzYsXG4gICAgTEVGVCA9IDM3LFxuICAgIFVQID0gMzgsXG4gICAgUklHSFQgPSAzOSxcbiAgICBET1dOID0gNDAsXG4gICAgU1BBQ0UgPSAzMixcbiAgICBQQUdFX1VQID0gMzMsXG4gICAgUEFHRV9ET1dOID0gMzQsXG4gICAgUCA9IDgwLFxuICAgIEQgPSA2OFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tleXMudHMiLCJpbXBvcnQgeyBMaXZpbmdPYmplY3QgfSBmcm9tICcuL2xpdmluZ09iamVjdCc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHsgQW50IH0gZnJvbSAnLi9hbnQnO1xuXG5leHBvcnQgY2xhc3MgQnVnIGV4dGVuZHMgTGl2aW5nT2JqZWN0IHtcbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IG51bWJlciA9IC40NTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihCb2FyZC5yYW5kb21Qb3NpdGlvbigyMCksIDEwLCAzMCwgQm9hcmQuZ2V0UmFuZG9tQW5nbGUoKSk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdidWcnKTtcbiAgICB9XG5cbiAgICBsaXZlKHR1cm46IG51bWJlcikge1xuXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpICogMTAwMCA+IDk5OSkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGUoQm9hcmQuZ2V0UmFuZG9tQW5nbGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdvKCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc2Vlc0FudGhpbGwoKSB7XG4gICAgICAgIHRoaXMudHVybkFyb3VuZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWVzQW50KGFudDogQW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ29Ub1RhcmdldChhbnQpO1xuICAgIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnVnLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==