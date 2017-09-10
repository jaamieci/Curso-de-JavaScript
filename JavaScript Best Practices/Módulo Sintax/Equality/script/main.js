var x = 1;

var y = '1';

if(x == y) { //Si las variables son de tipos diferentes, va a tratar de convertirlos al mismo tipo para compararlas, por eso la salida es 'Equals'
    console.log('Equals');
} else {
    console.log('Not equals');
}


if(x === y) { //Salida 'Not equals', porque no hay conversión al mismo tipo
    console.log('Equals');
} else {
    console.log('Not equals');
}

/*Usar === por defecto en la mayoría de las cosas*/
/*Para ver si una variable existe usar typeof*/

if(typeof z !== 'undefined') {
    console.log('Existe');
} else {
    console.log('No existe');
}

if(z) { //Uncaught ReferenceError: z is not defined
    console.log('Existe');
} else {
    console.log('No existe');
}
//console.log(typeof(z));