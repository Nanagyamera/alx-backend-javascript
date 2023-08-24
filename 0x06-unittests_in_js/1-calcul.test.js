const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should correctly calculate the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 4.6), 7); // Rounded 2 + Rounded 5 = 7
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5); // Rounded 1 + Rounded 4 = 5
      assert.strictEqual(calculateNumber('SUM', 0.8, 0.2), 1); // Rounded 1 + Rounded 0 = 1
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract the rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.3), 3); // Rounded 6 - Rounded 2 = 3
      assert.strictEqual(calculateNumber('SUBTRACT', 10.2, 3.7), 6); // Rounded 10 - Rounded 4 = 6
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide the rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.8, 2), 4); // Rounded 9 / Rounded 2 = 4
      assert.strictEqual(calculateNumber('DIVIDE', 6.6, 3.3), 2); // Rounded 7 / Rounded 3 = 2
    });

    it('should return "Error" when rounded b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 0), 'Error'); // Rounded 6 / Rounded 0 = Error
    });
  });

  it('should throw an error for invalid operation type', () => {
    assert.throws(() => calculateNumber('INVALID', 2, 3), Error, 'Invalid operation type');
  });
});
