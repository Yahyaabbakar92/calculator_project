// variables
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const operatorButton = document.getElementsByClassName("operator");
const operandButton = document.getElementsByClassName("operand");
const display = document.getElementById("display");
let displayValue;
let operator;
let solution;

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

// The function that returns and displays the numbers
function operandButtonIsClicked(e) {
  displayValue = display.textContent += e.target.value;
  if (displayValue.length === 11) {
    for (let i = 0; i < operandButton.length; i++) {
      operandButton[i].disabled = true;
    }
  }
  return displayValue;
}

// The function that clears the numbers from the display
function clearButtonIsClicked() {
  display.textContent = "";
}

// The function that returns an operator
function operatorButtonIsClicked(e) {
  return (operator = e.target.value);
}

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
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    if (num2 === 0) {
      return undefined;
    } else {
      return divide(num1, num2);
    }
  }
}
