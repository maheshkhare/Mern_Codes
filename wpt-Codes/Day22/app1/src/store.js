import { applyMiddleware, createStore } from 'redux'
// import reducers from './reducers/index'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

let store = createStore(reducers, composeWithDevTools(applyMiddleware()))

export default store
