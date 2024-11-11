const displayText = document.querySelector('#display')
const inputButtons = document.querySelectorAll('.displayable')


function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

let number1;
let number2;
let operator;
let equation = ''

function operate(number1, number2, operator) {
  result = 0
  switch (operator) {
    case '+':
      result = add(number1, number2)
      break;
    case '-':
      result = subtract(number1, number2)
      break;
    case '*':
      result = multiply(number1, number2)
      break;
    case '/':
      result = divide(number1, number2)
      break
  }
  return result
}

inputButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    displayText.innerHTML += e.target.innerText
    equation += e.target.innerHTML
    console.log(equation)
  })
})
