const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai'); // Update the path accordingly

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should correctly calculate the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 2.3, 4.6)).to.equal(7); // Rounded 2 + Rounded 5 = 7
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5); // Rounded 1 + Rounded 4 = 5
      expect(calculateNumber('SUM', 0.8, 0.2)).to.equal(1); // Rounded 1 + Rounded 0 = 1
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract the rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.3)).to.equal(3); // Rounded 6 - Rounded 2 = 3
      expect(calculateNumber('SUBTRACT', 10.2, 3.7)).to.equal(6); // Rounded 10 - Rounded 4 = 6
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide the rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 8.8, 2)).to.equal(4); // Rounded 9 / Rounded 2 = 4
      expect(calculateNumber('DIVIDE', 6.6, 3.3)).to.equal(2); // Rounded 7 / Rounded 3 = 2
    });

    it('should return "Error" when rounded b is 0', () => {
      expect(calculateNumber('DIVIDE', 5.5, 0)).to.equal('Error'); // Rounded 6 / Rounded 0 = Error
    });
  });

  it('should throw an error for invalid operation type', () => {
    expect(() => calculateNumber('INVALID', 2, 3)).to.throw(Error, 'Invalid operation type');
  });
});
