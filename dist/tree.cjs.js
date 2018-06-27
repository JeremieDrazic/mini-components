'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Observer = function () {
  function Observer(domElement) {
    classCallCheck(this, Observer);

    this.observer = new MutationObserver(this.update.bind(this));

    this.observer.observe(domElement, {
      childList: true,
      subtree: true
    });

    this.listeners = [];
  }

  createClass(Observer, [{
    key: 'on',
    value: function on(callback) {
      this.listeners.push(callback);
    }
  }, {
    key: 'off',
    value: function off(callback) {
      this.listeners.splice(this.listeners.indexOf(callback), 1);
    }
  }, {
    key: 'update',
    value: function update(mutationsList) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mutation = _step.value;

          if (mutation.type == 'childList') {
            console.log('Un noeud enfant a été ajouté ou supprimé.');
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.listeners.forEach(function (listener) {
        try {
          console.log('call listener:', listener);
          listener();
        } catch (error) {
          console.error(error);
        }
      });
    }
  }, {
    key: 'kill',
    value: function kill() {
      this.observer.disconnect();
    }
  }]);
  return Observer;
}();

var idCounter = {};

function uniqId () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$tree-';

  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  var id = ++idCounter[prefix];

  if (prefix === '$tree-') {
    return '' + id;
  }

  return '' + (prefix + id);
}

function forEach$1 (items, callback) {
  if (!items) return [];

  if ((typeof items === 'undefined' ? 'undefined' : _typeof(items)) !== 'object' || !('length' in items)) {
    items = [items];
  }

  var length = items.length;
  for (var i = 0; i < length; i++) {
    callback(items[i], i);
  }return items;
}

function forIn (object, callback) {
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return;

  forEach$1(Object.keys(object), forKey.bind(null, object, callback));

  return object;
}

function forKey(object, callback, key) {
  callback(key, object[key]);
}

function copyPropertyAccessor (key, to, from) {
  Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
}

var lifeCycleMethods = ['mounted', 'beforeDestroy'];

var Component = function () {
  function Component() {
    var globals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Component);

    Object.assign(this, globals);
    this.$options = options;

    this.prefix = 't-';

    this.$id = this._generateComponentId();

    this.$scope = {};

    this._bindData();
    this._bindLifeCycle();
    this._bindMethods();
  }

  createClass(Component, [{
    key: '_generateComponentId',
    value: function _generateComponentId() {
      return uniqId('' + this.prefix + this.option.name + '-');
    }
  }, {
    key: '_bindData',
    value: function _bindData() {
      var _this = this;

      this.$data = {};

      forIn(Object.keys(this.$options.data), function (key, value) {
        // make each property in $options.data reactive,
        // by defining getters and setters dynamicly and 
        // attach it to this.$data. then we attach
        // this.$data to this.$scope
        makeReactive(_this.$data, key, value);
        copyPropertyAccessor(key, _this, _this.$data);
        copyPropertyAccessor(key, _this.$scope, _this.$data);
      });
    }
  }, {
    key: '_bindLifeCycle',
    value: function _bindLifeCycle() {
      var _this2 = this;

      forEcah(lifeCycleMethods, function (method) {
        _this2[method] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          forEach(_this2.$options[method], function (callback) {
            return callback.apply(_this2, args);
          });
        };
      });
    }
  }, {
    key: '_bindMethods',
    value: function _bindMethods() {
      var _this3 = this;

      this.methods = {};

      forIn(Object.keys(this.$options.methods), function (name, callback) {
        _this3.$methods[name] = callback.bind(_this3);
      });

      Object.assign(this, this.$methods);
      Object.assign(this.$scope, this.$methods);
    }
  }, {
    key: '$mount',
    value: function $mount(el) {
      this.$el = document.querySelector(el);

      this.$el[this.$marker] = this.$id;

      try {
        this.mounted(el);
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: '$destroy',
    value: function $destroy() {
      try {
        this.beforeDestroy();
      } catch (e) {
        console.error(e);
      }
    }
  }]);
  return Component;
}();

var Tree = function (_Component) {
  inherits(Tree, _Component);

  function Tree() {
    var globals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Tree);

    // globals = {...defaultGlobals, ...globals}
    // options = {...defaultOptions, ...options}

    return possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, globals, options));
  }

  createClass(Tree, [{
    key: 'domChanged',
    value: function domChanged() {
      console.log('trololololololo');
      console.log(this.observer.listeners);
    }
  }]);
  return Tree;
}(Component);

module.exports = Tree;
