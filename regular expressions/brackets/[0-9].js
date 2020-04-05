// Find any character between the brackets (any digit)
var str = "123456789";
var patt1 = /[1-4]/g;
var result = str.match(patt1);
console.log(result) // [ '1', '2', '3', '4' ]