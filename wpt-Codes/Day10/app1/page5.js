// object
// - using constructor function

// by convention, the constructor function
// always starts with upper case letter
function Person(name, age, address) {
  this.name = name
  this.age = age
  this.address = address
}

// const p1 = new Person('person1', 20, 'pune')
// console.log(p1)

// const p2 = new Person('person2', 40, 'mumbai')
// console.log(p2)

// constructor function for Mobile with model, company and price
function Mobile(model, company, price) {
  this.model = model
  this.company = company
  this.price = price
}

const m1 = new Mobile('iPhone', 'Apple', 144000)
console.log(m1)

const m2 = new Mobile('s21', 'Samsung', 110000)
console.log(m2)
