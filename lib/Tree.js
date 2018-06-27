import Observer from './Observer'
import Component from './Component'

const defaultGlobals = {
  $prefix: 't-'
}

const defaultOptions = {
  name: 'root'
}

export default class Tree extends Component {
  constructor(globals= {}, options = {}) {
    // globals = {...defaultGlobals, ...globals}
    // options = {...defaultOptions, ...options}

    super(globals, options)
  }

  domChanged() {
    console.log('trololololololo')
    console.log(this.observer.listeners)
  }
}