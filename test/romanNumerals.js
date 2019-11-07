const assert = require("chai").assert
const RomanNumerals = require('../src/romanNumerals');

describe('roman numerals', function () {    
    it('should return I for 1', function () {
        var romanNumerals = new RomanNumerals();
        var convertedValue;

        convertedValue = romanNumerals.convert(1);

        assert.equal(convertedValue, 'I');
    });   
    it('should return II for 2', function () {
        var romanNumerals = new RomanNumerals();
        var convertedValue;

        convertedValue = romanNumerals.convert(2);

        assert.equal(convertedValue, 'II');
    });
});