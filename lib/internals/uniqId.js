const idCounter = {}

export default function uniqId (prefix = '$tree-') {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0
  }

  const id = ++idCounter[prefix]

  if (prefix === '$tree-') {
    return `${id}`
  }

  return `${prefix + id}`
}