// array
// - collection of values

function function1() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50]
  console.log(numbers)

  // array of strings
  const countries = ['india', 'usa', 'uk', 'japan']
  console.log(countries)
}

// function1()

function function2() {
  const numbers = [10, 20, 30, 40, 50]

  // numbers.length => returns the number of values in that array => 5

  // traditional for loop
  for (let index = 0; index < numbers.length; index++) {
    console.log('value at index = ', numbers[index])
  }
}

// function2()

function function3() {
  const numbers = [10, 20, 30, 40, 50]

  // for..of loop
  // java: for (int number : numbers) { ... }
  for (const number of numbers) {
    console.log('number = ', number)
  }
}

// function3()

function function4() {
  const countries = ['india', 'usa', 'uk', 'japan']

  //   for (let index = 0; index < countries.length; index++) {
  //     const country = countries[index]
  //     console.log('country = ', country)
  //   }

  for (const country of countries) {
    console.log('country -> ', country)
  }
}

// function4()

function function5() {
  const numbers = [10, 20, 30, 40, 50]

  // for..in loop
  for (const index in numbers) {
    console.log('index = ', index)
    console.log('value at index = ', numbers[index])
  }
}

// function5()
