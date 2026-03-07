const express = require('express')

const bdCheck = require('./utils/bdCheck')
const ReadUsers = require('./models/ReadUsers')
const UserController = require('./controllers/userController')

const app = express()
const port = 3000


bdCheck.check()

//UserController.addUser({name : "name"})
//UserController.removeUser({id : "id"}
//UserController.updateUser({ id: "2", name: "newName" })

const jsonUsers = ReadUsers.getAll().then(res => {//remover isso depois!
  console.log("all Users: ", res)
});


app.listen(port, () => {
  console.log("EX em express")

})




/*
    Vinin, o .gitignore não é pra remover, eu adicionei para quando subir o projeto pro github, não subir o node modules junto
    e quando vc iniciar o projeto no seu pc, vc vai precisar usar npm i, pra instalar os pacotes do projeto
    vc precisa usar o npm i, na pasta front/ e na pasta back/, depois pesquisa um bgl chamado nodemon, ele é bom pra krl
    serve pra quando atualizar o codigo, ele rodar o npm run dev automaticamente, ai vc pode ficar mudando o codigo e já
    atualiza o servidor, e vc adiciona ele no package.json na aba "scripts"

    blz já adicionei no package.json 
*/
