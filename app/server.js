const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  // const auth = require('.src/helper/auth')

  server.get('/register', (req, res) => {
    return app.render(req, res, '/register')
  })

  server.get('/', (req, res) => {
    return app.render(req, res, '/', { ...req.params, path: 'home' })
  })

  server.get('/login', (req, res) => {
    return app.render(req, res, '/', { ...req.params, path: 'login' })
  })

  server.get('/earn-money', (req, res) => {
    return app.render(req, res, '/', { ...req.params, path: 'earn-money' })
  })

  server.get(
    '/customer/:slug?',
    /** use auth middleware */ (req, res) => {
      return app.render(req, res, '/', {
        ...req.params,
        path: 'customer',
      })
    }
  )

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
