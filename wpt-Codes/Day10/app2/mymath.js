const pi = 3.14

function add(p1, p2) {
  console.log(`addition = ${p1 + p2}`)
}

function subtract(p1, p2) {
  console.log(`subtraction = ${p1 - p2}`)
}

function multiply(p1, p2) {
  console.log(`multiplication = ${p1 * p2}`)
}

function divide(p1, p2) {
  console.log(`division = ${p1 / p2}`)
}

// console.log(module)

// export functions/constants/variables for others
module.exports = {
  myadd: add,
  mymultiply: multiply,
  subtract: subtract,
  divide: divide,
  pi: pi,
}
