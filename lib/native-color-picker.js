(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@expo/vector-icons"), require("expo"), require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define("NativeColorPicker", ["@expo/vector-icons", "expo", "react", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["NativeColorPicker"] = factory(require("@expo/vector-icons"), require("expo"), require("react"), require("styled-components"));
	else
		root["NativeColorPicker"] = factory(root["@expo/vector-icons"], root["expo"], root["react"], root["styled-components"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE__expo_vector_icons__, __WEBPACK_EXTERNAL_MODULE_expo__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
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
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Color = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.TouchableOpacity(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var itemSize = _ref2.itemSize;
  return "\n    width: ".concat(itemSize, "px;\n    height: ").concat(itemSize, "px;\n    border-radius: ").concat(itemSize / 2, "px;\n  ");
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
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background-color: #fff3;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  margin: 3px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var BorderMark = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.View(_templateObject());
var FadeMark = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.View(_templateObject2());
var Marker = function Marker(_ref) {
  var type = _ref.type,
      size = _ref.size;
  return type === 'border' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BorderMark, null) : type === 'checkmark' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_expo_vector_icons__WEBPACK_IMPORTED_MODULE_2__["Ionicons"], {
    name: "md-checkmark",
    size: size
  }) : type === 'fade' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FadeMark, null);
};

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
/* harmony import */ var expo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! expo */ "expo");
/* harmony import */ var expo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(expo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Base */ "./src/components/Base.tsx");
/* harmony import */ var _components_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Color */ "./src/components/Color.tsx");
/* harmony import */ var _components_Marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Marker */ "./src/components/Marker.tsx");





var NativeColorPicker = function NativeColorPicker(_ref) {
  var _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? [] : _ref$colors,
      selectedColor = _ref.selectedColor,
      onSelect = _ref.onSelect,
      _ref$horizontal = _ref.horizontal,
      horizontal = _ref$horizontal === void 0 ? false : _ref$horizontal,
      _ref$applyGradient = _ref.applyGradient,
      applyGradient = _ref$applyGradient === void 0 ? false : _ref$applyGradient,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 5 : _ref$columns,
      _ref$itemSize = _ref.itemSize,
      itemSize = _ref$itemSize === void 0 ? 50 : _ref$itemSize,
      _ref$marker = _ref.marker,
      marker = _ref$marker === void 0 ? 'border' : _ref$marker;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Base__WEBPACK_IMPORTED_MODULE_2__["Base"], {
    data: colors,
    numColumns: columns,
    horizontal: horizontal,
    keyExtractor: function keyExtractor(index) {
      return index.toString();
    },
    renderItem: function renderItem(_ref2) {
      var item = _ref2.item;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Color__WEBPACK_IMPORTED_MODULE_3__["Color"], {
        color: item,
        itemSize: itemSize,
        marker: marker,
        onPress: function onPress() {
          return onSelect(item);
        }
      }, selectedColor && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Marker__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
        type: marker,
        size: itemSize
      }), applyGradient && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(expo__WEBPACK_IMPORTED_MODULE_1__["LinearGradient"], {
        colors: ['#0000', '#000a']
      }));
    }
  });
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