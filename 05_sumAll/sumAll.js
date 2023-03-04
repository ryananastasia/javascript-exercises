const sumAll = function(a, b) {
    console.log(a, b)
    console.log(typeof(a))
    if (typeof(a) !== "number" || typeof(b) !== "number" || a < 0 || b < 0){
        return "ERROR"
    }
    let sum = 0
    if (a > b) {
        [a, b] = [b, a]
    }
    for (let i = a; i < b+1; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
