let carro = {
    tipo: 'SUV',
    ligar: function () {
        console.log('Ligou!')
    }
}

console.log(carro.tipo)

delete carro.tipo
delete carro.ligar

console.log(carro)