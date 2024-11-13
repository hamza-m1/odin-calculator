const displayText = document.querySelector('#immediate-text')
const buttons = document.querySelectorAll('button')

let number1 = ''
let number2 = ''
let currentNumber = ''
let operator = ''
let result;
let resultCheck = false

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
      if (number2 === 0) {
        alert('Cannot divide by zero')
        result = number1
      } else {
        result = divide(number1, number2)
      }
      break
  }
  return result
}

function updateDisplay(value) {
  displayText.innerHTML = value
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

function evaluateAndShowResult() {
  result = limitLength(operate(number1, number2, operator))
  updateDisplay(result)
  number1 = +result
  number2 = ''
  resultCheck = true
}

function clearCalculator() {
  currentNumber = ''
  number1 = ''
  number2 = ''
  operator = ''
  result = ''
  updateDisplay('')
}

function checkForMultipleDecimals(currentChar) {
  if (currentNumber.includes('.') && currentChar === '.') {
    return true
  }
}

function handleNumber(number) {
  if (checkForMultipleDecimals(number)) return;
  if (resultCheck) {
    clearCalculator()
    resultCheck = false
  }
  currentNumber += number
  updateDisplay(currentNumber)
}

function handleOperator(op) {
  if (!number1) {
    number1 = +currentNumber
    currentNumber = ''
  } else if (!number2 && currentNumber != '') {
    number2 = +currentNumber
    currentNumber = ''
    evaluateAndShowResult()
  }
  operator = op
  resultCheck = false
}

function handleEquals() {
  if (number1 != '' && currentNumber != '') {
    number2 = +currentNumber
    currentNumber = ''
    evaluateAndShowResult()
  }
}

function handleBackSpace() {
  if (currentNumber !== '') {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1)
    updateDisplay(currentNumber)
  }
}

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (button.classList.contains('number')) {
      handleNumber(e.target.innerHTML)
    } else if (button.classList.contains('operator')) {
      handleOperator(e.target.innerHTML)
    } else if (button.id === 'equals') {
      handleEquals()
    } else if (button.id === 'clear') {
      clearCalculator()
    } else if (button.id === 'backSpace') {
      handleBackSpace()
    }
  })
})