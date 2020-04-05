// Find any character NOT between the brackets (any non-digit)
var str = "123456789";
var patt1 = /[^1-4]/g;
var result = str.match(patt1);
console.log(result) // [ '5', '6', '7', '8', '9' ]