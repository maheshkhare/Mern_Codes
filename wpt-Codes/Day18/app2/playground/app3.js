class Counter extends React.Component {
  constructor(props) {
    super(props)

    // binding the methods to the class
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onReset = this.onReset.bind(this)

    // this.props is a readonly object
    // component CAN NOT change props

    // create a state for this component
    this.state = {
      counter: 0,
    }
  }

  onIncrement() {
    console.log('incrementing counter by one')
    // console.log(`counter = ${this.state.counter}`)

    // update the state
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      }
    })
  }

  onDecrement() {
    console.log('decrementing counter by one')

    // update the state
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      }
    })
  }

  onReset() {
    console.log('setting counter to zero')

    // update the state
    this.setState((prevState) => {
      return {
        counter: 0,
      }
    })
  }

  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.onDecrement}>-1</button>
        <button onClick={this.onIncrement}>+1</button>
        <button onClick={this.onReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter title="Counter app title" />,
  document.getElementById('app')
)
