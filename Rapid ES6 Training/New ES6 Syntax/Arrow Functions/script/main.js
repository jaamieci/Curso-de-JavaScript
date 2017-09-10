'use strict';

/*
var getPrice = () => 5.99;
console.log(typeof getPrice); //Function
console.log(getPrice()); //5.99
*/


/*var getPrice = function devolver() {
    return 5.99;
}
 console.log(getPrice());5.99
console.log(getPrice);  ƒ devolver() {
                            return 5.99;
                        }
*/

/*var getPrice = count => count * 4.00;
console.log(getPrice(2)); //8
*/

/*
var getPice = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPice(2, .07)); //8.56
*/

/*
Lo mismo pero usando un bloque
var getPrice = (count, tax) => {
    var price = count * 4.00;
    price *= (1 + tax);
    return price;
}
console.log(getPrice(2, .07)); //8.56
*/

/*
document.addEventListener('click', function () {
   console.log(this); //#document al hace click
});
*/

/*
asigna la función a window global object
document.addEventListener('click', () => console.log(this));

//Es como hacer esto pero sin el evento
console.log(this);
*/

/*
var invoice = {
    number: 123,
    process: function() {
        console.log(this);
    }
};

invoice.process(); //devuelve todo el objeto {number: 123, process: ƒ}

*/


/*
var invoice = {
    number: 123,
    process: () => console.log(this)
};

invoice.process(); //Devuelve el objeto global window

*/

/*
var invoice = {
    number: 123,
    process: function () {
        return () => console.log(this.number);
    }
};
invoice.process()();

*/

/*
var invoice = {
    number: 123,
    process: function () {
        return () => console.log(this.number);
    }
};

var newInvoice = {
    number: 456
};
invoice.process().bind(newInvoice)();//123

//Arrow Functions ignora el bind ya que no puede ser cambiado y accede al contexto global
*/

/*
var invoice = {
    number: 123,
    process: function () {
        return () => console.log(this.number);
    }
};

var newInvoice = {
    number: 456
};
invoice.process().call(newInvoice); //123
invoice.process()(newInvoice); //123
*/

/*
var getPrice = () => 5.99;
console.log(typeof getPrice);//function

Agregar una nueva línea en Arrow Functions es un problema
var getPrice = () => 5.99;
console.log(typeof getPrice);//Uncaught SyntaxError: Unexpected token =>
*/

/*
var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty("prototype")); //false
*/