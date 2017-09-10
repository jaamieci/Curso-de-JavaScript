function myFunc(a, b, c) {
    return a + b + c;
}

console.log(myFunc(1, 2, 3)); //6
console.log(myFunc(1, 2, 3, 4));//6 el cuarto argumento es omitido
console.log(myFunc(1, 2));//NaN (no a number)

//Solución
function newFunction() {
    var x = 0;
    
    for (var i = 0; i < arguments.length; i++) {
        x = x + arguments[i];
    }
    
    return x;
}

console.log(newFunction(1, 2, 3));//6
console.log(newFunction(1, 2, 3, 4));//10
console.log(newFunction(1, 2));//3

