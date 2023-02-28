// useful string properties and methods

let userName = 'Silas'

console.log(userName.length) // mostra a quantidade de todos os algarismos que tem.
console.log(userName.charAt(2)) // você coloca o indice e ele mostra o que tem nesse indice (começa com o 0)
console.log(userName.indexOf('a'))// você coloca a letra e ele mostra qual é o indice
console.log(userName.lastIndexOf('s')) // localiza qual é a posição da ultima ocorrência do valor pesquisado

console.log('================')

let name = '   Saulo   '
name = name.trim() // tira espaços vazios dos lados
console.log(name)


console.log('================')

let other = 'Sara'
other = other.toUpperCase() // coloca tudo em maiusculo (toLowerCase - minusculo)
console.log(other)

console.log('================')

let phoneNumber = '123-456-789'
phoneNumber = phoneNumber.replaceAll("-", "/")
console.log(phoneNumber)