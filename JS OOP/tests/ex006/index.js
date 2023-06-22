// Classes
class Ninja {
    constructor(name, shuriken) {
        this.name = name
        this.shuriken = shuriken
    }

    vivo = true

    atirarShuriken() {
        if (this.shuriken > 0) {
            console.log(`${this.name} atirou a shuriken numero ${this.shuriken}`)
            this.shuriken--
            return true
        } else {
            console.log('shuriken is over')
            return false
        }
    }
}

let ninja1 = new Ninja('Naruto', 1) // object
console.log(ninja1.name)

let inimigo = new Ninja('Orochimaru', 1) // object
console.log(inimigo.name)



// Helpers
// Verifica se ninja1 e inimigo são objetos identicos
function compareObj() {
    if (Object.is(ninja1, inimigo)) { // Object.is(ninja1 === inimigo)
        console.log('positivo')
    } else {
        console.log('negativo')
    }
}
compareObj()

// instanceOf - objeto, Classe
// Verifica se ninja1 e inimigo tem o mesmo PAI (Ninja)
function comparareInstObj(objeto, classe) {

        if (objeto instanceof classe) {
            console.log('positivo')
        } else {
            console.log('negativo')
        }
    } 
comparareInstObj(ninja1, Ninja)
