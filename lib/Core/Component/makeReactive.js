import forIn from '../../internals/forIn'
import forEach from '../../internals/forEach'

const arrayReactiveMethods = ['push', 'splice', 'unshift']

export default function (output, key, value) {
  Object.defineProperty(output, key, {
    get: () => {
      return value
    },
    set: newValue => {
      value = newValue

      if (typeof newValue === 'object') {
        forIn(newValue, makeReactive())
      }

      if (value instanceof Array) {
        forEach(arrayReactiveMethods, method => {
          value[method] = function () {
            return Array.prototype[method].apply(this, arguments)
          }
        })
      }
    }
  })

  output[key] = value
}