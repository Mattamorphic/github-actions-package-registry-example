const expect = require('chai').expect;
const multiply = require('../').multiply;

describe('multiply()', function () {
  it('should multiply two numbers', function () {

    // 1. ARRANGE
    const x = 5;
    const y = 2;
    const sum1 = x * y;

    // 2. ACT
    const sum2 = multiply(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });
});
