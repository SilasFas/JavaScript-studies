console.log(new Date())
console.log(Date.now()) // data atual, porém em milisegundos (usado para calcular periodo entre datas)
console.log(new Date(2021, 10, 24))

let data = new Date()
console.log(data)
console.log(new Date(data.setMonth(0)))

console.log(new Date(Date.now()))

console.log(Date.parse(new Date(data.setMonth(0))))
