// let's sum some numbers with TDD

export default sum

function sum(inputs) {
  let val = 0
  const args = Array.prototype.slice.call(arguments)
  if (args.length > 0) {
    args.forEach(el => val += el)
    return val
  } else {
    return 0
  }
  
}
