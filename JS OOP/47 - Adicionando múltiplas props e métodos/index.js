function Carro(marca, preco) {
    this.marca = marca
    this.preco = preco
}

Carro.prototype = {
    rodas: 4,
    portas: 4,
    ligar() {
        console.log('O carro ligou')
    }
}

Carro.prototype.aro = 20

let bwm = new Carro('BWM', 1000000)

console.log(bwm)
bwm.ligar()
console.log(bwm.aro)