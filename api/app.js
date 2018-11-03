const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const helmet = require('helmet')
const mysql = require('mysql')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const passport = require('passport')
const expressValidator = require('express-validator')
const routes = require('./src/routes/routes')

const port = process.env.PORT || 3030

app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())
// body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// express validator for form data validation
app.use(expressValidator())

routes(app)

app.get('*', (req, res) => {
  res.status(404).send('OOPS! Page not found!')
})

// Load router
// const register = require('./routers/signupin/register')
// const signin = require('./routers/signupin/signin')

// app.use('/register', register)
// app.use('/signin', signin)

/*eslint no-console: "off"*/
app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
