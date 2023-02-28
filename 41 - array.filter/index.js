// array.filter() = creates a new array with all elements that pass the test provided by a function 



let ages = [18, 16, 21, 17, 19, 90]
let adults = ages.filter(chackage)

adults.forEach(show)

function chackage(element) {
    return element >= 18
}

function show(element) {
    console.log(element)
}

