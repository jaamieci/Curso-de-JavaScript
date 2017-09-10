'use strict';
/*
let pattern = /\u{1f3c4}/;
console.log(pattern.test('🏄'));//false

let pattern = /\u{1f3c4}/u;
console.log(pattern.test('🏄'));//true
*/

/*
let pattern = /^.🏄Surfer/;
console.log(pattern.test('🏄Surfer'));//false
*/

/*
let pattern = /^.Surfer/u;
console.log(pattern.test('🏄Surfer'));//true
*/

/*
let pattern = /900/y;
console.log(pattern.lasIndex);//undefined
console.log(pattern.test(800900));//false
*/

/*
let pattern = /900/y;
pattern.lastIndex = 3;
console.log(pattern.test(800900));//true
*/

/*
let pattern = /900/yg;
console.log(pattern.flags);//gy
*/

