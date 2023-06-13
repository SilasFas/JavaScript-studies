let carro = {
    tipo: 'SUV',
}
carro.portas = 4

console.log(carro)

if (carro.tipo == 'SUV') {
    carro.tetosolar = true
}

carro.acelerar = function() {
    console.log("Let's go!")
}

carro.acelerar ()