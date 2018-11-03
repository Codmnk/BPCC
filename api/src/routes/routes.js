const { register } = require('../controllers/registerController')
const { signinAuthentication } = require('../controllers/loginController')
const { registrationValidation } = require('../middlewares/schemaValidator')
const routes = app => {
  //  handel routes and pass to controller

  // Register
  app.route('/register').post(registrationValidation, (req, res) => {
    register(req, res)
  })

  //Login
  // app.route('/login').post(signinAuthentication)
}

//expose routes
module.exports = routes
