class Calculator {

    constructor() {
        this.upperValue = document.querySelector('#upper-number')
        this.resultValue = document.querySelector('#result-number')
        this.reset = 0
    }

    checkLastDigit(input, upperValue, reg) {

        if ((
            !reg.test(input) &&
            !reg.test(upperValue.substr(upperValue.length - 1))
        )) {
            return true
        } else {
            return false
        }
    }

    clearValues() {
        this.upperValue.textContent = '0'
        this.resultValue.textContent = '0'
    }

    btnPress() {

        let input = this.textContent
        let upperValue = calculator.upperValue.textContent

        //check if it is only numbers
        var reg = new RegExp('^\\d+$')

        // clear the display
        if (input == 'AC') {
            calculator.clearValues()
        } else {
            //check weather there's need to add or not 
            if (calculator.checkLastDigit(input, upperValue, reg)) {
                return false
            }
            // add black splace to the operators
            if (!reg.test(input)) {
                input = ` ${input} `
            }

            if (upperValue == '0') {
                calculator.upperValue.textContent = input

            } else {
                calculator.upperValue.textContent += input
            }
        }
    }
}

// Create a new object
let calculator = new Calculator

// select all buttons
let buttons = Array.from(document.querySelectorAll('.btn'));

//Map all buttons and add event listeners
buttons.map((button) => {
    button.addEventListener('click', calculator.btnPress);
});