const UsersServices = require('../services/userService')

const UsersController = {
  addUser: async (req) => {
    //req é enviados pelo o front por POST(eu acho)
    try {
      UsersServices.addUser(req)
    } catch (err) {
      console.log('erro ao adicionar user: ', err)
      throw err
    }
  },
  removeUser: async (req) => {
    try {
      UsersServices.removeUser(req)
    } catch (err) {
      console.log('erro ao remover user: ', err)
    }
  },
  updateUser: async (req) => {
    try {
      UsersServices.updateUser(req)
    } catch (err) {
      console.log('erro no update user: ', err)
    }
  }

}
module.exports = UsersController
