// await = makes an async function wait for a Promise
// You can onlu use the wait keyword within an async function
// Eliminate .then methods

async function loadFile() {
    let fileLoaded = true

    if (fileLoaded) {
        return "File loaded"
    } else {
        throw "File NOT loaded"
    }
}

async function startProcess() {

    try {
        let message = await loadFile()
        console.log(message)
    } 
    catch (error) {
        console.log(error)
    }   
}

startProcess()













// await = makes an async function wait for a Promise

// async function loadFile() {
//     let fileLoaded = true

//     if (fileLoaded) {
//         return "File loaded"
//     } else {
//         throw "File NOT loaded"
//     }
// }

// loadFile()
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error))