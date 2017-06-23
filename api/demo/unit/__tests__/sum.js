// Let's test drive summing numbers

import sum from './../sum'

test('expects 0 when nothing is passed', () => {
  const result = sum()
  expect(result).toBe(0)
})

test('expects 1 + 2 to be 3', () => {
  const result = sum(1, 2)
  expect(result).toBe(3)
})

test('expects 1 + 2 + 3 to be 6', () => {
  const result = sum(1, 2, 3)
  expect(result).toBe(6)
})
