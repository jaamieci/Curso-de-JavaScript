// Find any character NOT between the brackets
var str = "Is this all there is?";
var patt1 = /[^h]/g;
var result = str.match(patt1);
console.log(result)
/*
[ 'I',
  's',
  ' ',
  't',
  'i',
  's',
  ' ',
  'a',
  'l',
  'l',
  ' ',
  't',
  'e',
  'r',
  'e',
  ' ',
  'i',
  's',
  '?' ]
*/