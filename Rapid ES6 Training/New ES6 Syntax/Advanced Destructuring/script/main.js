'use strict';

/*let [high, low] = [,];
console.log(`high: ${high} low: ${low}`);
//high: undefined low: undefined
*/


/*
let [high, low] = undefined;
console.log(`high: ${high} low: ${low}`);
//Cannot read property 'Symbol(Symbol.iterator)' of undefined
*/

/*
let [high, low] = null;
console.log(`high: ${high} ${low}`);
//Cannot read property 'Symbol(Symbol.iterator)' of null
*/

/*
try {
    let[high, low, ] = undefined;
    
} 
catch (e) {
    console.log(e.name);
}
//TypeError
*/

/*
let [high, low, ] = [500, 200];
console.log(`high: ${high} low: ${low}`);
//high: 500 low: 200
*/

/*
for(let [a, b] of [[5, 10]]) {
    console.log(`${a} ${b}`);
}
//5 10
*/

/*
let count = 0;
for(let [a, b] of [[5, 10]]) {
    console.log(`${a} ${b}`);
    count++;
}
console.log(count);//1
*/

