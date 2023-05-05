// object destructuring
// - extracting the properties from an object

function function1() {
  const person = {
    name: 'person1',
    address: 'pune',
    phone: '+9121334224',
    email: 'person1@test.com',
  }

  // insert into person (name, address, phone, email) values ( .. )
  const query1 = `insert into person (name, address, phone, email) values 
        ('${person.name}', '${person.address}', '${person.phone}', '${person.email}')`
  console.log(query1)

  console.log('------------------------------------')

  // destructuring an object
  const { name, address, phone, email } = person
  console.log(`name: ${name}`)
  console.log(`address: ${address}`)
  console.log(`phone: ${phone}`)
  console.log(`email: ${email}`)

  console.log('------------------------------------')

  const query2 = `insert into person (name, address, phone, email) values ('${name}', '${address}', '${phone}', '${email}')`
  console.log(query2)
}

// function1()

function function2() {
  const { model, company, price } = {
    model: 'iPhone',
    company: 'Apple',
    price: 144000,
    cpu: 'A12 bionic',
    screen: '6 inch',
  }
  console.log(`model = ${model}`)
  console.log(`company = ${company}`)
  console.log(`price = ${price}`)
}

function2()
