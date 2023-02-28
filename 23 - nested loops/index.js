// nested loops = a loop inside the another loop

let symbol = window.prompt('Enter with a symbol to use')
let rows = window.prompt('Enter # of rows')
let columns = window.prompt('Enter # of columns')




for (let i = 1; i <= rows; i++) { // row
    for (let j = 1; j <= columns; j++){ // columns
        window.document.getElementById('myRectangle').innerHTML += symbol
    }
    document.getElementById('myRectangle').innerHTML += "<br>"
}