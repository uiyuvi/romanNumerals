class RomanNumerals{
    convert(number){
        var romans = {
            1 : "I",
            2 : "II",
            3 : "III",
            4 : "IV",
            5 : "V"
        };
        return romans[number];
    }
}
module.exports = RomanNumerals;