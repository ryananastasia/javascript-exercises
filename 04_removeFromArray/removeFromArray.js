const removeFromArray = function() {
    let arr = arguments[0]
    for (let i = 1; i < arguments.length; i++){
        let curr = arr.indexOf(arguments[i])
        if (curr > -1) {
            arr = arr.slice(0,curr).concat(arr.slice(curr+1))
        }
    }
    return arr 
};

// Do not edit below this line
module.exports = removeFromArray;
