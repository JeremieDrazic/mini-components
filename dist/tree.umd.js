(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Tree = factory());
}(this, (function () { 'use strict';

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

  var Tree = function () {
    function Tree(rootEl) {
      classCallCheck(this, Tree);

      this.el = rootEl;
      this.observer = new Observer(this.el);

      document.querySelector('.add-custom-link-btn').addEventListener('click', this.addLink.bind(this));

      this.observer.on(this.domChanged.bind(this));

      console.log(this);
    }

    createClass(Tree, [{
      key: 'addLink',
      value: function addLink() {
        var linkEl = document.querySelector('.custom-link');
        var linkElClone = linkEl.cloneNode(true);

        app.appendChild(linkElClone);
      }
    }, {
      key: 'domChanged',
      value: function domChanged() {
        console.log('trololololololo');
      }
    }]);
    return Tree;
  }();


  console.log(Tree);

  return Tree;

})));
