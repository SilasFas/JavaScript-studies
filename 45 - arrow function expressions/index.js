// arrow function expression = compact alternative to a traditional function expression
// =>


/*
const greeting = (userName) => console.log(`Hello ${userName}`)
greeting('Silas')
*/

/*
let percent = (x, y) => x / y * 100
console.log(`${percent(75, 100)}%`)
*/

/*
// Normal function
let grades = [100, 50, 90, 60, 80, 70]

grades.sort(descending) 
grades.forEach(print)

function descending (x, y) {
    return y - x
}

function print(element) {
    console.log(element)
}
*/


/*
// Function expression
let grades = [100, 50, 90, 60, 80, 70]

grades.sort(function (x, y) {
    return y - x
}) 
grades.forEach(function (element) {
    console.log(element)
})
*/



// Arrow functions


let grades = [100, 50, 90, 60, 80, 70]

grades.sort((x, y) => y - x) 
grades.forEach((element) => console.log(element))
