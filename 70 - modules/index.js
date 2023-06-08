// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code to use whenever we want
// Great for any general utility values and functions
// Helps to make your code more reusable and maintanable 
// Think of madules as seperate chapters of a book

// <script type="module" src="index.js"></script>

// import { PI, getCircumference, getArea } from "./math_util.js";

// console.log(PI)

// let circumference = getCircumference(10)
// console.log(circumference)

// let area = getArea(10)
// console.log(area)



// Another way to import
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI)

let circumference = MathUtil.getCircumference(10)
console.log(circumference)

let area = MathUtil.getArea(10)
console.log(area)