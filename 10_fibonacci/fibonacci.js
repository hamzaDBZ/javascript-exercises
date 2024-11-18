const fibonacci = function(pos) {
    if (pos < 0) return "OOPS";
    if (pos == 0) return 0;
    let curr = 1, prev = 1, temp;

    for (let i = 2; i < pos; i++) {
        temp = curr;
        curr += prev;
        prev = temp;
    }
    return curr;

};

// Do not edit below this line
module.exports = fibonacci;
