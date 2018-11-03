const { uniqueEntryCheck, createUser, getUser } = require('../models/registerModel')

// SENATIZE TEH USER Data
// SEND DATA TO REGISTER MODEL TO STORE IN TEH DATABASE
// SEND ACCOUNT CREATION CONFIRMATION EMAIL TO VERY EMAIL AND PHONE

const register = async (req, res, next) => {
  let frmData = req.body
  console.log('register is hit')
  try {
    const checkEmail = await uniqueEntryCheck('Email', frmData.uEmail)

    if (checkEmail === 'Exist') {
      res.status(406).json({ Message: 'Email already exist' })
    } else {
      let userId = await createUser(frmData)

      if (userId) {
        const insertedUser = await getUser(userId)
        res.status(200).json(insertedUser)
      }
    }
  } catch (error) {
    console.log(error)
    res.status(503).send({ Message: 'Unable to register' })
  }
}

module.exports = {
  register: register
}
