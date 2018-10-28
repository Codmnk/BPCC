const pool = require('../../config/database')

//sql prepare statement for
// var sql = "SELECT * FROM ?? WHERE ?? = ?";
// var inserts = ['users', 'id', userId];
// sql = mysql.format(sql, inserts);

module.exports = {
  uniqueEntryCheck: (key, value) => {
    return new Promise((resolve, reject) => {
      if (key === 'Email') {
        pool.query(
          'SELECT uId FROM user WHERE uEmail = ?',
          [value],
          (err, result) => {
            if (result) {
              console.log(result)
              resolve(true)
            }
          },
        )
      } else if (key === 'Mobile') {
        pool.query(
          'SELECT uId FROM user WHERE uMobile = ?',
          [value],
          (err, result) => {
            if (result) {
              console.log(result)
              resolve(true)
            }
          },
        )
      } else {
        resolve(false)
      }
    })
  },

  getUser: userId => {
    return new Promise((resolve, reject) => {
      const query = 'select * from users'
      pool.query(query, (err, result, fields) => {
        if (err) res.json({ Error: { Message: 'Faile to query the data' } })

        resolve(result)
      })
    })
  },

  putUser: async frmData => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO users SET ?', frmData, (err, result) => {
        if (err) {
          console.log(err)
          reject(err)
        }
        if (result) {
          console.log(result.insertId)
          resolve(result.insertId)
        }
      })
    })
  },
}
