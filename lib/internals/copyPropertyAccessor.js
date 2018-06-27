export default function (key, to, from) {
  Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key))
}