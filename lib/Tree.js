import Observer from './Observer'
import Component from './Component'
import kebabCase from './internals/kebabCase'

// globals are accessible throughout all components
const defaultGlobals = {
  $prefix: 't-'
}

const defaultOptions = {
  name: 'root'
}

export default class Tree extends Component {
  constructor (globals= {}, options = {}) {
    globals = {...defaultGlobals, ...globals}
    options = {...defaultOptions, ...options}

    super(globals, options)

    console.log('globals', globals)
    console.log('options', options)

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

    console.log('Tree', this)
  }

  component (name, options) {
    name = kebabCase(name)

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

  domChanged () {
  }
}