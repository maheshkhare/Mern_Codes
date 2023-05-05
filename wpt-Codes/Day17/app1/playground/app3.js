console.log('inside app3.js')

// getting values from an array
const persons = [
  'person1',
  'person2',
  'person3',
  'person4',
  'person5',
  'person6',
  'person7',
]

const template = (
  <div>
    <h3>App3</h3>

    <p>person1</p>
    <p>person2</p>
    <p>person3</p>
    <p>person4</p>

    <hr />

    {persons.map((person) => {
      return <p>{person}</p>
    })}
  </div>
)

const root = document.getElementById('app')
ReactDOM.render(template, root)
