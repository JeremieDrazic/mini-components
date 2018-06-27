import uniqId from './internals/uniqId'
import forIn from './internals/forIn'
import copyPropertyAccessor from './internals/copyPropertyAccessor'

const lifeCycleMethods = ['mounted', 'beforeDestroy']

export default class Component {
  constructor(globals = {}, options = {}) {
    Object.assign(this, globals)
    this.$options = options

    this.prefix = 't-'

    this.$id = this._generateComponentId()

    this.$scope = {}

    this._bindData()
    this._bindLifeCycle()
    this._bindMethods()
  }

  _generateComponentId () {
    return uniqId(`${this.prefix}${this.option.name}-`)
  }

  _bindData () {
    this.$data = {}

    forIn(Object.keys(this.$options.data), (key, value) => {
      // make each property in $options.data reactive,
      // by defining getters and setters dynamicly and 
      // attach it to this.$data. then we attach
      // this.$data to this.$scope
      makeReactive(this.$data, key, value)
      copyPropertyAccessor(key, this, this.$data)
      copyPropertyAccessor(key, this.$scope, this.$data)
    })
  }

  _bindLifeCycle () {
    forEcah(lifeCycleMethods, method => {
      this[method] = (...args) => {
        forEach(this.$options[method], callback => callback.apply(this, args))
      }
    })
  }

  _bindMethods () {
    this.methods = {}

    forIn(Object.keys(this.$options.methods), (name, callback) => {
      this.$methods[name] = callback.bind(this)
    })

    Object.assign(this, this.$methods)
    Object.assign(this.$scope, this.$methods)
  }

  $mount (el) {
    this.$el = document.querySelector(el)

    this.$el[this.$marker] = this.$id

    try {
      this.mounted(el)
    } catch (e) {
      console.error(e)
    }
  }

  $destroy () {
    try {
      this.beforeDestroy()
    } catch (e) {
      console.error(e)
    }
  }
}