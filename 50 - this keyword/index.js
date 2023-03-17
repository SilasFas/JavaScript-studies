// this = A reference to a particular object
//        the object depends on the immediate context


const car1 = {
    model: 'Mustang',
    color: 'red',
    year: 2023,

    drive : function () {
        console.log(`You drive the ${this.model}`)
        console.log(`You drive the ${car1.model}`)
    },

    brake : () => {console.log ('You step on the brakes')}
}
car1.drive()



console.log('')



const car2 = {
    model: 'Corvette',
    color: 'blue',
    year: 2024,

    drive : function () {
        console.log(`You drive the ${this.model}`)
        console.log(`You drive the ${car2.model}`)
    },

    brake : () => {console.log ('You step on the brakes')}
}
car2.drive()


console.log('')

this.name = 'Silas'
console.log(this.name)