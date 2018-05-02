/*!
 * 
 *                     description: 一套基于一致性协议的Web端解析引擎
 *                     author: Yonyou FED Team
 *                     date: 2018-04-27
 *                     hash: 2146ddc307d672604514,
 *                     file: MTLSDKWeb.js
 *                 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["MTLSDKWeb"] = factory(require("react"), require("react-dom"));
	else
		root["MTLSDKWeb"] = factory(root["react"], root["react-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _resolve = __webpack_require__(/*! ./lib/resolve */ \"./src/lib/resolve.js\");\n\nvar _resolve2 = _interopRequireDefault(_resolve);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MTLSDKWeb = function (_Component) {\n    _inherits(MTLSDKWeb, _Component);\n\n    function MTLSDKWeb(props) {\n        _classCallCheck(this, MTLSDKWeb);\n\n        var _this2 = _possibleConstructorReturn(this, (MTLSDKWeb.__proto__ || Object.getPrototypeOf(MTLSDKWeb)).call(this, props));\n\n        _this2.state = {\n            collect: null\n        };\n        _this2.data = {};\n        return _this2;\n    }\n    /**\n     * 用于给开发者将自定义UI插入到指定的节点位置\n     * MTLSDKWeb.onEmbed(id, compData => { return node })\n     */\n\n\n    _createClass(MTLSDKWeb, [{\n        key: 'nodeCollect',\n        value: function nodeCollect(node) {\n            (0, _reactDom.createPortal)(child, container);\n        }\n        /**\n         * 根据参数解析渲染UI骨架\n         */\n\n    }, {\n        key: 'generateRootComponent',\n        value: function generateRootComponent() {\n            var _props$data$component = this.props.data.components,\n                type = _props$data$component.type,\n                structure = _props$data$component.structure;\n\n            var snippets = structure.map(function (element) {\n                var width = element.width,\n                    height = element.height,\n                    top = element.top,\n                    left = element.left,\n                    cId = element.cId;\n\n                var hasChild = element.hasChild ? element.hasChild : null;\n\n                return _react2.default.createElement(\n                    'div',\n                    { key: cId, id: cId, style: { width: width, height: height } },\n                    _react2.default.createElement(\n                        'span',\n                        { key: cId },\n                        cId\n                    )\n                );\n            });\n\n            return _react2.default.createElement(\n                'div',\n                { style: this.componentPosCtrlByType(type) },\n                snippets\n            );\n        }\n        /**\n         * 根据不同的 components type 字段控制布局及其样式\n         */\n\n    }, {\n        key: 'componentPosCtrlByType',\n        value: function componentPosCtrlByType(type) {\n            switch (type) {\n                case \"absolutely\":\n                    return {\n                        position: \"absolute\"\n                    };\n                    break;\n                case \"table\":\n                    return {};\n                    break;\n                case \"linear\":\n                    return {\n                        display: \"flex\"\n                    };\n                    break;\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.generateRootComponent()\n            );\n        }\n    }, {\n        key: 'update',\n        value: function (_update) {\n            function update() {\n                return _update.apply(this, arguments);\n            }\n\n            update.toString = function () {\n                return _update.toString();\n            };\n\n            return update;\n        }(function () {\n            update();\n        })\n    }, {\n        key: 'fire',\n        value: function fire(params, callback) {\n            axios(params);\n        }\n    }, {\n        key: 'willReceiveData',\n        value: function willReceiveData(data) {}\n    }], [{\n        key: 'onEmbed',\n        value: function onEmbed() {\n            arr = arr || [];\n            arr.forEach(function (func) {\n                func(id, callback);\n            });\n            var _this = this;\n            // 返回回来的 node 必须是 React 组件\n            var node = (0, _react.createElement)(callback(_this.data));\n\n            this.nodeCollect(node);\n        }\n    }]);\n\n    return MTLSDKWeb;\n}(_react.Component);\n\nexports.default = MTLSDKWeb;\n\n//# sourceURL=webpack://MTLSDKWeb/./src/index.js?");

/***/ }),

/***/ "./src/lib/resolve.js":
/*!****************************!*\
  !*** ./src/lib/resolve.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n/**\n * 数据解析\n */\nexports.default = function (opt) {\n    opt = opt || {};\n\n    var _opt = opt,\n        endpoint = _opt.endpoint,\n        components = _opt.components,\n        data = _opt.data,\n        linkage = _opt.linkage;\n\n\n    return {\n        endpoint: endpoint, // 终端类型说明\n        components: components, // 描述组件布局和结构\n        data: data, // 组件数据说明，id是组件的唯一标识\n        linkage: linkage\n    };\n};\n\n//# sourceURL=webpack://MTLSDKWeb/./src/lib/resolve.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://MTLSDKWeb/external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://MTLSDKWeb/external_%22react-dom%22?");

/***/ })

/******/ });
});