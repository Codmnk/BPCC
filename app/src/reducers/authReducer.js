import { LOGIN_SUBMIT } from '../constants'

const initialState = {
  isSignedIn: false,
}

export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return { ...state, isSignedIn: false }
      break
    default:
      return state
  }
}
