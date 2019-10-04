const sumOf = function(list) {

    if (list.length === 1) {
        return list[0];
    }

    return list[0] + sumOf(list.slice(1));

}

let lst = [2,4,6,8,10];
console.log(sumOf(lst));



