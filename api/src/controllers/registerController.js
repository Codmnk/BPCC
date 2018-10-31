const { uniqueEntryCheck, createUser, getUser } = require('../models/registerModel')

// SENATIZE TEH USER Data
// SEND DATA TO REGISTER MODEL TO STORE IN TEH DATABASE
// SEND ACCOUNT CREATION CONFIRMATION EMAIL TO VERY EMAIL AND PHONE

const register = async (req, res) => {
  let frmData = req.body
  if (!frmData.uFirstName || !frmData.uEmail || !frmData.uPassword) {
    return res.status(400).json('incorrect form submission')
  }
  // Receive form data and sanitize
  // frmData.uFirstName = req
  //   .sanitize('fname')
  //   .escape()
  //   .trim()
  // frmData.uLastName = req
  //   .sanitize('lname')
  //   .escape()
  //   .trim()
  // frmData.uEmail = req
  //   .sanitize('email')
  //   .escape()
  //   .trim()
  // frmData.uPassword = req
  //   .sanitize('pass')
  //   .escape()
  //   .trim()
  // frmData.uMobile = req
  //   .sanitize('mob')
  //   .escape()
  //   .trim()
  // frmData.uProfileImg = req
  //   .sanitize('img')
  //   .escape()
  //   .trim()

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
  register: register,
}
