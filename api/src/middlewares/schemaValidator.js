const Joi = require('joi')
const { loginSchema, registerSchema } = require('../helpers/Schema')

const loginValidation = (req, res) => {
  return Joi.validate(req.body, loginSchema, (err, data) => {
    if (err) {
      res.status(400).send({ Message: 'Invalid login attempted ' })
    } else if (!err && data) {
      req.body = data
    }
  })
}

const registrationValidation = (req, res, next) => {
  return Joi.validate(req.body, registerSchema, (err, data) => {
    if (err) {
      res.status(400).send({ Message: 'Invalid registration submition', err })
    } else if (!err && data) {
      req.body = data
      next()
    }
  })
}

module.exports = {
  loginValidation: loginValidation,
  registrationValidation: registrationValidation
}
