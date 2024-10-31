const removeFromArray = function(arr, ...element) {
    let newArr = [];
    nextElement:
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < element.length; j++) {
            if (arr[i] === element[j]) continue nextElement;
        }
        newArr.push(arr[i]);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
