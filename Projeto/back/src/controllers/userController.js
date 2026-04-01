import UserService from "../services/userService.js";

/* 

  Aqui no controller, terá
  - manipulação da requisição do usuario
  - chamada do service
  - envio do http code ( 400, 505, 200, etc... )
  
*/



function getUsers(req, res) {
  const users = UserService.getUsers();
  console.log(users)
  res.json(users);
}

async function createUser(req, res) {
  const { name, email, password } = req.body;

  try {
    const result = await UserService.createUser(name, email, password);

    res.status(201).json({
      message: "Usuário criado",
      id: result.lastInsertRowid
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body

  try {
    const result = await UserService.loginUser(email, password)

    if (result) res.status(200).json({
      message: "usuario logado!",
    })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }

}

export default { getUsers, createUser, loginUser };
