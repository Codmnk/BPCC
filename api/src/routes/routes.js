const { registerController } = require('../controllers/registerController')
const { loginController } = require('../controllers/loginController')

const { registrationValidation } = require('../middlewares/schemaValidator')

const routes = app => {
  //  handel routes and pass to controller

  // Register
  app.route('/register').post(registrationValidation, (req, res) => {
    registerController(req, res)
  })

  // Login
  app.route('/login').post(loginController)
}

//expose routes
module.exports = routes
