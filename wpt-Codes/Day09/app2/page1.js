function function1() {
  console.log('inside function1')
}

// function1()

function function2() {
  console.log('inside function2')
}

function execute(param) {
  console.log('inside execute')
  console.log('param = ', param)
  console.log('type of param = ', typeof param)

  // make a call to the function
  param()
}

// number
// execute(10)

// string
// execute('test')

// function alias
// const myFunction = function1
// execute(myFunction)

// param = function1
// execute(function1)
execute(function2)
