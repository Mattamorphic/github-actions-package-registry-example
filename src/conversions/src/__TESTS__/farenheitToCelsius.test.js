const expect = require('chai').expect;
const f2c = require('../').farenheitToCelsius;

describe('farenheitToCelsius()', function () {
  it('should calculate farenheitToCelsius', function () {

    // 1. ARRANGE
    const celsius = 0;
    const farenheit = 32;

    // 2. ACT
    const conversion = f2c(farenheit);

    // 3. ASSERT
    expect(conversion).to.be.equal(celsius);

  });
});
