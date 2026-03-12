import User from "../models/User.js";

/*

  Aqui no service terá
  - A maior parte da logica, aqui sim lidara com tokens e autenticação
  - Hash de senha
  - logica de negocio e outras coisas

*/



function getUsers() {
  return User.findAll();
}

function createUser(name, email) {
  if (!name || !email) {
    throw new Error("Nome e email obrigatórios");
  }

  return User.create(name, email);
}

export default { getUsers, createUser };