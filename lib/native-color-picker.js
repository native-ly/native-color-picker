(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@expo/vector-icons"), require("color-sort"), require("expo"), require("is-dark-color"), require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define("NativeColorPicker", ["@expo/vector-icons", "color-sort", "expo", "is-dark-color", "react", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["NativeColorPicker"] = factory(require("@expo/vector-icons"), require("color-sort"), require("expo"), require("is-dark-color"), require("react"), require("styled-components"));
	else
		root["NativeColorPicker"] = factory(root["@expo/vector-icons"], root["color-sort"], root["expo"], root["is-dark-color"], root["react"], root["styled-components"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE__expo_vector_icons__, __WEBPACK_EXTERNAL_MODULE_color_sort__, __WEBPACK_EXTERNAL_MODULE_expo__, __WEBPACK_EXTERNAL_MODULE_is_dark_color__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
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

/***/ "./src/components/Base.tsx":
/*!*********************************!*\
  !*** ./src/components/Base.tsx ***!
  \*********************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Base = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.FlatList(_templateObject());
/*export const Base = styled.FlatList`
  max-width: 100%;
  max-height: 100%;
  padding: 4%;
`*/

/***/ }),

/***/ "./src/components/Color.tsx":
/*!**********************************!*\
  !*** ./src/components/Color.tsx ***!
  \**********************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Color = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.TouchableOpacity(_templateObject(), function (_ref) {
  var color = _ref.color,
      itemSize = _ref.itemSize,
      shadow = _ref.shadow;
  return "\n    background-color: ".concat(color, ";\n    width: ").concat(itemSize, "px;\n    height: ").concat(itemSize, "px;\n    border-radius: ").concat(itemSize / 2, "px;\n    margin: ").concat(itemSize / 4, "px;\n\n    ").concat(shadow ? "\n        shadow-opacity: 0.75;\n        shadow-radius: 5px;\n        shadow-color: ".concat(color, ";\n        shadow-offset: 0px 0px;\n      ") : "", "\n  ");
});

/***/ }),

/***/ "./src/components/Gradient.tsx":
/*!*************************************!*\
  !*** ./src/components/Gradient.tsx ***!
  \*************************************/
/*! exports provided: Gradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return Gradient; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var expo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! expo */ "expo");
/* harmony import */ var expo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(expo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/mixin */ "./src/helpers/mixin.tsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  z-index: -1;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Gradient = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(expo__WEBPACK_IMPORTED_MODULE_1__["LinearGradient"])(_templateObject(), _helpers_mixin__WEBPACK_IMPORTED_MODULE_2__["mixin"], function (_ref) {
  var size = _ref.size;
  return "\n    border-radius: ".concat(size / 2, "px;\n  ");
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _expo_vector_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @expo/vector-icons */ "@expo/vector-icons");
/* harmony import */ var _expo_vector_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_expo_vector_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/mixin */ "./src/helpers/mixin.tsx");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  background-color: #fff3;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  margin: 3px;\n  border: 3px solid #fff;\n\n  ", "\n"]);

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

 // import { Animated } from 'expo'




var Base = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.View(_templateObject(), _helpers_mixin__WEBPACK_IMPORTED_MODULE_3__["mixin"]);
var BorderMark = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.View(_templateObject2(), _helpers_mixin__WEBPACK_IMPORTED_MODULE_3__["mixin"], function (_ref) {
  var size = _ref.size;
  return "\n    border-radius: ".concat((size - 6) / 2, "px;\n  ");
});
var FadeMark = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.View(_templateObject3(), _helpers_mixin__WEBPACK_IMPORTED_MODULE_3__["mixin"], function (_ref2) {
  var size = _ref2.size;
  return "\n    border-radius: ".concat(size / 2, "px;\n  ");
});
var Marker = function Marker(_ref3) {
  var type = _ref3.type,
      size = _ref3.size,
      isDark = _ref3.isDark;
  return type === 'border' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BorderMark, {
    size: size
  }) : type === 'checkmark' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Base, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_expo_vector_icons__WEBPACK_IMPORTED_MODULE_2__["Ionicons"], {
    name: "md-checkmark",
    size: size / 3 * 2,
    color: isDark ? '#fff' : '#000'
  })) : type === 'fade' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FadeMark, {
    size: size
  });
};

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
/* harmony import */ var color_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-sort */ "color-sort");
/* harmony import */ var color_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_dark_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-dark-color */ "is-dark-color");
/* harmony import */ var is_dark_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_dark_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Base */ "./src/components/Base.tsx");
/* harmony import */ var _components_Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Color */ "./src/components/Color.tsx");
/* harmony import */ var _components_Marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Marker */ "./src/components/Marker.tsx");
/* harmony import */ var _components_Gradient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Gradient */ "./src/components/Gradient.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var NativeColorPicker = function NativeColorPicker(_ref) {
  var _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? [] : _ref$colors,
      selectedColor = _ref.selectedColor,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? function (item) {
    return item;
  } : _ref$onSelect,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? false : _ref$shadow,
      _ref$applyGradient = _ref.applyGradient,
      applyGradient = _ref$applyGradient === void 0 ? false : _ref$applyGradient,
      _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? false : _ref$sort,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 5 : _ref$columns,
      _ref$itemSize = _ref.itemSize,
      itemSize = _ref$itemSize === void 0 ? 50 : _ref$itemSize,
      _ref$marker = _ref.marker,
      marker = _ref$marker === void 0 ? 'border' : _ref$marker,
      props = _objectWithoutProperties(_ref, ["colors", "selectedColor", "onSelect", "shadow", "applyGradient", "sort", "columns", "itemSize", "marker"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_3__["Base"], _extends({}, props, {
    data: sort ? color_sort__WEBPACK_IMPORTED_MODULE_1___default()(colors) : colors,
    numColumns: columns // horizontal={horizontal}
    ,
    keyExtractor: function keyExtractor(index) {
      return index.toString();
    },
    renderItem: function renderItem(_ref2) {
      var item = _ref2.item;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Color__WEBPACK_IMPORTED_MODULE_4__["Color"], {
        color: item,
        itemSize: itemSize,
        marker: marker,
        shadow: shadow,
        onPress: function onPress() {
          return onSelect(item);
        }
      }, selectedColor === item && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Marker__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        type: marker // animate={animate}
        ,
        size: itemSize,
        isDark: is_dark_color__WEBPACK_IMPORTED_MODULE_2___default()(item)
      }), applyGradient && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gradient__WEBPACK_IMPORTED_MODULE_6__["Gradient"], {
        size: itemSize,
        colors: is_dark_color__WEBPACK_IMPORTED_MODULE_2___default()(item) ? ['#0000', '#000a'] : ['#fff0', '#fffa']
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

/***/ "is-dark-color":
/*!********************************!*\
  !*** external "is-dark-color" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_is_dark_color__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});
//# sourceMappingURL=native-color-picker.js.map