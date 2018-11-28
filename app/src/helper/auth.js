const express = require('express')
const router = express()
const fetch = require('isomorphic-unfetch')
const jwt = require('jsonwebtoken')

const validateJWT = toke => {
  //  call jwt validation ap
  // if validate return netx to server the request otherwise redirect customer to the login page
}

const apiUrl = process.env.API_URL || 'http://localhost:3030'
const checkJWTEndpoint = `${apiUrl}/validJWT`

router.post('/', async (req, res, next) => {
  console.log('from server jwt test')
  // const jwt = req.headers
  // const response = fetch(checkJWTEndpoint, {
  //   method: post,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ jwt }),
  // })
})

modules.exports = router
