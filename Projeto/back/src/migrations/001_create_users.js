
/*
    Aqui será uma migration, que é basicamente o mesmo processo do Laravel
    é um codigo onde executa a criação, atualização, ou inserção de dados
    automaticamente no banco de dados,
    a tabela do usuario é composta pelo
    id
    nome
    email
    senha 
    salt <- isso irá servir para criptografia

*/


export default function up(db){
    db.prepare(`
        
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            salt TEXT NOT NULL
        )
        
    `).run();
}