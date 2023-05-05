console.log('inside app1.js')

// getting the values from variables
const personName = 'person1'
const address = 'pune'
const phone = '+91232433'
const email = 'person1@test.com'

const template = (
  <div>
    <h3>App1</h3>
    <div>name: {personName}</div>
    <div>address: {address}</div>
    <div>phone: {phone}</div>
    <div>email: {email}</div>
  </div>
)

const root = document.getElementById('app')
ReactDOM.render(template, root)
