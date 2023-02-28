// arrray.forEach() = executes a provided callback function one for each array element

let students = ['silas', 'ana', 'pedro']
students.forEach(capitalize)
students.forEach(print)

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element) {
    console.log(element)
}