// static keyword - belongs to the class, not the objects
//                  properties: useful for caches, fixed-configuration
//                  methods:    useful for utility functions 

class Car {

    constructor (model) {
        this.model = model;
    }
}

const car1 = new Car('Mustang')
const car2 = new Car('Corvette')
const car3 = new Car('BMW')