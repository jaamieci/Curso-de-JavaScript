'use strict';

let Blog = function() {
    
};

/*
let blog = new Blog();
console.log( blog.toString());//[object Object]
*/

/*
Blog.prototype[Symbol.toStringTag] = 'Blog Class';
let blog = new Blog();
console.log(blog.toString()); //[object Blog Class]
*/

let values = [8, 12, 16];
//console.log([].concat(values));//[8, 12, 16]

/*
values[Symbol.isConcatSpreadable] = false;
console.log([].concat(values));//[Array(3)]

*/

/*
let sum = values + 100;
console.log(sum);//8,12,16100
*/

/*
values[Symbol.toPrimitive] = function (hint) {
    console.log(hint);
    return 42;
};

let sum = values + 100;
console.log(sum);
//default
//142
*/

