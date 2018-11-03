const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: process.env.LIMIT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB
})
/* eslint no-console:"off" */
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }

  if (connection) {
    connection.release()
    console.log('db connected from middleware')
  }

  return
})

module.exports = pool
