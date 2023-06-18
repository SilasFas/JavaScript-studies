function Ninja(nome, arma) {
    this.nome = nome
    this.arma = arma
}

const naruto = new Ninja('Naruto', 'shuriken')
const rocklee = new Ninja('Rock Lee', 'punhos')
const closeDoNaruto = new Ninja('Naruto', 'shuriken')
const cloneVerdadeiroDoNaruto = naruto


console.log(naruto === rocklee)
console.log(naruto === closeDoNaruto)
console.log(naruto === cloneVerdadeiroDoNaruto)