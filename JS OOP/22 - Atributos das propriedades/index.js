let pessoa = {
    nome: 'Silas',
}

// pessoa -> object

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))
console.log(Object.getOwnPropertyDescriptor(window, 'scrollX'))