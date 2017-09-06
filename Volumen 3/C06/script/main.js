var three = "3";
function alertNumber(){
    var one = "1";
    alert(one);
    
    function alertAnotherNumber(){
    var two = "2";
    alert(two);
    alert(three);
    alert(one);
    }
    
    alertAnotherNumber();
    alert(two); //Variable fuera de alcance, provocará error
}

alertNumber();

alert(one); //Va a mostrar un error en la consola porque esta variable es local y estamos intentando de acceder a ella desde fuera de la función.

