//var task = {};
//var task = Object.create(Object.prototype);

var task = {
    title: 'My tittle',
    description: 'My description',
};

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false, // para no mostrar la propiedad toString
    configurable: true
})

/*task.toString = function() {
    return this.tittle;
}*/

/*task.toString = function() {
    return this.title + ' ' + this.description;
}*/

//Convierto la popiedad toString a un string
//task.toString = 'hi'; con la propiedad writable en false, ya no se puede convertir la propiedad a string

//console.log(typeof task.toString); 
console.log(task.toString());

console.log(Object.keys(task)); //Devuelve un arreglo con las propiedades y métodos del objeto, dentro de un array (3) ["title", "description", "toString"]

var urgenTask = Object.create(task);
Object.defineProperty(urgenTask, 'toString', {
    value: function() {
        return this.title + ' ' + 'is urgent';
    },
    writable: false,
    enumerable: false, // para no mostrar la propiedad toString
    configurable: false
})

console.log(urgenTask.toString());

