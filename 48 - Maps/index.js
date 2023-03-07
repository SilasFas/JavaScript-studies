// Map = object that holds key-value pairs of any data type.

const store = new Map([
    ['t-shirt', 20],
    ['jeans', 30],
    ['socks', 10],
    ['underware', 50]
])

// display the store items
store.forEach((value, key) => console.log(`${key} $${value}`))

//get method
let shoppingCart = 0
shoppingCart += store.get('t-shirt')
shoppingCart += store.get('underware')
console.log(shoppingCart)

// set method = add a pair to the Map
store.set('hat', 40)

// delete method
store.delete('hat')

store.forEach((value, key) => console.log(`${key} $${value}`))

//has method = check if there's a key
console.log(store.has('hat'))

//size method = check the size or length of my Map
console.log(store.size)