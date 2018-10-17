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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_scss/main.scss":
/*!*****************************!*\
  !*** ./src/_scss/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/_scss/main.scss?");

/***/ }),

/***/ "./src/img/layer1.png":
/*!****************************!*\
  !*** ./src/img/layer1.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/layer1.png\";\n\n//# sourceURL=webpack:///./src/img/layer1.png?");

/***/ }),

/***/ "./src/img/layer2.png":
/*!****************************!*\
  !*** ./src/img/layer2.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/layer2.png\";\n\n//# sourceURL=webpack:///./src/img/layer2.png?");

/***/ }),

/***/ "./src/img/layer3.png":
/*!****************************!*\
  !*** ./src/img/layer3.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/layer3.png\";\n\n//# sourceURL=webpack:///./src/img/layer3.png?");

/***/ }),

/***/ "./src/img/layer4.png":
/*!****************************!*\
  !*** ./src/img/layer4.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/layer4.png\";\n\n//# sourceURL=webpack:///./src/img/layer4.png?");

/***/ }),

/***/ "./src/img/partners/partners1.png":
/*!****************************************!*\
  !*** ./src/img/partners/partners1.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners1.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners1.png?");

/***/ }),

/***/ "./src/img/partners/partners10.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners10.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners10.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners10.png?");

/***/ }),

/***/ "./src/img/partners/partners11.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners11.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners11.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners11.png?");

/***/ }),

/***/ "./src/img/partners/partners12.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners12.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners12.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners12.png?");

/***/ }),

/***/ "./src/img/partners/partners13.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners13.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners13.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners13.png?");

/***/ }),

/***/ "./src/img/partners/partners14.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners14.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners14.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners14.png?");

/***/ }),

/***/ "./src/img/partners/partners15.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners15.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners15.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners15.png?");

/***/ }),

/***/ "./src/img/partners/partners16.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners16.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners16.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners16.png?");

/***/ }),

/***/ "./src/img/partners/partners17.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners17.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners17.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners17.png?");

/***/ }),

/***/ "./src/img/partners/partners18.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners18.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners18.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners18.png?");

/***/ }),

/***/ "./src/img/partners/partners19.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners19.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners19.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners19.png?");

/***/ }),

/***/ "./src/img/partners/partners2.png":
/*!****************************************!*\
  !*** ./src/img/partners/partners2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners2.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners2.png?");

/***/ }),

/***/ "./src/img/partners/partners20.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners20.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners20.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners20.png?");

/***/ }),

/***/ "./src/img/partners/partners21.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners21.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners21.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners21.png?");

/***/ }),

/***/ "./src/img/partners/partners22.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners22.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners22.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners22.png?");

/***/ }),

/***/ "./src/img/partners/partners23.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners23.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners23.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners23.png?");

/***/ }),

/***/ "./src/img/partners/partners24.png":
/*!*****************************************!*\
  !*** ./src/img/partners/partners24.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners24.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners24.png?");

/***/ }),

/***/ "./src/img/partners/partners3.png":
/*!****************************************!*\
  !*** ./src/img/partners/partners3.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners3.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners3.png?");

/***/ }),

/***/ "./src/img/partners/partners4.png":
/*!****************************************!*\
  !*** ./src/img/partners/partners4.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners4.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners4.png?");

/***/ }),

/***/ "./src/img/partners/partners5.png":
/*!****************************************!*\
  !*** ./src/img/partners/partners5.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners5.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners5.png?");

/***/ }),

/***/ "./src/img/partners/partners6.png":
/*!****************************************!*\
  !*** ./src/img/partners/partners6.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners6.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners6.png?");

/***/ }),

/***/ "./src/img/partners/partners7.png":
/*!****************************************!*\
  !*** ./src/img/partners/partners7.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners7.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners7.png?");

/***/ }),

/***/ "./src/img/partners/partners8.png":
/*!****************************************!*\
  !*** ./src/img/partners/partners8.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners8.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners8.png?");

/***/ }),

