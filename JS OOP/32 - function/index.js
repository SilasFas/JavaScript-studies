function teste(a) {
    return a
}
console.log(teste('opa'))
console.log(teste.length)
console.log(teste.toString())

console.log(teste instanceof Function)
console.log(teste instanceof Object)


console.log('')


// não é usado
teste2 = new Function(
    'a',
    'return arguments'
)
console.log(teste2('silas')[0])