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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
    Board.randomNegative = function (padding) {
        if (padding === void 0) { padding = 0; }
        return 0 - this.randomPositive(padding);
    };
    Board.randomPositive = function (padding) {
        if (padding === void 0) { padding = 0; }
        return Math.floor(Math.random() * (Board.WIDTH / 2 - padding)) + 0;
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
var node_1 = __webpack_require__(0);
var board_1 = __webpack_require__(1);
var anthill_1 = __webpack_require__(5);
var sugar_1 = __webpack_require__(4);
var apple_1 = __webpack_require__(6);
var myant_1 = __webpack_require__(8);
var boardObject_1 = __webpack_require__(3);
var keys_1 = __webpack_require__(11);
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
        this.board.addItem(this.anthill.getNode());
        for (var _i = 0, _a = this.sugar; _i < _a.length; _i++) {
            var sugar = _a[_i];
            this.board.addItem(sugar.getNode());
        }
        for (var _b = 0, _c = this.apples; _b < _c.length; _b++) {
            var apple = _c[_b];
            this.board.addItem(apple.getNode());
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
var ant_1 = __webpack_require__(9);
var sugar_1 = __webpack_require__(4);
var apple_1 = __webpack_require__(6);
var board_1 = __webpack_require__(1);
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
    return MyAnt;
}(ant_1.Ant));
exports.MyAnt = MyAnt;


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
var livingObject_1 = __webpack_require__(10);
var sugar_1 = __webpack_require__(4);
var apple_1 = __webpack_require__(6);
var anthill_1 = __webpack_require__(5);
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
        _this.maxSpeed = 1;
        _this.addCls('ant');
        return _this;
    }
    Ant.prototype.setSpeed = function () {
        if (!this.currentLoad) {
            this.speed = 1;
        }
        if (this.currentLoad instanceof sugar_1.Sugar) {
            this.speed = 0.5;
        }
        if (this.currentLoad instanceof apple_1.Apple) {
            if (this.currentLoad.getCarrier().length > 1) {
                this.speed = this.currentLoad.getCarrier().length * 0.1;
            }
            else {
                this.speed = 0.1;
            }
        }
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    };
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
    Ant.prototype.getLoad = function () {
        return this.currentLoad;
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTg0MDE3MTQ5OWEyMTJkNTQ0N2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWFkT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9ib2FyZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VnYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FudGhpbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9teWFudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saXZpbmdPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0lBR0ksY0FBWSxJQUFZLEVBQUUsR0FBVyxFQUFFLE9BQWdCO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFD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QUNQLGtDQUFVO0lBQ1YsZ0NBQVM7SUFDVCxrQ0FBVTtJQUNWLHNDQUFZO0lBQ1osMENBQWM7SUFDZCwwQkFBTTtJQUNOLDBCQUFNO0FBQ1YsQ0FBQyxFQWpCVyxJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFpQmYiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTg0MDE3MTQ5OWEyMTJkNTQ0N2UiLCJleHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBjbHM6IHN0cmluZywgY29udGVudD86IHN0cmluZykge1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm9kZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ2xzKC4uLmNsczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoLi4uY2xzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbm9kZS50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDUwMDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gNTAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnYm9hcmQnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2NlbnRlcicpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBCb2FyZC5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBCb2FyZC5IRUlHSFQgKyAncHgnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29yZHMocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHZhciBjb3JkcyA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYWxmQm9hcmRXaWR0aCA9IEJvYXJkLldJRFRIIC8gMjtcbiAgICAgICAgdmFyIGhhbGZCb2FyZEhlaWdodCA9IEJvYXJkLkhFSUdIVCAvIDI7XG4gICAgICAgIGlmIChwb3NpdGlvbi54IDwgaGFsZkJvYXJkV2lkdGggKiAtMSkge1xuICAgICAgICAgICAgcG9zaXRpb24ueCA9IGhhbGZCb2FyZFdpZHRoICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnggPiBoYWxmQm9hcmRXaWR0aCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueCA9IGhhbGZCb2FyZFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi55IDwgaGFsZkJvYXJkSGVpZ2h0ICogLTEpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBoYWxmQm9hcmRIZWlnaHQgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueSA+IGhhbGZCb2FyZEhlaWdodCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueSA9IGhhbGZCb2FyZEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBjb3Jkcy54ID0gKGhhbGZCb2FyZFdpZHRoICsgcG9zaXRpb24ueCkgLSByYWRpdXM7XG4gICAgICAgIGNvcmRzLnkgPSAoaGFsZkJvYXJkV2lkdGggKyBwb3NpdGlvbi55KSAtIHJhZGl1cztcbiAgICAgICAgcmV0dXJuIGNvcmRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXRUaGVFZGdlKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBoYWxmQm9hcmRXaWR0aCA9IEJvYXJkLldJRFRIIC8gMjtcbiAgICAgICAgdmFyIGhhbGZCb2FyZEhlaWdodCA9IEJvYXJkLkhFSUdIVCAvIDI7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi54ID09PSBoYWxmQm9hcmRXaWR0aCAqIC0xIHx8IHBvc2l0aW9uLnggPT09IGhhbGZCb2FyZFdpZHRoIHx8XG4gICAgICAgICAgICBwb3NpdGlvbi55ID09PSBoYWxmQm9hcmRIZWlnaHQgKiAtMSB8fCBwb3NpdGlvbi55ID09PSBoYWxmQm9hcmRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21OZWdhdGl2ZShwYWRkaW5nOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDAgLSB0aGlzLnJhbmRvbVBvc2l0aXZlKHBhZGRpbmcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tUG9zaXRpdmUocGFkZGluZzogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoQm9hcmQuV0lEVEggLyAyIC0gcGFkZGluZykpICsgMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUFuZ2xlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjApO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZC50cyIsImltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWFkT2JqZWN0IGV4dGVuZHMgQm9hcmRPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCByYWRpdXMpO1xuICAgICAgICB0aGlzLmFkZENscygnZGVhZC1vYmplY3QnKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVhZE9iamVjdC50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmRPYmplY3QgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogQm9hcmRQb3NpdGlvbjtcbiAgICBwcm90ZWN0ZWQgdmlld1JhZGl1czogbnVtYmVyO1xuICAgIHByb3RlY3RlZCByYWRpdXM6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgYW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uPzogQm9hcmRQb3NpdGlvbiwgcmFkaXVzPzogbnVtYmVyLCB2aWV3UmFkaXVzPzogbnVtYmVyLCBhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcignZGl2JywgJ2JvYXJkLW9iamVjdCcpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5zZXRTaXplKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygdmlld1JhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMudmlld1JhZGl1cyA9IHZpZXdSYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFuZ2xlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQocG9zaXRpb24sIGFuZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbk9uQm9hcmQocG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygdmlld1JhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGxldCB2aWV3UmFkaXVzT2JqOiBOb2RlID0gbmV3IE5vZGUoJ3NwYW4nLCAndmlld1JhZGl1cycpO1xuICAgICAgICAgICAgdmlld1JhZGl1c09iai5hZGRDbHMoJ2NlbnRlcicpO1xuICAgICAgICAgICAgdmlld1JhZGl1c09iai5nZXROb2RlKCkuc3R5bGUud2lkdGggPSB2aWV3UmFkaXVzICogMiArICdweCc7XG4gICAgICAgICAgICB2aWV3UmFkaXVzT2JqLmdldE5vZGUoKS5zdHlsZS5oZWlnaHQgPSB2aWV3UmFkaXVzICogMiArICdweCc7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0odmlld1JhZGl1c09iai5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNpemUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSB0aGlzLnJhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IHRoaXMucmFkaXVzICogMiArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY29sbGlkZXNkV2l0aChvdGhlckJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gQm9hcmRPYmplY3QuY29sbGlzaW9uKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzLCBvdGhlckJvYXJkT2JqZWN0LnBvc2l0aW9uLCBvdGhlckJvYXJkT2JqZWN0LnJhZGl1cyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlZXMob3RoZXJCb2FyZE9iamVjdDogQm9hcmRPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEJvYXJkT2JqZWN0LmNvbGxpc2lvbih0aGlzLnBvc2l0aW9uLCB0aGlzLnZpZXdSYWRpdXMsIG90aGVyQm9hcmRPYmplY3QucG9zaXRpb24sIG90aGVyQm9hcmRPYmplY3QuZ2V0U2l6ZSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHZhciBjb3JkcyA9IEJvYXJkLmdldENvcmRzKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gWyd0cmFuc2xhdGUoJyArIGNvcmRzLnggKyAncHgsICcgKyBjb3Jkcy55ICsgJ3B4KScsICdyb3RhdGUoJyArIHRoaXMuYW5nbGUgKyAnZGVnKSddLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9zaXRpb25PbkJvYXJkKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdmFyIGNvcmRzID0gQm9hcmQuZ2V0Q29yZHModGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMpO1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICB2YXIgcm90YXRlTWF0Y2hlcyA9IHRyYW5zZm9ybS5tYXRjaCgvKHJvdGF0ZVxcKC4qP1xcKSkvZyk7XG4gICAgICAgIGlmICh0cmFuc2Zvcm0gJiYgcm90YXRlTWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gWyd0cmFuc2xhdGUoJyArIGNvcmRzLnggKyAncHgsICcgKyBjb3Jkcy55ICsgJ3B4KScsIHJvdGF0ZU1hdGNoZXNdLmpvaW4oJyAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIGNvcmRzLnggKyAncHgsICcgKyBjb3Jkcy55ICsgJ3B4KSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdmlld0luRGlyZWN0aW9uKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICB2YXIgdHJhbnNsYXRlTWF0Y2hlcyA9IHRyYW5zZm9ybS5tYXRjaCgvKHRyYW5zbGF0ZVxcKC4qP1xcKSkvZyk7XG4gICAgICAgIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNsYXRlTWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gW3RyYW5zbGF0ZU1hdGNoZXNbMF0sICdyb3RhdGUoJyArIHRoaXMuYW5nbGUgKyAnZGVnKSddLmpvaW4oJyAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArIGFuZ2xlICsgJ2RlZyknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IEJvYXJkUG9zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Vmlld1JhZGl1cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3UmFkaXVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGl1cyAqIDI7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb2xsaXNpb24ocG9zaXRpb25BOiBCb2FyZFBvc2l0aW9uLCBzaXplQTogbnVtYmVyLCBwb3NpdGlvbkI6IEJvYXJkUG9zaXRpb24sIHNpemVCOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlY3QxID0ge1xuICAgICAgICAgICAgeDogcG9zaXRpb25BLngsXG4gICAgICAgICAgICB5OiBwb3NpdGlvbkEueSxcbiAgICAgICAgICAgIHdpZHRoOiBzaXplQSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZUFcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVjdDIgPSB7XG4gICAgICAgICAgICB4OiBwb3NpdGlvbkIueCxcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uQi55LFxuICAgICAgICAgICAgd2lkdGg6IHNpemVCLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplQlxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZWN0MS54IDwgcmVjdDIueCArIHJlY3QyLndpZHRoICYmXG4gICAgICAgICAgICByZWN0MS54ICsgcmVjdDEud2lkdGggPiByZWN0Mi54ICYmXG4gICAgICAgICAgICByZWN0MS55IDwgcmVjdDIueSArIHJlY3QyLmhlaWdodCAmJlxuICAgICAgICAgICAgcmVjdDEuaGVpZ2h0ICsgcmVjdDEueSA+IHJlY3QyLnk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZE9iamVjdC50cyIsImltcG9ydCB7IERlYWRPYmplY3QgfSBmcm9tIFwiLi9kZWFkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5cbmV4cG9ydCBjbGFzcyBTdWdhciBleHRlbmRzIERlYWRPYmplY3Qge1xuXG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgYW50czogQXJyYXk8QW50PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyID0gMTAsIGFtb3VudDogbnVtYmVyID0gMjAsIGFudD86IEFudCkge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ3N1Z2FyJyk7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xuICAgICAgICBpZiAoYW50KSB7XG4gICAgICAgICAgICB0aGlzLmFudHMucHVzaChhbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlZHVjZShhbnQ6IEFudCk6IFN1Z2FyIHtcbiAgICAgICAgaWYgKHRoaXMuYW1vdW50ID09PSAxICYmIHRoaXMuYW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFtb3VudC0tO1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMC41O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgICAgICByZXR1cm4gbmV3IFN1Z2FyKHRoaXMucG9zaXRpb24sIDEsIDEsIGFudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFtb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hbW91bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koYW50PzogQW50KTogdm9pZCB7XG4gICAgICAgIGlmIChhbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW50cy5zcGxpY2UodGhpcy5hbnRzLmluZGV4T2YoYW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdWdhci50cyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IERlYWRPYmplY3QgfSBmcm9tIFwiLi9kZWFkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQW50aGlsbCBleHRlbmRzIERlYWRPYmplY3Qge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gMjA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDIwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFESVVTOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIFBPU0lUSU9OOiBCb2FyZFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQW50aGlsbC5QT1NJVElPTiwgQW50aGlsbC5SQURJVVMpO1xuICAgICAgICB0aGlzLmFkZENscygnYW50aGlsbCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbnRoaWxsLnRzIiwiaW1wb3J0IHsgRGVhZE9iamVjdCB9IGZyb20gJy4vZGVhZE9iamVjdCc7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSAnLi9ib2FyZFBvc2l0aW9uJztcbmltcG9ydCB7IEFudCB9IGZyb20gJy4vYW50JztcblxuZXhwb3J0IGNsYXNzIEFwcGxlIGV4dGVuZHMgRGVhZE9iamVjdCB7XG4gICAgcHJpdmF0ZSBjYXJyaWVyOiBBcnJheTxBbnQ+ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgMjApO1xuICAgICAgICB0aGlzLmFkZENscygnYXBwbGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FycnkoYW50OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYXJyaWVyLnB1c2goYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcENhcnJ5aW5nKGFudDogQW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2Fycmllci5zcGxpY2UodGhpcy5jYXJyaWVyLmluZGV4T2YoYW50KSwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENhcnJpZXIoKTogQXJyYXk8QW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnJpZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koYW50PzogQW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNhcnJpZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNhcnJpZXIuc3BsaWNlKHRoaXMuY2Fycmllci5pbmRleE9mKGFudCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jYXJyaWVyLmxlbmd0aCkge1xuICAgICAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHBsZS50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBBbnRoaWxsIH0gZnJvbSBcIi4vYW50aGlsbFwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5pbXBvcnQgeyBBcHBsZSB9IGZyb20gXCIuL2FwcGxlXCI7XG5pbXBvcnQgeyBNeUFudCB9IGZyb20gXCIuL215YW50XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSBcIi4va2V5c1wiO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRBbmdsZTogbnVtYmVyID0gMzAwLjI7XG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICBwcml2YXRlIGFudGhpbGw6IEFudGhpbGwgPSBuZXcgQW50aGlsbCgpO1xuICAgIHByaXZhdGUgc3VnYXI6IEFycmF5PFN1Z2FyPiA9IFtdO1xuICAgIHByaXZhdGUgYXBwbGVzOiBBcnJheTxBcHBsZT4gPSBbXTtcbiAgICBwcml2YXRlIGFudHM6IEFycmF5PEFudD4gPSBbXTtcbiAgICBwcml2YXRlIHNwYXduRGVsYXk6IG51bWJlciA9IDY7XG4gICAgcHJpdmF0ZSBtYXhBbnRzOiBudW1iZXIgPSA1MDtcbiAgICBwcml2YXRlIHR1cm46IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnZ2FtZScpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuYm9hcmQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDIwKSwgeTogQm9hcmQucmFuZG9tUG9zaXRpdmUoMjApIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IEJvYXJkLnJhbmRvbVBvc2l0aXZlKDIwKSwgeTogQm9hcmQucmFuZG9tUG9zaXRpdmUoMjApIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IEJvYXJkLnJhbmRvbVBvc2l0aXZlKDIwKSwgeTogQm9hcmQucmFuZG9tTmVnYXRpdmUoMjApIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDIwKSwgeTogQm9hcmQucmFuZG9tTmVnYXRpdmUoMjApIH0pKTtcbiAgICAgICAgdGhpcy5hcHBsZXMucHVzaChuZXcgQXBwbGUoeyB4OiBCb2FyZC5yYW5kb21OZWdhdGl2ZSgyMCksIHk6IEJvYXJkLnJhbmRvbU5lZ2F0aXZlKDUwKSB9KSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbSh0aGlzLmFudGhpbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgZm9yIChsZXQgc3VnYXIgb2YgdGhpcy5zdWdhcikge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKHN1Z2FyLmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgYXBwbGUgb2YgdGhpcy5hcHBsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShhcHBsZS5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHZhciBhbmdsZTogbnVtYmVyID0gMzAwLjI7XG4gICAgICAgIC8vIHdoaWxlICh0aGlzLmFudHMubGVuZ3RoIDwgdGhpcy5tYXhBbnRzKSB7XG4gICAgICAgIC8vICAgICB2YXIgYW50ID0gbmV3IE15QW50KGFuZ2xlKTtcbiAgICAgICAgLy8gICAgIHRoaXMuYW50cy5wdXNoKGFudCk7XG4gICAgICAgIC8vICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYW50LmdldE5vZGUoKSk7XG4gICAgICAgIC8vICAgICBhbmdsZSAtPSA3LjI7XG4gICAgICAgIC8vICAgICBpZiAoYW5nbGUgPCAwKSB7XG4gICAgICAgIC8vICAgICAgICAgYW5nbGUgKz0gMzYwO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0S2V5Ym9hcmRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLlApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlID0gIXRoaXMucGF1c2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC50b2dnbGUoJ2RlYnVnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1haW4gbG9vcFxuICAgICAqL1xuICAgIHByaXZhdGUgcnVuKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5wYXVzZSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hbnRzLmxlbmd0aCA8IHRoaXMubWF4QW50cyAmJiB0aGlzLnR1cm4gJSB0aGlzLnNwYXduRGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgYW50ID0gbmV3IE15QW50KHRoaXMuY3VycmVudEFuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFudHMucHVzaChhbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShhbnQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSAtPSA3LjI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSArPSAzNjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBhbnQgb2YgdGhpcy5hbnRzKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBhbGwgc3VnYXJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzdWdhciBvZiB0aGlzLnN1Z2FyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnQuc2VlcyhzdWdhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFudC5zZWVzU3VnYXIoc3VnYXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnQuY29sbGlkZXNkV2l0aChzdWdhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFudC5yZWFjaFN1Z2FyKHN1Z2FyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFsbCBhcHBsZXNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhcHBsZSBvZiB0aGlzLmFwcGxlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LnNlZXMoYXBwbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuc2Vlc0FwcGxlKGFwcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBvbmUsIHNvIHRoZXkgaGF2ZSB0byByZWFjaCB0aGUgY2VudGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb2FyZE9iamVjdC5jb2xsaXNpb24oYW50LmdldFBvc2l0aW9uKCksIGFudC5nZXRTaXplKCksIGFwcGxlLmdldFBvc2l0aW9uKCksIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hBcHBsZShhcHBsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgYW50TG9hZDogQm9hcmRPYmplY3QgPSBhbnQuZ2V0TG9hZCgpO1xuICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkIGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VnYXIuaW5kZXhPZihhbnRMb2FkKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VnYXIucHVzaChhbnRMb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShhbnRMb2FkLmdldE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCBpbnN0YW5jZW9mIEFwcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW50TG9hZC5nZXRDYXJyaWVyKClbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLnNldFBvc2l0aW9uT25Cb2FyZChhbnRMb2FkLmdldENhcnJpZXIoKVswXS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFudExvYWQuc2V0UG9zaXRpb25PbkJvYXJkKGFudC5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhbnQuY29sbGlkZXNkV2l0aCh0aGlzLmFudGhpbGwpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYW50LnJlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgYW50LnJlYWNoQW50aGlsbCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBkcm9wdCBhdCBhbnRoaWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCAmJiAhYW50LmdldExvYWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkIGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWdhci5zcGxpY2UodGhpcy5zdWdhci5pbmRleE9mKGFudExvYWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW50TG9hZC5kZXN0cm95KGFudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkIGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBsZXMuc3BsaWNlKHRoaXMuYXBwbGVzLmluZGV4T2YoYW50TG9hZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLmRlc3Ryb3koYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogYWRkIHBvaW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkIGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYW50TG9hZDogQm9hcmRPYmplY3QgPSBhbnQuZ2V0TG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYW50TG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYW50TG9hZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhhbnRMb2FkLmdldE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBUT0RPOiBhZGQgcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFudC5saXZlKHRoaXMudHVybik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudHVybisrO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbnZhciBnYW1lID0gbmV3IEdhbWUoKTtcbmdhbWUuc3RhcnQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lLnRzIiwiaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuaW1wb3J0IHsgQXBwbGUgfSBmcm9tIFwiLi9hcHBsZVwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgTXlBbnQgZXh0ZW5kcyBBbnQge1xuXG4gICAgY29uc3RydWN0b3IoYW5nbGU6IG51bWJlcikge1xuICAgICAgICBzdXBlcihhbmdsZSk7XG4gICAgfVxuXG4gICAgZ2V0VGlyZWQoKSB7XG4gICAgICAgIHRoaXMuZ29Ub0FudGhpbGwoKTtcbiAgICB9XG5cbiAgICBzZWVzU3VnYXIoc3VnYXI6IFN1Z2FyKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgc3VnYXIuZ2V0QW1vdW50KCkgPiAwICYmIHN1Z2FyLmFudHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5nb1RvVGFyZ2V0KHN1Z2FyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlYWNoU3VnYXIoc3VnYXI6IFN1Z2FyKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgc3VnYXIuZ2V0QW1vdW50KCkgPiAwICYmIHN1Z2FyLmFudHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy50YWtlT2JqZWN0KHN1Z2FyKTtcbiAgICAgICAgICAgIHRoaXMuZ29Ub0FudGhpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlYWNoQW50aGlsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TG9hZCgpIGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMudHVybkFyb3VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldExvYWQoKSBpbnN0YW5jZW9mIEFwcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZShCb2FyZC5nZXRSYW5kb21BbmdsZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3AoKTtcblxuICAgIH1cblxuICAgIHJlYWNoQXBwbGUoYXBwbGU6IEFwcGxlKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgYXBwbGUuZ2V0Q2FycmllcigpLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHRoaXMudGFrZU9iamVjdChhcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmdvVG9BbnRoaWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWVzQXBwbGUoYXBwbGU6IEFwcGxlKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgYXBwbGUuZ2V0Q2FycmllcigpLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub1RhcmdldChhcHBsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9teWFudC50cyIsImltcG9ydCB7IExpdmluZ09iamVjdCB9IGZyb20gXCIuL2xpdmluZ09iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IFN1Z2FyIH0gZnJvbSBcIi4vc3VnYXJcIjtcbmltcG9ydCB7IEFwcGxlIH0gZnJvbSBcIi4vYXBwbGVcIjtcbmltcG9ydCB7IEFudGhpbGwgfSBmcm9tIFwiLi9hbnRoaWxsXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbnQgZXh0ZW5kcyBMaXZpbmdPYmplY3Qge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgRU5FUkdZOiBudW1iZXIgPSA1MDA7XG4gICAgcHVibGljIHN0YXRpYyBSQU5HRTogbnVtYmVyID0gNTAwMDtcblxuICAgIHB1YmxpYyBzdGF0aWMgVFVSTl9BUk9VTkRfU1BFRUQ6IG51bWJlciA9IDU7XG5cbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IG51bWJlciA9IDU7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IG51bWJlcjtcbiAgICBwcml2YXRlIHJvdW5kOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjdXJyZW50UmFuZ2U6IG51bWJlciA9IEFudC5SQU5HRTtcbiAgICBwcml2YXRlIHJlc3REaXN0YW5jZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNsb3VkOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBjdXJyZW50RW5lcmd5OiBudW1iZXIgPSBBbnQuRU5FUkdZO1xuICAgIHByaXZhdGUgdGFyZ2V0OiBCb2FyZE9iamVjdDtcbiAgICBwcml2YXRlIHR1cm46IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY3VycmVudExvYWQ6IEJvYXJkT2JqZWN0O1xuICAgIHByaXZhdGUgbWF4U3BlZWQ6IG51bWJlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcih7IHg6IDAsIHk6IDAgfSwgNSwgMjAsIGFuZ2xlKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2FudCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3BlZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50TG9hZCkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkIGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkLmdldENhcnJpZXIoKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuY3VycmVudExvYWQuZ2V0Q2FycmllcigpLmxlbmd0aCAqIDAuMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwZWVkID4gdGhpcy5tYXhTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXZlKHR1cm46IG51bWJlcik6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbmVyZ3kgPCBBbnQuRU5FUkdZKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRFbmVyZ3krKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbmVyZ3kgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnR1cm4rKztcbiAgICAgICAgdGhpcy50aXJlZCA9IHRoaXMuY3VycmVudFJhbmdlIDw9IEFudC5SQU5HRSAvIDMgKiAyXG4gICAgICAgIGlmICh0aGlzLnRpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRpcmVkKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5jb250YWlucygndGlyZWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5hZGQoJ3RpcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QucmVtb3ZlKCd0aXJlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTcGVlZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRSYW5nZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ28oKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVzdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UmFuZ2UgPSBBbnQuUkFOR0U7XG4gICAgfTtcblxuICAgIGdvKCkge1xuICAgICAgICBzdXBlci5nbygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRSYW5nZSAtPSB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIGlzVGlyZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpcmVkO1xuICAgIH1cblxuICAgIGdvVG9BbnRoaWxsKCkge1xuICAgICAgICB0aGlzLmdvVG9Qb3NpdGlvbihBbnRoaWxsLlBPU0lUSU9OKTtcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb3NpdGlvbiwgQW50aGlsbC5QT1NJVElPTiwgdGhpcy5wb3NpdGlvbiA9PSBBbnRoaWxsLlBPU0lUSU9OKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uID09IEFudGhpbGwuUE9TSVRJT04pIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRMb2FkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkIGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkLnN0b3BDYXJyeWluZyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0YWtlT2JqZWN0KGJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCkge1xuICAgICAgICBpZiAoIWJvYXJkT2JqZWN0LmNvbGxpZGVzZFdpdGgodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkT2JqZWN0IGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWQgPSBib2FyZE9iamVjdC5yZWR1Y2UodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkT2JqZWN0IGluc3RhbmNlb2YgQXBwbGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExvYWQgPSBib2FyZE9iamVjdDtcbiAgICAgICAgICAgIGJvYXJkT2JqZWN0LmNhcnJ5KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvYWQoKTogQm9hcmRPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9hZDtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRUaXJlZCgpOiB2b2lkO1xuICAgIGFic3RyYWN0IHNlZXNBcHBsZShhcHBsZTogQXBwbGUpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlYWNoQXBwbGUoYXBwbGU6IEFwcGxlKTogdm9pZDtcbiAgICBhYnN0cmFjdCBzZWVzU3VnYXIoc3VnZXI6IFN1Z2FyKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaFN1Z2FyKHN1Z2VyOiBTdWdhcik6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcmVhY2hBbnRoaWxsKCk6IHZvaWQ7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbnQudHMiLCJpbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGl2aW5nT2JqZWN0IGV4dGVuZHMgQm9hcmRPYmplY3Qge1xuXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uO1xuICAgIHByb3RlY3RlZCBhbmdsZTogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBzcGVlZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyLCB2aWV3UmFkaXVzPzogbnVtYmVyLCBhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzLCB2aWV3UmFkaXVzLCBhbmdsZSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLmFkZENscygnbGl2aW5nLW9iamVjdCcpO1xuICAgIH1cblxuICAgIGdvKCkge1xuICAgICAgICBsZXQgdG1wQW5nbGUgPSB0aGlzLmFuZ2xlO1xuICAgICAgICBpZiAoQm9hcmQuYXRUaGVFZGdlKHRoaXMucG9zaXRpb24pKSB7XG4gICAgICAgICAgICB0bXBBbmdsZSA9IHRtcEFuZ2xlIC0gOTA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFyYzogbnVtYmVyID0gTWF0aC5QSSAqIHRtcEFuZ2xlIC8gMTgwLjBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gKE1hdGguY29zKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gKE1hdGguc2luKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbkFuZEFuZ2xlT25Cb2FyZCh0aGlzLnBvc2l0aW9uLCB0bXBBbmdsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHR1cm5Bcm91bmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm90YXRlKDE4MCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJvdGF0ZShhbmdsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gYW5nbGU7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQodGhpcy5wb3NpdGlvbiwgdGhpcy5hbmdsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdvVG9UYXJnZXQoYm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ29Ub1Bvc2l0aW9uKGJvYXJkT2JqZWN0LmdldFBvc2l0aW9uKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnb1RvUG9zaXRpb24ocG9zaXRpb246IEJvYXJkUG9zaXRpb24pOiB2b2lkIHtcbiAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnBvc2l0aW9uLnggLSBwb3NpdGlvbi54O1xuICAgICAgICBsZXQgbmV3WSA9IHRoaXMucG9zaXRpb24ueSAtIHBvc2l0aW9uLnk7XG4gICAgICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgICAgICAgbmV3WCA9IG5ld1ggKiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdZIDwgMCkge1xuICAgICAgICAgICAgbmV3WSA9IG5ld1kgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGlzdGFuY2U6IG51bWJlciA9IE1hdGguc3FydChuZXdYICogbmV3WCArIG5ld1kgKiBuZXdZKTtcbiAgICAgICAgbGV0IGZyYWN0aW9uOiBudW1iZXIgPSBuZXdZIC8gZGlzdGFuY2U7XG4gICAgICAgIGxldCBkaXJlY3Rpb246IG51bWJlciA9IE1hdGguYXNpbihmcmFjdGlvbikgKiAxODAgLyBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA8IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPiBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAzNjAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPiBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55ID4gcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uICs9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA+IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPCBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxODAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3SW5EaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBsaXZlKHR1cm46IG51bWJlcik6IHZvaWQ7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saXZpbmdPYmplY3QudHMiLCJleHBvcnQgZW51bSBLZXlzIHtcbiAgICBUQUIgPSA5LFxuICAgIEVOVEVSID0gMTMsXG4gICAgU0hJRlQgPSAxNixcbiAgICBDVFJMID0gMTcsXG4gICAgQUxUID0gMTgsXG4gICAgRVNDID0gMjcsXG4gICAgUE9TMSA9IDM2LFxuICAgIExFRlQgPSAzNyxcbiAgICBVUCA9IDM4LFxuICAgIFJJR0hUID0gMzksXG4gICAgRE9XTiA9IDQwLFxuICAgIFNQQUNFID0gMzIsXG4gICAgUEFHRV9VUCA9IDMzLFxuICAgIFBBR0VfRE9XTiA9IDM0LFxuICAgIFAgPSA4MCxcbiAgICBEID0gNjhcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rZXlzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==