const mysql = require('mysql2/promise');

async function excecutarBanco (sql) {

     //configurando conexão com o banco de dados.
    const conexao = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database:'fs06_teste'
      });
    
      //aguarda função
      const [results] = await conexao.execute(sql);
    
      return results;
      
      //fechando conexão
      conexao.end();
}

module.exports = {excecutarBanco};