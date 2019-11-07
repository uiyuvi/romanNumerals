class RomanNumerals{
    convert(number){
        var romans = {
            1 : "I",
            4 : "IV",
            5 : "V",
            6 : "VI",
            7 : "VII",
            8 : "VIII",
            9 : "IX"         
        };
        if(number < 4){
            return romans[1].repeat(number);
        }
        return romans[number];
    }
}
module.exports = RomanNumerals;