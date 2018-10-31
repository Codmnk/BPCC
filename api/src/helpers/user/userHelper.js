//sql prepare statement for
// var sql = "SELECT * FROM ?? WHERE ?? = ?";
// var inserts = ['users', 'id', userId];
// sql = mysql.format(sql, inserts);

module.exports = {
  getUser: userId => {
    return new Promise((resolve, reject) => {
      const query = 'select * from users'
      pool.query(query, (err, result, fields) => {
        if (err) res.json({ Error: { Message: 'Faile to query the data' } })

        resolve(result)
      })
    })
  },
}
