// class
// Person -> name, address, phone

class Person {
  // name
  // address
  // phone
  // age

  constructor(name, address, phone, age) {
    console.log('inside constructor')
    this.name = name
    this.address = address
    this.phone = phone
    this.age = age
  }

  // method
  printInfo() {
    console.log(`name: ${this.name}`)
    console.log(`address: ${this.address}`)
    console.log(`phone: ${this.phone}`)
  }

  getDescription() {
    console.log(
      `${this.name} is of ${this.age} years old and he lives in ${this.address}`
    )
  }
}

const p = new Person('person1', 'pune', '+9132443', 20)
p.printInfo()
p.getDescription()

// class Mobile {
//   constructor() {
//     console.log('inside constructor')
//   }
// }
