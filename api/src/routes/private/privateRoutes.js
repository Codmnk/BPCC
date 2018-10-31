const { login } = require('../controllers/loginController')
const authRequired = require('../middlewares/authMiddleware')

const privateRoutes = app => {
  app.route('/private').get((req, res, next) => {
    //middleware
    authRequired(req, res)
    //req.originalUrl request come from the url
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next()
  }, login)
}

module.exports = privateRoutes
