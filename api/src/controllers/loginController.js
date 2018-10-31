const { getAuthTokenId, handleSignin, crateSessions } = require('../models/loginModel')

const signinAuthentication = (req, res) => {
  const { uEmail, uPass } = req.body
  const { authorization } = req.headers

  return authorization
    ? getAuthTokenId(req, res)
    : handleSignin(req)
        .then(data => {
          return data.id && data.email ? crateSessions(data) : Promise.reject(data)
        })
        .then(session => res.json(session))
        .catch(err => res.status(400).json(err))
}

module.exports = {
  signinAuthentication: signinAuthentication,
}
