/* 
A variable is a container for storing data
A variable behaves as if it was the value that it contains

Two steps
1 - Declaration (var, let, const)
2 - Assignment (= assigmnet operator)


Data type
Number / String / boolean(true/false) 
*/

let firstName = 'Silas' // string
let age = 21; // number
let student = true // booleans

age = age + 1

console.log('Hello', firstName)
console.log('You are', age, 'years old');
console.log('Enrolled:', student)

window.document.getElementById('p1').innerHTML = 'Hello ' + firstName
window.document.getElementById('p2').innerHTML = 'You are ' + age + ' years old'

window.document.getElementById('p3').innerHTML = 'Enrolled: ' + student
