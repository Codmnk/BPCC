// TODO: send a email verification link to verify user and active the user account

const { uniqueEntryCheck, createUser, getUser } = require('../models/registerModel')

const registerController = async (req, res, next) => {
  let frmData = req.body

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
  registerController: registerController
}
