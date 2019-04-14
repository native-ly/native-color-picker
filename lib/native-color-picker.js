module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Gradient.tsx":
/*!*************************************!*\
  !*** ./src/components/Gradient.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
var expo_1 = __webpack_require__(/*! expo */ "expo");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.tsx");
exports.Gradient = native_1.default(expo_1.LinearGradient)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  z-index: -1;\n\n  ", "\n"], ["\n  ", "\n\n  z-index: -1;\n\n  ",
    "\n"])), helpers_1.mixin, function (_a) {
    var size = _a.size;
    return "\n    border-radius: " + size / 2 + "px;\n  ";
});
var templateObject_1;


/***/ }),

/***/ "./src/components/Item.tsx":
/*!*********************************!*\
  !*** ./src/components/Item.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
exports.Item = native_1.default.TouchableOpacity(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var color = _a.color, itemSize = _a.itemSize, shadow = _a.shadow;
    return "\n    background-color: " + color + ";\n    width: " + itemSize + "px;\n    height: " + itemSize + "px;\n    border-radius: " + itemSize / 2 + "px;\n    margin: " + itemSize / 4 + "px;\n\n    " + (shadow
        ? "\n        shadow-opacity: 0.75;\n        shadow-radius: 5px;\n        shadow-color: " + color + ";\n        shadow-offset: 0 0;\n      "
        : "") + "\n  ";
});
var templateObject_1;


/***/ }),

/***/ "./src/components/Marker.tsx":
/*!***********************************!*\
  !*** ./src/components/Marker.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var native_1 = __importDefault(__webpack_require__(/*! styled-components/native */ "styled-components/native"));
var vector_icons_1 = __webpack_require__(/*! @expo/vector-icons */ "@expo/vector-icons");
var color_1 = __importDefault(__webpack_require__(/*! color */ "color"));
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.tsx");
var Base = native_1.default.View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  ", "\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), helpers_1.mixin);
var BorderMarker = native_1.default.View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ",
    "\n"])), helpers_1.mixin, function (_a) {
    var color = _a.color, size = _a.size;
    return "\n    margin: " + helpers_1.countSize(size) + "px;\n    border-radius: " + (size - 2 * helpers_1.countSize(size)) / 2 + "px;\n    border: " + helpers_1.countSize(size) + "px solid " + color + ";\n  ";
});
var FadeMarker = native_1.default.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n\n  background-color: #fff8;\n\n  ", "\n"], ["\n  ", "\n\n  background-color: #fff8;\n\n  ",
    "\n"])), helpers_1.mixin, function (_a) {
    var size = _a.size;
    return "\n    border-radius: " + size / 2 + "px;\n  ";
});
exports.Marker = function (_a) {
    var 
    // animate,
    color = _a.color, size = _a.size, markerStyle = _a.markerStyle, type = _a.type;
    if (markerStyle === 'adjust') {
        color = helpers_1.checkColor(color);
    }
    else if (markerStyle === 'contrast') {
        color = color_1.default(color).isDark() ? '#fff' : '#000';
    }
    else {
        color = markerStyle;
    }
    return (react_1.default.createElement(Base, null, type === 'border' ? (react_1.default.createElement(BorderMarker, { color: color, size: size })) : type === 'checkmark' ? (react_1.default.createElement(vector_icons_1.Ionicons, { color: color, name: "md-checkmark", size: (size / 3) * 2 })) : (type === 'fade' && react_1.default.createElement(FadeMarker, { size: size }))));
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/helpers/colors.tsx":
/*!********************************!*\
  !*** ./src/helpers/colors.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(__webpack_require__(/*! color */ "color"));
exports.checkColor = function (item) {
    return color_1.default(item).isDark()
        ? color_1.default(item)
            .lighten(0.5)
            .toString()
        : color_1.default(item)
            .darken(0.5)
            .toString();
};
exports.darker = function (item) { return [
    'transparent',
    color_1.default(item)
        .darken(0.5)
        .alpha(0.6)
        .toString(),
]; };
exports.lighter = function (item) { return [
    color_1.default(item)
        .lighten(0.5)
        .alpha(0.6)
        .toString(),
    'transparent',
]; };


