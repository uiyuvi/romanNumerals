const assert = require("chai").assert
const RomanNumerals = require('../src/romanNumerals');

describe('roman numerals', function () {    
    var romanNumerals = new RomanNumerals();
    function convert(number) {
        return romanNumerals.convert(number);
    }
    it('should return I for 1', function () {
        assert.equal(convert(1), 'I');
    });   
    it('should return II for 2', function () {
        assert.equal(convert(2), 'II');
    });
    it('should return III for 3', function () {
        assert.equal(convert(3), 'III');
    });
    it('should return IV for 4', function () {
        assert.equal(convert(4), 'IV');
    });
});


