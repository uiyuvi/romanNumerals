class RomanNumerals {
    convert(number) {
        var romans = {
            1: "I",
            4: "IV",
            5: "V",
            9: "IX",
            10: 'X'
        };
        if (romans[number]) {
            return romans[number];
        }

        if (number < 4) {
            return romans[1].repeat(number);
        }

        if(number < 9){
            return romans[5] + this.convert(number - 5);
        }
        return romans[10] + this.convert(number - 10);

    }
}
module.exports = RomanNumerals;