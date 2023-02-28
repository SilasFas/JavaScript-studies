let prices = [5, 10, 15, 20, 25]

prices.push(30)

/*
// for loop
for (let counter = 0; counter < prices.length; counter +=1) {

    console.log(prices[counter])
}

console.log(prices)
*/

// for of statement

for (let price of prices) {
    console.log(price)
}

