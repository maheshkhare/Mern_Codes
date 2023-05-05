function function1() {
  const numbers = [10, 20, 30, 40, 50]

  // before pushing 60
  console.log(numbers)

  // add a value at the end of the array
  // append()
  numbers.push(60)

  console.log(numbers)

  // add a value at the end of the array
  numbers.push(70)

  console.log(numbers)
}

// function1()

function function2() {
  // ArrayList<Int> numbers = new ArrayList();
  const numbers = [10, 20, 30, 40, 50]
  console.log(numbers)

  // append a value
  // numbers.append(60);
  numbers.push(60)
  console.log(numbers)

  // remove the last value
  // numbers.remove(numbers.size() - 1)
  const value = numbers.pop()
  console.log('popped value = ', value)
  console.log(numbers)

  // remove the last value
  numbers.pop()
  console.log(numbers)
}

// function2()

function function3() {
  const countries = ['india', 'usa', 'china', 'uk', 'japan']
  console.log(countries)

  for (let index = 0; index < countries.length; index++) {
    const country = countries[index]
    if (country == 'china') {
      countries.splice(index, 1)
      break
    }
  }

  // remove china
  // remove (1) value from (2) position
  //   countries.splice(2, 1)
  console.log(countries)
}

// function3()

function function4() {
  let numbers1 = [10, 20]
  console.log(numbers1)

  numbers1 = 80
  console.log(numbers1)

  // numbers2 reference is constant
  // numbers2 can not refer another value
  const numbers2 = [10, 20]
  console.log(numbers2)

  //   numbers2 = 80
  //   console.log(numbers2)
}

// function4()
