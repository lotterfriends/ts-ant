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
                    this.ants.splice(this.ants.indexOf(ant_1));
                    continue;
                }
                if (ant_1.getEngery() <= 0) {
                    console.log(ant_1);
                    this.ants.splice(this.ants.indexOf(ant_1));
                    ant_1.destroy();
                    continue;
                    // TODO: decrease points
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
                    // let antLoad: BoardObject = ant.getLoad();
                    // if (antLoad) {
                    //     antLoad.destroy();
                    //     console.log(antLoad.getNode());
                    //     // TODO: add points;
                    // }
                }
                ant_1.live(this.turn);
            }
            for (var _f = 0, _g = this.bugs; _f < _g.length; _f++) {
                var bug = _g[_f];
                for (var _h = 0, _j = this.ants; _h < _j.length; _h++) {
                    var ant_2 = _j[_h];
                    if (bug.sees(ant_2)) {
                        bug.seesAnt(ant_2);
                        ant_2.seesBug(bug);
                    }
                    if (bug.collidesdWith(ant_2)) {
                        ant_2.decreaseEngergy(10);
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
        _this.maxSpeed = 1;
        _this.addCls('ant');
        _this.initMouseListener();
        return _this;
    }
    Ant.prototype.initMouseListener = function () {
        var _this = this;
        this.getNode().addEventListener('click', function (event) {
            console.log('Speed', _this.speed);
            console.log('Energy', _this.currentEnergy);
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
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    };
    Ant.prototype.live = function (turn) {
        if (this.currentEnergy <= 0) {
            return;
        }
        if (this.currentEnergy < Ant.ENERGY) {
            this.currentEnergy++;
        }
        this.turn++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjBlMDdmZTQwMTIyZjg0ZDQzOWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9ub2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWFkT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VnYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hbnRoaWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9saXZpbmdPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLG9DQUE4QjtBQUk5QjtJQUEyQix5QkFBSTtJQUszQjtRQUFBLFlBQ0ksa0JBQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUV4QjtRQURHLEtBQUksQ0FB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Q0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBQ3ZCLENBQUM7SUFFRCxrQkFBSSxHQUFKLFVBQUssSUFBWTtRQUViLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU0scUJBQU8sR0FBZCxVQUFlLEdBQVE7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsVUFBQztBQUFELENBQUMsQ0FwQndCLDJCQUFZLEdBb0JwQztBQXBCWSxrQkFBRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMGUwN2ZlNDAxMjJmODRkNDM5YyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDUwMDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gNTAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnYm9hcmQnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2NlbnRlcicpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBCb2FyZC5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBCb2FyZC5IRUlHSFQgKyAncHgnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29yZHMocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHZhciBjb3JkcyA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYWxmQm9hcmRXaWR0aCA9IEJvYXJkLldJRFRIIC8gMjtcbiAgICAgICAgdmFyIGhhbGZCb2FyZEhlaWdodCA9IEJvYXJkLkhFSUdIVCAvIDI7XG4gICAgICAgIGlmIChwb3NpdGlvbi54IDwgaGFsZkJvYXJkV2lkdGggKiAtMSkge1xuICAgICAgICAgICAgcG9zaXRpb24ueCA9IGhhbGZCb2FyZFdpZHRoICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnggPiBoYWxmQm9hcmRXaWR0aCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueCA9IGhhbGZCb2FyZFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi55IDwgaGFsZkJvYXJkSGVpZ2h0ICogLTEpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBoYWxmQm9hcmRIZWlnaHQgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueSA+IGhhbGZCb2FyZEhlaWdodCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueSA9IGhhbGZCb2FyZEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBjb3Jkcy54ID0gKGhhbGZCb2FyZFdpZHRoICsgcG9zaXRpb24ueCkgLSByYWRpdXM7XG4gICAgICAgIGNvcmRzLnkgPSAoaGFsZkJvYXJkV2lkdGggKyBwb3NpdGlvbi55KSAtIHJhZGl1cztcbiAgICAgICAgcmV0dXJuIGNvcmRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXRUaGVFZGdlKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBoYWxmQm9hcmRXaWR0aCA9IEJvYXJkLldJRFRIIC8gMjtcbiAgICAgICAgdmFyIGhhbGZCb2FyZEhlaWdodCA9IEJvYXJkLkhFSUdIVCAvIDI7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi54ID09PSBoYWxmQm9hcmRXaWR0aCAqIC0xIHx8IHBvc2l0aW9uLnggPT09IGhhbGZCb2FyZFdpZHRoIHx8XG4gICAgICAgICAgICBwb3NpdGlvbi55ID09PSBoYWxmQm9hcmRIZWlnaHQgKiAtMSB8fCBwb3NpdGlvbi55ID09PSBoYWxmQm9hcmRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21OZWdhdGl2ZShwYWRkaW5nOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDAgLSB0aGlzLnJhbmRvbVBvc2l0aXZlKHBhZGRpbmcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tUG9zaXRpdmUocGFkZGluZzogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoQm9hcmQuV0lEVEggLyAyIC0gcGFkZGluZykpICsgMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbVBvc2l0aW9uKHBhZGRpbmc6IG51bWJlciA9IDApOiBCb2FyZFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6ICgoTWF0aC5yYW5kb20oKSAqIDEpID4gLjUpID8gQm9hcmQucmFuZG9tUG9zaXRpdmUocGFkZGluZykgOiBCb2FyZC5yYW5kb21OZWdhdGl2ZShwYWRkaW5nKSxcbiAgICAgICAgICAgIHk6ICgoTWF0aC5yYW5kb20oKSAqIDEpID4gLjUpID8gQm9hcmQucmFuZG9tUG9zaXRpdmUocGFkZGluZykgOiBCb2FyZC5yYW5kb21OZWdhdGl2ZShwYWRkaW5nKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tQW5nbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2MCk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JvYXJkLnRzIiwiZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgY2xzOiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENscyguLi5jbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKC4uLmNscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25vZGUudHMiLCJpbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgRGVhZE9iamVjdCBleHRlbmRzIEJvYXJkT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2RlYWQtb2JqZWN0Jyk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlYWRPYmplY3QudHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkT2JqZWN0IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IEJvYXJkUG9zaXRpb247XG4gICAgcHJvdGVjdGVkIHZpZXdSYWRpdXM6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgcmFkaXVzOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbj86IEJvYXJkUG9zaXRpb24sIHJhZGl1cz86IG51bWJlciwgdmlld1JhZGl1cz86IG51bWJlciwgYW5nbGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZC1vYmplY3QnKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgICAgICBpZiAodHlwZW9mIHZpZXdSYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdSYWRpdXMgPSB2aWV3UmFkaXVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uQW5kQW5nbGVPbkJvYXJkKHBvc2l0aW9uLCBhbmdsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25PbkJvYXJkKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZpZXdSYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBsZXQgdmlld1JhZGl1c09iajogTm9kZSA9IG5ldyBOb2RlKCdzcGFuJywgJ3ZpZXdSYWRpdXMnKTtcbiAgICAgICAgICAgIHZpZXdSYWRpdXNPYmouYWRkQ2xzKCdjZW50ZXInKTtcbiAgICAgICAgICAgIHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpLnN0eWxlLndpZHRoID0gdmlld1JhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICAgICAgdmlld1JhZGl1c09iai5nZXROb2RlKCkuc3R5bGUuaGVpZ2h0ID0gdmlld1JhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTaXplKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnN0eWxlLndpZHRoID0gdGhpcy5yYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLnJhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNvbGxpZGVzZFdpdGgob3RoZXJCb2FyZE9iamVjdDogQm9hcmRPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEJvYXJkT2JqZWN0LmNvbGxpc2lvbih0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgb3RoZXJCb2FyZE9iamVjdC5wb3NpdGlvbiwgb3RoZXJCb2FyZE9iamVjdC5yYWRpdXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWVzKG90aGVyQm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBCb2FyZE9iamVjdC5jb2xsaXNpb24odGhpcy5wb3NpdGlvbiwgdGhpcy52aWV3UmFkaXVzLCBvdGhlckJvYXJkT2JqZWN0LnBvc2l0aW9uLCBvdGhlckJvYXJkT2JqZWN0LmdldFNpemUoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBvc2l0aW9uQW5kQW5nbGVPbkJvYXJkKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB2YXIgY29yZHMgPSBCb2FyZC5nZXRDb3Jkcyh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9IFsndHJhbnNsYXRlKCcgKyBjb3Jkcy54ICsgJ3B4LCAnICsgY29yZHMueSArICdweCknLCAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknXS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBvc2l0aW9uT25Cb2FyZChwb3NpdGlvbjogQm9hcmRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHZhciBjb3JkcyA9IEJvYXJkLmdldENvcmRzKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgdmFyIHJvdGF0ZU1hdGNoZXMgPSB0cmFuc2Zvcm0ubWF0Y2goLyhyb3RhdGVcXCguKj9cXCkpL2cpO1xuICAgICAgICBpZiAodHJhbnNmb3JtICYmIHJvdGF0ZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9IFsndHJhbnNsYXRlKCcgKyBjb3Jkcy54ICsgJ3B4LCAnICsgY29yZHMueSArICdweCknLCByb3RhdGVNYXRjaGVzXS5qb2luKCcgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyBjb3Jkcy54ICsgJ3B4LCAnICsgY29yZHMueSArICdweCknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHZpZXdJbkRpcmVjdGlvbihhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZU1hdGNoZXMgPSB0cmFuc2Zvcm0ubWF0Y2goLyh0cmFuc2xhdGVcXCguKj9cXCkpL2cpO1xuICAgICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zbGF0ZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9IFt0cmFuc2xhdGVNYXRjaGVzWzBdLCAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknXS5qb2luKCcgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKCcgKyBhbmdsZSArICdkZWcpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBCb2FyZFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJhZGl1cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZpZXdSYWRpdXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld1JhZGl1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpdXMgKiAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29sbGlzaW9uKHBvc2l0aW9uQTogQm9hcmRQb3NpdGlvbiwgc2l6ZUE6IG51bWJlciwgcG9zaXRpb25COiBCb2FyZFBvc2l0aW9uLCBzaXplQjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZWN0MSA9IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uQS54LFxuICAgICAgICAgICAgeTogcG9zaXRpb25BLnksXG4gICAgICAgICAgICB3aWR0aDogc2l6ZUEsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemVBXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlY3QyID0ge1xuICAgICAgICAgICAgeDogcG9zaXRpb25CLngsXG4gICAgICAgICAgICB5OiBwb3NpdGlvbkIueSxcbiAgICAgICAgICAgIHdpZHRoOiBzaXplQixcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZUJcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJlxuICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxuICAgICAgICAgICAgcmVjdDEueSA8IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQgJiZcbiAgICAgICAgICAgIHJlY3QxLmhlaWdodCArIHJlY3QxLnkgPiByZWN0Mi55O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmRPYmplY3QudHMiLCJpbXBvcnQgeyBEZWFkT2JqZWN0IH0gZnJvbSBcIi4vZGVhZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEFudCB9IGZyb20gXCIuL2FudFwiO1xuXG5leHBvcnQgY2xhc3MgU3VnYXIgZXh0ZW5kcyBEZWFkT2JqZWN0IHtcblxuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIGFudHM6IEFycmF5PEFudD4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlciA9IDEwLCBhbW91bnQ6IG51bWJlciA9IDIwLCBhbnQ/OiBBbnQpIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHJhZGl1cyk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdzdWdhcicpO1xuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcbiAgICAgICAgaWYgKGFudCkge1xuICAgICAgICAgICAgdGhpcy5hbnRzLnB1c2goYW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWR1Y2UoYW50OiBBbnQpOiBTdWdhciB7XG4gICAgICAgIGlmICh0aGlzLmFtb3VudCA9PT0gMSAmJiB0aGlzLmFudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbW91bnQtLTtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzIDw9IDEpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDAuNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNpemUoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWdhcih0aGlzLnBvc2l0aW9uLCAxLCAxLCBhbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbW91bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGFudD86IEFudCk6IHZvaWQge1xuICAgICAgICBpZiAoYW50KSB7XG4gICAgICAgICAgICB0aGlzLmFudHMuc3BsaWNlKHRoaXMuYW50cy5pbmRleE9mKGFudCkpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VnYXIudHMiLCJpbXBvcnQgeyBEZWFkT2JqZWN0IH0gZnJvbSAnLi9kZWFkT2JqZWN0JztcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tICcuL2JvYXJkUG9zaXRpb24nO1xuaW1wb3J0IHsgQW50IH0gZnJvbSAnLi9hbnQnO1xuXG5leHBvcnQgY2xhc3MgQXBwbGUgZXh0ZW5kcyBEZWFkT2JqZWN0IHtcbiAgICBwcml2YXRlIGNhcnJpZXI6IEFycmF5PEFudD4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCAyMCk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdhcHBsZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYXJyeShhbnQ6IEFudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhcnJpZXIucHVzaChhbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wQ2FycnlpbmcoYW50OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYXJyaWVyLnNwbGljZSh0aGlzLmNhcnJpZXIuaW5kZXhPZihhbnQpLCAxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2FycmllcigpOiBBcnJheTxBbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FycmllcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveShhbnQ/OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2Fycmllci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY2Fycmllci5zcGxpY2UodGhpcy5jYXJyaWVyLmluZGV4T2YoYW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNhcnJpZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcGxlLnRzIiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgRGVhZE9iamVjdCB9IGZyb20gXCIuL2RlYWRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBBbnRoaWxsIGV4dGVuZHMgRGVhZE9iamVjdCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSAyMDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gMjA7XG4gICAgcHVibGljIHN0YXRpYyBSQURJVVM6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgUE9TSVRJT046IEJvYXJkUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBbnRoaWxsLlBPU0lUSU9OLCBBbnRoaWxsLlJBRElVUyk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdhbnRoaWxsJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FudGhpbGwudHMiLCJpbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGl2aW5nT2JqZWN0IGV4dGVuZHMgQm9hcmRPYmplY3Qge1xuXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uO1xuICAgIHByb3RlY3RlZCBhbmdsZTogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBzcGVlZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyLCB2aWV3UmFkaXVzPzogbnVtYmVyLCBhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzLCB2aWV3UmFkaXVzLCBhbmdsZSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLmFkZENscygnbGl2aW5nLW9iamVjdCcpO1xuICAgIH1cblxuICAgIGdvKCkge1xuICAgICAgICBsZXQgdG1wQW5nbGUgPSB0aGlzLmFuZ2xlO1xuICAgICAgICBpZiAoQm9hcmQuYXRUaGVFZGdlKHRoaXMucG9zaXRpb24pKSB7XG4gICAgICAgICAgICB0bXBBbmdsZSA9IHRtcEFuZ2xlIC0gOTA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFyYzogbnVtYmVyID0gTWF0aC5QSSAqIHRtcEFuZ2xlIC8gMTgwLjBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gKE1hdGguY29zKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gKE1hdGguc2luKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbkFuZEFuZ2xlT25Cb2FyZCh0aGlzLnBvc2l0aW9uLCB0bXBBbmdsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHR1cm5Bcm91bmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm90YXRlKDE4MCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJvdGF0ZShhbmdsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gYW5nbGU7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQodGhpcy5wb3NpdGlvbiwgdGhpcy5hbmdsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdvVG9UYXJnZXQoYm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ29Ub1Bvc2l0aW9uKGJvYXJkT2JqZWN0LmdldFBvc2l0aW9uKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnb1RvUG9zaXRpb24ocG9zaXRpb246IEJvYXJkUG9zaXRpb24pOiB2b2lkIHtcbiAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnBvc2l0aW9uLnggLSBwb3NpdGlvbi54O1xuICAgICAgICBsZXQgbmV3WSA9IHRoaXMucG9zaXRpb24ueSAtIHBvc2l0aW9uLnk7XG4gICAgICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgICAgICAgbmV3WCA9IG5ld1ggKiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdZIDwgMCkge1xuICAgICAgICAgICAgbmV3WSA9IG5ld1kgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGlzdGFuY2U6IG51bWJlciA9IE1hdGguc3FydChuZXdYICogbmV3WCArIG5ld1kgKiBuZXdZKTtcbiAgICAgICAgbGV0IGZyYWN0aW9uOiBudW1iZXIgPSBuZXdZIC8gZGlzdGFuY2U7XG4gICAgICAgIGxldCBkaXJlY3Rpb246IG51bWJlciA9IE1hdGguYXNpbihmcmFjdGlvbikgKiAxODAgLyBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA8IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPiBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAzNjAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPiBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55ID4gcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uICs9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA+IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPCBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxODAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3SW5EaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBsaXZlKHR1cm46IG51bWJlcik6IHZvaWQ7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saXZpbmdPYmplY3QudHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgQW50aGlsbCB9IGZyb20gXCIuL2FudGhpbGxcIjtcbmltcG9ydCB7IFN1Z2FyIH0gZnJvbSBcIi4vc3VnYXJcIjtcbmltcG9ydCB7IEFudCB9IGZyb20gXCIuL2FudFwiO1xuaW1wb3J0IHsgQXBwbGUgfSBmcm9tIFwiLi9hcHBsZVwiO1xuaW1wb3J0IHsgTXlBbnQgfSBmcm9tIFwiLi9teWFudFwiO1xuaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgS2V5cyB9IGZyb20gXCIuL2tleXNcIjtcbmltcG9ydCB7IEJ1ZyB9IGZyb20gXCIuL2J1Z1wiO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRBbmdsZTogbnVtYmVyID0gMzAwLjI7XG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICBwcml2YXRlIGFudGhpbGw6IEFudGhpbGwgPSBuZXcgQW50aGlsbCgpO1xuICAgIHByaXZhdGUgc3VnYXI6IEFycmF5PFN1Z2FyPiA9IFtdO1xuICAgIHByaXZhdGUgYXBwbGVzOiBBcnJheTxBcHBsZT4gPSBbXTtcbiAgICBwcml2YXRlIGFudHM6IEFycmF5PEFudD4gPSBbXTtcbiAgICBwcml2YXRlIGJ1Z3M6IEFycmF5PEJ1Zz4gPSBbXTtcbiAgICBwcml2YXRlIHNwYXduRGVsYXk6IG51bWJlciA9IDY7XG4gICAgcHJpdmF0ZSBtYXhBbnRzOiBudW1iZXIgPSA1MDtcbiAgICBwcml2YXRlIHR1cm46IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnZ2FtZScpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuYm9hcmQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDIwKSwgeTogQm9hcmQucmFuZG9tUG9zaXRpdmUoMjApIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IEJvYXJkLnJhbmRvbVBvc2l0aXZlKDIwKSwgeTogQm9hcmQucmFuZG9tUG9zaXRpdmUoMjApIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IEJvYXJkLnJhbmRvbVBvc2l0aXZlKDIwKSwgeTogQm9hcmQucmFuZG9tTmVnYXRpdmUoMjApIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDIwKSwgeTogQm9hcmQucmFuZG9tTmVnYXRpdmUoMjApIH0pKTtcbiAgICAgICAgdGhpcy5hcHBsZXMucHVzaChuZXcgQXBwbGUoeyB4OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDUwKSB9KSk7XG4gICAgICAgIHRoaXMuYnVncy5wdXNoKG5ldyBCdWcoKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbSh0aGlzLmFudGhpbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgZm9yIChsZXQgc3VnYXIgb2YgdGhpcy5zdWdhcikge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKHN1Z2FyLmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgYXBwbGUgb2YgdGhpcy5hcHBsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShhcHBsZS5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGJ1ZyBvZiB0aGlzLmJ1Z3MpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShidWcuZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB2YXIgYW5nbGU6IG51bWJlciA9IDMwMC4yO1xuICAgICAgICAvLyB3aGlsZSAodGhpcy5hbnRzLmxlbmd0aCA8IHRoaXMubWF4QW50cykge1xuICAgICAgICAvLyAgICAgdmFyIGFudCA9IG5ldyBNeUFudChhbmdsZSk7XG4gICAgICAgIC8vICAgICB0aGlzLmFudHMucHVzaChhbnQpO1xuICAgICAgICAvLyAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGFudC5nZXROb2RlKCkpO1xuICAgICAgICAvLyAgICAgYW5nbGUgLT0gNy4yO1xuICAgICAgICAvLyAgICAgaWYgKGFuZ2xlIDwgMCkge1xuICAgICAgICAvLyAgICAgICAgIGFuZ2xlICs9IDM2MDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5pbml0S2V5Ym9hcmRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEtleWJvYXJkTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5QKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZSA9ICF0aGlzLnBhdXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLkQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QudG9nZ2xlKCdkZWJ1ZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtYWluIGxvb3BcbiAgICAgKi9cbiAgICBwcml2YXRlIHJ1bigpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMucGF1c2UpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYW50cy5sZW5ndGggPCB0aGlzLm1heEFudHMgJiYgdGhpcy50dXJuICUgdGhpcy5zcGF3bkRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFudCA9IG5ldyBNeUFudCh0aGlzLmN1cnJlbnRBbmdsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbnRzLnB1c2goYW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYW50LmdldE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgLT0gNy4yO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmdsZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgKz0gMzYwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgYW50IG9mIHRoaXMuYW50cykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGFudC5pc0RlYWQoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFudHMuc3BsaWNlKHRoaXMuYW50cy5pbmRleE9mKGFudCkpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYW50LmdldEVuZ2VyeSgpIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnRzLnNwbGljZSh0aGlzLmFudHMuaW5kZXhPZihhbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgYW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGRlY3JlYXNlIHBvaW50c1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFsbCBzdWdhclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHN1Z2FyIG9mIHRoaXMuc3VnYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudC5zZWVzKHN1Z2FyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnNlZXNTdWdhcihzdWdhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudC5jb2xsaWRlc2RXaXRoKHN1Z2FyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnJlYWNoU3VnYXIoc3VnYXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWxsIGFwcGxlc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGFwcGxlIG9mIHRoaXMuYXBwbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnQuc2VlcyhhcHBsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFudC5zZWVzQXBwbGUoYXBwbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZSwgc28gdGhleSBoYXZlIHRvIHJlYWNoIHRoZSBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvYXJkT2JqZWN0LmNvbGxpc2lvbihhbnQuZ2V0UG9zaXRpb24oKSwgYW50LmdldFNpemUoKSwgYXBwbGUuZ2V0UG9zaXRpb24oKSwgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFudC5yZWFjaEFwcGxlKGFwcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBhbnRMb2FkOiBCb2FyZE9iamVjdCA9IGFudC5nZXRMb2FkKCk7XG4gICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWdhci5pbmRleE9mKGFudExvYWQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWdhci5wdXNoKGFudExvYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGFudExvYWQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkIGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkLmdldENhcnJpZXIoKVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuc2V0UG9zaXRpb25PbkJvYXJkKGFudExvYWQuZ2V0Q2FycmllcigpWzBdLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50TG9hZC5zZXRQb3NpdGlvbk9uQm9hcmQoYW50LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFudC5jb2xsaWRlc2RXaXRoKHRoaXMuYW50aGlsbCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbnQucmVzdCgpO1xuICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hBbnRoaWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRyb3B0IGF0IGFudGhpbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkICYmICFhbnQuZ2V0TG9hZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Z2FyLnNwbGljZSh0aGlzLnN1Z2FyLmluZGV4T2YoYW50TG9hZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLmRlc3Ryb3koYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGxlcy5zcGxpY2UodGhpcy5hcHBsZXMuaW5kZXhPZihhbnRMb2FkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuZGVzdHJveShhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZGQgcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBhbnRMb2FkOiBCb2FyZE9iamVjdCA9IGFudC5nZXRMb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChhbnRMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhbnRMb2FkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGFudExvYWQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIFRPRE86IGFkZCBwb2ludHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYW50LmxpdmUodGhpcy50dXJuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgYnVnIG9mIHRoaXMuYnVncykge1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYW50IG9mIHRoaXMuYW50cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnVnLnNlZXMoYW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVnLnNlZXNBbnQoYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFudC5zZWVzQnVnKGJ1Zyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1Zy5jb2xsaWRlc2RXaXRoKGFudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFudC5kZWNyZWFzZUVuZ2VyZ3koMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnVnLmxpdmUodGhpcy50dXJuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50dXJuKys7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxudmFyIGdhbWUgPSBuZXcgR2FtZSgpO1xuZ2FtZS5zdGFydCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUudHMiLCJpbXBvcnQgeyBBbnQgfSBmcm9tIFwiLi9hbnRcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBTdWdhciB9IGZyb20gXCIuL3N1Z2FyXCI7XG5pbXBvcnQgeyBBcHBsZSB9IGZyb20gXCIuL2FwcGxlXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBCdWcgfSBmcm9tIFwiLi9idWdcIjtcblxuZXhwb3J0IGNsYXNzIE15QW50IGV4dGVuZHMgQW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoYW5nbGUpO1xuICAgIH1cblxuICAgIGdldFRpcmVkKCkge1xuICAgICAgICB0aGlzLmdvVG9BbnRoaWxsKCk7XG4gICAgfVxuXG4gICAgc2Vlc1N1Z2FyKHN1Z2FyOiBTdWdhcikge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIHN1Z2FyLmdldEFtb3VudCgpID4gMCAmJiBzdWdhci5hbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub1RhcmdldChzdWdhcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWFjaFN1Z2FyKHN1Z2FyOiBTdWdhcikge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIHN1Z2FyLmdldEFtb3VudCgpID4gMCAmJiBzdWdhci5hbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMudGFrZU9iamVjdChzdWdhcik7XG4gICAgICAgICAgICB0aGlzLmdvVG9BbnRoaWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWFjaEFudGhpbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldExvYWQoKSBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm5Bcm91bmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZXRMb2FkKCkgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGUoQm9hcmQuZ2V0UmFuZG9tQW5nbGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wKCk7XG5cbiAgICB9XG5cbiAgICByZWFjaEFwcGxlKGFwcGxlOiBBcHBsZSkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIGFwcGxlLmdldENhcnJpZXIoKS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICB0aGlzLnRha2VPYmplY3QoYXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5nb1RvQW50aGlsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Vlc0FwcGxlKGFwcGxlOiBBcHBsZSkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIGFwcGxlLmdldENhcnJpZXIoKS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICB0aGlzLmdvVG9UYXJnZXQoYXBwbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Vlc0J1ZyhidWc6IEJ1Zykge1xuICAgICAgICB0aGlzLnR1cm5Bcm91bmQoKTtcbiAgICB9XG5cbiAgICByZWFjaEJ1ZyhidWc6IEJ1Zykge1xuICAgICAgICB0aGlzLnR1cm5Bcm91bmQoKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9teWFudC50cyIsImltcG9ydCB7IExpdmluZ09iamVjdCB9IGZyb20gXCIuL2xpdmluZ09iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IFN1Z2FyIH0gZnJvbSBcIi4vc3VnYXJcIjtcbmltcG9ydCB7IEFwcGxlIH0gZnJvbSBcIi4vYXBwbGVcIjtcbmltcG9ydCB7IEJ1ZyB9IGZyb20gXCIuL2J1Z1wiO1xuaW1wb3J0IHsgQW50aGlsbCB9IGZyb20gXCIuL2FudGhpbGxcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFudCBleHRlbmRzIExpdmluZ09iamVjdCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIHN0YXRpYyBFTkVSR1k6IG51bWJlciA9IDUwMDtcbiAgICBwdWJsaWMgc3RhdGljIFJBTkdFOiBudW1iZXIgPSA1MDAwO1xuXG4gICAgcHVibGljIHN0YXRpYyBUVVJOX0FST1VORF9TUEVFRDogbnVtYmVyID0gNTtcblxuICAgIHByb3RlY3RlZCBzcGVlZDogbnVtYmVyID0gNTtcbiAgICBwcml2YXRlIGRlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgcm91bmQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5nZTogbnVtYmVyID0gQW50LlJBTkdFO1xuICAgIHByaXZhdGUgcmVzdERpc3RhbmNlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2xvdWQ6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRFbmVyZ3k6IG51bWJlciA9IEFudC5FTkVSR1k7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEJvYXJkT2JqZWN0O1xuICAgIHByaXZhdGUgdHVybjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjdXJyZW50TG9hZDogQm9hcmRPYmplY3Q7XG4gICAgcHJpdmF0ZSBtYXhTcGVlZDogbnVtYmVyID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHsgeDogMCwgeTogMCB9LCA1LCAyMCwgYW5nbGUpO1xuICAgICAgICB0aGlzLmFkZENscygnYW50Jyk7XG4gICAgICAgIHRoaXMuaW5pdE1vdXNlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRNb3VzZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdldE5vZGUoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NwZWVkJywgdGhpcy5zcGVlZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRW5lcmd5JywgdGhpcy5jdXJyZW50RW5lcmd5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTcGVlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQuZ2V0Q2FycmllcigpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5jdXJyZW50TG9hZC5nZXRDYXJyaWVyKCkubGVuZ3RoICogMC4wNVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMC4wNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IHRoaXMubWF4U3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGl2ZSh0dXJuOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbmVyZ3kgPCBBbnQuRU5FUkdZKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRFbmVyZ3krKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHVybisrO1xuICAgICAgICB0aGlzLnRpcmVkID0gdGhpcy5jdXJyZW50UmFuZ2UgPD0gQW50LlJBTkdFIC8gMyAqIDJcbiAgICAgICAgaWYgKHRoaXMudGlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlyZWQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0aXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmFkZCgndGlyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUoJ3RpcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNwZWVkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFJhbmdlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5nbygpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXN0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRSYW5nZSA9IEFudC5SQU5HRTtcbiAgICB9O1xuXG4gICAgZ28oKSB7XG4gICAgICAgIHN1cGVyLmdvKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFJhbmdlIC09IHRoaXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgaXNUaXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlyZWQ7XG4gICAgfVxuXG4gICAgZ29Ub0FudGhpbGwoKSB7XG4gICAgICAgIHRoaXMuZ29Ub1Bvc2l0aW9uKEFudGhpbGwuUE9TSVRJT04pO1xuICAgIH1cblxuICAgIGRyb3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc2l0aW9uLCBBbnRoaWxsLlBPU0lUSU9OLCB0aGlzLnBvc2l0aW9uID09IEFudGhpbGwuUE9TSVRJT04pO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24gPT0gQW50aGlsbC5QT1NJVElPTikge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudExvYWQuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWQuc3RvcENhcnJ5aW5nKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9hZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRha2VPYmplY3QoYm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KSB7XG4gICAgICAgIGlmICghYm9hcmRPYmplY3QuY29sbGlkZXNkV2l0aCh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmRPYmplY3QgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9hZCA9IGJvYXJkT2JqZWN0LnJlZHVjZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmRPYmplY3QgaW5zdGFuY2VvZiBBcHBsZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9hZCA9IGJvYXJkT2JqZWN0O1xuICAgICAgICAgICAgYm9hcmRPYmplY3QuY2FycnkodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNyZWFzZUVuZ2VyZ3koYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RW5lcmd5IC09IGFtb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEZWFkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWFkO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZHJvcCgpO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvYWQoKTogQm9hcmRPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9hZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RW5nZXJ5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRFbmVyZ3k7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0VGlyZWQoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBzZWVzQXBwbGUoYXBwbGU6IEFwcGxlKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaEFwcGxlKGFwcGxlOiBBcHBsZSk6IHZvaWQ7XG4gICAgYWJzdHJhY3Qgc2Vlc1N1Z2FyKHN1Z2VyOiBTdWdhcik6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcmVhY2hTdWdhcihzdWdlcjogU3VnYXIpOiB2b2lkO1xuICAgIGFic3RyYWN0IHNlZXNCdWcoYnVnOiBCdWcpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlYWNoQnVnKGJ1ZzogQnVnKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaEFudGhpbGwoKTogdm9pZDtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FudC50cyIsImV4cG9ydCBlbnVtIEtleXMge1xuICAgIFRBQiA9IDksXG4gICAgRU5URVIgPSAxMyxcbiAgICBTSElGVCA9IDE2LFxuICAgIENUUkwgPSAxNyxcbiAgICBBTFQgPSAxOCxcbiAgICBFU0MgPSAyNyxcbiAgICBQT1MxID0gMzYsXG4gICAgTEVGVCA9IDM3LFxuICAgIFVQID0gMzgsXG4gICAgUklHSFQgPSAzOSxcbiAgICBET1dOID0gNDAsXG4gICAgU1BBQ0UgPSAzMixcbiAgICBQQUdFX1VQID0gMzMsXG4gICAgUEFHRV9ET1dOID0gMzQsXG4gICAgUCA9IDgwLFxuICAgIEQgPSA2OFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tleXMudHMiLCJpbXBvcnQgeyBMaXZpbmdPYmplY3QgfSBmcm9tICcuL2xpdmluZ09iamVjdCc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHsgQW50IH0gZnJvbSAnLi9hbnQnO1xuXG5leHBvcnQgY2xhc3MgQnVnIGV4dGVuZHMgTGl2aW5nT2JqZWN0IHtcbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IG51bWJlciA9IC4yNTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihCb2FyZC5yYW5kb21Qb3NpdGlvbigyMCksIDEwLCAyMCwgQm9hcmQuZ2V0UmFuZG9tQW5nbGUoKSk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdidWcnKTtcbiAgICB9XG5cbiAgICBsaXZlKHR1cm46IG51bWJlcikge1xuXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpICogMTAwMCA+IDk5OSkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGUoQm9hcmQuZ2V0UmFuZG9tQW5nbGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdvKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlZXNBbnQoYW50OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nb1RvVGFyZ2V0KGFudCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1Zy50cyJdLCJzb3VyY2VSb290IjoiIn0=