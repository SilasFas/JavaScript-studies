let teste1 = {
    a: 1
}

let teste2 = {
    a: 1
}

console.log(Object.is(teste1, teste2)) // === -> false
console.log(Object.is(NaN, NaN))
console.log(Object.is(+0, -0))

console.log(NaN === NaN)
console.log(+0 === -0)

let teste3 = teste1


console.log(Object.is(teste3, teste1)) // === -> true