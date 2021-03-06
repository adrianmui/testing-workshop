// Things to know:
// - The `toEqual` assertion does a "deep" equality check.
//   This means you can verify that two objects are effectively
//   the same because they have the same primative values.
//   For example:
//     `expect({a: 'b'}).toEqual({a: 'b'})`
//   Learn more: https://facebook.github.io/jest/docs/expect.html#toequalvalue
//
// You're going to develop a new utility function called `arrayify`
// using Test Driven Development!
// You'll write this function in `api/src/routes/utils/arrayify.js`
//
// Requirements: accepts a single argument and returns an array
// of that argument. If the given argument is already an array,
// just return the argument. If it's given nothing, return an empty array.
//
// **Remember** to write a simple test to cover a simple use case. Then
// write code to make that test pass. Then refactor your code to clean
// it up if needed. Then continue the cycle until you cover all use cases.
import arrayify from '../arrayify'

test('expects default to output empty array', () => {
  const result = arrayify()
  expect(result).toEqual(expect.arrayContaining([]))
})

test('expects single string to output single array', () => {
  const result = arrayify('something')
  expect(result).toEqual(expect.arrayContaining(['something']))
})

test('expects single number to output single array', () => {
  const result = arrayify(123)
  expect(result).toEqual(expect.arrayContaining([123]))
})

test('expects strings and numbers to output single array', () => {
  const result = arrayify(123, 'first', 456, 'second', 567)
  expect(result).toEqual(expect.arrayContaining(
    [123, 'first', 456, 'second', 567]))
})

test('expects array to output same array', () => {
  const result = arrayify(123, 'first', 456, 'second', 567)
  expect(result).toEqual(expect.arrayContaining(
    [123, 'first', 456, 'second', 567]))
})

test('expects combination of array, strings, and numbers to output joined array', () => {
  const result = arrayify([123, 'first'], 456, 'second', [567], 'third')
  expect(result).toEqual(expect.arrayContaining(
    [123, 'first', 456, 'second', 567, 'third']))
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=TDD&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
