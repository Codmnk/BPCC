import { IS_LOGED_IN } from '../constants'

const initialState = {
  customer: {},
}
const customerReducer = (state = initialState, action) => {
  const { type, customer } = action
  switch (type) {
    case IS_LOGED_IN:
      return {
        ...state,
        customer,
      }
      break

    default:
      return state
  }
}

export default customerReducer
