'use strict';

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'name', {configurable: false})

//Esta línea dará error de consola porque la propiedad del atributo no se puede configurar
Object.defineProperty(cat, 'name', {enumerable: false})
//Tampoco se puede eliminar la propiedad del objeto
//delete cat.name
