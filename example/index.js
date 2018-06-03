document.addEventListener('DOMContentLoaded', e => {
  console.log('DOM content fully loaded')
  const app = new Tree(document.querySelector('.app'))
})

class Tree {
  constructor (rootEl) {
    this.el = rootEl
    this.observer = new Observer(this.el)

    document.querySelector('.add-custom-link-btn').addEventListener('click', this.addLink.bind(this))

    this.observer.on(this.domChanged.bind(this))
  }

  addLink () {
    const linkEl = document.querySelector('.custom-link')
    const linkElClone = linkEl.cloneNode(true)

    app.appendChild(linkElClone)
  }

  domChanged () {
    console.log('trololololololo')
  }
}

class Component {
  constructor (globals = {}, options = {}) {
    Object.assign(this, globals)
    this.$options = options
  }
}

class Observer {
  constructor(domElement) {
    this.observer = new MutationObserver(this.update.bind(this))

    this.observer.observe(domElement, {
      childList: true,
      subtree: true
    })

    this.listeners = []
  }

  on (callback) {
    this.listeners.push(callback)
  }

  off (callback) {
    this.listeners.splice(this.listeners.indexOf(callback), 1)
  }

  update (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type == 'childList') {
        console.log('Un noeud enfant a été ajouté ou supprimé.')
      }
    }

    this.listeners.forEach(listener => {
      try {
        console.log('call listener:', listener)
        listener()
      } catch(error) {
        console.error(error)
      }
    })
  }

  kill () {
    this.observer.disconnect()
  }
}