// Things to know:
// - `test` is a global function from Jest:
//   `test(messageString, testerFunction)`
//   Learn more here: https://facebook.github.io/jest/docs/api.html#testname-fn
// - `expect` is a global function from Jest
//   which allows you to make assertsions. For
//   example:
//     `expect(1).toBe(1)`
//   Learn more here: https://facebook.github.io/jest/docs/expect.html
//
// Write unit tests for getTokenFromHeader.
// See `api/src/routes/utils/get-token-from-header.js`
// to see how this function has been implemented and
// how it's intended to be used. Write at least two unit
// tests to ensure that that use case is always supported.
import getTokenFromHeader from '../get-token-from-header'

test('expects null when Authorization does not exist', () => {
  const req = {headers: {}}
  const result = getTokenFromHeader(req)
  expect(result).toBeNull()
})

test('expects null when Token does not exist', () => {
  const authorization = 'Pokemon1995'
  const req = {headers: {authorization}}
  const result = getTokenFromHeader(req)
  expect(result).toBeNull()
})

test('expects token when proper authorization is provided', () => {
  const authorization = 'Token Pokemon1995'
  const req = {headers: {authorization}}
  const result = getTokenFromHeader(req)
  expect(result).toBe('Pokemon1995')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=API%20Unit&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
    const submitted = false // change this when you've submitted!
    expect(true).toBe(submitted)
  })
  ////////////////////////////////