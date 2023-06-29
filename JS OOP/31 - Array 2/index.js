let a = [0, 1, 2]
let b = new Array(3, 4, 5)

console.log(a.length)
console.log(b.length)

a.push(3)
b.push(6)

// array.prototype.push() 

console.log(a)
console.log(b)

a.pop(3)
b.pop(6)

console.log(a)
console.log(b)

let c = {}

console.log(c.push(4)) // push != Object -> push == Array