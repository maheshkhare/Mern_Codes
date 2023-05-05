import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'
import AddNoteScreen from './screens/AddNoteScreen'
import AboutScreen from './screens/AboutScreen'
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/signin" component={SigninScreen} />
            <Route path="/signup" component={SignupScreen} />
            <Route path="/home" component={HomeScreen} />
            <Route path="/add-note" component={AddNoteScreen} />
            <Route path="/about" component={AboutScreen} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
