export default function forEach (items, callback) {
  if (!items) return []

  if (typeof items !== 'object' || !('length' in items)) {
    items = [items]
  }

  const length = items.length
  for (let i = 0; i < length; i++) callback(items[i], i)

  return items
}