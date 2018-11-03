const bcrypt = require('bcryptjs')

const hashPassword = pass => {
  const hashPass = bcrypt.hashSync(pass, 10)
  return hashPass
}

const hashVerify = (userPass, hashPass) => {
  const isValid = bcrypt.compareSync(userPass, hashPass)
  return isValid
}

module.exports = {
  hashPassword: hashPassword,
  hashVerify: hashVerify
}
