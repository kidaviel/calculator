const numbers = document.querySelectorAll(".number-operator");
let currentOperand = document.querySelector(".current-operand");
let previousOperand = document.querySelector(".previous-operand");
const clearCalculator = document.querySelector(".clear-operator");
const add = document.querySelector(".add-operator");
const subtract = document.querySelector(".subtract-operator");
const multiply = document.querySelector(".multiply-operator");
const divide = document.querySelector(".divide-operator");
const decimal = document.querySelector(".decimal-operator");
const equal = document.querySelector(".equal-operator");
let memory = [];
let bool = true;

// Function to append clicked number onto the current operand display
for (const number of numbers) {
  number.addEventListener("click", () =>
    currentOperand.textContent === "0"
      ? (currentOperand.textContent = number.textContent)
      : (currentOperand.textContent += number.textContent)
  );
}

// Function to clear the calculator
clearCalculator.addEventListener("click", () => {
  currentOperand.textContent = "0";
  previousOperand.textContent = "0";
  memory = [];
});

// Operation Functions
// add.addEventListener("click", () => {
//   memory.push(currentOperand.textContent, "+");
//   currentOperand.textContent = "0";
//   for (const mem in memory)
//     previousOperand.textContent === "0"
//       ? (previousOperand.textContent = memory[mem])
//       : (previousOperand.textContent += memory[mem]);
// });

add.addEventListener("click", () => {
  if (bool === true) {
    memory.push(currentOperand.textContent, "+");
    currentOperand.textContent = "0";
    previousOperand.textContent = memory.join("");
  } else {
    memory.push("+");
    currentOperand.textContent = "0";
    previousOperand.textContent = memory.join("");
    bool = true;
  }
});

subtract.addEventListener("click", () => {
  if (bool === true) {
    memory.push(currentOperand.textContent, "-");
    currentOperand.textContent = "0";
    previousOperand.textContent = memory.join("");
  } else {
    memory.push("-");
    currentOperand.textContent = "0";
    previousOperand.textContent = memory.join("");
    bool = true;
  }
});

multiply.addEventListener("click", () => {
  if (bool === true) {
    memory.push(currentOperand.textContent, "*");
    currentOperand.textContent = "0";
    previousOperand.textContent = memory.join("");
  } else {
    memory.push("*");
    currentOperand.textContent = "0";
    previousOperand.textContent = memory.join("");
    bool = true;
  }
});

divide.addEventListener("click", () => {
  if (bool === true) {
    memory.push(currentOperand.textContent, "/");
    currentOperand.textContent = "0";
    previousOperand.textContent = memory.join("");
  } else {
    memory.push("/");
    currentOperand.textContent = "0";
    previousOperand.textContent = memory.join("");
    bool = true;
  }
});

decimal.addEventListener("click", () =>
  currentOperand.textContent === "0"
    ? ""
    : (currentOperand.textContent += decimal.textContent)
);

equal.addEventListener("click", () => {
  memory.push(currentOperand.textContent);
  previousOperand.textContent = memory.join("");
  currentOperand.textContent = eval(memory.join(""));
  bool = false;
});
