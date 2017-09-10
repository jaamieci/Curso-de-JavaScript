/*Salida sii la variable no está definida : Uncaught ReferenceError: myVariable is not defined*/
/*Salida si la variable se define después: undefined*/
//console.log(myVariable); 
//var myVariable = 10;

var myVariable = 10;

function func() {
    myVariable = 25; //Buscará si existe myVariable en el ámbito local, sino usará myVariable del ámbito global
    //var myVariable;
}

console.log(myVariable);//10

func();
console.log(myVariable);//25