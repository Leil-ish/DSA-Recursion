const decToBi = num => 
    num === 0 
        ? 0 
        : num % 2 + 10 * decToBi(Math.floor(num / 2));

console.log(decToBi(10));
