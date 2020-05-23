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

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_js__ = __webpack_require__(4);



window.login = function (opts) {
    var container = opts.container;
    Object(__WEBPACK_IMPORTED_MODULE_0__render_js__["a" /* default */])(container);
    Object(__WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* default */])();
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (container) {
    var tpl = '<form id="form"><input name="uname" id="input" type="text">' + '<input name="password" type="text">' + '<input value="登录" id="submit" type="submit">' + '</form>';
    container.innerHTML = tpl;
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_formCheck__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var btn = document.getElementById('submit');
  var input = document.getElementById('input');
  var check = Object(__WEBPACK_IMPORTED_MODULE_0__common_formCheck__["a" /* default */])(document.getElementById('form')); //设置为变量减少获取id次数
  btn.onclick = function () {
    check();
    alert('1111');
  };
  input.oninput = function () {
    check();
  };
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (form) {
    return function () {
        alert(form.id);
        return [{}];
    };
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2E2YmYwMDdiMDYxZDBhYmQ3NmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9naW4vZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9mb3JtQ2hlY2suanMiXSwibmFtZXMiOlsid2luZG93IiwibG9naW4iLCJvcHRzIiwiY29udGFpbmVyIiwicmVuZGVyIiwiZXZlbnQiLCJ0cGwiLCJpbm5lckhUTUwiLCJidG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5wdXQiLCJjaGVjayIsImZvcm1DaGVjayIsIm9uY2xpY2siLCJhbGVydCIsIm9uaW5wdXQiLCJmb3JtIiwiaWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBQSxPQUFPQyxLQUFQLEdBQWEsVUFBQ0MsSUFBRCxFQUFRO0FBQ2pCLFFBQU1DLFlBQVdELEtBQUtDLFNBQXRCO0FBQ0FDLHVFQUFNQSxDQUFDRCxTQUFQO0FBQ0FFLHNFQUFLQTtBQUNSLENBSkQsQzs7Ozs7OztBQ0hlLG1FQUFDRixTQUFELEVBQWE7QUFDMUIsUUFBTUcsTUFBTSxnRUFDUixxQ0FEUSxHQUVSLDhDQUZRLEdBR1IsU0FISjtBQUlBSCxjQUFVSSxTQUFWLEdBQXFCRCxHQUFyQjtBQUNELENBTkQsRTs7Ozs7OztBQ0FBO0FBQUE7O0FBRWUscUVBQUs7QUFDbEIsTUFBTUUsTUFBS0MsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFYO0FBQ0EsTUFBTUMsUUFBTUYsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0EsTUFBTUUsUUFBUUMsMEVBQVNBLENBQUNKLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBVixDQUFkLENBSGtCLENBR3lDO0FBQzNERixNQUFJTSxPQUFKLEdBQVksWUFBSTtBQUNkRjtBQUNFRyxVQUFNLE1BQU47QUFDSCxHQUhEO0FBSUFKLFFBQU1LLE9BQU4sR0FBZ0IsWUFBSTtBQUNoQko7QUFDSCxHQUZEO0FBR0QsQ0FYRCxFOzs7Ozs7O0FDRmUsbUVBQUNLLElBQUQsRUFBUTtBQUNuQixXQUFNLFlBQUk7QUFDTkYsY0FBTUUsS0FBS0MsRUFBWDtBQUNBLGVBQU8sQ0FBQyxFQUFELENBQVA7QUFDSCxLQUhEO0FBSUgsQ0FMRCxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2E2YmYwMDdiMDYxZDBhYmQ3NmUiLCJpbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyLmpzJ1xyXG5pbXBvcnQgZXZlbnQgZnJvbSAnLi9ldmVudC5qcyc7XHJcblxyXG53aW5kb3cubG9naW49KG9wdHMpPT57XHJcbiAgICBjb25zdCBjb250YWluZXIgPW9wdHMuY29udGFpbmVyO1xyXG4gICAgcmVuZGVyKGNvbnRhaW5lcik7XHJcbiAgICBldmVudCgpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbG9naW4vaW5pdC5qcyIsImV4cG9ydCBkZWZhdWx0IChjb250YWluZXIpPT57XHJcbiAgY29uc3QgdHBsID0gJzxmb3JtIGlkPVwiZm9ybVwiPjxpbnB1dCBuYW1lPVwidW5hbWVcIiBpZD1cImlucHV0XCIgdHlwZT1cInRleHRcIj4nICtcclxuICAgICAgJzxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiPicgK1xyXG4gICAgICAnPGlucHV0IHZhbHVlPVwi55m75b2VXCIgaWQ9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+JyArXHJcbiAgICAgICc8L2Zvcm0+JztcclxuICBjb250YWluZXIuaW5uZXJIVE1MID10cGw7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsImltcG9ydCBmb3JtQ2hlY2sgZnJvbSBcIi4uL2NvbW1vbi9mb3JtQ2hlY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+e1xyXG4gIGNvbnN0IGJ0biA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG4gIGNvbnN0IGlucHV0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xyXG4gIGNvbnN0IGNoZWNrID0gZm9ybUNoZWNrKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykpOyAgLy/orr7nva7kuLrlj5jph4/lh4/lsJHojrflj5ZpZOasoeaVsFxyXG4gIGJ0bi5vbmNsaWNrPSgpPT57XHJcbiAgICBjaGVjaygpO1xyXG4gICAgICBhbGVydCgnMTExMScpO1xyXG4gIH07XHJcbiAgaW5wdXQub25pbnB1dCA9ICgpPT57XHJcbiAgICAgIGNoZWNrKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9sb2dpbi9ldmVudC5qcyIsImV4cG9ydCBkZWZhdWx0IChmb3JtKT0+e1xyXG4gICAgcmV0dXJuKCk9PntcclxuICAgICAgICBhbGVydChmb3JtLmlkKTtcclxuICAgICAgICByZXR1cm4gW3t9XVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21tb24vZm9ybUNoZWNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==