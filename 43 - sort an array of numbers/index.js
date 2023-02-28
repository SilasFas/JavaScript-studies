let grades = [100, 50, 90, 60 ,80 ,70]

gradesless = grades.sort(descendingSort)
gradesmore = grades.sort(ascendingSort)

grades.forEach(show)
grades.forEach(showmore)

function descendingSort(x, y) {
    return y - x
}

function ascendingSort(x, y) {
    return x - y
}

function show(element) {
    console.log(element)
}

function showmore(elementmore) {
    console.log(elementmore)
}