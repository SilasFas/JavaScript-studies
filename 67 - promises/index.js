// promises = object that encapsulates the result of an asynchronous operation
//            let asynchronous methods return values like synchronous methods
//            "I promise to return something in the future"

//            The STATE is 'pending' then: 'fulfilled' or 'refected'
//            The RESULT is what can be returned 
//            2 parts producing & consuming  

// inside promise you can put: callback/ function expression / arrow function expression 
// Promise = you can pass 2 arguments (resolve and reject)

const promise = new Promise((resolve, reject) => {
    // producing code
    // put any asynchronous code within the promise
    let fileLoaded = true

    if (fileLoaded) {
        resolve("File loaded")
    } else {
        reject("File not loaded")
    }

})
// consuming code
promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error))


// another example:

const wait = time => new Promise((resolve) => {
    setTimeout(resolve, time)
})

wait(3000).then(() => console.log('Thanks for waiting!'))