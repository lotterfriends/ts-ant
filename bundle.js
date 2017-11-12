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
        // console.log(this, this.amount);
        this.amount--;
        this.radius -= 0.5;
        this.setSize();
        return new Sugar(this.position, 4, 1, ant);
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
        if (viewRadius) {
            _this.viewRadius = viewRadius;
        }
        if (position) {
            if (angle) {
                _this.setPositionAndAngleOnBoard(position, angle);
            }
            else {
                _this.setPositionOnBoard(position);
            }
        }
        if (viewRadius) {
            var viewRadiusObj = new node_1.Node('span', 'viewRadius');
            viewRadiusObj.addCls('center');
            viewRadiusObj.getNode().style.width = viewRadius * 2 + 'px';
            viewRadiusObj.getNode().style.height = viewRadius * 2 + 'px';
            _this.addItem(viewRadiusObj.getNode());
        }
        return _this;
    }
    BoardObject.prototype.setSize = function () {
        if (this.radius) {
            this.node.style.width = this.radius * 2 + 'px';
            this.node.style.height = this.radius * 2 + 'px';
        }
    };
    BoardObject.prototype.collidesdWith = function (otherBoardObject) {
        return BoardObject.collision(this.position, this.getSize(), otherBoardObject.position, otherBoardObject.getSize());
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
        _this.maxAnts = 100;
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
        if (!this.getLoad() && sugar.getAmount() > 1) {
            this.goToTarget(sugar);
        }
    };
    MyAnt.prototype.reachSugar = function (sugar) {
        if (!this.getLoad() && sugar.getAmount() > 1) {
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
})(Keys = exports.Keys || (exports.Keys = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjZiYzVmMTRkMmNhY2E2YmFiNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9zdWdhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW50aGlsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVhZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpdmluZ09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7SUFHSSxjQUFZLElBQVksRUFBRSxHQUFXLEVBQUUsT0FBZ0I7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENB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QUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDaEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLFNBQVMsSUFBSSxHQUFHLENBQUM7UUFDckIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLFNBQVMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFJTCxtQkFBQztBQUFELENBQUMsQ0E1RDBDLHlCQUFXLEdBNERyRDtBQTVEcUIsb0NBQVk7Ozs7Ozs7Ozs7QUNKbEMsSUFBWSxJQWdCWDtBQWhCRCxXQUFZLElBQUk7SUFDWiw2QkFBTztJQUNQLGtDQUFVO0lBQ1Ysa0NBQVU7SUFDVixnQ0FBUztJQUNULDhCQUFRO0lBQ1IsOEJBQVE7SUFDUixnQ0FBUztJQUNULGdDQUFTO0lBQ1QsNEJBQU87SUFDUCxrQ0FBVTtJQUNWLGdDQUFTO0lBQ1Qsa0NBQVU7SUFDVixzQ0FBWTtJQUNaLDBDQUFjO0lBQ2QsMEJBQU07QUFDVixDQUFDLEVBaEJXLElBQUksR0FBSixZQUFJLEtBQUosWUFBSSxRQWdCZiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNmJjNWYxNGQyY2FjYTZiYWI3NCIsImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBwcm90ZWN0ZWQgbm9kZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNsczogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb2RlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRDbHMoLi4uY2xzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCguLi5jbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ub2RlLnRzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCBleHRlbmRzIE5vZGUge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gNTAwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSA1MDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZCcpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZENscygnY2VudGVyJyk7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IEJvYXJkLldJRFRIICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IEJvYXJkLkhFSUdIVCArICdweCc7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb3Jkcyhwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGNvcmRzID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGhhbGZCb2FyZFdpZHRoID0gQm9hcmQuV0lEVEggLyAyO1xuICAgICAgICB2YXIgaGFsZkJvYXJkSGVpZ2h0ID0gQm9hcmQuSEVJR0hUIC8gMjtcbiAgICAgICAgaWYgKHBvc2l0aW9uLnggPCBoYWxmQm9hcmRXaWR0aCAqIC0xKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi54ID0gaGFsZkJvYXJkV2lkdGggKiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueCA+IGhhbGZCb2FyZFdpZHRoKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi54ID0gaGFsZkJvYXJkV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnkgPCBoYWxmQm9hcmRIZWlnaHQgKiAtMSkge1xuICAgICAgICAgICAgcG9zaXRpb24ueSA9IGhhbGZCb2FyZEhlaWdodCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi55ID4gaGFsZkJvYXJkSGVpZ2h0KSB7XG4gICAgICAgICAgICBwb3NpdGlvbi55ID0gaGFsZkJvYXJkSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvcmRzLnggPSAoaGFsZkJvYXJkV2lkdGggKyBwb3NpdGlvbi54KSAtIHJhZGl1cztcbiAgICAgICAgY29yZHMueSA9IChoYWxmQm9hcmRXaWR0aCArIHBvc2l0aW9uLnkpIC0gcmFkaXVzO1xuICAgICAgICByZXR1cm4gY29yZHM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhdFRoZUVkZ2UocG9zaXRpb246IEJvYXJkUG9zaXRpb24pOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGhhbGZCb2FyZFdpZHRoID0gQm9hcmQuV0lEVEggLyAyO1xuICAgICAgICB2YXIgaGFsZkJvYXJkSGVpZ2h0ID0gQm9hcmQuSEVJR0hUIC8gMjtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uLnggPT09IGhhbGZCb2FyZFdpZHRoICogLTEgfHwgcG9zaXRpb24ueCA9PT0gaGFsZkJvYXJkV2lkdGggfHxcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPT09IGhhbGZCb2FyZEhlaWdodCAqIC0xIHx8IHBvc2l0aW9uLnkgPT09IGhhbGZCb2FyZEhlaWdodDtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmQudHMiLCJpbXBvcnQgeyBEZWFkT2JqZWN0IH0gZnJvbSBcIi4vZGVhZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEFudCB9IGZyb20gXCIuL2FudFwiO1xuXG5leHBvcnQgY2xhc3MgU3VnYXIgZXh0ZW5kcyBEZWFkT2JqZWN0IHtcblxuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIGFudHM6IEFycmF5PEFudD4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlciA9IDEwLCBhbW91bnQ6IG51bWJlciA9IDIwLCBhbnQ/OiBBbnQpIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHJhZGl1cyk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdzdWdhcicpO1xuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcbiAgICAgICAgaWYgKGFudCkge1xuICAgICAgICAgICAgdGhpcy5hbnRzLnB1c2goYW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWR1Y2UoYW50OiBBbnQpOiBTdWdhciB7XG4gICAgICAgIGlmICh0aGlzLmFtb3VudCA9PT0gMSAmJiB0aGlzLmFudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcywgdGhpcy5hbW91bnQpO1xuICAgICAgICB0aGlzLmFtb3VudC0tO1xuICAgICAgICB0aGlzLnJhZGl1cyAtPSAwLjU7XG4gICAgICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgICAgICByZXR1cm4gbmV3IFN1Z2FyKHRoaXMucG9zaXRpb24sIDQsIDEsIGFudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFtb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hbW91bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koYW50PzogQW50KTogdm9pZCB7XG4gICAgICAgIGlmIChhbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW50cy5zcGxpY2UodGhpcy5hbnRzLmluZGV4T2YoYW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdWdhci50cyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IERlYWRPYmplY3QgfSBmcm9tIFwiLi9kZWFkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQW50aGlsbCBleHRlbmRzIERlYWRPYmplY3Qge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gMjA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDIwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFESVVTOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIFBPU0lUSU9OOiBCb2FyZFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQW50aGlsbC5QT1NJVElPTiwgQW50aGlsbC5SQURJVVMpO1xuICAgICAgICB0aGlzLmFkZENscygnYW50aGlsbCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbnRoaWxsLnRzIiwiaW1wb3J0IHsgQm9hcmRPYmplY3QgfSBmcm9tIFwiLi9ib2FyZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIERlYWRPYmplY3QgZXh0ZW5kcyBCb2FyZE9iamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHJhZGl1cyk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdkZWFkLW9iamVjdCcpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWFkT2JqZWN0LnRzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZE9iamVjdCBleHRlbmRzIE5vZGUge1xuXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uO1xuICAgIHByb3RlY3RlZCB2aWV3UmFkaXVzOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHJhZGl1czogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBhbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24/OiBCb2FyZFBvc2l0aW9uLCByYWRpdXM/OiBudW1iZXIsIHZpZXdSYWRpdXM/OiBudW1iZXIsIGFuZ2xlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnYm9hcmQtb2JqZWN0Jyk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLnNldFNpemUoKTtcbiAgICAgICAgaWYgKHZpZXdSYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlld1JhZGl1cyA9IHZpZXdSYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uQW5kQW5nbGVPbkJvYXJkKHBvc2l0aW9uLCBhbmdsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25PbkJvYXJkKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmlld1JhZGl1cykge1xuICAgICAgICAgICAgbGV0IHZpZXdSYWRpdXNPYmo6IE5vZGUgPSBuZXcgTm9kZSgnc3BhbicsICd2aWV3UmFkaXVzJyk7XG4gICAgICAgICAgICB2aWV3UmFkaXVzT2JqLmFkZENscygnY2VudGVyJyk7XG4gICAgICAgICAgICB2aWV3UmFkaXVzT2JqLmdldE5vZGUoKS5zdHlsZS53aWR0aCA9IHZpZXdSYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgICAgIHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpLnN0eWxlLmhlaWdodCA9IHZpZXdSYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbSh2aWV3UmFkaXVzT2JqLmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSB0aGlzLnJhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IHRoaXMucmFkaXVzICogMiArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY29sbGlkZXNkV2l0aChvdGhlckJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gQm9hcmRPYmplY3QuY29sbGlzaW9uKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpLCBvdGhlckJvYXJkT2JqZWN0LnBvc2l0aW9uLCBvdGhlckJvYXJkT2JqZWN0LmdldFNpemUoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlZXMob3RoZXJCb2FyZE9iamVjdDogQm9hcmRPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEJvYXJkT2JqZWN0LmNvbGxpc2lvbih0aGlzLnBvc2l0aW9uLCB0aGlzLnZpZXdSYWRpdXMsIG90aGVyQm9hcmRPYmplY3QucG9zaXRpb24sIG90aGVyQm9hcmRPYmplY3QuZ2V0U2l6ZSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHZhciBjb3JkcyA9IEJvYXJkLmdldENvcmRzKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gWyd0cmFuc2xhdGUoJyArIGNvcmRzLnggKyAncHgsICcgKyBjb3Jkcy55ICsgJ3B4KScsICdyb3RhdGUoJyArIHRoaXMuYW5nbGUgKyAnZGVnKSddLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9zaXRpb25PbkJvYXJkKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdmFyIGNvcmRzID0gQm9hcmQuZ2V0Q29yZHModGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMpO1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICB2YXIgcm90YXRlTWF0Y2hlcyA9IHRyYW5zZm9ybS5tYXRjaCgvKHJvdGF0ZVxcKC4qP1xcKSkvZyk7XG4gICAgICAgIGlmICh0cmFuc2Zvcm0gJiYgcm90YXRlTWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gWyd0cmFuc2xhdGUoJyArIGNvcmRzLnggKyAncHgsICcgKyBjb3Jkcy55ICsgJ3B4KScsIHJvdGF0ZU1hdGNoZXNdLmpvaW4oJyAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIGNvcmRzLnggKyAncHgsICcgKyBjb3Jkcy55ICsgJ3B4KSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcm90YXRlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICB2YXIgdHJhbnNsYXRlTWF0Y2hlcyA9IHRyYW5zZm9ybS5tYXRjaCgvKHRyYW5zbGF0ZVxcKC4qP1xcKSkvZyk7XG4gICAgICAgIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNsYXRlTWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gW3RyYW5zbGF0ZU1hdGNoZXNbMF0sICdyb3RhdGUoJyArIHRoaXMuYW5nbGUgKyAnZGVnKSddLmpvaW4oJyAnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArIGFuZ2xlICsgJ2RlZyknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IEJvYXJkUG9zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Vmlld1JhZGl1cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3UmFkaXVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGl1cyAqIDI7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb2xsaXNpb24ocG9zaXRpb25BOiBCb2FyZFBvc2l0aW9uLCBzaXplQTogbnVtYmVyLCBwb3NpdGlvbkI6IEJvYXJkUG9zaXRpb24sIHNpemVCOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlY3QxID0ge1xuICAgICAgICAgICAgeDogcG9zaXRpb25BLngsXG4gICAgICAgICAgICB5OiBwb3NpdGlvbkEueSxcbiAgICAgICAgICAgIHdpZHRoOiBzaXplQSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZUFcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVjdDIgPSB7XG4gICAgICAgICAgICB4OiBwb3NpdGlvbkIueCxcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uQi55LFxuICAgICAgICAgICAgd2lkdGg6IHNpemVCLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplQlxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZWN0MS54IDwgcmVjdDIueCArIHJlY3QyLndpZHRoICYmXG4gICAgICAgICAgICByZWN0MS54ICsgcmVjdDEud2lkdGggPiByZWN0Mi54ICYmXG4gICAgICAgICAgICByZWN0MS55IDwgcmVjdDIueSArIHJlY3QyLmhlaWdodCAmJlxuICAgICAgICAgICAgcmVjdDEuaGVpZ2h0ICsgcmVjdDEueSA+IHJlY3QyLnk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZE9iamVjdC50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBBbnRoaWxsIH0gZnJvbSBcIi4vYW50aGlsbFwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5pbXBvcnQgeyBNeUFudCB9IGZyb20gXCIuL215YW50XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSBcIi4va2V5c1wiO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRBbmdsZTogbnVtYmVyID0gMzAwLjI7XG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICBwcml2YXRlIGFudGhpbGw6IEFudGhpbGwgPSBuZXcgQW50aGlsbCgpO1xuICAgIHByaXZhdGUgc3VnYXI6IEFycmF5PFN1Z2FyPiA9IFtdO1xuICAgIHByaXZhdGUgYW50czogQXJyYXk8QW50PiA9IFtdO1xuICAgIHByaXZhdGUgc3Bhd25EZWxheTogbnVtYmVyID0gNjtcbiAgICBwcml2YXRlIG1heEFudHM6IG51bWJlciA9IDEwMDtcbiAgICBwcml2YXRlIHR1cm46IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXYnLCAnZ2FtZScpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuYm9hcmQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IC0yMDAsIHk6IDEwMCB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiAxMDAsIHk6IDMwIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IDkwLCB5OiAtMTUwIH0pKTtcbiAgICAgICAgdGhpcy5zdWdhci5wdXNoKG5ldyBTdWdhcih7IHg6IC0xOTAsIHk6IC0xOTAgfSkpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0odGhpcy5hbnRoaWxsLmdldE5vZGUoKSk7XG4gICAgICAgIGZvciAobGV0IHN1Z2FyIG9mIHRoaXMuc3VnYXIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShzdWdhci5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHZhciBhbmdsZTogbnVtYmVyID0gMzAwLjI7XG4gICAgICAgIC8vIHdoaWxlICh0aGlzLmFudHMubGVuZ3RoIDwgdGhpcy5tYXhBbnRzKSB7XG4gICAgICAgIC8vICAgICB2YXIgYW50ID0gbmV3IE15QW50KGFuZ2xlKTtcbiAgICAgICAgLy8gICAgIHRoaXMuYW50cy5wdXNoKGFudCk7XG4gICAgICAgIC8vICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYW50LmdldE5vZGUoKSk7XG4gICAgICAgIC8vICAgICBhbmdsZSAtPSA3LjI7XG4gICAgICAgIC8vICAgICBpZiAoYW5nbGUgPCAwKSB7XG4gICAgICAgIC8vICAgICAgICAgYW5nbGUgKz0gMzYwO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0S2V5Ym9hcmRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLlApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlID0gIXRoaXMucGF1c2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1haW4gbG9vcFxuICAgICAqL1xuICAgIHByaXZhdGUgcnVuKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5wYXVzZSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hbnRzLmxlbmd0aCA8IHRoaXMubWF4QW50cyAmJiB0aGlzLnR1cm4gJSB0aGlzLnNwYXduRGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgYW50ID0gbmV3IE15QW50KHRoaXMuY3VycmVudEFuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFudHMucHVzaChhbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShhbnQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSAtPSA3LjI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmdsZSArPSAzNjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBhbnQgb2YgdGhpcy5hbnRzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc3VnYXIgb2YgdGhpcy5zdWdhcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LnNlZXMoc3VnYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQuc2Vlc1N1Z2FyKHN1Z2FyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYW50LmNvbGxpZGVzZFdpdGgoc3VnYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hTdWdhcihzdWdhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGFudExvYWQ6IEJvYXJkT2JqZWN0ID0gYW50LmdldExvYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Z2FyLmluZGV4T2YoYW50TG9hZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Z2FyLnB1c2goYW50TG9hZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYW50TG9hZC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3VnYXIpO1xuICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFudExvYWQuc2V0UG9zaXRpb25PbkJvYXJkKGFudC5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFudC5jb2xsaWRlc2RXaXRoKHRoaXMuYW50aGlsbCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbnQucmVzdCgpO1xuICAgICAgICAgICAgICAgICAgICBhbnQucmVhY2hBbnRoaWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRyb3B0IGF0IGFudGhpbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkICYmICFhbnQuZ2V0TG9hZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Z2FyLnNwbGljZSh0aGlzLnN1Z2FyLmluZGV4T2YoYW50TG9hZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLmRlc3Ryb3koYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogYWRkIHBvaW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYW50TG9hZDogQm9hcmRPYmplY3QgPSBhbnQuZ2V0TG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYW50TG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYW50TG9hZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhhbnRMb2FkLmdldE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBUT0RPOiBhZGQgcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFudC5saXZlKHRoaXMudHVybik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudHVybisrO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbnZhciBnYW1lID0gbmV3IEdhbWUoKTtcbmdhbWUuc3RhcnQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS50cyIsImltcG9ydCB7IEFudCB9IGZyb20gXCIuL2FudFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IFN1Z2FyIH0gZnJvbSBcIi4vc3VnYXJcIjtcblxuZXhwb3J0IGNsYXNzIE15QW50IGV4dGVuZHMgQW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoYW5nbGUpO1xuICAgIH1cblxuICAgIGdldFRpcmVkKCkge1xuICAgICAgICB0aGlzLmdvVG9BbnRoaWxsKCk7XG4gICAgfVxuXG4gICAgc2Vlc1N1Z2FyKHN1Z2FyOiBTdWdhcikge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIHN1Z2FyLmdldEFtb3VudCgpID4gMSkge1xuICAgICAgICAgICAgdGhpcy5nb1RvVGFyZ2V0KHN1Z2FyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlYWNoU3VnYXIoc3VnYXI6IFN1Z2FyKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRMb2FkKCkgJiYgc3VnYXIuZ2V0QW1vdW50KCkgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnRha2VPYmplY3Qoc3VnYXIpO1xuICAgICAgICAgICAgdGhpcy5nb1RvQW50aGlsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVhY2hBbnRoaWxsKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRMb2FkKCkgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgdGhpcy50dXJuQXJvdW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wKCk7XG5cbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbXlhbnQudHMiLCJpbXBvcnQgeyBMaXZpbmdPYmplY3QgfSBmcm9tIFwiLi9saXZpbmdPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBTdWdhciB9IGZyb20gXCIuL3N1Z2FyXCI7XG5pbXBvcnQgeyBBbnRoaWxsIH0gZnJvbSBcIi4vYW50aGlsbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW50IGV4dGVuZHMgTGl2aW5nT2JqZWN0IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIEVORVJHWTogbnVtYmVyID0gNTAwO1xuICAgIHB1YmxpYyBzdGF0aWMgUkFOR0U6IG51bWJlciA9IDUwMDA7XG5cbiAgICBwdWJsaWMgc3RhdGljIFRVUk5fQVJPVU5EX1NQRUVEOiBudW1iZXIgPSA1O1xuXG4gICAgcHJvdGVjdGVkIHNwZWVkOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByb3VuZDogbnVtYmVyO1xuICAgIHByaXZhdGUgY3VycmVudFJhbmdlOiBudW1iZXIgPSBBbnQuUkFOR0U7XG4gICAgcHJpdmF0ZSByZXN0RGlzdGFuY2U6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjbG91ZDogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgY3VycmVudEVuZXJneTogbnVtYmVyID0gQW50LkVORVJHWTtcbiAgICBwcml2YXRlIHRhcmdldDogQm9hcmRPYmplY3Q7XG4gICAgcHJpdmF0ZSB0dXJuOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdGlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGN1cnJlbnRMb2FkOiBCb2FyZE9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHsgeDogMCwgeTogMCB9LCA1LCAyMCwgYW5nbGUpO1xuICAgICAgICB0aGlzLmFkZENscygnYW50Jyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTcGVlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9hZCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC41O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGl2ZSh0dXJuOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDwgQW50LkVORVJHWSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RW5lcmd5Kys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RW5lcmd5IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJuKys7XG4gICAgICAgIHRoaXMudGlyZWQgPSB0aGlzLmN1cnJlbnRSYW5nZSA8PSBBbnQuUkFOR0UgLyAzICogMlxuICAgICAgICBpZiAodGhpcy50aXJlZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUaXJlZCgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuY29udGFpbnMoJ3RpcmVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QuYWRkKCd0aXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LnJlbW92ZSgndGlyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3BlZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UmFuZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmdvKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlc3QoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFJhbmdlID0gQW50LlJBTkdFO1xuICAgIH07XG5cbiAgICBnbygpIHtcbiAgICAgICAgc3VwZXIuZ28oKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UmFuZ2UgLT0gdGhpcy5zcGVlZDtcbiAgICB9XG5cbiAgICBpc1RpcmVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50aXJlZDtcbiAgICB9XG5cbiAgICBnb1RvQW50aGlsbCgpIHtcbiAgICAgICAgdGhpcy5nb1RvUG9zaXRpb24oQW50aGlsbC5QT1NJVElPTik7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb24sIEFudGhpbGwuUE9TSVRJT04sIHRoaXMucG9zaXRpb24gPT0gQW50aGlsbC5QT1NJVElPTik7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbiA9PSBBbnRoaWxsLlBPU0lUSU9OKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50TG9hZC5kZXN0cm95KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFrZU9iamVjdChib2FyZE9iamVjdDogQm9hcmRPYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2FyZE9iamVjdCBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2FkID0gKGJvYXJkT2JqZWN0IGFzIFN1Z2FyKS5yZWR1Y2UodGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmFkZEl0ZW0odGhpcy5jdXJyZW50TG9hZC5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvYWQoKTogQm9hcmRPYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TG9hZDtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRUaXJlZCgpOiB2b2lkO1xuICAgIGFic3RyYWN0IHNlZXNTdWdhcihzdWdlcjogU3VnYXIpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlYWNoU3VnYXIoc3VnZXI6IFN1Z2FyKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaEFudGhpbGwoKTogdm9pZDtcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbnQudHMiLCJpbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGl2aW5nT2JqZWN0IGV4dGVuZHMgQm9hcmRPYmplY3Qge1xuXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uO1xuICAgIHByb3RlY3RlZCBhbmdsZTogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBzcGVlZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyLCB2aWV3UmFkaXVzPzogbnVtYmVyLCBhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzLCB2aWV3UmFkaXVzLCBhbmdsZSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLmFkZENscygnbGl2aW5nLW9iamVjdCcpO1xuICAgIH1cblxuICAgIGdvKCkge1xuICAgICAgICBpZiAoQm9hcmQuYXRUaGVFZGdlKHRoaXMucG9zaXRpb24pKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtIDkwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcmM6IG51bWJlciA9IE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwLjBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gKE1hdGguY29zKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gKE1hdGguc2luKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbk9uQm9hcmQodGhpcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHR1cm5Bcm91bmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gMTgwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnb1RvVGFyZ2V0KGJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdvVG9Qb3NpdGlvbihib2FyZE9iamVjdC5nZXRQb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ29Ub1Bvc2l0aW9uKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCBuZXdYID0gdGhpcy5wb3NpdGlvbi54IC0gcG9zaXRpb24ueDtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnBvc2l0aW9uLnkgLSBwb3NpdGlvbi55O1xuICAgICAgICBpZiAobmV3WCA8IDApIHtcbiAgICAgICAgICAgIG5ld1ggPSBuZXdYICogLTFcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3WSA8IDApIHtcbiAgICAgICAgICAgIG5ld1kgPSBuZXdZICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpc3RhbmNlOiBudW1iZXIgPSBNYXRoLnNxcnQobmV3WCAqIG5ld1ggKyBuZXdZICogbmV3WSk7XG4gICAgICAgIGxldCBmcmFjdGlvbjogbnVtYmVyID0gbmV3WSAvIGRpc3RhbmNlO1xuICAgICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXIgPSBNYXRoLmFzaW4oZnJhY3Rpb24pICogMTgwIC8gTWF0aC5QSTtcblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPCBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55ID4gcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMzYwIC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb24oKS54ID4gcG9zaXRpb24ueCAmJiB0aGlzLmdldFBvc2l0aW9uKCkueSA+IHBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiArPSAxODA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPiBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55IDwgcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTgwIC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm90YXRlKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgbGl2ZSh0dXJuOiBudW1iZXIpOiB2b2lkO1xuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpdmluZ09iamVjdC50cyIsImV4cG9ydCBlbnVtIEtleXMge1xuICAgIFRBQiA9IDksXG4gICAgRU5URVIgPSAxMyxcbiAgICBTSElGVCA9IDE2LFxuICAgIENUUkwgPSAxNyxcbiAgICBBTFQgPSAxOCxcbiAgICBFU0MgPSAyNyxcbiAgICBQT1MxID0gMzYsXG4gICAgTEVGVCA9IDM3LFxuICAgIFVQID0gMzgsXG4gICAgUklHSFQgPSAzOSxcbiAgICBET1dOID0gNDAsXG4gICAgU1BBQ0UgPSAzMixcbiAgICBQQUdFX1VQID0gMzMsXG4gICAgUEFHRV9ET1dOID0gMzQsXG4gICAgUCA9IDgwXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tleXMudHMiXSwic291cmNlUm9vdCI6IiJ9