person = {
    name: 'Jake',

    showName() {
        console.log(`You name is ${this.name}`)
    }

    // showName: () => console.log(`You name is ${this.name}`)

    // showName: function () {
    //     console.log(`You name is ${this.name}`)
    // }
}
console.log(person.name)
person.showName()

