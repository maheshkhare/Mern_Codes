import React from 'react'
import Header from './Header'

export default class CounterApp extends React.Component {
  constructor(props) {
    super(props)

    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)

    this.state = {
      counter: 0,
    }
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

  render() {
    return (
      <div>
        <Header
          title="Counter App"
          subtitle="this is a class based component"
        />

        <div className="counter">
          <h4>Counter: {this.state.counter}</h4>
          <button onClick={this.onIncrement} className="btn btn-success">
            +1
          </button>
          <button onClick={this.onDecrement} className="btn btn-success">
            -1
          </button>
        </div>
      </div>
    )
  }
}
