// variables
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const operatorButton = document.getElementsByClassName("operator");
const operandButton = document.getElementsByClassName("operand");
const display = document.getElementById("display");
let displayValue;

// The click event to clear the display
clearButton.addEventListener("click", clearButtonIsClicked);

// The click event to display the numbers
for (let i = 0; i < operandButton.length; i++) {
  operandButton[i].addEventListener("click", operandButtonIsClicked);
}

// The click event to return an operator
for (let i = 0; i < operatorButton.length; i++) {
  operatorButton[i].addEventListener("click", operatorButtonIsClicked);
}

// The click event that calls the operate function
equalsButton.addEventListener("click", operate);

// The function that returns and displays the numbers
function operandButtonIsClicked() {
  displayValue = display.textContent += this.value;
  if (displayValue.length === 11) {
    for (let i = 0; i < operandButton.length; i++) {
      operandButton[i].disabled = true;
    }
  }
  let number = Number(displayValue);
  return number;
}
let valueOfButton = operandButtonIsClicked;

// The function that clears the numbers from the display
function clearButtonIsClicked() {
  display.textContent = "";
}

// The function that returns an operator
function operatorButtonIsClicked() {
  let operator = this.value;
  return operator;
}
let operatorSelected = operatorButtonIsClicked;

// operation functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  // if (operator === "+") {
  //   return add(num1, num2);
  // } else if (operator === "-") {
  //   return subtract(num1, num2);
  // } else if (operator === "*") {
  //   return multiply(num1, num2);
  // } else if (operator === "/") {
  //   if (num2 === 0) {
  //     return undefined;
  //   } else {
  //     return divide(num1, num2);
  //   }
  // }
}
