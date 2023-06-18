function criarArvore(especie, temFruto) {
    return {
        especie: especie,
        temFruto: temFruto
    }
}

function Heroi(nome, classe) {
    this.nome = nome
    this.classe = classe
}

let laranjeira = criarArvore('laranjeira', true)
let jaspion = new Heroi('japion', 'robô')

console.log(laranjeira instanceof criarArvore)
console.log(laranjeira instanceof Object)
console.log(jaspion instanceof Heroi)