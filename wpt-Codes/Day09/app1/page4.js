// number variable
const number1 = 100
console.log('number1 = ', number1)
console.log('type of number1 = ', typeof number1)

let number2 = number1
console.log('number2 = ', number2)
console.log('type of number2 = ', typeof number2)

number2 = 500
console.log('number2 = ', number2)
console.log('number1 = ', number1)

// function
function function1() {
  console.log('inside function1')
}
console.log('function1 = ', function1)
console.log('type of function1 = ', typeof function1)

// function alias
// another name given to an existing function
const myFunction = function1
console.log('myFunction = ', myFunction)
console.log('type of myFunction = ', typeof myFunction)

function1()
myFunction()
