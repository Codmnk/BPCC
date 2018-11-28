import { combineReducers } from 'redux'

import pageMapReducer from './pageMapReducer'
import customerReducer from './customerReducer'

const rootReducer = combineReducers({
  Page: pageMapReducer,
  Customer: customerReducer,
})

export default rootReducer
// export default pageMapReducer
