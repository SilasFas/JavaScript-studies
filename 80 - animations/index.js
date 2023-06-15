const btn = document.getElementById('btn')
const animation = document.getElementById('myDiv')

btn.addEventListener('click', begin)

// function begin() {
//     let timerID = null
//     let x = 0
//     let y = 0

//     timerID = setInterval(frame, 5)

//     function frame() {

//         if (x >= 200 || y >= 200) {
//             clearInterval(timerID)
//         } else {
//             x += 1
//             y += 1
//             animation.style.left = x + 'px'
//             animation.style.top = y + 'px'
//         }
//     }
// }







// function begin() {
//     let timerID = null
//     let degrees = 0

//     timerID = setInterval(frame, 5)

//     function frame() {

//         if (degrees >= 360) {
//             clearInterval(timerID)
//         } else {
//             degrees += 1
//             animation.style.transform = 'rotateZ(' + degrees + 'deg)'
//         }
//     }
// }






// function begin() {
//     let timerID = null
//     let degrees = 0
//     let x = 0
//     let y = 0

//     timerID = setInterval(frame, 5)

//     function frame() {

//         if (x >= 200 || y >= 200) {
//             clearInterval(timerID)
//         } else {
//             degrees += 5
//             x += 1
//             y += 1
//             animation.style.left = x + 'px'
//             animation.style.top = y + 'px'
//             animation.style.transform = 'rotateZ(' + degrees + 'deg)'
//         }
//     }
// }





function begin() {
    let timerID = null
    let scaleX = 1 // 1 = 100%
    let scaleY = 1 // 1 = 100%

    timerID = setInterval(frame, 5)

    function frame() {

        if (scaleX <= 0.1 || scaleY <= 0.1) {
            clearInterval(timerID)
        } else {
            scaleX -= 0.01 // 1%
            scaleY -= 0.01 // 1%
            animation.style.transform = 'scale(' + scaleX + ',' + scaleY + ')'
        }
    }
}