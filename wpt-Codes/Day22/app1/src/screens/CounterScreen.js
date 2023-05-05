import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { increment, decrement, reset } from '../actions/counterActions'

const CounterScreen = (props) => {
  // read the current value from store
  const counter = useSelector((state) => state.counter)

  // get the dispatch function reference
  // used to perform an action
  const dispatch = useDispatch()

  const onIncrement = () => {
    dispatch(increment())
  }

  const onDecrement = () => {
    dispatch(decrement())
  }

  const onReset = () => {
    dispatch(reset())
  }

  return (
    <div>
      <Header title="Counter" />
      <h3>Current Counter = {counter}</h3>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>reset</button>
    </div>
  )
}

export default CounterScreen
