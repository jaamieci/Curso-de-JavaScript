'use strict';

function Animal(voice) {
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
    display(this.voice);
}
//Ahora cualquier función que utiliza Animal como su prototipo tendrá la función de hablar


function Cat(name, color) {
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

//Definie el prototipo de gato al de animal
Cat.prototype = Object.create(Animal.prototype);
//Pero ahora vuelve a ser un Cat
Cat.prototype.constructor = Cat;

var fuffly = new Cat('Fuffly', 'White');
//fuffly puede ahora hablar, pero la función speak no es un miembro de gato, pero es un miembro del prototipo animal

fuffly.speak();
display(fuffly);
//display(fuffly instanceof Animal); true

//El prototipo de fuffly es de un Cat, pero el prototipo del prototipo de fuffly es un Animal
display(fuffly.__proto__.__proto__)






