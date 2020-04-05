// .
// Find a single character, except newline or line terminator
var str = "That's hot!";
var patt1 = /h.t/g;
var result = str.match(patt1);
console.log(result) // [ 'hat', 'hot' ]


// \w
// Find a word character
// The \w metacharacter is used to find a word character.
// A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
var str = "Give 100%!";
var patt1 = /\w/g;
var result = str.match(patt1);
console.log(result) // [ 'G', 'i', 'v', 'e', '1', '0', '0' ]

// \W
// Find a non-word character
var str = "Give 100%!";
var patt1 = /\W/g;
var result = str.match(patt1);
console.log(result) // [ ' ', '%', '!' ]

// \d
// Find a digit
var str = "Give 100%!";
var patt1 = /\d/g;
var result = str.match(patt1);
console.log(result) // [ '1', '0', '0' ]

// \D	Find a non-digit character
var str = "Give 100%!";
var patt1 = /\D/g;
var result = str.match(patt1);
console.log(result) // [ 'G', 'i', 'v', 'e', ' ', '%', '!' ]

// \s	Find a whitespace character
var str = "Is this all there is?";
var patt1 = /\s/g;
var result = str.match(patt1);
console.log(result) // [ ' ', ' ', ' ', ' ' ]

// \S	Find a non-whitespace character
var str = "Is this all there is?";
var patt1 = /\S/g;
var result = str.match(patt1);
console.log(result)
// [ 'I',
//   's',
//   't',
//   'h',
//   'i',
//   's',
//   'a',
//   'l',
//   'l',
//   't',
//   'h',
//   'e',
//   'r',
//   'e',
//   'i',
//   's',
//   '?' ]


// \b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
// Search for the pattern at the beginning of a word like this:
// \bLO
// Search for the pattern at the end of a word like this:
// LO\b
// If no match is found, it returns null.
var str = "HELLO, LOOK AT YOU";
var patt1 = /\bLO/;
var result = str.match(patt1);
console.log(result) // [ 'LO', index: 7, input: 'HELLO, LOOK AT YOU', groups: undefined ]

// \B	Find a match, but not at the beginning/end of a word
// Search for the pattern NOT at the beginning of a word like this:
// \BLO
// Search for the pattern NOT at the end of a word like this:
// LO\B
// If no match is found, it returns null.
var str = "HELLO, LOOK AT YOU!";
var patt1 = /\BLO/;
var result = str.match(patt1);
console.log(result)
// [ 'LO',
//   index: 3,
//   input: 'HELLO, LOOK AT YOU!',
//   groups: undefined ]

// \0	Find a NUL character
var str = "Visit W3Schools.\0Learn Javascript.";
var patt1 = /\0/;
var result = str.match(patt1);
console.log(result)
// [ '\u0000',
//   index: 16,
//   input: 'Visit W3Schools.\u0000Learn Javascript.',
//   groups: undefined ]

// \n	Find a new line character
var str = "Visit W3Schools.\nLearn Javascript.";
var patt1 = /\n/;
var result = str.match(patt1);
console.log(result)
// [ '\n',
//   index: 16,
//   input: 'Visit W3Schools.\nLearn Javascript.',
//   groups: undefined ]

// \f	Find a form feed character
var str = "Visit W3Schools.\fLearn Javascript.";
var patt1 = /\f/;
var result = str.match(patt1);
console.log(result)
// [ '\f',
//   index: 16,
//   input: 'Visit W3Schools.\fLearn Javascript.',
//   groups: undefined ]

// \r	Find a carriage return character
var str = "Visit W3Schools.\rLearn Javascript.";
var patt1 = /\r/;
var result = str.match(patt1);
console.log(result)
// [ '\r',
//   index: 16,
//   input: 'Visit W3Schools.\rLearn Javascript.',
//   groups: undefined ]

// \t	Find a tab character
var str = "Visit W3Schools.\tLearn Javascript.";
var patt1 = /\t/;
var result = str.match(patt1);
console.log(result)
// [ '\t',
//   index: 16,
//   input: 'Visit W3Schools.\tLearn Javascript.',
//   groups: undefined ]

// \v	Find a vertical tab character
var str = "Visit W3Schools.\vLearn Javascript.";
var patt1 = /\v/;
var result = str.match(patt1);
console.log(result)
// [ '\u000b',
//   index: 16,
//   input: 'Visit W3Schools.\u000bLearn Javascript.',
//   groups: undefined ]

// \xxx	Find the character specified by an octal number xxx
var str = "Visit W3Schools. Hello World!";
var patt1 = /\127/g;
var result = str.match(patt1);
console.log(result) // [ 'W', 'W' ]

// \xdd	Find the character specified by a hexadecimal number dd
var str = "Visit W3Schools. Hello World!";
var patt1 = /\x57/g;
var result = str.match(patt1);
console.log(result) // [ 'W', 'W' ]

// \udddd	Find the Unicode character specified by a hexadecimal number dddd
var str = "Visit W3Schools. Hello World!";
var patt1 = /\u0057/g;
var result = str.match(patt1);
console.log(result) // [ 'W', 'W' ]
