/*
functions

Approach

done:
define the operator functions
define a string to num function
define a calc function
create calculator logic function

Todos:
create query selectors for event listeners
attach event listeners
create an update function using query selectors
*/

// Operators for calculator
const additon = (previous, next) => previous + next;
const subtract = (previous, next) => previous - next;
const multiply = (previous, next) => previous * next;
const divide = (previous, next) => previous / next;


// input converter
const stringToNum = (numberString) => Number(numberString);

// Calculator state, aka memory
let previousValue = "0";
let nextValue = "0";
let operatorToUse = "";

// mutates the previousValue/nextValue by concating the number string
const updatePreviousValue = (string) => {
  previousValue = previousValue + string;
}
const updateNextValue = (string) => {
  nextValue = nextValue + string;
}

// Chooses to update previous or next value depending if operatorToUse is an empty string
performUpdate = (string) => {
  if (operatorToUse === "") {
    updatePreviousValue(string);
  } else {
    updateNextValue(string);
  }
};

// Function that takes two values and applies the operator function
const calculate = (previous, next, operator) => operator(previous, next);

// This function will mutate previousValue and nextValue by applying the defined functions above it.
const evaluate = (operation) => {
  //todo: add a variable to stage the converted prev and next vals;
  const convertedPrev = stringToNum(previousValue);
  const convertedNext = stringToNum(nextValue);

  switch (operation){
    case "add":
      // do stuff
      previousValue = calculate(convertedPrev, convertedNext, additon) + "";
      break;
    case "minus":
      // do stuff;
      previousValue = calculate(convertedPrev, convertedNext, subtract) + "";
      break;
    case "multiply":
      // do stuff
      previousValue = calculate(convertedPrev, convertedNext, multiply) + "";
      break;
    case "divide":
      // do stuff
      previousValue = calculate(convertedPrev, convertedNext, divide) + "";
      break;
    default:
      console.log("Whoopsies");
      throw new Error("Using illegal operator");
  };
}

const numberInput = document.getElementsByClassName("num");
const calcFunction = document.getElementsByClassName("func");
const calcOperator = document.getElementsByClassName("operator");

console.log(numberInput);
previousValue = "2";
nextValue = "19";

for (let i = 0; i < numberInput.length; i++) {
  const node = numberInput[i];
  node.addEventListener("click", (event) => {
    const stringNumber = event.target.innerText;
    performUpdate(stringNumber);
    // console.log(previousValue)
  });
}