// data types

// all data types in JS are inferred
// inferred: [ will be dynamically assigned to the variable by inspecting value at the time ]

// number
const num = 100
console.log('num = ', num)
console.log('data type of num = ', typeof num)

// number
const salary = 5.6
console.log('salary = ', salary)
console.log('data type of salary = ', typeof salary)

// string
const firstName = 'steve'
console.log('firstName = ', firstName)
console.log('data type of firstName = ', typeof firstName)

// string
const lastName = 'Jobs'
console.log('lastName = ', lastName)
console.log('data type of lastName = ', typeof lastName)

// string
const address = `home number 100,
blah blah city,
blah blah blah state,
blah blah blah blah country,`
console.log('address = ', address)
console.log('data type of address = ', typeof address)

// boolean
const canVote = true
console.log('canVote = ', canVote)
console.log('data type of canVote = ', typeof canVote)

// object
const person = {
  name: 'person1',
  address: 'pune',
  email: 'person1@test.com',
  phone: '+9123432243',
}
console.log('person = ', person)
console.log('type of person = ', typeof person)

// undefined
let myvar
console.log('mtvar = ', myvar)
console.log('type ofmtvar = ', typeof myvar)
