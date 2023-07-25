let equipamentosDoCarro = {
    preco: 10000,
    cor: 'verde',
    aro: 18,
    calota: true
}

function Carro(marca) {
    this.marca = marca
}

Carro.prototype = equipamentosDoCarro

let fusca = new Carro('VW')

console.log(fusca.aro)
console.log(equipamentosDoCarro.isPrototypeOf(fusca))