function function1() {
  const persons = [
    { name: 'person1', age: 20, address: 'pune', phone: '+9134434' },
    { name: 'person2', age: 15, address: 'mumbai', phone: '+9134435' },
    { name: 'person3', age: 30, address: 'pune', phone: '+9134436' },
    { name: 'person4', age: 10, address: 'nashik', phone: '+9134437' },
    { name: 'person5', age: 20, address: 'pune', phone: '+9134438' },
  ]

  // only first object
  const person = persons[0]
  console.log(`name: ${person.name}`)
  console.log(`age: ${person.age}`)
  console.log(`address: ${person.address}`)
  console.log(`phone: ${person.phone}`)

  console.log('-----------------------------------------')

  // select name, address from person
  // new array with person's name and address
  const persons1 = []
  for (const person of persons) {
    persons1.push({
      name: person.name,
      address: person.address,
    })
  }
  console.log(persons1)

  console.log('-----------------------------------------')

  // new array with person's name and address
  const persons2 = persons.map((person) => {
    return { name: person.name, address: person.address }
  })
  console.log(persons2)
}

// function1()

function function2() {
  const persons = [
    { name: 'person1', age: 20, address: 'pune', phone: '+9134434' },
    { name: 'person2', age: 15, address: 'mumbai', phone: '+9134435' },
    { name: 'person3', age: 30, address: 'pune', phone: '+9134436' },
    { name: 'person4', age: 10, address: 'nashik', phone: '+9134437' },
    { name: 'person5', age: 20, address: 'pune', phone: '+9134438' },
  ]

  // find out the persons who can vote
  const persons1 = []
  for (const person of persons) {
    if (person.age >= 18) {
      persons1.push(person)
    }
  }
  console.log(persons1)

  console.log('-----------------------------------------')

  console.log(persons.filter((person) => person.age >= 18))
}

// function2()

function function3() {
  const cars = [
    { model: 'i20', company: 'hyundai', price: 7.5 },
    { model: 'i10', company: 'hyundai', price: 5.5 },
    { model: 'fabia', company: 'Skoda', price: 6.5 },
    { model: 'x5', company: 'BMW', price: 40 },
    { model: 'Innova', company: 'Toyota', price: 20 },
    { model: 'XUV', company: 'Mahindra', price: 18 },
    { model: 'Range Rover Discovery', company: 'Range Rover', price: 86 },
  ]

  // array of cars having car's model and price
  console.log(
    cars.map((car) => {
      return { model: car.model, company: car.company }
    })
  )
  console.log('-----------------------------------------')

  // find the affordable cars (price <= 10)

  console.log(cars.filter((car) => car.price <= 10))

  console.log('-----------------------------------------')

  // find non-affordable car's model and company
  const result = cars
    .filter((car) => car.price > 10)
    .map((car) => {
      return { model: car.model, company: car.company }
    })
  console.log(result)
}

function3()
