const template = (
  <div>
    <h2>Person</h2>
    <div>
      <strong>name: </strong> person1
    </div>
    <div>
      <strong>address: </strong> pune
    </div>
    <div>
      <strong>phone: </strong> +91234224
    </div>
  </div>
)
const root = document.getElementById('app')
ReactDOM.render(template, root)
