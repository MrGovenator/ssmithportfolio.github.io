class Calculator{
    constructor(previousTextElement, currentTextElement){
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }

    clear() {
        this.currentText = ""
        this.previousText = ""
        this.operation = undefined
    }
    
    delete() {
        this.currentText = this.currentText.toString().slice(0, -1)
    }
    
    appendNumber(number) {
        if (number === '.' && this.currentText.includes('.')) return
        this.currentText = this.currentText.toString() + number.toString()
    }
    
    chooseOperation(operation) {
        if(this.currentText === "") return
        if(this.previousText !== "") {
            this.compute()
        }
        this.operation = operation
        this.previousText = this.currentText
        this.currentText = ''
    }
    
    compute() {
        let computation
        const prev = parseFloat(this.previousText)
        const current = parseFloat(this.currentText)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+': 
                computation = prev + current
                break
            case '-': 
                computation = prev - current
                break
            case '*': 
                computation = prev * current
                break
            case '/': 
                computation = prev / current
                break
            default:
                return
            }
        this.currentText = computation
        this.operation = undefined
        this.previousText = ''
    }
    
    updateDisplay(){
        this.currentTextElement.innerText = this.currentText
        this.previousTextElement.innerText = this.previousText
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButtons = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear-all]')
const previousTextElement = document.querySelector('[data-previous]')
const currentTextElement = document.querySelector('[data-current]')

const calculator = new Calculator(previousTextElement, currentTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButtons.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.updateDisplay()
    calculator.delete()
})






