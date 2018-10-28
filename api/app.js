const express = require('express')
const app = express()
const mysql = require('mysql')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')
const expressValidator = require('express-validator')

const port = process.env.PORT || 3030

morgan('tiny')
// body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// method override
app.use(methodOverride('_methodOverride'))

// express validator for form data validation
app.use(expressValidator())

app.get('/', (req, res) => {
  res.send('OOPS! Nothing to show!')
})

// Load router
const register = require('./routers/signupin/register')
const signin = require('./routers/signupin/signin')

app.use('/register', register)
app.use('/signin', signin)

app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
