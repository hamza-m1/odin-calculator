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

function operate(number1, number2, operator) {
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

const EquationText = document.querySelector('#full-equation')
const immediateText = document.querySelector('#immediate-text')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('#equals')

let number1 = ''
let number2 = ''
let currentNumber = ''
let operator = ''
let result;

numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    currentNumber += e.target.innerHTML
    immediateText.innerHTML = currentNumber
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (!number1) {
      number1 = +currentNumber
      currentNumber = ''
    } else if (!number2 && currentNumber != '') {
      number2 = +currentNumber
      currentNumber = ''
      evaluateAndShowResult()
    }
    operator = e.target.innerHTML
  })
})

function evaluateAndShowResult() {
  result = limitLength(operate(number1, number2, operator))
  immediateText.innerHTML = result
  number1 = +result
  number2 = ''
}

function limitLength(string) {
  if (typeof string === 'number') {
    string = string.toString()
  }
  if (string.length > 12) {
    string = string.substring(0, 12)
  }
  return string
}

equalsButton.addEventListener('click', (e) => {
  if (number1 != '' && currentNumber != '') {
    number2 = +currentNumber
    currentNumber = ''
    evaluateAndShowResult()
  }
})

// console.log(equation)
// console.log(`number 1: ${number1}`)
// console.log(`number 2: ${number2}`)