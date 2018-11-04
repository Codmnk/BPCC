const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })

  server.get('/', (req, res) => {
    return app.render(req, res, '/', { id: req.params.id })
  })

  server.get('/login', (req, res) => {
    return app.render(req, res, '/login', { id: req.params.id })
  })

  server.get('/register', (req, res) => {
    return app.render(req, res, '/register', { id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
