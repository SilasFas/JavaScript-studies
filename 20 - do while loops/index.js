//do while loop = do somwthing, then check the condition, then repeat if condition is true.

let userName

do {
    userName = window.prompt('Enter your name')
} while (userName == '' || userName == null);

console.log('Hello,', userName)