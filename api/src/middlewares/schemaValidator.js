const Joi = require('joi')
const { loginSchema, registerSchema } = require('../helpers/Schema')

const loginValidation = (req, res, next) => {
  Joi.validate(req.body, loginSchema, (err, data) => {
    if (err) {
      console.log(err)
      res.status(400).send({ Message: 'Invalid submition' })
    }
    if (data) {
      req.body = data
      next()
    }
  })
}
/* eslint no-console: "off"*/
const registrationValidation = (req, res, next) => {
  return Joi.validate(req.body, registerSchema, (err, data) => {
    if (err) {
      res.status(400).send({ Message: 'Invalid submition' })
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
