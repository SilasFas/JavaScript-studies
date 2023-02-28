/*
! NOT logical operator
Typically used to reverse a condition's boolenan value 
true -> false    false -> true

*/

let temp = 15
let sunny = true
// if my temperature is not greater than zero...  
if (!(temp > 0)) {
    console.log("It's cold outside")
} else {
    console.log("It's warm outside")
}

//if it's not sunny
if (!sunny) {
    console.log("It's cloudy outside")
} else {
    console.log("It's sunny outside")
}