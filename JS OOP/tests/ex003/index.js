
// class + constructor inside a class
class Ninja {
    constructor(name) {
        this.name = name
        this.mostrarNome = function () {
            console.log(`Seu nome é ${this.name}`)
        }
    }

    atirarShuriken() {
        console.log(`${this.name} atirou shuriken`)
    }
}

let ninja1 = new Ninja('Silas')
console.log(ninja1.name)
ninja1.atirarShuriken()
ninja1.mostrarNome()

console.log('')

let ninja2 = new Ninja('Saulo')
console.log(ninja2.name)
ninja2.atirarShuriken()
ninja2.mostrarNome()

console.log('')
console.log('')

// constructor function
function Ninja2(name) {
    this.name = name
    this.atirarShuriken = () => {
        console.log(`${this.name} atirou shuriken`)
    }
}

let ninja3 = new Ninja2('Sasuke')
console.log(ninja3.name)
ninja3.atirarShuriken()