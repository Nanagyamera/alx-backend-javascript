const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should correctly calculate the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(2.3, 4.6), 7); // Rounded 2 + Rounded 5 = 7
    assert.strictEqual(calculateNumber(1.2, 3.7), 5); // Rounded 1 + Rounded 4 = 5
    assert.strictEqual(calculateNumber(0.8, 0.2), 1); // Rounded 1 + Rounded 0 = 1
  });
});
