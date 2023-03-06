// nested function = function inside other function.
//              Outer functions have access to inner functions
//              Inner functions are "hidden" from outside the outer function
//              Used in closures (future topic)

let userName = 'Silas'
let inboxMessage = 3

login()

function login() {
    displayUserName()
    displayUserInbox()

    function displayUserName() {
        console.log(`Welcome ${userName}.`)
    }

    function displayUserInbox() {
        console.log(`You have ${inboxMessage} new messages`)
    }
}