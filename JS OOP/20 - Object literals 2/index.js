let rodas = 4
let portas = 4
let aro = 20
let tetoSolas = true

let carro = {
    rodas,
    portas,
    aro,
    tetoSolas,
    bancoDeCouro: true,
    ligar() {
        console.log('O carro ligou')
    },
    desligar: function () {
        console.log('O carro desligou')
    }
}

console.log(carro)