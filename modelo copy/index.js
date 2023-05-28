// The Date object is used to work with dates and times

let date = new Date()
// let date = new Date(0) // initial reference point
// let date = new Date(2023, 0, 1, 2, 3, 4, 5)
// let date = new Date("January 1, 2023 00:00:00")
// let year = date.getFullYear()
// let dayOfMonth = date.getDate()
// let dayOfWeek = date.getDay()
// let Month = date.getMonth()
// let Hour = date.getHours()
// let Minutes = date.getMinutes()
// let seconds = date.getSeconds()
let ms = date.getMilliseconds()

date = date.toLocaleDateString()

window.document.getElementById('time').innerHTML = ms