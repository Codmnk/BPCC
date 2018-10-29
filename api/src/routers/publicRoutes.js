const { register } = require('../controllers/registerController')

const publicRoutes = app => {
  app.route('/pub').get((req, res, next) => {
    //middleware
    //req.originalUrl request come from the url
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next()
  }, register)
}

module.exports = publicRoutes
