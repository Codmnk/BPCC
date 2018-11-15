import { LOGIN_SUBMIT } from '../constants'

const initialState = {
    isSignedIn = false
}

export const userLogin = (state = initialState, action = {}) => {
    switch(action.type) {
        case LOGIN_SUBMIT :
            return ({ ...state, isSignedIn: false})
    }
}