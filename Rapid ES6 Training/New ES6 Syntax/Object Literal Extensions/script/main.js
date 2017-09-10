'use strict';

/*
var price = 5.99, quantity = 30;
var productView = {
    price,
    quantity
};
console.log(productView);

//Object
   // price: 5.99
    //quantity: 30
    //__proto__: Object
*/

/*
var price = 5.99, quantity = 10;
var productView = {
    price,
    quantity,
    calculateValue() {
        return this.price * this.quantity
    }
};

console.log(productView.calculateValue());//59.900000000000006

*/

/*
var price = 5.99, quantity = 10;
var productView = {
    price: 7.99,
    quantity: 1,
    calculateValue() {
        return this.price * this.quantity
    }
};

console.log(productView.calculateValue());//7.99
*/

/*
var price = 5.99, quantity = 10;
var productView = {
    price,
    quantity,
    "calculate value"() {
        return this.price * this.quantity
    }
};

console.log(productView["calculate value"]());//59.900000000000006
*/

/*
var field = 'dynamicField';
var price = 5.99;
var productView = {
    [field]: price
};

console.log(productView);//{dynamicField: 5.99}
*/

/*
var field = 'dynamicField';
var price = 5.99;
var productView = {
    [field + "-001"]: price
};

console.log(productView);//{dynamicField-001: 5.99}
*/

/*
var method = 'doIt';
var productView = {
    [method + "-001"]() {
        console.log("in a method");
    }
};

productView['doIt-001']();//in a method
*/

/*
var ident = "productId";
var productView = {
    get [ident] () {return true; },
    set [ident] (value) {  }
};

console.log(productView.productId);

*/