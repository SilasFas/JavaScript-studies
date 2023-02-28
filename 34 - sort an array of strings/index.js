let fruits = ['banana', 'apple', 'orange', 'mango', 'kiwi']


console.log(fruits)
for (let fruit of fruits) {
    console.log(fruit)
}

console.log('=====ordem alfabpetica=====')

fruits.sort()

for (let fruit of fruits) {
    console.log(fruit)
}

console.log('=====ordem alfabpetica reversa=====')

fruits.sort().reverse()
for(let fruit of fruits) {
    console.log(fruit)
}