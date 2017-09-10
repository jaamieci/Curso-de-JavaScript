'use strict';

/*
let title = 'Santa Barbara Surf Riders';
console.log(title.startsWith('Santa'));//true
console.log(title.startsWith('Riders'));//false

console.log(title.includes('ba'));//true

*/

/*
var title = "Surfer's \u{1f3c4} Blog";
console.log(title);
//Surfer's 🏄 Blog
*/

/*
var title = "\u{1f3c4}"; 
console.log(title.length);//2
*/

/*
var surfer = "\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(Array.from(surfer).length);//3
console.log(surfer);//🌊🏄🐋
*/

/*
var title = "Mazatla\u0301n";
console.log(title + ' ' + title.length);//Mazatlán 9

*/

/*
var title = "Mazatla\u0301n";
console.log(title + ' ' + title.normalize().length);//Mazatlán 8
*/

/*
var title = "Mazatla\u0301n";
console.log(title.normalize().codePointAt(7).toString(16));//6e (valor asscii)
*/

//console.log(String.fromCodePoint(0x1f3c4));//🏄

/*
let title = 'Surfer';
let output = String.raw`${title} \u{1f3c4}`;
console.log(output);//Surfer \u{1f3c4}
*/

/*
let wave = '\u{1f30a}';
console.log(wave.repeat(10));//🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
*/

/*
let text = 'test';
console.log(text.repeat(2));//testtest
*/