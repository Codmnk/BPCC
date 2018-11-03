const Joi = require('joi')

//define the keys as object literal
const uFirstName = Joi.string()
  .required()
  .min(2)
  .max(30)
const uLastName = Joi.string()
  .optional()
  .min(2)
  .max(50)
const uEmail = Joi.string()
  .email()
  .required()

// Password rules
// regex('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,25})')
// ^	The password string will start this way
// (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
// (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
// (?=.*[0-9])	The string must contain at least 1 numeric character
// (?=.[!@#\$%\^&])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
// (?=.{8,})	The string must be eight characters or longer
const uPassword = Joi.string()
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,25})/)
  .required()

const uMobile = Joi.number().optional(
  Joi.number()
    .min(9)
    .max(15)
)

const uProfileImg = Joi.string().optional(
  Joi.string()
    .min(3)
    .max(150)
)

//validate for login data
const loginSchema = Joi.object().keys({
  uEmail: uEmail,
  uPassword: uPassword
})

// validation for register
const registerSchema = Joi.object().keys({
  uFirstName: uFirstName,
  uLastName: uLastName,
  uEmail: uEmail,
  uPassword: uPassword,
  uMobile: uMobile,
  uProfileImg: uProfileImg
})

module.exports = {
  loginSchema: loginSchema,
  registerSchema: registerSchema
}
