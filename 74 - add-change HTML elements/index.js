// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1")
// nameTag.innerHTML = window.prompt('enter you name')
// document.body.append(nameTag)


const myList = document.querySelector('#fruits')
const listItem = document.createElement("li")
listItem.textContent = "mango"
//myList.append(listItem) puts the new element in the end of the list
//myList.prepend(listItem) // makes the element be the fisrt odf the list
myList.insertBefore(listItem, myList.getElementsByTagName('li')[2])