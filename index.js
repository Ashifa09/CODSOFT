function add(a, b) {
    return a + b;
}
let result = add(2, 3)
console.log(result)

function sum(a, b) {
    var s = 0;
    for (var i = a; i <= b; i++) {
        s = s + i;
        return s;
    }
}
let answer = sum(2, 8)
console.log(answer)

const sub = (a, b) => {
    return a - b;
}
let uttar = add(2, 3)
console.log(uttar)

const mul = (a, b, c) => a * b * c;
let resultmul = mul(2, 3, 4)
console.log(resultmul)