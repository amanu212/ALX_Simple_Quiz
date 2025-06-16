// JavaScript functionality for the simple calculator

// Arithmetic operation functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 !== 0 ? num1 / num2 : 'Error';
}

// Helper function to get input values and convert to numbers
function getInputValues() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  return [number1, number2];
}

// Display result in the calculator
function displayResult(result) {
  document.getElementById('calculation-result').textContent = result;
}

// Event listeners for each operation button
document.getElementById('add').addEventListener('click', () => {
  const [num1, num2] = getInputValues();
  displayResult(add(num1, num2));
});

document.getElementById('subtract').addEventListener('click', () => {
  const [num1, num2] = getInputValues();
  displayResult(subtract(num1, num2));
});

document.getElementById('multiply').addEventListener('click', () => {
  const [num1, num2] = getInputValues();
  displayResult(multiply(num1, num2));
});

document.getElementById('divide').addEventListener('click', () => {
  const [num1, num2] = getInputValues();
  displayResult(divide(num1, num2));
});