// window = interface used to talk to the web browser
//          the DOM is a property of the window

console.dir(window)

console.log(window.innerWidth)
console.log(window.innerHeight)

console.log(window.outerWidth)
console.log(window.outerHeight)

console.log(window.scrollX)
console.log(window.scrollY)

console.log(window.location.href)
// window.location.href = 'https://www.youtube.com/'
console.log(window.location.hostname)
console.log(window.location.pathname)

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    // window.open('https://www.google.com.br/')
    // window.close()
    // window.print()
    // window.alert('Hello')
    // window.confirm('Press ok to continue')
    let age = window.prompt('Enter your age')
    if (age < 18) {
        window.alert('you must be 18+ to visit this site')
        window.close()
    } else {
        window.alert('Welcome')
    }
})