// break = breaks out of a loop entirely
// continue = skip an iteration of a loop


for (let index = 1; index <= 20; index++) {

    if (index == 13) {
        break // from the number 13 above you don't hvae numbers anymore
    }
    console.log(index)
}

console.log('Finish')

for (let index = 1; index <= 20; index++) {

    if (index == 13) {
        continue // from the number 13 above you don't hvae numbers anymore
    }
    console.log(index) // in this case we counted from 1 to 20, but we skip the number 13 
}

console.log('Finish')