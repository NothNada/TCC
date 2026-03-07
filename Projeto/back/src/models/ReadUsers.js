const bd = require('../config/database')


const ReadUsers = {
  getAll: async () => {
    try {
      const [rows] = await bd.query('select * from users')
      return rows
    } catch (error) {
      console.error('erro ao ler table ', error)
    }

  }

}

module.exports = ReadUsers
