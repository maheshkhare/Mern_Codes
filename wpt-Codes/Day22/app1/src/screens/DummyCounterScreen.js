import { useSelector } from 'react-redux'
import Header from '../components/Header'

const DummyCounterScreen = (props) => {
  const counter = useSelector((state) => state.counter)

  return (
    <div>
      <Header title="Dummy Counter" />
      <h5>Current counter = {counter}</h5>
    </div>
  )
}

export default DummyCounterScreen
