let firstNum = 0
let secNum = 0
let result = 0
let operationIndex = 0
let repeatIndex = 0
const buttons = document.querySelector('.buttons').children
const calcScreen = document.querySelector('.calc-screen')
const ansField = calcScreen.querySelector('#answerArea')
const signField = calcScreen.querySelector('#signArea')
const prevNumField = calcScreen.querySelector('#prevNumArea')
const operationWithNums = (operationIndex) => {

    secNum = Number.parseFloat(ansField.textContent)
    switch (operationIndex) {
        case 1:
            return firstNum + secNum

        case 2:
            return firstNum - secNum

        case 3:
            return firstNum * secNum

        case 4:
            return firstNum / secNum
    }
}


for (let button of buttons) {

    button.addEventListener('click', () => {
        if (button.textContent === '0' ||
            button.textContent === '1' ||
            button.textContent === '2' ||
            button.textContent === '3' ||
            button.textContent === '4' ||
            button.textContent === '5' ||
            button.textContent === '6' ||
            button.textContent === '7' ||
            button.textContent === '8' ||
            button.textContent === '9') {
            if (ansField.textContent === '0' || ansField.textContent === '')
                ansField.textContent = button.textContent
            else {
                ansField.textContent += button.textContent
            }
        }
        switch (button.textContent) {
            case 'ac':
                ansField.textContent = ansField.textContent.substring(0, ansField.textContent.length - 1)
                break;
            case '.':
                if (ansField.textContent.indexOf('.') === -1) {
                    ansField.textContent += '.'
                }
                break;
            case '%':
                ansField.textContent = (Number.parseFloat(ansField.textContent) / 100).toString()
                break;

            case'+/-':
                if(ansField.textContent[0]!=='-')
                ansField.textContent = '-' + ansField.textContent
                else ansField.textContent=ansField.textContent.substring(1)
                break;

            case '+':
            case '-':
            case 'X':
            case '/':

                signField.textContent = button.textContent
                repeatIndex++
                if (repeatIndex > 1) {
                    firstNum = operationWithNums(operationIndex)
                    prevNumField.textContent = firstNum
                } else {
                    firstNum = Number.parseFloat(ansField.textContent)
                }
                switch (button.textContent) {
                    case '+':
                        operationIndex = 1
                        break;
                    case '-':
                        operationIndex = 2
                        break;
                    case 'X':
                        operationIndex = 3
                        break;
                    case '/':
                        operationIndex = 4
                        break;
                }
                ansField.textContent = '0'
                break;
            case '=':

                result = operationWithNums(operationIndex)
                ansField.textContent = result
                signField.textContent = ''
                prevNumField.textContent = ''
                repeatIndex = 0
                break;
        }


    })
}




