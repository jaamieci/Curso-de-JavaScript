'use strict';

let invoiceNum = '1350'
console.log(`Invoice Number: ${invoiceNum}`);
//Invoice Number: 1350 

console.log(`Invoice Number: \${invoiceNum}`)//Invoice Number: ${invoiceNum}

//'' ``
let message = `A
B
C`;
console.log(message);
/*
Usando el template
A
B
C
*/

console.log(`Invoice Number: ${"INV-" + invoiceNum}`)//Invoice Number: INV-1350

function showMessage(message) {
    let invoiceNum = '99';
    console.log(message);
}

showMessage(`Invoice Number: ${invoiceNum}`);// Invoice Number: 1350

/*
function processInvoice(segments) {
    console.log(segments);
}

processInvoice `template`; //["template", raw: Array(1)]
*/

function processInvoice(segments, ...values) {
    console.log(segments);
    console.log(values);
}

let amount = '2000';
processInvoice `Invoice: ${invoiceNum} for ${amount}`;
//["Invoice: ", " for ", "", raw: Array(3)]
//["1350", "2000"]


