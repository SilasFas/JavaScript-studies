// const element = document.getElementById('btn')
// const element = document.body
// const element = document.getElementById("text")
const element = document.getElementById('mydiv')

element.onclick = doSomething
element.onload = doSomething
element.onchange = doSomething
element.onmousemove = doSomething
element.onmouseout = doSomethingElse
element.onmousedown = doSomething
element.onmouseup = doSomethingElse

function doSomething() {
    // alert("you did something")
    element.style.backgroundColor = 'red'
}

function doSomethingElse() {
    // alert("you did something")
    element.style.backgroundColor = 'black'
}