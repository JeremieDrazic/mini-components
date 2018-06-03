export default class Component {
  constructor(globals = {}, options = {}) {
    Object.assign(this, globals)
    this.$options = options
  }
}