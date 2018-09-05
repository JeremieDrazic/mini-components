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

/***/ "../dist/whale.esm.js":
/*!****************************!*\
  !*** ../dist/whale.esm.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _typeof2 = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _typeof = \"function\" == typeof Symbol && \"symbol\" == _typeof2(Symbol.iterator) ? function (e) {\n  return typeof e === \"undefined\" ? \"undefined\" : _typeof2(e);\n} : function (e) {\n  return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e === \"undefined\" ? \"undefined\" : _typeof2(e);\n},\n    classCallCheck = function classCallCheck(e, t) {\n  if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n},\n    createClass = function () {\n  function e(e, t) {\n    for (var n = 0; n < t.length; n++) {\n      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);\n    }\n  }return function (t, n, o) {\n    return n && e(t.prototype, n), o && e(t, o), t;\n  };\n}(),\n    defineProperty = function defineProperty(e, t, n) {\n  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;\n},\n    _extends = Object.assign || function (e) {\n  for (var t = 1; t < arguments.length; t++) {\n    var n = arguments[t];for (var o in n) {\n      Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);\n    }\n  }return e;\n},\n    get = function e(t, n, o) {\n  null === t && (t = Function.prototype);var r = Object.getOwnPropertyDescriptor(t, n);if (void 0 === r) {\n    var i = Object.getPrototypeOf(t);return null === i ? void 0 : e(i, n, o);\n  }if (\"value\" in r) return r.value;var s = r.get;return void 0 !== s ? s.call(o) : void 0;\n},\n    inherits = function inherits(e, t) {\n  if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof t === \"undefined\" ? \"undefined\" : _typeof2(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);\n},\n    possibleConstructorReturn = function possibleConstructorReturn(e, t) {\n  if (!e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return !t || \"object\" != (typeof t === \"undefined\" ? \"undefined\" : _typeof2(t)) && \"function\" != typeof t ? e : t;\n},\n    Observer = function () {\n  function e(t) {\n    classCallCheck(this, e), this.observer = new MutationObserver(this.update.bind(this)), this.observer.observe(t, { childList: !0, subtree: !0 }), this.listeners = [];\n  }return createClass(e, [{ key: \"on\", value: function value(e) {\n      this.listeners.push(e);\n    } }, { key: \"off\", value: function value(e) {\n      this.listeners.splice(this.listeners.indexOf(e), 1);\n    } }, { key: \"update\", value: function value(e) {\n      this.listeners.forEach(function (e) {\n        try {\n          e();\n        } catch (e) {\n          console.error(e);\n        }\n      });\n    } }, { key: \"kill\", value: function value() {\n      this.observer.disconnect();\n    } }]), e;\n}(),\n    idCounter = {};function uniqId() {\n  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : \"$tree-\";idCounter[e] || (idCounter[e] = 0);var t = ++idCounter[e];return \"$tree-\" === e ? \"\" + t : \"\" + (e + t);\n}function forEach(e, t) {\n  if (!e) return [];\"object\" === (void 0 === e ? \"undefined\" : _typeof(e)) && \"length\" in e || (e = [e]);for (var n = e.length, o = 0; o < n; o++) {\n    t(e[o], o);\n  }return e;\n}function forIn(e, t) {\n  if (\"object\" === (void 0 === e ? \"undefined\" : _typeof(e))) return forEach(Object.keys(e), forKey.bind(null, e, t)), e;\n}function forKey(e, t, n) {\n  t(n, e[n]);\n}function _isDOMElement(e) {\n  return !!e && 1 === e.nodeType;\n}function _getElement(e, t) {\n  return e.querySelector(t);\n}function getElement(e) {\n  return \"string\" == typeof e ? _getElement(document, e) : e instanceof window.NodeList || e instanceof window.HTMLCollection ? e[0] : e instanceof Array ? getElement(e[0]) : _isDOMElement(e) && e;\n}function copyPropertyAccessor(e, t, n) {\n  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));\n}var arrayReactiveMethods = [\"push\", \"splice\", \"unshift\"];function makeReactive$1(e, t, n) {\n  Object.defineProperty(e, t, { get: function get() {\n      return n;\n    }, set: function set(e) {\n      n = e, \"object\" === (void 0 === e ? \"undefined\" : _typeof(e)) && forIn(e, makeReactive()), n instanceof Array && forEach(arrayReactiveMethods, function (e) {\n        n[e] = function () {\n          return Array.prototype[e].apply(this, arguments);\n        };\n      });\n    } }), e[t] = n;\n}var lifeCycleMethods = [\"mounted\", \"beforeDestroy\"],\n    Component = function () {\n  function e() {\n    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},\n        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};classCallCheck(this, e), Object.assign(this, t), this.$options = n, this.$id = this._generateComponentId(), this.$scope = {}, this._bindData(), this._bindLifeCycle(), this._bindMethods();\n  }return createClass(e, [{ key: \"_generateComponentId\", value: function value() {\n      return uniqId(\"\" + this.$prefix + this.$options.name + \"-\");\n    } }, { key: \"_bindData\", value: function value() {\n      var e = this;this.$data = {}, forIn(this.$options.data, function (t, n) {\n        makeReactive$1(e.$data, t, n), copyPropertyAccessor(t, e, e.$data), copyPropertyAccessor(t, e.$scope, e.$data);\n      });\n    } }, { key: \"_bindLifeCycle\", value: function value() {\n      var e = this;forEach(lifeCycleMethods, function (t) {\n        e[t] = function () {\n          for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) {\n            o[r] = arguments[r];\n          }forEach(e.$options[t], function (t) {\n            return t.apply(e, o);\n          });\n        };\n      });\n    } }, { key: \"_bindMethods\", value: function value() {\n      var e = this;this.$methods = {}, forIn(this.$options.methods, function (t, n) {\n        e.$methods[t] = n.bind(e);\n      }), Object.assign(this, this.$methods), Object.assign(this.$scope, this.$methods);\n    } }, { key: \"$mount\", value: function value(e) {\n      this.$el = getElement(e), this.$el[this.$marker] = this.$id;try {\n        this.mounted(e);\n      } catch (e) {\n        console.error(e);\n      }\n    } }, { key: \"$destroy\", value: function value() {\n      try {\n        this.beforeDestroy();\n      } catch (e) {\n        console.error(e);\n      }\n    } }]), e;\n}();function kebabCase(e) {\n  return e.replace(/([a-z0-9])([A-Z])/g, \"$1-$2\").toLowerCase();\n}function closest(e, t) {\n  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;return !(!(e = getElement(e)) || (\"string\" == typeof n ? e.matches(n) : e === n)) && ((\"string\" == typeof t ? e.matches(t) : e === t) ? e : !!e && closest(e.parentNode, t, n));\n}function _nodeListToArray(e) {\n  for (var t = [], n = -1; t[++n] = e[n];) {}return t.length--, t;\n}function _getElements(e, t) {\n  return _nodeListToArray(e.querySelectorAll(t));\n}function getElements(e) {\n  if (\"string\" == typeof e) return _getElements(document, e);if (e instanceof window.NodeList || e instanceof window.HTMLCollection) return _nodeListToArray(e);if (e instanceof Array) {\n    var t = [];return forEach(e, _pushRecursive.bind(null, t)), t;\n  }return _isDOMElement(e) ? [e] : [];\n}function _pushRecursive(e, t) {\n  e.push.apply(e, getElements(t));\n}function forElements(e, t) {\n  forEach(getElements(e), t);\n}function _applyOnElements(e, t, n) {\n  var o = [];return forElements(t, e.bind(null, o, n)), o;\n}var find = _applyOnElements.bind(null, _findFromOne);function _findFromOne(e, t, n) {\n  e.push.apply(e, _getElements(n, t));\n}var defaultGlobals = { $prefix: \"wh-\" },\n    defaultOptions = { name: \"root\" },\n    Whale = function (e) {\n  function t() {\n    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},\n        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};classCallCheck(this, t), e = _extends({}, defaultGlobals, e), n = _extends({}, defaultOptions, n);var o = possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));return o.$components = defineProperty({}, o.$id, o), o.$globals = _extends({}, e, n, { $root: o, $components: o.$components }), o.$globals.$marker = o.$marker = \"_\" + o.$prefix + \"id\", o._components = [], o;\n  }return inherits(t, Component), createClass(t, [{ key: \"component\", value: function value(e, t) {\n      e = kebabCase(e), console.log(e);var n = \"selector\" in t ? t.selector : \"[\" + this.$prefix + \"id]\";this._components.push({ selector: n, options: _extends({ name: e, selector: n }, t) });\n    } }, { key: \"$mount\", value: function value(e) {\n      get(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), \"$mount\", this).call(this, e), this._observer = new Observer(this.$el), this._observer.on(this._domChanged.bind(this)), this._domChanged();\n    } }, { key: \"_domChanged\", value: function value() {\n      this._unbindComponents(), this._bindComponents();\n    } }, { key: \"_unbindComponents\", value: function value() {\n      forIn(this.$components, function (e, t) {\n        closest(t.$el, document.body) || (t.$destroy(), delete t[e]);\n      });\n    } }, { key: \"_bindComponents\", value: function value() {\n      var e = this;forEach(this._components, function (t) {\n        forEach(find(e.$el, t.selector), function (n) {\n          if (!(e.$marker in n)) {\n            var o = new Component(e.$globals, t.options);o.$mount(n), e.$components[o.$id] = o;\n          }\n        });\n      });\n    } }]), t;\n}();function get$1(e, t) {\n  var n = t.split(\".\");t = n.pop();for (var o = n.length, r = 0; r < o; ++r) {\n    e = e[n[r]];\n  }return e[t];\n}function set$1(e, t, n) {\n  var o = t.split(\".\");t = o.pop();for (var r = o.length, i = 0; i < r; ++i) {\n    e = e[o[i]];\n  }return e[t] = n;\n}var Whale$1 = Object.assign(Whale, { get: get$1, set: set$1 });/* harmony default export */ __webpack_exports__[\"default\"] = (Whale$1);\n\n//# sourceURL=webpack:///../dist/whale.esm.js?");

