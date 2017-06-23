export default arrayify
// Here's where you'll write arrayify. Look at
// `api/src/routes/utils/arrayify.js` for instructions.

function arrayify(...inputs) {
  if (Array.isArray(inputs)) {
    return inputs
  } else {
    const cache = []
    inputs.forEach(el => cache.push(el))
    return cache
  }
  // TODO don't type in here until you have a unit test first!
}
