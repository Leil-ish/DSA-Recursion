let nthTriangle = function(n) {
    if (n <= 1) {
        return n;
    } else {
        return n + nthTriangle(n-1);
    }
}

console.log(nthTriangle(5))