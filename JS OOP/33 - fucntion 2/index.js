let a = {
    nome: 'Silas',
    dizerNome() {
        console.log('O nome deste objeto é ' + this.nome)
    }
}

a.dizerNome()


let b = {
    nome: 'João'
}
a.dizerNome.call(b)