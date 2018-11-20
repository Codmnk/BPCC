import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMilldeware from 'redux-thunk'
import pageMapReducer from '../reducers/pageMapReducer'

//initial state
// import startState from './initialStore'
const startState = {
  // pageInfo: {
  //   query: { slug: '' },
  //   path: '',
  // },
}

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
