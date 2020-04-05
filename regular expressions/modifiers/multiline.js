/** Perform multiline matching */
var str = "\nIs th\nis it?";
var patt1 = /^is/m;
var result = str.match(patt1);
console.log(result)