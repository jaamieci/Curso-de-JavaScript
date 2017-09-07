'use strict';

/*var myFunc = function() {}
display(myFunc.prototype)

var cat = {name: 'Fluffy'}
display(cat.__proto__)*/

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;


var fuffly = new Cat('Fuffly', 'White');
var muffin = new Cat('Muffin', 'Brown');

//Setea la edad prototipo, pero de los objetos que se crearán a continuación
Cat.prototype = {age: 5};

var snowbell = new Cat('Snowbell', 'White');

display(fuffly.age); //4
display(muffin.age); //4
display(snowbell.age); //5







