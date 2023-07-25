function Carro(marca, preco) {
    this.marca = marca
    this.preco = preco
}

Carro.prototype.rodas = 4
Carro.prototype.ligar = function () {
    console.log('Ocarro ligou')
}

let bwm = new Carro('BWM', 1000000)

console.log(bwm)
console.log(bwm.rodas)
bwm.ligar()
