function criarCarro(modelo, portas, aro, tetoSolar) {
    return {
        modeloDoCarro: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,

        ligarCarro: function () {
            console.log(`Carro ligado`)
        },
        TemTetoSolar: function () {
            if (this.tetoSolar == true) {
                console.log(`tem teto sola`)
            } else {
                console.log(` Não tem teto sola`)
            }
        }
    }
}

let ferrari = criarCarro('Ferrari', 4, 18, true)
console.log(ferrari.modeloDoCarro)
ferrari.ligarCarro()
ferrari.TemTetoSolar()