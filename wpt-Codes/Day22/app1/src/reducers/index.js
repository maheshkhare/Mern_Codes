import counterReducer from './counterReducer'
import loggedInReducer from './loggedInReducer'
import cartReducer from './cartReducer'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  counter: counterReducer,
  isLoggedIn: loggedInReducer,
  cart: cartReducer,
})

export default reducers
