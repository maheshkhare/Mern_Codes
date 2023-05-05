class App extends React.Component {
  render() {
    const items = [
      { id: 1, title: 'item - 1', status: 'open' },
      { id: 2, title: 'item - 2', status: 'open' },
      { id: 3, title: 'item - 3', status: 'open' },
      { id: 4, title: 'item - 4', status: 'open' },
    ]

    return (
      <div>
        <Header title="ToDo App" subtitle="what do you want to do today?" />
        <AddTodoItem />
        <TodoItemsList items={items} />
        <Footer message="copyrighted to Sunbeam" />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="title">
        <h2>{this.props.title}</h2>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
}

class AddTodoItem extends React.Component {
  render() {
    return (
      <div className="add-todo">
        <form>
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
    )
  }
}

class TodoItemsList extends React.Component {
  render() {
    return (
      <div className="items-list">
        {this.props.items.map((item) => {
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
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>{this.props.message}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
