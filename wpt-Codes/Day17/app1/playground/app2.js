console.log('inside app2.js')

// getting values from an object
const person = {
  name: 'person2',
  address: 'pune',
  phone: '+9134234',
  email: 'person2@test.com',
}

const template = (
  <div>
    <h3>App2</h3>
    <div>name: {person.name}</div>
    <div>address: {person['address']}</div>
    <div>phone: {person.phone}</div>
    <div>email: {person['email']}</div>
  </div>
)

const root = document.getElementById('app')
ReactDOM.render(template, root)
