/*
Las variables deben ir pirmero, luego las funciones, lo mismo dentro de una función
*/

//myFunc(); //Salida: 'hi from my function'
function myFunc() {
    console.log("hi from my function");
}

//myFunc(); //Salida: 'hi from my function'
expresion(); //Salida: 'Uncaught TypeError: expresion is not a function' porque expresion no se asigna como función

var expresion = function () {
    console.log("Hi from my expresion");
}

expresion(); //Salida: 'Hi from my expresion'