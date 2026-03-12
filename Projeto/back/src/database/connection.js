/*
  Troquei o tipo de banco por SQLite
  tem dois jeitos de acessar o SQLite com node.js
  1. sqlite3 - ele acessa normalmente mas é um pouco lento e não tem funções para preparo de consultas
  2. better-sqlite3 - ele possui funções assincronas(que rodam em threads) e possui funções para preparo das consultas
*/


import Database from "better-sqlite3";


/*
  Aqui com o sqlite3 ficaria assim

  const sqlite3 = require("sqlite3").verbose();

  const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
      console.error("Erro ao conectar:", err.message);
    } else {
      console.log("Conectado ao SQLite.");
    }
  });


*/
const db = new Database("database.db");

export default db;