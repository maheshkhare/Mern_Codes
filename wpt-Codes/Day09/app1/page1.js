// parameterless
// function declaration and definition
function myfunction1() {
  console.log('inside myfunction')
}

// function call
// myfunction1()

// parameterized
function myFunction2(p1) {
  console.log('p1 = ', p1)
  console.log('type of p1 = ', typeof p1)
}

// p1 = undefined
// myFunction2()

// p1 = 10 (number)
// myFunction2(10)

// p1 = 'test' (string)
// myFunction2('test')

// p1 = true (boolean)
// myFunction2(true)

// p1 = { name: 'person1', age: 30 } (object)
// myFunction2({ name: 'person1', age: 30 })

// parametrized
function myFunction3(p1, p2) {
  const addition = p1 + p2
  console.log('addition = ', addition)
}

// mathemaical addition
// myFunction3(10, 20)

// string concatinition
// myFunction3('sunbeam ', ' institute')

// string concatinition
// if one of the operands is string then other operand also gets
// converted to string and then string concatinition will be used
// myFunction3(10, '20')

// function with parameters having default value
// - if value for a param is not passed then the default value will be used
// - if value for a param is passed then function will use the passed value
// - default values must be present from the right to left
function myFunction4(p1, p2, p3 = 30, p4 = 40, p5 = 50) {
  console.log('p1 = ', p1)
  console.log('p2 = ', p2)
  console.log('p3 = ', p3)
  console.log('p4 = ', p4)
  console.log('p5 = ', p5)
}

// myFunction4(10, 20)
// myFunction4(100, 200, 300)
// myFunction4(100, 200, 300, 400)
