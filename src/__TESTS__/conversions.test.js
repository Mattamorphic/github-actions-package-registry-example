const expect = require('chai').expect;
const Conversions = require('../').conversions;

describe('Conversions', () => {
  it('Check conversions has the methods we use', () => {
    expect(Object.keys(Conversions).includes('celsiusToFarenheit')).to.be.true;
    expect(Object.keys(Conversions).includes('farenheitToCelsius')).to.be.true;
  });

  it('Check conversions works', () => {

    // 1. ARRANGE
    const celsius = 0;
    const farenheit = 32;

    // 2. ACT
    const conversion = Conversions.celsiusToFarenheit(celsius);

    // 3. ASSERT
    expect(conversion).to.be.equal(farenheit);

  });
});
