/**  Perform a global match (find all matches rather than stopping after the first match)  */

var str = "Is this all there is?";
var str2 = "IS THIS ALL THERE IS?"
var str3 = "Hello world";

var patt1 = /is/g;
var result = str.match(patt1)
var result2 = str2.match(patt1)
var result3 = str3.match(patt1)
console.log(result) // [ 'is', 'is' ]
console.log(result2) // null
console.log(result3) // null