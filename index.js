const { interfaces } = require("mocha");

//1
function add(a, b){
    return (a + b);
}
//2
function subtract(a, b){
    return (a - b);
}

//3
function multiply(a, b){
    return (a * b);
}

//4
function divide(a, b){
    return (a / b);
}

//5
function increment(n){
    return (n += 1);
}

//6
function decrement(n){
    return (n -= 1);
}

//7
function makeInt(n){
    return parseInt(n, 10);
}

//8
function preserveDecimal(n){
    return parseFloat(n);
}
