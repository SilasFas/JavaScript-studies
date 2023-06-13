let maquina = {
    material: 'açõ inox',
    equipamento: ['motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada: false,
    numeroDeMotores: 1,
}

console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipamento)
console.log(maquina.equipamento[2])
console.log(maquina.material)
console.log(maquina.vaiMontada)
console.log(maquina.numeroDeMotores)


for (let index = 0; index < maquina.equipamento.length; index++) {
    console.log(maquina.equipamento[index])
}

maquina.equipamento.map((peca, key) => {
    console.log(peca, key)
})

maquina.equipamento.forEach((produto) => {
    console.log(produto)
})

if (maquina.vaiMontada == false) {
    console.log('O comprador precisa montar a maquina')
} 