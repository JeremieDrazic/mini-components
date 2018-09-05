import Observer from './Observer'
import Component from './Component/index'

import kebabCase from '../internals/kebabCase'
import closest from '../internals/closest'
import forEach from '../internals/forEach'
import forIn from '../internals/forIn'
import find from '../internals/find'

// globals are accessible throughout all components
const defaultGlobals = {
  $prefix: 'wh-'
}

const defaultOptions = {
  name: 'root'
}

export default class Whale extends Component {
  constructor (globals= {}, options = {}) {
    globals = {...defaultGlobals, ...globals}
    options = {...defaultOptions, ...options}

    super(globals, options)

    this.$components = {
      [this.$id]: this
    }

    // assign globals to the Core object
    this.$globals = {
      ...globals,
      ...options,
      $root: this,
      $components: this.$components
    }

    this.$globals.$marker = this.$marker = `_${this.$prefix}id`

    this._components = []
  }

  component (name, options) {
    name = kebabCase(name)

    console.log(name)

    const selector = 'selector' in options ? options.selector : `[${this.$prefix}id]`

    this._components.push({
      selector,
      options: {
        name,
        selector,
        ...options
      }
    })
  }

  $mount (selector) {
    super.$mount(selector)

    this._observer = new Observer(this.$el)
    this._observer.on(this._domChanged.bind(this))

    this._domChanged()
  }

  _domChanged () {
    this._unbindComponents()
    this._bindComponents()
  }

  _unbindComponents () {
    forIn(this.$components, (id, component) => {
      // avoids destroying the root component
      if (!closest(component.$el, document.body)) {
        component.$destroy()
        delete component[id]
      }
    })
  }

  _bindComponents () {
    forEach(this._components, component => {
      forEach(find(this.$el, component.selector), el => {
        if(this.$marker in el) return

        const newComponent = new Component(this.$globals, component.options)
        newComponent.$mount(el)
        this.$components[newComponent.$id] = newComponent
      })
    })
  }
}