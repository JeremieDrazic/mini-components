import Whale from '../../dist/whale.esm.js'
import forIn from '../../lib/internals/forIn.js'


const app = new Whale({
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

import * as containers from './containers/index.js'
forIn(containers, (key, container) => {
  app.component(key, container)
})

import * as components from './components/index.js'
forIn(components, (key, component) => {
  app.component(key, component)
})

app.$mount(document.body)

console.log('app', app)
