var toPrint = "print me";

function print(out) {
    var stringToPrint = out;
    console.log(stringToPrint);
}

//console.log(stringToPrint); //La variable stringToPrint no es accesible, salida: stringToPrint is not defined
print('Hello');
console.log(stringToPrint); // salida: Uncaught ReferenceError: stringToPrint is not defined