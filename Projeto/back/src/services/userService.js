const bd = require('../config/database')

const UsersService = {
  addUser: async (data) => {
    const { name } = data

    return bd.query("insert into users (username) values (?)", name)
  },
  removeUser: async (data) => {
    const { id } = data
    return bd.query("delete from users where id = ?", id)
  },
  updateUser: async (data) => {
    const { id, name } = data
    return bd.query("update users set username = ? where id = ? ", [name, id])
  }

}
module.exports = UsersService
