/*
toLocaleString() = returns a string with a language sensitive representation of this.

number.toLocaleString(locale, {options})

'locale' = specify the language (undefined = default set in browser)
'options' = object with formatting options

*/

let myNumber = 123456.789
let cent = 0.1
let measure = 100

//myNumber = myNumber.toLocaleString("pt-BR") // BR - Portuguese
//myNumber = myNumber.toLocaleString("en-US") // US English
//myNumber = myNumber.toLocaleString("hi-IN") // Hindi
//myNumber = myNumber.toLocaleString("de-DE") // Standard German

// myNumber = myNumber.toLocaleString("en-US", {style: 'currency', currency: 'USD'})
// myNumber = myNumber.toLocaleString("hi-IN", {style: 'currency', currency: 'INR'})
// myNumber = myNumber.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})
// myNumber = myNumber.toLocaleString("de-BR", {style: 'currency', currency: 'EUR'})

// language code
// currency code

// cent = cent.toLocaleString(undefined, {style: 'percent'})

measure = measure.toLocaleString(undefined, {style: "unit", unit: "kilometer"}) // celsius kilometer mile kilogram meter


console.log(measure)