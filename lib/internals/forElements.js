import forEach from './forEach'
import getElements from './getElements'

export default function forElements(elements, callback) {
  forEach(getElements(elements), callback)
}