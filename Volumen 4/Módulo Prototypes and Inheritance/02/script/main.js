'use strict';

/*var myFunc = function() {}
display(myFunc.prototype)

var cat = {name: 'Fluffy'}
display(cat.__proto__)*/

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

var fuffly = new Cat('Fuffly', 'White');

Cat.prototype.age = 3;
display(Cat.prototype);
display(fuffly.__proto__);

//Imprimirá true ya que ambos objetos pertenecen a la misma instancia
display(Cat.prototype === fuffly.__proto__);


var muffin = new Cat('Muffin', 'Brown');
display(muffin.__proto__);


