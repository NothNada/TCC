/*

  Aqui, eu não sei oq podemos colocar, provavelmente funções internas da aplicação
  tipo um script para verificar usuarios com senhas fracas ou usuarios sem email sla
  pode ser a pasta para colocarmos os testes automatizados também

  Bem aqui será para rodar as migrations
*/

import db from "../database/connection.js";
import migration1 from "../migrations/001_create_users.js"

const migrations = [
  migration1
] // depois precisamos fazer isso pegar todos os arquivos que estão na pasta migrations/
// eu sei como, mas tô com preguiça


migrations.forEach(m => m(db));



