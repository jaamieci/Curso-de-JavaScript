'use strict';

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}


//Ahora no son enumerables las propiedades del objeto, por lo que solo mostrará la primera propiedad del objeto
Object.defineProperty(cat, 'name', {enumerable: false})
for (var propertyName in cat) {
     display(propertyName + ': ' + cat[propertyName]);
}

//Devuleve un array con las propiedades del objeto
display(Object.keys(cat))

//Ahora si son enumerables las propiedades del objeto y mostrará todas las propiedades
Object.defineProperty(cat, 'name', {enumerable: true})
for (var propertyName in cat) {
     display(propertyName + ': ' + cat[propertyName]);
}
display(Object.keys(cat))