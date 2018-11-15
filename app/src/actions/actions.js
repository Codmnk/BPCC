import { LOGIN_SUBMIT } from '../constants'

export const userLogin = frmData => ({
  type: LOGIN_SUBMIT,
  payload: frmData,
})
