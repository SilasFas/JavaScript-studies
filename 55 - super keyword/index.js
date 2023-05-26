// Super = Refers to the parent class.
//         Commonly used to involke constructor of a parent class.

class Animal {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Rabbit extends Animal {

    constructor(name, age, ruSpeed) {
        super(name, age)
        this.flySpeed = ruSpeed
    }
}

class Fish extends Animal {

    constructor(name, age, swimSpeed) {
        super(name, age)
        this.flySpeed = swimSpeed
    }
}

class Hawk extends Animal {

    constructor(name, age, flySpeed) {
        super(name, age)
        this.flySpeed = flySpeed
    }
}

const rabbit = new Rabbit('Rabbit', '10', 40)
const fish = new Fish('Fish', '2', 80)
const hawk = new Hawk('Hawk', '3', 100)

console.log(fish.age)
console.log(rabbit.name)
console.log(hawk.flySpeed)