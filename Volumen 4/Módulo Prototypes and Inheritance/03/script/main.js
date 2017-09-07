'use strict';

/*var myFunc = function() {}
display(myFunc.prototype)

var cat = {name: 'Fluffy'}
display(cat.__proto__)*/

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 3;

var fuffly = new Cat('Fuffly', 'White');
var muffin = new Cat('Muffin', 'Brown');

//display(fuffly);
//display(muffin);

//fuffly.age = 5;

//Edad de su propiedad
display(fuffly.age);

//Edad del prototipo de su propiedad
display(fuffly.__proto__.age);

//display(muffin.age);

display(Object.keys(fuffly))

//Imprime falso porque fuffly no tiene un atributo propio llamado age
display(fuffly.hasOwnProperty('age'));

fuffly.age = 5;
//Ahora imprime true ya que ahora fuffly tiene la propiedad age
display(fuffly.hasOwnProperty('age'));






