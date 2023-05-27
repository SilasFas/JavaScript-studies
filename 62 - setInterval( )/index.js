// setInterval() = invokes a function repeatedly after a number of milliseconds
//                 asynchronous function (doesn't pause execution)
// callback / function expression / arrow fucntion
let count = 0

let max = window.prompt("Count up to what number?")
max = Number(max)

const MyTimer = setInterval(countUp, 1000)

function countUp() {
    count+=1
    console.log(count)
    if ( count >= max) {
        clearInterval(MyTimer)
    }
}