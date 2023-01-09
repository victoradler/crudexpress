const database = require("../connection/databaseConnection");

//Função para listar produtos da tabela.
async function listar() {
  let sql = "SELECT * FROM tb_produto";
  return await database.excecutarBanco(sql);
}

async function cadastrar(nome, quantidade, descricao, categoria) {
  let sql = `INSERT INTO tb_produto (nome,quantidade, descricao, categoria) VALUES ('${nome}', '${quantidade}', '${descricao}', '${categoria}' )`;

  await database.excecutarBanco(sql);
}

async function excluir(id) {
  let sql = "DELETE FROM tb_produto WHERE id=" + id;

  await database.excecutarBanco(sql);
}

module.exports = {
  listar,
  cadastrar,
  excluir,
};
