class CounterComponent extends React.Component {
  constructor(props) {
    super(props)

    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)

    this.state = {
      counter: 0,
    }

    console.log('inside constructor')
  }

  onIncrement() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      }
    })
  }

  onDecrement() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      }
    })
  }

  // componentWillMount() {
  //   console.log('component will mount')
  // }

  // will get called at the begining of lifecycle
  componentDidMount() {
    console.log('component did mount')

    // if present, load the previous value from local storage
    // NOTE: local storage value will be always in the form of string, so convert it to integer
    this.setState({
      counter: sessionStorage['counter']
        ? parseInt(sessionStorage['counter'], 10)
        : 0,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')

    // console.log(prevProps)
    // console.log(prevState)
    // console.log(this.state)

    if (prevState.counter != this.state.counter) {
      // persist the state
      sessionStorage.setItem('counter', this.state.counter)
    }
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>Counter App</h1>
          <p>Counter: {this.state.counter}</p>
        </div>
        <div className="title">
          <button onClick={this.onIncrement} className="btn btn-warning">
            +1
          </button>
          <button onClick={this.onDecrement} className="btn btn-warning">
            -1
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<CounterComponent />, document.getElementById('app'))
