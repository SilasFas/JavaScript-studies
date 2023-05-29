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

// date.setFullYear(2025)
// date.setMonth(11)
// date.setDate(31)
// date.setHours(23)
// date.setMinutes(1)
// date.setSeconds(30)
// date.setMilliseconds(0)

// let ms = date.getMilliseconds()
// date = date.toLocaleDateString()
// window.document.getElementById('time').innerHTML = ms

function formatDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return `${day}/${month}/${year}`
}

window.document.getElementById('time').innerHTML = formatTime(date)

function formatTime(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let amOrPm = hours >= 12 ? "pm" : "am"

    hours = (hours % 12) || 12

    return `${hours}:${minutes}:${seconds}`
}