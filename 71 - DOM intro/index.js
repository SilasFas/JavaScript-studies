// DOM = Document Object Model (API)
//       An interface for changing the content of a page

console.log(document)
console.dir(document) // list all of the properties of the DOM

console.log(document.title)
console.log(document.URL)

document.title = "Tittle goes here"

document.body.style.backgroundColor = "skyblue"

document.getElementById("MyDiv"). innerHTML = "Hello"