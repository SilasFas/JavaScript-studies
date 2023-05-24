// static keyword - belongs to the class, not the objects
//                  properties: useful for caches, fixed-configuration
//                  methods:    useful for utility functions 

class Car {

    numberOfCars = 0
    constructor (model) {
        this.model = model;
        this.numberOfCars += 1;
    }
    
}

const car1 = new Car('Mustang')
const car2 = new Car('Corvette')
const car3 = new Car('BMW')

console.log(car1.numberOfCars)
console.log(car2.numberOfCars)
console.log(car3.numberOfCars)



console.log('')
console.log('')



class Carro {

    static numeroDeCarros = 0

    constructor (modelo) {
        this.modelo = modelo;
        Carro.numeroDeCarros += 1;
    }

    static começarCorrida (){
        console.log('3...2...1...GO!')
    }
    
}

const carro1 = new Carro('Mustang')
const carro2 = new Carro('Corvette')
const carro3 = new Carro('BMW')

console.log(Carro.numeroDeCarros)

Carro.começarCorrida()