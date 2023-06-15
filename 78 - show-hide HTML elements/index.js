const btn = document.querySelector('#btn')
const img = document.querySelector('#img')

// btn.addEventListener('click', () => {
//     if (img.style.display == 'none') {
//         img.style.display = 'block'
//     } else {
//         img.style.display = 'none'
//     }
// })



btn.addEventListener('click', () => {
    if (img.style.visibility == 'hidden') {
        img.style.visibility = 'visible'
    } else {
        img.style.visibility = 'hidden'
    }
})