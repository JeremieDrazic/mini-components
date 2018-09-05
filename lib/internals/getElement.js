import _isDOMElement from './utils/_isDOMElement'
import _getElement from './utils/_getElement'

export default function getElement (input) {
  if (typeof input === 'string') {
    return _getElement(document, input)
  }

  if (input instanceof window.NodeList || input instanceof window.HTMLCollection) {
    return input[0]
  }

  if (input instanceof Array) {
    return getElement(input[0])
  }

  return _isDOMElement(input) && input
}