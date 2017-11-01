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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
var board_1 = __webpack_require__(2);
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
    Node.prototype.addCls = function (cls) {
        this.node.classList.add(cls);
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
var Anthill = /** @class */ (function (_super) {
    __extends(Anthill, _super);
    function Anthill() {
        var _this = _super.call(this, 'div', 'anthill') || this;
        _this.bootstrap();
        return _this;
    }
    Anthill.prototype.bootstrap = function () {
        this.addCls('center');
        this.node.style.width = Anthill.WIDTH + 'px';
        this.node.style.height = Anthill.HEIGHT + 'px';
    };
    Anthill.WIDTH = 20;
    Anthill.HEIGHT = 20;
    return Anthill;
}(node_1.Node));
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
        _this.addCls('sugar');
        return _this;
    }
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
var node_1 = __webpack_require__(1);
var board_1 = __webpack_require__(2);
var DeadObject = /** @class */ (function (_super) {
    __extends(DeadObject, _super);
    function DeadObject(position, radius) {
        var _this = _super.call(this, 'div', 'dead-object') || this;
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
        _this.node.style.width = radius * 2 + 'px';
        _this.node.style.height = radius * 2 + 'px';
        _this.node.style.transform = 'translate(' + _this.position.x + 'px, ' + _this.position.y + 'px)';
        return _this;
        // 10x20
    }
    return DeadObject;
}(node_1.Node));
exports.DeadObject = DeadObject;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDlmM2QzNmIwNDI0NmQzZjc0YmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9hbnRoaWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9zdWdhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVhZE9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLG9DQUE4QjtBQUM5QixxQ0FBZ0M7QUFDaEMsdUNBQW9DO0FBQ3BDLHFDQUFnQztBQUVoQztJQUFtQix3QkFBSTtJQU1uQjtRQUFBLFlBQ0ksa0JBQU0sS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUV2QjtRQVBPLFdBQUssR0FBVSxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQzNCLGFBQU8sR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUtyQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7O0lBQ3JCLENBQUM7SUFFTSxvQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVPLHdC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LEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMxQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDM0MsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDOztRQUM5RixRQUFRO0lBRVosQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FBQyxDQTFCK0IsV0FBSSxHQTBCbkM7QUExQlksZ0NBQVUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDlmM2QzNmIwNDI0NmQzZjc0YmMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgQW50aGlsbCB9IGZyb20gXCIuL2FudGhpbGxcIjtcbmltcG9ydCB7IFN1Z2FyIH0gZnJvbSBcIi4vc3VnYXJcIjtcblxuY2xhc3MgR2FtZSBleHRlbmRzIE5vZGUge1xuXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICBwcml2YXRlIGFudGhpbGw6IEFudGhpbGwgPSBuZXcgQW50aGlsbCgpO1xuICAgIHByaXZhdGUgc3VnYXI6IEFycmF5PFN1Z2FyPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0aGlzLmJvYXJkLmdldE5vZGUoKSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbSh0aGlzLmFudGhpbGwuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IDQwLCB5OiAzNTAgfSkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IDEwMCwgeTogMzAgfSkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IDQ4OCwgeTogNDUgfSkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBTdWdhcih7IHg6IDMzMCwgeTogNDgwIH0pLmdldE5vZGUoKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nZXROb2RlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1haW4gbG9vcFxuICAgICAqL1xuICAgIHByaXZhdGUgcnVuKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxudmFyIGdhbWUgPSBuZXcgR2FtZSgpO1xuZ2FtZS5zdGFydCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lLnRzIiwiZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgY2xzOiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENscyhjbHM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ub2RlLnRzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCB7IEJvYXJkUG9zaXRpb24gfSBmcm9tIFwiLi9ib2FyZFBvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCBleHRlbmRzIE5vZGUge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gNjAwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSA2MDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZCcpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZENscygnY2VudGVyJyk7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IEJvYXJkLldJRFRIICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IEJvYXJkLkhFSUdIVCArICdweCc7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb3Jkcyhwb3NpdGlvbjogQm9hcmRQb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24ueCA8IDApIHtcblxuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JvYXJkLnRzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEFudGhpbGwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDIwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSAyMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2FudGhpbGwnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRDbHMoJ2NlbnRlcicpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBBbnRoaWxsLldJRFRIICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IEFudGhpbGwuSEVJR0hUICsgJ3B4JztcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYW50aGlsbC50cyIsImltcG9ydCB7IERlYWRPYmplY3QgfSBmcm9tIFwiLi9kZWFkT2JqZWN0XCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgU3VnYXIgZXh0ZW5kcyBEZWFkT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uKSB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCAxMCk7XG4gICAgICAgIHRoaXMuYWRkQ2xzKCdzdWdhcicpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdWdhci50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgeyBCb2FyZFBvc2l0aW9uIH0gZnJvbSBcIi4vYm9hcmRQb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgRGVhZE9iamVjdCBleHRlbmRzIE5vZGUge1xuXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogQm9hcmRQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBCb2FyZFBvc2l0aW9uLCByYWRpdXM6IG51bWJlcikge1xuICAgICAgICBzdXBlcignZGl2JywgJ2RlYWQtb2JqZWN0Jyk7XG4gICAgICAgIGlmIChwb3NpdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnggPiBCb2FyZC5XSURUSCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueCA9IEJvYXJkLldJRFRIO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi55IDwgMCkge1xuICAgICAgICAgICAgcG9zaXRpb24ueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiBCb2FyZC5IRUlHSFQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBCb2FyZC5IRUlHSFQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSByYWRpdXMgKiAyICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IHJhZGl1cyAqIDIgKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy5wb3NpdGlvbi54ICsgJ3B4LCAnICsgdGhpcy5wb3NpdGlvbi55ICsgJ3B4KSc7XG4gICAgICAgIC8vIDEweDIwXG5cbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVhZE9iamVjdC50cyJdLCJzb3VyY2VSb290IjoiIn0=