/*
Ternary operator = Shortcut for an `if/else statement`
                    Takes 3 operators

                    1 - a condition with ?
                    2 - expression if True :
                    3 - expression if False

condition ? expressionIfTrue : expressionIfFalse
*/

let adult = checkAge(18)
console.log(adult)

function checkAge(age) {
    
    return age >= 18 ? true : false
}

console.log('==============================')