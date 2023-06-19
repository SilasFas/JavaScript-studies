let pessoa = {
    nome: 'Silas',
    getNome() {
        console.log(`Esse é o nome do objeto: ${this.nome}`)
    }
}

let pessoa2 = {
   
    age: 15
}

Object.assign(pessoa2, pessoa)

console.log(pessoa2)

pessoa2.getNome()

pessoa2.nome = "Vitor"

console.log(pessoa)