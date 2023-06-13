let person = {

    name: 'Silas',

    age: 26,

    speak: function () {
        console.log("Oi meu nome é Silas");
    },

    birthday() {
        this.age += 1
    },

    tellAge() {
        console.log(`My age is ${this.age}.`)
    },

    tellAge2: () => console.log(`My age is ${person.age}.`),

    drive: function name() {
        if (this.age > 18) {
            console.log('You can drive')
        } else {
            console.log("You can't drive")
        }
    },

    features: {
        license: true,
        wallet: ['money', 'document', 'coin']
    }
}

person.features

console.log(person.features.license)

console.log(person.features.wallet[2])

person.features.wallet.map((obj) => {
    console.log(obj)
})