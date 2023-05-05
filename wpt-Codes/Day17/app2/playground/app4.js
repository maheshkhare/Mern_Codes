const category = {}

// click event handler for the button
const submitForm = (e) => {
  category.title = e.target.elements.title.value
  category.description = e.target.elements.description.value
  e.preventDefault()

  render()
}

const render = () => {
  const template = (
    <div>
      <h3>App4</h3>
      <form onSubmit={submitForm}>
        <div>
          title: <input type="text" name="title"></input>
        </div>
        <div>
          description: <input type="text" name="description"></input>
        </div>

        <button type="submit">submit</button>
      </form>

      <hr />
      <h4>Category Details</h4>

      {category.title && <div>title: {category.title}</div>}
      {category.description && <div>description: {category.description}</div>}
    </div>
  )

  ReactDOM.render(template, document.getElementById('app'))
}

render()

// category
// = title
// = description
