let number1 = ''
let number2 = ''
let operator = ''
let equation = ''
let currentNumber = ''
let secondOperatorCheck = false
let result;




function numberButtonsFunction(e) {
    secondOperatorCheck = false
    equation += e.target.innerHTML
    currentNumber += e.target.innerHTML
    EquationText.innerHTML += e.target.innerText
}

function operatorButtonsFunction(e) {
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
}

function equalsButtonFunction(e) {
    if (number1 && currentNumber != '') {
        console.log(currentNumber)
        number2 = +currentNumber
        currentNumber = ''
        result = operate(number1, number2, operator)
        immediateText.innerHTML = result
    }
}