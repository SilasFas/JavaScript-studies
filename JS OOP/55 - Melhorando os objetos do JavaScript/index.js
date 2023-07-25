Array.prototype.checkLength = function () {
    return this.length
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(a.checkLength())




Array.prototype.somaDoisPrimeiros = function () {
    return this[0] + this[1]
}

console.log(a.somaDoisPrimeiros())

