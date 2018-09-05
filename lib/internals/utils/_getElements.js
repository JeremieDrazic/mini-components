import _nodeListToArray from './_nodeListToArray'

export default function _getElements (from, selector) {
  return _nodeListToArray(from.querySelectorAll(selector))
}