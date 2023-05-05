import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import CounterScreen from './screens/CounterScreen'
import DummyCounterScreen from './screens/DummyCounterScreen'
import Navigation from './components/Navigation'
import ProductListScreen from './screens/ProductListScreen'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/counter" component={CounterScreen} />
            <Route path="/dummy-counter" component={DummyCounterScreen} />
            <Route path="/products" component={ProductListScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
