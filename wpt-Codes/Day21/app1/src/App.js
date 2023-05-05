import logo from './logo.svg'
import './App.css'
import { createStore } from 'redux'
// import { useSelector, useDispatch } from 'react-redux'

// action
const increment = () => {
  return { type: 'increment' }
}

const decrement = () => {
  return { type: 'decrement' }
}

// reducer
const counterReducer = (state = 0, action) => {
  console.log('inside counter reducer')
  console.log(action)
  console.log(state)
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return 0
  }
}

// store
let store = createStore(counterReducer)

// dispatch
store.subscribe(() => {
  console.log(`updated store: `, store.getState())
})
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
