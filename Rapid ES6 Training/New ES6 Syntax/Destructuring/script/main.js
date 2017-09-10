'use strict';

/*
let salary = ['32000', '50000', '75000'];
let [low, average, high] = salary;
console.log(average); //5000
*/

/*
let salary = ['32000', '50000'];
let [low, average, high] = salary;
console.log(high); //undefined
*/

/*
let salary = ['32000', '50000', '75000'];
let [low,  , high] = salary;
console.log(high);//75000

*/

/*
let salary = ['32000', '50000', '75000'];
let [low, ...remaining] = salary;
console.log(remaining); // ["5000", "75000"]
*/

/*
let salary = ['32000', '50000'];
high por defecto = 88000
let [low, average, high = '88000'] = salary;
console.log(high);//88000

*/

/*
let salary = ['32000', '50000', ['88000', '99000']];

let [low, average, [actualLow, actualHigh]] = salary;
console.log(actualLow);//88000
*/

/*
let salary = ['32000', '50000'];
let low, average, high;
[low, average, high = '88000'] = salary;
console.log(high);//88000
*/

/*
function reviewSalary([low, average], high = '88000') {
    console.log(average);
}
reviewSalary(['32000', '50000']);//50000
*/

/*
let salary = {
    low: '32000',
    average: '50000',
    high: '75000'
};

let {low, average, high} = salary;
console.log(high);//75000
*/

/*
let salary = {
    low: '32000',
    average: '50000',
    'high': '75000'
};

let {
    low: newLow,
    average: newAverage,
    high: newHigh
} = salary;

console.log(newHigh);//75000
*/

/*
let salary = {
    low: '32000',
    average: '50000',
    'high': '75000'
};

let newlow, newAverage, newHigh;
{low: newLow, average: newAverage, high: newHigh} = salary;
console.log(newHigh);//Unexpected token 
*/

/*
let salary = {
    low: '32000',
    average: '50000',
    'high': '75000'
};

let newLow, newAverage, newHigh;
({ low: newLow, average: newAverage, high: newHigh } = salary);
console.log(newHigh); //75000
*/

/*
let [maxCode, minCode] = 'AZ';
console.log(`min: ${minCode} max: ${maxCode}`); //min: Z max: A
*/
