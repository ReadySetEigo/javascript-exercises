const repeatString = function(inputString, inputRepeat) {
    if(inputRepeat < 0) return "ERROR";
    let string = "";
    for(let i = 0; i < inputRepeat; i++) {
        string += inputString
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
