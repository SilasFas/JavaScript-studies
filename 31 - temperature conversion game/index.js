
window.document.getElementById('SubmitButton').onclick = function () {
 
    let temp 

    if (window.document.getElementById('cButton').checked) {
        
        temp = window.document.getElementById('textBox').value
        temp = Number(temp)
        temp = toCelsius(temp)

        temp = Math.floor(temp)

        window.document.getElementById('result'). innerHTML = temp + 'ºC'
        
    } else if (document.getElementById('fButton').checked) {
     
        temp = window.document.getElementById('textBox').value
        temp = Number(temp)
        temp = toFahrenheit(temp)
        window.document.getElementById('result'). innerHTML = temp + 'ºF'

    } else{
        window.document.getElementById('result').innerHTML = 'Select a unit'
    }
}

function toCelsius(temp) {
    return (temp - 32) * (5/9)
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32
}