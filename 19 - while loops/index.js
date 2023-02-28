// While loop = repeat some code while some consition is true, potentiallly infinite.

let userName = ""

while (userName == "" || userName == null) {
    userName = window.prompt('Enter your name')
}
console.log('Hello,', userName)

