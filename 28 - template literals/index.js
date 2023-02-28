/*
Template literals = delimited with (``) and it allows embedded variables an expressions 
*/

let userName = 'Silas'
let items = 3
let total = 75

let text =  `Hello ${userName}! <br> You have ${items} items in your cart.<br> Your total is ${total}.`
//console.log(text)

window.document.getElementById('mylabel').innerHTML = text