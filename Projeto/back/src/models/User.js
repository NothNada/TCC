import db from "../database/connection.js";


/*

    Aqui:
        Os models eles vão servir para controlar o banco de dados, 
        é como se cada model fosse uma tabela do banco de dados
        aqui que terá execução do SQL

*/

function findAll() {
  /* 
      Aqui com o sqlite3 ficaria

      db.all("SELECT * FROM users", [], (err, rows) => {
          if (err) {
              throw err;
          }
          console.log(rows);
      });

      Perceba que não usa o prepare, o prepare ele protege contra SQLInjection

  */
  return db.prepare("SELECT * FROM users").all();
}

function findById(id) {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(id);
}

function findByEmail(email) {
  return db.prepare('SELECT * FROM users WHERE EMAIL = ?').get(email);
}

function create(name, email, password) {
  return db
    .prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)")
    .run(name, email, password);
}

export default { findAll, findById, findByEmail, create };
