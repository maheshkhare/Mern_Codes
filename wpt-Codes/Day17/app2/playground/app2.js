let count = 0

const increment = () => {
  count += 1
  console.log(`incrementing by one: ${count}`)

  // reload the UI
  render()
}

const decrement = () => {
  count -= 1
  console.log(`decrementing by one: ${count}`)

  // reload the UI
  render()
}

const double = () => {
  count *= 2
  render()
}

const triple = () => {
  count *= 3
  render()
}

const reset = () => {
  count = 0
  render()
}

const render = () => {
  const template = (
    <div>
      <h3>App2</h3>

      <div>
        <strong>Counter: {count}</strong>
      </div>

      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <hr />
      <button onClick={double}>double</button>
      <button onClick={triple}>triple</button>
      <button onClick={reset}>reset</button>
    </div>
  )

  ReactDOM.render(template, document.getElementById('app'))
}

render()
