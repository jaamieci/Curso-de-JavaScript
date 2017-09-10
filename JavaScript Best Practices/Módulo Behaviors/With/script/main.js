'use strict';
//Un objeto que tiene sub objetos
var obj = {
    a: {
        b: {
            c: 'hello'
        }
    }
}


console.log(obj.a.b.c);//hello
console.log(obj.a);//{b: {…}}
console.log(obj.a.b);//{c: "hello"}

//Usando la sentencia with

//Con el modo estricto la sentencia with no se puede usar
/*with(obj.a.b) {
    console.log(c);
}*/

(function (newVar) { // 'hello'
    console.log(newVar);
}(obj.a.b.c))



