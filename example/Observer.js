export default class Observer {
  constructor (domElement) {
    this.observer = new MutationObserver(this.update())

    this.observer.observe(domElement, {
      childList: true,
      subtree: true
    })
  }

  update () {
    console.log('dom changed')
  }
}