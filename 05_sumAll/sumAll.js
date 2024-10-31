const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0)
        return 'ERROR';
    if (num1 !== Math.floor(num1) || num2 !== Math.floor(num2))
        return 'ERROR';
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        return 'ERROR';
    
    let sum = 0;
    let begin, end;
    if (num1 <= num2) {
        begin = num1;
        end = num2;
    } else {
        begin = num2;
        end = num1;
    }
    
    for (let i = begin; i <= end; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
