// anonymous function

// named function
function function1() {
  console.log('inside function1')
}

// calling function by function name
// function1()

// function square(number) {
//   return number ** 2
// }

// unnamed / anonymous function
const square = function (number) {
  return number ** 2
}
// console.log('type of square = ', typeof square)
// console.log('square of 2 = ', square(2))
// console.log('square of 3 = ', square(3))
// console.log('square of 4 = ', square(4))

// named
// function add(p1, p2) {
//   return p1 + p2
// }

// anonymous
// const add = function (p1, p2) {
//   return p1 + p2
// }

// anonymous
// arrow/fat arrow function
const subtract = (p1, p2) => {
  return p1 - p2
}

// console.log('type of subtract = ', typeof subtract)
// console.log('500 - 200 = ', subtract(500, 200))

// arrow function having only one statement in the body part
const multiply = (p1, p2) => p1 * p2

// console.log('type of multiply = ', typeof multiply)
// console.log('12 * 5 = ', multiply(12, 5))

// no need of () when there is only one input parameter
const cube = n => n ** 3
console.log('type of cube = ', typeof cube)
console.log(cube)
console.log('cube of 2 = ', cube(2))
