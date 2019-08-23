const expect = require('chai').expect;
const divide = require('../').divide;

describe('divide()', function () {
  it('should divide two numbers', function () {

    // 1. ARRANGE
    const x = 10;
    const y = 2;
    const sum1 = x / y;

    // 2. ACT
    const sum2 = divide(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });
});
