'use strict';

/*console.log(productId); Salida: undefined
var productId = 12;
*/ 

/*Nueva palabra clave let para declarar variables
console.log(productId);//Uncaught ReferenceError: productId is not defined
let productId = 12; 
*/

/*let productId;
console.log(productId); Salida: undefined
*/


/*
let productId = 12;
//Block scoping
{
    //la variable productId es local y no se puede acceder desde fuera de este bloque
    let productId = 2000;
}
console.log(productId); Salida: 12

*/


/*
{
    let productId = 2000;
}
//No se puede acceder a la variable
console.log(productId); Salida: Uncaught ReferenceError: productId is not defined

*/

/*
{
    var productId = 12;
}
console.log(productId); Salida: 12
*/

//En conclusión la diferencia entre usar var y let es que var permite que la variable se escape del ambito local para ser usada fuera, mientras que let no permite eso

/*function updateProductId() {
    productId = 12;
}

let productId = null;
updateProductId();
//Imprime 12 porque la variable solamente está declarada de manera global, y se asume que la variable productId dentro la functión al no estar declarada es la variable global
console.log(productId); Salida: 12

*/


/*
let productId = 42;
for (let productId = 0; productId < 10; productId++) {
    
}
//Imprime 42 porque el for está usando su variable local
console.log(productId); 42
*/


/*
let updateFunctions = [];
for (var i = 0; i < 2; i++) {
    updateFunctions.push(function () { return i;});
    //console.log(updateFunctions[0]()); Salida: 0,1
}
//Lo que contiene mi arreglo updateFunction dentro no es un valor, es una función que retorna un valor y que hay que llamarla al acceder a sus valores
//console.log(updateFunctions[0]); Salida: ƒ () { return i;}

//imprime 2 porque al hacer la llamada de la función, la varible i vale 2
//console.log(updateFunctions[0]());// Salida: 2, porque retorna i que se escapó dentro del ámbito del for, i = 2
*/


/*
let updateFunctions = [];
for (let i = 0; i < 2; i++) {
    updateFunctions.push(function () { return i;});
    console.log(updateFunctions[0]()); //Salida: 0,0
}
console.log(updateFunctions[0]()); //Salida: 0, porque no se sobreecribe i, ya que el i del for no puede ser usado aca
*/


/*
Constante
const MARCKUP_PCT = 100;
console.log(MARCKUP_PCT); Salida: 100
*/


/*
const MARCKUP_PCT = 100;
if(MARCKUP_PCT > 0) {
    MARCKUP_PCT = 10;
}
console.log(MARCKUP_PCT); //Salida: Uncaught TypeError: Assignment to constant variable.
*/

/*
const MARCKUP_PCT = 100;
if(MARCKUP_PCT > 0) {
    const MARCKUP_PCT = 10;
    console.log(MARCKUP_PCT); //Salida: 10
}
console.log(MARCKUP_PCT); //Salida: 100

*/
