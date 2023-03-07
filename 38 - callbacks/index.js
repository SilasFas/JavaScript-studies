// callback = a function passed as an argument to another function.

// Ensures that a function is not going to run before a task is complited.
// It helps us develop asynchrnous code.
// (When one function has to wait for another function) 
// that helps us avoid errros and potential problems
// Ex. Wait for a file to load


/*
let total = sum(2, 3)
displayDOM(total)

function sum(x, y) {
    let result = x + y
    return result
}
*/

sum(2, 3, displayDOM)


function sum(x, y, CallingThefunction) {
    let result = x + y
    CallingThefunction(result)
}

/*
function display(output) {
    console.log(output)
}
*/

function displayDOM(output) {
    window.document.getElementById('silas').innerHTML = output
}

