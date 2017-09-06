var example = "value"; //Variable global

//cuando se utilizan variables globales dentro de una función, esta puede sobreescribir estas variables
function alertExample(){
    example = "newValue";
    //alert(example);
    anotherExample = "???"; //Variable local
}

alertExample();
alert(example);

//alert(anotherExample);