/***/ "./src/img/partners/partners9.png":
/*!****************************************!*\
  !*** ./src/img/partners/partners9.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./img/partners9.png\";\n\n//# sourceURL=webpack:///./src/img/partners/partners9.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_scss/main.scss */ \"./src/_scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_layer1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/layer1.png */ \"./src/img/layer1.png\");\n/* harmony import */ var _img_layer1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_layer1_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_layer2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/layer2.png */ \"./src/img/layer2.png\");\n/* harmony import */ var _img_layer2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_layer2_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_layer3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/layer3.png */ \"./src/img/layer3.png\");\n/* harmony import */ var _img_layer3_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_layer3_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_layer4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/layer4.png */ \"./src/img/layer4.png\");\n/* harmony import */ var _img_layer4_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_layer4_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _videos_mainProjectX_mp4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videos/mainProjectX.mp4 */ \"./src/videos/mainProjectX.mp4\");\n/* harmony import */ var _videos_mainProjectX_mp4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_videos_mainProjectX_mp4__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _img_partners_partners1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/partners/partners1.png */ \"./src/img/partners/partners1.png\");\n/* harmony import */ var _img_partners_partners1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners1_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _img_partners_partners2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/partners/partners2.png */ \"./src/img/partners/partners2.png\");\n/* harmony import */ var _img_partners_partners2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners2_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _img_partners_partners3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/partners/partners3.png */ \"./src/img/partners/partners3.png\");\n/* harmony import */ var _img_partners_partners3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners3_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _img_partners_partners4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/partners/partners4.png */ \"./src/img/partners/partners4.png\");\n/* harmony import */ var _img_partners_partners4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners4_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _img_partners_partners5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/partners/partners5.png */ \"./src/img/partners/partners5.png\");\n/* harmony import */ var _img_partners_partners5_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners5_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _img_partners_partners6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/partners/partners6.png */ \"./src/img/partners/partners6.png\");\n/* harmony import */ var _img_partners_partners6_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners6_png__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _img_partners_partners7_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/partners/partners7.png */ \"./src/img/partners/partners7.png\");\n/* harmony import */ var _img_partners_partners7_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners7_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _img_partners_partners8_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/partners/partners8.png */ \"./src/img/partners/partners8.png\");\n/* harmony import */ var _img_partners_partners8_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners8_png__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _img_partners_partners9_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/partners/partners9.png */ \"./src/img/partners/partners9.png\");\n/* harmony import */ var _img_partners_partners9_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners9_png__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _img_partners_partners10_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/partners/partners10.png */ \"./src/img/partners/partners10.png\");\n/* harmony import */ var _img_partners_partners10_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners10_png__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _img_partners_partners11_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/partners/partners11.png */ \"./src/img/partners/partners11.png\");\n/* harmony import */ var _img_partners_partners11_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners11_png__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _img_partners_partners12_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/partners/partners12.png */ \"./src/img/partners/partners12.png\");\n/* harmony import */ var _img_partners_partners12_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners12_png__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _img_partners_partners13_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./img/partners/partners13.png */ \"./src/img/partners/partners13.png\");\n/* harmony import */ var _img_partners_partners13_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners13_png__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _img_partners_partners14_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img/partners/partners14.png */ \"./src/img/partners/partners14.png\");\n/* harmony import */ var _img_partners_partners14_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners14_png__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _img_partners_partners15_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/partners/partners15.png */ \"./src/img/partners/partners15.png\");\n/* harmony import */ var _img_partners_partners15_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners15_png__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _img_partners_partners16_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./img/partners/partners16.png */ \"./src/img/partners/partners16.png\");\n/* harmony import */ var _img_partners_partners16_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners16_png__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _img_partners_partners17_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./img/partners/partners17.png */ \"./src/img/partners/partners17.png\");\n/* harmony import */ var _img_partners_partners17_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners17_png__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _img_partners_partners18_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./img/partners/partners18.png */ \"./src/img/partners/partners18.png\");\n/* harmony import */ var _img_partners_partners18_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners18_png__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _img_partners_partners19_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./img/partners/partners19.png */ \"./src/img/partners/partners19.png\");\n/* harmony import */ var _img_partners_partners19_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners19_png__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _img_partners_partners20_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./img/partners/partners20.png */ \"./src/img/partners/partners20.png\");\n/* harmony import */ var _img_partners_partners20_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners20_png__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _img_partners_partners21_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./img/partners/partners21.png */ \"./src/img/partners/partners21.png\");\n/* harmony import */ var _img_partners_partners21_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners21_png__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _img_partners_partners22_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./img/partners/partners22.png */ \"./src/img/partners/partners22.png\");\n/* harmony import */ var _img_partners_partners22_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners22_png__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _img_partners_partners23_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./img/partners/partners23.png */ \"./src/img/partners/partners23.png\");\n/* harmony import */ var _img_partners_partners23_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners23_png__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var _img_partners_partners24_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./img/partners/partners24.png */ \"./src/img/partners/partners24.png\");\n/* harmony import */ var _img_partners_partners24_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_img_partners_partners24_png__WEBPACK_IMPORTED_MODULE_29__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar casesSlider = {\n  slides: [_img_layer1_png__WEBPACK_IMPORTED_MODULE_1___default.a, _img_layer2_png__WEBPACK_IMPORTED_MODULE_2___default.a, _img_layer3_png__WEBPACK_IMPORTED_MODULE_3___default.a, _img_layer4_png__WEBPACK_IMPORTED_MODULE_4___default.a],\n  insideText: [['OBERIG', 'Сила в тобі'], ['Лаферобреон', 'Биофарма'], ['Koblevo', 'Вино того варте'], ['Live Chemical', 'Molecules are Everything']],\n  frame: 0,\n  element: document.getElementById(\"casesText\"),\n  set: function set(image) {\n    this.element.parentNode.style.backgroundImage = \"url(\" + image + \")\";\n    this.element.childNodes[3].innerHTML = this.insideText[this.frame][0];\n    this.element.childNodes[5].innerHTML = this.insideText[this.frame][1];\n  },\n  start: function start() {\n    this.set(this.slides[this.frame]);\n  },\n  left: function left() {\n    this.frame--;\n    if (this.frame < 0) this.frame = this.slides.length - 1;\n    this.set(this.slides[this.frame]);\n    this.resetTimer();\n  },\n  right: function right() {\n    this.frame++;\n    if (this.frame === this.slides.length) this.frame = 0;\n    this.set(this.slides[this.frame]);\n    this.resetTimer();\n  },\n  timer: setInterval(function () {\n    casesSlider.right();\n  }, 5000),\n  resetTimer: function resetTimer() {\n    clearInterval(this.timer);\n    this.timer = setInterval(function () {\n      casesSlider.right();\n    }, 5000);\n  }\n};\nvar partnersSlider = {\n  partners: [_img_partners_partners1_png__WEBPACK_IMPORTED_MODULE_6___default.a, _img_partners_partners2_png__WEBPACK_IMPORTED_MODULE_7___default.a, _img_partners_partners3_png__WEBPACK_IMPORTED_MODULE_8___default.a, _img_partners_partners4_png__WEBPACK_IMPORTED_MODULE_9___default.a, _img_partners_partners5_png__WEBPACK_IMPORTED_MODULE_10___default.a, _img_partners_partners6_png__WEBPACK_IMPORTED_MODULE_11___default.a, _img_partners_partners7_png__WEBPACK_IMPORTED_MODULE_12___default.a, _img_partners_partners8_png__WEBPACK_IMPORTED_MODULE_13___default.a, _img_partners_partners9_png__WEBPACK_IMPORTED_MODULE_14___default.a, _img_partners_partners10_png__WEBPACK_IMPORTED_MODULE_15___default.a, _img_partners_partners11_png__WEBPACK_IMPORTED_MODULE_16___default.a, _img_partners_partners12_png__WEBPACK_IMPORTED_MODULE_17___default.a, _img_partners_partners13_png__WEBPACK_IMPORTED_MODULE_18___default.a, _img_partners_partners14_png__WEBPACK_IMPORTED_MODULE_19___default.a, _img_partners_partners15_png__WEBPACK_IMPORTED_MODULE_20___default.a, _img_partners_partners16_png__WEBPACK_IMPORTED_MODULE_21___default.a, _img_partners_partners17_png__WEBPACK_IMPORTED_MODULE_22___default.a, _img_partners_partners18_png__WEBPACK_IMPORTED_MODULE_23___default.a, _img_partners_partners19_png__WEBPACK_IMPORTED_MODULE_24___default.a, _img_partners_partners20_png__WEBPACK_IMPORTED_MODULE_25___default.a, _img_partners_partners21_png__WEBPACK_IMPORTED_MODULE_26___default.a, _img_partners_partners22_png__WEBPACK_IMPORTED_MODULE_27___default.a, _img_partners_partners23_png__WEBPACK_IMPORTED_MODULE_28___default.a, _img_partners_partners24_png__WEBPACK_IMPORTED_MODULE_29___default.a],\n  count: 0,\n  adder: 0,\n  elements: document.querySelectorAll('[class=\"partners__logos\"] > img'),\n  set: function set() {\n    for (var i = 0; i < 8; i++) {\n      this.elements[i].src = this.partners[i + this.adder];\n    }\n  },\n  start: function start() {\n    this.set();\n    this.count++;\n\n    if (this.count > 3) {\n      this.count = 1;\n    }\n\n    this.adder = this.count * 8;\n\n    if (this.adder > 16) {\n      this.adder = 0;\n    }\n  },\n  left: function left() {\n    this.count--;\n\n    if (this.count < 0) {\n      this.count = 2;\n    }\n\n    this.set();\n    this.resetTimer();\n  },\n  right: function right() {\n    this.start();\n    this.resetTimer();\n  },\n  timer: setInterval(function () {\n    partnersSlider.right();\n  }, 7000),\n  resetTimer: function resetTimer() {\n    clearInterval(this.timer);\n    this.timer = setInterval(function () {\n      partnersSlider.right();\n    }, 7000);\n  }\n};\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // cases slider listeners\n  var casesLeftButton = document.getElementById(\"casesLeftButton\");\n  var casesRightButton = document.getElementById(\"casesRightButton\");\n  casesRightButton.addEventListener(\"click\", function () {\n    casesSlider.right();\n  });\n  casesLeftButton.addEventListener(\"click\", function () {\n    casesSlider.left();\n  }); // partners slider listeners\n\n  var partnersLeftButton = document.getElementById(\"partnersLeftButton\");\n  var partnersRightButton = document.getElementById(\"partnersRightButton\");\n  partnersLeftButton.addEventListener(\"click\", function () {\n    partnersSlider.left();\n  });\n  partnersRightButton.addEventListener(\"click\", function () {\n    partnersSlider.right();\n  });\n});\n\nwindow.onload = function () {\n  casesSlider.start();\n  partnersSlider.start();\n  casesSlider.timer;\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/videos/mainProjectX.mp4":
/*!*************************************!*\
  !*** ./src/videos/mainProjectX.mp4 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"videos/mainProjectX.mp4\";\n\n//# sourceURL=webpack:///./src/videos/mainProjectX.mp4?");

/***/ })

/******/ });