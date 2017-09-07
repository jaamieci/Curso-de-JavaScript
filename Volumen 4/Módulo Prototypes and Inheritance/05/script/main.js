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

display(fuffly.__proto__);
//El prototipo de gato también tiene un prototipo
display(fuffly.__proto__.__proto__);

display(fuffly.__proto__.__proto__.__proto__);







