/*
array = variable that can store multiples values
*/

let fruits = ['apple', 'orange', 'banana']

//fruits[2] = 'coconut'

// fruits.push() - coloca um valor dentro do array (no final) // add an element
fruits.push('lemon')

fruits.pop() // removes last element

// fruits.unshift() add an element to the beggining of the array 
fruits.unshift('mango')

// fruits.shift() removes element from the beggging of the array
fruits.shift()

console.log(fruits)

console.log('======================')

let names = ['Silas', 'Camila', 'Pedro', 'Samantha']

let length = names.length
let index = names.indexOf('Camila')

console.log(names)
console.log(length)
console.log(index)
console.log(names[1])