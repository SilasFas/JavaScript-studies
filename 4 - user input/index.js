// How to accept  user input

// EASY WAY WITH A WINDOW PROMPT

// let username = window.prompt("what's your name?")
// console.log('Your name is ', username, 'right?')


// HARD WAY WITH  HTML texbox

let username

window.document.getElementById('mybutton').onclick = function () {

    username = window.document.getElementById('mytext').value
    console.log(username)
    window.document.getElementById('myLabel').innerHTML = username

}