// Encontrar hipotenusa


let a 
let b
let c
/*
a = window.prompt('Enter side A')
a = Number(a)

b = window.prompt('Enter side B')
b = Number(b)

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

console.log('Side C: ', c)
*/

window.document.getElementById('submitButoon'). onclick = function() {

    a = window.document.getElementById('aTextBox').value
    a = Number(a)

    b = window.document.getElementById('bTextBox').value
    b = Number(b) 

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    window.document.getElementById('cLabel').innerHTML = 'Side C: ' + c


}