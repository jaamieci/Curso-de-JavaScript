'use strict';
/*
var showCategories = function (productId, ...categories) {
    console.log(categories instanceof Array);  
};
showCategories(123, 'search', 'advertising'); //True
*/


/*
var showCategories = function (productId, ...categories) {
    console.log(categories);  
};
showCategories(123, 'search', 'advertising'); //["search", "advertising"]
*/


/*
var showCategories = function (productId, ...categories) {
    console.log(categories);  
};
showCategories(123); //[]
*/

/*
var showCategories = function (productId, ...categories) {
};
console.log(showCategories.length); //1
*/

/*
var showCategories = function (productId, ...categories) {
    console.log(arguments.length);
};
showCategories(123, 'search', 'advertising');//3
*/

/*
var showCategories = new Function("...categories", "return categories");

console.log(showCategories('search', 'adverstising')); //["search", "adverstising"]

*/

/*
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice);//20

*/

/*
var prices = [12, 20, 18];
//pasa todos los elementos de pices 
var newPriceArray = [...prices];
console.log(newPriceArray);
*/

/*
var newPriceArray = Array(...[,,]);
console.log(newPriceArray);//[undefined, undefined]
*/


/*
var newPriceArray = [...[,,]];
console.log(newPriceArray);//[undefined, undefined]
*/

/*
var maxCode = Math.max(..."43210");
console.log(maxCode);//4
*/

/*
var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray);//["A", "B", "C", "D", "E"]
*/

