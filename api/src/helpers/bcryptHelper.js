const bcrypt = require('bcrypt-nodejs')

const hashPassword = pass => {
  const hashPass = bcrypt.hashSync(pass)
  return hashPass
}

const hashVerify = pass => {
  const isValid = bcrypt.compareSync(pass, hashPassword)
  return isValid
}

module.exports = {
  hashPassword: hashPassword,
  hashVerify: hashVerify,
}
