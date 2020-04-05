/** Perform case-insensitive matching */

var str = "Visit W3Schools";
var patt1 = /w3schools/i;
var result = str.match(patt1);
console.log(result)
/**
 * [ 'W3Schools',
  index: 6,
  input: 'Visit W3Schools',
  groups: undefined ]
 */
