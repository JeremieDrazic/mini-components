import getElement from './getElement'

export default function closest (element, testedElement, limitElement = document) {
  element = getElement(element)

  if (!element || (typeof limitElement === 'string' ? element.matches(limitElement) : element === limitElement)) {
    return false
  }

  if (typeof testedElement === 'string' ? element.matches(testedElement) : element === testedElement) {
    return element
  }

  return !!element && closest(element.parentNode, testedElement, limitElement)
}