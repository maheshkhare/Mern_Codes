const personName = 'person2'
const age = 41
const address = 'mumbai'
const email = 'person2@test.com'

const template = (
  <div>
    <h4>Person</h4>
    <div>
      <strong>name: </strong> {personName}
    </div>
    <div>
      <strong>age: </strong> {age}
    </div>
    <div>
      <strong>address: </strong> {address}
    </div>
    <div>
      <strong>email: </strong> {email}
    </div>
  </div>
)

const root = document.getElementById('app')
ReactDOM.render(template, root)
