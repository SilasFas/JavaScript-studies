// constructors = a special method of a class,
//                accepts arguments and assigns properties
//                use a constructor for unique properties

class Student {

    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    grade = '8th'

    study = () => console.log(`${this.name} is studying`)
}

const student1 = new Student('Jake', 25, 3.2)
const student2 = new Student('Dustin', 27, 3.0)

console.log(student1.name)
console.log(student1.age)
console.log(student1.gpa)

console.log(student2.name)
console.log(student2.age)
console.log(student2.gpa)


console.log(student1.grade)

student1.study()


console.log('')
console.log('')

class Player {

    constructor(name, score) {
        this.name = name
        this.score = score
    }

    exit() {
        console.log(`${this.name} has left the game`)
    }

    pause = () => console.log(`${this.name} paused the game`)

    display = () => console.log(`${this.name} has ${this.score} points`)
} 

const player1 = new Player('Silas', 10)
const player2 = new Player('Pedro', 15)

console.log(player1.name)
console.log(player1.score)

console.log(player2.name)
console.log(player2.score)

player1.exit()
player2.display()
player2.pause()