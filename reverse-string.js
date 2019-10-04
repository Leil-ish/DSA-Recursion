let stringReverse = function(string) {
    if (string === '') {
        return '';
    } else {
        return stringReverse(string.substr(1)) + string.charAt(0);
    }
}

console.log(stringReverse('hello'))