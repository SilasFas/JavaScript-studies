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
    }
}

person.drive()

console.log(person.age)

person.birthday()
console.log(person.age)

person.birthday()
console.log(person.age)

person.tellAge()

person.tellAge2()

let calculator = {

    number: 0,
    sum(a, b) {
        this.number = a + b
    },

    sub: (c) => { return calculator.number -= c },
}

calculator.sum(5, 15)
console.log(calculator.number)

calculator.sub(20)
console.log(calculator.number)

