import User from "../models/User.js";

import argon2 from "argon2"

/*

  Aqui no service terá
  - A maior parte da logica, aqui sim lidara com tokens e autenticação
  - Hash de senha
  - logica de negocio e outras coisas

*/



function getUsers() {
  return User.findAll();
}

async function createUser(name, email, password) {
  if (!name || !email) {
    throw new Error("Nome e email obrigatórios");
  }

  const hashSalt = await argon2.hash(password)

  return User.create(name, email, hashSalt);
}

async function loginUser(email, password) {
  if (!email || !password) throw new Error("email e senha são obrigatórios")
  const UserSearch = User.findByEmail(email)
  if (!UserSearch) throw new Error("user não encontrado")

  const isPasswordValid = await argon2.verify(UserSearch.password, password)

  if (!isPasswordValid) throw new Error('senha incorreta')

  return true
}

export default { getUsers, createUser, loginUser };
