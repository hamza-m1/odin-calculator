const immediateText = document.querySelector('#immediate-text')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('#equals')
const clearButton = document.querySelector('#clear')
const backSpaceButton = document.querySelector('#backSpace')

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
      result = divide(number1, number2)
      break
  }
  return result
}

function evaluateAndShowResult() {
  if (number2 === 0 && operator === '/') {
    clearCalculator()
    immediateText.innerHTML = 'why :-|'
    return;
  }
  result = limitLength(operate(number1, number2, operator))
  immediateText.innerHTML = result
  number1 = +result
  number2 = ''
  resultCheck = true
  negativeCheck = false
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

function clearCalculator() {
  currentNumber = ''
  number1 = ''
  number2 = ''
  operator = ''
  result = ''
  immediateText.innerHTML = ''
}

function checkForMultipleDecimals(currentChar) {
  if (currentNumber.includes('.') && currentChar === '.') {
    return true
  }
}

numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (checkForMultipleDecimals(e.target.innerHTML)) return;
    if (resultCheck) {
      clearCalculator()
      resultCheck = false
    }
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
    resultCheck = false
  })
})

equalsButton.addEventListener('click', (e) => {
  if (number1 != '' && currentNumber != '') {
    number2 = +currentNumber
    currentNumber = ''
    evaluateAndShowResult()
  }
})

clearButton.addEventListener('click', () => {
  clearCalculator()
})

backSpaceButton.addEventListener('click', () => {
  if (currentNumber !== '') {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1)
    immediateText.innerHTML = currentNumber
  }
})

// console.log('current number', currentNumber)
// console.log('number2', number1)
// console.log('number2', number2)
// console.log('result', result)
// console.log('operator', operator)