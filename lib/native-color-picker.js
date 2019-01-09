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
return /******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__("./src/picker.tsx");
/******/ 	};
/******/ 	// initialize runtime
/******/ 	runtime(__webpack_require__);
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/picker.tsx":
/*!************************!*\
  !*** ./src/picker.tsx ***!
  \************************/
/*! exports provided: NativeColorPicker */
/*! runtime requirements: __webpack_require__.r__webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d,  */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeColorPicker", function() { return NativeColorPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var expo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! expo */ "expo");
/* harmony import */ var expo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(expo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _expo_vector_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @expo/vector-icons */ "@expo/vector-icons");
/* harmony import */ var _expo_vector_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_expo_vector_icons__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Base = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.FlatList(_templateObject());
var Color = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.TouchableOpacity(_templateObject2(), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var itemSize = _ref2.itemSize;
  return "\n    width: ".concat(itemSize, "px;\n    height: ").concat(itemSize, "px;\n    border-radius: ").concat(itemSize / 2, "px;\n  ");
});
var NativeColorPicker = function NativeColorPicker(_ref3) {
  var _ref3$colors = _ref3.colors,
      colors = _ref3$colors === void 0 ? [] : _ref3$colors,
      selectedColor = _ref3.selectedColor,
      onSelect = _ref3.onSelect,
      _ref3$horizontal = _ref3.horizontal,
      horizontal = _ref3$horizontal === void 0 ? false : _ref3$horizontal,
      _ref3$applyGradient = _ref3.applyGradient,
      applyGradient = _ref3$applyGradient === void 0 ? false : _ref3$applyGradient,
      _ref3$columns = _ref3.columns,
      columns = _ref3$columns === void 0 ? 5 : _ref3$columns,
      _ref3$itemSize = _ref3.itemSize,
      itemSize = _ref3$itemSize === void 0 ? 50 : _ref3$itemSize,
      _ref3$marker = _ref3.marker,
      marker = _ref3$marker === void 0 ? 'border' : _ref3$marker;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Base, {
    data: colors,
    numColumns: columns,
    horizontal: horizontal,
    keyExtractor: function keyExtractor(index) {
      return index.toString();
    },
    renderItem: function renderItem(_ref4) {
      var item = _ref4.item;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
        color: item,
        itemSize: itemSize,
        marker: marker,
        onPress: function onPress() {
          return onSelect(item);
        }
      }, selectedColor && marker === 'checkmark' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_expo_vector_icons__WEBPACK_IMPORTED_MODULE_3__["Ionicons"], {
        name: "md-checkmark",
        size: itemSize
      }), applyGradient && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(expo__WEBPACK_IMPORTED_MODULE_2__["LinearGradient"], {
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
/*! runtime requirements: module */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__expo_vector_icons__;

/***/ }),

/***/ "expo":
/*!***********************!*\
  !*** external "expo" ***!
  \***********************/
/*! no static exports found */
/*! runtime requirements: module */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_expo__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! runtime requirements: module */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/*! runtime requirements: module */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ },
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function getDefault() { return module['default']; } :
/******/ 				function getModuleExports() { return module; };
/******/ 			__webpack_require__.d(getter, 'a', getter);
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getter */
/******/ 	!function() {
/******/ 		// define getter function for harmony exports
/******/ 		var hasOwnProperty = Object.prototype.hasOwnProperty;
/******/ 		__webpack_require__.d = function(exports, name, getter) {
/******/ 			if(!hasOwnProperty.call(exports, name)) {
/******/ 				Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ }
);
});
//# sourceMappingURL=native-color-picker.js.map