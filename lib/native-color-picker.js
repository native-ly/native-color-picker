(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@expo/vector-icons"), require("color"), require("color-sort"), require("expo"), require("react"), require("react-native"), require("styled-components/native"));
	else if(typeof define === 'function' && define.amd)
		define("NativeColorPicker", ["@expo/vector-icons", "color", "color-sort", "expo", "react", "react-native", "styled-components/native"], factory);
	else if(typeof exports === 'object')
		exports["NativeColorPicker"] = factory(require("@expo/vector-icons"), require("color"), require("color-sort"), require("expo"), require("react"), require("react-native"), require("styled-components/native"));
	else
		root["NativeColorPicker"] = factory(root["@expo/vector-icons"], root["color"], root["color-sort"], root["expo"], root["react"], root["react-native"], root["styled-components/native"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE__expo_vector_icons__, __WEBPACK_EXTERNAL_MODULE_color__, __WEBPACK_EXTERNAL_MODULE_color_sort__, __WEBPACK_EXTERNAL_MODULE_expo__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_native__, __WEBPACK_EXTERNAL_MODULE_styled_components_native__) {
return /******/ (function(modules) { // webpackBootstrap
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
/*! exports provided: Gradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return Gradient; });
/* harmony import */ var styled_components_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components/native */ "styled-components/native");
/* harmony import */ var styled_components_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components_native__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var expo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! expo */ "expo");
/* harmony import */ var expo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(expo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.tsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  z-index: -1;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Gradient = styled_components_native__WEBPACK_IMPORTED_MODULE_0___default()(expo__WEBPACK_IMPORTED_MODULE_1__["LinearGradient"])(_templateObject(), _helpers__WEBPACK_IMPORTED_MODULE_2__["mixin"], function (_ref) {
  var size = _ref.size;
  return "\n    border-radius: ".concat(size / 2, "px;\n  ");
});

/***/ }),

/***/ "./src/components/Item.tsx":
/*!*********************************!*\
  !*** ./src/components/Item.tsx ***!
  \*********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var styled_components_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components/native */ "styled-components/native");
/* harmony import */ var styled_components_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components_native__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Item = styled_components_native__WEBPACK_IMPORTED_MODULE_0___default.a.TouchableOpacity(_templateObject(), function (_ref) {
  var color = _ref.color,
      itemSize = _ref.itemSize,
      shadow = _ref.shadow;
  return "\n    background-color: ".concat(color, ";\n    width: ").concat(itemSize, "px;\n    height: ").concat(itemSize, "px;\n    border-radius: ").concat(itemSize / 2, "px;\n    margin: ").concat(itemSize / 4, "px;\n\n    ").concat(shadow ? "\n        shadow-opacity: 0.75;\n        shadow-radius: 5px;\n        shadow-color: ".concat(color, ";\n        shadow-offset: 0 0;\n      ") : "", "\n  ");
});

/***/ }),

/***/ "./src/components/Marker.tsx":
/*!***********************************!*\
  !*** ./src/components/Marker.tsx ***!
  \***********************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components/native */ "styled-components/native");
/* harmony import */ var styled_components_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _expo_vector_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @expo/vector-icons */ "@expo/vector-icons");
/* harmony import */ var _expo_vector_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_expo_vector_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.tsx");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  background-color: #fff8;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 //import { Animated } from 'react-native'





/*let springValue = new Animated.Value(0.3)

const spring = () => {
  springValue.setValue(0.3)

  Animated.spring(springValue, {
    toValue: 1,
    friction: 1,
  }).start()
}*/

var Base = styled_components_native__WEBPACK_IMPORTED_MODULE_1___default.a.View(_templateObject(), _helpers__WEBPACK_IMPORTED_MODULE_4__["mixin"]);
var BorderMarker = styled_components_native__WEBPACK_IMPORTED_MODULE_1___default.a.View(_templateObject2(), _helpers__WEBPACK_IMPORTED_MODULE_4__["mixin"], function (_ref) {
  var color = _ref.color,
      size = _ref.size;
  return "\n    margin: ".concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["countSize"])(size), "px;\n    border-radius: ").concat((size - 2 * Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["countSize"])(size)) / 2, "px;\n    border: ").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["countSize"])(size), "px solid ").concat(color, ";\n  ");
});
var FadeMarker = styled_components_native__WEBPACK_IMPORTED_MODULE_1___default.a.View(_templateObject3(), _helpers__WEBPACK_IMPORTED_MODULE_4__["mixin"], function (_ref2) {
  var size = _ref2.size;
  return "\n    border-radius: ".concat(size / 2, "px;\n  ");
});
var Marker = function Marker(_ref3) {
  var color = _ref3.color,
      size = _ref3.size,
      markerStyle = _ref3.markerStyle,
      type = _ref3.type;

  if (markerStyle === 'adjust') {
    color = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["checkColor"])(color);
  } else if (markerStyle === 'contrast') {
    color = color__WEBPACK_IMPORTED_MODULE_3___default()(color).isDark() ? '#fff' : '#000';
  } else {
    color = markerStyle;
  }

  return type === 'border' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BorderMarker, {
    color: color,
    size: size
  }) : type === 'checkmark' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Base, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_expo_vector_icons__WEBPACK_IMPORTED_MODULE_2__["Ionicons"], {
    color: color,
    name: "md-checkmark",
    size: size / 3 * 2
  })) : type === 'fade' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FadeMarker, {
    size: size
  });
};

/***/ }),

/***/ "./src/helpers/checkColor.tsx":
/*!************************************!*\
  !*** ./src/helpers/checkColor.tsx ***!
  \************************************/
