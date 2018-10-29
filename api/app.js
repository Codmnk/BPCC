const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const mysql = require('mysql')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const passport = require('passport')
// const expressValidator = require('express-validator')
const publicRoutes = require('./src/routers/publicRoutes')
const privateRoutes = require('./src/routers/privateRoutes')

const port = process.env.PORT || 3030

app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())
// body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// express validator for form data validation
// app.use(expressValidator())

publicRoutes(app)
privateRoutes(app)

app.get('/', (req, res) => {
  res.send('OOPS! Nothing to show!')
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
