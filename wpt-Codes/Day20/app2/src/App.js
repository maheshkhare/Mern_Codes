import './App.css'
import About from './components/About'
import Search from './components/Search'
import Products from './components/Products'
import Profile from './components/Profile'
import Orders from './components/Orders'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>My Application</h1>
      <Router>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/profile">Profiles</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/orders" component={Orders} />
          <Route path="/search" component={Search} />
          <Route path="/products" component={Products} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
