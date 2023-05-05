// object
// - object literal (JSON)
// - using Object root function
// - using constructor function
// - [using class]

function function1() {
  // object created using object literal
  const p1 = {
    name: 'person1',
    age: 30,
    address: 'pune',
  }

  console.log(p1)
  console.log('type of p1 = ', typeof p1)
}

// function1()

function function2() {
  // array of objects
  const persons = [
    { name: 'person1', age: 20, address: 'pune', phone: '+9134434' },
    { name: 'person2', age: 30, address: 'mumbai', phone: '+9134435' },
    { name: 'person3', age: 40, address: 'pune', phone: '+9134436' },
    { name: 'person4', age: 50, address: 'nashik', phone: '+9134437' },
    { name: 'person5', age: 60, address: 'pune', phone: '+9134438' },
  ]

  // console.log(persons)

  for (const person of persons) {
    // console.log(person)
    console.log(`name: ${person.name}`)
    console.log(`age: ${person.age}`)
    console.log(`address: ${person.address}`)
    console.log(`phone: ${person.phone}`)
    console.log('----------------------------')
  }
}

// function2()

function function3() {
  const num = 100
  const person = {
    name: 'person1',
    age: 20,
    address: 'pune',
    phone: '+9134434',
  }

  // console.log('num = ', num)

  // interpolation
  console.log(`num = ${num}`)

  // person details
  // console.log(`name = ${person.name}`)
  // console.log(`age = ${person.age}`)
  // console.log(`address = ${person.address}`)
  // console.log(`phone = ${person.phone}`)

  // person details
  // console.log(`name = ${person['name']}`)
  // console.log(`age = ${person['age']}`)
  // console.log(`address = ${person['address']}`)
  // console.log(`phone = ${person['phone']}`)

  // java: int num = 100;
  // java: var num: int = 100

  const num1 = 100
  const num2 = 200

  console.log(`addition = ${num1 + num2}`)
  console.log(`square of ${num1} = ${num1 ** 2}`)
  console.log(`${num1} * ${num2} = ${num1 * num2}`)
}

// function3()
