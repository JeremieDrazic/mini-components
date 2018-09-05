import forElements from '../forElements'

export default function _applyOnElements (method, elements, selector) {
  let found = []

  forElements(elements, method.bind(null, found, selector))

  return found
}