const pool = require('../config/database') //db connection available globally

//sql prepare statement for
// var sql = "SELECT * FROM ?? WHERE ?? = ?";
// var inserts = ['users', 'id', userId];
// sql = mysql.format(sql, inserts);

const uniqueEntryCheck = (key, value) => {
  return new Promise((resolve, reject) => {
    if (key === 'Email') {
      pool.query('SELECT COUNT(*) as count FROM users WHERE uEmail = ?', [value], (err, result) => {
        if (err) {
          reject('Failed to check the entry')
        }
        if (result[0].count > 0) {
          resolve('Exist')
        }
        resolve('Not Found')
      })
    }

    // if (key === 'Mobile') {
    //   pool.query('SELECT uId FROM users WHERE uMobile = ?', [value], (err, result) => {
    //     if (err) reject(err)

    //     resolve(result)
    //   })
    // }
  })
}

const createUser = frmData => {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO users SET ?', [frmData], (err, result) => {
      if (err) {
        reject(err)
      }
      if (result) {
        resolve(result.insertId)
      }
    })
  })
}

const getUser = userId => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE uId = ?', [userId], (err, result) => {
      if (err) reject(err)

      resolve(result)
    })
  })
}
module.exports = {
  uniqueEntryCheck: uniqueEntryCheck,
  createUser: createUser,
  getUser: getUser,
}