/***/ }),

/***/ "./src/helpers/index.tsx":
/*!*******************************!*\
  !*** ./src/helpers/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = __webpack_require__(/*! ./colors */ "./src/helpers/colors.tsx");
exports.checkColor = colors_1.checkColor;
exports.darker = colors_1.darker;
exports.lighter = colors_1.lighter;
var size_1 = __webpack_require__(/*! ./size */ "./src/helpers/size.tsx");
exports.countSize = size_1.countSize;
var mixin_1 = __webpack_require__(/*! ./mixin */ "./src/helpers/mixin.tsx");
exports.mixin = mixin_1.mixin;


/***/ }),

/***/ "./src/helpers/mixin.tsx":
/*!*******************************!*\
  !*** ./src/helpers/mixin.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mixin = "\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n";


/***/ }),

/***/ "./src/helpers/size.tsx":
/*!******************************!*\
  !*** ./src/helpers/size.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.countSize = function (size) { return Math.round(size / 20); };


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var react_native_1 = __webpack_require__(/*! react-native */ "react-native");
var color_sort_1 = __importDefault(__webpack_require__(/*! color-sort */ "color-sort"));
var color_1 = __importDefault(__webpack_require__(/*! color */ "color"));
var Item_1 = __webpack_require__(/*! ./components/Item */ "./src/components/Item.tsx");
var Marker_1 = __webpack_require__(/*! ./components/Marker */ "./src/components/Marker.tsx");
var Gradient_1 = __webpack_require__(/*! ./components/Gradient */ "./src/components/Gradient.tsx");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./src/helpers/index.tsx");
var NativeColorPicker = function (_a) {
    var 
    // animate = false,
    _b = _a.colors, 
    // animate = false,
    colors = _b === void 0 ? [] : _b, _c = _a.columns, columns = _c === void 0 ? 5 : _c, _d = _a.gradient, gradient = _d === void 0 ? false : _d, _e = _a.horizontal, horizontal = _e === void 0 ? false : _e, _f = _a.itemSize, itemSize = _f === void 0 ? 44 : _f, _g = _a.marker, marker = _g === void 0 ? 'border' : _g, _h = _a.markerStyle, markerStyle = _h === void 0 ? 'contrast' : _h, _j = _a.onSelect, onSelect = _j === void 0 ? function (item) { return item; } : _j, selectedColor = _a.selectedColor, _k = _a.shadow, shadow = _k === void 0 ? false : _k, _l = _a.sort, sort = _l === void 0 ? false : _l, props = __rest(_a, ["colors", "columns", "gradient", "horizontal", "itemSize", "marker", "markerStyle", "onSelect", "selectedColor", "shadow", "sort"]);
    return (react_1.default.createElement(react_native_1.FlatList, __assign({}, props, { data: sort ? color_sort_1.default(colors) : colors, horizontal: horizontal, keyExtractor: function (index) { return index.toString(); }, numColumns: horizontal ? 1 : columns, renderItem: function (_a) {
            var item = _a.item;
            return (react_1.default.createElement(Item_1.Item, { color: item, itemSize: itemSize, onPress: function () { return onSelect(item); }, shadow: shadow },
                selectedColor === item && (react_1.default.createElement(Marker_1.Marker
                // animate={animate}
                , { 
                    // animate={animate}
                    color: item, markerStyle: markerStyle, size: itemSize, type: marker })),
                gradient && (react_1.default.createElement(Gradient_1.Gradient, { colors: color_1.default(item).isDark() ? helpers_1.darker(item) : helpers_1.lighter(item), size: itemSize }))));
        } })));
};
exports.default = NativeColorPicker;


/***/ }),

/***/ "@expo/vector-icons":
/*!*************************************!*\
  !*** external "@expo/vector-icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@expo/vector-icons");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "color-sort":
/*!*****************************!*\
  !*** external "color-sort" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color-sort");

/***/ }),

/***/ "expo":
/*!***********************!*\
  !*** external "expo" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("expo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ }),

/***/ "styled-components/native":
/*!*******************************************!*\
  !*** external "styled-components/native" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components/native");

/***/ })

/******/ });
//# sourceMappingURL=native-color-picker.js.map