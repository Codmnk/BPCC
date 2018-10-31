const { register } = require('../controllers/registerController')
const { signinAuthentication } = require('../controllers/loginController')
const routes = app => {
  //  handel routes and pass to controller

  // Register
  app
    .route('/register')
    .get((req, res, next) => {
      //middleware
      //req.originalUrl request come from the url
      /* eslint no-console: "off" */
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)

      res.status(204).send()
      next()
    })
    .post((req, res) => {
      register(req, res)
    })
}

//Login
app.route('/login').post(signinAuthentication)

//expose routes
module.exports = routes
