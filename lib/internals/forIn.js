import forEach from './forEach'

export default function forIn (object, callback) {
  if (typeof object !== 'object') return

  forEach(Object.keys(object), forKey.bind(null, object, callback))

  return object
}

function forKey(object, callback, key) {
  callback(key, object[key])
}