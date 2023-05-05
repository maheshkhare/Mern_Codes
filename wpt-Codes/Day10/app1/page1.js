function function1() {
  const numbers = [1, 2, 3, 4, 5]
  console.log(numbers)
  console.log(numbers.map((n) => n ** 2))
}

// function1()

function function2() {
  const numbers = [1, 2, 3, 4, 5]
  console.log(numbers)
  console.log(numbers.filter((n) => n % 2 == 0))
}

// function2()

function function3() {
  const numbers = [1, 2, 3, 4, 5]
  numbers.forEach((n) => {
    console.log('n = ', n)
  })
}

function3()
