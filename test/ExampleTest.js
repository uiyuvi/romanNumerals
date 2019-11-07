const assert = require("chai").assert

describe('Example', function () {
    it('should fail', function () {
        assert.isFalse(false);
    });
    it('should pass', function () {
        assert.isTrue(true);
    });

    var testValues = [
        {input: 1, expected: "1"},
        {input: 2, expected: "2"},
    ];

    testValues.forEach(function(test) {
        it(`gives ${ test.expected } for ${ test.input }`, function () {
            assert.equal(test.expected,`${test.input}`);
        });
        }
    );
});