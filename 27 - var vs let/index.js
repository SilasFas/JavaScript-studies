/*
variable scope = where a variable is accessible

let = variables are limited to block scope {}
var = variables are limited to a function(){}

global variable - is declared outside any fucntion
if global, var WILL CHANGE browser's window properties 

it's good practice to use let

W atch the followiing this video for further information
https://www.youtube.com/watch?v=8dWL3wF_OMw&t=10529s
*/



something()

function something() {
    
    for (var i = 1; i <= 3; i +=1) {
    
    }
    console.log(i)
}

