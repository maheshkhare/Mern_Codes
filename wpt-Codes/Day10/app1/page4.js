// object
// - using Object root function

function function1() {
  // Object is a root function given by JS
  const person1 = new Object()
  person1.name = 'person1'
  person1.address = 'pune'
  person1.phone = '+9134343'
  console.log(person1)
}

// function1()

function function2() {
  const car1 = new Object()
  car1.model = 'i20'
  car1.company = 'hyundai'
  car1.price = 7.5
  console.log(car1)

  const car2 = new Object()
  car2.model = 'i10'
  car2.company = 'hyundai'
  car2.price = 5.5
  console.log(car2)
}

function2()
