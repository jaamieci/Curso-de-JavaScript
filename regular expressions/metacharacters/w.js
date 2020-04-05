// \w
// Find a word character
// The \w metacharacter is used to find a word character.
// A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.

var str = "Give 100%!";
var patt1 = /\w/g;
const result = str.match(patt1);
console.log(result) // [ 'G', 'i', 'v', 'e', '1', '0', '0' ]