class Ninja {
    constructor(name, shuriken) {
        this.name = name
        this.shuriken = shuriken
    }

    atirarShuriken() {
        if (this.shuriken > 0) {
            console.log(`${this.name} atirou a shuriken numero ${this.shuriken}`)
            this.shuriken--
        } else {
            console.log('shuriken is over')
        }
    }


}

let ninja1 = new Ninja('Naruto', 5)
console.log(ninja1.name)

for (let i = 10; i > 0; i--) {
    ninja1.atirarShuriken()
}