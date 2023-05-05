const person = {}

const submitData = (e) => {
  console.log('form submitted')
  // console.log(e)
  // e.target => form
  // e.target.elements => form child elements
  // e.target.elements.personName => input element having name = 'personName'
  // e.target.elements.personName.value => user's input in personName input box
  const personName = e.target.elements.personName.value
  const address = e.target.elements.address.value
  const phone = e.target.elements.phone.value
  const email = e.target.elements.email.value

  console.log(`person name: ${personName}`)
  console.log(`address: ${address}`)
  console.log(`phone: ${phone}`)
  console.log(`email: ${email}`)

  person.name = personName
  person.address = address
  person.phone = phone
  person.email = email

  // prevent default submission
  e.preventDefault()

  // render the person details
  render()
}

const render = () => {
  const template = (
    <div>
      <h3>App3</h3>
      <form onSubmit={submitData}>
        <div>
          name: <input type="text" name="personName" />{' '}
        </div>

        <div>
          address: <input type="text" name="address" />{' '}
        </div>

        <div>
          phone: <input type="text" name="phone" />{' '}
        </div>

        <div>
          email: <input type="text" name="email" />{' '}
        </div>

        <button type="submit">Submit</button>
      </form>
      <hr />
      <div>
        <h5>Person</h5>
        {person.name && <div>name: {person.name}</div>}
        {person.address && <div>address: {person.address}</div>}
        {person.phone && <div>phone: {person.phone}</div>}
        {person.email && <div>email: {person.email}</div>}
      </div>
    </div>
  )

  ReactDOM.render(template, document.getElementById('app'))
}

render()
