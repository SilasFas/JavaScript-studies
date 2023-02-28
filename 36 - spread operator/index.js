// spread operator = allows an iterable such as an 
// ...               array or string to be expanded 
//                   in places where zero or more 
//                   arguments are expected 
//                   (unpacks the elements)

/*
let numbers = [1, 2, 3, 5, 6, 7, 8, 9]
let userName = 'Silas'

console.log(...numbers)
console.log(...userName)

let maximum = Math.max(...numbers)
console.log(maximum)

console.log(typeof(numbers))
*/

let class1 = ['Silas', 'Pedro', 'Vitor']
let class2 = ['Daniella', 'Dayanne', 'Ana']

class1.push(...class2)

console.log(class1)
console.log(...class1)