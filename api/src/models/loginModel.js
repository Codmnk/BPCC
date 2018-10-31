// INSTALL REDIS
// SET UP REDIS CONNECION

const jwt = require('jsonwebtoken')
const redis = require('redis')
const bcrypt = require('bcryptjs')

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

const handleSignin = () => {
  //to do
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
  signinAuthentication: signinAuthentication,
}
