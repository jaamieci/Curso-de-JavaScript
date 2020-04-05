/** Find any character between the brackets */
var str = "Is this all there is?";
var patt1 = /[h]/g; // Do a global search for the character "h" in a string
var patt2 = /[his]/g; // Do a global search for the characters "h", "i" and "s" in a string
var result = str.match(patt1);
var result2 = str.match(patt2); // str.replace(/[his]/g, '.') replace all h, i and s for a dot (.)
console.log(result) // [ 'h', 'h' ]
console.log(result2) // [ 's', 'h', 'i', 's', 'h', 'i', 's' ]