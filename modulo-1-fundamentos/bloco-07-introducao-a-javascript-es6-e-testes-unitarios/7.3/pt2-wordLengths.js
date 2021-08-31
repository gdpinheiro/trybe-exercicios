const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(arr) {
  const result = []
  for (const index of arr) {
    result.push(index.length)
  }
  return result
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);