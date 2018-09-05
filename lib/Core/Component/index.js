import uniqId from '../../internals/uniqId'
import forIn from '../../internals/forIn'
import forEach from '../../internals/forEach'
import getElement from '../../internals/getElement'

import copyPropertyAccessor from './copyPropertyAccessor'
import makeReactive from './makeReactive'

const lifeCycleMethods = ['mounted', 'beforeDestroy']

export default class Component {
  constructor (globals = {}, options = {}) {
    Object.assign(this, globals)
    this.$options = options

    this.$id = this._generateComponentId()

    this.$scope = {}

    this._bindData()
    this._bindLifeCycle()
    this._bindMethods()
  }

  _generateComponentId () {
    return uniqId(`${this.$prefix}${this.$options.name}-`)
  }

  _bindData () {
    this.$data = {}

    forIn(this.$options.data, (key, value) => {
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
    forEach(lifeCycleMethods, method => {
      this[method] = (...args) => {
        forEach(this.$options[method], callback => callback.apply(this, args))
      }
    })
  }

  _bindMethods () {
    this.$methods = {}

    forIn(this.$options.methods, (name, callback) => {
      this.$methods[name] = callback.bind(this)
    })

    Object.assign(this, this.$methods)
    Object.assign(this.$scope, this.$methods)
  }

  $mount (el) {
    this.$el = getElement(el)

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