let ninja = {
    calsse: 'profissional',
    arma: 'shuriken',
    atirarArma: function () {
        console.log(`Atirou! ${this.arma}`)
    }
}

let ninja2 = {
    calsse: 'profissional',
    arma: 'Kunai',
    atirarArma: function () {
        console.log(`Atirou! ${this.arma}`)
    },
    atirarDuasVezes: function () {
        for (i = 2; i > 0; i--) {
            this.atirarArma()
        }
    }
}

ninja.atirarArma()
ninja2.atirarArma()
ninja2.atirarDuasVezes()