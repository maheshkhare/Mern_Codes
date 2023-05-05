// inheritance

class Person {
  constructor(name, address, age) {
    this.name = name
    this.address = address
    this.age = age
  }

  printInfo() {
    console.log(`name: ${this.name}`)
    console.log(`address: ${this.address}`)
    console.log(`age: ${this.age}`)
    console.log('')
  }
}

class Student extends Person {
  constructor(rollNo, name, address, age) {
    super(name, address, age)
    this.rollNo = rollNo
  }

  printInfo() {
    console.log(`roll no: ${this.rollNo}`)
    // console.log(`name: ${this.name}`)
    // console.log(`address: ${this.address}`)
    // console.log(`age: ${this.age}`)
    // console.log('')
    super.printInfo()
  }
}

const p = new Person('person1', 'pune', 20)
p.printInfo()

const s = new Student(1, 'student 1', 'mumbai', 26)
s.printInfo()