/*! exports provided: checkColor, darker, lighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColor", function() { return checkColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighter", function() { return lighter; });
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);

var checkColor = function checkColor(item) {
  return color__WEBPACK_IMPORTED_MODULE_0___default()(item).isDark() ? color__WEBPACK_IMPORTED_MODULE_0___default()(item).lighten(0.5).toString() : color__WEBPACK_IMPORTED_MODULE_0___default()(item).darken(0.5).toString();
};
var darker = function darker(item) {
  return ['transparent', color__WEBPACK_IMPORTED_MODULE_0___default()(item).darken(0.5).alpha(0.6).toString()];
};
var lighter = function lighter(item) {
  return [color__WEBPACK_IMPORTED_MODULE_0___default()(item).lighten(0.5).alpha(0.6).toString(), 'transparent'];
};

/***/ }),

/***/ "./src/helpers/countSize.tsx":
/*!***********************************!*\
  !*** ./src/helpers/countSize.tsx ***!
  \***********************************/
/*! exports provided: countSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countSize", function() { return countSize; });
var countSize = function countSize(size) {
  return Math.round(size / 20);
};

/***/ }),

/***/ "./src/helpers/index.tsx":
/*!*******************************!*\
  !*** ./src/helpers/index.tsx ***!
  \*******************************/
/*! exports provided: checkColor, darker, lighter, countSize, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkColor */ "./src/helpers/checkColor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkColor", function() { return _checkColor__WEBPACK_IMPORTED_MODULE_0__["checkColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return _checkColor__WEBPACK_IMPORTED_MODULE_0__["darker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lighter", function() { return _checkColor__WEBPACK_IMPORTED_MODULE_0__["lighter"]; });

/* harmony import */ var _countSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countSize */ "./src/helpers/countSize.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countSize", function() { return _countSize__WEBPACK_IMPORTED_MODULE_1__["countSize"]; });

/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixin */ "./src/helpers/mixin.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _mixin__WEBPACK_IMPORTED_MODULE_2__["mixin"]; });





/***/ }),

/***/ "./src/helpers/mixin.tsx":
/*!*******************************!*\
  !*** ./src/helpers/mixin.tsx ***!
  \*******************************/
/*! exports provided: mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
var mixin = "\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n";

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: NativeColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeColorPicker", function() { return NativeColorPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color-sort */ "color-sort");
/* harmony import */ var color_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Item */ "./src/components/Item.tsx");
/* harmony import */ var _components_Marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Marker */ "./src/components/Marker.tsx");
/* harmony import */ var _components_Gradient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Gradient */ "./src/components/Gradient.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var NativeColorPicker = function NativeColorPicker(_ref) {
  var _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? [] : _ref$colors,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 5 : _ref$columns,
      _ref$gradient = _ref.gradient,
      gradient = _ref$gradient === void 0 ? false : _ref$gradient,
      _ref$horizontal = _ref.horizontal,
      horizontal = _ref$horizontal === void 0 ? false : _ref$horizontal,
      _ref$itemSize = _ref.itemSize,
      itemSize = _ref$itemSize === void 0 ? 44 : _ref$itemSize,
      _ref$marker = _ref.marker,
      marker = _ref$marker === void 0 ? 'border' : _ref$marker,
      _ref$markerStyle = _ref.markerStyle,
      markerStyle = _ref$markerStyle === void 0 ? 'contrast' : _ref$markerStyle,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? function (item) {
    return item;
  } : _ref$onSelect,
      selectedColor = _ref.selectedColor,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? false : _ref$shadow,
      _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? false : _ref$sort,
      props = _objectWithoutProperties(_ref, ["colors", "columns", "gradient", "horizontal", "itemSize", "marker", "markerStyle", "onSelect", "selectedColor", "shadow", "sort"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native__WEBPACK_IMPORTED_MODULE_1__["FlatList"], _extends({}, props, {
    data: sort ? color_sort__WEBPACK_IMPORTED_MODULE_2___default()(colors) : colors,
    horizontal: horizontal,
    keyExtractor: function keyExtractor(index) {
      return index.toString();
    },
    numColumns: horizontal ? 1 : columns,
    renderItem: function renderItem(_ref2) {
      var item = _ref2.item;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Item__WEBPACK_IMPORTED_MODULE_4__["Item"], {
        color: item,
        itemSize: itemSize,
        onPress: function onPress() {
          return onSelect(item);
        },
        shadow: shadow
      }, selectedColor === item && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Marker__WEBPACK_IMPORTED_MODULE_5__["Marker"] //animate={animate}
      , {
        color: item,
        markerStyle: markerStyle,
        size: itemSize,
        type: marker
      }), gradient && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gradient__WEBPACK_IMPORTED_MODULE_6__["Gradient"], {
        colors: color__WEBPACK_IMPORTED_MODULE_3___default()(item).isDark() ? Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["darker"])(item) : Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["lighter"])(item),
        size: itemSize
      }));
    }
  }));
};

/***/ }),

/***/ "@expo/vector-icons":
/*!*************************************!*\
  !*** external "@expo/vector-icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__expo_vector_icons__;

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_color__;

/***/ }),

/***/ "color-sort":
/*!*****************************!*\
  !*** external "color-sort" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_color_sort__;

/***/ }),

/***/ "expo":
/*!***********************!*\
  !*** external "expo" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_expo__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_native__;

/***/ }),

/***/ "styled-components/native":
/*!*******************************************!*\
  !*** external "styled-components/native" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components_native__;

/***/ })

/******/ });
});
//# sourceMappingURL=native-color-picker.js.map