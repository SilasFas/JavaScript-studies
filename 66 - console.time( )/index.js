// console.time() = Starts a timer you can use to 
// tranck how long an operation takes. 
// Give each timer a unique name.

//start
console.time("Response time")

// alert("Click the ok button")

setTimeout(() => console.log('Hello'), 3000)

//end
console.timeEnd("Response time")