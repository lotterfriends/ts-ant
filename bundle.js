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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
    Board.getCords = function (position) {
        if (position.x < 0) {
        }
    };
    Board.WIDTH = 600;
    Board.HEIGHT = 600;
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
var node_1 = __webpack_require__(0);
var board_1 = __webpack_require__(1);
var anthill_1 = __webpack_require__(3);
var sugar_1 = __webpack_require__(4);
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this, 'div', 'game') || this;
        _this.board = new board_1.Board();
        _this.anthill = new anthill_1.Anthill();
        _this.bootstrap();
        return _this;
    }
    Game.prototype.start = function () {
        this.run();
    };
    Game.prototype.bootstrap = function () {
        this.addItem(this.board.getNode());
        this.board.addItem(this.anthill.getNode());
        this.board.addItem(new sugar_1.Sugar({ x: 40, y: 350 }).getNode());
        this.board.addItem(new sugar_1.Sugar({ x: 100, y: 30 }).getNode());
        this.board.addItem(new sugar_1.Sugar({ x: 488, y: 45 }).getNode());
        this.board.addItem(new sugar_1.Sugar({ x: 330, y: 480 }).getNode());
        document.body.appendChild(this.getNode());
    };
    /**
     * main loop
     */
    Game.prototype.run = function () {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.run();
        });
    };
    return Game;
}(node_1.Node));
var game = new Game();
game.start();


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
var board_1 = __webpack_require__(1);
var deadObject_1 = __webpack_require__(5);
var Anthill = /** @class */ (function (_super) {
    __extends(Anthill, _super);
    function Anthill() {
        var _this = _super.call(this, { x: board_1.Board.WIDTH / 2, y: board_1.Board.HEIGHT / 2 }, Anthill.RADIUS) || this;
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
var deadObject_1 = __webpack_require__(5);
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
var boardObject_1 = __webpack_require__(6);
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
var BoardObject = /** @class */ (function (_super) {
    __extends(BoardObject, _super);
    function BoardObject(position, radius, viewRadius) {
        var _this = _super.call(this, 'div', 'board-object') || this;
        if (position.x < 0) {
            position.x = 0;
        }
        if (position.x > board_1.Board.WIDTH) {
            position.x = board_1.Board.WIDTH;
        }
        if (position.y < 0) {
            position.y = 0;
        }
        if (position.y > board_1.Board.HEIGHT) {
            position.y = board_1.Board.HEIGHT;
        }
        _this.position = position;
        _this.node.style.transform = 'translate(' + _this.position.x + 'px, ' + _this.position.y + 'px)';
        if (radius) {
            _this.node.style.width = radius * 2 + 'px';
            _this.node.style.height = radius * 2 + 'px';
            _this.radius = radius;
        }
        if (viewRadius) {
            _this.viewRadius = viewRadius;
        }
        return _this;
    }
    BoardObject.prototype.getRadius = function () {
        return this.radius;
    };
    BoardObject.prototype.getViewRadius = function () {
        return this.viewRadius;
    };
    return BoardObject;
}(node_1.Node));
exports.BoardObject = BoardObject;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzExZGZjMzE5MzMyMTEyMzk1NmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9hbnRoaWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9zdWdhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVhZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmRPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0lBR0ksY0FBWSxJQUFZLEVBQUUsR0FBVyxFQUFFLE9BQWdCO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxDQUFDO0lBQ0wsQ0FBQztJ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Q3ZCLENBQUM7SUFFTSxtQ0FBYSxHQUFwQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFHTCxrQkFBQztBQUFELENBQUMsQ0ExQ2dDLFdBQUksR0EwQ3BDO0FBMUNZLGtDQUFXIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMxMWRmYzMxOTMzMjExMjM5NTZlIiwiZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgY2xzOiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENscyguLi5jbHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKC4uLmNscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25vZGUudHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA2MDA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDYwMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2JvYXJkJyk7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdjZW50ZXInKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLndpZHRoID0gQm9hcmQuV0lEVEggKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuaGVpZ2h0ID0gQm9hcmQuSEVJR0hUICsgJ3B4JztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldENvcmRzKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbi54IDwgMCkge1xuXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmQudHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgQW50aGlsbCB9IGZyb20gXCIuL2FudGhpbGxcIjtcbmltcG9ydCB7IFN1Z2FyIH0gZnJvbSBcIi4vc3VnYXJcIjtcblxuY2xhc3MgR2FtZSBleHRlbmRzIE5vZGUge1xuXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICBwcml2YXRlIGFudGhpbGw6IEFudGhpbGwgPSBuZXcgQW50aGlsbCgpO1xuICAgIHByaXZhdGUgc3VnYXI6IEFycmF5PFN1Z2FyPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0aGlzLmJvYXJkLmdldE5vZGUoKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbSh0aGlzLmFudGhpbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IDQwLCB5OiAzNTAgfSkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IDEwMCwgeTogMzAgfSkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IDQ4OCwgeTogNDUgfSkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IDMzMCwgeTogNDgwIH0pLmdldE5vZGUoKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nZXROb2RlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1haW4gbG9vcFxuICAgICAqL1xuICAgIHByaXZhdGUgcnVuKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxudmFyIGdhbWUgPSBuZXcgR2FtZSgpO1xuZ2FtZS5zdGFydCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lLnRzIiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgRGVhZE9iamVjdCB9IGZyb20gXCIuL2RlYWRPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIEFudGhpbGwgZXh0ZW5kcyBEZWFkT2JqZWN0IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDIwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSAyMDtcbiAgICBwdWJsaWMgc3RhdGljIFJBRElVUzogbnVtYmVyID0gMTA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoeyB4OiBCb2FyZC5XSURUSCAvIDIsIHk6IEJvYXJkLkhFSUdIVCAvIDIgfSwgQW50aGlsbC5SQURJVVMpXG4gICAgICAgIHRoaXMuYWRkQ2xzKCdhbnRoaWxsJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FudGhpbGwudHMiLCJpbXBvcnQgeyBEZWFkT2JqZWN0IH0gZnJvbSBcIi4vZGVhZE9iamVjdFwiO1xuaW1wb3J0IHsgQm9hcmRQb3NpdGlvbiB9IGZyb20gXCIuL2JvYXJkUG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFN1Z2FyIGV4dGVuZHMgRGVhZE9iamVjdCB7XG5cbiAgICBwcml2YXRlIGFtb3VudDogbnVtYmVyID0gMjA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogQm9hcmRQb3NpdGlvbikge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgMTApO1xuICAgICAgICB0aGlzLmFkZENscygnc3VnYXInKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVkdWNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFtb3VudC0tO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbW91bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50O1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdWdhci50cyIsImltcG9ydCB7IEJvYXJkT2JqZWN0IH0gZnJvbSBcIi4vYm9hcmRPYmplY3RcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWFkT2JqZWN0IGV4dGVuZHMgQm9hcmRPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IEJvYXJkUG9zaXRpb24sIHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCByYWRpdXMpO1xuICAgICAgICB0aGlzLmFkZENscygnZGVhZC1vYmplY3QnKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVhZE9iamVjdC50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmRPYmplY3QgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogQm9hcmRQb3NpdGlvbjtcbiAgICBwcm90ZWN0ZWQgdmlld1JhZGl1czogbnVtYmVyO1xuICAgIHByb3RlY3RlZCByYWRpdXM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM/OiBudW1iZXIsIHZpZXdSYWRpdXM/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZC1vYmplY3QnKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueCA+IEJvYXJkLldJRFRIKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi54ID0gQm9hcmQuV0lEVEg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnkgPCAwKSB7XG4gICAgICAgICAgICBwb3NpdGlvbi55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24ueSA+IEJvYXJkLkhFSUdIVCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueSA9IEJvYXJkLkhFSUdIVDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyB0aGlzLnBvc2l0aW9uLnggKyAncHgsICcgKyB0aGlzLnBvc2l0aW9uLnkgKyAncHgpJztcblxuICAgICAgICBpZiAocmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSByYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSByYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aWV3UmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdSYWRpdXMgPSB2aWV3UmFkaXVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJhZGl1cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZpZXdSYWRpdXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld1JhZGl1cztcbiAgICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZE9iamVjdC50cyJdLCJzb3VyY2VSb290IjoiIn0=