/***/ }),

/***/ "../lib/internals/forEach.js":
/*!***********************************!*\
  !*** ../lib/internals/forEach.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return forEach; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction forEach(items, callback) {\n  if (!items) return [];\n\n  if ((typeof items === 'undefined' ? 'undefined' : _typeof(items)) !== 'object' || !('length' in items)) {\n    items = [items];\n  }\n\n  var length = items.length;\n  for (var i = 0; i < length; i++) {\n    callback(items[i], i);\n  }return items;\n}\n\n//# sourceURL=webpack:///../lib/internals/forEach.js?");

/***/ }),

/***/ "../lib/internals/forIn.js":
/*!*********************************!*\
  !*** ../lib/internals/forIn.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return forIn; });\n/* harmony import */ var _forEach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forEach */ \"../lib/internals/forEach.js\");\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n\n\nfunction forIn(object, callback) {\n  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return;\n\n  Object(_forEach__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.keys(object), forKey.bind(null, object, callback));\n\n  return object;\n}\n\nfunction forKey(object, callback, key) {\n  callback(key, object[key]);\n}\n\n//# sourceURL=webpack:///../lib/internals/forIn.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/components/CustomLink/styles.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/CustomLink/styles.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".custom-link {\\n  color: pink;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/CustomLink/styles.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/containers/Homepage/styles.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./src/containers/Homepage/styles.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/containers/Homepage/styles.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/components/CustomLink/index.js":
/*!********************************************!*\
  !*** ./src/components/CustomLink/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/components/CustomLink/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  selector: '.custom-link',\n\n  data: {\n    text: 'foobar'\n  },\n\n  mounted: function mounted() {\n    this.$el.addEventListener('click', this.greet.bind(this));\n  },\n  beforeDestroy: function beforeDestroy() {\n    console.log('beforeDestroy');\n  },\n\n\n  methods: {\n    greet: function greet() {\n      console.log('hi my id is ' + this.$id);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/CustomLink/index.js?");

/***/ }),

