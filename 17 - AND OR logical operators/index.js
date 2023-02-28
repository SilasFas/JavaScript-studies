/*

Gives us the ability to check more than one condition concurrrently.
&& AND (BOTH conditions must be true)
|| OR (Either condition can be true)

*/

let temperature = 20
let = sunny = true
if (temperature > 0 && temperature < 30 && sunny) {
    console.log('The weather is good!')
} else {
    console.log('The weather is bad!')
}


let temp = 30
if (temp <= 0 || temp >= 30) {
    console.log('The weather is bad!')
} else {
    console.log('The weather is good!')
}