const redis = require('redis')
const jwt = require('jsonwebtoken')

const { loginValidation } = require('./schemaValidator')
const { handleSignin } = require('../models/loginModel')

// const { getAuthTokenId, handleSignin, crateSessions } = require('../models/loginModel')
// const { loginValidation } = require('../middlewares/schemaValidator')
// SETUP REDIS:
const redisClient = redis.createClient(process.env.REDIS_URI)

const getAuthTokenId = (req, res) => {
  const { authorization } = req.headers

  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(400).json('Unauthorized')
    }
    return res.json({ id: reply })
  })
}

const signToken = email => {
  const jwtPayload = { email }
  return jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '2 days' })
}

const setToken = (key, value) => {
  return Promise.resolve(redisClient.set(key, value))
}
const createSession = user => {
  //JWT TOKEN, RETURN USER DATA
  const { uEmail, uId } = user
  const token = signToken(uEmail)
  return setToken(token, uId)
    .then(() => {
      return { success: 'true', userId: uId, token }
    })
    .catch(console.log)
}

// Check for authentication
const loginAuthentication = (req, res) => {
  const { authorization } = req.headers

  return authorization
    ? getAuthTokenId(req, res)
    : handleSignin(req.body)
        .then(data => {
          const { uId, uEmail } = data[0]
          return uId && uEmail ? createSession(data[0]) : Promise.reject('Failed to return the session token')
        })
        .then(session => res.status(200).json(session))
        .catch(err => res.status(400).json(err))
}

module.exports = {
  loginAuthentication: loginAuthentication
}
