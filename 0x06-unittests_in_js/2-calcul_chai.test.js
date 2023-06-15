const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('type: SUM', () => {
    it('should round the numbers and return the sum', () => {
      expect(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('type: SUBTRACT', () => {
    it('should round the numbers and subtract b from a', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('type: DIVIDE', () => {
    it('should round the numbers and divide a with b', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" if the rounded value of b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
