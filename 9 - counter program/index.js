let count = 0

window.document.getElementById('decreaseBtn').onclick = function () {

    count -= 1
    window.document.getElementById('countLabel').innerHTML = count
}

window.document.getElementById('resetBtn').onclick = function () {

    count = 0
    window.document.getElementById('countLabel').innerHTML = count
}

window.document.getElementById('increaseBtn').onclick = function () {

    count += 1
    window.document.getElementById('countLabel').innerHTML = count
}