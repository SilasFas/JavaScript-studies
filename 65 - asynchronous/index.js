// synchronous code = In an ordered sequence. 
//                    Step-by-step linear instructions
//                    (start now, finish now)
//
// asynchronous code = Out of sequence.  
//                     Ex: Access a databse
//                         Fetch a file
//                         Tasks that take time
//                     (start now, finish sometime later)

// synchronous code
console.log("START")
console.log("THIS IS synchronous")
console.log("END")


console.log("")
console.log("")


// asynchronous code
console.log("START")
setTimeout(() => console.log("THIS IS asynchronous"), 5000)
console.log("END")