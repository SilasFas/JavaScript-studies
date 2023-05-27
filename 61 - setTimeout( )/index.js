// setTimeout() = invokes a function after a number of milliseconds
//                asynchronous function (doesn't pause execution)

//callback / function expression / arrow fucntion

let item = 'car'
let price = 420.69

let timer1 = setTimeout(first, 3000, item, price)
let timer2 = setTimeout(second, 6000)
let timer3 = setTimeout(third, 9000)

function first(item, price) {
    alert(`Buy this ${item} for $${price}`)

}

function second() {
    alert(`This is not a scam!`)
}

function third() {
    alert(`DO IT!`)
}

document.getElementById('btn').onclick = function () {

    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    alert('Thanks for buying')
}