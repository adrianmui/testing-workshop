import makeMeASandwich from './../make-me-a-sandwich'

test('returns null if not sandwhich', () => {
  const req = { query: {} }
  expect(makeMeASandwich(req)).toBeNull()
})

test('returns sandwhich if not sandwhich', () => {
  const req = { query: { sandwich: 'BLT' } }
  expect(makeMeASandwich(req)).toBe('BLT')
})