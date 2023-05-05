// nested/local/inner function

function outerFunction() {
  console.log('inside otuerFunction')

  // local variable declared by outerFunction
  const num = 100
  console.log('num = ', num)

  // local function
  // nested function
  function innerFunction() {
    console.log('inside inner function')
  }

  // can access innerFunction as its a local member of outerFunction
  innerFunction()
}

outerFunction()

// num is a local member of outerFunction
// console.log('outside of outerFunction, num = ', num)

// innerFunction is a local member of outerFunction
// innerFunction()
