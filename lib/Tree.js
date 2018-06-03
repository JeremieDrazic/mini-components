import Observer from './Observer'

export default class Tree {
  constructor(rootEl) {
    this.el = rootEl
    this.observer = new Observer(this.el)

    document.querySelector('.add-custom-link-btn').addEventListener('click', this.addLink.bind(this))

    this.observer.on(this.domChanged.bind(this))

    console.log(this)
  }

  addLink() {
    const linkEl = document.querySelector('.custom-link')
    const linkElClone = linkEl.cloneNode(true)

    app.appendChild(linkElClone)
  }

  domChanged() {
    console.log('trololololololo')
  }
}

console.log(Tree)