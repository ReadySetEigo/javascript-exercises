const sumAll = function(startNumber, endNumber) {
    let result = 0;

    if (startNumber < 0 || endNumber < 0 || Number.isInteger(startNumber) == false|| Number.isInteger(endNumber) == false) 
    {
        return "ERROR";
    }

    if (endNumber < startNumber) {
        let tmp = endNumber;
        endNumber = startNumber;
        startNumber = tmp;
    }

    for (let i = startNumber; i < endNumber+1; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
