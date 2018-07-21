import Tree from '../../dist/tree.esm.js'
// import containers from './containers'
// import components from './components'

document.addEventListener('DOMContentLoaded', e => {
  console.log('DOM content fully loaded')

  const app = new Tree({
    $store: {
      state: {
        foo: 'bar'
      },
      breakpoints: {
        xsmall: 0,
        small: 768,
        medium: 1024,
        large: 1280,
        xlarge: 1600
      }
    }
  })
})
