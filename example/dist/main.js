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

/***/ "../dist/tree.esm.js":
/*!***************************!*\
  !*** ../dist/tree.esm.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _typeof2 = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _typeof = typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof2(obj);\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof2(obj);\n};\n\nvar classCallCheck = function classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\nvar createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\nvar defineProperty = function defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n};\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\nvar inherits = function inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof2(superClass)));\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\nvar possibleConstructorReturn = function possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof2(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\nvar Observer = function () {\n  function Observer(domElement) {\n    classCallCheck(this, Observer);\n\n    this.observer = new MutationObserver(this.update.bind(this));\n\n    this.observer.observe(domElement, {\n      childList: true,\n      subtree: true\n    });\n\n    this.listeners = [];\n  }\n\n  createClass(Observer, [{\n    key: 'on',\n    value: function on(callback) {\n      this.listeners.push(callback);\n    }\n  }, {\n    key: 'off',\n    value: function off(callback) {\n      this.listeners.splice(this.listeners.indexOf(callback), 1);\n    }\n  }, {\n    key: 'update',\n    value: function update(mutationsList) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var mutation = _step.value;\n\n          if (mutation.type == 'childList') {\n            console.log('Un noeud enfant a été ajouté ou supprimé.');\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      this.listeners.forEach(function (listener) {\n        try {\n          console.log('call listener:', listener);\n          listener();\n        } catch (error) {\n          console.error(error);\n        }\n      });\n    }\n  }, {\n    key: 'kill',\n    value: function kill() {\n      this.observer.disconnect();\n    }\n  }]);\n  return Observer;\n}();\n\nvar idCounter = {};\n\nfunction uniqId() {\n  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$tree-';\n\n  if (!idCounter[prefix]) {\n    idCounter[prefix] = 0;\n  }\n\n  var id = ++idCounter[prefix];\n\n  if (prefix === '$tree-') {\n    return '' + id;\n  }\n\n  return '' + (prefix + id);\n}\n\nfunction forEach(items, callback) {\n  if (!items) return [];\n\n  if ((typeof items === 'undefined' ? 'undefined' : _typeof(items)) !== 'object' || !('length' in items)) {\n    items = [items];\n  }\n\n  var length = items.length;\n  for (var i = 0; i < length; i++) {\n    callback(items[i], i);\n  }return items;\n}\n\nfunction forIn(object, callback) {\n  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return;\n\n  forEach(Object.keys(object), forKey.bind(null, object, callback));\n\n  return object;\n}\n\nfunction forKey(object, callback, key) {\n  callback(key, object[key]);\n}\n\nfunction copyPropertyAccessor(key, to, from) {\n  Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));\n}\n\nvar lifeCycleMethods = ['mounted', 'beforeDestroy'];\n\nvar Component = function () {\n  function Component() {\n    var globals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    classCallCheck(this, Component);\n\n    Object.assign(this, globals);\n    this.$options = options;\n\n    this.$id = this._generateComponentId();\n\n    this.$scope = {};\n\n    this._bindData();\n    this._bindLifeCycle();\n    this._bindMethods();\n  }\n\n  createClass(Component, [{\n    key: '_generateComponentId',\n    value: function _generateComponentId() {\n      return uniqId('' + this.$prefix + this.$options.name + '-');\n    }\n  }, {\n    key: '_bindData',\n    value: function _bindData() {\n      var _this = this;\n\n      this.$data = {};\n\n      forIn(this.$options.data, function (key, value) {\n        // make each property in $options.data reactive,\n        // by defining getters and setters dynamicly and \n        // attach it to this.$data. then we attach\n        // this.$data to this.$scope\n        makeReactive(_this.$data, key, value);\n        copyPropertyAccessor(key, _this, _this.$data);\n        copyPropertyAccessor(key, _this.$scope, _this.$data);\n      });\n    }\n  }, {\n    key: '_bindLifeCycle',\n    value: function _bindLifeCycle() {\n      var _this2 = this;\n\n      forEach(lifeCycleMethods, function (method) {\n        _this2[method] = function () {\n          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n          }\n\n          forEach(_this2.$options[method], function (callback) {\n            return callback.apply(_this2, args);\n          });\n        };\n      });\n    }\n  }, {\n    key: '_bindMethods',\n    value: function _bindMethods() {\n      var _this3 = this;\n\n      this.methods = {};\n\n      forIn(this.$options.methods, function (name, callback) {\n        _this3.$methods[name] = callback.bind(_this3);\n      });\n\n      Object.assign(this, this.$methods);\n      Object.assign(this.$scope, this.$methods);\n    }\n  }, {\n    key: '$mount',\n    value: function $mount(el) {\n      this.$el = document.querySelector(el);\n\n      this.$el[this.$marker] = this.$id;\n\n      try {\n        this.mounted(el);\n      } catch (e) {\n        console.error(e);\n      }\n    }\n  }, {\n    key: '$destroy',\n    value: function $destroy() {\n      try {\n        this.beforeDestroy();\n      } catch (e) {\n        console.error(e);\n      }\n    }\n  }]);\n  return Component;\n}();\n\nfunction kebabCase(string) {\n  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();\n}\n\n// globals are accessible throughout all components\nvar defaultGlobals = {\n  $prefix: 't-'\n};\n\nvar defaultOptions = {\n  name: 'root'\n};\n\nvar Tree = function (_Component) {\n  inherits(Tree, _Component);\n\n  function Tree() {\n    var globals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    classCallCheck(this, Tree);\n\n    globals = _extends({}, defaultGlobals, globals);\n    options = _extends({}, defaultOptions, options);\n\n    var _this = possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, globals, options));\n\n    console.log('globals', globals);\n    console.log('options', options);\n\n    _this.$components = defineProperty({}, _this.$id, _this);\n\n    // assign globals to the Core object\n    _this.$globals = _extends({}, globals, options, {\n      $root: _this,\n      $components: _this.$components\n    });\n\n    _this.$globals.$marker = _this.$marker = '_' + _this.$prefix + 'id';\n\n    _this._components = [];\n\n    console.log('Tree', _this);\n    return _this;\n  }\n\n  createClass(Tree, [{\n    key: 'component',\n    value: function component(name, options) {\n      name = kebabCase(name);\n\n      var selector = 'selector' in options ? options.selector : '[' + this.$prefix + 'id]';\n\n      this._components.push({\n        selector: selector,\n        options: _extends({\n          name: name,\n          selector: selector\n        }, options)\n      });\n    }\n  }, {\n    key: 'domChanged',\n    value: function domChanged() {}\n  }]);\n  return Tree;\n}(Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tree);\n\n//# sourceURL=webpack:///../dist/tree.esm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_tree_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/tree.esm.js */ \"../dist/tree.esm.js\");\n\n// import containers from './containers'\n// import components from './components'\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  console.log('DOM content fully loaded');\n\n  var app = new _dist_tree_esm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    $store: {\n      state: {\n        foo: 'bar'\n      },\n      breakpoints: {\n        xsmall: 0,\n        small: 768,\n        medium: 1024,\n        large: 1280,\n        xlarge: 1600\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });