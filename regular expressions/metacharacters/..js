// Find a single character, except newline or line terminator

var str = "That's hot!";
var patt1 = /h.t/g;
const result = str.match(patt1);
console.log(result) // [ 'hat', 'hot' ]