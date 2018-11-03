const { loginAuthentication } = require('../middlewares/authMiddleware')

const loginController = (req, res) => {
  //TODO: check authorize header, if exist, verify check in redis and response

  loginAuthentication(req, res) //return jwt token

  //TODO: check authorize header doesn't exist verify credentials and issue the jwt and response
  // res.send('hit the login controller')
}

module.exports = {
  loginController: loginController
}
