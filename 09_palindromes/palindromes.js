const palindromes = function (input) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = input
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const reverseString = cleanedString.split('').reverse().join('')

    return cleanedString === reverseString;
};

// Do not edit below this line
module.exports =  palindromes;
