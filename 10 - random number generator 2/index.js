let x
let y
let z

window.document.getElementById('rollButton').onclick = function () {

    x = Math.floor(Math.random() * 6) + 1
    y = Math.floor(Math.random() * 6) + 1
    z = Math.floor(Math.random() * 6) + 1

    window.document.getElementById('xLabel').innerHTML = x
    window.document.getElementById('yLabel').innerHTML = y
    window.document.getElementById('zLabel').innerHTML = z
}


// Neste código estou criando 3 dados de 1 á 6 e fazendo eles "rolarem" números aleatórios.