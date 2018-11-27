import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMilldeware from 'redux-thunk'
import pageMapReducer from '../reducers/pageMapReducer'

//initial state
const startState = {}

const rootReducer = combineReducers({
  Page: pageMapReducer,
})

//create Store
export const initStore = (initialState = startState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMilldeware))
  )
}
