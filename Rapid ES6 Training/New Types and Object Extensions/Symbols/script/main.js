'use strict';

/*
let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);

*/

/*
let eventSymbol = Symbol('resize event');
console.log(eventSymbol.toString());//Symbol('resize event')
*/

/*
const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');
console.log(CALCULATE_EVENT_SYMBOL.toString()); //Symbol('calculate event')

*/

/*
let s = Symbol('event');
let s2 = Symbol('event');
console.log(s === s2); //false porque un símbolo es único
*/

/*
let s = Symbol.for('event');
console.log(s.toString()); //Symbol(event)
*/

/*
let s = Symbol.for('event');
let s2 = Symbol.for('event');
console.log(s === s2); true
*/

/*
let s = Symbol.for('event');
let s2 = Symbol.for('event2');
console.log(s === s2); false
*/

/*
let s = Symbol.for('event');
let description = Symbol.keyFor(s);
console.log(description); Event
*/

/*
let article = {
    tittle: 'Whiteface Mountain',
    [Symbol.for('article')]: 'My Article'
};

let value = article[Symbol.for('article')];
console.log(value);//MY Article
*/

/*
let article = {
    tittle: 'Whiteface Mountain',
    [Symbol.for('article')]: 'My Article'
};

console.log( Object.getOwnPropertyNames(article));//["tittle"]

*/

/*
let article = {
    tittle: 'Whiteface Mountain',
    [Symbol.for('article')]: 'My Article'
};

console.log( Object.getOwnPropertySymbols(article));//[Symbol(article)]
*/
