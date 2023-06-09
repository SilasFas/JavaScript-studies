document.body.style.backgroundColor = "lightblue"

let element = document.querySelector('#fruit')
let child = element.children[1]
child.style.backgroundColor = 'lightgreen'

let elementt = document.getElementById('dessert')
let children = Array.from(elementt.children)

children.forEach((child) => {
    child.style.backgroundColor = 'lightgray'
})



// let child = element.firstElementChild
// console.log(child)
// child.style.backgroundColor = 'lightgreen'

//let child = element.lastElementChild



// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// array.from(.children)