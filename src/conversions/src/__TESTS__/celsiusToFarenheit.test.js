const expect = require('chai').expect;
const c2f = require('../').celsiusToFarenheit;

describe('celsiusToFarenheit()', function () {
  it('should calculate celsiusToFarenheit', function () {

    // 1. ARRANGE
    const celsius = 0;
    const farenheit = 32;

    // 2. ACT
    const conversion = c2f(celsius);

    // 3. ASSERT
    expect(conversion).to.be.equal(farenheit);

  });
});
