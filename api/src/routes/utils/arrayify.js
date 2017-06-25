export default arrayify
// Here's where you'll write arrayify. Look at
// `api/src/routes/utils/arrayify.js` for instructions.

function arrayify(...inputs) {
  return (function arring(arr, stack) {
    if (stack.length === 0) {
      return arr
    } else {
      if (Array.isArray(stack[0])) {
        stack.slice(1)
        return arring(arr.concat(stack[0]), stack.slice(1))
      } else {
        arr.push(stack.shift())
        return arring(arr, stack)
      }
    }
  })([], inputs || [])
  // TODO don't type in here until you have a unit test first!
}
