let number1 = ''
let number2 = ''
let operator = ''
let equation = ''
let currentNumber = ''
let secondOperatorCheck = false
let result;

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

const EquationText = document.querySelector('#full-equation')
const immediateText = document.querySelector('#immediate-text')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('#equals')

// function addDisplayText(e) {
//   equation += e.target.innerHTML
//   EquationText.innerHTML += e.target.innerText
//   // immediateText.innerHTML += e.target.innerText
// }

// function afterOperatorIsCalled(e) {
//   number1 = equation
// }

numberButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    secondOperatorCheck = false
    equation += e.target.innerHTML
    currentNumber += e.target.innerHTML
    EquationText.innerHTML += e.target.innerText
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (secondOperatorCheck) return;
    if (!number1) {
      number1 = +currentNumber
      currentNumber = ''
    } else if (!number2) {
      number2 = +currentNumber
      currentNumber = ''
    }

    if (number2) {
      number1 = result
      number2 = ''
    }
    equation += e.target.innerHTML
    operator = e.target.innerHTML
    EquationText.innerHTML += e.target.innerText
    secondOperatorCheck = true
  })
})

equalsButton.addEventListener('click', (e) => {
  if (number1 && currentNumber != '') {
    console.log(currentNumber)
    number2 = +currentNumber
    currentNumber = ''
    result = operate(number1, number2, operator)
    immediateText.innerHTML = result
  }
})
