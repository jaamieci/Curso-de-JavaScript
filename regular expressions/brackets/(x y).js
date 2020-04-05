// (x|y). Find any of the alternatives specified

var str = "re, green, red, green, gren, gr, blue, yellow";
var patt1 = /(red|green)/g;
var result = str.match(patt1);
console.log(result) // [ 'green', 'red', 'green' ] 