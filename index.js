/*
functions

Approach

done:
define the operator functions
define a string to num function

Todos:
define a calc function
create query selectors for event listeners
attach event listeners
create calculator logic function
create an update function using query selectors
*/

// Operators for calculator
const additon = (previous, next) => previous + next;
const subtract = (previous, next) => previous - next;
const multiply = (previous, next) => previous * next;
const divide = (previous, next) => previous / next;


// input converter
const stringToNum = (numberString) => Number(numberString);
// const test = stringToNum("45.77")
// console.log(typeof test, test);

// Calculator state, aka memory
let previousValue = 0;
let nextValue = 0;

// Function that takes two values and applies the operator function
// const calculate = (val)