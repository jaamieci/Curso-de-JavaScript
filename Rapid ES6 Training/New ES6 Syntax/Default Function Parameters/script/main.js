'use strict';

/*
//Define un parámetro por defecto
var getProduct = function(productId = 1000) {
    console.log(productId);
};


getProduct();//1000
getProduct(2000);//2000
*/

/*
var getProduct = function(productId = 1000, type = 'Software') {
    console.log(productId + ', ' + type);
};

//Al poner undefined como argumento se usará el argumento por defecto
getProduct(undefined, 'hardware');// 1000, hardware
getProduct(undefined); //1000, software
getProduct(10, 'hardware'); // 10, hardware
getProduct('hardaware');//hardware, software. Tomará el único argumento como el primero
getProduct(10, 'hadware', 'otra cosa');// 10, hardware
*/


/*
var getTotal = function(price, tax = price * 0.07) {
    console.log(price + tax);
};

si se recibe tax, ya que por defecto es price * 0.07
getTotal(5.00); //5.35

*/

/*
var baseTax = 0.07;
var getTotal = function(price, tax = price * baseTax) {
    console.log(price + tax);
};
getTotal(5.00); //5.35

*/

/*
var generateBaseTax = () => 0.07;
var getTotal = function(price, tax = price * generateBaseTax()) {
    console.log(price + tax);
    
};
getTotal(5.00);//5.35
*/

/*
var getTotal = function(price, tax = 0.07) {
    console.log(arguments.length);
}
getTotal(5.00);//1
getTotal(); //0
*/

/*
var getTotal = function (price = adjustment, adjustment = 1.00) {
    console.log(price + adjustment);
};
getTotal();//adjustment is not defined ya que al consultar el primer argument no sabe que es adjustment
*/

/*
var getTotal = function(price = adjustment, adjustment = 1.00) {
    console.log(price + adjustment);  
};
getTotal(5.00);//6
*/

/*
var getTotal = new Function("price = 20.00", "return price;");
console.log(getTotal());//20

*/


