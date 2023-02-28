// function = Define code one, and use it many times. To perform some code, call function name. 


startProgram()

function startProgram() {
    let userName = 'Silas'
    let age = 25

    happyBirthday(userName, age)
}


function happyBirthday(userName, age) {
    console.log('Happy birthday to you!')
    console.log('Happy birthday to you!')
    console.log('Happy birthday dear', userName)
    console.log('Happy birthday to you!')
    console.log(`You are ${age} years old!`)
}