/***/ "./src/components/CustomLink/styles.css":
/*!**********************************************!*\
  !*** ./src/components/CustomLink/styles.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./styles.css */ \"./node_modules/css-loader/index.js!./src/components/CustomLink/styles.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/CustomLink/styles.css?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: CustomLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CustomLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomLink */ \"./src/components/CustomLink/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CustomLink\", function() { return _CustomLink__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/index.js?");

/***/ }),

/***/ "./src/containers/Homepage/index.js":
/*!******************************************!*\
  !*** ./src/containers/Homepage/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/containers/Homepage/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  selector: '.homepage',\n\n  data: {\n    text: 'homepage'\n  },\n\n  mounted: function mounted() {\n    var _this = this;\n\n    this.greet();\n\n    document.querySelector('.add-custom-link-btn').addEventListener('click', function (e) {\n      var link = document.createElement('a');\n      var text = document.createTextNode('go to blabla =>');\n\n      link.classList.add('custom-link');\n      link.href = '#';\n      link.append(text);\n\n      _this.$el.append(link);\n    });\n  },\n  beforeDestroy: function beforeDestroy() {\n    console.log('beforeDestroy');\n  },\n\n\n  methods: {\n    greet: function greet() {\n      console.log('greet: hello homepage');\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/containers/Homepage/index.js?");

/***/ }),

/***/ "./src/containers/Homepage/styles.css":
/*!********************************************!*\
  !*** ./src/containers/Homepage/styles.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./styles.css */ \"./node_modules/css-loader/index.js!./src/containers/Homepage/styles.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/containers/Homepage/styles.css?");

/***/ }),

/***/ "./src/containers/index.js":
/*!*********************************!*\
  !*** ./src/containers/index.js ***!
  \*********************************/
/*! exports provided: Homepage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Homepage */ \"./src/containers/Homepage/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Homepage\", function() { return _Homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/containers/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_whale_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/whale.esm.js */ \"../dist/whale.esm.js\");\n/* harmony import */ var _lib_internals_forIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/internals/forIn.js */ \"../lib/internals/forIn.js\");\n/* harmony import */ var _containers_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/index.js */ \"./src/containers/index.js\");\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\n\n\n\nvar app = new _dist_whale_esm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  $store: {\n    state: {\n      foo: 'bar'\n    },\n    breakpoints: {\n      xsmall: 0,\n      small: 768,\n      medium: 1024,\n      large: 1280,\n      xlarge: 1600\n    }\n  }\n});\n\n\nObject(_lib_internals_forIn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_containers_index_js__WEBPACK_IMPORTED_MODULE_2__, function (key, container) {\n  app.component(key, container);\n});\n\n\nObject(_lib_internals_forIn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_index_js__WEBPACK_IMPORTED_MODULE_3__, function (key, component) {\n  app.component(key, component);\n});\n\napp.$mount(document.body);\n\nconsole.log('app', app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });