import findNew from './check-existing-files.js'

const check = [
  ['matches.js', '3456cdef'],
  ['matches.txt', 'abcd1234'],
  ['mismatch.txt', '12345678']
]
const expected = { 12345678: 'mismatch.txt' }
const actual = await findNew('./test/bck-4-csv-2', check)

console.log(actual)
