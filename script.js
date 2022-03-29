const operandButton = document.getElementsByClassName("operand");
const display = document.getElementById("display");
let displayValue = 0;
display.innerHTML = displayValue;
// console.log(operandButton);
for (let i = 0; i < operandButton.length; i++) {
  operandButton[i].addEventListener("click", isClicked);
}
function isClicked() {
  console.log("button is clicked!");
}

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
