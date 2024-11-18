const palindromes = function (str = '') {
    return str
    .toLowerCase()
    .split("")
    .filter(item => (item >= "a" && item <= "z") || (item >= "0" && item <= "9"))
    .every((char, index, array) => char === array[array.length - (1 + index)])
};

// Do not edit below this line
module.exports = palindromes;
