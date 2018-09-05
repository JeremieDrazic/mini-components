import forEach from './forEach'

import _nodeListToArray from './utils/_nodeListToArray'
import _isDOMElement from './utils/_isDOMElement'
import _getElements from './utils/_getElements'

export default function getElements (input) {
  if (typeof input === 'string') {
    return _getElements(document, input)
  }

  if (input instanceof window.NodeList || input instanceof window.HTMLCollection) {
    return _nodeListToArray(input)
  }

  if (input instanceof Array) {
    let output = []
    forEach(input, _pushRecursive.bind(null, output))

    return output
  }

  return _isDOMElement(input) ? [input] : []
}

function _pushRecursive (output, element) {
  output.push.apply(output, getElements(element))
}