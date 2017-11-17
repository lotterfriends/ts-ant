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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
var deadObject_1 = __webpack_require__(4);
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
var deadObject_1 = __webpack_require__(4);
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
var boardObject_1 = __webpack_require__(5);
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
var node_1 = __webpack_require__(0);
var board_1 = __webpack_require__(1);
var anthill_1 = __webpack_require__(3);
var sugar_1 = __webpack_require__(2);
var myant_1 = __webpack_require__(7);
var keys_1 = __webpack_require__(10);
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
        this.sugar.push(new sugar_1.Sugar({ x: -200, y: 100 }));
        this.sugar.push(new sugar_1.Sugar({ x: 100, y: 30 }));
        this.sugar.push(new sugar_1.Sugar({ x: 90, y: -150 }));
        this.sugar.push(new sugar_1.Sugar({ x: -190, y: -190 }));
        this.board.addItem(this.anthill.getNode());
        for (var _i = 0, _a = this.sugar; _i < _a.length; _i++) {
            var sugar = _a[_i];
            this.board.addItem(sugar.getNode());
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
                for (var _b = 0, _c = this.sugar; _b < _c.length; _b++) {
                    var sugar = _c[_b];
                    if (ant_1.sees(sugar)) {
                        ant_1.seesSugar(sugar);
                    }
                    if (ant_1.collidesdWith(sugar)) {
                        ant_1.reachSugar(sugar);
                    }
                }
                var antLoad = ant_1.getLoad();
                if (antLoad instanceof sugar_1.Sugar) {
                    if (this.sugar.indexOf(antLoad) < 0) {
                        this.sugar.push(antLoad);
                        this.board.addItem(antLoad.getNode());
                    }
                }
                // console.log(this.sugar);
                if (antLoad) {
                    antLoad.setPositionOnBoard(ant_1.getPosition());
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
                            // TODO: add points;
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
var sugar_1 = __webpack_require__(2);
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
        this.drop();
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
var sugar_1 = __webpack_require__(2);
var anthill_1 = __webpack_require__(3);
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
    Ant.prototype.setSpeed = function () {
        if (!this.currentLoad) {
            this.speed = 1;
        }
        if (this.currentLoad instanceof sugar_1.Sugar) {
            this.speed = 0.5;
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
            // this.addItem(this.currentLoad.getNode());
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
var boardObject_1 = __webpack_require__(5);
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
        this.angle = this.angle - 180;
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
        this.rotate(direction);
    };
    return LivingObject;
}(boardObject_1.BoardObject));
exports.LivingObject = LivingObject;


/***/ }),
/* 10 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGZkNTkxNDJmNDAzNTE0M2FlYjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9zdWdhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW50aGlsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVhZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpdmluZ09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7SUFHSSxjQUFZLElBQVksRUFBRSxHQUFXLEVBQUUsT0FBZ0I7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENB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QUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksUUFBUSxHQUFXLElBQUksR0FBRyxRQUFRLENBQUM7UUFDdkMsSUFBSSxTQUFTLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUU1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxTQUFTLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsU0FBUyxJQUFJLEdBQUcsQ0FBQztRQUNyQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsU0FBUyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDaEMsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUlMLG1CQUFDO0FBQUQsQ0FBQyxDQTlEMEMseUJBQVcsR0E4RHJEO0FBOURxQixvQ0FBWTs7Ozs7Ozs7OztBQ0psQyxJQUFZLElBaUJYO0FBakJELFdBQVksSUFBSTtJQUNaLDZCQUFPO0lBQ1Asa0NBQVU7SUFDVixrQ0FBVTtJQUNWLGdDQUFTO0lBQ1QsOEJBQVE7SUFDUiw4QkFBUTtJQUNSLGdDQUFTO0lBQ1QsZ0NBQVM7SUFDVCw0QkFBTztJQUNQLGtDQUFVO0lBQ1YsZ0NBQVM7SUFDVCxrQ0FBVTtJQUNWLHNDQUFZO0lBQ1osMENBQWM7SUFDZCwwQkFBTTtJQUNOLDBCQUFNO0FBQ1YsQ0FBQyxFQWpCVyxJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFpQmYiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGZkNTkxNDJmNDAzNTE0M2FlYjYiLCJleHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBjbHM6IHN0cmluZywgY29udGVudD86IHN0cmluZykge1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm9kZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ2xzKC4uLmNsczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoLi4uY2xzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbm9kZS50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDUwMDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gNTAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnYm9hcmQnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2NlbnRlcicpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBCb2FyZC5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBCb2FyZC5IRUlHSFQgKyAncHgnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29yZHMocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHZhciBjb3JkcyA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYWxmQm9hcmRXaWR0aCA9IEJvYXJkLldJRFRIIC8gMjtcbiAgICAgICAgdmFyIGhhbGZCb2FyZEhlaWdodCA9IEJvYXJkLkhFSUdIVCAvIDI7XG4gICAgICAgIGlmIChwb3NpdGlvbi54IDwgaGFsZkJvYXJkV2lkdGggKiAtMSkge1xuICAgICAgICAgICAgcG9zaXRpb24ueCA9IGhhbGZCb2FyZFdpZHRoICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnggPiBoYWxmQm9hcmRXaWR0aCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueCA9IGhhbGZCb2FyZFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi55IDwgaGFsZkJvYXJkSGVpZ2h0ICogLTEpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBoYWxmQm9hcmRIZWlnaHQgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueSA+IGhhbGZCb2FyZEhlaWdodCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueSA9IGhhbGZCb2FyZEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBjb3Jkcy54ID0gKGhhbGZCb2FyZFdpZHRoICsgcG9zaXRpb24ueCkgLSByYWRpdXM7XG4gICAgICAgIGNvcmRzLnkgPSAoaGFsZkJvYXJkV2lkdGggKyBwb3NpdGlvbi55KSAtIHJhZGl1cztcbiAgICAgICAgcmV0dXJuIGNvcmRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXRUaGVFZGdlKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBoYWxmQm9hcmRXaWR0aCA9IEJvYXJkLldJRFRIIC8gMjtcbiAgICAgICAgdmFyIGhhbGZCb2FyZEhlaWdodCA9IEJvYXJkLkhFSUdIVCAvIDI7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbi54ID09PSBoYWxmQm9hcmRXaWR0aCAqIC0xIHx8IHBvc2l0aW9uLnggPT09IGhhbGZCb2FyZFdpZHRoIHx8XG4gICAgICAgICAgICBwb3NpdGlvbi55ID09PSBoYWxmQm9hcmRIZWlnaHQgKiAtMSB8fCBwb3NpdGlvbi55ID09PSBoYWxmQm9hcmRIZWlnaHQ7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JvYXJkLnRzIiwiaW1wb3J0IHsgRGVhZE9iamVjdCB9IGZyb20gXCIuL2RlYWRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBBbnQgfSBmcm9tIFwiLi9hbnRcIjtcblxuZXhwb3J0IGNsYXNzIFN1Z2FyIGV4dGVuZHMgRGVhZE9iamVjdCB7XG5cbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICBhbnRzOiBBcnJheTxBbnQ+ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIgPSAxMCwgYW1vdW50OiBudW1iZXIgPSAyMCwgYW50PzogQW50KSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCByYWRpdXMpO1xuICAgICAgICB0aGlzLmFkZENscygnc3VnYXInKTtcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgICAgIGlmIChhbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW50cy5wdXNoKGFudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVkdWNlKGFudDogQW50KTogU3VnYXIge1xuICAgICAgICBpZiAodGhpcy5hbW91bnQgPT09IDEgJiYgdGhpcy5hbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW1vdW50LS07XG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTaXplKCk7XG4gICAgICAgIHJldHVybiBuZXcgU3VnYXIodGhpcy5wb3NpdGlvbiwgMSwgMSwgYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QW1vdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFtb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveShhbnQ/OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGFudCkge1xuICAgICAgICAgICAgdGhpcy5hbnRzLnNwbGljZSh0aGlzLmFudHMuaW5kZXhPZihhbnQpKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1Z2FyLnRzIiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgRGVhZE9iamVjdCB9IGZyb20gXCIuL2RlYWRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBBbnRoaWxsIGV4dGVuZHMgRGVhZE9iamVjdCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSAyMDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gMjA7XG4gICAgcHVibGljIHN0YXRpYyBSQURJVVM6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgUE9TSVRJT046IEJvYXJkUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBbnRoaWxsLlBPU0lUSU9OLCBBbnRoaWxsLlJBRElVUyk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdhbnRoaWxsJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FudGhpbGwudHMiLCJpbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgRGVhZE9iamVjdCBleHRlbmRzIEJvYXJkT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2RlYWQtb2JqZWN0Jyk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlYWRPYmplY3QudHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkT2JqZWN0IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IEJvYXJkUG9zaXRpb247XG4gICAgcHJvdGVjdGVkIHZpZXdSYWRpdXM6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgcmFkaXVzOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbj86IEJvYXJkUG9zaXRpb24sIHJhZGl1cz86IG51bWJlciwgdmlld1JhZGl1cz86IG51bWJlciwgYW5nbGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZC1vYmplY3QnKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgICAgICBpZiAodHlwZW9mIHZpZXdSYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdSYWRpdXMgPSB2aWV3UmFkaXVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uQW5kQW5nbGVPbkJvYXJkKHBvc2l0aW9uLCBhbmdsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25PbkJvYXJkKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZpZXdSYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBsZXQgdmlld1JhZGl1c09iajogTm9kZSA9IG5ldyBOb2RlKCdzcGFuJywgJ3ZpZXdSYWRpdXMnKTtcbiAgICAgICAgICAgIHZpZXdSYWRpdXNPYmouYWRkQ2xzKCdjZW50ZXInKTtcbiAgICAgICAgICAgIHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpLnN0eWxlLndpZHRoID0gdmlld1JhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICAgICAgdmlld1JhZGl1c09iai5nZXROb2RlKCkuc3R5bGUuaGVpZ2h0ID0gdmlld1JhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTaXplKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnN0eWxlLndpZHRoID0gdGhpcy5yYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLnJhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNvbGxpZGVzZFdpdGgob3RoZXJCb2FyZE9iamVjdDogQm9hcmRPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEJvYXJkT2JqZWN0LmNvbGxpc2lvbih0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cywgb3RoZXJCb2FyZE9iamVjdC5wb3NpdGlvbiwgb3RoZXJCb2FyZE9iamVjdC5yYWRpdXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWVzKG90aGVyQm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBCb2FyZE9iamVjdC5jb2xsaXNpb24odGhpcy5wb3NpdGlvbiwgdGhpcy52aWV3UmFkaXVzLCBvdGhlckJvYXJkT2JqZWN0LnBvc2l0aW9uLCBvdGhlckJvYXJkT2JqZWN0LmdldFNpemUoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBvc2l0aW9uQW5kQW5nbGVPbkJvYXJkKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB2YXIgY29yZHMgPSBCb2FyZC5nZXRDb3Jkcyh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9IFsndHJhbnNsYXRlKCcgKyBjb3Jkcy54ICsgJ3B4LCAnICsgY29yZHMueSArICdweCknLCAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknXS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBvc2l0aW9uT25Cb2FyZChwb3NpdGlvbjogQm9hcmRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHZhciBjb3JkcyA9IEJvYXJkLmdldENvcmRzKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgdmFyIHJvdGF0ZU1hdGNoZXMgPSB0cmFuc2Zvcm0ubWF0Y2goLyhyb3RhdGVcXCguKj9cXCkpL2cpO1xuICAgICAgICBpZiAodHJhbnNmb3JtICYmIHJvdGF0ZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9IFsndHJhbnNsYXRlKCcgKyBjb3Jkcy54ICsgJ3B4LCAnICsgY29yZHMueSArICdweCknLCByb3RhdGVNYXRjaGVzXS5qb2luKCcgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyBjb3Jkcy54ICsgJ3B4LCAnICsgY29yZHMueSArICdweCknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJvdGF0ZShhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZU1hdGNoZXMgPSB0cmFuc2Zvcm0ubWF0Y2goLyh0cmFuc2xhdGVcXCguKj9cXCkpL2cpO1xuICAgICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zbGF0ZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9IFt0cmFuc2xhdGVNYXRjaGVzWzBdLCAncm90YXRlKCcgKyB0aGlzLmFuZ2xlICsgJ2RlZyknXS5qb2luKCcgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKCcgKyBhbmdsZSArICdkZWcpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBCb2FyZFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJhZGl1cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZpZXdSYWRpdXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld1JhZGl1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpdXMgKiAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29sbGlzaW9uKHBvc2l0aW9uQTogQm9hcmRQb3NpdGlvbiwgc2l6ZUE6IG51bWJlciwgcG9zaXRpb25COiBCb2FyZFBvc2l0aW9uLCBzaXplQjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZWN0MSA9IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uQS54LFxuICAgICAgICAgICAgeTogcG9zaXRpb25BLnksXG4gICAgICAgICAgICB3aWR0aDogc2l6ZUEsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemVBXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlY3QyID0ge1xuICAgICAgICAgICAgeDogcG9zaXRpb25CLngsXG4gICAgICAgICAgICB5OiBwb3NpdGlvbkIueSxcbiAgICAgICAgICAgIHdpZHRoOiBzaXplQixcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZUJcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJlxuICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxuICAgICAgICAgICAgcmVjdDEueSA8IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQgJiZcbiAgICAgICAgICAgIHJlY3QxLmhlaWdodCArIHJlY3QxLnkgPiByZWN0Mi55O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmRPYmplY3QudHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgQW50aGlsbCB9IGZyb20gXCIuL2FudGhpbGxcIjtcbmltcG9ydCB7IFN1Z2FyIH0gZnJvbSBcIi4vc3VnYXJcIjtcbmltcG9ydCB7IEFudCB9IGZyb20gXCIuL2FudFwiO1xuaW1wb3J0IHsgTXlBbnQgfSBmcm9tIFwiLi9teWFudFwiO1xuaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgS2V5cyB9IGZyb20gXCIuL2tleXNcIjtcblxuY2xhc3MgR2FtZSBleHRlbmRzIE5vZGUge1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50QW5nbGU6IG51bWJlciA9IDMwMC4yO1xuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgcHJpdmF0ZSBhbnRoaWxsOiBBbnRoaWxsID0gbmV3IEFudGhpbGwoKTtcbiAgICBwcml2YXRlIHN1Z2FyOiBBcnJheTxTdWdhcj4gPSBbXTtcbiAgICBwcml2YXRlIGFudHM6IEFycmF5PEFudD4gPSBbXTtcbiAgICBwcml2YXRlIHNwYXduRGVsYXk6IG51bWJlciA9IDY7XG4gICAgcHJpdmF0ZSBtYXhBbnRzOiBudW1iZXIgPSA1MDtcbiAgICBwcml2YXRlIHR1cm46IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnZ2FtZScpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuYm9hcmQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IC0yMDAsIHk6IDEwMCB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiAxMDAsIHk6IDMwIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IDkwLCB5OiAtMTUwIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IC0xOTAsIHk6IC0xOTAgfSkpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0odGhpcy5hbnRoaWxsLmdldE5vZGUoKSk7XG4gICAgICAgIGZvciAobGV0IHN1Z2FyIG9mIHRoaXMuc3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShzdWdhci5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHZhciBhbmdsZTogbnVtYmVyID0gMzAwLjI7XG4gICAgICAgIC8vIHdoaWxlICh0aGlzLmFudHMubGVuZ3RoIDwgdGhpcy5tYXhBbnRzKSB7XG4gICAgICAgIC8vICAgICB2YXIgYW50ID0gbmV3IE15QW50KGFuZ2xlKTtcbiAgICAgICAgLy8gICAgIHRoaXMuYW50cy5wdXNoKGFudCk7XG4gICAgICAgIC8vICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYW50LmdldE5vZGUoKSk7XG4gICAgICAgIC8vICAgICBhbmdsZSAtPSA3LjI7XG4gICAgICAgIC8vICAgICBpZiAoYW5nbGUgPCAwKSB7XG4gICAgICAgIC8vICAgICAgICAgYW5nbGUgKz0gMzYwO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0S2V5Ym9hcmRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLlApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlID0gIXRoaXMucGF1c2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC50b2dnbGUoJ2RlYnVnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1haW4gbG9vcFxuICAgICAqL1xuICAgIHByaXZhdGUgcnVuKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5wYXVzZSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hbnRzLmxlbmd0aCA8IHRoaXMubWF4QW50cyAmJiB0aGlzLnR1cm4gJSB0aGlzLnNwYXduRGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgYW50ID0gbmV3IE15QW50KHRoaXMuY3VycmVudEFuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFudHMucHVzaChhbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShhbnQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSAtPSA3LjI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSArPSAzNjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBhbnQgb2YgdGhpcy5hbnRzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc3VnYXIgb2YgdGhpcy5zdWdhcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LnNlZXMoc3VnYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuc2Vlc1N1Z2FyKHN1Z2FyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LmNvbGxpZGVzZFdpdGgoc3VnYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hTdWdhcihzdWdhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGFudExvYWQ6IEJvYXJkT2JqZWN0ID0gYW50LmdldExvYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Z2FyLmluZGV4T2YoYW50TG9hZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Z2FyLnB1c2goYW50TG9hZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYW50TG9hZC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3VnYXIpO1xuICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFudExvYWQuc2V0UG9zaXRpb25PbkJvYXJkKGFudC5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFudC5jb2xsaWRlc2RXaXRoKHRoaXMuYW50aGlsbCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbnQucmVzdCgpO1xuICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hBbnRoaWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRyb3B0IGF0IGFudGhpbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkICYmICFhbnQuZ2V0TG9hZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Z2FyLnNwbGljZSh0aGlzLnN1Z2FyLmluZGV4T2YoYW50TG9hZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLmRlc3Ryb3koYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogYWRkIHBvaW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYW50TG9hZDogQm9hcmRPYmplY3QgPSBhbnQuZ2V0TG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYW50TG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYW50TG9hZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhhbnRMb2FkLmdldE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBUT0RPOiBhZGQgcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFudC5saXZlKHRoaXMudHVybik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudHVybisrO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbnZhciBnYW1lID0gbmV3IEdhbWUoKTtcbmdhbWUuc3RhcnQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lLnRzIiwiaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuXG5leHBvcnQgY2xhc3MgTXlBbnQgZXh0ZW5kcyBBbnQge1xuXG4gICAgY29uc3RydWN0b3IoYW5nbGU6IG51bWJlcikge1xuICAgICAgICBzdXBlcihhbmdsZSk7XG4gICAgfVxuXG4gICAgZ2V0VGlyZWQoKSB7XG4gICAgICAgIHRoaXMuZ29Ub0FudGhpbGwoKTtcbiAgICB9XG5cbiAgICBzZWVzU3VnYXIoc3VnYXI6IFN1Z2FyKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgc3VnYXIuZ2V0QW1vdW50KCkgPiAwICYmIHN1Z2FyLmFudHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5nb1RvVGFyZ2V0KHN1Z2FyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlYWNoU3VnYXIoc3VnYXI6IFN1Z2FyKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgc3VnYXIuZ2V0QW1vdW50KCkgPiAwICYmIHN1Z2FyLmFudHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy50YWtlT2JqZWN0KHN1Z2FyKTtcbiAgICAgICAgICAgIHRoaXMuZ29Ub0FudGhpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlYWNoQW50aGlsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TG9hZCgpIGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMudHVybkFyb3VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcCgpO1xuXG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbXlhbnQudHMiLCJpbXBvcnQgeyBMaXZpbmdPYmplY3QgfSBmcm9tIFwiLi9saXZpbmdPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBTdWdhciB9IGZyb20gXCIuL3N1Z2FyXCI7XG5pbXBvcnQgeyBBbnRoaWxsIH0gZnJvbSBcIi4vYW50aGlsbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW50IGV4dGVuZHMgTGl2aW5nT2JqZWN0IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIEVORVJHWTogbnVtYmVyID0gNTAwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFOR0U6IG51bWJlciA9IDUwMDA7XG5cbiAgICBwdWJsaWMgc3RhdGljIFRVUk5fQVJPVU5EX1NQRUVEOiBudW1iZXIgPSA1O1xuXG4gICAgcHJvdGVjdGVkIHNwZWVkOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByb3VuZDogbnVtYmVyO1xuICAgIHByaXZhdGUgY3VycmVudFJhbmdlOiBudW1iZXIgPSBBbnQuUkFOR0U7XG4gICAgcHJpdmF0ZSByZXN0RGlzdGFuY2U6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjbG91ZDogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgY3VycmVudEVuZXJneTogbnVtYmVyID0gQW50LkVORVJHWTtcbiAgICBwcml2YXRlIHRhcmdldDogQm9hcmRPYmplY3Q7XG4gICAgcHJpdmF0ZSB0dXJuOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdGlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGN1cnJlbnRMb2FkOiBCb2FyZE9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHsgeDogMCwgeTogMCB9LCA1LCAyMCwgYW5nbGUpO1xuICAgICAgICB0aGlzLmFkZENscygnYW50Jyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTcGVlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC41O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGl2ZSh0dXJuOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDwgQW50LkVORVJHWSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RW5lcmd5Kys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJuKys7XG4gICAgICAgIHRoaXMudGlyZWQgPSB0aGlzLmN1cnJlbnRSYW5nZSA8PSBBbnQuUkFOR0UgLyAzICogMlxuICAgICAgICBpZiAodGhpcy50aXJlZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUaXJlZCgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RpcmVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuYWRkKCd0aXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSgndGlyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3BlZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UmFuZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmdvKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlc3QoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFJhbmdlID0gQW50LlJBTkdFO1xuICAgIH07XG5cbiAgICBnbygpIHtcbiAgICAgICAgc3VwZXIuZ28oKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UmFuZ2UgLT0gdGhpcy5zcGVlZDtcbiAgICB9XG5cbiAgICBpc1RpcmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aXJlZDtcbiAgICB9XG5cbiAgICBnb1RvQW50aGlsbCgpIHtcbiAgICAgICAgdGhpcy5nb1RvUG9zaXRpb24oQW50aGlsbC5QT1NJVElPTik7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24sIEFudGhpbGwuUE9TSVRJT04sIHRoaXMucG9zaXRpb24gPT0gQW50aGlsbC5QT1NJVElPTik7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbiA9PSBBbnRoaWxsLlBPU0lUSU9OKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50TG9hZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFrZU9iamVjdChib2FyZE9iamVjdDogQm9hcmRPYmplY3QpIHtcbiAgICAgICAgaWYgKCFib2FyZE9iamVjdC5jb2xsaWRlc2RXaXRoKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2FyZE9iamVjdCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gKGJvYXJkT2JqZWN0IGFzIFN1Z2FyKS5yZWR1Y2UodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmFkZEl0ZW0odGhpcy5jdXJyZW50TG9hZC5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvYWQoKTogQm9hcmRPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9hZDtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRUaXJlZCgpOiB2b2lkO1xuICAgIGFic3RyYWN0IHNlZXNTdWdhcihzdWdlcjogU3VnYXIpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlYWNoU3VnYXIoc3VnZXI6IFN1Z2FyKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaEFudGhpbGwoKTogdm9pZDtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FudC50cyIsImltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMaXZpbmdPYmplY3QgZXh0ZW5kcyBCb2FyZE9iamVjdCB7XG5cbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IEJvYXJkUG9zaXRpb247XG4gICAgcHJvdGVjdGVkIGFuZ2xlOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHNwZWVkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIsIHZpZXdSYWRpdXM/OiBudW1iZXIsIGFuZ2xlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCByYWRpdXMsIHZpZXdSYWRpdXMsIGFuZ2xlKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdsaXZpbmctb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgZ28oKSB7XG4gICAgICAgIGxldCB0bXBBbmdsZSA9IHRoaXMuYW5nbGU7XG4gICAgICAgIGlmIChCb2FyZC5hdFRoZUVkZ2UodGhpcy5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHRtcEFuZ2xlID0gdG1wQW5nbGUgLSA5MDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXJjOiBudW1iZXIgPSBNYXRoLlBJICogdG1wQW5nbGUgLyAxODAuMFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAoTWF0aC5jb3MoYXJjKSAqIHRoaXMuc3BlZWQpICsgdGhpcy5wb3NpdGlvbi54O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSAoTWF0aC5zaW4oYXJjKSAqIHRoaXMuc3BlZWQpICsgdGhpcy5wb3NpdGlvbi55O1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uQW5kQW5nbGVPbkJvYXJkKHRoaXMucG9zaXRpb24sIHRtcEFuZ2xlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHVybkFyb3VuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgLSAxODA7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQodGhpcy5wb3NpdGlvbiwgdGhpcy5hbmdsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdvVG9UYXJnZXQoYm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ29Ub1Bvc2l0aW9uKGJvYXJkT2JqZWN0LmdldFBvc2l0aW9uKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnb1RvUG9zaXRpb24ocG9zaXRpb246IEJvYXJkUG9zaXRpb24pOiB2b2lkIHtcbiAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnBvc2l0aW9uLnggLSBwb3NpdGlvbi54O1xuICAgICAgICBsZXQgbmV3WSA9IHRoaXMucG9zaXRpb24ueSAtIHBvc2l0aW9uLnk7XG4gICAgICAgIGlmIChuZXdYIDwgMCkge1xuICAgICAgICAgICAgbmV3WCA9IG5ld1ggKiAtMVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdZIDwgMCkge1xuICAgICAgICAgICAgbmV3WSA9IG5ld1kgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGlzdGFuY2U6IG51bWJlciA9IE1hdGguc3FydChuZXdYICogbmV3WCArIG5ld1kgKiBuZXdZKTtcbiAgICAgICAgbGV0IGZyYWN0aW9uOiBudW1iZXIgPSBuZXdZIC8gZGlzdGFuY2U7XG4gICAgICAgIGxldCBkaXJlY3Rpb246IG51bWJlciA9IE1hdGguYXNpbihmcmFjdGlvbikgKiAxODAgLyBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA8IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPiBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAzNjAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPiBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55ID4gcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uICs9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uKCkueCA+IHBvc2l0aW9uLnggJiYgdGhpcy5nZXRQb3NpdGlvbigpLnkgPCBwb3NpdGlvbi55KSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAxODAgLSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3RhdGUoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBsaXZlKHR1cm46IG51bWJlcik6IHZvaWQ7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saXZpbmdPYmplY3QudHMiLCJleHBvcnQgZW51bSBLZXlzIHtcbiAgICBUQUIgPSA5LFxuICAgIEVOVEVSID0gMTMsXG4gICAgU0hJRlQgPSAxNixcbiAgICBDVFJMID0gMTcsXG4gICAgQUxUID0gMTgsXG4gICAgRVNDID0gMjcsXG4gICAgUE9TMSA9IDM2LFxuICAgIExFRlQgPSAzNyxcbiAgICBVUCA9IDM4LFxuICAgIFJJR0hUID0gMzksXG4gICAgRE9XTiA9IDQwLFxuICAgIFNQQUNFID0gMzIsXG4gICAgUEFHRV9VUCA9IDMzLFxuICAgIFBBR0VfRE9XTiA9IDM0LFxuICAgIFAgPSA4MCxcbiAgICBEID0gNjhcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9rZXlzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==