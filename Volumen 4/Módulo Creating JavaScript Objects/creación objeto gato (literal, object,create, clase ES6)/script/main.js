'use strict';

//Creación de un objeto de manera literal
//var cat = {name: 'Fluffy', color: 'White'}
//cat.age = 3;
//display(cat.name);
//display(cat.age)

//Creación objeto gato usando constructor
//function Cat(name, color ) {
//  this.name = name
//  this.color = color
//}

//var cat = new Cat('Fluffy', 'White');

//Usando la función object.create
var cat = Object.create(Object.prototype,
{
    name: {
        value: 'Fluffy',
        enumerable: true,
        writable: true,
        configurable: true
    },
    
    color: {
        value: 'White',
        enumerable: true,
        writable: true,
        configurable: true,
    }
})

//Creación de objeto mediante clase ES6
/*class Cat {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  
  speak() {
    display('Meeooow')
  }
}

var cat = new Cat('Fluffy', 'White')

display(cat)
cat.speak()*/
