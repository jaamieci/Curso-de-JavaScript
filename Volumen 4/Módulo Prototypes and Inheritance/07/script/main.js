'use strict';

//Clase animal que tiene un constructor el cual recibe voice
class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt';
    }
    
    speak() {
        display(this.voice);
    }
}

//Clase Cat que extiende de Animal
class Cat extends Animal {
    constructor(name, color) {
        //Super para llamar al  constructor de su clase padre, así que va a llamar al constructor animal antes de setear nombre y color
        super('Meow');
        this.name = name;
        this.color = color;
    }
}

var fuffly = new Cat('Fuffly', 'White');
fuffly.speak();
display(fuffly);
//display(fuffly.constructor)






