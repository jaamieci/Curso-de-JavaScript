'use strict';

var arreglo = ['red', 'blue', 'green']

//Para obtener el último elemento se podría hacer esto
//var last = arreglo = arreglo[arreglo.length-1]

//Esto no va a funcionar para definir last como una propiedad
//var last = arreglo.last


Object.defineProperty(Array.prototype, 'last', {get: function() {
    return this[this.length-1]
}})
//display(last)

var arr2 = ['one', 'two', 'three']
//display(Array)
//Hacemos uso de la propiedad creada 'last'
display(arreglo.last)
display(arr2.last)

