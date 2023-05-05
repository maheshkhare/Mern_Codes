let items = []

const markItemComplete = (itemToRemove) => {
  // remove the item from items array
  // for (let index = 0; index < items.length; index++) {
  //   const item = items[index]
  //   if (item.id == itemToRemove.id) {
  //     // found the item to be deleted
  //     items.splice(index, 1)
  //     break
  //   }
  // }

  items = items.filter((item) => item.id != itemToRemove.id)
  render()
}

const addItem = (e) => {
  const title = e.target.elements.itemtext.value
  items.push({
    id: items.length + 1,
    status: 'open',
    title,
  })

  // clear the input
  e.target.elements.itemtext.value = ''
  e.preventDefault()
  render()
}

const render = () => {
  const template = (
    <div>
      <div className="title">
        <h2>ToDo App</h2>
        <p>what do you want to do today ?</p>
      </div>

      <div className="add-todo">
        <form onSubmit={addItem}>
          <div className="input-group mb-3">
            <textarea
              placeholder="enter your todo item here"
              name="itemtext"
              className="form-control"
              rows="3"></textarea>

            <button
              className="btn btn-success"
              type="submit"
              id="button-addon2">
              Add
            </button>
          </div>
        </form>
      </div>

      {items.length > 0 && (
        <div className="items-list">
          {items.map((item) => {
            return (
              <div className="item">
                <div className="input-group mb-3">
                  <input
                    readOnly
                    value={item.title}
                    type="text"
                    className="form-control"></input>
                  <button
                    onClick={() => {
                      markItemComplete(item)
                    }}
                    className="btn btn-danger"
                    type="button"
                    id="button-addon2">
                    Complete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div className="footer">
        <p>copyrighted to Sunbeam</p>
      </div>
    </div>
  )

  ReactDOM.render(template, document.getElementById('app'))
}

render()
