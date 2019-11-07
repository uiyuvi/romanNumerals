const assert = require("chai").assert
const RomanNumerals = require('../src/romanNumerals');

describe('roman numerals', function () {
    var romanNumerals = new RomanNumerals();
    function convert(number) {
        return romanNumerals.convert(number);
    }
    describe('convert romans from 1 - 10', () => {
        var testValues = [
            { input: 1, expected: "I" },
            { input: 2, expected: "II" },
            { input: 3, expected: "III" },
            { input: 4, expected: "IV" },
            { input: 5, expected: "V" },
            { input: 6, expected: "VI" },
            { input: 7, expected: "VII" },
            { input: 8, expected: "VIII" },
            { input: 9, expected: "IX" },
            { input: 10, expected: "X" }
        ];

        testValues.forEach(function (test) {
            it(`gives ${test.expected} for ${test.input}`, function () {
                assert.equal(test.expected, convert(`${test.input}`));
            });
        }
        );

    });
});


