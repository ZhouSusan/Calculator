// Grabs the nodes in the dom to be referenced later.
const numberInput = document.getElementsByClassName("num");
const calcFunction = document.getElementsByClassName("func");
const calcOperator = document.getElementsByClassName("operator");

// Operators for calculator
const additon = (previous, next) => previous + next;
const subtract = (previous, next) => previous - next;
const multiply = (previous, next) => previous * next;
const divide = (previous, next) => previous / next;

// input converter
const stringToNum = (numberString) => Number(numberString);

// Calculator state, aka memory
let previousValue = "0"; // Should always be a number string
let nextValue = "0"; //Should always be a number string
let operatorToUse = ""; //Should always be a string

// resets all of the variable states
const allClear = () => {
  previousValue = "0";
  nextValue = "0";
  operatorToUse = "";
};
// updates the operatorToUse variable
const setOperator = (operatorString) => {
  if (operatorString === "%") operatorToUse = "divide";
  if (operatorString === "+") operatorToUse = "add";
  if (operatorString === "-") operatorToUse = "minus";
  if (operatorString === "X") operatorToUse = "multiply";
}

// Checks if operatorToUse is an empty string and removes the last value of either previous/next variable
const deleteOperation = () => {
  if (operatorToUse === "") {
    previousValue = previousValue.substring(0, previousValue.length - 1);
    if (previousValue === "") previousValue = "0";
  } else {
    nextValue = nextValue.substring(0, nextValue.length - 1);
    if (nextValue === "") nextValue = "0";
  }
}

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
  console.log("Your new total is: ", previousValue);
}



// Adding event listeners
// event listeners for input buttons
for (let i = 0; i < numberInput.length; i++) {
  const node = numberInput[i];
  node.addEventListener("click", (event) => {
    const stringNumber = event.target.innerText;
    performUpdate(stringNumber);
  });
}
// event listeners for AC and delete buttons
for (let i = 0; i < calcFunction.length; i++) {
  const node = calcFunction[i];
  const innerText = node.innerText;
  if (innerText === "AC") {
    node.addEventListener("click", () => allClear())
  }
  else if (innerText === "DEL") {
    node.addEventListener("click", () => deleteOperation());
  }
  else if (innerText === "=") {
    node.addEventListener("click", () => evaluate(operatorToUse));
  }
}
// event listeners for operator buttons. add, sub, multiply, divide
for (let i = 0; i < calcOperator.length; i++) {
  const node = calcOperator[i];
  node.addEventListener("click", (event) => {
    const operatorString = event.target.innerText;
    setOperator(operatorString);
  });
}