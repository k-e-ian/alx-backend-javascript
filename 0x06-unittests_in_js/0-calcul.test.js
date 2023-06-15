const assert = require('assert');
const { describe, it } = require("mocha");
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round a and b and return the sum', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round a and b and return the sum', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round -a and -b and return the sum', () => {
    assert.strictEqual(calculateNumber(-1.4, -1.3), -2);
  });

  it('should round a and b and return the sum', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round a and b and return the sum', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
