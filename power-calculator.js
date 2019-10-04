let powerCalculator = function(a, b) {
    if (b === 0) {
        return 1;
    }
    return a * powerCalculator(a, b - 1)
};

console.log(powerCalculator(10, 2))
