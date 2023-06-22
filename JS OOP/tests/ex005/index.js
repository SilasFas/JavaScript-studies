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

let ninja1 = new Ninja('Naruto', 1)
console.log(ninja1.name)



console.log('')



let inimigo = new Ninja('Orochimaru', 1)

console.log(inimigo.name)
console.log(inimigo.vivo)

if (ninja1.atirarShuriken()) {
    inimigo.vivo = false
}
console.log(inimigo.vivo)

