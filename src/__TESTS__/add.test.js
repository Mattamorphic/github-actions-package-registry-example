const expect = require('chai').expect;
const add = require('../').add;

describe('add()', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    const x = 5;
    const y = 1;
    const sum1 = x + y;

    // 2. ACT
    const sum2 = add(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);

  });
});
