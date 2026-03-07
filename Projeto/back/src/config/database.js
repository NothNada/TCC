// arquivo para criar conexão com o mysql

const ip = "127.0.0.1"
const user = "admin"//mudar para root se for usar no windows!!
const password = " "
const db = "bd"

const mysql = require('mysql2/promise')
const connection = mysql.createPool({
  host: ip,
  user: user,
  password: password,
  database: db,
  waitForConnections: true,
  connectionLimit: 10
})
module.exports = connection;


