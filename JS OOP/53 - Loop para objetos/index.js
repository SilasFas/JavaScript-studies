function Carro(marca, preco, cor, aro) {
    this.marca = marca
    this.preco = preco
    this.cor = cor
    this.aro = aro
}

let fusca = new Carro('VW', 10000, 'verde', 18)

for (prop in fusca) {
    console.log(`${prop} => ${fusca[prop]}`)
}