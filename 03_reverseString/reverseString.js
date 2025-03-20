const reverseString = function(word) {
    let str = word;
    splitStr = word.split("");
    reverseSplit = splitStr.reverse();
    reverseStr = reverseSplit.join("");
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
