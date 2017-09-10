'use strict';
var obj = {a: 100, b: 200},
    myVar = 10;

delete obj.a; //elimina la propiedad a
/*
Esto no se puede hacer
delete obj
delete myVar;*/
console.log(obj);
console.log(myVar);