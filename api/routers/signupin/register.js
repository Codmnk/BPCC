const express = require('express')
const router = express.Router()

const userLib = require('../../lib/user/userLib')

router.post('/', async (req, res) => {
  let now = Date.now()
  let frmData = {}
  // Receive form data and sanitize
  frmData.uFirstName = req
    .sanitize('fname')
    .escape()
    .trim()
  frmData.uLastName = req
    .sanitize('lname')
    .escape()
    .trim()
  frmData.uEmail = req
    .sanitize('email')
    .escape()
    .trim()
  frmData.uPassword = req
    .sanitize('pass')
    .escape()
    .trim()
  frmData.uMobile = req
    .sanitize('mob')
    .escape()
    .trim()
  frmData.uProfileImg = req
    .sanitize('img')
    .escape()
    .trim()

  // check if the user already exist
  // const isEmailDuplicate = await userLib.uniqueEntryCheck(
  //   'Email',
  //   frmData.uEmail,
  // )
  // isEmailDuplicate.then(result => {
  //   if (result) {
  //     res.send('email is already used.')
  //   }
  // })

  // const isMobileDuplicate = await userLib.uniqueEntryCheck(
  //   'Mobile',
  //   frmData.uMobile,
  // )
  // isMobileDuplicate.then(result => {
  //   if (result) {
  //     res.send('email is already used.')
  //   }
  // })

  const result = await userLib.putUser(frmData)
  console.log(result)
  res.json({ result })
})

module.exports = router
