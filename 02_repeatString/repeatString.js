const repeatString = function(string, num) {
    stringToRepeat = string;
    if (num === 0 || string === '')
        return ''
    if (num < 0)
        return 'ERROR'
    for (let i = 1; i < num; i++) {
        stringToRepeat += string;
    }
    return stringToRepeat;
};

// Do not edit below this line
module.exports = repeatString;
