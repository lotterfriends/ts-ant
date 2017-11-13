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
    Keys[Keys["D"] = 68] = "D";
})(Keys = exports.Keys || (exports.Keys = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDMwMjJjNGQ2ZjFiNjcwMDAyYzciLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9zdWdhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW50aGlsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVhZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpdmluZ09iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7SUFHSSxjQUFZLElBQVksRUFBRSxHQUFXLEVBQUUsT0FBZ0I7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENB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a0NBQVU7SUFDVixzQ0FBWTtJQUNaLDBDQUFjO0lBQ2QsMEJBQU07SUFDTiwwQkFBTTtBQUNWLENBQUMsRUFqQlcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBaUJmIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzMDIyYzRkNmYxYjY3MDAwMmM3IiwiZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgY2xzOiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENscyguLi5jbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKC4uLmNscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25vZGUudHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA1MDA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDUwMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2JvYXJkJyk7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdjZW50ZXInKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLndpZHRoID0gQm9hcmQuV0lEVEggKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuaGVpZ2h0ID0gQm9hcmQuSEVJR0hUICsgJ3B4JztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldENvcmRzKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICB2YXIgY29yZHMgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgaGFsZkJvYXJkV2lkdGggPSBCb2FyZC5XSURUSCAvIDI7XG4gICAgICAgIHZhciBoYWxmQm9hcmRIZWlnaHQgPSBCb2FyZC5IRUlHSFQgLyAyO1xuICAgICAgICBpZiAocG9zaXRpb24ueCA8IGhhbGZCb2FyZFdpZHRoICogLTEpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPSBoYWxmQm9hcmRXaWR0aCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi54ID4gaGFsZkJvYXJkV2lkdGgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPSBoYWxmQm9hcmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueSA8IGhhbGZCb2FyZEhlaWdodCAqIC0xKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi55ID0gaGFsZkJvYXJkSGVpZ2h0ICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiBoYWxmQm9hcmRIZWlnaHQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBoYWxmQm9hcmRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29yZHMueCA9IChoYWxmQm9hcmRXaWR0aCArIHBvc2l0aW9uLngpIC0gcmFkaXVzO1xuICAgICAgICBjb3Jkcy55ID0gKGhhbGZCb2FyZFdpZHRoICsgcG9zaXRpb24ueSkgLSByYWRpdXM7XG4gICAgICAgIHJldHVybiBjb3JkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGF0VGhlRWRnZShwb3NpdGlvbjogQm9hcmRQb3NpdGlvbik6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaGFsZkJvYXJkV2lkdGggPSBCb2FyZC5XSURUSCAvIDI7XG4gICAgICAgIHZhciBoYWxmQm9hcmRIZWlnaHQgPSBCb2FyZC5IRUlHSFQgLyAyO1xuICAgICAgICByZXR1cm4gcG9zaXRpb24ueCA9PT0gaGFsZkJvYXJkV2lkdGggKiAtMSB8fCBwb3NpdGlvbi54ID09PSBoYWxmQm9hcmRXaWR0aCB8fFxuICAgICAgICAgICAgcG9zaXRpb24ueSA9PT0gaGFsZkJvYXJkSGVpZ2h0ICogLTEgfHwgcG9zaXRpb24ueSA9PT0gaGFsZkJvYXJkSGVpZ2h0O1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZC50cyIsImltcG9ydCB7IERlYWRPYmplY3QgfSBmcm9tIFwiLi9kZWFkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQW50IH0gZnJvbSBcIi4vYW50XCI7XG5cbmV4cG9ydCBjbGFzcyBTdWdhciBleHRlbmRzIERlYWRPYmplY3Qge1xuXG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgYW50czogQXJyYXk8QW50PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyID0gMTAsIGFtb3VudDogbnVtYmVyID0gMjAsIGFudD86IEFudCkge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ3N1Z2FyJyk7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xuICAgICAgICBpZiAoYW50KSB7XG4gICAgICAgICAgICB0aGlzLmFudHMucHVzaChhbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlZHVjZShhbnQ6IEFudCk6IFN1Z2FyIHtcbiAgICAgICAgaWYgKHRoaXMuYW1vdW50ID09PSAxICYmIHRoaXMuYW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLCB0aGlzLmFtb3VudCk7XG4gICAgICAgIHRoaXMuYW1vdW50LS07XG4gICAgICAgIHRoaXMucmFkaXVzIC09IDAuNTtcbiAgICAgICAgdGhpcy5zZXRTaXplKCk7XG4gICAgICAgIHJldHVybiBuZXcgU3VnYXIodGhpcy5wb3NpdGlvbiwgNCwgMSwgYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QW1vdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFtb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveShhbnQ/OiBBbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGFudCkge1xuICAgICAgICAgICAgdGhpcy5hbnRzLnNwbGljZSh0aGlzLmFudHMuaW5kZXhPZihhbnQpKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1Z2FyLnRzIiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgRGVhZE9iamVjdCB9IGZyb20gXCIuL2RlYWRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBBbnRoaWxsIGV4dGVuZHMgRGVhZE9iamVjdCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSAyMDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gMjA7XG4gICAgcHVibGljIHN0YXRpYyBSQURJVVM6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgUE9TSVRJT046IEJvYXJkUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBbnRoaWxsLlBPU0lUSU9OLCBBbnRoaWxsLlJBRElVUyk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdhbnRoaWxsJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FudGhpbGwudHMiLCJpbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgRGVhZE9iamVjdCBleHRlbmRzIEJvYXJkT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2RlYWQtb2JqZWN0Jyk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlYWRPYmplY3QudHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkT2JqZWN0IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IEJvYXJkUG9zaXRpb247XG4gICAgcHJvdGVjdGVkIHZpZXdSYWRpdXM6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgcmFkaXVzOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbj86IEJvYXJkUG9zaXRpb24sIHJhZGl1cz86IG51bWJlciwgdmlld1JhZGl1cz86IG51bWJlciwgYW5nbGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZC1vYmplY3QnKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgICAgICBpZiAodmlld1JhZGl1cykge1xuICAgICAgICAgICAgdGhpcy52aWV3UmFkaXVzID0gdmlld1JhZGl1cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25BbmRBbmdsZU9uQm9hcmQocG9zaXRpb24sIGFuZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbk9uQm9hcmQocG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2aWV3UmFkaXVzKSB7XG4gICAgICAgICAgICBsZXQgdmlld1JhZGl1c09iajogTm9kZSA9IG5ldyBOb2RlKCdzcGFuJywgJ3ZpZXdSYWRpdXMnKTtcbiAgICAgICAgICAgIHZpZXdSYWRpdXNPYmouYWRkQ2xzKCdjZW50ZXInKTtcbiAgICAgICAgICAgIHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpLnN0eWxlLndpZHRoID0gdmlld1JhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICAgICAgdmlld1JhZGl1c09iai5nZXROb2RlKCkuc3R5bGUuaGVpZ2h0ID0gdmlld1JhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKHZpZXdSYWRpdXNPYmouZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IHRoaXMucmFkaXVzICogMiArICdweCc7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5yYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjb2xsaWRlc2RXaXRoKG90aGVyQm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBCb2FyZE9iamVjdC5jb2xsaXNpb24odGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCksIG90aGVyQm9hcmRPYmplY3QucG9zaXRpb24sIG90aGVyQm9hcmRPYmplY3QuZ2V0U2l6ZSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VlcyhvdGhlckJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gQm9hcmRPYmplY3QuY29sbGlzaW9uKHRoaXMucG9zaXRpb24sIHRoaXMudmlld1JhZGl1cywgb3RoZXJCb2FyZE9iamVjdC5wb3NpdGlvbiwgb3RoZXJCb2FyZE9iamVjdC5nZXRTaXplKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbkFuZEFuZ2xlT25Cb2FyZChwb3NpdGlvbjogQm9hcmRQb3NpdGlvbiwgYW5nbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdmFyIGNvcmRzID0gQm9hcmQuZ2V0Q29yZHModGhpcy5wb3NpdGlvbiwgdGhpcy5yYWRpdXMpO1xuICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSBbJ3RyYW5zbGF0ZSgnICsgY29yZHMueCArICdweCwgJyArIGNvcmRzLnkgKyAncHgpJywgJ3JvdGF0ZSgnICsgdGhpcy5hbmdsZSArICdkZWcpJ10uam9pbignICcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbk9uQm9hcmQocG9zaXRpb246IEJvYXJkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB2YXIgY29yZHMgPSBCb2FyZC5nZXRDb3Jkcyh0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIHZhciByb3RhdGVNYXRjaGVzID0gdHJhbnNmb3JtLm1hdGNoKC8ocm90YXRlXFwoLio/XFwpKS9nKTtcbiAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiByb3RhdGVNYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSBbJ3RyYW5zbGF0ZSgnICsgY29yZHMueCArICdweCwgJyArIGNvcmRzLnkgKyAncHgpJywgcm90YXRlTWF0Y2hlc10uam9pbignICcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgY29yZHMueCArICdweCwgJyArIGNvcmRzLnkgKyAncHgpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByb3RhdGUoYW5nbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIHZhciB0cmFuc2xhdGVNYXRjaGVzID0gdHJhbnNmb3JtLm1hdGNoKC8odHJhbnNsYXRlXFwoLio/XFwpKS9nKTtcbiAgICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2xhdGVNYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5zdHlsZS50cmFuc2Zvcm0gPSBbdHJhbnNsYXRlTWF0Y2hlc1swXSwgJ3JvdGF0ZSgnICsgdGhpcy5hbmdsZSArICdkZWcpJ10uam9pbignICcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgYW5nbGUgKyAnZGVnKSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogQm9hcmRQb3NpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSYWRpdXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWaWV3UmFkaXVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdSYWRpdXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzICogMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbGxpc2lvbihwb3NpdGlvbkE6IEJvYXJkUG9zaXRpb24sIHNpemVBOiBudW1iZXIsIHBvc2l0aW9uQjogQm9hcmRQb3NpdGlvbiwgc2l6ZUI6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcmVjdDEgPSB7XG4gICAgICAgICAgICB4OiBwb3NpdGlvbkEueCxcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uQS55LFxuICAgICAgICAgICAgd2lkdGg6IHNpemVBLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplQVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZWN0MiA9IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uQi54LFxuICAgICAgICAgICAgeTogcG9zaXRpb25CLnksXG4gICAgICAgICAgICB3aWR0aDogc2l6ZUIsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemVCXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHJlY3QxLnggPCByZWN0Mi54ICsgcmVjdDIud2lkdGggJiZcbiAgICAgICAgICAgIHJlY3QxLnggKyByZWN0MS53aWR0aCA+IHJlY3QyLnggJiZcbiAgICAgICAgICAgIHJlY3QxLnkgPCByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0ICYmXG4gICAgICAgICAgICByZWN0MS5oZWlnaHQgKyByZWN0MS55ID4gcmVjdDIueTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JvYXJkT2JqZWN0LnRzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IEFudGhpbGwgfSBmcm9tIFwiLi9hbnRoaWxsXCI7XG5pbXBvcnQgeyBTdWdhciB9IGZyb20gXCIuL3N1Z2FyXCI7XG5pbXBvcnQgeyBBbnQgfSBmcm9tIFwiLi9hbnRcIjtcbmltcG9ydCB7IE15QW50IH0gZnJvbSBcIi4vbXlhbnRcIjtcbmltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEtleXMgfSBmcm9tIFwiLi9rZXlzXCI7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHByaXZhdGUgY3VycmVudEFuZ2xlOiBudW1iZXIgPSAzMDAuMjtcbiAgICBwcml2YXRlIGJvYXJkOiBCb2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgIHByaXZhdGUgYW50aGlsbDogQW50aGlsbCA9IG5ldyBBbnRoaWxsKCk7XG4gICAgcHJpdmF0ZSBzdWdhcjogQXJyYXk8U3VnYXI+ID0gW107XG4gICAgcHJpdmF0ZSBhbnRzOiBBcnJheTxBbnQ+ID0gW107XG4gICAgcHJpdmF0ZSBzcGF3bkRlbGF5OiBudW1iZXIgPSA2O1xuICAgIHByaXZhdGUgbWF4QW50czogbnVtYmVyID0gNTA7XG4gICAgcHJpdmF0ZSB0dXJuOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0aGlzLmJvYXJkLmdldE5vZGUoKSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiAtMjAwLCB5OiAxMDAgfSkpO1xuICAgICAgICB0aGlzLnN1Z2FyLnB1c2gobmV3IFN1Z2FyKHsgeDogMTAwLCB5OiAzMCB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiA5MCwgeTogLTE1MCB9KSk7XG4gICAgICAgIHRoaXMuc3VnYXIucHVzaChuZXcgU3VnYXIoeyB4OiAtMTkwLCB5OiAtMTkwIH0pKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKHRoaXMuYW50aGlsbC5nZXROb2RlKCkpO1xuICAgICAgICBmb3IgKGxldCBzdWdhciBvZiB0aGlzLnN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oc3VnYXIuZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB2YXIgYW5nbGU6IG51bWJlciA9IDMwMC4yO1xuICAgICAgICAvLyB3aGlsZSAodGhpcy5hbnRzLmxlbmd0aCA8IHRoaXMubWF4QW50cykge1xuICAgICAgICAvLyAgICAgdmFyIGFudCA9IG5ldyBNeUFudChhbmdsZSk7XG4gICAgICAgIC8vICAgICB0aGlzLmFudHMucHVzaChhbnQpO1xuICAgICAgICAvLyAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGFudC5nZXROb2RlKCkpO1xuICAgICAgICAvLyAgICAgYW5nbGUgLT0gNy4yO1xuICAgICAgICAvLyAgICAgaWYgKGFuZ2xlIDwgMCkge1xuICAgICAgICAvLyAgICAgICAgIGFuZ2xlICs9IDM2MDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5pbml0S2V5Ym9hcmRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEtleWJvYXJkTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5QKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZSA9ICF0aGlzLnBhdXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLkQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5vZGUoKS5jbGFzc0xpc3QudG9nZ2xlKCdkZWJ1ZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtYWluIGxvb3BcbiAgICAgKi9cbiAgICBwcml2YXRlIHJ1bigpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMucGF1c2UpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYW50cy5sZW5ndGggPCB0aGlzLm1heEFudHMgJiYgdGhpcy50dXJuICUgdGhpcy5zcGF3bkRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFudCA9IG5ldyBNeUFudCh0aGlzLmN1cnJlbnRBbmdsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbnRzLnB1c2goYW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oYW50LmdldE5vZGUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgLT0gNy4yO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmdsZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5nbGUgKz0gMzYwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgYW50IG9mIHRoaXMuYW50cykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHN1Z2FyIG9mIHRoaXMuc3VnYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudC5zZWVzKHN1Z2FyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnNlZXNTdWdhcihzdWdhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFudC5jb2xsaWRlc2RXaXRoKHN1Z2FyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW50LnJlYWNoU3VnYXIoc3VnYXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBhbnRMb2FkOiBCb2FyZE9iamVjdCA9IGFudC5nZXRMb2FkKCk7XG4gICAgICAgICAgICAgICAgaWYgKGFudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWdhci5pbmRleE9mKGFudExvYWQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWdhci5wdXNoKGFudExvYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGFudExvYWQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN1Z2FyKTtcbiAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBhbnRMb2FkLnNldFBvc2l0aW9uT25Cb2FyZChhbnQuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhbnQuY29sbGlkZXNkV2l0aCh0aGlzLmFudGhpbGwpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYW50LnJlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgYW50LnJlYWNoQW50aGlsbCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBkcm9wdCBhdCBhbnRoaWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW50TG9hZCAmJiAhYW50LmdldExvYWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnRMb2FkIGluc3RhbmNlb2YgU3VnYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWdhci5zcGxpY2UodGhpcy5zdWdhci5pbmRleE9mKGFudExvYWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW50TG9hZC5kZXN0cm95KGFudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGFkZCBwb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGFudExvYWQ6IEJvYXJkT2JqZWN0ID0gYW50LmdldExvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGFudExvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFudExvYWQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYW50TG9hZC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gVE9ETzogYWRkIHBvaW50cztcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbnQubGl2ZSh0aGlzLnR1cm4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnR1cm4rKztcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG52YXIgZ2FtZSA9IG5ldyBHYW1lKCk7XG5nYW1lLnN0YXJ0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS50cyIsImltcG9ydCB7IEFudCB9IGZyb20gXCIuL2FudFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcbmltcG9ydCB7IFN1Z2FyIH0gZnJvbSBcIi4vc3VnYXJcIjtcblxuZXhwb3J0IGNsYXNzIE15QW50IGV4dGVuZHMgQW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoYW5nbGUpO1xuICAgIH1cblxuICAgIGdldFRpcmVkKCkge1xuICAgICAgICB0aGlzLmdvVG9BbnRoaWxsKCk7XG4gICAgfVxuXG4gICAgc2Vlc1N1Z2FyKHN1Z2FyOiBTdWdhcikge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIHN1Z2FyLmdldEFtb3VudCgpID4gMCAmJiBzdWdhci5hbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub1RhcmdldChzdWdhcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWFjaFN1Z2FyKHN1Z2FyOiBTdWdhcikge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0TG9hZCgpICYmIHN1Z2FyLmdldEFtb3VudCgpID4gMCAmJiBzdWdhci5hbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMudGFrZU9iamVjdChzdWdhcik7XG4gICAgICAgICAgICB0aGlzLmdvVG9BbnRoaWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWFjaEFudGhpbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldExvYWQoKSBpbnN0YW5jZW9mIFN1Z2FyKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm5Bcm91bmQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3AoKTtcblxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL215YW50LnRzIiwiaW1wb3J0IHsgTGl2aW5nT2JqZWN0IH0gZnJvbSBcIi4vbGl2aW5nT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgU3VnYXIgfSBmcm9tIFwiLi9zdWdhclwiO1xuaW1wb3J0IHsgQW50aGlsbCB9IGZyb20gXCIuL2FudGhpbGxcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFudCBleHRlbmRzIExpdmluZ09iamVjdCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIHN0YXRpYyBFTkVSR1k6IG51bWJlciA9IDUwMDtcbiAgICBwdWJsaWMgc3RhdGljIFJBTkdFOiBudW1iZXIgPSA1MDAwO1xuXG4gICAgcHVibGljIHN0YXRpYyBUVVJOX0FST1VORF9TUEVFRDogbnVtYmVyID0gNTtcblxuICAgIHByb3RlY3RlZCBzcGVlZDogbnVtYmVyID0gNTtcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgcm91bmQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGN1cnJlbnRSYW5nZTogbnVtYmVyID0gQW50LlJBTkdFO1xuICAgIHByaXZhdGUgcmVzdERpc3RhbmNlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2xvdWQ6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRFbmVyZ3k6IG51bWJlciA9IEFudC5FTkVSR1k7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEJvYXJkT2JqZWN0O1xuICAgIHByaXZhdGUgdHVybjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjdXJyZW50TG9hZDogQm9hcmRPYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcih7IHg6IDAsIHk6IDAgfSwgNSwgMjAsIGFuZ2xlKTtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2FudCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3BlZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50TG9hZCkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvYWQgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuNTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpdmUodHVybjogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEVuZXJneSA8IEFudC5FTkVSR1kpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEVuZXJneSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEVuZXJneSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHVybisrO1xuICAgICAgICB0aGlzLnRpcmVkID0gdGhpcy5jdXJyZW50UmFuZ2UgPD0gQW50LlJBTkdFIC8gMyAqIDJcbiAgICAgICAgaWYgKHRoaXMudGlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlyZWQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0aXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuY2xhc3NMaXN0LmFkZCgndGlyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLmNsYXNzTGlzdC5yZW1vdmUoJ3RpcmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNwZWVkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFJhbmdlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5nbygpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXN0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRSYW5nZSA9IEFudC5SQU5HRTtcbiAgICB9O1xuXG4gICAgZ28oKSB7XG4gICAgICAgIHN1cGVyLmdvKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFJhbmdlIC09IHRoaXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgaXNUaXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlyZWQ7XG4gICAgfVxuXG4gICAgZ29Ub0FudGhpbGwoKSB7XG4gICAgICAgIHRoaXMuZ29Ub1Bvc2l0aW9uKEFudGhpbGwuUE9TSVRJT04pO1xuICAgIH1cblxuICAgIGRyb3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc2l0aW9uLCBBbnRoaWxsLlBPU0lUSU9OLCB0aGlzLnBvc2l0aW9uID09IEFudGhpbGwuUE9TSVRJT04pO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24gPT0gQW50aGlsbC5QT1NJVElPTikge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudExvYWQuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9hZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRha2VPYmplY3QoYm9hcmRPYmplY3Q6IEJvYXJkT2JqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmRPYmplY3QgaW5zdGFuY2VvZiBTdWdhcikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9hZCA9IChib2FyZE9iamVjdCBhcyBTdWdhcikucmVkdWNlKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5hZGRJdGVtKHRoaXMuY3VycmVudExvYWQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2FkKCk6IEJvYXJkT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExvYWQ7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ2V0VGlyZWQoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBzZWVzU3VnYXIoc3VnZXI6IFN1Z2FyKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWFjaFN1Z2FyKHN1Z2VyOiBTdWdhcik6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcmVhY2hBbnRoaWxsKCk6IHZvaWQ7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbnQudHMiLCJpbXBvcnQgeyBCb2FyZE9iamVjdCB9IGZyb20gXCIuL2JvYXJkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGl2aW5nT2JqZWN0IGV4dGVuZHMgQm9hcmRPYmplY3Qge1xuXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uO1xuICAgIHByb3RlY3RlZCBhbmdsZTogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBzcGVlZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyLCB2aWV3UmFkaXVzPzogbnVtYmVyLCBhbmdsZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgcmFkaXVzLCB2aWV3UmFkaXVzLCBhbmdsZSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLmFkZENscygnbGl2aW5nLW9iamVjdCcpO1xuICAgIH1cblxuICAgIGdvKCkge1xuICAgICAgICBpZiAoQm9hcmQuYXRUaGVFZGdlKHRoaXMucG9zaXRpb24pKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtIDkwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcmM6IG51bWJlciA9IE1hdGguUEkgKiB0aGlzLmFuZ2xlIC8gMTgwLjBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gKE1hdGguY29zKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gKE1hdGguc2luKGFyYykgKiB0aGlzLnNwZWVkKSArIHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbk9uQm9hcmQodGhpcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHR1cm5Bcm91bmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gMTgwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnb1RvVGFyZ2V0KGJvYXJkT2JqZWN0OiBCb2FyZE9iamVjdCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdvVG9Qb3NpdGlvbihib2FyZE9iamVjdC5nZXRQb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ29Ub1Bvc2l0aW9uKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCBuZXdYID0gdGhpcy5wb3NpdGlvbi54IC0gcG9zaXRpb24ueDtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnBvc2l0aW9uLnkgLSBwb3NpdGlvbi55O1xuICAgICAgICBpZiAobmV3WCA8IDApIHtcbiAgICAgICAgICAgIG5ld1ggPSBuZXdYICogLTFcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3WSA8IDApIHtcbiAgICAgICAgICAgIG5ld1kgPSBuZXdZICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpc3RhbmNlOiBudW1iZXIgPSBNYXRoLnNxcnQobmV3WCAqIG5ld1ggKyBuZXdZICogbmV3WSk7XG4gICAgICAgIGxldCBmcmFjdGlvbjogbnVtYmVyID0gbmV3WSAvIGRpc3RhbmNlO1xuICAgICAgICBsZXQgZGlyZWN0aW9uOiBudW1iZXIgPSBNYXRoLmFzaW4oZnJhY3Rpb24pICogMTgwIC8gTWF0aC5QSTtcblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPCBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55ID4gcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMzYwIC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb24oKS54ID4gcG9zaXRpb24ueCAmJiB0aGlzLmdldFBvc2l0aW9uKCkueSA+IHBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiArPSAxODA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXRQb3NpdGlvbigpLnggPiBwb3NpdGlvbi54ICYmIHRoaXMuZ2V0UG9zaXRpb24oKS55IDwgcG9zaXRpb24ueSkge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTgwIC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm90YXRlKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgbGl2ZSh0dXJuOiBudW1iZXIpOiB2b2lkO1xuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpdmluZ09iamVjdC50cyIsImV4cG9ydCBlbnVtIEtleXMge1xuICAgIFRBQiA9IDksXG4gICAgRU5URVIgPSAxMyxcbiAgICBTSElGVCA9IDE2LFxuICAgIENUUkwgPSAxNyxcbiAgICBBTFQgPSAxOCxcbiAgICBFU0MgPSAyNyxcbiAgICBQT1MxID0gMzYsXG4gICAgTEVGVCA9IDM3LFxuICAgIFVQID0gMzgsXG4gICAgUklHSFQgPSAzOSxcbiAgICBET1dOID0gNDAsXG4gICAgU1BBQ0UgPSAzMixcbiAgICBQQUdFX1VQID0gMzMsXG4gICAgUEFHRV9ET1dOID0gMzQsXG4gICAgUCA9IDgwLFxuICAgIEQgPSA2OFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tleXMudHMiXSwic291cmNlUm9vdCI6IiJ9