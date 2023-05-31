// await = makes an async function wait for a Promise

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