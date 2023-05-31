// async = makes a function return a Promise

async function loadFile() {
    let fileLoaded = true

    if (fileLoaded) {
        return "File loaded"
    } else {
        throw "File NOT loaded"
    }
}

loadFile()
    .then((value) => console.log(value))
    .catch((error) => console.log(error))

// Another way example: 

function anotherExample() {
    let fileLoaded = false

    if (fileLoaded) {
        return Promise.resolve("File loaded")
    } else {
        return Promise.reject("File NOT loaded")
    }
}

anotherExample()
    .then((value) => console.log(value))
    .catch((error) => console.log(error))