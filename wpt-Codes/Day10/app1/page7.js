// rest operator

function function1() {
  const person = {
    name: 'person1',
    address: 'pune',
  }

  console.log(person)

  const person1 = {
    name: person.name,
    address: person.address,
    age: 20,
    email: 'person1@test.com',
  }

  console.log(person1)

  console.log('----------------------------------------')

  // rest operator
  const person2 = {
    ...person,
    age: 20,
    email: 'person1@test.com',
  }

  console.log(person2)
}

// function1()

function function2() {
  const mobile = {
    model: 'oneplus 8',
    company: 'oneplus',
    price: 45000,
    color: 'red',
  }

  console.log(mobile)

  //   const mobile2 = {
  //     model: mobile.model,
  //     comapny: mobile.company,
  //     price: mobile.price,
  //     color: mobile.color,
  //     os: 'oxygen 10',
  //   }

  const mobile2 = {
    ...mobile,
    os: 'oxygen 10',
  }

  console.log(mobile2)

  console.log('----------------------------------------')

  const mobile3 = {
    ...mobile2,
    price: 48000, // override details while using existing values
    cpu: 'Sanpdragon 865',
  }
  console.log(mobile3)
}

function2()
