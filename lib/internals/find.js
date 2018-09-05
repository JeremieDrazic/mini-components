import _getElements from './utils/_getElements'
import _applyOnElements from './utils/_applyOnElements'

const find = _applyOnElements.bind(null, _findFromOne)
export default find

function _findFromOne (found, selector, element) {
  found.push.apply(found, _getElements(element, selector))
}