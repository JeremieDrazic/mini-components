export default class Observer {
  constructor(domElement) {
    this.observer = new MutationObserver(this.update.bind(this))

    this.observer.observe(domElement, {
      childList: true,
      subtree: true
    })

    this.listeners = []
  }

  on(callback) {
    this.listeners.push(callback)
  }

  off(callback) {
    this.listeners.splice(this.listeners.indexOf(callback), 1)
  }

  update(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type == 'childList') {
        console.log('Un noeud enfant a été ajouté ou supprimé.')
      }
    }

    this.listeners.forEach(listener => {
      try {
        console.log('call listener:', listener)
        listener()
      } catch (error) {
        console.error(error)
      }
    })
  }

  kill() {
    this.observer.disconnect()
  }
}