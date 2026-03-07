const bd = require('../config/database')

async function check() {
  try {
    const conn = await bd.getConnection();
    conn.release()
    console.log('conexão funcionou!')

  } catch (err) {
    console.error('erro ao conectar no mysql:', err.message);
  }
}

module.exports = { check }
