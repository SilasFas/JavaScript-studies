pessoa = {
    nome: 'Silas',
    idade: '26',
    MoraEmRibeiraoPires: true,
    cores: ['azul', 'preto', 'branco']
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.MoraEmRibeiraoPires)

pessoa.cores.map((event) => {
    console.log(event)
})