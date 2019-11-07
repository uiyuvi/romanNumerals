class RomanNumerals{
    convert(number){
        if(number < 4){
            return 'I'.repeat(number);
        }
        return 'IV';
    }
}
module.exports = RomanNumerals;