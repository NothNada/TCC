import UserService from "../services/userService.js";

/* 

  Aqui no controller, terá
  - manipulação da requisição do usuario
  - chamada do service
  - envio do http code ( 400, 505, 200, etc... )
  
*/



function getUsers(req, res) {
  const users = UserService.getUsers();
  res.json(users);
}

function createUser(req, res) {
  const { name, email } = req.body;

  try {
    const result = UserService.createUser(name, email);

    res.status(201).json({
      message: "Usuário criado",
      id: result.lastInsertRowid
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export default { getUsers, createUser };