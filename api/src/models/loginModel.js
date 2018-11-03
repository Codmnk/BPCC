const pool = require('../config/database')

const jwt = require('jsonwebtoken')
const redis = require('redis')

const { hashVerify } = require('../helpers/bcryptHelper')

const signToken = email => {
  const jwtPayload = { email }
  return jwt.sign(jwtPayload, 'jwt-super-secret')
}

const setToken = (key, value) => {
  // set jwt in redish with the key-value pair
}
const getAuthTokenId = () => {
  // to do
}

const handleSignin = user => {
  const { uEmail, uPassword } = user

  if (!uEmail || !uPassword) {
    console.log(' incorrect user')
    return Promise.reject('incorrect credentials')
  }
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE uEmail = ?', [uEmail], async (err, data) => {
      if (err) return reject('Failed to check from databse')

      const isValid = await hashVerify(user.uPassword, data[0].uPassword)

      return !err && data && isValid ? resolve(data) : reject('Incorrect credentials')
    })
  })
}

const crateSessions = user => {
  //JWT WITH USER DATA FOR DOM
  const { uEmail, uId } = user
  const token = signToken(uEmail)
}
const signinAuthentication = () => {
  //to do
}

module.exports = {
  getAuthTokenId: getAuthTokenId,
  handleSignin: handleSignin,
  crateSessions: crateSessions,
  signinAuthentication: signinAuthentication
}
